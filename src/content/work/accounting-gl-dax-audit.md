---
title: "Accounting GL Consolidation & Semantic Model Audit"
descriptor: "Multi-year General Ledger Power BI model and 114-measure DAX refactoring audit."
tagline: "Anonymized Swiss hospitality and group reporting engagement combining multi-year General Ledger consolidation, P&L/Balance Sheet hierarchies and a full 114-measure DAX cleanup audit."
organization: "Swiss Hospitality & Construction Group (via Mediasoft Group)"
year: "2026"
category: "BI & Governance"
status: "Audit & refactored semantic model"
color: "purple"
featured: false
order: 9
builtWith:
  - "Power BI"
  - "DAX"
  - "Power Query"
  - "SQL"
  - "Git"
capabilities:
  - "General Ledger consolidation"
  - "Signed-grain P&L & Balance Sheet modeling"
  - "DAX refactoring & cleanup audit"
  - "PBIP / TMDL structural validation"
stats:
  - value: "114 Measures"
    label: "Complete DAX dictionary audited end-to-end across 10 report pages"
  - value: "24 Pruned"
    label: "Unused measures (257 DAX lines) and 24 dangling entities safely cleaned"
  - value: "5 Years GL"
    label: "Multi-year General Ledger (2022–2026) unified at journal-entry grain"
links:
  - label: "Career Timeline"
    url: "/cv/"
---

## Project Overview

This engagement (anonymized Swiss hospitality and group BI work via **Mediasoft Group**) centered on consolidating five years of General Ledger extracts (`2022–2026`) into a single Power BI accounting semantic model, auditing all **114 DAX measures** across **10 report pages**, and executing a zero-regression model cleanup.

## Business Problem

Over multiple iterations, the accounting semantic model accumulated unused measures, redundant auto-generated date tables and complex sign-flipping logic across profit-center income statements, statutory P&L and balance sheet views. Leadership needed full transparency into how every figure was calculated before safely simplifying the model.

## Data Sources & Technologies

- **Data sources:** Multi-year yearly General Ledger journal-entry extracts (`2022–2026`) and 5 conformed account hierarchy dimensions (Profit Centers, Detailed P&L, Statutory P&L, Balance Sheet, Restaurant Operations).
- **Technologies:** Power BI (`PBIP` / `TMDL`), DAX, Power Query, SQL and Git.

## Technical Approach

1. **Signed journal-entry grain:** Standardized signs once in Power Query by negating debits before summing against credits so revenues are positive and costs are negative—letting every P&L subtotal (Gross Margin, EBITDA, Contribution) sum cleanly without per-row sign tables, while providing a pre-inverted column for Balance Sheet convention.
2. **Dimension-driven statement layouts:** Mapped the same ledger account across five conformed account hierarchies so swapping the hierarchy dimension swaps the financial statement cleanly.
3. **Reference-checked cleanup protocol:** Audited every measure against all 10 report pages (`visual.json` bindings) and downstream measure dependencies before pruning dead code.

<figure data-diagram>
  <ol>
    <li>
      <strong>1. GL Consolidation</strong>
      <ul>
        <li>Power Query (2022–2026)<em>Signed CHF journal-entry grain</em></li>
      </ul>
    </li>
    <li>
      <strong>2. 5 Hierarchies</strong>
      <ul>
        <li>Conformed Account Dims<em>P&amp;L, Balance Sheet &amp; Profit Centers</em></li>
      </ul>
    </li>
    <li>
      <strong>3. 114-Measure Audit</strong>
      <ul>
        <li>TMDL &amp; Page Bindings<em>Trace dependencies &amp; dead code</em></li>
      </ul>
    </li>
    <li>
      <strong>4. Safe Refactor</strong>
      <ul>
        <li>Cleanup Execution<em>-24 unused measures, -257 DAX lines</em></li>
      </ul>
    </li>
  </ol>
  <figcaption>End-to-end accounting semantic model review and zero-regression cleanup workflow.</figcaption>
</figure>

## Implementation

- Audited 114 measures in `Mesures.tmdl` and produced structured HTML/PDF audit documentation detailing calculation architecture, findings and refactoring steps.
- Executed structural cleanup removing **24 unreachable measures (257 lines of DAX)**, **24 unused metadata entities** and **32 dangling relationships**, while intentionally preserving flagged measures requested by stakeholders for future placement.

## Key Findings & Results

- Delivered complete calculation transparency across statutory P&L, balance sheet and profit-center statements.
- Reduced semantic model bloat and improved maintainability without altering any active report binding or financial number.

## Challenges & Learnings

- Structural PBIP/TMDL validation proves internal consistency and untouched bindings, but refactored DAX expressions must always be paired with engine-level numerical reconciliation protocols against pre-cleanup snapshots.
