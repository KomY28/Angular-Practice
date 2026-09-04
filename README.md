# Angular Practice 🎓

This is a learning log — I'm practicing Angular as a junior developer under the guidance of a senior mentor, 3 times a week. Each session I get a small project to solve on my own, then we review and fix it step by step.

**Goal:** to confidently use modern Angular (signals, standalone components, the new control flow) at a junior level.

## Log

| Day | Project | What it covered |
|-----|---------|------------------|
| [Day 1](./day-01-product-catalog/product-catalog) | Product Catalog | Signal-based state management in a service (`signal`, `asReadonly`), standalone components, `@for`/`@if` control flow, dynamic `routerLink` (array syntax), routing (`/products`, `/products/:id`, wildcard route), `input()` route param binding (`withComponentInputBinding`), `computed()` signal combined with a service call |
| [Day 2](./day-02-product-catalog/product-catalog) | Product Catalog — CRUD | Adding/removing items with signals (`.update()` vs `.set()`), reliable ID generation (`map` + `Math.max` + spread), Reactive Forms (`FormGroup`, `FormControl`, `Validators.required`, `ReactiveFormsModule`), `(ngSubmit)` event binding, TypeScript type conversions (`as` vs `Number()`) |

## How I'm learning

At the end of each session I write a short summary of the harder, newly learned concepts — these help me look back at what was difficult, and why things work the way they do.

## Tech stack

- Angular (latest version, standalone components)
- TypeScript
- Signals (`signal`, `computed`, `input`)
- Angular Router (modern control flow, component input binding)
- Reactive Forms

## Running a daily project

Each day is its own, standalone Angular project in its own folder. Go into that day's folder, then:

```bash
npm install
ng serve
```
