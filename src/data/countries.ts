import type { CountryProfile } from "@/types";

export const countries: CountryProfile[] = [
  {
    "slug": "china",
    "country": "China",
    "region": "East Asia",
    "summary": "China now has source-backed standards/evaluation records, a first dialogue/event layer, and PR2D public-disclosure records for major Chinese frontier-model developers. The developer layer is modeled as platform governance, compliance, content-safety, privacy, API-control, model-card, repository, and evaluation-tooling disclosure rather than preparedness-framework evidence.",
    "government_posture": "CAC and MIIT remain the core official standards/evaluation regulators in the atlas. PR2D adds company disclosure rows that often align with Chinese compliance requirements around lawful content, platform terms, user-data handling, and generated-content labeling.",
    "standards_evaluation": "TC260, TC28/SC42, CAICT, CESI, CSTC, MIIT/TC1, WG9, OpenCompass, FlagEval, and related benchmark or working-group nodes remain represented with primary sources. PR2D adds developer-side model-evaluation and platform-evaluation disclosures from Zhipu, Baidu Qianfan, Volcengine Ark, and other company documentation, while avoiding unsupported dangerous-capability claims.",
    "research_ecosystem": "SHLAB and BAAI remain the strongest source-backed research/evaluation infrastructure nodes. PR2D adds open-weight and model-card documentation from company developers including DeepSeek, Qwen, Kimi, MiniMax, and 01.AI, but treats training/alignment language as technical disclosure rather than advanced-risk governance.",
    "industry_ecosystem": "PR2D adds major Chinese frontier-developer records. Visible public disclosures are concentrated in content moderation, provenance labeling, privacy and user-data handling, API-key controls, platform security, model cards, repository releases, and evaluation tooling; public first-party evidence for catastrophic-risk governance, dangerous-capability testing, external red-teaming, or preparedness frameworks remains sparse.",
    "international_engagement": "PR2C adds conservative public engagement pathways: repaired Brookings-CISS sixth U.S.-China dialogue output, repaired CISS-HD China-EU AI and International Security Dialogue rounds, summit-diplomacy event records, and the exact existing CnAISDA Paris side-event source. These are dialogue channels, not partnership claims. PR2D did not locate strong primary-source evidence of cross-border frontier-safety commitments from the reviewed companies.",
    "open_questions": [
      "How should CAC and the Central Cyberspace Affairs Commission Office be modeled when source text names one or the other?",
      "Which benchmark systems should become standalone profile pages as the atlas expands?",
      "Which official sources, if any, establish domestic testing or audit mandates for dialogue-network entities?",
      "Which exact source should anchor the seventh U.S.-China AI and International Security Dialogue row?",
      "Which French institution was the named counterpart in the first Beijing AISI China-France dialogue?",
      "Which unrepaired homepage-only forum sources should be reattached before importing the broader I-AIIG and IDAIS event rows?",
      "Which Chinese companies have unpublished but real internal frontier-safety processes not visible in public documentation?",
      "Are any third-party red-team results or external audits available in Chinese but outside the reviewed platform docs?",
      "Which developers will publish model-specific safety cards or preparedness policies as frontier capabilities advance?"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "report-technical-research-groups-2026-06-05",
      "report-china-west-dialogue-2026-06-05",
      "cac-generative-ai-measures-2023",
      "cac-national-ai-standardization-guide-2024",
      "tc260-genai-service-security-requirements-2024",
      "tc260-ai-safety-governance-framework-2024",
      "caict-about-us",
      "caict-ai-risk-governance-report-2024",
      "caict-fangsheng-benchmark-report-2024",
      "cesi-basic-info",
      "cesi-qiusuo-benchmark-2024",
      "shlab-wg9-formation-2026",
      "baai-flageval-system-page",
      "cnaisda-tsinghua-paris-side-event-2025",
      "gov-uk-bletchley-declaration-2023",
      "gov-uk-ai-seoul-summit-2024",
      "industry-au-seoul-declaration-2024",
      "elysee-ai-action-summit-overview-2025",
      "elysee-ai-action-summit-declaration-2025",
      "reuters-china-vice-premier-paris-ai-summit-2025",
      "brookings-ai-glossary-2024",
      "ciss-china-eu-ai-security-dialogue-round-2-2024",
      "ciss-china-eu-ai-security-dialogue-round-5-2026",
      "farai-idais-page",
      "cnaisda-shanghai-qizhi-side-event-2025",
      "zhipu-model-evaluation",
      "baidu-qianfan-content-marking",
      "tencent-hunyuan-image-faq",
      "volcengine-model-evaluation",
      "stepfun-openai-migration",
      "kimi-k2-instruct-model-card",
      "minimax-content-labeling-announcement",
      "yi-license"
    ],
    "last_verified": "2026-06-05"
  },
  {
    "slug": "japan",
    "country": "Japan",
    "region": "East Asia",
    "summary": "Japan AISI is publicly structured as an IPA-hosted institution linked to Cabinet Office coordination rather than as a standalone statutory regulator. Its public profile is guidance- and evaluation-methods-heavy.",
    "government_posture": "Cabinet Office coordination and IPA hosting are supported by primary sources; the public record reviewed does not establish Japan AISI as a standalone statutory regulator.",
    "standards_evaluation": "Reviewed primary sources support a stack centered on evaluation methods, guidance, an OSS evaluation tool, and evaluation-environment building. Public evidence reviewed does not yet support classifying Japan AISI as an assurance accreditor or certification body.",
    "research_ecosystem": "Japan AISI public materials emphasize evaluation methods, guidance, OSS tooling, and evaluation-environment work; broader research ecosystem expansion remains for later PRs.",
    "industry_ecosystem": "Reviewed sources mention evaluation-environment task-force activity with companies, but the atlas does not model those company links until corresponding source-backed entities are added.",
    "international_engagement": "Japan AISI publicly reports participation in the International Network of AI Safety Institutes and testing/evaluation co-chairing with Singapore.",
    "open_questions": [
      "How far Japan AISI will move into conformity assessment or formal assurance.",
      "How durable the Cabinet Office coordination structure will be."
    ],
    "source_ids": [
      "report-japan-korea-singapore-aisi-2026-06-05",
      "jpn-aisi-about-page",
      "jpn-cabinet-office-aisi-liaison-setup",
      "jpn-integrated-innovation-strategy-2024",
      "jpn-aisi-activity-paper-2025-03",
      "jpn-aisi-eval-tool-oss-post",
      "jpn-aisi-eval-env-taskforce-report-post"
    ],
    "last_verified": "2026-06-05"
  },
  {
    "slug": "south-korea",
    "country": "South Korea",
    "region": "East Asia",
    "summary": "Korea AISI is publicly sharper on mandate than Japan’s reviewed model: MSIT launched it, ETRI is its clearest institutional home, and its own pages divide work into policy, evaluation, and research.",
    "government_posture": "MSIT launched Korea AISI and ties it to post-Seoul-Summit implementation and international AI safety networking; ETRI is the clearest public institutional home.",
    "standards_evaluation": "Korea AISI’s own pages emphasize risk definition, frameworks, evaluation infrastructure, and execution. Adjacent standards/certification functions appear in the TTA/MSIT trustworthiness-guide ecosystem, which should be analytically separated from Korea AISI unless future primary sources fuse them.",
    "research_ecosystem": "Korea AISI and ETRI sources support a policy, evaluation, and research structure centered on risk definition, frameworks, infrastructure, and execution.",
    "industry_ecosystem": "The Korea AI Safety Consortium is modeled as a support and coordination node, while full signed membership remains an open question.",
    "international_engagement": "MSIT explicitly places Korea AISI inside the International Network of AI Safety Institutes. Consortium material shows subgroup discussion around international joint testing.",
    "open_questions": [
      "Exact division of labour between Korea AISI and TTA.",
      "Full consortium roster in primary sources."
    ],
    "source_ids": [
      "report-japan-korea-singapore-aisi-2026-06-05",
      "kor-aisi-vision-mission",
      "kor-aisi-evaluation-page",
      "kor-msit-launch-release",
      "kor-etri-aisi-page",
      "kor-msit-tta-nist-crosswalk-release",
      "kor-aisi-consortium-meeting-post"
    ],
    "last_verified": "2026-06-05"
  },
  {
    "slug": "singapore",
    "country": "Singapore",
    "region": "Southeast Asia",
    "summary": "Singapore AISI should not be treated as institutionally equivalent to Japan or Korea. Reviewed primary sources show a designation-plus-partnership model: DTC is the designated AISI and IMDA is the overall government agency.",
    "government_posture": "Singapore sources show a designation-plus-partnership model: DTC is the designated Singapore AISI and IMDA is the overall government agency for baseline policy and international engagement.",
    "standards_evaluation": "Singapore has the richest public assurance ecosystem in the three-country stack reviewed: AI Verify Testing Framework, Project Moonshot, IMDA’s Starter Kit, the Global AI Assurance Sandbox, and AI TAP. These should be separated from Singapore AISI proper in atlas modeling.",
    "research_ecosystem": "DTC at NTU and Singapore AISI provide the public technical and research backbone for the Singapore AISI model.",
    "industry_ecosystem": "AI Verify Foundation, AI Verify, Project Moonshot, the Global AI Assurance Sandbox, and AI TAP are modeled as adjacent assurance infrastructure rather than folded into Singapore AISI itself.",
    "international_engagement": "Singapore AISI says it leads the testing track in the International Network of AI Safety Institutes and publishes joint-testing outputs with Korea and with Japan plus the UK.",
    "open_questions": [
      "Whether Singapore AISI will become a more standalone institution.",
      "How to separate AISI functions from the wider IMDA/AIVF assurance ecosystem in future updates."
    ],
    "source_ids": [
      "report-japan-korea-singapore-aisi-2026-06-05",
      "report-asean-genai-governance-2026-06-05",
      "sg-aisi-about-page",
      "sg-aisi-work-page",
      "sg-aisi-resources-page",
      "sg-dtc-home-page",
      "sg-ai-verify-foundation-about",
      "sg-ai-verify-testing-framework-page",
      "sg-project-moonshot-page",
      "sg-global-ai-assurance-sandbox-page",
      "sg-ai-tester-accreditation-page",
      "sg-imda-llm-starter-kit"
    ],
    "last_verified": "2026-06-05"
  },
  {
    "slug": "regional",
    "country": "Regional",
    "region": "Southeast Asia",
    "summary": "The regional profile holds ASEAN-wide governance records until country-specific entries are expanded.",
    "government_posture": "ASEAN-level coordination is represented through the Working Group on AI Governance seed record.",
    "standards_evaluation": "Regional standards and assurance work is represented conservatively pending primary-source backfill.",
    "research_ecosystem": "Research ecosystem expansion is deferred to later PRs.",
    "industry_ecosystem": "Industry ecosystem expansion is deferred to later PRs.",
    "international_engagement": "Regional governance and capacity-building channels are the focus for PR 1.",
    "open_questions": [
      "How should ASEAN-wide entities be linked to individual country pages without implying national ownership?"
    ],
    "source_ids": [
      "report-asean-genai-governance-2026-06-05"
    ],
    "last_verified": "2026-06-05"
  }
];
