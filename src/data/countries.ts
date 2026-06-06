import type { CountryProfile } from "@/types";

export const countries: CountryProfile[] = [
  {
    "slug": "china",
    "country": "China",
    "region": "East Asia",
    "summary": "China now has source-backed standards/evaluation records, dialogue/event records, frontier-developer disclosure records, and PR2F public technical-safety research rows. PR2F adds PKU alignment tooling, BAAI FlagSafe/FlagEval, OpenCompass, BIGAI TongTest, and RUC interpretability/safety-alignment signals without treating generic AI work as frontier safety.",
    "government_posture": "The PR2F technical-safety slice is carried mainly by universities, research institutes, and public platforms rather than by a stand-alone national AISI equivalent in the reviewed sources.",
    "standards_evaluation": "FlagEval and OpenCompass remain public evaluation infrastructures, while FlagSafe adds more overt safety framing with red-team, defense, deception, alignment, and interpretability modules. These are modeled as public technical/evaluation infrastructure, not regulatory mandates.",
    "research_ecosystem": "Public technical research spans Safe-RLHF, multimodal alignment, alignment brittleness, deception evaluation, interpretability and AGI-style value-oriented testing. Borderline rows remain medium confidence where source detail is thin.",
    "industry_ecosystem": "The most visible PR2F actors are university, quasi-public, or institute-linked platforms rather than purely private frontier labs.",
    "international_engagement": "FlagSafe and OpenCompass are internationally legible public tooling stacks, but this import does not infer cross-border partnerships from mere public availability.",
    "open_questions": [
      "Need stronger primary evidence for PKU’s broader Center for AI Safety and Governance.",
      "Need more public detail on AI45Lab and Tsinghua-linked technical safety work.",
      "Which platform outputs should become separate public pages as research-output UI matures?"
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
      "yi-license",
      "src-pku-align-anything",
      "src-pku-brittleness",
      "src-flagsafe-home",
      "src-flageval",
      "src-opencompass-launch"
    ],
    "last_verified": "2026-06-06"
  },
  {
    "slug": "japan",
    "country": "Japan",
    "region": "East Asia",
    "summary": "Japan has a clear public-source technical safety stack through NII LLMC, LLM-jp Safety WG, Japan AISI guidance, and Japanese benchmark work from SB Intuitions and RIKEN-linked teams.",
    "government_posture": "Japan AISI’s published evaluation and red-team guides indicate a concrete LLM-system safety-evaluation posture; this profile keeps AISI guidance separate from broader research outputs.",
    "standards_evaluation": "Public documentation covers evaluation scope, red-teaming methods, prompt-injection classes, Japanese safety-boundary testing, guardrail benchmarking, and safety-enhancing Japanese datasets.",
    "research_ecosystem": "The ecosystem mixes institutional coordination with concrete outputs on guardrails, safety datasets, and interpretable trustworthy foundation technologies. RIKEN NLU remains medium-confidence for core frontier-safety relevance.",
    "industry_ecosystem": "SB Intuitions is the strongest publicly visible corporate technical-safety actor in the reviewed record.",
    "international_engagement": "NII’s symposium and LLM-jp ecosystem appear designed to connect academic, industry, and policy actors in an internationally legible format.",
    "open_questions": [
      "Need public repository-level mapping for more LLM-jp Safety WG outputs.",
      "Need more direct frontier-model safety outputs from RIKEN NLU specifically."
    ],
    "source_ids": [
      "report-japan-korea-singapore-aisi-2026-06-05",
      "jpn-aisi-about-page",
      "jpn-cabinet-office-aisi-liaison-setup",
      "jpn-integrated-innovation-strategy-2024",
      "jpn-aisi-activity-paper-2025-03",
      "jpn-aisi-eval-tool-oss-post",
      "jpn-aisi-eval-env-taskforce-report-post",
      "src-nii-llmc",
      "src-llmjp-resources",
      "src-japan-aisi-eval",
      "src-japan-aisi-redteam",
      "src-sb-safety-boundary",
      "src-riken-answercarefully"
    ],
    "last_verified": "2026-06-06"
  },
  {
    "slug": "south-korea",
    "country": "South Korea",
    "region": "East Asia",
    "summary": "South Korea’s public technical-safety ecosystem is anchored by Korea AISI plus university evaluation work at Soongsil and method-level safety research at KAIST.",
    "government_posture": "Korea AISI publicly emphasizes dangerous-capability categories, evaluation infrastructure, international cooperation, and ETRI affiliation.",
    "standards_evaluation": "The clearest public evaluation signals are Korea AISI’s risk and infrastructure pages, its 42-model disclosure, and Soongsil’s 20-model benchmark with 57 attacks.",
    "research_ecosystem": "Public work covers jailbreak defense, transformer interpretability, prompt-injection and jailbreak evaluation, and broader security framing for Korean and foreign foundation models.",
    "industry_ecosystem": "The Soongsil benchmark explicitly tests major Korean foundation models alongside leading foreign systems.",
    "international_engagement": "Official AISI materials frame Korea’s institute as part of the wider international AISI network.",
    "open_questions": [
      "Need public links to Korea AISI datasets and tools, not just institutional descriptions.",
      "Need stronger direct-source evidence for additional Korean university labs beyond KAIST AIPR and Soongsil."
    ],
    "source_ids": [
      "report-japan-korea-singapore-aisi-2026-06-05",
      "kor-aisi-vision-mission",
      "kor-aisi-evaluation-page",
      "kor-msit-launch-release",
      "kor-etri-aisi-page",
      "kor-msit-tta-nist-crosswalk-release",
      "kor-aisi-consortium-meeting-post",
      "src-korea-aisi-home",
      "src-korea-aisi-42models",
      "src-soongsil-llm-safety",
      "src-kaist-aipr-home"
    ],
    "last_verified": "2026-06-06"
  },
  {
    "slug": "singapore",
    "country": "Singapore",
    "region": "Southeast Asia",
    "summary": "Singapore’s public technical-safety record is strongest in open testing infrastructure and university-based methods: AI Verify Foundation / Moonshot, SMU agent-safety and model-security work, and NUS TrustLLM plus formal-methods framing.",
    "government_posture": "The most visible posture is assurance-oriented and tooling-centric rather than centered on a frontier-model developer.",
    "standards_evaluation": "Project Moonshot gives Singapore a concrete public LLM benchmarking and red-teaming artifact; TrustLLM adds a peer-reviewed benchmark contribution.",
    "research_ecosystem": "Public technical work spans agent runtime enforcement, LLM backdoor benchmarking, trustworthiness benchmarking, and formal methods with LLM agents.",
    "industry_ecosystem": "The AIVF ecosystem is designed to support practical testing and evaluation adoption across industry rather than to serve as a single research lab.",
    "international_engagement": "The open-source and standards-facing design of Moonshot gives Singapore an outward-facing role in cross-border assurance and evaluation discussion.",
    "open_questions": [
      "Need clearer public links between Moonshot modules and external testers or case-study pipelines.",
      "Need more official evidence for AI Singapore or A*STAR multimodal safety work before inclusion."
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
      "singapore-global-ai-testing-standardisation-2026",
      "src-smu-agentspec",
      "src-smu-backdoorllm",
      "src-nus-jinsong",
      "src-trustllm"
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
  },
  {
    "slug": "hong-kong",
    "country": "Hong Kong",
    "region": "East Asia",
    "summary": "Hong Kong’s public technical-safety picture is thinner but source-backed: HKUST materials support LLM security work and HKGAI-V1 supports region-specific alignment and safety framing.",
    "government_posture": "The public model is university- and InnoHK-centered rather than a dedicated Hong Kong AISI.",
    "standards_evaluation": "The clearest benchmark-like artifact is the HKGAI-V1 paper’s Adversarial HK Value Benchmark claim, recorded as a research output rather than a graph entity.",
    "research_ecosystem": "Public outputs point to model security, trustworthy-LLM framing, localized value alignment, and policy-embedded sovereign-model design.",
    "industry_ecosystem": "The sources emphasize university-led deployment and ecosystem building more than a large private safety-lab cluster.",
    "international_engagement": "Hong Kong’s trilingual model-development context gives it a natural bridge role between mainland Chinese and international English-language safety discussions, but no partnership edge is inferred.",
    "open_questions": [
      "Need stronger official technical pages for the HKGAI center itself.",
      "Need more public benchmark or repository outputs from HKUST-linked Hong Kong groups."
    ],
    "source_ids": [
      "src-hkust-shuaiwang",
      "src-hkust-trustworthy-llm",
      "src-hkust-hkgai-v1",
      "src-hkgai-v1-paper"
    ],
    "last_verified": "2026-06-06"
  }
];
