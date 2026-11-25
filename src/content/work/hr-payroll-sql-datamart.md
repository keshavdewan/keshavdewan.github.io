---
title: "HR & Payroll ERP Datamart Layer (SQL Views)"
descriptor: "Translating legacy OpenEdge ERP tables into clean analytical DATAMART SQL views."
tagline: "Designed a 10-view SQL datamart layer transforming cryptic Progress/OpenEdge payroll and work-log tables into clean, Power BI-ready French HR fact and dimension views."
organization: "Swiss Construction Enterprise (via Mediasoft Group)"
year: "2026"
category: "Data Engineering"
status: "Production SQL datamart views"
color: "brown"
featured: true
order: 4
builtWith:
  - "SQL"
  - "DBeaver"
  - "Power BI"
capabilities:
  - "SQL view engineering"
  - "Legacy ERP schema abstraction"
  - "HR & payroll data modeling"
  - "Work-log & balance integration"
stats:
  - value: "10 Views"
    label: "Clean DATAMART.DIM_* and DATAMART.F_* SQL views over PUB.* ERP tables"
  - value: "HR + Payroll"
    label: "Fixed salaries, variable pay, balances, work logs and calendar hours"
  - value: "Zero Duplication"
    label: "Standardized French column naming before Power BI ingestion"
links:
  - label: "Career Timeline"
    url: "/cv/"
---

## Project Overview

Built for a Swiss construction company (anonymized client project via **Mediasoft Group**), this data engineering engagement established a **10-view `DATAMART` SQL abstraction layer** sitting directly above raw Progress/OpenEdge (`PUB.*`) HR and payroll ERP tables.

## Business Problem

Legacy ERP tables store HR and payroll records under short, cryptic 4-character column and table codes (`PUB.SDRU`, `PUB.SAHM`, `PUB.SDFX`, `PUB.SDSO`, `PUB.SDVA`, `PUB.BATC`, `PUB.MSTC`). Connecting Power BI directly to those raw tables makes models fragile, unreadable and hard to govern.

## Data Sources & Technologies

- **Data sources:** Progress/OpenEdge ERP schemas (`PUB.*` employee master, salary rubrics, fixed salaries, variable pay lines, cumulative balances, calendar hours and site work logs).
- **Technologies:** SQL (`CREATE VIEW` / `DROP VIEW`), DBeaver and Power BI.

## Technical Approach

- **Semantic renaming at the SQL layer:** Mapped abbreviated ERP codes (`NSTE`, `NOSA`, `NORU`, `NOCA`, `NOGF`, `EXER`, `MOIS`, `QTE`, `MONT`) into standardized, self-documenting French business columns (`Numero_societe`, `Numero_salarie`, `Numero_rubrique_salaire`, `Exercice`).
- **Clean Star-Schema separation:** Organized views into 4 conformed dimensions (`DIM_SALARIES`, `DIM_RUBRIQUES`, `DIM_DESIGNATIONS_BATC`, `DIM_DESIGNATIONS_MSTC`) and 6 fact views (`F_CALHEURES`, `F_RAPPORTSTRAVAIL`, `F_SALFIX`, `F_SALRUBRIQUE`, `F_SALSOLDES`, `F_SALVARIABLES`).

<figure data-diagram>
  <ol>
    <li>
      <strong>1. Legacy ERP (PUB.*)</strong>
      <ul>
        <li>Raw Tables<em>Cryptic 4-char codes (SDFX, SDVA, SDSO)</em></li>
      </ul>
    </li>
    <li>
      <strong>2. SQL View Layer</strong>
      <ul>
        <li>DATAMART.DIM_*<em>Employees, rubrics &amp; designations</em></li>
        <li>DATAMART.F_*<em>Work logs, fixed/variable pay &amp; balances</em></li>
      </ul>
    </li>
    <li>
      <strong>3. Downstream BI</strong>
      <ul>
        <li>Power BI Ready<em>Readable French schema &amp; clean joins</em></li>
      </ul>
    </li>
  </ol>
  <figcaption>SQL datamart abstraction isolating downstream Power BI models from cryptic ERP table codes.</figcaption>
</figure>

## Implementation

- Authored and validated 10 idempotent `DROP VIEW` / `CREATE VIEW` SQL scripts in DBeaver covering employee demographics, tax scales, payroll calendars (`F_CALHEURES`), site work reports (`F_RAPPORTSTRAVAIL`), fixed salaries (`F_SALFIX`), variable lines (`F_SALVARIABLES`) and cumulative balances (`F_SALSOLDES`).

## Key Findings & Results

- Eliminated cryptic field mapping inside Power Query by pushing column standardization and projection cleanly down to the SQL `DATAMART` layer.
- Created a consistent SQL contract shared across HR, payroll and analytical cost-center reporting.

## Challenges & Learnings

- Auditing multi-company payroll views required verifying composite keys (`Numero_societe` + `Numero_salarie` + `Exercice`) across every fact view so employee records never collide across legal entities.
