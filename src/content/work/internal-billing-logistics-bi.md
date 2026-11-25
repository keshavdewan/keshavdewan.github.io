---
title: "Internal Billing & Fleet Logistics BI (Role-Playing Model)"
descriptor: "Tracking internal fleet cross-charging and 3-stage depot-to-site material dispatches."
tagline: "Anonymized Swiss construction Power BI model resolving internal cross-debits across machinery rentals and multi-line material requisitions using role-playing analytical dimensions."
organization: "Swiss Construction Enterprise (via Mediasoft Group)"
year: "2026"
category: "BI & Governance"
status: "Delivered BI specification & model"
color: "blue"
featured: false
order: 8
builtWith:
  - "Power BI"
  - "DAX"
  - "SQL"
  - "Power Query"
capabilities:
  - "Role-playing star schema"
  - "Internal cross-charging logic"
  - "Fleet deployment analytics"
  - "3-stage order fulfillment tracking"
stats:
  - value: "2 Modules"
    label: "Fleet transport rentals (fi212) and depot material orders (fi400)"
  - value: "Role-Playing"
    label: "Split PRODUIT (issuing depot) vs. CHARGE (receiving site) dimensions"
  - value: "3-Stage Qty"
    label: "Ordered, picked and delivered material pipeline verification"
links:
  - label: "Career Timeline"
    url: "/cv/"
---

## Project Overview

Built for a Swiss construction logistics head (anonymized client engagement via **Mediasoft Group**), this Power BI report provides oversight of **internal billing (*facturation interne*)**—tracking how company vehicles, machinery and depot materials are mobilized and cross-debited across active construction sites without external cash movement.

## Business Problem

When internal fleets and central warehouses supply multiple construction sites, standard single-account dimensions cannot simultaneously credit the issuing depot/fleet and debit the receiving site in the same matrix without relationship ambiguity.

## Data Sources & Technologies

- **Data sources:** Two ERP operational sub-modules: Transport & Fleet Rental Slips (`F_BONS_TRANSPORTS` / `fi212`) and Material Order Headers & Lines (`F_BONS_ENTETES` & `F_BONS_LIGNES` / `fi400`), joined to shared catalog (`DIM_ARTICLES_LIGHT`) and analytical dimensions.
- **Technologies:** Power BI, DAX, SQL and Power Query.

## Technical Approach

1. **Role-playing dimensions:** Separated internal revenue vs. expense viewpoints using distinct role-playing dimensions: `DIM_CA_PRODUIT` (issuing fleet/depot) vs. `DIM_CA_CHARGE` (recipient site), and `DIM_GENRES_FRAIS_PRODUIT` vs. `DIM_GENRES_FRAIS_CHARGE`.
2. **Unified catalog key:** Linked both machinery inventory numbers and consumable material items to `DIM_ARTICLES_LIGHT` via composite key `ID_ARTICLE`.
3. **Pipeline fulfillment tracking:** Tracked three distinct volume metrics on material lines—*Qté Commandée* (ordered), *Qté Préparée* (warehouse picked) and *Qté Livrée* (delivered)—alongside order status (*Saisie*, *Préparée*, *Livrée*).

<figure data-diagram>
  <ol>
    <li>
      <strong>1. Dual Fact Streams</strong>
      <ul>
        <li>Transport &amp; Orders<em>Fleet rentals &amp; depot requisitions</em></li>
      </ul>
    </li>
    <li>
      <strong>2. Role-Playing Dims</strong>
      <ul>
        <li>PRODUIT vs. CHARGE<em>Credit depot &amp; debit site cleanly</em></li>
      </ul>
    </li>
    <li>
      <strong>3. Shared Catalog</strong>
      <ul>
        <li>DIM_ARTICLES_LIGHT<em>Unified inventory &amp; material key</em></li>
      </ul>
    </li>
    <li>
      <strong>4. Two Report Pages</strong>
      <ul>
        <li>Transport &amp; Orders<em>KPIs, matrices &amp; open slip tracking</em></li>
      </ul>
    </li>
  </ol>
  <figcaption>Role-playing star schema separating internal provider revenue from site cost allocation.</figcaption>
</figure>

## Implementation

- **Page 1 — Gestion des Bons de Transport:** Built KPI cards (total inventory, internal billed amount, deployed days, active vehicles/sites) and a full cross-allocation matrix by equipment, rate, quantity and `PRODUIT`/`CHARGE` accounts.
- **Page 2 — Saisie des Commandes:** Built material invoicing KPIs, open-voucher alerts (status not *Livrée*), status breakdowns and top consumed materials ranking.

## Key Findings & Results

- Gave logistics leadership a transparent audit trail of internal equipment utilization, daily rental cross-charges and unfulfilled depot material requisitions.

## Challenges & Learnings

- Modeling cross-entity internal billing cleanly requires explicit role-playing dimensions rather than bidirectional filters so both issuing depots and receiving sites aggregate accurately in the same visual.
