---
title: "Hey! Geneva – AI-Powered Event Discovery Chatbot"
descriptor: "Building a multilingual WhatsApp assistant using Python, APIs, LLMs and RAG."
tagline: "An independent AI-assisted application combining Python REST API pipelines, Supabase storage, RAG, MCP and WhatsApp webhooks for natural-language Geneva event discovery."
organization: "Independent Project"
year: "2026"
category: "AI & Automation"
status: "Independent prototype"
color: "purple"
featured: true
order: 2
builtWith:
  - "Python"
  - "Supabase"
  - "Render"
  - "Antigravity"
  - "RAG"
  - "MCP"
  - "REST APIs"
  - "LLMs"
  - "Webhooks"
  - "WhatsApp integration"
capabilities:
  - "External REST API ingestion"
  - "Python normalization pipelines"
  - "Structured Supabase storage"
  - "Retrieval-Augmented Generation (RAG)"
  - "Model Context Protocol (MCP)"
  - "Webhook-based WhatsApp messaging"
stats:
  - value: "RAG + MCP"
    label: "Structured event retrieval from Supabase prior to LLM response"
  - value: "5-Stage"
    label: "API ingestion, Python cleaning, database, AI layer & WhatsApp webhooks"
  - value: "Multilingual"
    label: "Designed for natural-language event queries across Geneva"
links: []
---

## Project Overview

**Hey! Geneva** is an independent AI-assisted application designed to help people discover local events and activities around Geneva through a conversational WhatsApp interface.

Rather than relying on static training data, the project combines classical Python data engineering with LLM integration, Retrieval-Augmented Generation (RAG) and Model Context Protocol (MCP) tooling.

## Business Problem

Local event listings in Geneva are spread across venue websites, newsletters and community calendars. Searching across multiple sources in different languages is repetitive, while asking a generic LLM directly risks outdated or fabricated venue and schedule details.

## Data Sources & Technologies

- **Data sources:** External event feeds retrieved via REST APIs and inbound user queries received through WhatsApp webhook triggers.
- **Technologies:** Python, REST APIs, Supabase, Render, Antigravity, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), webhooks and WhatsApp messaging integration.

## Technical Approach

The architecture separates deterministic **data ingestion and storage** from **conversational retrieval**:

<figure data-diagram>
  <ol>
    <li>
      <strong>1. Data Ingestion</strong>
      <ul>
        <li>REST APIs<em>Retrieve external Geneva event feeds</em></li>
      </ul>
    </li>
    <li>
      <strong>2. Data Processing</strong>
      <ul>
        <li>Python pipelines<em>Clean, normalize &amp; structure dates/venues</em></li>
      </ul>
    </li>
    <li>
      <strong>3. Database</strong>
      <ul>
        <li>Supabase<em>Store structured event records &amp; metadata</em></li>
      </ul>
    </li>
    <li>
      <strong>4. AI Integration</strong>
      <ul>
        <li>LLMs, RAG &amp; MCP<em>Retrieve grounded listings before answering</em></li>
      </ul>
    </li>
    <li>
      <strong>5. Communication</strong>
      <ul>
        <li>WhatsApp webhooks<em>Deliver multilingual conversational replies</em></li>
      </ul>
    </li>
  </ol>
  <figcaption>Five-stage architecture pairing Python API synchronization with grounded LLM retrieval and WhatsApp webhooks.</figcaption>
</figure>

## Implementation

1. **Data ingestion:** Connected external event endpoints using Python REST API clients to pull upcoming local listings.
2. **Data processing:** Built Python normalization scripts to clean HTML/text artifacts, standardize timestamps and venues, and filter malformed entries.
3. **Database:** Stored cleaned, structured event records in Supabase for reliable querying by date, category and location.
4. **AI integration:** Connected LLMs via RAG retrieval and MCP tool interfaces so responses are grounded in actual Supabase records rather than unverified model memory.
5. **Communication:** Wired WhatsApp webhook workflows to accept natural-language queries and return formatted event suggestions.

## Key Findings & Results

- Demonstrated an end-to-end prototype bridging Python ETL hygiene, relational/cloud database storage in Supabase, RAG/MCP retrieval and conversational messaging.
- Confirmed that upstream data normalization (consistent dates, categories and venue names) has a greater impact on chatbot accuracy than prompt wording alone.

## Challenges & Learnings

- Handling inconsistent schemas across external event sources required defensive parsing and strict field validation before writing to Supabase.
- As an independent prototype under active iteration, separating ingestion checks from prompt logic makes it straightforward to extend new event sources without rewriting the conversational layer.
