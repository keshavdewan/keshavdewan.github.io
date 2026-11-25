---
title: "AWS Costing & Sensor ETL Automation"
descriptor: "Python & AWS Lambda pipelines cutting manual reporting effort"
tagline: "Automated multi-source data ingestion, anomaly detection, and cloud costing pipelines for a Zurich sustainability food-tech startup."
organization: "Kitro SA, Zurich"
year: "2024"
category: "Data Engineering"
status: "Production delivery"
color: "brown"
featured: true
order: 3
builtWith:
  - "Python (Pandas)"
  - "AWS Lambda"
  - "Amazon QuickSight"
  - "Power BI"
  - "Google Sheets API"
capabilities:
  - "Automated ETL/ELT pipelines"
  - "Monthly AWS cost calculation"
  - "Sensor & operational data cleaning"
  - "Anomaly & discrepancy detection"
  - "Stakeholder KPI dashboards"
stats:
  - value: "40%"
    label: "Improvement in workflow efficiency by automating manual processing"
  - value: "AWS Lambda"
    label: "Scheduled serverless Python jobs for monthly costing"
  - value: "Multi-Source"
    label: "Unified operational, sensor, and billing datasets"
links:
  - label: "Read CV"
    url: "/cv/"
---

## Context

At **Kitro SA** in Zurich (Apr 2024 – Oct 2024), food-waste hardware sensors and cloud infrastructure generated high-volume operational logs alongside recurring monthly AWS cost-tracking tasks. Manual spreadsheet preparation was time-consuming and vulnerable to copy-paste discrepancies.

## Solution

- **Serverless costing pipeline:** Built scheduled Python workflows on **AWS Lambda** to pull, aggregate, and calculate monthly AWS costing metrics automatically into structured Google Spreadsheets and reporting views.
- **Sensor & operational ETL:** Wrote Python cleaning and standardization scripts to reconcile raw multi-source operational and food-waste datasets, surfacing anomalies and missing records early.
- **Cross-functional visibility:** Built interactive dashboards in **Amazon QuickSight** and **Power BI** summarizing customer behavior, usage patterns, and operational performance.

<figure data-diagram>
  <ol>
    <li>
      <strong>Raw Sources</strong>
      <ul>
        <li>AWS Billing &amp; Usage<em>Monthly infrastructure metrics</em></li>
        <li>Sensor &amp; Ops Logs<em>Multi-source customer activity</em></li>
      </ul>
    </li>
    <li>
      <strong>Serverless Python</strong>
      <ul>
        <li>AWS Lambda<em>Scheduled extraction &amp; cost rules</em></li>
        <li>Pandas Validation<em>Anomaly &amp; discrepancy checks</em></li>
      </ul>
    </li>
    <li>
      <strong>Reporting Layer</strong>
      <ul>
        <li>QuickSight &amp; Power BI<em>Usage &amp; sustainability trends</em></li>
        <li>Google Sheets<em>Automated monthly cost ledger</em></li>
      </ul>
    </li>
  </ol>
  <figcaption>Replacing manual spreadsheet wrangling with scheduled Python &amp; AWS Lambda automation.</figcaption>
</figure>

## Impact

- Reduced manual data processing effort and improved overall workflow efficiency by **40%**.
- Strengthened reporting accuracy and dataset reliability by resolving pipeline bottlenecks alongside technical and operational teams.

