---
title: "Hey! Geneva — AI Chatbot & Data Pipeline"
descriptor: "WhatsApp event-discovery chatbot powered by RAG, MCP & Supabase"
tagline: "An intelligent WhatsApp assistant that parses real-time local event feeds via webhook listeners, REST APIs, and Retrieval-Augmented Generation."
organization: "Independent Project"
year: "2026"
category: "AI & Automation"
status: "Built & documented"
color: "purple"
featured: true
order: 1
builtWith:
  - "Python"
  - "Model Context Protocol (MCP)"
  - "REST APIs"
  - "LLMs (RAG architecture)"
  - "Supabase"
  - "Webhook listeners"
capabilities:
  - "Real-time API ingestion"
  - "Structured data cleaning"
  - "Conversational event search"
  - "Retrieval-Augmented Generation"
  - "WhatsApp messaging flow"
stats:
  - value: "RAG + MCP"
    label: "Grounded event retrieval over structured local listings"
  - value: "Real-Time"
    label: "Webhook & REST API synchronization into Supabase"
  - value: "WhatsApp"
    label: "Zero-install conversational interface for Geneva residents"
links:
  - label: "GitHub Profile"
    url: "https://github.com/keshavdewan"
---

## Problem & context

Finding relevant local events in Geneva typically requires checking fragmented newsletters, venue calendars, and social feeds. The goal of **Hey! Geneva** was to turn scattered external event sources into a fast, conversational WhatsApp assistant that answers natural-language queries ("What's happening in Geneva this weekend?") with accurate, up-to-date recommendations.

## Pipeline & architecture

Instead of letting an LLM hallucinate venues or dates, the system separates **data synchronization** from **grounded retrieval**:

<figure data-diagram>
  <ol>
    <li>
      <strong>1. Ingestion & Sync</strong>
      <ul>
        <li>REST APIs<em>External event feeds &amp; schedules</em></li>
        <li>Webhook listeners<em>Inbound WhatsApp &amp; update triggers</em></li>
      </ul>
    </li>
    <li>
      <strong>2. Normalization</strong>
      <ul>
        <li>Python cleaners<em>Deduplicate, parse dates &amp; venues</em></li>
        <li>Supabase store<em>Structured tables + metadata</em></li>
      </ul>
    </li>
    <li>
      <strong>3. Grounded Retrieval</strong>
      <ul>
        <li>MCP tools<em>Typed query interface for event lookup</em></li>
        <li>RAG context<em>Injects verified listings into prompts</em></li>
      </ul>
    </li>
    <li>
      <strong>4. Response Delivery</strong>
      <ul>
        <li>LLM synthesis<em>Concise summaries &amp; follow-ups</em></li>
        <li>WhatsApp reply<em>Delivered directly in chat</em></li>
      </ul>
    </li>
  </ol>
  <figcaption>End-to-end architecture: structured ingestion keeps Supabase current so the LLM only answers from verified Geneva event records.</figcaption>
</figure>

## Key implementation details

- **Webhook & API synchronization:** Implemented Python webhook listeners and scheduled REST API sync flows to ingest, clean, and normalize raw event payloads before storage.
- **Model Context Protocol (MCP) & RAG:** Structured tool access via MCP so the model queries clean Supabase tables by date, category, or neighborhood rather than relying on stale training memory.
- **Data quality gates:** Standardized timestamps, locations, and missing fields during parsing so downstream retrieval stays reliable even when upstream feeds change format.

## Outcomes & takeaways

- Delivered an end-to-end conversational data pipeline connecting Python automation, Supabase persistence, MCP tool calls, and WhatsApp messaging.
- Demonstrated how classical data engineering hygiene (schema normalization, deduplication, and validation) directly determines the reliability of RAG applications.

