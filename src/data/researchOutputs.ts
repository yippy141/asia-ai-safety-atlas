import type { ResearchOutput } from "@/types";

export const researchOutputs: ResearchOutput[] = [
  {
    "id": "out-align-anything",
    "title": "Align-Anything",
    "title_original": "align-anything",
    "output_type": "framework",
    "author_entity_ids": [
      "pku-alignment-team"
    ],
    "summary": "Multimodal alignment framework spanning training, data processing, and evaluation.",
    "focus_areas": [
      "technical_alignment",
      "testing_infrastructure"
    ],
    "source_ids": [
      "src-pku-align-anything"
    ],
    "evidence_note_ids": [
      "ev-pku-align-anything"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "framework",
      "China",
      "technical_testing_infrastructure"
    ]
  },
  {
    "id": "out-beaver-safe-rlhf",
    "title": "Beaver / Safe-RLHF",
    "title_original": "Beaver / Safe-RLHF",
    "output_type": "framework",
    "author_entity_ids": [
      "pku-alignment-team"
    ],
    "summary": "Open framework for constrained value alignment and Safe-RLHF research.",
    "focus_areas": [
      "technical_alignment"
    ],
    "source_ids": [
      "src-pku-safe-rlhf"
    ],
    "evidence_note_ids": [
      "ev-pku-safe-rlhf"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "framework",
      "China"
    ]
  },
  {
    "id": "out-language-models-resist-alignment",
    "title": "Language models resist alignment",
    "title_original": "大模型为何会抗拒对齐",
    "output_type": "paper",
    "author_entity_ids": [
      "pku-alignment-team"
    ],
    "summary": "PKU publicized work on alignment resistance and brittleness.",
    "focus_areas": [
      "technical_alignment"
    ],
    "source_ids": [
      "src-pku-brittleness"
    ],
    "evidence_note_ids": [
      "ev-pku-brittleness"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "paper",
      "China"
    ]
  },
  {
    "id": "out-flagsafe-platform",
    "title": "FlagSafe",
    "title_original": "FlagSafe 大模型安全平台",
    "output_type": "platform",
    "author_entity_ids": [
      "baai-flagsafe"
    ],
    "summary": "Public safety platform combining evaluation, defense, and interpretability.",
    "focus_areas": [
      "evaluation",
      "testing_infrastructure"
    ],
    "source_ids": [
      "src-flagsafe-home"
    ],
    "evidence_note_ids": [
      "ev-flagsafe-home"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "platform",
      "China",
      "safety_evaluation",
      "technical_testing_infrastructure"
    ]
  },
  {
    "id": "out-mm-deceptionbench",
    "title": "MM-DeceptionBench",
    "title_original": "MM-DeceptionBench",
    "output_type": "benchmark",
    "author_entity_ids": [
      "baai-flagsafe"
    ],
    "summary": "Multimodal deception benchmark surfaced on the FlagSafe deception page.",
    "focus_areas": [
      "dangerous_capability_evaluation",
      "evaluation"
    ],
    "source_ids": [
      "src-flagsafe-deception"
    ],
    "evidence_note_ids": [
      "ev-flagsafe-deception"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "benchmark",
      "China",
      "deception",
      "safety_evaluation"
    ]
  },
  {
    "id": "out-deceptionbench",
    "title": "DeceptionBench",
    "title_original": "DeceptionBench",
    "output_type": "benchmark",
    "author_entity_ids": [
      "baai-flagsafe"
    ],
    "summary": "Benchmark family for evaluating deceptive model behavior.",
    "focus_areas": [
      "dangerous_capability_evaluation",
      "evaluation"
    ],
    "source_ids": [
      "src-flagsafe-deception"
    ],
    "evidence_note_ids": [
      "ev-flagsafe-deception"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "benchmark",
      "China",
      "deception",
      "safety_evaluation"
    ]
  },
  {
    "id": "out-flageval",
    "title": "FlagEval",
    "title_original": "FlagEval 天秤",
    "output_type": "platform",
    "author_entity_ids": [
      "flag-eval"
    ],
    "summary": "BAAI evaluation platform with safety and values dimensions.",
    "focus_areas": [
      "evaluation"
    ],
    "source_ids": [
      "src-flageval"
    ],
    "evidence_note_ids": [
      "ev-flageval"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "platform",
      "China",
      "model_evaluation",
      "safety_evaluation"
    ]
  },
  {
    "id": "out-opencompass",
    "title": "OpenCompass",
    "title_original": "OpenCompass 司南",
    "output_type": "platform",
    "author_entity_ids": [
      "opencompass"
    ],
    "summary": "Open evaluation stack for large language and multimodal models with safety as a capability axis.",
    "focus_areas": [
      "evaluation",
      "testing_infrastructure"
    ],
    "source_ids": [
      "src-opencompass-launch",
      "src-opencompass-doc"
    ],
    "evidence_note_ids": [
      "ev-opencompass-launch",
      "ev-opencompass-doc"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "platform",
      "China",
      "model_evaluation",
      "safety_evaluation",
      "technical_testing_infrastructure"
    ]
  },
  {
    "id": "out-tongtest",
    "title": "TongTest",
    "title_original": "通智测试",
    "output_type": "platform",
    "author_entity_ids": [
      "bigai"
    ],
    "summary": "AGI evaluation framework with explicit ability and value dimensions.",
    "focus_areas": [
      "testing_infrastructure",
      "technical_alignment"
    ],
    "source_ids": [
      "src-bigai-tongtest"
    ],
    "evidence_note_ids": [
      "ev-bigai-tongtest"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "platform",
      "China",
      "technical_testing_infrastructure"
    ]
  },
  {
    "id": "out-hkgai-v1",
    "title": "HKGAI-V1",
    "title_original": "HKGAI V1",
    "output_type": "model_project",
    "author_entity_ids": [
      "hong-kong-generative-ai-rd-center"
    ],
    "summary": "Hong Kong-focused model with explicit local alignment and safety framing.",
    "focus_areas": [
      "technical_alignment",
      "evaluation"
    ],
    "source_ids": [
      "src-hkust-hkgai-v1",
      "src-hkgai-v1-paper"
    ],
    "evidence_note_ids": [
      "ev-hkust-hkgai-v1",
      "ev-hkgai-v1-paper"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "model_project",
      "Hong Kong",
      "safety_evaluation"
    ]
  },
  {
    "id": "out-adversarial-hk-value-benchmark",
    "title": "Adversarial HK Value Benchmark",
    "title_original": "Adversarial HK Value Benchmark",
    "output_type": "benchmark",
    "author_entity_ids": [
      "hong-kong-generative-ai-rd-center"
    ],
    "summary": "Benchmark mentioned in the HKGAI-V1 paper for difficult local alignment testing.",
    "focus_areas": [
      "technical_alignment",
      "evaluation"
    ],
    "source_ids": [
      "src-hkgai-v1-paper"
    ],
    "evidence_note_ids": [
      "ev-hkgai-v1-paper"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "benchmark",
      "Hong Kong",
      "safety_evaluation"
    ]
  },
  {
    "id": "out-japan-aisi-eval-guide",
    "title": "AI Safety Evaluation Perspective Guide",
    "title_original": "AIセーフティに関する評価観点ガイド",
    "output_type": "guide",
    "author_entity_ids": [
      "jp-aisi"
    ],
    "summary": "Official guide for evaluating LLM-system AI safety.",
    "focus_areas": [
      "evaluation",
      "testing_infrastructure"
    ],
    "source_ids": [
      "src-japan-aisi-eval"
    ],
    "evidence_note_ids": [
      "ev-japan-aisi-eval"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "guide",
      "Japan",
      "safety_evaluation",
      "technical_testing_infrastructure"
    ]
  },
  {
    "id": "out-japan-aisi-redteam-guide",
    "title": "AI Safety Red Teaming Methods Guide",
    "title_original": "AIセーフティに関するレッドチーミング手法ガイド",
    "output_type": "guide",
    "author_entity_ids": [
      "jp-aisi"
    ],
    "summary": "Official guide enumerating attack classes for LLM-system red teaming.",
    "focus_areas": [
      "red_teaming",
      "model_security",
      "evaluation"
    ],
    "source_ids": [
      "src-japan-aisi-redteam"
    ],
    "evidence_note_ids": [
      "ev-japan-aisi-redteam"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "guide",
      "Japan",
      "jailbreak_or_prompt-injection_evaluation",
      "safety_evaluation"
    ]
  },
  {
    "id": "out-japanese-safety-boundary-test",
    "title": "Japanese LLM Safety Boundary Test",
    "title_original": "日本語 LLM の安全性境界テスト",
    "output_type": "dataset",
    "author_entity_ids": [
      "sb-intuitions-responsible-ai-team"
    ],
    "summary": "Public Japanese evaluation artifact for LLM safety-boundary testing.",
    "focus_areas": [
      "evaluation"
    ],
    "source_ids": [
      "src-sb-safety-boundary"
    ],
    "evidence_note_ids": [
      "ev-sb-safety-boundary"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "dataset",
      "Japan",
      "safety_evaluation"
    ]
  },
  {
    "id": "out-wildguardtestjp",
    "title": "WildGuardTestJP",
    "title_original": "WildGuardTestJP",
    "output_type": "benchmark",
    "author_entity_ids": [
      "sb-intuitions-responsible-ai-team"
    ],
    "summary": "Japanese benchmark for LLM guardrail systems.",
    "focus_areas": [
      "evaluation",
      "red_teaming",
      "model_security"
    ],
    "source_ids": [
      "src-sb-wildguard-jp"
    ],
    "evidence_note_ids": [
      "ev-sb-wildguard-jp"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "benchmark",
      "Japan",
      "safety_evaluation",
      "jailbreak_or_prompt-injection_evaluation"
    ]
  },
  {
    "id": "out-answercarefully",
    "title": "AnswerCarefully",
    "title_original": "AnswerCarefully",
    "output_type": "dataset",
    "author_entity_ids": [
      "riken-aip-nlu"
    ],
    "summary": "Japanese dataset to improve LLM safety.",
    "focus_areas": [
      "evaluation"
    ],
    "source_ids": [
      "src-riken-answercarefully"
    ],
    "evidence_note_ids": [
      "ev-riken-answercarefully"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "dataset",
      "Japan",
      "safety_evaluation"
    ]
  },
  {
    "id": "out-korea-42-model-evaluation",
    "title": "42-model safety evaluation program",
    "title_original": "AI 모델 42종 안전성 평가 수행 실적",
    "output_type": "evaluation_program",
    "author_entity_ids": [
      "kr-aisi"
    ],
    "summary": "Publicly disclosed safety-evaluation work covering 42 AI models.",
    "focus_areas": [
      "evaluation",
      "testing_infrastructure"
    ],
    "source_ids": [
      "src-korea-aisi-42models"
    ],
    "evidence_note_ids": [
      "ev-korea-aisi-42models"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "evaluation_program",
      "Korea",
      "safety_evaluation",
      "technical_testing_infrastructure"
    ]
  },
  {
    "id": "out-soongsil-20-model-benchmark",
    "title": "Soongsil 20-model LLM safety benchmark",
    "title_original": "국내외 거대언어모델 20종 비교",
    "output_type": "benchmark",
    "author_entity_ids": [
      "soongsil-ai-safety-center"
    ],
    "summary": "20-model comparison using 57 attack techniques including prompt injection and jailbreak.",
    "focus_areas": [
      "evaluation",
      "red_teaming",
      "model_security"
    ],
    "source_ids": [
      "src-soongsil-llm-safety"
    ],
    "evidence_note_ids": [
      "ev-soongsil-llm-safety"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "benchmark",
      "Korea",
      "safety_evaluation",
      "jailbreak_or_prompt-injection_evaluation"
    ]
  },
  {
    "id": "out-gc-dpo",
    "title": "GC-DPO",
    "title_original": "GC-DPO",
    "output_type": "paper",
    "author_entity_ids": [
      "kaist-aipr-lab"
    ],
    "summary": "Method for generating safe responses to misaligned instructions while reducing jailbreak success.",
    "focus_areas": [
      "technical_alignment",
      "red_teaming",
      "model_security"
    ],
    "source_ids": [
      "src-kaist-aipr-home"
    ],
    "evidence_note_ids": [
      "ev-kaist-aipr-home"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "paper",
      "Korea",
      "jailbreak_or_prompt-injection_evaluation"
    ]
  },
  {
    "id": "out-monet",
    "title": "Monet",
    "title_original": "Monet: Mixture of Monosemantic Experts for Transformers",
    "output_type": "paper",
    "author_entity_ids": [
      "kaist-aipr-lab"
    ],
    "summary": "Transformer interpretability work publicly listed by KAIST AIPR.",
    "focus_areas": [
      "technical_alignment"
    ],
    "source_ids": [
      "src-kaist-aipr-pubs"
    ],
    "evidence_note_ids": [
      "ev-kaist-aipr-pubs"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "paper",
      "Korea",
      "interpretability"
    ]
  },
  {
    "id": "out-project-moonshot",
    "title": "Project Moonshot",
    "title_original": "Project Moonshot",
    "output_type": "toolkit",
    "author_entity_ids": [
      "project-moonshot"
    ],
    "summary": "Open-source toolkit joining benchmarking and red teaming for LLMs and LLM applications.",
    "focus_areas": [
      "evaluation",
      "red_teaming",
      "model_security",
      "testing_infrastructure"
    ],
    "source_ids": [
      "sg-project-moonshot-page",
      "src-aivf-moonshot-launch"
    ],
    "evidence_note_ids": [
      "ev-project-moonshot",
      "ev-aivf-moonshot-launch"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "toolkit",
      "Singapore",
      "safety_evaluation",
      "jailbreak_or_prompt-injection_evaluation",
      "technical_testing_infrastructure"
    ]
  },
  {
    "id": "out-agentspec",
    "title": "AgentSpec",
    "title_original": "AgentSpec",
    "output_type": "framework",
    "author_entity_ids": [
      "smu-jun-sun-group"
    ],
    "summary": "Runtime-enforcement framework for safe LLM agents.",
    "focus_areas": [
      "agent_safety",
      "technical_alignment"
    ],
    "source_ids": [
      "src-smu-agentspec"
    ],
    "evidence_note_ids": [
      "ev-smu-agentspec"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "framework",
      "Singapore"
    ]
  },
  {
    "id": "out-backdoorllm",
    "title": "BackdoorLLM",
    "title_original": "BackdoorLLM",
    "output_type": "benchmark",
    "author_entity_ids": [
      "smu-jun-sun-group"
    ],
    "summary": "Benchmark for backdoor attacks and defenses on large language models.",
    "focus_areas": [
      "model_security",
      "evaluation"
    ],
    "source_ids": [
      "src-smu-backdoorllm"
    ],
    "evidence_note_ids": [
      "ev-smu-backdoorllm"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "benchmark",
      "Singapore",
      "safety_evaluation"
    ]
  },
  {
    "id": "out-trustllm",
    "title": "TrustLLM",
    "title_original": "TrustLLM",
    "output_type": "benchmark",
    "author_entity_ids": [
      "nus-jin-song-dong-group"
    ],
    "summary": "Benchmark and evaluation framework for multiple LLM trustworthiness dimensions.",
    "focus_areas": [
      "evaluation",
      "testing_infrastructure"
    ],
    "source_ids": [
      "src-trustllm"
    ],
    "evidence_note_ids": [
      "ev-trustllm"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-06",
    "tags": [
      "benchmark",
      "Singapore",
      "safety_evaluation",
      "technical_testing_infrastructure"
    ]
  }
];
