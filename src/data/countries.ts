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
    "summary": "Singapore’s official materials show the most mature public assurance-and-evaluation stack in Southeast Asia among the PR2E countries: A.I. Verify, AI Verify Foundation, Project Moonshot, the Global AI Assurance Sandbox, the Singapore AI Safety Red Teaming Challenge, ISO/IEC 42001 accreditation activity, and 2026 standardisation efforts.",
    "government_posture": "Singapore sources continue to show a designation-plus-partnership AISI model, with IMDA as the overall government agency and a broader assurance ecosystem around AIVF. The fact-check-held National AI Council search-snippet claim is not used here.",
    "standards_evaluation": "Singapore’s assurance model is implementation-oriented: application testing, benchmarking, red teaming, assurance sandboxing, and accreditation around AI management systems are directly documented.",
    "research_ecosystem": "The captured sources are stronger on assurance tooling and system testing than on frontier technical safety research institutions, so this profile keeps the emphasis on assurance and evaluation implementation.",
    "industry_ecosystem": "AI Verify Foundation’s public pages show an ecosystem-facing model aimed at builders, deployers, and specialist testing vendors, rather than solely government internal use.",
    "international_engagement": "The Global AI Assurance Sandbox and IMDA’s 2026 standardisation announcement indicate that Singapore uses public assurance programmes to shape cross-border testing norms.",
    "open_questions": [
      "Detailed public scope, governance, and accreditation criteria for the AI Tester Accreditation Programme.",
      "Whether new statutory AI obligations are planned beyond current strategy-and-assurance instruments."
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
      "sg-imda-llm-starter-kit",
      "singapore-national-ai-strategy-page-2026",
      "imda-ai-verify-launch-2022",
      "ai-verify-foundation-home-2026",
      "global-ai-assurance-sandbox-main-report-2025",
      "singapore-ai-safety-red-teaming-challenge-page-2025",
      "sac-iso-42001-accreditation-programme-2025",
      "singapore-global-ai-testing-standardisation-2026"
    ],
    "last_verified": "2026-06-06"
  },
  {
    "slug": "regional",
    "country": "Regional",
    "region": "Southeast Asia",
    "summary": "ASEAN-wide profile for regional AI governance implementation. PR2E adds source-backed voluntary guidance, a generative-AI guide expansion, the Bangkok Digital Declaration, and a Malaysia official ASEAN AI Safe announcement while holding roadmap/search-snippet claims pending direct text.",
    "government_posture": "Regional posture remains coordination-first. The strongest official evidence supports voluntary guidance, political declarations, working-group responsibilities, and network announcements rather than supranational enforcement or delegated regulatory power.",
    "standards_evaluation": "Regional documents increasingly reference AI governance, safety, laws, regulations, and standards, but they do not by themselves prove regional testing infrastructure or binding conformance obligations.",
    "research_ecosystem": "Regional research and STI implementation remains lightly sourced in this import because the COSTI/AMMSTI evidence note was held as search-snippet based.",
    "industry_ecosystem": "The expanded ASEAN guide uses private and mixed-sector examples, but these are treated as illustrations rather than proof of national regulatory transposition.",
    "international_engagement": "ASEAN AI Safe is represented as a regional network initiative supported by a Malaysia official announcement; public governance details and operational work plans remain incomplete.",
    "open_questions": [
      "Public terms of reference, secretariat arrangement, work plan, or membership rules for ASEAN AI Safe.",
      "Whether a final public full-text PDF of the ASEAN Responsible AI Roadmap is available on an official site.",
      "How the ASEAN Working Group on AI Governance interacts with ADGSOM, COSTI, and other sectoral bodies in practice."
    ],
    "source_ids": [
      "report-asean-genai-governance-2026-06-05",
      "asean-guide-ai-governance-ethics-2024",
      "expanded-asean-guide-genai-2025",
      "bangkok-digital-declaration-2025",
      "malaysia-champions-asean-ai-safe-2025"
    ],
    "last_verified": "2026-06-06"
  },
  {
    "slug": "malaysia",
    "country": "Malaysia",
    "region": "Southeast Asia",
    "summary": "Malaysia has an official AI roadmap, voluntary national AI governance and ethics guidance, a launched National AI Office, public-sector AI adoption guidance, and a documented but still-under-development National AI Action Plan 2026–2030 process.",
    "government_posture": "Malaysia’s posture is implementation-building and coordination-heavy rather than already fully hard-law driven in the sources captured here. NAIO is presented as a central authority and policy shaper, but the retrieved materials do not establish it as a statutory regulator.",
    "standards_evaluation": "The strongest direct implementation evidence is governance guidance and public-sector self-assessment tooling, not a national model-testing lab or mandatory assurance regime.",
    "research_ecosystem": "The captured sources are heavier on policy and public administration than technical safety research. Additional primary sources would be needed to map Malaysia’s safety evaluation infrastructure in detail.",
    "industry_ecosystem": "NAIO’s working-group model explicitly includes technology, academia, industry, government agencies, and civil society, indicating a multi-stakeholder implementation approach.",
    "international_engagement": "Malaysia’s official materials connect domestic AI-coordination efforts to ASEAN AI Safe and broader regional responsible-AI work, without proving operational safety-testing infrastructure.",
    "open_questions": [
      "Whether and when the National AI Action Plan 2026–2030 was finalised after the February 2025 RFP.",
      "Whether NAIO’s incubation under MyDIGITAL is temporary or converts into a distinct statutory basis.",
      "Whether public-sector AI guidance is accompanied by any mandatory compliance circular or procurement rule."
    ],
    "source_ids": [
      "malaysia-ai-roadmap-2021-2025-page",
      "malaysia-national-ai-guidelines-page",
      "malaysia-national-ai-guidelines-pdf",
      "mydigital-naio-page",
      "naio-home-working-groups-page",
      "mydigital-national-ai-action-plan-rfp-2025",
      "jdn-public-sector-ai-guidelines-page",
      "gpaisa-self-assessment-tool",
      "malaysia-champions-asean-ai-safe-2025"
    ],
    "last_verified": "2026-06-06"
  },
  {
    "slug": "thailand",
    "country": "Thailand",
    "region": "Southeast Asia",
    "summary": "Thailand’s retrieved official materials show a layered governance posture: ETDA’s AI Governance Center, a 2019 AI ethics guideline, a 2023 executive AI governance guideline, a 2022–2027 national AI strategy page, and a 2025 consultation on draft AI-law principles.",
    "government_posture": "The official evidence supports governance guidance and draft-law consultation, but not a final enacted Thai AI law in the sources captured here.",
    "standards_evaluation": "Thailand’s strongest direct official evidence is governance frameworks, readiness and risk assessment toolkits, and ethics principles. This should not be mistaken for a fully operational national AI assurance centre unless directly sourced.",
    "research_ecosystem": "The expanded ASEAN generative-AI guide cites ThaiLLM as a use case, but that citation is illustrative and is not modeled as a national governance instrument by itself.",
    "industry_ecosystem": "Thailand’s documents suggest a policy direction that includes sandboxes and governance operations, while the existence of operational national AI testing infrastructure remains an evidence gap in this pack.",
    "international_engagement": "ETDA’s AIGC structure includes international advisory and networking functions, and Thailand’s national AI page references cooperation with foreign researchers and experts.",
    "open_questions": [
      "Whether Thailand has published a full draft AI law text or subsequent post-hearing revisions after June 2025.",
      "Whether any national AI sandbox or assessment centre has a publicly documented operational mandate and service catalogue.",
      "Which Thai agencies beyond ETDA hold delegated decision-making authority on AI regulation."
    ],
    "source_ids": [
      "etda-aigc-page",
      "thailand-ai-governance-guideline-executive-2023",
      "digital-thailand-ai-ethics-guideline-2019",
      "etda-draft-ai-law-pr-2025",
      "ai-thailand-national-strategy-2022-2027-page"
    ],
    "last_verified": "2026-06-06"
  },
  {
    "slug": "vietnam",
    "country": "Vietnam",
    "region": "Southeast Asia",
    "summary": "Vietnam is the clearest PR2E national case with binding instruments: official sources show a 2021 AI strategy, a dedicated AI Law enacted in December 2025, a February 2026 implementation plan, and an April 2026 implementing decree.",
    "government_posture": "Vietnam has moved from strategy to binding law and implementation planning, creating the strongest official AI-law posture among the Southeast Asian national cases captured here.",
    "standards_evaluation": "The captured sources do not yet provide detailed public evidence on specific evaluation labs or accreditation infrastructure under the new AI Law; they do show formal legal implementation.",
    "research_ecosystem": "The core country posture is grounded in official strategy and legal sources; broader research ecosystem details remain for later primary-source backfill.",
    "industry_ecosystem": "Vietnam’s ministry draft-law materials show a policy emphasis on AI definitions, risk management, labels, and stakeholder duties, indicating an implementation model that may later affect industry obligations under law.",
    "international_engagement": "Vietnam remains visible in ASEAN generative-AI use-case materials and cross-sector innovation programmes, but the strongest country evidence in this pack is domestic law and implementation planning.",
    "open_questions": [
      "Public secondary regulations, guidance documents, or ministry circulars under the AI Law beyond Decree 142/2026.",
      "Which ministry or interagency body is the principal AI-law implementation lead in operative practice.",
      "Whether official public documents exist on testing, conformity assessment, or third-party audit mechanisms under the AI Law."
    ],
    "source_ids": [
      "vietnam-ai-strategy-decision-127-2021",
      "vietnam-draft-digital-technology-industry-law-page-2024",
      "vietnam-ai-law-134-2025",
      "vietnam-ai-law-implementation-plan-367-2026",
      "vietnam-ai-law-decree-142-2026"
    ],
    "last_verified": "2026-06-06"
  },
  {
    "slug": "indonesia",
    "country": "Indonesia",
    "region": "Southeast Asia",
    "summary": "Indonesia’s strongest directly retrieved official evidence in PR2E is the 2023 ministerial circular on AI ethics plus a BRIN page indicating an AI and cybersecurity research centre under OREI.",
    "government_posture": "The captured official evidence supports an ethics-guidance posture and sectoral administrative expectations rather than a comprehensive national AI law or directly verified whole-of-government strategy implementation record.",
    "standards_evaluation": "No direct official evidence was captured here for national AI testing or assurance infrastructure. The circular focuses on ethics principles and internal company policies.",
    "research_ecosystem": "A BRIN institutional page indicates an AI and cybersecurity research centre, but public detail is sparse and needs stronger primary-source confirmation for programme mapping.",
    "industry_ecosystem": "The ethics circular is addressed to AI-programming businesses and public/private electronic system operators, with emphasis on internal policy, ethics, risk, and user protection.",
    "international_engagement": "This research run did not retrieve a direct official Indonesian source for Stranas KA implementation or a public cross-border AI safety mechanism beyond regional ASEAN references.",
    "open_questions": [
      "Direct official source for the Strategi Nasional Kecerdasan Artifisial 2020–2045 and any active implementation tracker.",
      "Whether Indonesia has issued further binding AI regulations after the 2023 ethics circular.",
      "Formal mandate and programme portfolio of the BRIN AI and Cybersecurity Research Center.",
      "Whether KORIKA has an official government-anchored public mandate page with current status."
    ],
    "source_ids": [
      "indonesia-ai-ethics-circular-2023",
      "brin-ai-cybersecurity-research-center-page-2025"
    ],
    "last_verified": "2026-06-06"
  },
  {
    "slug": "philippines",
    "country": "Philippines",
    "region": "Southeast Asia",
    "summary": "The strongest official Philippine evidence captured here is implementation-oriented under DOST-ASTI: an AI project portfolio page, the February 2026 launch of NAICRI, and a year-one flagship-program article linking NAICRI to ACABAI-PH.",
    "government_posture": "The retrieved primary sources are stronger on research and infrastructure implementation than on a final officially published National AI Strategy Roadmap 2.0 text.",
    "standards_evaluation": "No official national testing or assurance regime comparable to Singapore’s was directly captured here. The public evidence instead points to infrastructure, research coordination, and application development.",
    "research_ecosystem": "NAICRI is explicitly framed as a national institutional anchor, and DOST-ASTI’s AI page shows active application-building work including ASTI-ALaM under SkAI-Pinas.",
    "industry_ecosystem": "The captured official materials are focused on government research institutions and flagship-program implementation, not broad market governance or regulatory compliance systems.",
    "international_engagement": "The sources retrieved here do not directly document a cross-border Philippine AI governance mechanism; they do show institutional scaling and national infrastructure-building.",
    "open_questions": [
      "Direct official publication of the Philippines National AI Strategy Roadmap 2.0, if finalised.",
      "Public governance documents for ACABAI-PH, including mandate, membership, and implementation structure.",
      "Whether NAICRI has published service offerings, compute-access rules, or data-governance policies."
    ],
    "source_ids": [
      "philippines-dost-asti-ai-page",
      "philippines-naicri-launch-2026",
      "philippines-dost-ai-flagship-year1-2026"
    ],
    "last_verified": "2026-06-06"
  }
];
