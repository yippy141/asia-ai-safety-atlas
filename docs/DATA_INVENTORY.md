# Data inventory

Date: 2026-07-07. Written as Stage 0 of the map/dossier/political-economy build.
Scope: everything in `src/data/` and `tmp/` at the start of the build, plus an
assessment of which features in `docs/03_map_and_dossier_spec.md` have enough
data to ship.

## 1. What exists in src/data

| File | Records | Notes |
|---|---|---|
| entities.ts | 91 | 38 China, 11 Singapore, 7 Japan, 6 South Korea, rest across APAC. Tiers: 63 tier 1, 26 tier 2, 2 tier 3. No tier 0 records exist. |
| sources.ts | 213 | Slug ids. Mix of primary regulations, institutional pages, research briefs. |
| evidenceNotes.ts | 224 | Claim-level notes with quotes, bound to source ids. |
| relationships.ts | 60 | Typed, evidence-backed edges. |
| events.ts | 16 | Includes dialogue and summit records. |
| policies.ts | 21 | Policy and standard records. |
| researchOutputs.ts | 27 | |
| countries.ts | 11 | Country profiles. |
| insights.ts | 1 | One published insight. |
| glossary.ts | ~10 terms | |
| changelog.ts | small | Maintenance timestamps. |

China tier 0-1 entities with three or more source records (dossier threshold
input): cn-cac (5), cn-miit (6), cn-tc260 (7), cn-caict (6), cesi (6),
tc260-wg9 (3), aiia (4), cn-tsinghua-ciss (4), opencompass (4), tc28-sc42 (3),
miit-tc1 (3), flag-eval (3), plus the frontier-developer company rows
(zhipu-ai-glm 5, baidu-ernie 5, tencent-hunyuan 5, bytedance-doubao 5,
minimax 6, stepfun 5, moonshot-kimi 4, deepseek 3).

Baseline repair applied in this stage: `npm run validate:data` failed on the
committed data. cn-tsinghua-iaiig referenced a source id that does not exist
(tsinghua-iaiig-introduction-2024) and bigai referenced a missing source
(bigai-about-2026) while claiming needs_primary_source: false. The dangling
ids were removed and bigai was downgraded to needs_primary_source: true. No
source content was added.

## 2. What exists in tmp/

### report9.json (the interlocutor research payload)

Sections and record counts: sources 40, institution_dossiers 20,
person_profiles 14, issue_interlocutor_assessments 12, relationships 11,
events 8, public_positions 8, programs_outputs 12, watch_items 6,
rejected_or_uncertain_claims 6, evidence_notes 5 (methodology rules, not
claim notes), source_search_log 6.

All claims cite `citeturn…` markers that must resolve through the
materialization file below.

### report9_sources.json (the materialization file)

133 reference entries. **Only 6 carry a real URL** (5 verified_opened, 1
verified_search); **127 are status "unresolved" with no URL.** This is the
binding constraint on the whole ingest: under the evidence rules, a claim can
only be ingested if its reference resolves here or if the same fact is already
covered by an existing source record in src/data/sources.ts.

The six resolved references:

| ref | Document | Already in atlas? |
|---|---|---|
| turn4search0 | 生成式人工智能服务管理暂行办法 (CAC page) | yes, cac-generative-ai-measures-2023 |
| turn4search1 | 互联网信息服务算法推荐管理规定 (CAC page) | no, new |
| turn4search2 | 互联网信息服务深度合成管理规定 (CAC page) | yes, cac-deep-synthesis-provisions-2022 |
| turn7search5 | MOST 2019 新一代人工智能治理原则 | no, new |
| turn11search2 | 人工智能生成合成内容标识办法 (CAC page) | yes, cac-ai-content-labeling-measures-2025 |
| turn11search12 | GB 45438-2025 标识方法 (SAMR standard registry) | no, new |

Consequence: at most 3 new source records can be created from report9. Person
roles in report9 cite only unresolved references. The single person role that
survives on existing atlas evidence is Zhou Bowen as head of TC260 WG9
(evidence note en-shlab-heads-wg9, source shlab-wg9-formation-2026).

### ai plus deep research.md → ai_plus_pe.json

The political-economy payload for /briefings/china-ai-plus. A fenced JSON
block; extracted verbatim to tmp/ai_plus_pe.json in this stage (restructuring
only, no content change). Contents: 24 pe_claims, every claim carries inline
sources with URLs (49 source URLs total), 7 jurisdiction notes, 7 open
questions. Jurisdictions: national (11), Shanghai (2), Shenzhen (2), Beijing,
Zhejiang/Hangzhou, Jiangsu, Sichuan/Chengdu, GBA/Hetao, Guangdong, Fujian
(flagged operating assumption), central-local dynamics.

### China AI Policy Research Plan.md

A predecessor deep-research report on the same AI+ topic. The newer payload
above explicitly corrects it (its own notes flag the prior report's foreign
investment reading, mistranslation of 安全, and unlabeled inference). Treated
as superseded background; not ingested. Its pe_claims block cites aggregator
URLs (zhaozhengce.cn, cnten.com) that the corrected payload dropped.

### Legacy payloads (already ingested in earlier PRs)

pr2a_china_backfill, pr2b_aisi_comparison_backfill, pr2c_china_west_dialogue,
PR2D frontier developers, PR2E ASEAN, PR2F technical groups, pr2g western
comparator, plus their factcheck files and source_url_repair_map.json. These
are reflected in the current src/data counts and are not re-ingested.

## 3. Missing binding input

`docs/00_READ_FIRST.md` (the report-9 closure list) does not exist in the
repo or in tmp/. The two closures named in the build instruction are applied
from the instruction text itself:

1. Xue Lan flip to public with sourced roles: **blocked by data.** His roles
   cite turn24search1 / turn24search10, both unresolved, and no existing
   atlas source covers him. Recorded as a gap, not improvised.
2. MFA coordinator claim: report9 does not state MFA is "the coordinator" of
   China's AI governance; its MFA dossier calls MFA the diplomatic channel.
   All MFA references (turn29…) are unresolved, so no MFA entity or claim is
   ingested at all. The closure is satisfied by omission, logged.

Any further closures that 00_READ_FIRST.md may have listed could not be
applied and are unknown.

## 4. Spec-feature sufficiency

| Spec feature | Data status |
|---|---|
| /orgs/[id] dossiers, China tier 0-1 | Sufficient for roughly 6-10 orgs from existing sources plus the 3 new ones. Importance reasoning can cite existing source ids. Leadership sections will be thin: only one person record has a sourced role. |
| /people/[id] | Minimal: one renderable person (Zhou Bowen). 13 of 14 report9 person profiles have no resolvable source for any role and are skipped. |
| /map | Feasible for dossier entities plus standards bodies. Authority bands 0 (party center) and 1 (state council) will hold no nodes: the atlas has no sourced entities at those levels (no NDRC, MOST, State Council, or party-commission entity records could be created from resolved sources). |
| /briefings/china-ai-plus | Sufficient. 24 fully sourced PEClaims. |
| Relationship edges on map selection | Sufficient from existing 60 relationships. |
| Countries selector on map | China only; other countries get no MapPosition records this release. |
