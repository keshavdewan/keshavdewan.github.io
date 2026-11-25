---
title: "IT Service Management (GLPI) Ticket & SLA Analytics"
descriptor: "PBIP ticket lifecycle modeling, SLA compliance DAX, and Claude MCP–assisted documentation."
tagline: "Interactive Power BI analytics for GLPI IT service desks with SLA tracking, Gantt timelines, and Claude MCP + python-docx workflows inspecting the semantic model to auto-generate user guides."
organization: "Mediasoft Group — Internal IT Analytics"
year: "2026"
category: "AI & Automation"
status: "PBIP model & Claude MCP docs"
color: "purple"
featured: true
order: 5
builtWith:
  - "Power BI"
  - "Claude MCP"
  - "DAX"
  - "Python"
  - "SQL"
  - "Git"
capabilities:
  - "Claude MCP model inspection"
  - "ITSM ticket lifecycle modeling"
  - "SLA & overdue duration DAX"
  - "Gantt schedule calculations"
  - "Automated Word/Markdown docs"
stats:
  - value: "30 Tables"
    label: "GLPI relational model with 24 DAX measures in PBIP/TMDL"
  - value: "Claude MCP"
    label: "Connected Claude via MCP to inspect PBIP/TMDL definitions and generate docs"
  - value: "SLA + Gantt"
    label: "Closure/resolution duration metrics and BI department timeline views"
links:
  - label: "Career Timeline"
    url: "/cv/"
---

## Project Overview

This project delivers an end-to-end **IT Service Management (GLPI)** reporting suite in Power BI (`S_glpi_bi.pbip`) paired with a **Claude MCP** and Python documentation workflow (`generate_doc.py` and `GLPI_BI_Report_Usage_Guide.md`).

Instead of manually maintaining documentation as report pages evolved, **Claude via Model Context Protocol (MCP)** inspected the version-controlled `PBIP` / `TMDL` files directly to trace measures, table relationships and page visuals into structured user guides.

## Business Problem

IT and BI support teams tracking tickets inside GLPI lacked consolidated visibility into open vs. resolved queues, SLA resolution delays, overdue items and which incoming requests specifically required BI engineering (`Est_Ticket_BI`), while manual user guides quickly fell out of sync with model updates.

## Data Sources & Technologies

- **Data sources:** GLPI database tables (`glpi_tickets`, `glpi_users`, `glpi_groups_tickets`, `glpi_itilcategories`, `glpi_problems`, `ms_status`, `glpi_plugin_fields_ticketstatutms`) plus keyword lookup (`BI_MotsCles`) and `Calendar`.
- **Technologies:** Power BI (`PBIP` / `TMDL`), Claude MCP, DAX, SQL, Python (`python-docx`), Markdown and Git.

## Technical Approach

1. **Ticket & status modeling:** Connected `glpi_tickets` (central hub for 21 of 24 measures) with `ms_status`, technician assignments (`glpi_users`) and stage-specific status tables (`dev_attent_1` through `dev_valide_2`).
2. **SLA & Gantt DAX:** Built duration and overdue measures (`Moyenne_Jours_Cloture`, `Moyenne_Jours_Resolution`, `Tickets_En_Retard_Temporel`, `date_fin_graphique_2`, `Durée_Gantt`) plus BI keyword flagging (`Est_Ticket_BI`).
3. **Claude MCP + Python documentation:** Used **Claude via MCP** to read PBIP/TMDL metadata directly, validate measure dependencies, and build a repeatable Python (`python-docx`) generator (`generate_doc.py`) producing formatted Word and Markdown usage guides.

<figure data-diagram>
  <ol>
    <li>
      <strong>1. GLPI Schema</strong>
      <ul>
        <li>30 Relational Tables<em>Tickets, users, groups &amp; status</em></li>
      </ul>
    </li>
    <li>
      <strong>2. DAX &amp; Triage</strong>
      <ul>
        <li>24 Measures<em>SLA delays, Gantt &amp; BI keywords</em></li>
      </ul>
    </li>
    <li>
      <strong>3. PBIP Report</strong>
      <ul>
        <li>Multi-Page Views<em>Executive, Workload, BI &amp; SLA</em></li>
      </ul>
    </li>
    <li>
      <strong>4. Claude MCP + Python</strong>
      <ul>
        <li>Automated Docs<em>TMDL inspection &amp; Word/MD guides</em></li>
      </ul>
    </li>
  </ol>
  <figcaption>GLPI ticket lifecycle model paired with Claude MCP metadata inspection and Python Word/Markdown automation.</figcaption>
</figure>

## Implementation

- Structured dedicated report pages for **Executive Summary**, **Status & Workload Analysis**, **BI Department Tickets** (with Gantt schedule tracking) and **SLA Compliance & Timing**.
- Maintained the semantic model and report in Git-tracked **PBIP** format (`44` `.tmdl` files) so Claude MCP reads and automated `python-docx` exports stay synchronized with every schema change.

## Key Findings & Results

- Unified 30 GLPI tables and 24 DAX measures into clear operational views for SLA tracking and BI backlog prioritization.
- Eliminated manual documentation drift by pairing **Claude MCP** model inspection with automated Word (`.docx`) and Markdown usage guide generation.

## Challenges & Learnings

- Extending standard GLPI ticket tables required joining custom plugin fields (`glpi_plugin_fields_ticketstatutms`) and keyword matching (`BI_MotsCles`) carefully without introducing ambiguous filter propagation on `glpi_tickets`.
