import type { Relationship } from "@/types";

export const relationships: Relationship[] = [
  {
    "id": "rel-cac-miit-co-issues-genai-measures",
    "source_entity_id": "cn-cac",
    "target_entity_id": "cn-miit",
    "relationship_type": "co_issues",
    "description": "CAC and MIIT are both named co-issuing ministries for the Interim Measures for the Management of Generative AI Services.",
    "evidence_note_ids": [
      "en-cac-genai-joint-issuance"
    ],
    "source_ids": [
      "cac-generative-ai-measures-2023"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-cac-miit-co-issues-deep-synthesis-provisions",
    "source_entity_id": "cn-cac",
    "target_entity_id": "cn-miit",
    "relationship_type": "co_issues",
    "description": "CAC and MIIT are both named issuers of the Deep Synthesis Provisions, together with MPS.",
    "evidence_note_ids": [
      "en-deep-synthesis-joint-issuance"
    ],
    "source_ids": [
      "cac-deep-synthesis-provisions-2022"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-cac-miit-co-issues-labeling-measures",
    "source_entity_id": "cn-cac",
    "target_entity_id": "cn-miit",
    "relationship_type": "co_issues",
    "description": "CAC and MIIT are both named issuers of the AI-generated content labeling measures, together with MPS and NRTA.",
    "evidence_note_ids": [
      "en-labeling-measures-joint-issuance"
    ],
    "source_ids": [
      "cac-ai-content-labeling-measures-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-cac-miit-co-issues-ai-standardization-guide",
    "source_entity_id": "cn-cac",
    "target_entity_id": "cn-miit",
    "relationship_type": "co_issues",
    "description": "CAC's parent office and MIIT jointly issued the 2024 national AI industry comprehensive standardization guide.",
    "evidence_note_ids": [
      "en-ai-standardization-guide-joint-issuance"
    ],
    "source_ids": [
      "cac-national-ai-standardization-guide-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-caict-affiliated-with-miit",
    "source_entity_id": "cn-caict",
    "target_entity_id": "cn-miit",
    "relationship_type": "affiliated_with",
    "description": "CAICT's official about page states that it is a research public institution directly under MIIT.",
    "evidence_note_ids": [
      "en-caict-miit-affiliation"
    ],
    "source_ids": [
      "caict-about-us"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-cesi-affiliated-with-miit",
    "source_entity_id": "cesi",
    "target_entity_id": "cn-miit",
    "relationship_type": "affiliated_with",
    "description": "CESI's official basic-information page states that it is directly under MIIT.",
    "evidence_note_ids": [
      "en-cesi-miit-affiliation"
    ],
    "source_ids": [
      "cesi-basic-info"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-tc28-sc42-affiliated-with-cesi",
    "source_entity_id": "tc28-sc42",
    "target_entity_id": "cesi",
    "relationship_type": "affiliated_with",
    "description": "Official standards-administration and CESI pages both place the secretariat of SAC/TC28/SC42 at CESI.",
    "evidence_note_ids": [
      "en-tc28-sc42-secretariat-at-cesi"
    ],
    "source_ids": [
      "tc28-sc42-samr-org-page",
      "tc28-sc42-cesi-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-tc260-affiliated-with-cesi",
    "source_entity_id": "cn-tc260",
    "target_entity_id": "cesi",
    "relationship_type": "affiliated_with",
    "description": "TC260 shows an operational affiliation with CESI through its secretary-general placement and homepage contact-location signals, though the retrieved sources stop short of a formal administrative-subordination statement.",
    "evidence_note_ids": [
      "en-tc260-cesi-secretariat-signals"
    ],
    "source_ids": [
      "tc260-homepage",
      "tc260-committee-roster-2024"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-caict-establishes-aiia",
    "source_entity_id": "cn-caict",
    "target_entity_id": "aiia",
    "relationship_type": "establishes",
    "description": "CAICT stated on its official site that, acting as the secretary-general unit, it jointly initiated the establishment of AIIA. This is recorded as an establishes relation with medium confidence because the source is explicit about joint, not sole, establishment.",
    "evidence_note_ids": [
      "en-caict-aiia-founding-role"
    ],
    "source_ids": [
      "caict-aiia-founding-news-2018"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-aiia-safety-governance-committee-affiliated-with-aiia",
    "source_entity_id": "aiia-safety-governance-committee",
    "target_entity_id": "aiia",
    "relationship_type": "affiliated_with",
    "description": "Official CAICT reporting says the Safety Governance Committee was prepared relying on AIIA, which supports an AIIA affiliation while remaining more conservative than claiming a fully documented standing committee architecture.",
    "evidence_note_ids": [
      "en-aiia-safety-governance-committee-under-aiia"
    ],
    "source_ids": [
      "caict-ai-risk-governance-report-2024"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-shanghai-ai-safety-governance-lab-affiliated-with-shlab",
    "source_entity_id": "shanghai-ai-safety-and-governance-laboratory",
    "target_entity_id": "cn-shlab",
    "relationship_type": "affiliated_with",
    "description": "The government-domain repost states that the Shanghai AI Safety and Governance Laboratory was jointly established by SHLAB's Governance Research Center and another Shanghai testing center, supporting an affiliation with SHLAB.",
    "evidence_note_ids": [
      "en-shanghai-ai-safety-governance-lab-founding"
    ],
    "source_ids": [
      "shanghai-ai-safety-governance-lab-unveiling-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-caict-member-of-cnaisda",
    "source_entity_id": "cn-caict",
    "target_entity_id": "cn-cnaisda",
    "relationship_type": "member_of",
    "description": "Tsinghua's official coverage lists CAICT among the member units of CnAISDA.",
    "evidence_note_ids": [
      "en-cnaisda-member-list"
    ],
    "source_ids": [
      "cnaisda-tsinghua-paris-side-event-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-baai-member-of-cnaisda",
    "source_entity_id": "cn-baai",
    "target_entity_id": "cn-cnaisda",
    "relationship_type": "member_of",
    "description": "Tsinghua's official coverage lists BAAI among the member units of CnAISDA.",
    "evidence_note_ids": [
      "en-cnaisda-member-list"
    ],
    "source_ids": [
      "cnaisda-tsinghua-paris-side-event-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-shlab-member-of-cnaisda",
    "source_entity_id": "cn-shlab",
    "target_entity_id": "cn-cnaisda",
    "relationship_type": "member_of",
    "description": "Tsinghua's official coverage lists SHLAB among the member units of CnAISDA.",
    "evidence_note_ids": [
      "en-cnaisda-member-list"
    ],
    "source_ids": [
      "cnaisda-tsinghua-paris-side-event-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-baai-maintains-flag-eval",
    "source_entity_id": "cn-baai",
    "target_entity_id": "flag-eval",
    "relationship_type": "maintains",
    "description": "BAAI's official system page lists FlagEval as the institute's open large-model evaluation platform.",
    "evidence_note_ids": [
      "en-baai-flageval-platform"
    ],
    "source_ids": [
      "baai-flageval-system-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-shlab-maintains-opencompass",
    "source_entity_id": "cn-shlab",
    "target_entity_id": "opencompass",
    "relationship_type": "maintains",
    "description": "SHLAB's official news page describes OpenCompass as built by SHLAB and used as a broad evaluation system.",
    "evidence_note_ids": [
      "en-shlab-opencompass-platform"
    ],
    "source_ids": [
      "shlab-opencompass-2023"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-tc260-establishes-wg9",
    "source_entity_id": "cn-tc260",
    "target_entity_id": "tc260-wg9",
    "relationship_type": "establishes",
    "description": "SHLAB's official article states that, according to a TC260 notice, AI Security Standards Working Group WG9 was formally established.",
    "evidence_note_ids": [
      "en-shlab-wg9-established"
    ],
    "source_ids": [
      "shlab-wg9-formation-2026"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-shlab-chairs-wg9",
    "source_entity_id": "cn-shlab",
    "target_entity_id": "tc260-wg9",
    "relationship_type": "chairs",
    "description": "SHLAB's official article states that SHLAB director Zhou Bowen serves as head of WG9, supporting a chairs relation from SHLAB to WG9.",
    "evidence_note_ids": [
      "en-shlab-heads-wg9"
    ],
    "source_ids": [
      "shlab-wg9-formation-2026"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-ipa-hosts-japan-aisi",
    "source_entity_id": "ipa-japan",
    "target_entity_id": "jp-aisi",
    "relationship_type": "hosts",
    "description": "Public sources place Japan AISI inside IPA and state that the AISI secretariat was set up in IPA.",
    "evidence_note_ids": [
      "jpn-e2",
      "jpn-e6"
    ],
    "source_ids": [
      "jpn-aisi-about-page",
      "jpn-integrated-innovation-strategy-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-japan-liaison-coordinates-japan-aisi",
    "source_entity_id": "cabinet-office-aisi-liaison-japan",
    "target_entity_id": "jp-aisi",
    "relationship_type": "affiliated_with",
    "description": "The liaison was created to coordinate government policy consideration around AI safety in connection with AISI.",
    "evidence_note_ids": [
      "jpn-e3",
      "jpn-e4"
    ],
    "source_ids": [
      "jpn-cabinet-office-aisi-liaison-setup"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-msit-establishes-korea-aisi",
    "source_entity_id": "msit-korea",
    "target_entity_id": "kr-aisi",
    "relationship_type": "establishes",
    "description": "MSIT hosted the launch ceremony and publicly announced the institute.",
    "evidence_note_ids": [
      "kor-e3"
    ],
    "source_ids": [
      "kor-msit-launch-release"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-korea-aisi-affiliated-with-etri",
    "source_entity_id": "kr-aisi",
    "target_entity_id": "etri-korea",
    "relationship_type": "affiliated_with",
    "description": "ETRI’s official page presents Korea AISI within ETRI’s institutional structure; affiliated_with is the closest conservative taxonomy label.",
    "evidence_note_ids": [
      "kor-e7"
    ],
    "source_ids": [
      "kor-etri-aisi-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-korea-aisi-establishes-consortium",
    "source_entity_id": "kr-aisi",
    "target_entity_id": "korea-ai-safety-consortium",
    "relationship_type": "establishes",
    "description": "MSIT says a post-launch MOU formed the Korea AI Safety Consortium to work with the institute.",
    "evidence_note_ids": [
      "kor-e6"
    ],
    "source_ids": [
      "kor-msit-launch-release"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-korea-consortium-supports-korea-aisi",
    "source_entity_id": "korea-ai-safety-consortium",
    "target_entity_id": "kr-aisi",
    "relationship_type": "supplements",
    "description": "Korea AISI’s own consortium post describes subgroup work and joint-testing discussion that support the institute’s agenda.",
    "evidence_note_ids": [
      "kor-e10"
    ],
    "source_ids": [
      "kor-aisi-consortium-meeting-post"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-dtc-designated-as-singapore-aisi",
    "source_entity_id": "digital-trust-centre-singapore",
    "target_entity_id": "sg-aisi",
    "relationship_type": "affiliated_with",
    "description": "Official Singapore AISI sources state that DTC Singapore is the designated Singapore AISI.",
    "evidence_note_ids": [
      "sg-e2"
    ],
    "source_ids": [
      "sg-aisi-about-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-imda-coordinates-singapore-aisi",
    "source_entity_id": "imda-singapore",
    "target_entity_id": "sg-aisi",
    "relationship_type": "oversees",
    "description": "Singapore AISI’s official page says IMDA is the overall government agency responsible for baseline policy and international engagement.",
    "evidence_note_ids": [
      "sg-e3"
    ],
    "source_ids": [
      "sg-aisi-about-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-ai-verify-foundation-affiliated-with-imda",
    "source_entity_id": "sg-ai-verify-foundation",
    "target_entity_id": "imda-singapore",
    "relationship_type": "affiliated_with",
    "description": "AIVF states that it is a wholly owned subsidiary of IMDA; affiliated_with is the closest conservative taxonomy label.",
    "evidence_note_ids": [
      "sg-e8"
    ],
    "source_ids": [
      "sg-ai-verify-foundation-about"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-ai-verify-foundation-publishes-testing-framework",
    "source_entity_id": "sg-ai-verify-foundation",
    "target_entity_id": "ai-verify-testing-framework",
    "relationship_type": "publishes",
    "description": "The official AIVF site publishes and maintains the AI Verify Testing Framework.",
    "evidence_note_ids": [
      "sg-e9"
    ],
    "source_ids": [
      "sg-ai-verify-testing-framework-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-ai-verify-foundation-publishes-project-moonshot",
    "source_entity_id": "sg-ai-verify-foundation",
    "target_entity_id": "project-moonshot",
    "relationship_type": "publishes",
    "description": "The official AIVF site publishes and maintains Project Moonshot as part of its tooling stack.",
    "evidence_note_ids": [
      "sg-e10"
    ],
    "source_ids": [
      "sg-project-moonshot-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-ai-verify-foundation-establishes-ai-tap",
    "source_entity_id": "sg-ai-verify-foundation",
    "target_entity_id": "ai-tester-accreditation-programme",
    "relationship_type": "establishes",
    "description": "The AI Tester Accreditation Programme is presented on the official AIVF site as its accreditation programme for testing firms.",
    "evidence_note_ids": [
      "sg-e12"
    ],
    "source_ids": [
      "sg-ai-tester-accreditation-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-singapore-aisi-conducts-testing-with-korea-aisi",
    "source_entity_id": "sg-aisi",
    "target_entity_id": "kr-aisi",
    "relationship_type": "conducts_testing_with",
    "description": "Singapore AISI’s resources page states that Korea and Singapore AISIs jointly tested AI agents for data leakage risks.",
    "evidence_note_ids": [
      "sg-e5"
    ],
    "source_ids": [
      "sg-aisi-resources-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-singapore-aisi-conducts-testing-with-japan-aisi",
    "source_entity_id": "sg-aisi",
    "target_entity_id": "jp-aisi",
    "relationship_type": "conducts_testing_with",
    "description": "Singapore AISI’s resources page says Singapore and Japan, with the UK, led a multilingual evaluation exercise; Japan’s own 2025 materials also place Singapore and Japan as track co-chairs.",
    "evidence_note_ids": [
      "sg-e6",
      "jpn-e7"
    ],
    "source_ids": [
      "sg-aisi-resources-page",
      "jpn-aisi-activity-paper-2025-03"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-imda-cohosts-global-ai-assurance-sandbox",
    "source_entity_id": "imda-singapore",
    "target_entity_id": "global-ai-assurance-sandbox",
    "relationship_type": "co_hosts",
    "description": "The sandbox page defines the Global AI Assurance Sandbox as an IMDA–AI Verify Foundation initiative. Co-hosts is the closest existing taxonomy label to co-runs.",
    "evidence_note_ids": [
      "sg-e11"
    ],
    "source_ids": [
      "sg-global-ai-assurance-sandbox-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "tsinghua-ciss-cohosts-us-china-ai-dialogue-round-6-2024",
    "source_entity_id": "cn-tsinghua-ciss",
    "target_entity_id": "us-china-ai-and-international-security-dialogue-round-6-2024",
    "relationship_type": "co_hosts",
    "description": "Tsinghua CISS was publicly associated with the sixth U.S.-China AI and International Security Dialogue.",
    "evidence_note_ids": [
      "note-brookings-round6"
    ],
    "source_ids": [
      "brookings-ai-glossary-2024"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-06",
    "public_safe_to_show": true
  },
  {
    "id": "tsinghua-ciss-cohosts-china-eu-ai-dialogue-round-2-2024",
    "source_entity_id": "cn-tsinghua-ciss",
    "target_entity_id": "china-eu-ai-and-international-security-dialogue-round-2-2024",
    "relationship_type": "co_hosts",
    "description": "Tsinghua CISS publicly co-hosted round two of the China-EU AI and International Security Dialogue.",
    "evidence_note_ids": [
      "note-ciss-hd-round2"
    ],
    "source_ids": [
      "ciss-china-eu-ai-security-dialogue-round-2-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-06",
    "public_safe_to_show": true
  },
  {
    "id": "centre-for-humanitarian-dialogue-cohosts-china-eu-ai-dialogue-round-2-2024",
    "source_entity_id": "centre-for-humanitarian-dialogue",
    "target_entity_id": "china-eu-ai-and-international-security-dialogue-round-2-2024",
    "relationship_type": "co_hosts",
    "description": "HD publicly co-hosted round two of the China-EU AI and International Security Dialogue.",
    "evidence_note_ids": [
      "note-ciss-hd-round2"
    ],
    "source_ids": [
      "ciss-china-eu-ai-security-dialogue-round-2-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-06",
    "public_safe_to_show": true
  },
  {
    "id": "tsinghua-ciss-cohosts-china-eu-ai-dialogue-round-5-2026",
    "source_entity_id": "cn-tsinghua-ciss",
    "target_entity_id": "china-eu-ai-and-international-security-dialogue-round-5-2026",
    "relationship_type": "co_hosts",
    "description": "Tsinghua CISS publicly co-hosted round five of the China-EU AI and International Security Dialogue.",
    "evidence_note_ids": [
      "note-ciss-hd-round5"
    ],
    "source_ids": [
      "ciss-china-eu-ai-security-dialogue-round-5-2026"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-06",
    "public_safe_to_show": true
  },
  {
    "id": "centre-for-humanitarian-dialogue-cohosts-china-eu-ai-dialogue-round-5-2026",
    "source_entity_id": "centre-for-humanitarian-dialogue",
    "target_entity_id": "china-eu-ai-and-international-security-dialogue-round-5-2026",
    "relationship_type": "co_hosts",
    "description": "HD publicly co-hosted round five of the China-EU AI and International Security Dialogue.",
    "evidence_note_ids": [
      "note-ciss-hd-round5"
    ],
    "source_ids": [
      "ciss-china-eu-ai-security-dialogue-round-5-2026"
    ],
    "confidence_level": "high",
    "sensitivity_level": "medium",
    "last_verified": "2026-06-06",
    "public_safe_to_show": true
  },
  {
    "id": "cnaisda-organizes-paris-side-event-2025",
    "source_entity_id": "cn-cnaisda",
    "target_entity_id": "cnaisda-paris-side-event-2025",
    "relationship_type": "organizes",
    "description": "CnAISDA appeared as the named interface for a public side event during the Paris summit period.",
    "evidence_note_ids": [
      "note-cnaisda-paris-side-event"
    ],
    "source_ids": [
      "cnaisda-shanghai-qizhi-side-event-2025"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "public_safe_to_show": true
  },
  {
    "id": "zhipu-operates-bigmodel-open-platform",
    "source_entity_id": "zhipu-ai-glm",
    "target_entity_id": "zhipu-bigmodel-open-platform",
    "relationship_type": "operates",
    "description": "Zhipu AI operates the BigModel open platform used for API access and evaluation tooling.",
    "evidence_note_ids": [
      "zhipu-api-platform-note",
      "zhipu-eval-definition-note"
    ],
    "source_ids": [
      "zhipu-api-overview",
      "zhipu-model-evaluation"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "baidu-operates-qianfan-platform",
    "source_entity_id": "baidu-ernie",
    "target_entity_id": "baidu-qianfan-platform",
    "relationship_type": "operates",
    "description": "Baidu exposes model and agent-development services through the Qianfan platform.",
    "evidence_note_ids": [
      "baidu-qianfan-platform-scope-note"
    ],
    "source_ids": [
      "baidu-qianfan-overview"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "moonshot-operates-kimi-api-platform",
    "source_entity_id": "moonshot-kimi",
    "target_entity_id": "kimi-api-platform",
    "relationship_type": "operates",
    "description": "Moonshot AI operates the Kimi API open platform, which includes first-party tools and model access.",
    "evidence_note_ids": [
      "kimi-tooling-note",
      "kimi-k2-model-card-note"
    ],
    "source_ids": [
      "kimi-api-platform-home",
      "kimi-k2-instruct-model-card"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  }
];
