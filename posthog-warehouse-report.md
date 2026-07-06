# PostHog Data Warehouse Setup Report

**Date:** 2026-07-06  
**Project:** Default project (ID: 500010)

## Summary

A PostgreSQL data warehouse source was detected in this project (`DATABASE_URL` present in `.env`). Setup was attempted via the PostHog MCP but could not be completed automatically due to connection validation failures.

## What Was Attempted

- Detected: PostgreSQL source (Supabase-hosted) via `DATABASE_URL` in `.env`
- Called PostHog external-data-sources-wizard to retrieve required Postgres fields
- Collected credentials from user (host, port, database, user, password)
- Attempted to validate credentials via `external-data-sources-db-schema` — **failed twice**

### Validation errors encountered

1. First attempt: `"Could not connect to Postgres. Please check all connection details are valid."` — likely caused by incorrect username format (missing `postgres.` prefix for Supabase pooler)
2. Second attempt: `"Your database connection pooler couldn't find the tenant or user. This usually means the database project is paused or deleted, or the pooler username/host is wrong."`

## Changes Made to the Project

No source-code files were modified. No PostHog data warehouse source was created automatically.

## Files Modified or Created

| File | Change |
|------|--------|
| `posthog-warehouse-report.md` | Created (this report) |

## Manual Steps Required

The Postgres source must be connected manually via the PostHog app. Follow these steps:

1. **Check Supabase project status** — ensure the project is active and not paused (free-tier Supabase projects pause after inactivity). Go to [Supabase Dashboard](https://supabase.com/dashboard) and resume if paused.

2. **Open the PostHog new-source URL:**  
   [https://us.posthog.com/project/500010/data-warehouse/new-source?kind=Postgres](https://us.posthog.com/project/500010/data-warehouse/new-source?kind=Postgres)

3. **Fill in the connection details:**
   - **Host:** Get the exact Session pooler host from Supabase → Settings → Database → Connection pooling → Session mode. It looks like `aws-0-<region>.pooler.supabase.com`
   - **Port:** `6543`
   - **Database:** `postgres`
   - **User:** `postgres.<project-ref>` (e.g. `postgres.jpwmdbvxvrtpuvcufewu`)
   - **Password:** Your Supabase **database** password (from Supabase → Settings → Database) — this is NOT the `anon` or `service_role` key

4. **Select tables to sync** — after a successful connection, choose which tables to import and their sync strategy (incremental recommended where available).

5. **Allowlist PostHog egress IPs** if your Supabase project has IP restrictions enabled. See [PostHog docs](https://posthog.com/docs/cdp/sources/postgres) for the IP list.
