---
title: "Construction BI & Paginated Reporting PoC"
descriptor: "Multi-domain construction BI model with automatic demo data masking and printable management reports."
tagline: "Proof-of-concept Power BI model combining accounting, revenue, HR and site logistics data — with automatic scrambling of sensitive numbers for safe client demos and filterable PDF/Excel reports in Power BI Report Builder."
organization: "Mediasoft Group — Construction BI PoC"
year: "2026"
category: "BI & Governance"
status: "BI Proof-of-Concept & Documentation"
color: "purple"
featured: true
order: 3
builtWith:
  - "Power BI"
  - "Power BI Report Builder"
  - "DAX"
  - "Power Query"
  - "Microsoft Fabric"
  - "Git"
capabilities:
  - "Automatic demo data masking (Power Query)"
  - "Clear M / Mrd number formatting (DAX)"
  - "Printable PDF & Excel reports (Report Builder)"
  - "French financial formatting"
  - "Technical BI documentation"
stats:
  - value: "4 Domains"
    label: "Accounting, revenue, HR work logs and logistics combined in one model"
  - value: "Demo-Safe Data"
    label: "Automatically scrambles company names and financial figures inside Power Query"
  - value: "Print + Interactive"
    label: "Interactive Power BI dashboards paired with ready-to-print PDF/Excel reports (.rdl)"
links:
  - label: "Career Timeline"
    url: "/cv/"
---

## Project Overview

This Proof-of-Concept (PoC) Business Intelligence solution was built at **Mediasoft Group** to show how construction ERP data across accounting, historical revenue, HR work logs and site logistics can come together cleanly in one reporting environment.

Alongside interactive Power BI dashboards (`PBIP` / `TMDL`), the project includes **ready-to-print management statements** built with **Power BI Report Builder** (`.rdl`) and a formal 18-section BI Technical Documentation guide.

## Business Problem

Prospective construction clients want to explore realistic ERP dashboards — covering general ledger, analytical costs, revenue trends and employee work logs — before committing to a project. However, real client data is confidential and cannot be shown in sales or product demos, and teams also needed cleanly formatted statements they could filter and export to PDF or Excel for board reviews.

## Data Sources & Technologies

- **Data sources:** Multi-domain ERP extracts covering General Ledger & Analytical Accounting (`F_CGECRITURES`, `F_CGVENTILATION`, `F_CRECRITURES`, `F_DBECRITURES`), historical revenue (`F_CAHISTORIQUE`, `F_CAVENTILATION`), HR work logs (`F_RAPPORTSTRAVAIL`, `F_SALSOLDES`, `F_HEURES_OFFICIELLES`) and logistics slips (`F_BONS_*`).
- **Technologies:** Power BI (`PBIP` / `TMDL`), Power Query M, DAX, Power BI Report Builder (`.rdl`), Microsoft Fabric, Git and technical documentation.

## Technical Approach

1. **Automatic demo data masking in Power Query:** Built simple scrambling rules directly in Power Query (`M`) so real client names, project labels and monetary figures are automatically disguised for safe live demonstrations while keeping all subtotals mathematically consistent.
2. **Readable French & Swiss number formatting:** Configured dynamic DAX display logic so large figures switch cleanly between Millions (`M`) and Billions (`Mrd`) without Windows/Power BI comma-vs-dot conflicts.
3. **Interactive dashboards + printable statements:** Paired visual Power BI exploration (with custom time-comparison windows and multi-currency toggles) with filterable Report Builder (`.rdl`) layouts designed for clean PDF and Excel export.

<figure data-diagram>
  <ol>
    <li>
      <strong>1. ERP Extracts</strong>
      <ul>
        <li>Accounting, HR &amp; Logistics<em>Multi-domain CSV / ERP feeds</em></li>
      </ul>
    </li>
    <li>
      <strong>2. Power Query M</strong>
      <ul>
        <li>Demo Masking &amp; Cleanup<em>Scrambles sensitive values automatically</em></li>
      </ul>
    </li>
    <li>
      <strong>3. PBIP Star Schema</strong>
      <ul>
        <li>TMDL Semantic Layer<em>Clean M/Mrd DAX &amp; period comparisons</em></li>
      </ul>
    </li>
    <li>
      <strong>4. Dual Outputs</strong>
      <ul>
        <li>Power BI &amp; Report Builder<em>Interactive charts + printable PDF/Excel (.rdl)</em></li>
      </ul>
    </li>
  </ol>
  <figcaption>End-to-end demo pipeline combining automatic Power Query data masking, clean DAX modeling, and printable Report Builder outputs.</figcaption>
</figure>

## Implementation

- Organized separate accounting and construction-HR semantic models (`S_demo_ms_compta.pbip`, `S_demo_construction_RH.pbip`) inside version-controlled PBIP folders.
- Authored formal 18-section BI Technical Documentation detailing data flow, star-schema relationships, composite keys, DAX measures, Row-Level Security design and refresh steps.

## Key Findings & Results

- Delivered a confidential-safe, reusable demonstration environment showcasing Mediasoft's BI capabilities across accounting, HR and site logistics.
- Standardized French financial labels, period comparisons and printable `.rdl` outputs across both models.

## Challenges & Learnings

- Displaying large Swiss/French financial amounts in `M` and `Mrd` across mixed Windows locale settings required explicit DAX formatting rules so decimal and thousands separators render consistently for French-speaking reviewers.
