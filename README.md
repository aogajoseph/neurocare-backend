# Neuro Care Backend

The Neuro Care Backend powers the Neuro Care platform by providing authoritative data, configuration and assistant intelligence for the frontend application.

It is designed as a contract-first API, ensuring predictable behavior, scalability and a clear separation of concerns between frontend and backend.

## Purpose

The backend serves as the single source of truth for:
- Application configuration and navigation.
- Organizational data and resources.
- Community and support structures.
- User identity, preferences and authentication.
- Neuro (Assistant) responses grounded in organizational data.

## Architecture Principles

- Contract-first API design.
- Backend-authoritative data model.
- Clear separation between content, identity and assistant logic.
- Designed to support phased frontend development.
- Extensible for future community interaction features.

## Core API Domains

- `/api/config` — App configuration and language support.
- `/api/home` — Home screen data.
- `/api/organization` — Authoritative organization data.
- `/api/resources` — Events, programs, partnerships, volunteering.
- `/api/community` — Support groups and community structures.
- `/api/assistant` — Hybrid assistant (general neurology + org data).
- `/api/auth/*` — Anonymous and authenticated identity flows.

## Identity & Access

The backend supports:
- Anonymous users.
- Authenticated users.
- Preference persistence (language, personalization).
- Secure profile handling.

## Status

The backend architecture is stable and designed to support incremental feature rollout without breaking frontend contracts.

Community posts and interactions are planned as a future phase.

## Related Repositories

- Frontend App: [neurocare-app](../neurocare-app)

---

Designed to prioritize correctness, consistency and long-term platform evolution.
