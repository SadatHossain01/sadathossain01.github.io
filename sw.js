// Service Worker for Portfolio Website
// Basic caching strategies for improved performance

const CACHE_NAME = 'portfolio-cache-v1';
const STATIC_ASSETS = [
	'/',
	'/about',
	'/experience',
	'/education', 
	'/skills',
	'/projects',
	'/blogs',
	'/search',
	'/manifest.json',
	'/og-image.svg'
];

// Assets to cache on install
const CRITICAL_ASSETS = [
	'/',
	'/og-image.svg',
	'/logos/no-img.svg'
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then((cache) => {
				console.log('Caching critical assets');
				return cache.addAll(CRITICAL_ASSETS);
			})
			.then(() => {
				// Skip waiting to activate immediately
				return self.skipWaiting();
			})
	);
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames
						.filter((cacheName) => cacheName !== CACHE_NAME)
						.map((cacheName) => caches.delete(cacheName))
				);
			})
			.then(() => {
				// Take control of all pages
				return self.clients.claim();
			})
	);
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
	const { request } = event;
	const url = new URL(request.url);

	// Skip cross-origin requests and non-GET requests
	if (url.origin !== self.location.origin || request.method !== 'GET') {
		return;
	}

	// Strategy for different types of requests
	if (request.destination === 'image') {
		// Images: Cache first, fallback to network
		event.respondWith(cacheFirstStrategy(request));
	} else if (STATIC_ASSETS.some(asset => url.pathname === asset)) {
		// Static pages: Stale while revalidate
		event.respondWith(staleWhileRevalidateStrategy(request));
	} else if (url.pathname.startsWith('/_app/')) {
		// App assets: Cache first
		event.respondWith(cacheFirstStrategy(request));
	} else {
		// Other requests: Network first
		event.respondWith(networkFirstStrategy(request));
	}
});

// Cache first strategy - for assets that rarely change
async function cacheFirstStrategy(request) {
	try {
		const cachedResponse = await caches.match(request);
		if (cachedResponse) {
			return cachedResponse;
		}

		const networkResponse = await fetch(request);
		if (networkResponse.ok) {
			const cache = await caches.open(CACHE_NAME);
			cache.put(request, networkResponse.clone());
		}
		return networkResponse;
	} catch (error) {
		console.log('Cache first strategy failed:', error);
		// Return a fallback response if available
		return new Response('Offline', { status: 503 });
	}
}

// Network first strategy - for dynamic content
async function networkFirstStrategy(request) {
	try {
		const networkResponse = await fetch(request);
		if (networkResponse.ok) {
			const cache = await caches.open(CACHE_NAME);
			cache.put(request, networkResponse.clone());
		}
		return networkResponse;
	} catch (error) {
		console.log('Network first strategy fallback to cache:', error);
		const cachedResponse = await caches.match(request);
		return cachedResponse || new Response('Offline', { status: 503 });
	}
}

// Stale while revalidate - serve cache immediately, update in background
async function staleWhileRevalidateStrategy(request) {
	const cache = await caches.open(CACHE_NAME);
	const cachedResponse = await cache.match(request);

	// Fetch fresh version in background
	const fetchPromise = fetch(request)
		.then((networkResponse) => {
			if (networkResponse.ok) {
				cache.put(request, networkResponse.clone());
			}
			return networkResponse;
		})
		.catch(() => cachedResponse); // Fallback to cache on network error

	// Return cached version immediately, or wait for network if no cache
	return cachedResponse || fetchPromise;
}
