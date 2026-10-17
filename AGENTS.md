<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Tipografia & Hierarquia Visual

### Títulos Bicolores (Preto + Cinza Claro)
Em títulos e cabeçalhos compostos por duas partes (um trecho principal em `text-gray-900` seguido por um complemento em `text-gray-400`):
- **SEMPRE** faça o trecho em cinza mais claro (`text-gray-400`) pular uma linha, aplicando `className="block text-gray-400"` (ou `<br />` antes dele).
- **NUNCA** deixe o `text-gray-400` inline (`{" "}`) na mesma linha do `text-gray-900`, evitando quebras órfãs no meio da frase.

Exemplo correto:
```tsx
<h1 className="text-4xl sm:text-5xl font-semibold leading-[1.15] tracking-tight">
  <span className="block text-gray-900">{t.titleMain}</span>
  <span className="block text-gray-400">{t.titleMuted}</span>
</h1>
```
