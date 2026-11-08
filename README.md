# Agapetus Omar — leadership preview

Frontend for a Kilifi County leadership website. Phase 1 is interface only. Sample biography, quotes, programmes, photographs, and contact details are placeholders.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where content lives

- `src/data` — mock records
- `src/lib/content.ts` — the only access layer pages should call
- `src/types/content.ts` — shared TypeScript shapes

A later Supabase phase can replace the function bodies in `src/lib/content.ts`. Page components should stay as they are.

The contact form validates in the browser and then states that nothing was sent or stored.

Search engines are asked not to index the preview while the biography is unverified.
