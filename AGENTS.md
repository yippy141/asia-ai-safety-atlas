<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
## Environment limits
Your sandbox cannot fetch Google Fonts or other external assets at build
time. This is a sandbox limitation, not a bug in this repo. Never remove,
replace, or work around next/font or any font loading to make your local
build pass. If the build fails only on font fetching, note it in your
review notes and rely on the Vercel preview build as the real test.


Because next build cannot complete in this sandbox, always run
npx tsc --noEmit and npm run lint as the completion gate for any task.
