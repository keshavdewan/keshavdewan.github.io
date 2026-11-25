---
title: "Global Life Expectancy & Human Development Analysis"
descriptor: "Exploring global development trends using UNDP datasets."
tagline: "Analyzed global life expectancy at birth and Human Development Index rankings across countries and regions from 1990 to 2021 using Python and Power BI."
organization: "UNDP Public Dataset"
year: "2023"
category: "SQL & Analytics"
status: "Live Power BI report"
color: "green"
featured: false
order: 14
image: "/images/Life-Expectancy-at-Birth-at-UNDP.jpg"
imageCaption: "Interactive Power BI view comparing global life expectancy trends, HDI rankings and regional distributions (1990–2021)."
builtWith:
  - "Python"
  - "Pandas"
  - "PostgreSQL"
  - "Power BI"
capabilities:
  - "Data cleaning & exploration"
  - "Longitudinal trend analysis"
  - "Regional comparisons"
  - "Correlation analysis"
  - "Interactive dashboard development"
stats:
  - value: "1990–2021"
    label: "Three decades of global UNDP life expectancy data"
  - value: "HDI Rank"
    label: "Country and regional comparisons across development groups"
links:
  - label: "Live Power BI Dashboard"
    url: "https://app.powerbi.com/view?r=eyJrIjoiZmU1OWZmYjMtYjg5Zi00MzljLWFiYWItZDAzNGNjYWIxZGJjIiwidCI6ImQ1YjdmMzZhLTAyNTktNDMzZS1iYTNkLTZmM2Y3MTFkMDNiYyIsImMiOjh9"
  - label: "GitHub Repository"
    url: "https://github.com/keshavdewan/Life-Expectancy-at-Birth"
---

## Project Overview

This project examines global **Life Expectancy at Birth** alongside United Nations Development Programme (UNDP) **Human Development Index (HDI)** rankings from 1990 to 2021 using Python data exploration, PostgreSQL and an interactive Power BI dashboard.

## Business Problem

Comparing health and human development trajectories across 190+ countries requires harmonizing multi-year records, development classifications and geographic groupings into a clean longitudinal view.

## Data Sources & Technologies

- **Data sources:** UNDP historical dataset containing ISO3 codes, Country, Continent, Hemisphere, Human Development Groups, UNDP Developing Regions, HDI Rank (2021) and Life Expectancy at Birth (1990–2021).
- **Technologies:** Python, Pandas, PostgreSQL and Power BI.

## Technical Approach & Implementation

- Cleaned and reshaped wide multi-year country tables in Python (`Pandas`, `Seaborn`, `Matplotlib`) to enable longitudinal trend and correlation analysis.
- Built an interactive Power BI dashboard exploring life expectancy evolution over time, HDI rank vs. life expectancy, and regional distributions.

## Key Findings & Results

- Highlighted three-decade improvements across regions alongside persistent gaps tied to socio-economic development groups and HDI rankings.
