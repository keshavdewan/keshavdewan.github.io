---
title: "Enterprise BI & Semantic Model Optimization"
descriptor: "Building governed Power BI semantic models using SQL, Microsoft Fabric and AI-assisted development."
tagline: "Developing and optimizing enterprise BI semantic models from relational ERP datasets with SQL, DAX, Row-Level Security, Git CI/CD and Claude/MCP metadata workflows."
organization: "Mediasoft Group, Nyon"
year: "2026"
category: "BI & Governance"
status: "Enterprise BI delivery"
color: "blue"
featured: true
order: 1
builtWith:
  - "SQL"
  - "Power BI"
  - "DAX"
  - "Power Query"
  - "Microsoft Fabric"
  - "Git"
  - "Claude / MCP tooling"
capabilities:
  - "Relational ERP extraction"
  - "Star-schema semantic modelling"
  - "Row-Level Security (RLS)"
  - "Dynamic user filtering"
  - "AI-assisted documentation & metadata workflows"
  - "Git version control & CI/CD"
stats:
  - value: "Star Schema"
    label: "Reusable semantic models integrating financial, HR and business ERP data"
  - value: "RLS"
    label: "Row-Level Security and dynamic filtering rules by organizational role"
  - value: "Git & MCP"
    label: "CI/CD version control paired with AI-assisted technical documentation"
links:
  - label: "View CV & Experience"
    url: "/cv/"
---

## Project Overview

This project involved developing and improving enterprise Business Intelligence reporting solutions at **Mediasoft Group** using complex relational ERP datasets, SQL, Power BI and Microsoft Fabric.

The work focused on building reusable semantic models, standardizing DAX calculation logic, documenting business definitions and improving reporting reliability across financial, HR and business datasets.

## Business Problem

Teams relying on relational ERP tables needed consistent, self-service analytical reporting without duplicating logic across individual reports or exposing sensitive records to unauthorized users. Discrepancies between source ERP queries and downstream report visuals also needed systematic validation.

## Data Sources & Technologies

- **Data sources:** Relational ERP schemas covering financial, HR and business datasets.
- **Core BI & data stack:** SQL, DBeaver, Power BI, DAX, Power Query, Microsoft Fabric, Report Builder, Git and CI/CD workflows.
- **AI-assisted tooling:** Claude and Model Context Protocol (MCP) tooling for structured technical documentation and metadata workflows.

## Technical Approach

1. **Source extraction & validation:** Queried and validated relational ERP tables in SQL and DBeaver, verifying join cardinality, null handling and record counts against source systems.
2. **Star-schema semantic modelling:** Structured fact and dimension tables in Power BI and Microsoft Fabric to eliminate ambiguous many-to-many paths and keep DAX measures predictable.
3. **Security & parameterized output:** Applied Row-Level Security (RLS) with dynamic filtering and built parameterized Power BI Report Builder outputs where formatted tabular distribution was required.

<figure data-diagram>
  <ol>
    <li>
      <strong>1. ERP Validation</strong>
      <ul>
        <li>SQL &amp; DBeaver<em>Relational checks &amp; reconciliation</em></li>
      </ul>
    </li>
    <li>
      <strong>2. Semantic Layer</strong>
      <ul>
        <li>Power Query &amp; Fabric<em>Star schema &amp; standardized DAX</em></li>
      </ul>
    </li>
    <li>
      <strong>3. Security &amp; Docs</strong>
      <ul>
        <li>RLS &amp; Claude/MCP<em>Role filtering, metadata &amp; Git CI/CD</em></li>
      </ul>
    </li>
    <li>
      <strong>4. Reporting Delivery</strong>
      <ul>
        <li>Power BI &amp; Report Builder<em>Interactive &amp; paginated reports</em></li>
      </ul>
    </li>
  </ol>
  <figcaption>End-to-end BI workflow connecting relational ERP sources to governed Power BI and Report Builder outputs.</figcaption>
</figure>

## Implementation

- Built and maintained shared Power BI semantic models and reusable DAX measures so multiple reports draw from one validated definition of key metrics.
- Investigated source-to-report discrepancies directly with business and technical stakeholders to resolve edge cases in transformations and business rules.
- Used AI-assisted development and MCP-based tooling to structure semantic model documentation, measure descriptions and business glossaries alongside Git version control.

## Key Findings & Results

- Established consistent semantic definitions, Row-Level Security controls and clearer documentation across financial, HR and business reporting.
- Improved confidence in reporting outputs by reconciling source SQL checks against Power BI visuals prior to release.

## Challenges & Learnings

- Relational ERP schemas often encode business rules across multiple junction tables; validating intermediate grain assumptions in SQL before loading Power Query prevents subtle double-counting in DAX.
- Pairing Git/CI/CD discipline with AI-assisted metadata documentation makes semantic models far easier for future analysts to audit and maintain.
