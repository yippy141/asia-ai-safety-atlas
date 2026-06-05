# Multilingual and Local Research Playbook

## Principle

Do not simply translate US/European AI governance categories into Asian contexts. Search and classify the ecosystem using local institutions, local terminology, local platforms, and local policy rhythms.

For every country, collect:
- Local-language name
- English name
- Acronym
- Jurisdiction and parent body
- Local policy terms
- Key source domains
- Local platforms/newsletters
- Relevant standards and evaluation bodies

## China-first research approach

### Core Chinese search terms

```text
人工智能安全
人工智能治理
人工智能国际治理
人工智能安全治理
大模型安全
生成式人工智能安全
大模型评测
大模型安全评估
人工智能标准
人工智能安全标准
可信人工智能
人工智能伦理
人工智能风险
前沿人工智能安全
超级对齐
模型对齐
可解释性
机械可解释性
智能体安全
具身智能安全
开源大模型治理
生物安全 人工智能
网络安全 人工智能
人工智能 安全可控
AI 向善
```

### China source hierarchy

Start with:
- Gov.cn
- CAC / 网信办
- MIIT / 工信部
- MOST / 科技部
- MFA / 外交部
- SAMR / SAC standards platforms
- TC260 / 全国网络安全标准化技术委员会
- CAICT / 中国信通院
- CESI / 中国电子技术标准化研究院
- CSTC / 中国软件评测中心
- SHLAB / 上海人工智能实验室
- BAAI / 北京智源人工智能研究院
- Tsinghua I-AIIG / 清华大学人工智能国际治理研究院
- Tsinghua CISS / 清华大学国际安全与战略研究中心

Then use:
- WeChat official accounts
- Zhihu
- 36Kr, Caixin, Yicai, The Paper, Xinhua, People’s Daily
- arXiv, AMiner, Google Scholar, Semantic Scholar, OpenAlex
- Company technical reports and GitHub/Hugging Face/ModelScope pages

### Chinese interpretation cautions

- 安全 can mean safety, security, or both. Translate case-by-case.
- 安全可控 often implies controllability and state/security governance, not necessarily Western “alignment.”
- 可信人工智能 often maps to trustworthy AI, but may include compliance, reliability, content safety, and governance.
- 大模型安全 may focus on content compliance, data security, or adversarial robustness rather than catastrophic-risk safety.
- Do not over-interpret Politburo or State Council language without implementation documents.

## Japan research approach

### Search terms

```text
AI安全性
AIセーフティ
AIガバナンス
生成AI ガバナンス
基盤モデル 安全性
AI安全性評価
AIセーフティ・インスティテュート
人工知能 安全性
AI事業者ガイドライン
広島AIプロセス
```

### Source targets

- METI / 経済産業省
- MIC / 総務省
- Digital Agency / デジタル庁
- IPA and Japan AISI
- AIST / 産総研
- RIKEN / 理化学研究所
- NII / 国立情報学研究所
- AI Japan R&D network, university labs, major companies

### Local framing caution

Japan often emphasizes industrial policy, standards, assurance, Hiroshima Process, and international interoperability. Separate broad AI governance from frontier model safety evaluation.

## Korea research approach

### Search terms

```text
인공지능 안전
AI 안전
AI 안전연구소
생성형 AI 거버넌스
대형언어모델 안전성
AI 신뢰성
인공지능 윤리
AI 안전성 평가
AI 기본법
```

### Source targets

- MSIT / 과학기술정보통신부
- ETRI
- NIA
- IITP
- KAIST, SNU, POSTECH
- Korea AI Safety Institute materials
- Naver, Samsung, LG AI Research, Kakao, Upstage

### Local framing caution

Korea often frames AI through competitiveness, industry coordination, trusted AI, and national AI strategy. Map industry-academia-government relationships carefully.

## Singapore research approach

Singapore uses English-language official sources, but it has a distinct governance style: assurance, testing, implementation tools, public-private pilots, and regional convening.

Source targets:
- Singapore AISI
- IMDA
- MDDI
- AI Verify Foundation
- AI Singapore
- Digital Trust Centre
- NUS, NTU, SUTD
- GovTech
- Singapore Consensus / AI safety research priority convenings

## ASEAN research approach

ASEAN research is often multilingual and document-driven.

### Regional sources

- ASEAN Digital Ministers
- ASEAN Guide on AI Governance and Ethics
- Expanded ASEAN GenAI Guide
- ASEAN Secretariat
- National AI strategy documents

### Local search examples

Indonesia:
```text
kecerdasan buatan tata kelola AI keamanan AI regulasi AI generatif
```

Vietnam:
```text
trí tuệ nhân tạo quản trị AI an toàn AI AI tạo sinh
```

Thailand:
```text
ปัญญาประดิษฐ์ ธรรมาภิบาล AI ความปลอดภัย AI ปัญญาประดิษฐ์เชิงสร้างสรรค์
```

Malaysia:
```text
kecerdasan buatan tadbir urus AI keselamatan AI AI generatif
```

Philippines:
```text
artificial intelligence governance generative AI data privacy AI safety Philippines
```

### ASEAN caution

ASEAN documents may be regional consensus documents rather than implementation evidence. Track national implementation separately.

## Translation workflow

1. Search in the local language.
2. Save original title, author, publisher, date, URL.
3. Translate title into English.
4. Extract only source-supported facts.
5. Store original-language quote or paraphrase note.
6. Ask a second model to check translation ambiguity.
7. If the fact is important, verify with a second source.

## Local research prompt pattern

Ask the model:

```text
Research this actor using [LANGUAGE] sources first. Use local-language search terms. Return the original-language names, local institutional context, source reliability, and translation caveats. Do not force US/EU policy categories. Identify what this actor calls its own work, then map it cautiously to our taxonomy.
```
