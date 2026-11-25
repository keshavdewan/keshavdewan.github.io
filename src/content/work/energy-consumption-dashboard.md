---
title: "Energy Consumption Analytics Dashboard"
descriptor: "A multi-page Power BI dashboard covering water, electricity and gas consumption."
tagline: "A four-page Power BI report analyzing multi-year water, electricity and gas consumption patterns, costs and drill-downs across U.S. city buildings (2016–2019)."
organization: "Personal BI Project"
year: "2025"
category: "BI & Governance"
status: "Live Power BI report"
color: "green"
featured: true
order: 6
builtWith:
  - "Power BI"
  - "DAX"
  - "Power Query"
capabilities:
  - "Multi-page BI navigation"
  - "DAX measures & KPIs"
  - "Utility cost & unit comparisons"
  - "Building & city drill-downs"
stats:
  - value: "88.49%"
    label: "Water share of total utility units consumed across monitored sites"
  - value: "4 Pages"
    label: "Dedicated Overview, Water, Electricity and Gas analytical views"
  - value: "2016–2019"
    label: "Historical utility consumption and cost coverage"
links:
  - label: "Live Power BI Dashboard"
    url: "https://app.powerbi.com/view?r=eyJrIjoiZWJjZWYzZmMtNzk0Zi00MGJmLWFlNWItMDI1MmUxZGYxOTdjIiwidCI6ImQ1YjdmMzZhLTAyNTktNDMzZS1iYTNkLTZmM2Y3MTFkMDNiYyIsImMiOjh9"
  - label: "GitHub Repository"
    url: "https://github.com/keshavdewan/Energy-Consumption"
  - label: "Medium Article"
    url: "https://medium.com/@kdrokz/energy-consumption-dashboard-c3ebb24d22a8"
---

## Project Overview

Developed a four-page **Power BI** report analyzing utility consumption and associated costs across buildings in U.S. cities from 2016 to 2019, separated into dedicated **Overview**, **Water**, **Electricity** and **Gas** analytical pages.

## Business Problem

Consolidating multi-utility consumption across buildings and cities into one crowded screen obscures utility-specific anomalies. Facility analysts needed a centralized dashboard to compare overall usage while drilling into water, electricity and gas patterns individually.

## Data Sources & Technologies

- **Data sources:** Multi-year building utility consumption and cost dataset (2016–2019) covering Water, Electricity and Gas across U.S. cities.
- **Technologies:** Power BI, DAX and Power Query.

## Technical Approach

- Structured the Power BI workbook into four navigable pages with synchronized slicers (building, city, year, utility type).
- Created custom DAX measures comparing individual utility units against total remaining consumption to highlight relative resource intensity.

## Implementation

- Built interactive overview cards, time-series comparisons and city/building drill-down visuals for each utility stream.
- Published the live interactive Power BI report and documented the build in a Medium article and GitHub repository.

## Key Findings & Results

- **Water dominance:** Water represented **88.49%** of total monitored units (peaking in 2017) while overall water costs remained relatively stable, signaling conservation opportunities.
- **Gas trend:** Gas consumption — the smallest utility category — declined steadily alongside gas expenditure from 2016 to 2019.

## Challenges & Learnings

- Without building-type or time-of-day metadata, consumption spikes can only be isolated to building and month level; adding granular metadata is the clear next iteration.
