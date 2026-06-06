import type { Entity } from "@/types";

export const entities: Entity[] = [
  {
    "id": "cn-cac",
    "name_en": "Cyberspace Administration of China",
    "name_local": "国家互联网信息办公室",
    "acronym": "CAC",
    "entity_type": "government",
    "country": "China",
    "city": "Beijing",
    "region": "East Asia",
    "summary": "Core Chinese internet-governance regulator for AI-related online information services. Primary-source materials show CAC co-issuing the 2023 Interim Measures for Generative AI Services, the 2025 AI-generated content labeling measures, the 2022 deep-synthesis rules, and the 2024 national AI standardization guide.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "content_safety",
      "standards"
    ],
    "tags": [
      "regulator",
      "content governance",
      "co-issuer",
      "AI service rules",
      "generative AI service governance",
      "deep synthesis governance",
      "algorithmic recommendation governance",
      "AI content labeling",
      "security assessment for certain internet AI services",
      "AI standards policy coordination",
      "China"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "cac-generative-ai-measures-2023",
      "cac-deep-synthesis-provisions-2022",
      "cac-ai-content-labeling-measures-2025",
      "cac-national-ai-standardization-guide-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "For atlas purposes, whether to model the Central Cyberspace Affairs Commission Office and CAC as one node or linked but distinct nodes."
    ]
  },
  {
    "id": "cn-miit",
    "name_en": "Ministry of Industry and Information Technology",
    "name_local": "工业和信息化部",
    "acronym": "MIIT",
    "entity_type": "government",
    "country": "China",
    "city": "Beijing",
    "region": "East Asia",
    "summary": "Central industry and telecom ministry with a major role in the China AI standards and evaluation stack. Primary sources show MIIT co-issuing CAC-facing AI service rules and the 2024 national AI standardization guide, and serving as the home ministry for affiliated institutions including CAICT and CESI.",
    "focus_areas": [
      "ai_governance",
      "standards",
      "policy_regulation",
      "evaluation"
    ],
    "tags": [
      "ministry",
      "standards",
      "co-issuer",
      "industrial policy",
      "industrial AI standardization",
      "telecom and internet administration",
      "co-issuance of AI service rules",
      "ministry-affiliated standards and evaluation institutions",
      "China"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "cac-generative-ai-measures-2023",
      "cac-deep-synthesis-provisions-2022",
      "cac-ai-content-labeling-measures-2025",
      "cac-national-ai-standardization-guide-2024",
      "miit-tc1-homepage"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Whether MIIT/TC1 should be promoted from candidate to full entity in the atlas core graph."
    ]
  },
  {
    "id": "cn-tc260",
    "name_en": "National Cybersecurity Standardization Technical Committee",
    "name_local": "全国网络安全标准化技术委员会",
    "acronym": "TC260",
    "entity_type": "standards_body",
    "country": "China",
    "city": "Beijing",
    "region": "East Asia",
    "website": "https://www.tc260.org.cn/",
    "summary": "China's main national cybersecurity standardization committee with an increasingly visible AI-security and AI-governance role. Official sources show AI-specific standards and guidance on generative AI service security, content labeling methods, AI safety governance, AI application ethics, and the 2026 formation of WG9 for AI security standards.",
    "focus_areas": [
      "standards",
      "model_security",
      "evaluation",
      "cybersecurity",
      "ai_governance",
      "content_safety"
    ],
    "tags": [
      "standards committee",
      "AI security",
      "guidance",
      "WG9",
      "AI security standards",
      "generative AI service security",
      "content labeling methods",
      "AI safety governance framework",
      "AI ethics and application guidance",
      "cybersecurity standardization",
      "China"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "tc260-homepage",
      "tc260-committee-roster-2024",
      "tc260-genai-service-security-requirements-2024",
      "tc260-content-labeling-practice-guide-2023",
      "tc260-ai-safety-governance-framework-2024",
      "shlab-wg9-formation-2026"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "A dedicated TC260 source explicitly naming the secretariat institution would strengthen administrative-link mapping.",
      "Future updates should distinguish draft, technical-file, and national-standard status more granularly."
    ]
  },
  {
    "id": "tc28-sc42",
    "name_en": "AI Subcommittee of the National Information Technology Standardization Technical Committee",
    "name_local": "全国信息技术标准化技术委员会人工智能分技术委员会",
    "acronym": "TC28/SC42",
    "entity_type": "standards_committee",
    "country": "China",
    "region": "East Asia",
    "summary": "National information-technology AI subcommittee under the broader TC28 standards structure. Official sources show CESI as the secretariat unit and confirm the committee's role in AI standardization work.",
    "focus_areas": [
      "standards",
      "evaluation",
      "testing_infrastructure"
    ],
    "tags": [
      "standards committee",
      "AI subcommittee",
      "national standards",
      "AI standards development",
      "national information-technology standardization",
      "committee coordination",
      "AI terminology and methods",
      "China",
      "CESI secretariat"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "tc28-sc42-samr-org-page",
      "tc28-sc42-cesi-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "A fuller source on current working groups or current standard projects would improve subcommittee mapping."
    ]
  },
  {
    "id": "cn-caict",
    "name_en": "China Academy of Information and Communications Technology",
    "name_local": "中国信息通信研究院",
    "acronym": "CAICT",
    "entity_type": "evaluation_institution",
    "country": "China",
    "city": "Beijing",
    "region": "East Asia",
    "summary": "MIIT-affiliated research institution that is central to China's applied AI governance, benchmarking, and industry-self-regulation stack. Official sources show CAICT's direct MIIT affiliation, its secretary-general-unit role in jointly founding AIIA, its role in launching the AI Risk Management System and AI Safety Benchmark through AIIA, and its Fangsheng benchmarking system with a dedicated safety testing dimension.",
    "focus_areas": [
      "evaluation",
      "testing_infrastructure",
      "standards",
      "ai_assurance",
      "ai_governance",
      "model_security"
    ],
    "tags": [
      "research institute",
      "benchmarking",
      "AIIA",
      "MIIT-affiliated",
      "AI governance research",
      "AI safety benchmarks",
      "large-model benchmarking",
      "industry commitments",
      "AIIA platform operations",
      "policy and standards support",
      "China"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "caict-about-us",
      "caict-aiia-founding-news-2018",
      "caict-ai-risk-governance-report-2024",
      "caict-ai-safety-governance-report-2025",
      "caict-fangsheng-benchmark-report-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "A dedicated current overview page for CAICT's AI institute or safety team structure would sharpen internal-unit mapping."
    ]
  },
  {
    "id": "aiia",
    "name_en": "China AI Industry Development Alliance",
    "name_local": "中国人工智能产业发展联盟",
    "acronym": "AIIA",
    "entity_type": "industry_alliance",
    "country": "China",
    "region": "East Asia",
    "summary": "Needed because multiple official CAICT sources treat AIIA as the umbrella platform through which CAICT launched safety-governance structures, AI safety commitments, and AI safety benchmarks.",
    "focus_areas": [
      "ai_governance",
      "ai_assurance",
      "evaluation",
      "capacity_building"
    ],
    "tags": [
      "Needed because multiple official CAICT sources treat AIIA as the umbrella platform through which CAICT launched safety-governance structures, AI safety commitments, and AI safety benchmarks.",
      "AIIA",
      "industry alliance",
      "AI safety benchmark"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "caict-aiia-founding-news-2018",
      "caict-ai-risk-governance-report-2024",
      "caict-ai-safety-governance-report-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false
  },
  {
    "id": "aiia-safety-governance-committee",
    "name_en": "AIIA Safety Governance Committee",
    "name_local": "中国人工智能产业发展联盟安全治理委员会",
    "acronym": "AIIA Safety Governance Committee",
    "entity_type": "working_group",
    "country": "China",
    "region": "East Asia",
    "summary": "Best-evidenced through official CAICT reports rather than a dedicated committee page. Official CAICT sources state that CAICT, relying on AIIA, prepared a Safety Governance Committee in late 2023, released an AI Risk Management System, and later linked AIIA to AI safety commitments and the AI Safety Benchmark.",
    "focus_areas": [
      "ai_governance",
      "ai_assurance",
      "evaluation",
      "capacity_building"
    ],
    "tags": [
      "industry committee",
      "AIIA-linked",
      "risk management",
      "committee-in-formation-history",
      "industry safety governance",
      "AI risk management",
      "AI safety benchmark coordination",
      "industry commitments",
      "China",
      "AIIA"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "caict-ai-risk-governance-report-2024",
      "caict-ai-safety-governance-report-2025"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 2,
    "needs_primary_source": false,
    "open_questions": [
      "Dedicated official committee page and current leadership roster.",
      "Whether the committee has a stable standing structure separate from CAICT's report language of 筹建.",
      "Current membership and working-group breakdown."
    ]
  },
  {
    "id": "cesi",
    "name_en": "China Electronics Standardization Institute",
    "name_local": "中国电子技术标准化研究院",
    "acronym": "CESI",
    "entity_type": "evaluation_institution",
    "country": "China",
    "city": "Beijing",
    "region": "East Asia",
    "summary": "MIIT-affiliated standards institute with a central role in China's AI standards and model-evaluation infrastructure. Official sources place CESI as secretariat host for TC28/SC42 and show CESI releasing both a general large-model evaluation standard and the Qiúsuǒ national-standard benchmark system.",
    "focus_areas": [
      "standards",
      "evaluation",
      "testing_infrastructure",
      "ai_assurance"
    ],
    "tags": [
      "standards institute",
      "MIIT-affiliated",
      "evaluation standards",
      "secretariat",
      "AI standardization",
      "committee secretariat functions",
      "large-model evaluation standards",
      "benchmark systems",
      "electronics and information standards",
      "China"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "cesi-basic-info",
      "tc28-sc42-samr-org-page",
      "tc28-sc42-cesi-page",
      "cesi-general-large-model-evaluation-standard-2024",
      "cesi-qiusuo-benchmark-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Whether CESI's benchmark assets and testing services should be modeled as separate nodes or as institute-level capabilities."
    ]
  },
  {
    "id": "cstc",
    "name_en": "China Software Testing Center",
    "name_local": "中国软件评测中心",
    "acronym": "CSTC",
    "entity_type": "evaluation_institution",
    "country": "China",
    "region": "East Asia",
    "summary": "Official site evidence supports CSTC as an AI assessment actor rather than a pure standards drafter. The homepage lists AI evaluation and AIM AI management maturity assessment services, and the center's Sadie Lab activity stream includes an AI large-model safety-governance seminar and AI safety workgroup launch.",
    "focus_areas": [
      "evaluation",
      "testing_infrastructure",
      "ai_assurance",
      "model_security"
    ],
    "tags": [
      "testing center",
      "assessment",
      "AIM",
      "evaluation services",
      "AI evaluation services",
      "AI management maturity assessment",
      "digital-government assessment",
      "AI safety eventing and workgroup activity",
      "China"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "cstc-homepage-ai-evaluation",
      "cstc-ai-big-model-safety-workgroup-2024"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 2,
    "needs_primary_source": false,
    "open_questions": [
      "A directly retrievable official center-introduction page would improve mapping of CSTC's administrative status.",
      "The exact scope and permanence of the cited AI safety workgroup remain unclear from the retrieved snippet."
    ]
  },
  {
    "id": "cn-shlab",
    "name_en": "Shanghai Artificial Intelligence Laboratory",
    "name_local": "上海人工智能实验室",
    "acronym": "SHLAB",
    "entity_type": "research_group",
    "country": "China",
    "city": "Shanghai",
    "region": "East Asia",
    "summary": "Major Shanghai AI research institution with visible roles in evaluation infrastructure and AI security standardization. Official sources show SHLAB maintaining OpenCompass, leading or chairing TC260's newly formed WG9 on AI security standards, and leading the Shanghai medical large-model testing and verification center.",
    "focus_areas": [
      "technical_safety_research",
      "evaluation",
      "testing_infrastructure",
      "model_security",
      "ai_assurance"
    ],
    "tags": [
      "research lab",
      "OpenCompass",
      "WG9",
      "evaluation",
      "open model evaluation",
      "AI security standards",
      "medical model testing",
      "trustworthy AI",
      "research infrastructure",
      "China"
    ],
    "source_ids": [
      "report-technical-research-groups-2026-06-05",
      "shlab-about-us",
      "shlab-opencompass-2023",
      "shlab-wg9-formation-2026",
      "shanghai-medical-llm-testing-center-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 2,
    "needs_primary_source": false,
    "open_questions": [
      "Further sources on how SHLAB's governance research center is institutionally nested within SHLAB would help entity-graph precision."
    ]
  },
  {
    "id": "shanghai-ai-safety-and-governance-laboratory",
    "name_en": "Shanghai AI Safety and Governance Laboratory",
    "name_local": "上海人工智能安全治理实验室",
    "acronym": "Shanghai AI Safety and Governance Laboratory",
    "entity_type": "research_group",
    "country": "China",
    "city": "Shanghai",
    "region": "East Asia",
    "summary": "Officially evidenced through a government-domain repost from Cyberspace Shanghai. The retrieved source states the lab was jointly established by SHLAB's Governance Research Center and the Shanghai Information Security Testing and Certification Center and unveiled at WAIC 2024.",
    "focus_areas": [
      "ai_governance",
      "technical_safety_research",
      "model_security",
      "ai_assurance"
    ],
    "tags": [
      "local laboratory",
      "Shanghai",
      "governance",
      "jointly established",
      "AI safety governance",
      "Shanghai local experimentation",
      "governance research",
      "safety support ecosystem",
      "China"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "shanghai-ai-safety-governance-lab-unveiling-2024"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 2,
    "needs_primary_source": true,
    "open_questions": [
      "A directly retrievable first-party page from the lab itself or from Cyberspace Shanghai.",
      "Current operating team, permanent website, and concrete programs."
    ]
  },
  {
    "id": "tc260-wg9",
    "name_en": "AI Security Standards Working Group",
    "name_local": "人工智能安全标准工作组",
    "acronym": "WG9",
    "entity_type": "working_group",
    "country": "China",
    "region": "East Asia",
    "summary": "Official SHLAB reporting attributes WG9's formal establishment to a TC260 notice and identifies SHLAB's director as group head, making WG9 a material node in the China AI security standards stack.",
    "focus_areas": [
      "standards",
      "model_security",
      "cybersecurity",
      "evaluation"
    ],
    "tags": [
      "Official SHLAB reporting attributes WG9's formal establishment to a TC260 notice and identifies SHLAB's director as group head, making WG9 a material node in the China AI security standards stack.",
      "WG9",
      "AI security standards"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "shlab-wg9-formation-2026",
      "tc260-homepage"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false
  },
  {
    "id": "opencompass",
    "name_en": "OpenCompass",
    "name_local": "司南",
    "acronym": "OpenCompass",
    "entity_type": "evaluation_platform",
    "country": "China",
    "region": "East Asia",
    "summary": "Official SHLAB sources present OpenCompass as a SHLAB-built open evaluation system spanning multiple domains, including safety and trustworthiness.",
    "focus_areas": [
      "evaluation",
      "testing_infrastructure",
      "ai_assurance",
      "open_model_governance"
    ],
    "tags": [
      "Official SHLAB sources present OpenCompass as a SHLAB-built open evaluation system spanning multiple domains, including safety and trustworthiness.",
      "OpenCompass",
      "evaluation platform"
    ],
    "source_ids": [
      "report-technical-research-groups-2026-06-05",
      "shlab-opencompass-2023"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": true
  },
  {
    "id": "cn-baai",
    "name_en": "Beijing Academy of Artificial Intelligence",
    "name_local": "北京智源人工智能研究院",
    "acronym": "BAAI",
    "entity_type": "research_group",
    "country": "China",
    "city": "Beijing",
    "region": "East Asia",
    "summary": "Non-profit new-type AI R&D institution that is significant in China's model-evaluation and AI-safety dialogue ecosystem. Official sources show BAAI maintaining FlagEval as an open evaluation platform and hosting the Beijing AI Safety International Dialogue that produced the Beijing AI Safety Consensus.",
    "focus_areas": [
      "evaluation",
      "technical_safety_research",
      "open_model_governance",
      "international_dialogue"
    ],
    "tags": [
      "research institute",
      "FlagEval",
      "AI safety dialogue",
      "non-profit",
      "large-model evaluation",
      "open research infrastructure",
      "Chinese model ecosystem benchmarking",
      "China"
    ],
    "source_ids": [
      "report-technical-research-groups-2026-06-05",
      "baai-about-us",
      "baai-ai-safety-ecosystem-page",
      "baai-flageval-system-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 2,
    "needs_primary_source": false,
    "open_questions": [
      "Whether to model the Beijing AI Safety International Dialogue and Beijing AI Safety Consensus as separate event and document entities."
    ]
  },
  {
    "id": "flag-eval",
    "name_en": "FlagEval",
    "name_local": "FlagEval 大模型评测开放平台",
    "acronym": "FlagEval",
    "entity_type": "evaluation_platform",
    "country": "China",
    "region": "East Asia",
    "summary": "Official BAAI system materials identify FlagEval as BAAI's open model-evaluation platform, making it a useful evaluation-stack node.",
    "focus_areas": [
      "evaluation",
      "testing_infrastructure",
      "open_model_governance",
      "ai_assurance"
    ],
    "tags": [
      "Official BAAI system materials identify FlagEval as BAAI's open model-evaluation platform, making it a useful evaluation-stack node.",
      "FlagEval",
      "large-model evaluation"
    ],
    "source_ids": [
      "report-technical-research-groups-2026-06-05",
      "baai-flageval-system-page"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": true
  },
  {
    "id": "cn-beijing-aisi",
    "name_en": "Beijing Institute of AI Safety and Governance",
    "name_local": "北京前瞻人工智能安全与治理研究院",
    "acronym": "Beijing AISI",
    "entity_type": "ai_safety_institute",
    "country": "China",
    "city": "Beijing",
    "region": "East Asia",
    "summary": "Beijing's dedicated AI safety-and-governance institute appears to have evolved from a 2024 laboratory phase into a formally established institute in April 2025. Official sources also show a department structure that explicitly distinguishes AI Safety from AI Security and includes guardrails, ethics, and risk-response work.",
    "focus_areas": [
      "frontier_ai_safety",
      "evaluation",
      "ai_governance",
      "red_teaming",
      "model_security"
    ],
    "tags": [
      "local institute",
      "Beijing",
      "AI safety",
      "AI security",
      "AI safety research",
      "AI security research",
      "guardrails",
      "risk response",
      "AI ethics",
      "governance research",
      "AISI",
      "China"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "beijing-ai-safety-lab-launch-2024",
      "beijing-ai-safety-institute-official-launch-2025",
      "beijing-ai-safety-institute-departments"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 2,
    "needs_primary_source": false,
    "open_questions": [
      "How the institute relates administratively to Beijing municipal authorities and other Beijing AI institutions.",
      "Whether the earlier lab name should remain as an alias or a historical predecessor entity."
    ]
  },
  {
    "id": "cn-cnaisda",
    "name_en": "China AI Development and Safety Network",
    "name_local": "中国人工智能发展与安全研究网络",
    "acronym": "CnAISDA",
    "entity_type": "dialogue_convenor",
    "country": "China",
    "region": "East Asia",
    "summary": "Official Chinese institutional coverage positions CnAISDA primarily as a China-side dialogue network corresponding to an AI safety institute for international engagement, not automatically as a domestic frontier-model testing regulator. Tsinghua and SQZ sources explicitly identify CAICT, BAAI, and SHLAB as member units.",
    "focus_areas": [
      "international_dialogue",
      "dialogue_channel",
      "capacity_building",
      "ai_governance"
    ],
    "tags": [
      "network",
      "international dialogue",
      "China-side representative body",
      "not-yet-demonstrated domestic evaluator",
      "international AI safety dialogue",
      "research-network coordination",
      "global governance engagement",
      "cross-institution representation",
      "China",
      "Track 2"
    ],
    "source_ids": [
      "report-china-west-dialogue-2026-06-05",
      "cnaisda-tsinghua-paris-side-event-2025",
      "cnaisda-shanghai-qizhi-side-event-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 3,
    "needs_primary_source": false,
    "open_questions": [
      "Permanent governance structure and secretariat.",
      "Whether future official sources will assign domestic testing or audit functions."
    ]
  },
  {
    "id": "miit-tc1",
    "name_en": "AI Standardization Technical Committee of the Ministry of Industry and Information Technology",
    "name_local": "工业和信息化部人工智能标准化技术委员会",
    "acronym": "MIIT/TC1",
    "entity_type": "standards_committee",
    "country": "China",
    "region": "East Asia",
    "summary": "The official committee homepage shows a distinct ministry-level AI standardization architecture with dedicated working groups and a CAICT-linked operational base, making it highly relevant to the China standards stack even though it was not in the starting cluster.",
    "focus_areas": [
      "standards",
      "policy_regulation",
      "ai_governance"
    ],
    "tags": [
      "The official committee homepage shows a distinct ministry-level AI standardization architecture with dedicated working groups and a CAICT-linked operational base, making it highly relevant to the China standards stack even though it was not in the starting cluster.",
      "MIIT/TC1",
      "standards committee"
    ],
    "source_ids": [
      "report-china-standards-evaluation-2026-06-05",
      "miit-tc1-homepage"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": true
  },
  {
    "id": "jp-aisi",
    "name_en": "Japan AI Safety Institute",
    "acronym": "AISI",
    "entity_type": "ai_safety_institute",
    "country": "Japan",
    "region": "East Asia",
    "summary": "IPA-hosted Japanese AI safety body launched in February 2024. Publicly focused on evaluation methods, guidance, tools, and international coordination, not formal regulation.",
    "focus_areas": [
      "frontier_ai_safety",
      "evaluation",
      "testing_infrastructure",
      "ai_assurance",
      "international_dialogue"
    ],
    "tags": [
      "AISI",
      "Japan",
      "large-model evaluation",
      "japan",
      "aisi",
      "evaluation",
      "testing",
      "evaluation methods",
      "guidance",
      "testing tools",
      "evaluation environment",
      "international coordination"
    ],
    "source_ids": [
      "report-japan-korea-singapore-aisi-2026-06-05",
      "jpn-aisi-about-page",
      "jpn-integrated-innovation-strategy-2024",
      "jpn-aisi-activity-paper-2025-03",
      "jpn-aisi-eval-tool-oss-post",
      "jpn-aisi-eval-env-taskforce-report-post"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "name_local": "AIセーフティ・インスティテュート",
    "open_questions": [
      "Whether Japan AISI will move into formal assurance or conformity assessment."
    ]
  },
  {
    "id": "kr-aisi",
    "name_en": "Korea AI Safety Institute",
    "acronym": "AISI",
    "entity_type": "ai_safety_institute",
    "country": "South Korea",
    "region": "East Asia",
    "summary": "MSIT-launched Korea AISI with a clearer policy-evaluation-research structure than Japan’s public model. Publicly framed as non-regulatory and nationally representative in AI safety.",
    "focus_areas": [
      "frontier_ai_safety",
      "evaluation",
      "testing_infrastructure",
      "policy_regulation",
      "technical_safety_research",
      "international_dialogue"
    ],
    "tags": [
      "AISI",
      "Korea",
      "large-model evaluation",
      "south-korea",
      "aisi",
      "policy",
      "evaluation",
      "research",
      "risk definition",
      "evaluation frameworks",
      "evaluation infrastructure",
      "international cooperation"
    ],
    "source_ids": [
      "report-japan-korea-singapore-aisi-2026-06-05",
      "kor-aisi-vision-mission",
      "kor-aisi-evaluation-page",
      "kor-msit-launch-release",
      "kor-etri-aisi-page",
      "kor-aisi-consortium-meeting-post"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "name_local": "인공지능안전연구소",
    "open_questions": [
      "How Korea AISI will divide future work between evaluation, policy support, and standards-adjacent functions."
    ]
  },
  {
    "id": "sg-aisi",
    "name_en": "Singapore AI Safety Institute",
    "acronym": "AISI",
    "entity_type": "ai_safety_institute",
    "country": "Singapore",
    "region": "Southeast Asia",
    "summary": "Publicly structured as a designation-plus-partnership model rather than a standalone statutory institute: DTC is the designated AISI and IMDA is the overall government agency.",
    "focus_areas": [
      "frontier_ai_safety",
      "evaluation",
      "testing_infrastructure",
      "ai_assurance",
      "international_dialogue",
      "policy_regulation"
    ],
    "tags": [
      "AISI",
      "Singapore",
      "large-model evaluation",
      "singapore",
      "aisi",
      "testing",
      "evaluation",
      "policy",
      "tools",
      "research",
      "international testing leadership",
      "designation-plus-partnership model"
    ],
    "source_ids": [
      "report-japan-korea-singapore-aisi-2026-06-05",
      "sg-aisi-about-page",
      "sg-aisi-work-page",
      "sg-aisi-resources-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "name_local": "Singapore AI Safety Institute",
    "open_questions": [
      "Whether Singapore AISI will become a more standalone institution."
    ]
  },
  {
    "id": "sg-ai-verify-foundation",
    "name_en": "AI Verify Foundation",
    "entity_type": "evaluation_institution",
    "country": "Singapore",
    "region": "Southeast Asia",
    "summary": "Update AI Verify Foundation with current assurance stack: Project Moonshot, the Global AI Assurance Sandbox, and the AI Tester Accreditation Programme. Connect this update to existing Singapore assurance/tooling records rather than duplicating PR2B entries.",
    "focus_areas": [
      "ai_assurance",
      "evaluation",
      "testing_infrastructure",
      "standards"
    ],
    "tags": [
      "AI Verify",
      "Singapore",
      "model card",
      "singapore",
      "aivf",
      "assurance",
      "tooling",
      "frameworks",
      "sandboxing",
      "accreditation",
      "Project Moonshot",
      "sandbox",
      "benchmarking",
      "red teaming"
    ],
    "source_ids": [
      "report-japan-korea-singapore-aisi-2026-06-05",
      "report-asean-genai-governance-2026-06-05",
      "sg-ai-verify-foundation-about",
      "sg-ai-verify-testing-framework-page",
      "sg-project-moonshot-page",
      "sg-global-ai-assurance-sandbox-page",
      "sg-ai-tester-accreditation-page",
      "ai-verify-foundation-home-2026",
      "global-ai-assurance-sandbox-main-report-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "needs_primary_source": false,
    "name_local": "AI Verify Foundation",
    "acronym": "AIVF",
    "open_questions": [
      "How AIVF and Singapore AISI will divide future public-facing evaluation roles.",
      "Publicly documented governance and scope details for the AI Tester Accreditation Programme remain limited in the sources captured here."
    ]
  },
  {
    "id": "asean-working-group-ai-governance",
    "name_en": "ASEAN Working Group on AI Governance",
    "acronym": "WG-AI",
    "entity_type": "working_group",
    "country": "Regional",
    "region": "Southeast Asia",
    "summary": "ASEAN regional working group on AI governance. The Bangkok Digital Declaration directly supports a coordination remit that includes AI policy, governance, safety, laws, regulations, and standards, but does not establish supranational regulatory authority.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "capacity_building",
      "international_dialogue"
    ],
    "tags": [
      "ASEAN",
      "AI governance",
      "capacity building",
      "WG-AI",
      "regional coordination"
    ],
    "source_ids": [
      "report-asean-genai-governance-2026-06-05",
      "bangkok-digital-declaration-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "needs_primary_source": true,
    "open_questions": [
      "Official terms of reference and current membership for WG-AI."
    ]
  },
  {
    "id": "org-concordia-ai",
    "name_en": "Concordia AI",
    "entity_type": "think_tank",
    "country": "International",
    "region": "Cross-border",
    "summary": "AI safety and governance organization included as a China-West dialogue and research synthesis node.",
    "focus_areas": [
      "international_dialogue",
      "ai_governance",
      "technical_safety_research"
    ],
    "tags": [
      "Track 2",
      "China-West dialogue",
      "technical research"
    ],
    "source_ids": [
      "report-china-west-dialogue-2026-06-05"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 2,
    "needs_primary_source": true
  },
  {
    "id": "org-safe-ai-forum",
    "name_en": "Safe AI Forum",
    "entity_type": "dialogue_convenor",
    "country": "International",
    "region": "Cross-border",
    "summary": "Dialogue convenor included as a cross-border AI safety discussion channel in the seed atlas.",
    "focus_areas": [
      "international_dialogue",
      "dialogue_channel",
      "frontier_ai_safety"
    ],
    "tags": [
      "Track 2",
      "dialogue channel",
      "frontier AI safety"
    ],
    "source_ids": [
      "report-china-west-dialogue-2026-06-05"
    ],
    "confidence_level": "low",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 3,
    "needs_primary_source": true
  },
  {
    "id": "event-idais",
    "name_en": "International Dialogues on AI Safety",
    "acronym": "IDAIS",
    "entity_type": "event",
    "country": "International",
    "region": "Cross-border",
    "summary": "Dialogue series included as a cross-border AI safety engagement channel. PR2C adds the repaired IDAIS page as a source for the recurring series, while session-specific China-side rows remain held pending exact URLs.",
    "focus_areas": [
      "international_dialogue",
      "dialogue_channel",
      "frontier_ai_safety"
    ],
    "tags": [
      "Track 2",
      "dialogue channel",
      "IDAIS"
    ],
    "source_ids": [
      "report-china-west-dialogue-2026-06-05",
      "farai-idais-page"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-06",
    "tier": 3,
    "needs_primary_source": true,
    "open_questions": [
      "Which session-specific IDAIS pages should anchor China-side participant claims?"
    ]
  },
  {
    "id": "cn-tsinghua-iaiig",
    "name_en": "Tsinghua Institute for AI International Governance",
    "name_local": "清华大学人工智能国际治理研究院",
    "acronym": "Tsinghua I-AIIG",
    "entity_type": "university",
    "country": "China",
    "city": "Beijing",
    "region": "East Asia",
    "summary": "Tsinghua-linked AI international governance research node included for policy, governance, and cross-border dialogue mapping.",
    "focus_areas": [
      "ai_governance",
      "international_dialogue",
      "policy_regulation"
    ],
    "tags": [
      "Track 2",
      "China",
      "AI governance"
    ],
    "source_ids": [
      "report-technical-research-groups-2026-06-05",
      "report-china-west-dialogue-2026-06-05"
    ],
    "confidence_level": "low",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-05",
    "tier": 2,
    "needs_primary_source": true
  },
  {
    "id": "cn-tsinghua-ciss",
    "name_en": "Tsinghua Center for International Security and Strategy",
    "name_local": "清华大学战略与安全研究中心",
    "acronym": "CISS",
    "entity_type": "think_tank",
    "country": "China",
    "city": "Beijing",
    "region": "East Asia",
    "summary": "Tsinghua-linked center that appears in public records for U.S.-China and China-EU AI and international security dialogues. PR2C keeps these descriptions high-level and models the rows as public dialogue channels, not operational security relationships.",
    "focus_areas": [
      "international_dialogue",
      "dialogue_channel",
      "ai_governance",
      "policy_regulation"
    ],
    "tags": [
      "Track 2",
      "China",
      "international security",
      "CISS",
      "track 2 dialogue",
      "China-EU AI and international security dialogue",
      "U.S.-China AI and international security dialogue"
    ],
    "source_ids": [
      "report-china-west-dialogue-2026-06-05",
      "ciss-china-eu-ai-security-dialogue-round-2-2024",
      "ciss-china-eu-ai-security-dialogue-round-5-2026",
      "brookings-ai-glossary-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-06",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Additional exact public source paths would strengthen the seventh U.S.-China dialogue row before import."
    ]
  },
  {
    "id": "ipa-japan",
    "entity_type": "government",
    "country": "Japan",
    "region": "East Asia",
    "tags": [
      "japan",
      "ipa",
      "host-agency",
      "hosting",
      "administrative support"
    ],
    "source_ids": [
      "jpn-aisi-about-page",
      "jpn-integrated-innovation-strategy-2024"
    ],
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "name_en": "Information-technology Promotion Agency, Japan",
    "name_local": "独立行政法人 情報処理推進機構",
    "acronym": "IPA",
    "summary": "Host agency in which Japan AISI is placed and where the AISI secretariat was set up.",
    "focus_areas": [
      "ai_governance",
      "capacity_building",
      "testing_infrastructure"
    ],
    "confidence_level": "high",
    "needs_primary_source": false,
    "open_questions": [
      "Public sources do not fully specify AISI’s operational autonomy inside IPA."
    ]
  },
  {
    "id": "cabinet-office-aisi-liaison-japan",
    "entity_type": "policy_program",
    "country": "Japan",
    "region": "East Asia",
    "tags": [
      "japan",
      "cabinet-office",
      "coordination",
      "inter-ministerial linkage",
      "inter-ministerial coordination",
      "liaison meeting"
    ],
    "source_ids": [
      "jpn-cabinet-office-aisi-liaison-setup"
    ],
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "name_en": "AISI Related Ministries and Agencies Liaison Meeting",
    "name_local": "AIセーフティ・インスティテュート関係府省庁等連絡会議",
    "summary": "Cabinet Office-linked inter-ministerial coordination mechanism around Japan AISI, with ministries, research institutes, IPA, and AISI represented.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "international_dialogue",
      "capacity_building"
    ],
    "confidence_level": "high",
    "needs_primary_source": true,
    "open_questions": [
      "Its precise decision authority is not clear in reviewed public sources."
    ]
  },
  {
    "id": "msit-korea",
    "entity_type": "government",
    "country": "South Korea",
    "region": "East Asia",
    "tags": [
      "south-korea",
      "msit",
      "ministry",
      "institution creation",
      "AI safety policy",
      "international engagement"
    ],
    "source_ids": [
      "kor-msit-launch-release",
      "kor-msit-tta-nist-crosswalk-release"
    ],
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "name_en": "Ministry of Science and ICT",
    "name_local": "과학기술정보통신부",
    "acronym": "MSIT",
    "summary": "The ministry that launched Korea AISI and publicly ties it to post-Seoul-Summit implementation and international AI safety networking.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "international_dialogue"
    ],
    "confidence_level": "high",
    "needs_primary_source": false,
    "open_questions": [
      "How MSIT oversight and resourcing of Korea AISI will evolve over time."
    ]
  },
  {
    "id": "etri-korea",
    "entity_type": "research_group",
    "country": "South Korea",
    "region": "East Asia",
    "tags": [
      "south-korea",
      "etri",
      "research-institute",
      "hosting",
      "research support",
      "institutional home"
    ],
    "source_ids": [
      "kor-etri-aisi-page"
    ],
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "name_en": "Electronics and Telecommunications Research Institute",
    "name_local": "한국전자통신연구원",
    "acronym": "ETRI",
    "summary": "The clearest public institutional home for Korea AISI in reviewed sources.",
    "focus_areas": [
      "technical_safety_research",
      "evaluation",
      "testing_infrastructure"
    ],
    "confidence_level": "high",
    "needs_primary_source": true,
    "open_questions": [
      "Whether Korea AISI will remain embedded in ETRI long term."
    ]
  },
  {
    "id": "korea-ai-safety-consortium",
    "entity_type": "industry_alliance",
    "country": "South Korea",
    "region": "East Asia",
    "tags": [
      "south-korea",
      "consortium",
      "coordination",
      "subgroups",
      "joint testing discussion"
    ],
    "source_ids": [
      "kor-msit-launch-release",
      "kor-aisi-consortium-meeting-post"
    ],
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "name_en": "Korea AI Safety Consortium",
    "name_local": "AI안전컨소시엄",
    "summary": "Consortium formed at Korea AISI’s launch to support framework work, subgroup collaboration, and joint-testing discussions.",
    "focus_areas": [
      "capacity_building",
      "evaluation",
      "international_dialogue",
      "ai_governance"
    ],
    "confidence_level": "high",
    "needs_primary_source": false,
    "open_questions": [
      "The full signed member list was not confirmed in reviewed primary sources."
    ]
  },
  {
    "id": "digital-trust-centre-singapore",
    "entity_type": "research_group",
    "country": "Singapore",
    "region": "Southeast Asia",
    "tags": [
      "singapore",
      "dtc",
      "ntu",
      "research-centre",
      "technical work",
      "research ecosystem coordination",
      "talent",
      "trust-tech R&D",
      "NTU",
      "technical backbone"
    ],
    "source_ids": [
      "sg-aisi-about-page",
      "sg-dtc-home-page"
    ],
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "name_en": "Digital Trust Centre Singapore",
    "name_local": "Digital Trust Centre",
    "acronym": "DTC",
    "summary": "NTU-based centre designated as Singapore AISI and serving as the technical backbone of the Singapore model.",
    "focus_areas": [
      "technical_safety_research",
      "ai_assurance",
      "testing_infrastructure",
      "capacity_building"
    ],
    "confidence_level": "high",
    "needs_primary_source": false,
    "open_questions": [
      "How DTC’s wider digital-trust mandate will balance with narrower AISI-style functions."
    ]
  },
  {
    "id": "imda-singapore",
    "entity_type": "government",
    "country": "Singapore",
    "region": "Southeast Asia",
    "tags": [
      "singapore",
      "imda",
      "government-agency",
      "assurance",
      "policy",
      "international engagement",
      "assurance ecosystem building",
      "baseline policy",
      "A.I. Verify",
      "red teaming",
      "sandbox",
      "standards"
    ],
    "source_ids": [
      "sg-aisi-about-page",
      "sg-imda-llm-starter-kit",
      "imda-ai-verify-launch-2022",
      "sg-global-ai-assurance-sandbox-page",
      "singapore-ai-safety-red-teaming-challenge-page-2025",
      "singapore-global-ai-testing-standardisation-2026"
    ],
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "name_en": "Infocomm Media Development Authority",
    "name_local": "Infocomm Media Development Authority",
    "acronym": "IMDA",
    "summary": "Update IMDA with Singapore’s assurance and testing implementation roles, including A.I. Verify launch, the Global AI Assurance Sandbox with AI Verify Foundation, the Singapore AI Safety Red Teaming Challenge, and 2026 testing-standardisation activity.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "ai_assurance",
      "international_dialogue",
      "evaluation",
      "testing_infrastructure"
    ],
    "confidence_level": "high",
    "needs_primary_source": false,
    "open_questions": [
      "Public sources reviewed do not fully separate IMDA’s AISI role from its broader trusted-AI policy role.",
      "Whether IMDA has published a final formal specification for an AI tester accreditation programme beyond current public pages.",
      "Whether Global AI Assurance Sandbox participation criteria or reports are updated on a fixed cadence."
    ]
  },
  {
    "id": "ai-verify-testing-framework",
    "name_en": "AI Verify Testing Framework",
    "name_local": "AI Verify Testing Framework",
    "entity_type": "policy_program",
    "country": "Singapore",
    "region": "Asia-Pacific",
    "summary": "Core assurance framework in Singapore’s public stack; should be separated from Singapore AISI itself.",
    "focus_areas": [
      "ai_assurance",
      "evaluation",
      "standards"
    ],
    "tags": [
      "AI Verify",
      "testing framework",
      "AI assurance",
      "framework"
    ],
    "source_ids": [
      "sg-ai-verify-testing-framework-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": true
  },
  {
    "id": "project-moonshot",
    "name_en": "Project Moonshot",
    "name_local": "Project Moonshot",
    "entity_type": "evaluation_platform",
    "country": "Singapore",
    "region": "Southeast Asia",
    "summary": "Officially presented as an open-source LLM evaluation toolkit connected to IMDA’s Starter Kit and AIVF, with benchmarking and red-teaming functions.",
    "focus_areas": [
      "evaluation",
      "testing_infrastructure",
      "red_teaming",
      "ai_assurance"
    ],
    "tags": [
      "Project Moonshot",
      "open-source toolkit",
      "LLM evaluation",
      "red-teaming",
      "tool"
    ],
    "source_ids": [
      "sg-project-moonshot-page",
      "sg-imda-llm-starter-kit",
      "expanded-asean-guide-genai-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "needs_primary_source": false
  },
  {
    "id": "global-ai-assurance-sandbox",
    "name_en": "Global AI Assurance Sandbox",
    "name_local": "Global AI Assurance Sandbox",
    "entity_type": "policy_program",
    "country": "Singapore",
    "region": "Asia-Pacific",
    "summary": "Singapore-linked assurance programme for deployed or deploying GenAI applications, represented as application-level assurance and market-building infrastructure rather than foundation-model safety testing.",
    "focus_areas": [
      "ai_assurance",
      "capacity_building",
      "evaluation",
      "testing_infrastructure"
    ],
    "tags": [
      "AI assurance",
      "sandbox",
      "IMDA",
      "AIVF",
      "programme",
      "application testing"
    ],
    "source_ids": [
      "sg-global-ai-assurance-sandbox-page",
      "global-ai-assurance-sandbox-main-report-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "needs_primary_source": false
  },
  {
    "id": "ai-tester-accreditation-programme",
    "name_en": "AI Tester Accreditation Programme",
    "name_local": "AI Tester Accreditation Programme",
    "acronym": "AI TAP",
    "entity_type": "policy_program",
    "country": "Singapore",
    "region": "Asia-Pacific",
    "summary": "Distinct third-party testing accreditation programme in Singapore’s assurance ecosystem.",
    "focus_areas": [
      "ai_assurance",
      "capacity_building",
      "evaluation",
      "testing_infrastructure"
    ],
    "tags": [
      "AI TAP",
      "tester accreditation",
      "third-party testing",
      "programme"
    ],
    "source_ids": [
      "sg-ai-tester-accreditation-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": true
  },
  {
    "id": "centre-for-humanitarian-dialogue",
    "name_en": "Centre for Humanitarian Dialogue",
    "acronym": "HD",
    "entity_type": "dialogue_convenor",
    "country": "Switzerland",
    "region": "Europe",
    "summary": "Public co-host institution for repaired China-EU AI and International Security Dialogue round records. The atlas models this as a dialogue-convening role only.",
    "focus_areas": [
      "international_dialogue",
      "dialogue_channel",
      "ai_governance"
    ],
    "tags": [
      "HD Centre",
      "China-EU dialogue",
      "track 2 dialogue",
      "dialogue convenor"
    ],
    "source_ids": [
      "ciss-china-eu-ai-security-dialogue-round-2-2024",
      "ciss-china-eu-ai-security-dialogue-round-5-2026"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-06",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "A more specific HD institutional page would improve the organization profile; PR2C only imports the event co-host evidence."
    ]
  },
  {
    "id": "shanghai-qi-zhi-institute",
    "name_en": "Shanghai Qi Zhi Institute",
    "name_local": "上海期智研究院",
    "entity_type": "research_group",
    "country": "China",
    "city": "Shanghai",
    "region": "East Asia",
    "summary": "China-side research institute visible in this PR2C import through the source-backed CnAISDA Paris side-event record. Broader IDAIS-related claims are held until exact URLs are repaired.",
    "focus_areas": [
      "international_dialogue",
      "ai_governance"
    ],
    "tags": [
      "SQZ",
      "CnAISDA",
      "Paris side event",
      "China-facing interface"
    ],
    "source_ids": [
      "cnaisda-shanghai-qizhi-side-event-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 2,
    "needs_primary_source": true,
    "open_questions": [
      "Exact source URLs are still needed before importing the IDAIS Oxfordshire relationship rows."
    ]
  },
  {
    "id": "deepseek",
    "name_en": "DeepSeek",
    "name_local": "深度求索",
    "acronym": "DeepSeek",
    "entity_type": "company",
    "country": "China",
    "region": "East Asia",
    "summary": "Chinese frontier-model developer with public disclosures centered on a transparency page plus open-weight DeepSeek-V3 repository and license documentation. This backfill does not identify a public preparedness policy, dangerous-capability evaluation framework, or external frontier-safety audit.",
    "focus_areas": [
      "frontier_model_developer",
      "open_model_governance",
      "model_security",
      "content_safety"
    ],
    "tags": [
      "disclosure:transparency_channel",
      "disclosure:model_card",
      "disclosure:custom_license",
      "gap:no_public_rsp",
      "gap:no_public_dangerous_capability_eval",
      "gap:no_public_external_audit",
      "frontier_model_development",
      "open_weight_release",
      "api_platform",
      "source_type_mapping:repository_to_technical_report",
      "source_type_mapping:license_to_policy_document",
      "platform disclosure",
      "model license",
      "PR2D: public disclosure backfill"
    ],
    "source_ids": [
      "deepseek-transparency-center",
      "deepseek-v3-github",
      "deepseek-v3-license"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Is there any public DeepSeek API safety or abuse-policy document beyond the transparency hub?",
      "Are there public dangerous-capability or release-gating evaluations for frontier DeepSeek models?",
      "Is there any public third-party red-team or external audit report?"
    ]
  },
  {
    "id": "alibaba-qwen",
    "name_en": "Alibaba Qwen",
    "name_local": "阿里巴巴通义千问",
    "acronym": "Qwen",
    "entity_type": "company",
    "country": "China",
    "region": "East Asia",
    "summary": "Alibaba Qwen model-family record backed in this pass by official repository and model-card documentation. The public evidence supports open-weight/model-card disclosures, not a public dangerous-capability or release-gating framework.",
    "focus_areas": [
      "frontier_model_developer",
      "open_model_governance",
      "evaluation"
    ],
    "tags": [
      "disclosure:model_card",
      "disclosure:repository_release",
      "disclosure:open_weight_release",
      "gap:no_public_rsp",
      "gap:no_public_dangerous_capability_eval",
      "gap:platform_policy_docs_incomplete",
      "frontier_model_development",
      "open_weight_release",
      "api_platform",
      "source_type_mapping:repository_to_technical_report",
      "source_type_mapping:model_card_to_technical_report",
      "model card",
      "repository release",
      "PR2D: public disclosure backfill"
    ],
    "source_ids": [
      "qwen3-github-readme",
      "qwen3-model-card"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "What official Alibaba/Qwen privacy, service-agreement, or platform-guardrail pages should be added for a fuller ba...",
      "Are there official Qwen red-teaming, dangerous-capability, or release-gating disclosures?",
      "Is there any explicit public advanced-AI risk statement tied to Qwen releases?"
    ]
  },
  {
    "id": "zhipu-ai-glm",
    "name_en": "Zhipu AI",
    "name_local": "智谱AI",
    "acronym": "GLM",
    "entity_type": "company",
    "country": "China",
    "region": "East Asia",
    "summary": "Chinese frontier-model developer whose BigModel documentation surfaces API access, content-safety controls, model-evaluation tooling, GLM-4.5 model information, and privacy policy material. These are platform and evaluation disclosures, not a public preparedness framework.",
    "focus_areas": [
      "frontier_model_developer",
      "evaluation",
      "content_safety",
      "model_security"
    ],
    "tags": [
      "disclosure:api_controls",
      "disclosure:content_safety",
      "disclosure:model_evaluation",
      "disclosure:alignment_training",
      "disclosure:agentic_model_docs",
      "gap:no_public_rsp",
      "gap:no_public_dangerous_capability_eval",
      "frontier_model_development",
      "api_platform",
      "model_evaluation",
      "BigModel",
      "platform controls",
      "privacy",
      "model evaluation",
      "content safety",
      "PR2D: public disclosure backfill"
    ],
    "source_ids": [
      "zhipu-api-overview",
      "zhipu-content-safety",
      "zhipu-model-evaluation",
      "zhipu-glm-4-5-overview",
      "zhipu-privacy-policy"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Does Zhipu publish model-specific red-team results for frontier GLM releases?",
      "Is there any public external audit or third-party safety evaluation?",
      "Are there any public deployment thresholds or release-gating criteria beyond the general platform-evaluation tooling?"
    ]
  },
  {
    "id": "baidu-ernie",
    "name_en": "Baidu ERNIE",
    "name_local": "百度文心",
    "acronym": "ERNIE",
    "entity_type": "company",
    "country": "China",
    "region": "East Asia",
    "summary": "Baidu ERNIE/Qianfan record backed by Qianfan platform, user-agreement, intervention, API, and content-marking documentation. Public disclosures are strongest on platform governance, content controls, data handling, and generated-content labeling.",
    "focus_areas": [
      "frontier_model_developer",
      "evaluation",
      "content_safety",
      "model_security",
      "ai_governance"
    ],
    "tags": [
      "disclosure:user_data_handling",
      "disclosure:content_safety",
      "disclosure:api_controls",
      "disclosure:content_provenance",
      "disclosure:model_evaluation_platform",
      "gap:no_public_rsp",
      "gap:no_public_dangerous_capability_eval",
      "frontier_model_development",
      "api_platform",
      "enterprise_ai_platform",
      "Qianfan",
      "privacy",
      "content marking",
      "intervention rules",
      "API controls",
      "PR2D: public disclosure backfill"
    ],
    "source_ids": [
      "baidu-qianfan-overview",
      "baidu-qianfan-user-agreement",
      "baidu-qianfan-intervention-strategy",
      "baidu-qianfan-api-general",
      "baidu-qianfan-content-marking"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Is there a public ERNIE model card or technical report for the latest frontier closed models with safety sections?",
      "Are any dangerous-capability evaluations or external red-team exercises publicly disclosed?",
      "Are there model-specific release gates distinct from Qianfan platform controls?"
    ]
  },
  {
    "id": "tencent-hunyuan",
    "name_en": "Tencent Hunyuan",
    "name_local": "腾讯混元",
    "acronym": "Hunyuan",
    "entity_type": "company",
    "country": "China",
    "region": "East Asia",
    "summary": "Tencent Hunyuan record backed by Tencent Cloud product, API, compatibility, moderation, and image-labeling documentation. The evidence supports platform controls and alignment-language disclosures, not a public frontier-risk governance policy.",
    "focus_areas": [
      "frontier_model_developer",
      "content_safety",
      "model_security",
      "ai_governance"
    ],
    "tags": [
      "disclosure:api_controls",
      "disclosure:content_safety",
      "disclosure:content_provenance",
      "disclosure:alignment_language",
      "disclosure:model_lineup",
      "gap:no_public_rsp",
      "gap:no_public_dangerous_capability_eval",
      "frontier_model_development",
      "api_platform",
      "multimodal_models",
      "Hunyuan",
      "API controls",
      "image moderation",
      "content provenance",
      "human preference alignment language",
      "PR2D: public disclosure backfill"
    ],
    "source_ids": [
      "tencent-hunyuan-product-overview",
      "tencent-hunyuan-product-dynamics",
      "tencent-hunyuan-api-key-management",
      "tencent-hunyuan-openai-compat",
      "tencent-hunyuan-image-faq"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Are there public Hunyuan model cards or technical reports for the latest closed frontier releases with safety sections?",
      "Is any external red-teaming or third-party audit public?",
      "Do public materials disclose release gates for advanced reasoning/agent models?"
    ]
  },
  {
    "id": "bytedance-doubao",
    "name_en": "ByteDance Doubao",
    "name_local": "字节跳动豆包",
    "acronym": "Doubao",
    "entity_type": "company",
    "country": "China",
    "region": "East Asia",
    "summary": "ByteDance/Doubao record backed by Volcengine Ark and Doubao service documentation. Public materials emphasize platform terms, API access, and model-evaluation workflow disclosures; snippet-only platform-scope claims were held out of evidence and relationships.",
    "focus_areas": [
      "frontier_model_developer",
      "evaluation",
      "model_security",
      "ai_governance"
    ],
    "tags": [
      "disclosure:platform_security",
      "disclosure:api_controls",
      "disclosure:model_evaluation_platform",
      "disclosure:service_terms",
      "gap:no_public_rsp",
      "gap:no_public_dangerous_capability_eval",
      "frontier_model_development",
      "api_platform",
      "agent_platform",
      "Doubao",
      "Volcengine Ark",
      "API platform",
      "model evaluation tooling",
      "service terms",
      "PR2D: public disclosure backfill"
    ],
    "source_ids": [
      "volcengine-ark-overview",
      "volcengine-ark-special-terms",
      "volcengine-doubao-model-service-agreement",
      "volcengine-api-key-config",
      "volcengine-model-evaluation"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Are there public Doubao model cards or technical reports for the newest frontier closed models?",
      "Are there public dangerous-capability or misuse evaluations beyond generic model evaluation tooling?",
      "Is there any public external audit or red-team disclosure for Doubao/Ark?"
    ]
  },
  {
    "id": "moonshot-kimi",
    "name_en": "Moonshot AI Kimi",
    "name_local": "月之暗面 Kimi",
    "acronym": "Kimi",
    "entity_type": "company",
    "country": "China",
    "region": "East Asia",
    "summary": "Moonshot AI Kimi record backed by Kimi privacy, service-agreement, platform, and Kimi K2 model-card materials. Public evidence supports privacy, developer data-responsibility, tooling, and model-card disclosures rather than release gates or advanced-risk governance.",
    "focus_areas": [
      "frontier_model_developer",
      "model_security",
      "ai_governance"
    ],
    "tags": [
      "disclosure:privacy",
      "disclosure:developer_data_responsibility",
      "disclosure:tooling",
      "disclosure:model_card",
      "gap:no_public_rsp",
      "gap:no_public_dangerous_capability_eval",
      "gap:no_public_external_audit",
      "frontier_model_development",
      "api_platform",
      "agentic_models",
      "Kimi",
      "privacy",
      "developer data responsibility",
      "model card",
      "tooling",
      "PR2D: public disclosure backfill"
    ],
    "source_ids": [
      "kimi-api-platform-home",
      "kimi-privacy-policy",
      "kimi-service-agreement",
      "kimi-k2-instruct-model-card"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Does Moonshot publish any model-specific safety card or red-team summary for current frontier releases?",
      "Are there public release gates or preparedness thresholds for agentic Kimi models?",
      "Is any external audit or third-party model-safety evaluation public?"
    ]
  },
  {
    "id": "minimax",
    "name_en": "MiniMax",
    "name_local": "MiniMax",
    "acronym": "MiniMax",
    "entity_type": "company",
    "country": "China",
    "region": "East Asia",
    "summary": "MiniMax record backed by about, API, privacy, model-page, and content-labeling materials. Public disclosures are mostly API/platform, privacy, benchmark, and content-provenance oriented; snippet-only API-key and labeling evidence notes were held.",
    "focus_areas": [
      "frontier_model_developer",
      "content_safety",
      "model_security",
      "open_model_governance",
      "evaluation"
    ],
    "tags": [
      "disclosure:api_controls",
      "disclosure:privacy",
      "disclosure:content_provenance",
      "disclosure:model_benchmarks",
      "gap:no_public_rsp",
      "gap:no_public_dangerous_capability_eval",
      "gap:no_public_external_audit",
      "frontier_model_development",
      "api_platform",
      "multimodal_models",
      "open_weight_release",
      "MiniMax API",
      "privacy",
      "content labeling",
      "model benchmarks",
      "multimodal models",
      "PR2D: public disclosure backfill"
    ],
    "source_ids": [
      "minimax-about",
      "minimax-api-prerequisites",
      "minimax-api-key-faq",
      "minimax-api-privacy-policy",
      "minimax-m3-model-page",
      "minimax-content-labeling-announcement"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Is there any public MiniMax model-card-style safety section for frontier text models?",
      "Does MiniMax disclose red-teaming or external evaluations for advanced agentic/coding releases?",
      "Are there public release-gating or post-deployment monitoring criteria beyond API and labeling controls?"
    ]
  },
  {
    "id": "stepfun",
    "name_en": "StepFun",
    "name_local": "阶跃星辰",
    "acronym": "Step",
    "entity_type": "company",
    "country": "China",
    "region": "East Asia",
    "summary": "StepFun record backed by privacy, user-agreement, platform, migration, and reasoning API pages. Because PR2D evidence for detailed API and agent-framework claims was snippet-only, this import keeps StepFun claims at the general platform-disclosure level.",
    "focus_areas": [
      "frontier_model_developer",
      "model_security",
      "ai_governance"
    ],
    "tags": [
      "disclosure:privacy",
      "disclosure:api_controls",
      "disclosure:agent_framework_compatibility",
      "disclosure:model_routing",
      "gap:no_public_rsp",
      "gap:no_public_dangerous_capability_eval",
      "frontier_model_development",
      "api_platform",
      "agentic_models",
      "StepFun platform",
      "privacy",
      "API compatibility",
      "reasoning models",
      "snippet-only detailed claims held",
      "PR2D: public disclosure backfill"
    ],
    "source_ids": [
      "stepfun-privacy-policy",
      "stepfun-open-platform-home",
      "stepfun-user-agreement",
      "stepfun-openai-migration",
      "step-plan-reasoning-api"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "Are there public StepFun model cards or technical reports for Step 2/3.x frontier models with safety sections?",
      "Are any external red-team or dangerous-capability evaluations public?",
      "Is there a public release-gating or preparedness document distinct from API/platform docs?"
    ]
  },
  {
    "id": "zero-one-ai-yi",
    "name_en": "01.AI",
    "name_local": "零一万物",
    "acronym": "Yi",
    "entity_type": "company",
    "country": "China",
    "region": "East Asia",
    "summary": "01.AI/Yi record backed by repository, model-card, and licensing source rows. This pass treats Yi as primarily an open-weight documentation case and does not import snippet-only claims about training details, context windows, or license language.",
    "focus_areas": [
      "frontier_model_developer",
      "open_model_governance"
    ],
    "tags": [
      "disclosure:model_card",
      "disclosure:open_weight_release",
      "disclosure:apache2_license",
      "gap:no_public_platform_privacy_docs_found",
      "gap:no_public_rsp",
      "gap:no_public_dangerous_capability_eval",
      "frontier_model_development",
      "open_weight_release",
      "coding_models",
      "Yi",
      "open-weight release",
      "model card",
      "license",
      "snippet-only detail claims held",
      "PR2D: public disclosure backfill"
    ],
    "source_ids": [
      "yi-1-5-github",
      "yi-1-5-34b-chat-model-card",
      "yi-license"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false,
    "open_questions": [
      "What is 01.AI's current official API/privacy/service-agreement stack for Yi if any public platform remains acti...",
      "Are there any official red-team or dangerous-capability evaluation disclosures for Yi?",
      "Is there any public advanced-AI-risk or preparedness statement from 01.AI?"
    ]
  },
  {
    "id": "zhipu-bigmodel-open-platform",
    "name_en": "BigModel Open Platform",
    "name_local": "大模型开放平台",
    "acronym": "BigModel",
    "entity_type": "policy_program",
    "country": "China",
    "region": "Asia-Pacific",
    "summary": "Official Zhipu platform surface used in PR2D for source-backed API access, content-safety, and model-evaluation disclosures.",
    "focus_areas": [
      "evaluation",
      "content_safety",
      "model_security"
    ],
    "tags": [
      "platform",
      "company-operated platform",
      "PR2D platform node"
    ],
    "source_ids": [
      "zhipu-api-overview",
      "zhipu-content-safety",
      "zhipu-model-evaluation"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false
  },
  {
    "id": "baidu-qianfan-platform",
    "name_en": "Baidu Qianfan Platform",
    "name_local": "百度千帆·大模型服务及Agent开发平台",
    "acronym": "Qianfan",
    "entity_type": "policy_program",
    "country": "China",
    "region": "Asia-Pacific",
    "summary": "Official Baidu Qianfan platform surface used in PR2D for model services, intervention rules, API access, and content-marking controls.",
    "focus_areas": [
      "evaluation",
      "content_safety",
      "model_security",
      "ai_governance"
    ],
    "tags": [
      "platform",
      "company-operated platform",
      "PR2D platform node"
    ],
    "source_ids": [
      "baidu-qianfan-overview",
      "baidu-qianfan-intervention-strategy",
      "baidu-qianfan-content-marking"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false
  },
  {
    "id": "kimi-api-platform",
    "name_en": "Kimi API Open Platform",
    "name_local": "Kimi API 开放平台",
    "acronym": "Kimi API",
    "entity_type": "policy_program",
    "country": "China",
    "region": "Asia-Pacific",
    "summary": "Official Moonshot AI Kimi API platform surface used in PR2D for source-backed tooling, privacy, service-agreement, and model-card disclosures.",
    "focus_areas": [
      "model_security",
      "ai_governance"
    ],
    "tags": [
      "platform",
      "company-operated platform",
      "PR2D platform node"
    ],
    "source_ids": [
      "kimi-api-platform-home",
      "kimi-privacy-policy",
      "kimi-service-agreement"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "tier": 1,
    "needs_primary_source": false
  },
  {
    "id": "asean-secretariat",
    "name_en": "Association of Southeast Asian Nations",
    "acronym": "ASEAN",
    "entity_type": "dialogue_convenor",
    "country": "Regional",
    "region": "Southeast Asia",
    "summary": "Regional intergovernmental organization represented here only for source-backed ASEAN AI governance coordination: the 2024 voluntary AI governance guide, the 2025 generative-AI expansion, the Bangkok Digital Declaration, and a Malaysia official ASEAN AI Safe announcement. Held roadmap and search-snippet claims are not treated as operational evidence.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "international_dialogue",
      "capacity_building"
    ],
    "tags": [
      "ASEAN",
      "regional voluntary guidance",
      "political declaration",
      "AI Safe",
      "ADGMIN"
    ],
    "source_ids": [
      "asean-guide-ai-governance-ethics-2024",
      "expanded-asean-guide-genai-2025",
      "bangkok-digital-declaration-2025",
      "malaysia-champions-asean-ai-safe-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "open_questions": [
      "Whether ASEAN AI Safe has published terms of reference, secretariat arrangements, or a public work programme beyond summit-level announcements.",
      "Whether the Responsible AI Roadmap has a final public PDF working text beyond the official page summary captured here."
    ],
    "needs_primary_source": false
  },
  {
    "id": "mydigital-corporation",
    "name_en": "MyDIGITAL Corporation",
    "acronym": "MyDIGITAL",
    "entity_type": "government",
    "country": "Malaysia",
    "region": "Southeast Asia",
    "summary": "Malaysian government-linked implementation and coordination node in this source pack, connected to NAIO incubation, AI action-plan procurement, and a Malaysia official announcement about ASEAN AI Safe. The public sources do not establish MyDIGITAL as an AI safety testing body.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "international_dialogue",
      "capacity_building"
    ],
    "tags": [
      "NAIO incubation",
      "AI action plan",
      "ASEAN AI Safe",
      "Malaysia"
    ],
    "source_ids": [
      "mydigital-naio-page",
      "mydigital-national-ai-action-plan-rfp-2025",
      "malaysia-champions-asean-ai-safe-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "open_questions": [
      "Whether NAIO’s long-term institutional home remains within MyDIGITAL or shifted after incubation."
    ],
    "needs_primary_source": false
  },
  {
    "id": "etda-thailand",
    "name_en": "Electronic Transactions Development Agency",
    "name_local": "สำนักงานพัฒนาธุรกรรมทางอิเล็กทรอนิกส์",
    "acronym": "ETDA",
    "entity_type": "government",
    "country": "Thailand",
    "region": "Southeast Asia",
    "summary": "Thai digital-governance agency represented here through official AI governance guidance, AI Governance Center activity, ethics principles, and draft AI-law consultation sources. The imported rows do not treat the draft-law consultation as enacted law.",
    "focus_areas": [
      "ai_governance",
      "ethics",
      "policy_regulation",
      "capacity_building"
    ],
    "tags": [
      "AIGC",
      "AI law draft",
      "AI governance guideline",
      "Thailand"
    ],
    "source_ids": [
      "etda-aigc-page",
      "thailand-ai-governance-guideline-executive-2023",
      "digital-thailand-ai-ethics-guideline-2019",
      "etda-draft-ai-law-pr-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "open_questions": [
      "Whether Thailand has published the full draft AI law text or only public hearing principles in an official accessible form."
    ],
    "needs_primary_source": false
  },
  {
    "id": "dost-asti-ph",
    "name_en": "Advanced Science and Technology Institute",
    "acronym": "DOST-ASTI",
    "entity_type": "research_group",
    "country": "Philippines",
    "region": "Southeast Asia",
    "summary": "Philippine government research institute represented here as a public AI R&D implementation actor, including DOST-ASTI AI programme materials, SkAI-Pinas-linked work, and the launch of NAICRI.",
    "focus_areas": [
      "technical_safety_research",
      "testing_infrastructure",
      "capacity_building",
      "ai_governance"
    ],
    "tags": [
      "NAICRI",
      "SkAI-Pinas",
      "AI R&D",
      "Philippines"
    ],
    "source_ids": [
      "philippines-dost-asti-ai-page",
      "philippines-naicri-launch-2026",
      "philippines-dost-ai-flagship-year1-2026"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "open_questions": [
      "Whether DOST or DICT has separately published a final Philippines National AI Strategy Roadmap 2.0 text."
    ],
    "needs_primary_source": false
  },
  {
    "id": "brin-orei",
    "name_en": "Electronics and Informatics Research Organization",
    "name_local": "Organisasi Riset Elektronika dan Informatika",
    "acronym": "OREI",
    "entity_type": "research_group",
    "country": "Indonesia",
    "region": "Southeast Asia",
    "summary": "BRIN research organization represented with limited public evidence that it hosts an AI and cybersecurity research center page. Details on mandate, staffing, and programme scope remain sparse in this source pack.",
    "focus_areas": [
      "technical_safety_research",
      "cybersecurity"
    ],
    "tags": [
      "BRIN",
      "research center",
      "AI and cybersecurity",
      "Indonesia"
    ],
    "source_ids": [
      "brin-ai-cybersecurity-research-center-page-2025"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 2,
    "open_questions": [
      "Formal mandate, staffing, and programme portfolio of the BRIN AI and Cybersecurity Research Center.",
      "Whether BRIN or another Indonesian ministry hosts the authoritative public Stranas KA implementation portal."
    ],
    "needs_primary_source": true
  },
  {
    "id": "asean-ai-safe-network",
    "name_en": "ASEAN AI Safety Network",
    "acronym": "ASEAN AI Safe",
    "entity_type": "policy_program",
    "country": "Regional",
    "region": "Southeast Asia",
    "summary": "Regional AI safety network initiative supported here by a Malaysia official announcement. The atlas does not treat it as an operational testing network until ASEAN publishes public implementation details.",
    "focus_areas": [
      "ai_governance",
      "international_dialogue",
      "capacity_building"
    ],
    "tags": [
      "ASEAN AI Safe",
      "regional network",
      "political declaration"
    ],
    "source_ids": [
      "malaysia-champions-asean-ai-safe-2025"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "open_questions": [
      "Public terms of reference, membership rules, secretariat arrangements, or work programme for ASEAN AI Safe."
    ],
    "needs_primary_source": true
  },
  {
    "id": "singapore-ai-safety-red-teaming-challenge",
    "name_en": "Singapore AI Safety Red Teaming Challenge",
    "entity_type": "evaluation_platform",
    "country": "Singapore",
    "region": "Asia-Pacific",
    "summary": "IMDA-organized multicultural and multilingual GenAI red-teaming challenge focused on harmful bias stereotypes across Asian contexts.",
    "focus_areas": [
      "red_teaming",
      "evaluation",
      "ai_assurance",
      "testing_infrastructure",
      "content_safety"
    ],
    "tags": [
      "red teaming",
      "challenge",
      "multilingual testing",
      "Asian contexts"
    ],
    "source_ids": [
      "singapore-ai-safety-red-teaming-challenge-page-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "open_questions": [
      "Whether IMDA will publish repeat challenge methodology or ongoing programme governance."
    ],
    "needs_primary_source": true
  },
  {
    "id": "national-ai-office-malaysia",
    "name_en": "National AI Office",
    "acronym": "NAIO",
    "entity_type": "government",
    "country": "Malaysia",
    "region": "Southeast Asia",
    "summary": "Malaysia national AI coordination node launched in December 2024. Sources describe policy and regulatory framework shaping, innovation, adoption, and talent functions, but do not establish statutory enforcement powers.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "capacity_building"
    ],
    "tags": [
      "NAIO",
      "central authority",
      "coordination",
      "Malaysia"
    ],
    "source_ids": [
      "mydigital-naio-page",
      "naio-home-working-groups-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "open_questions": [
      "Whether NAIO’s formal authority is later codified in statute, regulation, or cabinet decision."
    ],
    "needs_primary_source": false
  },
  {
    "id": "naio-working-groups-malaysia",
    "name_en": "NAIO Working Groups",
    "acronym": "NAIO WGs",
    "entity_type": "working_group",
    "country": "Malaysia",
    "region": "Southeast Asia",
    "summary": "Set of NAIO specialised working groups publicly announced to drive Malaysia’s AI agenda with technology, academic, industry, government, and civil-society participation.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "capacity_building"
    ],
    "tags": [
      "working groups",
      "multi-stakeholder",
      "Malaysia"
    ],
    "source_ids": [
      "naio-home-working-groups-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 2,
    "open_questions": [
      "Current roster and published outputs for each NAIO working group."
    ],
    "needs_primary_source": true
  },
  {
    "id": "ai-governance-center-thailand",
    "name_en": "AI Governance Center",
    "name_local": "ศูนย์ธรรมาภิบาลปัญญาประดิษฐ์",
    "acronym": "AIGC",
    "entity_type": "government",
    "country": "Thailand",
    "region": "Southeast Asia",
    "summary": "ETDA-hosted AI governance center framed as a cross-network cooperation platform for governance framework development, consultation, knowledge exchange, and networking.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "capacity_building",
      "international_dialogue"
    ],
    "tags": [
      "AIGC",
      "ETDA",
      "Thailand",
      "governance center"
    ],
    "source_ids": [
      "etda-aigc-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "open_questions": [
      "Whether AIGC has a public service catalogue or formal assessment mandate beyond governance consultation and knowledge exchange."
    ],
    "needs_primary_source": true
  },
  {
    "id": "ai-thailand-program",
    "name_en": "AI Thailand",
    "entity_type": "policy_program",
    "country": "Thailand",
    "region": "Southeast Asia",
    "summary": "Official national AI strategy and action-plan programme page for Thailand, including readiness work on ethics, law and regulation and a strategy line for AI sandboxes.",
    "focus_areas": [
      "ai_governance",
      "policy_regulation",
      "capacity_building",
      "testing_infrastructure"
    ],
    "tags": [
      "national strategy",
      "sandbox",
      "Thailand"
    ],
    "source_ids": [
      "ai-thailand-national-strategy-2022-2027-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 2,
    "open_questions": [
      "Operational status and public outputs of the AI sandbox elements described in the strategy page."
    ],
    "needs_primary_source": true
  },
  {
    "id": "brin-ai-cybersecurity-research-center",
    "name_en": "AI and Cybersecurity Research Center",
    "name_local": "Pusat Riset Kecerdasan Artifisial dan Keamanan Siber",
    "entity_type": "research_group",
    "country": "Indonesia",
    "region": "Southeast Asia",
    "summary": "BRIN page indicating a dedicated AI and cybersecurity research center under the Electronics and Informatics research organization. Public detail in this source pack is limited.",
    "focus_areas": [
      "technical_safety_research",
      "cybersecurity"
    ],
    "tags": [
      "BRIN",
      "AI and cybersecurity",
      "research center"
    ],
    "source_ids": [
      "brin-ai-cybersecurity-research-center-page-2025"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 2,
    "open_questions": [
      "Mandate, staffing, research outputs, and service portfolio."
    ],
    "needs_primary_source": true
  },
  {
    "id": "naicri-philippines",
    "name_en": "National Artificial Intelligence Center for Research and Innovation",
    "acronym": "NAICRI",
    "entity_type": "research_group",
    "country": "Philippines",
    "region": "Southeast Asia",
    "summary": "Philippine national institutional anchor for AI research, advanced computing, and innovation launched by DOST-ASTI in February 2026.",
    "focus_areas": [
      "technical_safety_research",
      "testing_infrastructure",
      "capacity_building",
      "ai_governance"
    ],
    "tags": [
      "NAICRI",
      "advanced computing",
      "AI research",
      "Philippines"
    ],
    "source_ids": [
      "philippines-naicri-launch-2026",
      "philippines-dost-ai-flagship-year1-2026"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 1,
    "open_questions": [
      "Public service offerings, compute-access rules, and data-governance policies."
    ],
    "needs_primary_source": false
  },
  {
    "id": "skai-pinas",
    "name_en": "Philippine Sky Artificial Intelligence Program",
    "acronym": "SkAI-Pinas",
    "entity_type": "research_group",
    "country": "Philippines",
    "region": "Southeast Asia",
    "summary": "Philippine AI R&D programme represented because DOST-ASTI’s official AI page identifies ASTI-ALaM as part of the broader SkAI-Pinas umbrella.",
    "focus_areas": [
      "technical_safety_research",
      "capacity_building"
    ],
    "tags": [
      "SkAI-Pinas",
      "ASTI-ALaM",
      "research programme"
    ],
    "source_ids": [
      "philippines-dost-asti-ai-page"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tier": 2,
    "open_questions": [
      "Programme charter, governance, and current scope."
    ],
    "needs_primary_source": true
  }
];
