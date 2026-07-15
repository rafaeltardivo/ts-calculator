# Stacked Pull Requests

Stacked pull requests are a technique for breaking large features into a chain
of smaller, focused PRs where each one builds on top of the previous. Instead
of opening one giant PR, you stack branches on each other and open a PR per
layer, each targeting the branch below it.

This keeps individual diffs small and reviewable, and makes it clear how the
work progresses from one change to the next.

## How it works

Each branch in the stack is based on the one before it:

```
main
└── branch-a         → PR targets main
    └── branch-b     → PR targets branch-a
        └── branch-c → PR targets branch-b
```

When the bottom PR merges, the next one is retargeted to `main` and becomes
the new bottom of the stack. This repeats until the stack is fully merged.

## This stack

| PR | Branch | Targets | Description |
|----|--------|---------|-------------|
| [#3](https://github.com/rafaeltardivo/ts-calculator/pull/3) | `feature/add-calculator` | `main` | Project structure |
| [#4](https://github.com/rafaeltardivo/ts-calculator/pull/4) | `feature/add-multiply` | `feature/add-calculator` | Multiply operation |
| [#5](https://github.com/rafaeltardivo/ts-calculator/pull/5) | `feature/add-divide` | `feature/add-multiply` | Divide operation |

## Learning opportunities

Because each PR introduces only one concern, the diff is small and focused.
This creates a better environment for learning from the code:

- **Easier to reason about each change** — you don't need to hold the entire
  feature in your head to understand what a single PR does.
- **Bugs and design issues are more visible** — problems that would be buried
  in a large diff are easier to spot when the context is small.
- **The evolution of the code is explicit** — each layer builds on the
  previous one, so you can follow how the codebase grows one step at a time.

## Merge order

PRs must be merged bottom-up. Merging out of order will cause the diffs of
downstream PRs to include changes that don't belong to them.

1. Merge PR #3 → retarget PR #4 to `main`
2. Merge PR #4 → retarget PR #5 to `main`
3. Merge PR #5
