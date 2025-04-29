import{a as e}from"./LGTCI63N.js";const a=`**Authors**: Mohammad Sadat Hossain, Nafis Tahmid, Shattik Islam Rhythm  
**Date**: January 6, 2025

---

## Introduction

In the rapidly evolving landscape of machine learning security, adversarial attacks have predominantly focused on computer vision and natural language processing. However, a significant portion of real-world machine learning applications actually process tabular data, especially in critical domains like finance, healthcare, and cybersecurity. The paper “Constrained Adaptive Attack: Effective Adversarial Attack Against Deep Neural Networks for Tabular Data” addresses this crucial gap by introducing novel approaches to generate adversarial examples for tabular data while respecting real-world constraints.

---

## The Challenge of Tabular Adversarial Attacks

Unlike images or text, tabular data comes with inherent constraints that make traditional adversarial attack methods ineffective. For example:
- In a financial dataset, features like “total debt” and “monthly payment” must maintain specific mathematical relationships.
- Categorical features like “education level” cannot be arbitrarily modified to continuous values.

### Key Limitations in Existing Approaches:
- Most attacks ignore feature relationships.
- Current methods fail to handle mixed data types or categorical features.
- Available attacks like **CPGD** show low success rates.
- Search-based methods like **MOEVA** are computationally expensive.

---

## Technical Innovation: CAPGD

### Adaptive Step Size
CAPGD adaptively adjusts the step size based on optimization progress:
- Step size is halved when:
  - The loss hasn’t increased in 75% of steps since the last checkpoint.
  - The maximum loss hasn’t improved since the last checkpoint.

Mathematically:
\`\`\`math
\\eta^{k+1} =
\\begin{cases}
\\eta^{k} & \\text{if progress is good} \\\\
\\frac{\\eta^{k}}{2} & \\text{otherwise}
\\end{cases}
\`\`\`

### Momentum Integration
Incorporates momentum for improved stability:
\`\`\`math
z^{k+1} = P_S\\left( x^{k} + \\eta^{k} \\nabla L'x^{k} \\right)
\`\`\`

\`\`\`math
x^{k+1} = R_{\\Omega}\\left( P_S\\left( x^{k} + \\alpha \\left( z^{k+1} - x^{k} \\right) + (1-\\alpha) \\left( x^{k} - x^{k-1} \\right) \\right) \\right)
\`\`\`

where $\\alpha = 0.75$ balances the current gradient and previous updates.

### Repair Operator
A novel repair operator $R_{\\Omega}$ ensures constraint satisfaction by projecting examples back into the valid data space.

---

## Formulation of Constraints

CAPGD and CAA respect domain-specific constraints, preserving adversarial example validity via structured grammar.

### Types of Constraints:
1. **Immutability**: Certain features cannot be modified (e.g., “loan ID”).
2. **Boundaries**: Features must remain within specific ranges (e.g., $5000 \\leq \\text{Loan Amount} \\leq 100000$).
3. **Type**: Features retain their data type (e.g., categorical values remain categorical).
4. **Feature Relationships**: Logical/mathematical relationships must be preserved (e.g., $\\text{Total Debt} \\geq \\text{Monthly Payments}$).

### Constraint Grammar
\`\`\`math
\\omega := \\omega_1 \\land \\omega_2 \\mid \\omega_1 \\lor \\omega_2 \\mid \\psi_1 \\geq \\psi_2 \\mid f \\in \\{\\psi_1, \\ldots, \\psi_k\\},
\`\`\`
where:
- $\\omega$: Constraint
- $\\psi$: Numeric expression
- $f$: Feature

---

## The Power of Ensemble: CAA

CAA combines **CAPGD** with **MOEVA**, leveraging their strengths:
1. CAPGD is fast but less effective.
2. MOEVA is slower but highly effective.

### Achievements:
- Up to **96.1% decrease** in model accuracy.
- **5x faster** than pure MOEVA.
- Best performance in **19 out of 20 experimental settings**.

---

## Experimental Validation

### Datasets:
- URL (phishing detection)
- LCLD (credit scoring)
- CTU (botnet detection)
- WiDS (medical)

### Architectures:
- TabTransformer
- RLN
- VIME
- STG
- TabNet

### Key Findings:
- CAPGD outperforms all other gradient-based attacks.
- CAA balances effectiveness with reduced computational cost.
- Adversarial training shows varying effectiveness across architectures.

---

## Future Directions

1. Development of defenses against constrained adversarial attacks.
2. Advanced approaches for handling complex feature relationships.
3. Design of robust architectures for tabular data.
4. Optimization of search-based components in CAA.

---

## Conclusion

This work advances adversarial machine learning for tabular data by introducing **CAPGD** and **CAA**. These contributions not only enhance attack effectiveness but also establish new benchmarks for evaluating robustness in tabular ML models. The paper underscores the critical need to address vulnerabilities in sensitive domains like finance and healthcare.

---`,n=[{banner:e("https://images.squarespace-cdn.com/content/v1/5f8de2b5eb427172886cea17/99e035e6-f7d6-4064-95a6-e7c44c77139e/%5BNEURIPS2024%5D+LatinX+in+AI+Workshop+%40+NeurIPS+2024.png",!0),color:"#ff0000",slug:"caa",name:"Advancing Adversarial Attacks in Tabular Machine Learning: A Deep Dive into CAA",shortDescription:'Review of the NeurIPS2024 paper "Advancing Adversarial Attacks in Tabular Machine Learning: A Deep Dive into CAA"',type:"Paper Review",date:new Date("2025-01-06"),content:a}],t="Blogs",s={items:n,title:t};export{s as B};
