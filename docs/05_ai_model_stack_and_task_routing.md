# AI Model Stack and Task Routing

Last reviewed: 2026-05-26. Model availability changes frequently, so verify before making long-term workflow decisions.

## Recommended working stack

Use different models for different jobs. Do not expect one model to do everything best.

### ChatGPT / OpenAI

Best uses:
- Project planning and reasoning.
- Deep research with citations.
- Turning sources into structured rows.
- Fact-checking and schema design.
- Data cleaning and transformation.
- Codex-based coding work.

Use ChatGPT Projects for long-running context. Upload the future context brief, current CSVs, methodology, and open questions.

Use Codex for repository tasks:
- Build components.
- Fix TypeScript/build errors.
- Refactor data types.
- Implement search/filter UI.
- Add tests.

### Claude

Best uses:
- Long-context synthesis.
- Editing and writing polished research pages.
- Critiquing product/design direction.
- Code review and implementation planning.
- Handling messy documents and restructuring them.

Claude is especially useful as a second-opinion model: ask it to find hidden assumptions, missing edge cases, overclaims, and confusing UI choices.

### Gemini

Best uses:
- Long-context document review.
- Multimodal and PDF-heavy work.
- Deep research across many public sources.
- Google ecosystem workflows.
- Cross-checking local-language source summaries.

### Chinese-language and local models

For Chinese-first research, use Chinese models as discovery and translation aids, not as final arbiters.

Useful roles:
- Generate better Chinese search terms.
- Explain local policy phrasing.
- Summarize Chinese government/company pages.
- Identify domestic source ecosystems.
- Cross-check whether English translations sound natural.

Examples to consider when available:
- Qwen for Chinese-language reasoning and open ecosystem work.
- Kimi for long-context Chinese document reading.
- DeepSeek for Chinese reasoning and cost-effective API use.

Final facts should still be based on explicit source records.

## Suggested routing table

| Task | Primary tool | Secondary/check |
|---|---|---|
| Product strategy | ChatGPT Thinking | Claude |
| Coding implementation | Codex | Claude Code / ChatGPT |
| UI critique | Claude | ChatGPT |
| Deep web research | ChatGPT Deep Research or Gemini Deep Research | Manual verification |
| Chinese search terms | Qwen/Kimi/DeepSeek | ChatGPT/Claude |
| Chinese source summarization | Qwen/Kimi | ChatGPT/Claude fact-check |
| Japanese/Korean source summarization | Gemini/ChatGPT | Claude |
| Data schema design | ChatGPT | Claude |
| Fact-checking | ChatGPT + source CSV | Claude adversarial review |
| Launch essay | Claude | ChatGPT fact-check |
| Translation QA | Local-language model | Human or second model |

## Multi-model workflow pattern

1. Research model produces source-backed rows.
2. Fact-check model flags unsupported claims.
3. Local-language model checks names, terms, and translation nuance.
4. Coding agent imports the cleaned rows.
5. Design model critiques the UI.
6. Human decides what ships.

## Prompting rule

Each model should receive a narrow job. Bad prompt: “Research China AI safety and build my site.” Good prompt: “Using these 12 Chinese sources, extract only explicit relationships into the relationship CSV schema and mark confidence.”

## Cost/time control

Use deep research only for clusters and Tier 1 actors. Use quick search/summarization for Tier 2 and Tier 3. Do not pay for a 30-minute research run for every entity.

## Human review

For sensitive country analysis, AI is not enough. Use human review where possible for:
- Chinese political terminology.
- Institutional hierarchy.
- Names and title translations.
- Sensitive dual-use topics.
- Claims about engagement feasibility.
