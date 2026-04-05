# Repository Guidelines

## Project Structure & Module Organization
Top-level docs such as `README.md`, `PRD_ADHD_parent_coach.md`, `ADHD_assessment_items.md`, and `Reference*/` provide product and content context. The runnable app lives in `adhd-rn/`. `adhd-rn/App.tsx` boots `src/coach/CoachApp.tsx`, which is the main parent-coach flow. Reusable UI is split across `src/coach/components/`, `src/components/keep/`, and `src/components/traini/`. Theme tokens live in `src/coach/theme.ts` and `src/theme/`. Screen mockups are organized under `src/screens/Keep/` and `src/screens/Traini/` with filenames like `Keep_01.tsx`; `src/screens/registry.ts` is marked auto-generated, so avoid manual churn there.

## Build, Test, and Development Commands
Run commands from `adhd-rn/`.

- `npm install`: install JavaScript dependencies.
- `npm run ios`: start Expo for iOS on port `8082`.
- `npm run android`: start Expo for Android.
- `npm run web`: start the web preview.
- `npx pod-install`: refresh iOS pods after native dependency changes.
- `npm run e2e:build`: build the Detox iOS test app.
- `npm run e2e:test`: run the Detox suite in `e2e/`.

## Coding Style & Naming Conventions
Use TypeScript in strict mode and follow the existing code style: 2-space indentation, semicolons, single quotes, and `StyleSheet.create(...)` for screen-local styles. Prefer PascalCase for component files (`CoachButton.tsx`, `KeepScreen.tsx`), numeric suffixes for scripted screen files (`Traini_07.tsx`), and camelCase for variables, helpers, and state keys. Keep `testID` values stable and descriptive because the Detox flow depends on them.

## Testing Guidelines
End-to-end coverage currently uses Detox with Jest under `adhd-rn/e2e/`. Name new specs `*.e2e.js` or `*.e2e.ts` and script flows through visible `testID`s. For changes to onboarding, logging, tabs, storage, or navigation, run `npm run e2e:build` and `npm run e2e:test`. There is no separate unit-test setup yet, so also do a manual smoke test in Expo on the platform you changed.

## Commit & Pull Request Guidelines
Recent history favors short, action-first subjects such as `Polish wording`, `Update data.ts`, and `Fix end to end refactor issues`. Keep commits focused and use an imperative summary line. Pull requests should explain the user-facing change, list validation steps, link the relevant issue or product doc when applicable, and include screenshots or simulator captures for UI changes.

FIRST-TREE-SOURCE-INTEGRATION: Use the installed `first-tree` skill here; keep all Context Tree files only in the sibling dedicated `ADHD-context` repo/submodule and update that tree when decisions or constraints change.
