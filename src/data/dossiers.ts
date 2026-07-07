import type { OrgDossier } from "@/types/dossiers";

// One dossier per China tier 0-1 entity that clears the spec threshold:
// a why_it_matters claim, at least two importance aspects, three sources.
// Bands are per-aspect judgments; reasoning sentences cite source records.
// Aspects without supporting evidence are omitted and render "not assessed".
export const orgDossiers: OrgDossier[] = [
  {
    entity_id: "cn-cac",
    why_it_matters:
      "Every public-facing generative AI service in China clears rules CAC issued or co-issued; its filing, security-assessment, and labeling architecture is the enforcement layer the rest of the stack builds on.",
    history: [
      {
        date: "2021-12-31",
        event:
          "Algorithmic recommendation provisions published as order No. 9, jointly with MIIT, MPS, and SAMR.",
        source_ids: ["cac-algorithm-recommendation-provisions-2022"],
      },
      {
        date: "2022-12-11",
        event: "Deep synthesis provisions posted, jointly issued with MIIT and MPS.",
        source_ids: ["cac-deep-synthesis-provisions-2022"],
      },
      {
        date: "2023-07-13",
        event: "Interim measures for generative AI services published.",
        source_ids: ["cac-generative-ai-measures-2023"],
      },
      {
        date: "2024-07-03",
        event: "National AI standardization guide (2024 edition) posted.",
        source_ids: ["cac-national-ai-standardization-guide-2024"],
      },
      {
        date: "2025-03-14",
        event:
          "AI-generated content labeling measures published, effective 2025-09-01.",
        source_ids: ["cac-ai-content-labeling-measures-2025"],
      },
    ],
    leadership: [],
    importance: [
      {
        aspect: "regulatory_authority",
        band: 3,
        reasoning:
          "CAC issued or co-issued the four binding rules that govern algorithmic recommendation, deep synthesis, generative AI services, and AI content labeling.",
        evidence_basis: "official",
        source_ids: [
          "cac-algorithm-recommendation-provisions-2022",
          "cac-deep-synthesis-provisions-2022",
          "cac-generative-ai-measures-2023",
          "cac-ai-content-labeling-measures-2025",
        ],
      },
      {
        aspect: "standards_influence",
        band: 2,
        reasoning:
          "The 2024 national AI standardization guide lists the Central Cyberspace Affairs Commission Office among its joint issuers, and the mandatory labeling standard GB 45438-2025 records CAC as its administering authority.",
        evidence_basis: "official",
        source_ids: [
          "cac-national-ai-standardization-guide-2024",
          "gb-45438-2025-aigc-labeling-standard",
        ],
      },
    ],
    safety_conception: {
      text: "In CAC's rules, AI safety means orderly information services: security assessment and filing before public deployment, traceability and labeling of synthetic content, and provider responsibility for content risk.",
      evidence_basis: "analyst_inference",
      source_ids: [
        "cac-generative-ai-measures-2023",
        "cac-deep-synthesis-provisions-2022",
        "cac-ai-content-labeling-measures-2025",
        "cac-algorithm-recommendation-provisions-2022",
      ],
    },
    connections_note: {
      text: "Recorded edges are co-issuance links with MIIT; each of the four binding instruments is a joint document rather than a solo CAC order.",
      evidence_basis: "analyst_inference",
    },
    selected_outputs: [
      {
        title: "Interim Measures for the Management of Generative AI Services",
        year: "2023",
        source_id: "cac-generative-ai-measures-2023",
      },
      {
        title: "Measures for Labeling AI-Generated and AI-Synthesized Content",
        year: "2025",
        source_id: "cac-ai-content-labeling-measures-2025",
      },
      {
        title:
          "Provisions on the Administration of Algorithmic Recommendation in Internet Information Services",
        year: "2021",
        source_id: "cac-algorithm-recommendation-provisions-2022",
      },
      {
        title:
          "Provisions on the Administration of Internet Information Services Deep Synthesis",
        year: "2022",
        source_id: "cac-deep-synthesis-provisions-2022",
      },
    ],
    engagement_fit: {
      plausible_for:
        "Formal, regulator-to-regulator exchange on service rules, filing procedure, and labeling implementation, if framed through official channels.",
      constrained_by:
        "It is a rule-issuing and enforcement body; open technical exchange on model evaluation sits more naturally with the standards and institute layer below it.",
      evidence_basis: "analyst_inference",
    },
    open_questions: [
      "Whether to model the Central Cyberspace Affairs Commission Office and CAC as one node or as linked but distinct nodes.",
      "Current leadership could not be recorded: the reference naming CAC's director did not resolve to a verifiable source.",
    ],
    last_verified: "2026-07-07",
    public_safe_to_show: true,
  },
  {
    entity_id: "cn-miit",
    why_it_matters:
      "The industry ministry whose name is on every joint AI rule: co-issuer of the binding service rules and the 2024 standardization guide, and home ministry of CAICT and CESI, the institutes that run much of China's AI evaluation.",
    history: [
      {
        date: "2023-07-13",
        event: "Named co-issuing ministry for the generative AI interim measures.",
        source_ids: ["cac-generative-ai-measures-2023"],
      },
      {
        date: "2024-07-03",
        event: "Joint issuer of the national AI standardization guide (2024 edition).",
        source_ids: ["cac-national-ai-standardization-guide-2024"],
      },
      {
        date: "2024-12-13",
        event:
          "Announced its own AI standardization technical committee (announcement No. 35 of 2024).",
        source_ids: ["miit-ai-standardization-committee-announcement-2024"],
      },
    ],
    leadership: [],
    importance: [
      {
        aspect: "regulatory_authority",
        band: 2,
        reasoning:
          "MIIT is a named co-issuer, not the lead issuer, of the binding generative AI, deep synthesis, and labeling rules.",
        evidence_basis: "official",
        source_ids: [
          "cac-generative-ai-measures-2023",
          "cac-deep-synthesis-provisions-2022",
          "cac-ai-content-labeling-measures-2025",
        ],
      },
      {
        aspect: "standards_influence",
        band: 2,
        reasoning:
          "It jointly issued the 2024 national AI standardization guide and runs a ministry-level AI standardization technical committee of its own.",
        evidence_basis: "official",
        source_ids: [
          "cac-national-ai-standardization-guide-2024",
          "miit-tc1-homepage",
          "miit-ai-standardization-committee-announcement-2024",
        ],
      },
    ],
    safety_conception: {
      text: "MIIT-linked instruments treat AI safety as industrial reliability and standardization: testing and evaluation in the standards guide's base layer, plus a safety and governance branch spanning robustness, traceability, and ethics review.",
      evidence_basis: "analyst_inference",
      source_ids: [
        "cac-national-ai-standardization-guide-2024",
        "miit-tc1-homepage",
      ],
    },
    connections_note: {
      text: "MIIT sits at the center of the recorded institutional graph: co-issuance links with CAC and affiliation links from CAICT and CESI.",
      evidence_basis: "analyst_inference",
    },
    selected_outputs: [
      {
        title:
          "National AI Industry Comprehensive Standardization System Construction Guide (2024 edition)",
        year: "2024",
        source_id: "cac-national-ai-standardization-guide-2024",
      },
      {
        title: "MIIT AI Standardization Technical Committee announcement",
        year: "2024",
        source_id: "miit-ai-standardization-committee-announcement-2024",
      },
    ],
    engagement_fit: {
      plausible_for:
        "Standards and industrial-deployment conversations where safety is framed as reliable, testable adoption.",
      constrained_by:
        "Its AI remit runs largely through affiliated institutes; it is not the lead voice on content rules or diplomatic framing.",
      evidence_basis: "analyst_inference",
    },
    open_questions: [
      "Whether the MIIT AI standardization committee should be modeled as the primary ministry standards channel as its output grows.",
    ],
    last_verified: "2026-07-07",
    public_safe_to_show: true,
  },
  {
    entity_id: "cn-tc260",
    why_it_matters:
      "The committee where China's AI security expectations become testable documents: its guides pair with binding rules, its framework names the risk categories, and its new WG9 is where AI security standards are being drafted.",
    history: [
      {
        date: "2023-08-25",
        event:
          "Practice guide on labeling methods for generative AI content published.",
        source_ids: ["tc260-content-labeling-practice-guide-2023"],
      },
      {
        date: "2024-02-29",
        event: "Basic security requirements for generative AI services published.",
        source_ids: ["tc260-genai-service-security-requirements-2024"],
      },
      {
        date: "2024-09-09",
        event: "AI Safety Governance Framework released.",
        source_ids: ["tc260-ai-safety-governance-framework-2024"],
      },
      {
        date: "2025-02-28",
        event:
          "GB 45438-2025, the mandatory labeling-method standard executed by TC260, issued.",
        source_ids: ["gb-45438-2025-aigc-labeling-standard"],
      },
      {
        date: "2026-04-09",
        event:
          "AI Security Standards Working Group (WG9) formed under a TC260 notice, with SHLAB's director as group head.",
        source_ids: ["shlab-wg9-formation-2026"],
      },
    ],
    leadership: [],
    importance: [
      {
        aspect: "standards_influence",
        band: 3,
        reasoning:
          "Its generative AI security requirements and labeling practice guide pair directly with the binding CAC rules, and GB 45438-2025 names TC260 as the executing technical committee.",
        evidence_basis: "official",
        source_ids: [
          "tc260-genai-service-security-requirements-2024",
          "tc260-content-labeling-practice-guide-2023",
          "gb-45438-2025-aigc-labeling-standard",
        ],
      },
      {
        aspect: "technical_capacity",
        band: 2,
        reasoning:
          "Its published documents specify corpus security, model security, and security-assessment requirements at working technical depth.",
        evidence_basis: "official",
        source_ids: ["tc260-genai-service-security-requirements-2024"],
      },
      {
        aspect: "convening_power",
        band: 2,
        reasoning:
          "The WG9 formation drew a frontier lab into committee leadership, with SHLAB's director heading the group.",
        evidence_basis: "analyst_inference",
        source_ids: ["shlab-wg9-formation-2026"],
      },
      {
        aspect: "regulatory_authority",
        band: 1,
        reasoning:
          "Standards and practice guides do not bind on their own, but GB 45438-2025 shows the committee's work carries mandatory force once adopted as a national standard.",
        evidence_basis: "analyst_inference",
        source_ids: ["gb-45438-2025-aigc-labeling-standard"],
      },
    ],
    safety_conception: {
      text: "AI safety reads as a lifecycle security problem: corpus, model, infrastructure, and application security with assessment requirements attached, and a governance framework that links risk categories to management measures.",
      evidence_basis: "analyst_inference",
      source_ids: [
        "tc260-genai-service-security-requirements-2024",
        "tc260-ai-safety-governance-framework-2024",
      ],
    },
    connections_note: {
      text: "Recorded edges run downward and sideways: TC260 established WG9, and its secretariat operations show ties to CESI.",
      evidence_basis: "analyst_inference",
    },
    selected_outputs: [
      {
        title: "AI Safety Governance Framework",
        year: "2024",
        source_id: "tc260-ai-safety-governance-framework-2024",
      },
      {
        title:
          "Cybersecurity Technology: Basic Security Requirements for Generative AI Services",
        year: "2024",
        source_id: "tc260-genai-service-security-requirements-2024",
      },
      {
        title:
          "GB 45438-2025 Labeling Method for AI-Generated and Synthetic Content",
        year: "2025",
        source_id: "gb-45438-2025-aigc-labeling-standard",
      },
    ],
    engagement_fit: {
      plausible_for:
        "Technically literate, standards-centered dialogue on AI security requirements and evaluation methods.",
      constrained_by:
        "Standards influence is not enforcement power; binding decisions sit with the regulators its documents support.",
      evidence_basis: "analyst_inference",
    },
    open_questions: [
      "A dedicated TC260 source explicitly naming the secretariat institution would firm up the administrative link to CESI.",
      "Whether WG9 output hardens quickly into national standards or stays at practice-guide level.",
    ],
    last_verified: "2026-07-07",
    public_safe_to_show: true,
  },
  {
    entity_id: "tc260-wg9",
    why_it_matters:
      "The working group TC260 created to draft China's AI security standards; a frontier-lab scientist leads it, making it the most direct lab-to-standards channel on public record.",
    history: [
      {
        date: "2026-04-09",
        event:
          "Formal establishment under a TC260 notice reported, with the first meeting held and SHLAB's director named group head.",
        source_ids: ["shlab-wg9-formation-2026"],
      },
    ],
    leadership: [
      {
        person_id: "zhou-bowen",
        person_display: "Zhou Bowen",
        role: "Group head; director and chief scientist of Shanghai AI Laboratory",
        source_ids: ["shlab-wg9-formation-2026"],
      },
    ],
    importance: [
      {
        aspect: "standards_influence",
        band: 2,
        reasoning:
          "TC260's notice establishes WG9 to organize AI security standard research and drafting, placing it at the entry point of the national standards pipeline.",
        evidence_basis: "official",
        source_ids: [
          "shlab-wg9-formation-2026",
          "tc260-homepage",
          "report-china-standards-evaluation-2026-06-05",
        ],
      },
      {
        aspect: "technical_capacity",
        band: 2,
        reasoning:
          "The group is headed by the director and chief scientist of a frontier lab, which puts working evaluation capability at its center; how far that transfers into committee output remains to be seen.",
        evidence_basis: "analyst_inference",
        source_ids: ["shlab-wg9-formation-2026"],
      },
    ],
    safety_conception: {
      text: "Security-forward: standards, measurement, and evaluator capability rather than ethics principles; the group's stated remit is AI security standard research and drafting.",
      evidence_basis: "analyst_inference",
      source_ids: ["shlab-wg9-formation-2026", "tc260-homepage"],
    },
    selected_outputs: [],
    engagement_fit: {
      plausible_for:
        "Standards-track technical exchange on model security and evaluation methods, likely through TC260 channels.",
      constrained_by:
        "Newly formed; its output pipeline and downstream adoption are not yet on record.",
      evidence_basis: "analyst_inference",
    },
    open_questions: [
      "Deputy leadership named in unverified references (CNCERT and CAICT figures) awaits a resolvable source.",
      "Whether WG9 drafts become national standards or stay technical documents.",
    ],
    last_verified: "2026-07-07",
    public_safe_to_show: true,
  },
  {
    entity_id: "cn-caict",
    why_it_matters:
      "The MIIT institute that built much of China's AI evaluation machinery: the AIIA alliance, the AI Safety Benchmark, and the Fangsheng benchmark system all run through it.",
    history: [
      {
        date: "2018-09-18",
        event:
          "Records its role as joint initiator and secretary-general unit of AIIA.",
        source_ids: ["caict-aiia-founding-news-2018"],
      },
      {
        date: "2024-07-11",
        event:
          "Fangsheng large-model benchmark system report published, with safety as a dedicated dimension.",
        source_ids: ["caict-fangsheng-benchmark-report-2024"],
      },
      {
        date: "2024-12-25",
        event:
          "AI Risk Governance Report 2024 published, documenting the AIIA Safety Governance Committee and the AI Safety Benchmark.",
        source_ids: ["caict-ai-risk-governance-report-2024"],
      },
      {
        date: "2026-01-09",
        event:
          "AI Safety Governance Research Report 2025 published, describing the expanded benchmark and the China AI Safety Commitment Framework.",
        source_ids: ["caict-ai-safety-governance-report-2025"],
      },
    ],
    leadership: [],
    importance: [
      {
        aspect: "technical_capacity",
        band: 3,
        reasoning:
          "It operates the Fangsheng benchmark system with a dedicated safety dimension and reports expanding the AI Safety Benchmark past one million test data points across more than thirty safety categories.",
        evidence_basis: "official",
        source_ids: [
          "caict-fangsheng-benchmark-report-2024",
          "caict-ai-safety-governance-report-2025",
        ],
      },
      {
        aspect: "convening_power",
        band: 3,
        reasoning:
          "It jointly founded AIIA, serves as its secretary-general unit, and used the alliance to launch the Safety Governance Committee, a risk-management system, and industry safety commitments.",
        evidence_basis: "official",
        source_ids: [
          "caict-aiia-founding-news-2018",
          "caict-ai-risk-governance-report-2024",
          "caict-ai-safety-governance-report-2025",
        ],
      },
      {
        aspect: "standards_influence",
        band: 1,
        reasoning:
          "Its risk-governance reports and alliance frameworks circulate as reference documents for industry practice, short of formal standard status.",
        evidence_basis: "analyst_inference",
        source_ids: [
          "caict-ai-risk-governance-report-2024",
          "caict-ai-safety-governance-report-2025",
        ],
      },
    ],
    safety_conception: {
      text: "Safety is an evaluation product: benchmarks, risk-management systems, and commitment frameworks that industry can adopt and be measured against.",
      evidence_basis: "analyst_inference",
      source_ids: [
        "caict-ai-risk-governance-report-2024",
        "caict-fangsheng-benchmark-report-2024",
        "caict-ai-safety-governance-report-2025",
      ],
    },
    connections_note: {
      text: "Its recorded edges show the double role: affiliated with MIIT upward, founder of AIIA downward, and a member of the CnAISDA research network.",
      evidence_basis: "analyst_inference",
    },
    selected_outputs: [
      {
        title: "AI Safety Governance Research Report 2025",
        year: "2026",
        source_id: "caict-ai-safety-governance-report-2025",
      },
      {
        title: "AI Risk Governance Report 2024",
        year: "2024",
        source_id: "caict-ai-risk-governance-report-2024",
      },
      {
        title: "Research Report on Large-Model Benchmarking System 2024",
        year: "2024",
        source_id: "caict-fangsheng-benchmark-report-2024",
      },
    ],
    engagement_fit: {
      plausible_for:
        "Working-level exchange that spans regulation, evaluation, standards, and industry practice in one conversation.",
      constrained_by:
        "Influential but not the final rulemaking authority; some outputs are interpretive or alliance-driven rather than binding.",
      evidence_basis: "analyst_inference",
    },
    open_questions: [
      "Leadership could not be recorded: references naming CAICT's president and vice president did not resolve to verifiable sources.",
    ],
    last_verified: "2026-07-07",
    public_safe_to_show: true,
  },
  {
    entity_id: "cesi",
    why_it_matters:
      "The standards institute where China's formal AI standards get drafted: secretariat unit for the national AI subcommittee, publisher of a general large-model evaluation standard, and builder of the first AI national-standard benchmark system.",
    history: [
      {
        date: "2018-01-19",
        event: "Publishes the AI subcommittee page identifying its secretariat role.",
        source_ids: ["tc28-sc42-cesi-page"],
      },
      {
        date: "2020-08-04",
        event:
          "SAC organization record confirms CESI as secretariat unit of TC28/SC42.",
        source_ids: ["tc28-sc42-samr-org-page"],
      },
      {
        date: "2024-10-16",
        event: "General large-model evaluation standard released.",
        source_ids: ["cesi-general-large-model-evaluation-standard-2024"],
      },
      {
        date: "2024-11-26",
        event:
          "Qiusuo, described as the first AI national-standard evaluation benchmark system, released.",
        source_ids: ["cesi-qiusuo-benchmark-2024"],
      },
    ],
    leadership: [],
    importance: [
      {
        aspect: "standards_influence",
        band: 3,
        reasoning:
          "CESI is the secretariat unit for the national AI standards subcommittee and released both a general large-model evaluation standard and the Qiusuo national-standard benchmark system.",
        evidence_basis: "official",
        source_ids: [
          "tc28-sc42-samr-org-page",
          "cesi-general-large-model-evaluation-standard-2024",
          "cesi-qiusuo-benchmark-2024",
        ],
      },
      {
        aspect: "technical_capacity",
        band: 2,
        reasoning:
          "Its Qiusuo benchmark system ships concrete evaluation tools, including AISBench and LMBench.",
        evidence_basis: "official",
        source_ids: ["cesi-qiusuo-benchmark-2024"],
      },
    ],
    safety_conception: {
      text: "Safety enters as a standards module: evaluation metrics and benchmark criteria inside the formal standards apparatus rather than a policy narrative of its own.",
      evidence_basis: "analyst_inference",
      source_ids: [
        "cesi-general-large-model-evaluation-standard-2024",
        "cesi-qiusuo-benchmark-2024",
      ],
    },
    connections_note: {
      text: "Recorded edges place CESI as connective tissue: affiliated with MIIT, secretariat for TC28/SC42, and operationally tied to TC260.",
      evidence_basis: "analyst_inference",
    },
    selected_outputs: [
      {
        title: "General Large-Model Evaluation Standard",
        year: "2024",
        source_id: "cesi-general-large-model-evaluation-standard-2024",
      },
      {
        title: "Qiusuo AI National-Standard Evaluation Benchmark System",
        year: "2024",
        source_id: "cesi-qiusuo-benchmark-2024",
      },
    ],
    engagement_fit: {
      plausible_for:
        "Standards drafting and benchmark-method exchange, where the currency is test criteria rather than policy positions.",
      constrained_by:
        "It drafts and hosts secretariats; adoption and enforcement decisions sit above it.",
      evidence_basis: "analyst_inference",
    },
    open_questions: [
      "Current institute leadership is not recorded; no verifiable source in the collected set names it.",
    ],
    last_verified: "2026-07-07",
    public_safe_to_show: true,
  },
  {
    entity_id: "aiia",
    why_it_matters:
      "The industry alliance through which Chinese AI firms sign safety commitments and get benchmarked; CAICT runs its machinery, which makes it the main soft-governance channel between the state institutes and the model developers.",
    history: [
      {
        date: "2018-09-18",
        event: "CAICT records its joint-initiator and secretary-general role in AIIA.",
        source_ids: ["caict-aiia-founding-news-2018"],
      },
      {
        date: "2024-12-25",
        event:
          "AIIA Safety Governance Committee and the AI Risk Management System documented in CAICT's risk governance report.",
        source_ids: ["caict-ai-risk-governance-report-2024"],
      },
      {
        date: "2026-01-09",
        event:
          "China AI Safety Commitment Framework documented in CAICT's safety governance report.",
        source_ids: ["caict-ai-safety-governance-report-2025"],
      },
    ],
    leadership: [],
    importance: [
      {
        aspect: "convening_power",
        band: 2,
        reasoning:
          "The alliance is the platform through which the AI Safety Benchmark, the risk-management system, and industry safety commitments were launched.",
        evidence_basis: "official",
        source_ids: [
          "caict-ai-risk-governance-report-2024",
          "caict-ai-safety-governance-report-2025",
        ],
      },
      {
        aspect: "standards_influence",
        band: 1,
        reasoning:
          "Its commitment frameworks and risk-management system function as voluntary reference practice, not formal standards.",
        evidence_basis: "analyst_inference",
        source_ids: [
          "caict-ai-safety-governance-report-2025",
          "caict-ai-risk-governance-report-2024",
        ],
      },
    ],
    safety_conception: {
      text: "Safety means industry self-regulation: commitments, risk-management frameworks, and benchmarks that member firms adopt short of state mandate.",
      evidence_basis: "analyst_inference",
      source_ids: [
        "caict-ai-risk-governance-report-2024",
        "caict-ai-safety-governance-report-2025",
      ],
    },
    connections_note: {
      text: "Its recorded edges run through CAICT, which established it and hosts its Safety Governance Committee.",
      evidence_basis: "analyst_inference",
    },
    selected_outputs: [
      {
        title: "China AI Safety Commitment Framework (documented by CAICT)",
        year: "2026",
        source_id: "caict-ai-safety-governance-report-2025",
      },
      {
        title: "AI Risk Management System (documented by CAICT)",
        year: "2024",
        source_id: "caict-ai-risk-governance-report-2024",
      },
    ],
    engagement_fit: {
      plausible_for:
        "Industry-level conversations about voluntary commitments and benchmark participation.",
      constrained_by:
        "An alliance, not an authority; its weight depends on CAICT and on member adoption.",
      evidence_basis: "analyst_inference",
    },
    open_questions: [
      "How far member firms actually implement the commitment frameworks, which the current sources document only at the announcement level.",
    ],
    last_verified: "2026-07-07",
    public_safe_to_show: true,
  },
  {
    entity_id: "opencompass",
    why_it_matters:
      "Shanghai AI Laboratory's open evaluation system is one of the few public windows into how a Chinese frontier lab measures model capability, and it carries safety as an explicit dimension.",
    history: [
      {
        date: "2023-10-19",
        event: "OpenCompass launched as an open, reproducible evaluation framework.",
        source_ids: ["src-opencompass-launch"],
      },
      {
        date: "2025-05-16",
        event: "Scientific intelligence evaluation system launched under OpenCompass.",
        source_ids: ["shlab-opencompass-2023"],
      },
    ],
    leadership: [],
    importance: [
      {
        aspect: "technical_capacity",
        band: 2,
        reasoning:
          "It runs an open, reproducible evaluation framework that has expanded into safety and trustworthiness dimensions.",
        evidence_basis: "official",
        source_ids: [
          "src-opencompass-launch",
          "src-opencompass-doc",
          "shlab-opencompass-2023",
        ],
      },
      {
        aspect: "standards_influence",
        band: 1,
        reasoning:
          "Its scores circulate as public reference points; there is no recorded adoption of its metrics into formal requirements.",
        evidence_basis: "analyst_inference",
        source_ids: ["src-opencompass-doc"],
      },
    ],
    safety_conception: {
      text: "Safety is a capability dimension inside a general evaluation framework, measured alongside reasoning and knowledge rather than treated as a separate compliance track.",
      evidence_basis: "analyst_inference",
      source_ids: ["src-opencompass-doc", "shlab-opencompass-2023"],
    },
    connections_note: {
      text: "One recorded edge: Shanghai AI Laboratory maintains the platform.",
      evidence_basis: "analyst_inference",
    },
    selected_outputs: [
      {
        title: "OpenCompass framework overview",
        source_id: "src-opencompass-doc",
      },
      {
        title: "Scientific intelligence evaluation system",
        year: "2025",
        source_id: "shlab-opencompass-2023",
      },
    ],
    engagement_fit: {
      plausible_for:
        "Technical exchange on evaluation methods and benchmark design, in the open-source register.",
      constrained_by:
        "A platform, not an institution; positions and priorities belong to the lab that maintains it.",
      evidence_basis: "analyst_inference",
    },
    open_questions: [
      "How its safety dimension relates to the lab's standards work in WG9, which the current sources do not connect.",
    ],
    last_verified: "2026-07-07",
    public_safe_to_show: true,
  },
  {
    entity_id: "cn-tsinghua-ciss",
    why_it_matters:
      "The Tsinghua center that co-hosts the recorded U.S.-China and China-EU AI security dialogues; when track-2 talks on AI risk happen, this is the counterparty the public record shows on the Chinese side.",
    history: [
      {
        date: "2024-05-13",
        event:
          "Second China-EU AI and International Security Dialogue held with HD.",
        source_ids: ["ciss-china-eu-ai-security-dialogue-round-2-2024"],
      },
      {
        date: "2024-06",
        event:
          "Brookings publishes a glossary tied to the sixth U.S.-China AI and International Security Dialogue with Tsinghua CISS.",
        source_ids: ["brookings-ai-glossary-2024"],
      },
      {
        date: "2026-02-10",
        event:
          "Fifth China-EU AI and International Security Dialogue held in Munich.",
        source_ids: ["ciss-china-eu-ai-security-dialogue-round-5-2026"],
      },
    ],
    leadership: [],
    importance: [
      {
        aspect: "international_interface",
        band: 2,
        reasoning:
          "Public records tie it to the sixth round of the U.S.-China dialogue and to China-EU dialogue rounds running into 2026; it sits across the table repeatedly, in a track-2 rather than official capacity.",
        evidence_basis: "official",
        source_ids: [
          "brookings-ai-glossary-2024",
          "ciss-china-eu-ai-security-dialogue-round-2-2024",
          "ciss-china-eu-ai-security-dialogue-round-5-2026",
        ],
      },
      {
        aspect: "convening_power",
        band: 2,
        reasoning:
          "It convenes recurring bilateral dialogue rounds with named foreign counterparts across multiple years.",
        evidence_basis: "official",
        source_ids: [
          "ciss-china-eu-ai-security-dialogue-round-2-2024",
          "ciss-china-eu-ai-security-dialogue-round-5-2026",
        ],
      },
    ],
    safety_conception: {
      text: "AI safety appears as an international-security problem: strategic risk between powers, worked through recurring dialogue rather than through domestic testing or standards.",
      evidence_basis: "analyst_inference",
      source_ids: [
        "brookings-ai-glossary-2024",
        "ciss-china-eu-ai-security-dialogue-round-2-2024",
      ],
    },
    connections_note: {
      text: "Its recorded edges are dialogue co-hosting links; the atlas models these as public dialogue channels, not operational relationships.",
      evidence_basis: "analyst_inference",
    },
    selected_outputs: [
      {
        title:
          "Glossary from the sixth U.S.-China AI and International Security Dialogue",
        year: "2024",
        source_id: "brookings-ai-glossary-2024",
      },
    ],
    engagement_fit: {
      plausible_for:
        "Track-2 dialogue on AI and international security, where continuity and counterpart familiarity matter.",
      constrained_by:
        "A university center; its positions do not commit the Chinese state, and reading them as official would overstate the channel.",
      evidence_basis: "analyst_inference",
    },
    open_questions: [
      "Whether earlier U.S.-China dialogue rounds and participant lists can be added from verifiable public records.",
    ],
    last_verified: "2026-07-07",
    public_safe_to_show: true,
  },
];
