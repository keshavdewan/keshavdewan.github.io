---
title: "8 Weeks SQL Challenge & Parch and Posey"
descriptor: "PostgreSQL case studies covering customer analytics, sales, subscriptions and business performance."
tagline: "A collection of relational PostgreSQL case studies demonstrating complex joins, CTEs, window functions, cohort/funnel analysis and data cleaning."
organization: "PostgreSQL Case Studies"
year: "2024–2025"
category: "SQL & Analytics"
status: "Published repositories & articles"
color: "blue"
featured: false
order: 13
image: "/images/8-Weeks-SQL-Challenge-1.png"
imageCaption: "PostgreSQL analytical case studies across 8 business domains plus the Parch and Posey relational database."
builtWith:
  - "PostgreSQL"
  - "SQL"
  - "DBeaver"
  - "Power BI"
capabilities:
  - "Complex joins & CTEs"
  - "Window functions"
  - "Customer segmentation"
  - "Cohort & funnel analysis"
  - "Data cleaning & transformation"
  - "Sales & product analytics"
stats:
  - value: "8+"
    label: "SQL business case studies plus Parch & Posey schema"
  - value: "8 Articles"
    label: "Step-by-step SQL walkthroughs published on Medium, DevGenius & TowardsDev"
  - value: "PostgreSQL"
    label: "CTEs, window functions, JSON parsing and query structuring"
links:
  - label: "8 Weeks SQL Repo"
    url: "https://github.com/keshavdewan/8-Weeks-SQL-Challenge"
  - label: "Parch & Posey Repo"
    url: "https://github.com/keshavdewan/SQL-Case-Study---Parch-and-Posey"
  - label: "Medium Articles"
    url: "https://medium.com/@kdrokz"
---

## Project Overview

A structured collection of **PostgreSQL** case studies spanning the 8 Weeks SQL Challenge and the Parch and Posey relational sales database, designed to solve realistic business analytics questions using clean, reproducible SQL.

## Business Problem

Real-world analytical questions—subscription churn, digital clickstream drop-offs, malformed order logs and multi-region sales performance—require writing accurate relational SQL across messy multi-table schemas rather than relying on pre-aggregated exports.

## Data Sources & Technologies

- **Data sources:** Multi-table relational schemas covering dining loyalty, pizza delivery logs, SaaS streaming subscriptions, digital banking balances, retail packaging tests, web clickstreams, apparel baskets, marketing interest segments and B2B paper sales.
- **Technologies:** PostgreSQL, SQL, DBeaver and Power BI.

## Technical Approach & Implementation

- **Data cleaning & transformation:** Standardized malformed timestamps, string nulls and inconsistent units directly in PostgreSQL views/CTEs (*Pizza Runner*).
- **Customer & cohort analytics:** Built window-function and CTE queries for loyalty points (*Danny's Diner*), subscription upgrades/churn (*Foodie-Fi*), rolling balances (*Data Bank*) and pre/post impact (*Data Mart*).
- **Funnel & basket analysis:** Modeled web session conversion funnels (*Clique Bait*), product-pair combinations (*Balanced Tree*) and regional account/rep performance (*Parch and Posey*).

## Key Findings & Results

- Completed and documented all 8 challenge case studies plus the Parch and Posey database, publishing 8 detailed walkthrough articles across Medium, DevGenius and TowardsDev.

## Challenges & Learnings

- Handling edge cases such as duplicate rows, null strings and boundary dates in SQL emphasized the value of validating intermediate CTE row counts before aggregating final KPIs.
