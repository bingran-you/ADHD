# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ADHD Parent Coach App - A mobile app for parents of ADHD children that combines daily coaching tasks, assessment logging, and AI-based review. The app follows a "Six-Step" methodology adapted from professional ADHD parenting resources.

## Development Commands

```bash
cd adhd-rn

# Install dependencies
npm install

# Run on iOS Simulator (uses port 8082 to avoid conflicts)
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web

# E2E tests (iOS only, requires Detox setup)
npm run e2e:build    # Build release app for testing
npm run e2e:test     # Run Detox tests
```

### E2E Test Prerequisites
- macOS with Xcode and iOS Simulator
- AppleSimulatorUtils: `brew tap wix/brew && brew install applesimutils`
- Run `npx pod-install` after `npm install`
- Default simulator is iPhone 16 (configurable in `.detoxrc.js`)

## Architecture

### Entry Points
- `App.tsx` - Root component wrapping `CoachApp` with `ErrorBoundary`
- `src/coach/CoachApp.tsx` - Main app with all tabs and onboarding flow (~2300 lines, monolithic)

### Core App Structure (`src/coach/`)
The active app lives in `src/coach/`:
- **CoachApp.tsx** - Single-file app containing:
  - Tab navigation (today/log/coach/library/trend/profile)
  - 9-step onboarding flow with intake assessment
  - State management using React hooks
  - Profile, metrics, and task completion tracking
- **data.ts** - Task bank, strategy library, concern options, intake questionnaires
- **storage.ts** - SQLite persistence via expo-sqlite (daily_logs & app_state tables)
- **types.ts** - TypeScript types for metrics, events, and daily logs
- **theme.ts** - Design tokens (colors, spacing, fonts)
- **components/** - Reusable UI components (CoachButton, CoachChip, CoachScreen, etc.)

### Legacy/Reference Code (`src/screens/`, `src/components/`)
Contains Keep and Traini design prototypes - numbered screen components (Keep_01 through Keep_38, Traini_01 through Traini_11) used as visual references during development. Not part of the active app.

### Data Flow
1. App state (profile, onboarding status, today's state) persists to SQLite via `storage.ts`
2. Daily logs saved with metrics (attention, mood, transition, parentCalm, sleep) + events
3. Tasks generated from `taskBank` based on user's selected concerns
4. Coach suggestions built from current metrics and completed tasks

## Key Data Models

**Profile**: Child name, age range, concerns (1-6 areas), time budget, caregiver, intake questionnaire responses (A-F categories), good/hard time diaries

**DailyLog**: Date, 5 metric scores (1-5 scale), event (good/hard time with factors), completed tasks

**Task**: ID, title, summary, steps, optional duration, tags - organized by concern area in `taskBank`

## Tech Stack
- Expo SDK 54 / React Native 0.81 / React 19
- TypeScript with strict mode
- expo-sqlite for local persistence
- Detox for E2E testing (iOS only)

<!-- BEGIN FIRST-TREE-SOURCE-INTEGRATION -->
FIRST-TREE-SOURCE-INTEGRATION: source repo bound to dedicated tree repo `ADHD-tree`
FIRST-TREE-TREE-REPO: `ADHD-tree`
FIRST-TREE-TREE-MODE: `dedicated`
FIRST-TREE-BINDING-MODE: `standalone-source`
FIRST-TREE-TREE-REPO-URL: `https://github.com/bingran-you/ADHD-tree.git`
FIRST-TREE-ENTRYPOINT: `/`
FIRST-TREE-LOCAL-TREE-CONFIG: `.first-tree/local-tree.json`

This repo is a source/workspace repo. Keep all Context Tree files only in the dedicated `ADHD-tree` repo.

Before every task:
- Read `.first-tree/local-tree.json` first. If it exists, resolve its `localPath` value from this repo root and treat that checkout as the canonical local tree repo.
- If that configured checkout exists locally, update it before you read anything else.
- If the configured checkout is missing, clone a temporary working copy from `https://github.com/bingran-you/ADHD-tree.git` into `.first-tree/tmp/ADHD-tree/`, use it for the current task, and delete it before you finish.
- Never commit `.first-tree/local-tree.json` or anything under `.first-tree/tmp/` to this repo. They are local-only workspace state.

After every task:
- Always ask whether the tree needs updating.
- If the task changed decisions, constraints, rationale, ownership, or shared workspace relationships, open a PR in the tree repo first. Then open the source/workspace code PR.
- If the task changed only implementation details, skip the tree PR and open only the source/workspace code PR.
<!-- END FIRST-TREE-SOURCE-INTEGRATION -->
