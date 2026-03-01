# AutoHeal Test Target

This repository contains intentionally broken code to test the AutoHeal CI/CD agent.

## Purpose

AutoHeal monitors CI/CD failures and automatically fixes common issues. This repo provides a controlled test environment with:

- **ESLint errors** in `src/broken.js` (missing semicolons, unused vars, wrong indentation)
- **TypeScript errors** in `src/broken.ts` (type mismatches, undefined variables)
- **Pytest failures** in `tests/test_broken.py` (failing assertions)

## CI/CD Workflow

The `.github/workflows/ci.yml` runs three jobs:
1. ESLint check (will fail)
2. TypeScript check (will fail)
3. Pytest check (will fail)

## Expected AutoHeal Behavior

When CI fails, AutoHeal should:
1. Receive webhook from GitHub Actions
2. Classify the error type (ESLint/TypeScript/Pytest)
3. Generate fix using LLM
4. Validate the fix
5. Create PR or push fix directly
6. Log result to `autoheal.log`

## Status

This repo is managed by AutoHeal Agent 0 for Phase 2 testing.
