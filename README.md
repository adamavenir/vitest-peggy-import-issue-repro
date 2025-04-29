# vitest-peggy-import-issue-repro

Vitest’s SSR transform keeps choking on the first export inside a Peggy-generated parser.mjs (pure ESM).

Any combo of deps.inline, ssr.noExternal, renaming to .mjs, generating CJS instead, etc consistently results in the same crash.