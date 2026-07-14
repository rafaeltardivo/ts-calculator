# ts-calculator

A demo TypeScript calculator project.

This repository is intended to demonstrate **stacked pull requests using vanilla GitHub** — no third-party tooling like Graphite. Each layer of the stack is a feature branch based on the previous one, with a pull request targeting the branch below it.

## Supported Operations

- Multiplication
- Division

## Structure

```
main
└── feature/add-calculator ([PR #3](https://github.com/rafaeltardivo/ts-calculator/pull/3))
    └── feature/add-multiply ([PR #4](https://github.com/rafaeltardivo/ts-calculator/pull/4))
        └── feature/add-divide ([PR #5](https://github.com/rafaeltardivo/ts-calculator/pull/5))
```

## Changes

- **[PR #3](https://github.com/rafaeltardivo/ts-calculator/pull/3) – Project structure:** README, .gitignore, tsconfig.json (ES2020), package.json, ESLint flat config
- **[PR #4](https://github.com/rafaeltardivo/ts-calculator/pull/4) – Multiply:** `src/multiply.ts` + `tests/multiply.test.ts` (3 test cases)
- **[PR #5](https://github.com/rafaeltardivo/ts-calculator/pull/5) – Divide:** `src/divide.ts` + `tests/divide.test.ts` (3 test cases) — division by zero not handled
