import type { PEClaim } from "@/types/dossiers";

// Political-economy claims for /briefings/china-ai-plus, ingested verbatim
// from the reviewed research payload (tmp/ai_plus_pe.json). The claim,
// so_what, and safety_salience fields are carried over unchanged, including
// original-language quotes; 安全 is deliberately not auto-translated.
export const peClaims: PEClaim[] = [
  {
    "id": "pe-state-council-ai-plus-opinion",
    "jurisdiction": "national",
    "actor_class": "central_ministry",
    "instrument": "《国务院关于深入实施\"人工智能+\"行动的意见》 国发〔2025〕11号",
    "claim": "The central 'AI+' opinion is the flagship instrument. 成文2025年8月21日, 发布2025年8月26日 (index 000014349/2025-00070). Addressed to '各省、自治区、直辖市人民政府，国务院各部委、各直属机构'. NDRC is the named coordinator: '国家发展改革委要加强统筹协调，推动形成工作合力'. Targets: '到2027年…新一代智能终端、智能体等应用普及率超70%'; 2030 '超90%'; 2035 '全面步入智能经济和智能社会发展新阶段'. Six focus actions (科学技术/产业发展/消费提质/民生福祉/治理能力/全球合作) and eight supports (模型/数据/算力/应用/开源/人才/政策法规/安全).",
    "so_what": "This is the top-level party-state mandate and the spine of the AI+ agenda; every ministry and provincial document in this chain cites it. It frames AI primarily as a growth/productivity instrument ('新质生产力'), with safety subordinated to and instrumental for deployment.",
    "safety_salience": "安全 appears throughout and is context-dependent (safety AND security). Support (十四) '提升安全能力水平': '推动模型算法、数据资源、基础设施、应用系统等安全能力建设，防范模型的黑箱、幻觉、算法歧视等带来的风险，加强前瞻评估和监测处置，推动人工智能应用合规、透明、可信赖…坚持包容审慎、分类分级，加快形成动态敏捷、多元协同的人工智能治理格局'. Also (十三): '优化人工智能相关安全评估和备案管理制度'. Translation note: 安全 here spans model safety, cybersecurity and content/national security; do not auto-render as 'safety'.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "state-council-ai-plus-opinion-2025",
      "ndrc-ai-plus-opinion-infographic-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-ai-plus-global-cooperation",
    "jurisdiction": "national",
    "actor_class": "central_ministry",
    "instrument": "《国务院关于深入实施\"人工智能+\"行动的意见》 国发〔2025〕11号 — global cooperation section",
    "claim": "In the '人工智能+全球合作' action, the opinion positions AI as an '国际公共产品' and commits to global governance: '共同研判、积极应对人工智能应用风险，确保人工智能发展安全、可靠、可控' and '支持联合国在人工智能全球治理中发挥主渠道作用'.",
    "so_what": "Signals China wants to set international AI-safety governance norms via the UN channel and its 全球人工智能治理倡议, positioning itself as a norm entrepreneur.",
    "safety_salience": "'确保人工智能发展安全、可靠、可控' — 安全 here reads closer to 'safe/controllable', paired with 可靠 (reliable) and 可控 (controllable); still ambiguous vs security.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "state-council-ai-plus-opinion-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-ai-plus-manufacturing",
    "jurisdiction": "national",
    "actor_class": "central_ministry",
    "actor_entity_id": "cn-miit",
    "instrument": "《\"人工智能+制造\"专项行动实施意见》 工信部联科〔2025〕279号",
    "claim": "First named ministry implementation action under AI+. Jointly issued by 工业和信息化部、中央网信办、国家发展改革委、教育部、商务部、国务院国资委、市场监管总局、国家数据局. 成文2025年12月25日; 印发/公布2026年1月7日. Goals by 2027: '我国人工智能关键核心技术实现安全可靠供给'; 3–5 general models deeply applied in manufacturing; 1000 industrial agents; 100 high-quality datasets; 500 typical scenarios; cultivate 2–3 globally influential ecosystem-leading firms and 1000 benchmark ('标杆') enterprises. Structure: 7 tasks / 21 measures (创新筑基、赋智升级、产品突破、主体培育、生态壮大、安全护航、国际合作). Encourages 算力券/模型券 at local level and use of the 国家人工智能产业投资基金.",
    "so_what": "Shows how the abstract AI+ opinion cascades into concrete industrial mandates with quantified targets and an explicit anti-'involution' clause — a lever for tracing central-local coordination and duplication controls.",
    "safety_salience": "安全护航 is one of seven task pillars. Quote: '打造一批面向行业的应用安全解决方案，加快安全大模型、智能体等落地应用，构建安全运行体系，提升工业领域安全水平' and target '安全治理能力全面提升'. Anti-duplication quote: '引导企业错位发展，防范产业\"内卷式\"竞争'. 安全 here mixes industrial safety (安全生产) and model/security assurance.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "miit-ai-plus-manufacturing-opinion-2026",
      "xinhua-ai-plus-manufacturing-2026"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-sasac-central-soe-action",
    "jurisdiction": "national",
    "actor_class": "central_soe",
    "instrument": "国务院国资委 中央企业\"AI+\"专项行动 (launched 2024; deepening meeting 2025-02-19)",
    "claim": "SASAC (国务院国资委) runs a dedicated central-enterprise 'AI+' special action, launched 2024. At the 2025-02-19 deepening deployment meeting chaired by SASAC Party chief 张玉卓, SASAC reported central SOEs deploying AI across 500+ scenarios in manufacturing/energy/connected vehicles, building central-enterprise compute platforms '息壤''云骁''慧聚', and released (WAIC July 2025) a first batch of 40 央企人工智能战略性高价值场景 across 16 industries. SASAC directs SOEs to make AI a '十五五' planning priority and to serve as '智算资源的供给者、应用场景的转化者和产业生态的培育者'.",
    "so_what": "Central SOEs are cast as demand-aggregators and compute suppliers, not primarily as frontier-model developers — the state channels their scale ('需求规模大、产业配套全、应用场景多') to pull the private AI sector. Key structural fact for mapping who deploys vs who innovates.",
    "safety_salience": "SASAC frames direction as '推动我国人工智能朝着有益、安全、公平方向健康有序发展' — 安全 tied to orderly, controllable development; a senior researcher (李锦) characterized the 'high-value scenario' guidance as drawing a '红线' against disorderly R&D spending (credible_reporting).",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "sasac-ai-plus-deepening-meeting-2025",
      "sasac-first-batch-high-value-scenarios-2025",
      "sasac-three-more-prominent-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-soe-model-compute-buildout",
    "jurisdiction": "national",
    "actor_class": "central_soe",
    "instrument": "SASAC AI+ action — SOE model/compute build-out (reported)",
    "claim": "China Mobile's '九天' team built 8 platform products and 450+ AI capabilities; China Mobile jointly with Sinopec (中国石化), China Southern Power Grid (南方电网) and 国家能源集团 built the '九天众擎' base model with a ~2 billion-record structured dataset. State Grid VP 陈国平 publicly committed to '深入落实国家\"人工智能+\"专项行动要求，进一步推进人工智能在新型电力系统融合应用'. As of end-June 2024 SASAC reported central-enterprise intelligent-compute scale roughly doubled year-on-year.",
    "so_what": "Confirms that telecoms (Mobile/Telecom/Unicom) and grid/energy majors are the operational backbone of state compute and vertical models — the deployers the AI+ agenda leans on, distinct from private frontier labs.",
    "safety_salience": "Not framed in safety terms in these sources; role is capacity/供给-oriented.",
    "evidence_basis": "credible_reporting",
    "confidence_level": "medium",
    "source_ids": [
      "gxfin-sasac-ai-plus-deepening-2025",
      "gxfin-sasac-three-dimensions-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-national-ai-industry-fund",
    "jurisdiction": "national",
    "actor_class": "financial_state",
    "instrument": "国家人工智能产业投资基金 (National AI Industry Investment Fund)",
    "claim": "Registered 2025-01-17 as 国家人工智能产业投资基金合伙企业（有限合伙）, 出资额600.6亿元 (~RMB60bn), 13-year term, sited in Xuhui, Shanghai. Sponsored/guided by MIIT and MOF (工信部、财政部牵头); sole LP is 国家集成电路产业投资基金三期 (600亿元), GP/manager is 国智投私募 (国盛资本50%/诚通基金40%/临港科创10%). Strategy '投早、投小、投前沿' across compute/algorithms/data/enabling applications, with embodied intelligence a priority. MIIT official 张建华 (fund prep group deputy head) described it as 'patient capital' serving national strategy.",
    "so_what": "The single largest national financial instrument explicitly tied to AI+; its LP being the semiconductor 'big fund III' signals hardware/compute-autonomy as the strategic core. It anchors the question of who finances the agenda.",
    "safety_salience": "No safety framing; purely industrial/financial. The State Council opinion's (十三) does call for '健全国有资本投资人工智能领域考核评价和风险监管等制度' (state-capital risk monitoring), which is the governance hook for such funds.",
    "evidence_basis": "credible_reporting",
    "confidence_level": "high",
    "source_ids": [
      "shanghai-national-fund-xuhui-2025",
      "cls-big-fund-iii-shanghai-ai-2025",
      "sina-tmt-national-ai-fund-entry-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-boc-compute-loan",
    "jurisdiction": "national",
    "actor_class": "financial_state",
    "instrument": "中国银行 \"券贷联动\" 中银科创算力贷",
    "claim": "Bank of China on 2025-05-17 (Hefei main venue, simulcast to Beijing/Shanghai/Guangdong/Shenzhen/Sichuan/Chongqing/Jiangsu/Zhejiang/Hubei) launched '券贷联动' service and 中银科创算力贷, pairing government 算力券 with bank 算力贷, explicitly 'to implement the national \"AI+\" action'. Firms in national AI-hub cities receiving state 算力券 can stack up to a 20-basis-point rate cut; part of a stated RMB1trn AI-industry-chain support plan (people's bank / 上海AI实验室 witnessed).",
    "so_what": "Illustrates the state-directed credit channel wrapping around the fiscal 算力券 subsidies — banks operationalize AI+ by de-risking compute purchases, coupling monetary and industrial policy.",
    "safety_salience": "None; financing instrument.",
    "evidence_basis": "first_party",
    "confidence_level": "high",
    "source_ids": [
      "boc-compute-loan-launch-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-shanghai-ai-regulation",
    "jurisdiction": "Shanghai",
    "actor_class": "provincial_government",
    "instrument": "《上海市促进人工智能产业发展条例》",
    "claim": "Passed by the Shanghai People's Congress Standing Committee 2022-09-22, effective 2022-10-01 — the first provincial-level AI-industry-promotion statute in China (6 chapters, 72 articles). Establishes a 市人工智能战略咨询专家委员会 and a 市人工智能伦理专家委员会; mandates risk-tiered governance ('区分高风险和中低风险人工智能产品和服务采取不同的治理方式'); provides 算力奖励 and a 负面清单 for AI R&D; allows a 'no-penalty list' for minor violations to enable trial-and-error.",
    "so_what": "The template subnational statute other cities followed; shows Shanghai institutionalized ethics/risk-tiering years before the 2025 central opinion, giving the Atlas a baseline for local safety-institution maturity.",
    "safety_salience": "安全 present as ethics/safety governance. Principle: builds a '敏捷治理安全的人工智能产业体系'; Art.12: '加强人工智能领域伦理安全和社会价值观引导'; ethics committee assesses '涉及生命健康、公共安全等重点领域人工智能应用的潜在风险'.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "shanghai-ai-industry-development-regulation-2022",
      "jswx-shanghai-ai-regulation-report-2022"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-shanghai-voucher-measures",
    "jurisdiction": "Shanghai",
    "actor_class": "provincial_government",
    "instrument": "《上海市进一步扩大人工智能应用的若干措施》 (2025) — compute vouchers",
    "claim": "Issued by 上海市经济信息化委 (2025), explicitly to 'accelerate the AI+ action' and the '模塑申城' project. Distributes 6亿元算力券 (up to 30% rent subsidy, and via the national 智能券 stacking up to 100%/1 year on a '补早补小' basis), 3亿元模型券 (up to 50%/RMB5m), 1亿元语料券 (up to 30%/RMB5m). Also references the 国家人工智能产业投资基金 and Shanghai's 225.01亿元 AI mother-fund.",
    "so_what": "Concrete demonstration of the compute-voucher (算力券) fiscal instrument the Atlas should catalog as the dominant local subsidy mechanism, now layered with national vouchers.",
    "safety_salience": "Measures are pure demand-subsidy; no explicit safety language in the voucher measures themselves.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "shanghai-expanding-ai-applications-measures-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-shenzhen-sez-regulation",
    "jurisdiction": "Shenzhen (Guangdong)",
    "actor_class": "municipal_government",
    "instrument": "《深圳经济特区人工智能产业促进条例》",
    "claim": "Passed by the Shenzhen People's Congress Standing Committee 2022-08-30, effective 2022-11-01 — China's first AI-industry special-zone legislation (7 chapters, 73 articles). Requires the municipal government to establish a 市人工智能伦理委员会; sets eight governance principles; creates a low-risk product first-trial regime ('对于国家、地方尚未制定标准但符合国际先进产品标准或者规范的低风险人工智能产品和服务，允许通过测试、试验、试点等方式开展先行先试'); and mandates a government-backed testing/certification platform performing 功能测试、安全性测试、可靠性评估、伦理安全评估.",
    "so_what": "Shenzhen created a government-run AI testing/evaluation (评测) capacity in law — an early subnational safety-evaluation institution the Atlas should log; also pioneers the risk-tiered 'sandbox'-style approach later echoed nationally.",
    "safety_salience": "安全 heavily present (safety+security+ethics). Art.4 principle '安全可控'. Art.63: '本市人工智能产业治理遵循和谐友好、公平公正、包容共享、尊重隐私、安全可控、共担责任、开放协作、敏捷治理原则'. Ethics committee duties incl '研究制定人工智能领域的伦理安全规范'.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "shenzhen-sez-ai-regulation-announcement-2022",
      "shenzhen-sez-ai-regulation-gazette-2022"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-shenzhen-pioneer-city-vouchers",
    "jurisdiction": "Shenzhen (Guangdong)",
    "actor_class": "municipal_government",
    "instrument": "《深圳市加快打造人工智能先锋城市行动方案》 + 行动计划(2025-2026) — 训力券",
    "claim": "Shenzhen's 'AI pioneer city' action plan (行动计划 2025-2026 released March 2025) sets a '算力供给最普惠、场景应用最开放' environment and 前海/河套 包容审慎监管 pilots. On 2025-03-29 the first batch of 训力券 (training-compute vouchers) totaling nearly RMB200m was disbursed to nearly 40 AI/embodied-robotics firms (max RMB10m each; recipients include 元戎启行、逐际动力、云天励飞). The standing measure caps 训力券 at 'up to RMB500m/year, subsidizing up to 50% of the training-compute service contract, max RMB10m per firm, with the startup subsidy ratio raised to 60%'. City+district AI funds for 2025 total ~RMB4.5bn (语料券/模型券/行业应用/开源奖励).",
    "so_what": "Shenzhen extends the voucher model to a distinct 'training-compute' (训力) instrument and couples it with a regulatory sandbox — a concrete example of local experimentation that may diverge from central pacing.",
    "safety_salience": "Sandbox pilots require firms to fulfill '网络安全、数据安全、意识形态、科技伦理、个人信息保护等主体责任' — 安全 spans cyber/data/ideological/ethics domains.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "shenzhen-ai-pioneer-city-plan-2024",
      "shenzhen-training-voucher-first-batch-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-beijing-ai-plus-plans",
    "jurisdiction": "Beijing",
    "actor_class": "provincial_government",
    "instrument": "《北京市推动\"人工智能+\"行动计划（2024-2025年）》、人工智能算力券实施方案（2023-2025）、《北京人工智能创新高地建设行动计划》(2026)",
    "claim": "Beijing (发改委/经信局/科委中关村) issued the first city-level 'AI+ action plan' in July 2024, with model/scenario targets (3–5 base models, 100 industry models, 1000 cases). Its 人工智能算力券实施方案(2023-2025) caps vouchers at ≤20% of contract, ≤RMB2m/firm/year. On 2026-01-05 Beijing released the 《北京人工智能创新高地建设行动计划》 with nine actions, one of which is an 安全治理护航行动, targeting a break past RMB1trn core-industry scale within ~two years (2025 core industry ~RMB450bn, ~2,500 firms).",
    "so_what": "Beijing was first-mover on both a local 'AI+' brand and compute vouchers; its 2026 plan explicitly carves out a safety-governance action pillar, the clearest subnational example of safety institutionalized as a named workstream.",
    "safety_salience": "The 2026 plan's ninth action is '安全治理护航行动' (safety/security governance). The 2024 plan references '包容监管' and 监管沙盒 mechanisms — 安全 spans governance/security/oversight.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "beijing-ai-plus-action-plan-2024-2025",
      "beijing-ai-compute-voucher-plan-2023"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-zhejiang-hangzhou-measures",
    "jurisdiction": "Zhejiang / Hangzhou",
    "actor_class": "provincial_government",
    "instrument": "浙江《关于支持人工智能创新发展的若干措施》(2025) + 杭州市建设人工智能产业发展高地实施方案(2025年版) + 政府引导基金",
    "claim": "Zhejiang's 27-measure 《关于支持人工智能创新发展的若干措施》 took effect 2025-05-31 (targets: 2027 core-industry revenue >RMB1trn). Instruments: 算力券 (up to 30% of contract), 语料券 (up to 30%, max RMB2m), 模型券; a >RMB10bn AI fund cluster ('4+1' special funds) plus a RMB3bn provincial AI fund '投早投小投长期投硬科技'. Hangzhou's 2025 plan adds RMB250m/year city 算力券 (国产算力 up to 45%, 非国产 25%), base-model subsidies up to RMB50m, and a >RMB100bn '3+N' fund group. Zhejiang designated 杭州市人工智能产业创新中心有限公司 as the national AI-voucher (算力券) management agency.",
    "so_what": "Zhejiang/Hangzhou is the DeepSeek/宇树 heartland; its voucher design explicitly privileges domestic ('国产') compute at a higher subsidy rate — an important signal for the Atlas that fiscal instruments are being used to steer toward compute self-reliance.",
    "safety_salience": "Hangzhou 全产业链行动计划: '加强人工智能伦理安全规范和社会治理实践研究，面向重点领域开展伦理审查和安全评估'. Draft 2025 plan: '把握安全底线…探索人工智能安全标准，规范数据安全、算法安全、网络安全和内容安全'. 安全 spans data/algorithm/network/content.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "zhejiang-ai-innovation-measures-2025",
      "hangzhou-ai-full-chain-plan-interpretation-2025",
      "zhejiang-ndrc-ai-voucher-redemption-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-jiangsu-ai-plus-plan",
    "jurisdiction": "Jiangsu",
    "actor_class": "provincial_government",
    "instrument": "《江苏省\"人工智能+\"行动方案》 苏政发〔2025〕108号 + 《江苏省\"人工智能+制造\"诊断工作方案（2026-2027）》",
    "claim": "Jiangsu's provincial AI+ action plan (苏政发〔2025〕108号) issued 2025-12-29 (4 parts, 26 items), which — uniquely — adds a seventh domain, '人工智能+新兴产业', beyond the national six; targets 2030 AI industry >RMB1trn. A companion 《江苏省\"人工智能+制造\"诊断工作方案》 mandates AI-application-maturity diagnosis of all above-scale industrial enterprises by end-2027, using a provincial '制造业企业人工智能应用水平自评测系统'. Jiangsu also runs an AI standards system (2025版) with a 测试评估 (testing/evaluation) standards track and built 3 embodied-intelligence innovation centers + 4 data-collection/training centers.",
    "so_what": "Jiangsu shows the manufacturing-heavy province operationalizing AI+ via mandatory enterprise diagnostics and standards — a compliance-driven variant. The mandatory self-assessment system is a de-facto evaluation instrument for the Atlas.",
    "safety_salience": "Plan: '推动安全能力建设，构建人工智能服务和应用技术监测、风险预警、应急响应体系，完善相关制度、标准和监管规则'. Anti-involution: '引导中小企业错位发展，防范产业\"内卷式\"竞争'. 安全 = safety/security capacity + monitoring.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "nanjing-data-bureau-jiangsu-ai-plus-2026",
      "zgjssw-jiangsu-ai-plus-plan-2026"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-sichuan-scenario-plan-safety-rd",
    "jurisdiction": "Sichuan / Chengdu",
    "actor_class": "provincial_government",
    "instrument": "《四川省加快推进人工智能场景应用工作方案（2025—2027年）》、四川省人工智能重大科技专项、成都算力券/模型券",
    "claim": "Sichuan's science-and-technology department issued a 2025–2027 AI scenario-application work plan (focus: 先进制造、应急救援(公共安全)、社会民生(养老康复)); the province's AI+ package targets 2030 industry scale >RMB400bn and 2027 智能终端/智能体 adoption >70%. The 四川省人工智能产业发展基金 launched 2025-07. Crucially, Sichuan's 人工智能重大科技专项 (first batch, launched 2024, RMB315m planned) includes item #7 '人工智能安全测试与内容对抗检测技术研究及应用' — '研制人工智能模型安全性评估标准，开发人工智能系统安全测试平台和人工智能生成内容检测平台'. Chengdu 高新区 runs RMB100m/year 算力券 + RMB100m/year 模型券.",
    "so_what": "Sichuan is a rare subnational case funding actual AI safety-testing R&D (model safety-assessment standards, a system-safety test platform, and AIGC-detection) — the strongest local safety-evaluation effort in this source set outside the tier-1 cities.",
    "safety_salience": "High and explicit. '安全护航包': '探索\"沙盒监管\"机制…针对模型算法的\"黑箱\"\"幻觉\"等问题加强技术攻关…研究制定省人工智能产业发展促进条例'. Plus the funded '人工智能模型安全性评估标准' and '人工智能生成内容检测平台'. 安全 = model safety + content security.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "sichuan-ai-scenario-application-plan-2025",
      "chinanews-sichuan-ai-major-program-2024"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-gba-hetao-joint-safety-lab",
    "jurisdiction": "Greater Bay Area / Hetao",
    "actor_class": "central_ministry",
    "instrument": "《河套深港科技创新合作区深圳园区发展规划》 (国务院 2023-08) + 粤港澳大湾区生成式人工智能安全发展联合实验室",
    "claim": "The State Council's 2023-08 河套 development plan directs '加快布局人工智能与数字经济发展前沿领域…搭建人工智能开放创新平台，加快制定人工智能技术标准框架体系'. On 2025-09-15 the 粤港澳大湾区生成式人工智能安全发展联合实验室 was inaugurated at 河套深圳园区, guided by 国家互联网应急中心 and co-led by 广东省委网信办, with participation of Hong Kong's 数字政策办公室 and Macau's 个人资料保护局; its remit includes '支撑模型备案安全评估' (supporting model-filing safety assessment) and '制定行业安全发展标准'. Framed as '践行国务院\"人工智能+\"行动意见的创新举措'.",
    "so_what": "The GBA is the flagship cross-jurisdiction integration case where 'one country, two systems' meets AI safety governance — the joint safety lab is a concrete cross-border evaluation institution directly tied to AI+.",
    "safety_salience": "Explicitly a '安全发展' (safe development) lab; '安全' spans model-filing safety assessment, security supervision, and 'AI朝着有益、安全、公平方向健康有序发展'. Cross-border data flows also governed via 粤港澳大湾区个人信息跨境流动标准合同.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "hetao-gba-genai-safety-lab-2025",
      "ndrc-hetao-plan-press-conference-2023"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-guangdong-opc-plan",
    "jurisdiction": "Guangdong",
    "actor_class": "provincial_government",
    "instrument": "《广东省支持人工智能OPC创新发展行动方案（2026—2028年）》",
    "claim": "Guangdong's 省发改委 plan (2026-2028) builds a GBA compute 'one network' national hub node and 算力券 system, promotes cross-border scenarios via 横琴/前海/南沙/河套 (targeting Portuguese-speaking countries and Southeast Asia), and mobilizes GBA venture funds (国家创业投资引导基金、AIC、CVC) plus '算力贷' credit for AI 'one-person companies' (OPC). Separately, Guangdong reported >RMB23bn of government-fund investment into AI/robotics and, in April 2025, released a first batch of 'AI+' scenarios across manufacturing/education/medical/security.",
    "so_what": "Shows Guangdong wiring AI+ into export/outbound ('算力出海、数据跨境') and cross-border finance — the internationalization face of the domestic agenda, and evidence of local governments competing to be the GBA compute hub.",
    "safety_salience": "Cross-border data provisions require risk assessment ('跨境数据交易风险评估'); safety framing is secondary to industrial/export goals.",
    "evidence_basis": "official",
    "confidence_level": "medium",
    "source_ids": [
      "guangdong-ai-opc-action-plan-2026"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-fujian-cross-strait",
    "jurisdiction": "Fujian (operating assumption; PRC plans toward Taiwan)",
    "actor_class": "central_ministry",
    "instrument": "《中共中央 国务院关于支持福建探索海峡两岸融合发展新路 建设两岸融合发展示范区的意见》(2023-09) + Fujian/Xiamen AI plans",
    "claim": "OPERATING-ASSUMPTION ITEM (flagged for political reasons): Taiwan is NOT treated as a jurisdiction; this records MAINLAND-government plans for Taiwan, not Taiwanese policy. The CPC Central Committee/State Council 2023-09 opinion on the 两岸融合发展示范区 directs building a 数字\"第一家园\"对台一体化服务平台 and '加强闽台数字经济融合发展'. Fujian's 《促进人工智能产业发展十条措施》 (2023-09) and Xiamen's 《人工智能产业发展规划（2025—2027年）》 (target: 2027 core industry >RMB60bn) commit Fujian to '深入实施\"人工智能+\"行动'; provincial AI parks operate in Fuzhou/Xiamen/Quanzhou. Fujian notably was NOT on the national AI 先导区/试验区 lists.",
    "so_what": "Included under an explicit scope rule. Represents Beijing's intent to fold Taiwan-facing integration (incl. digital/AI services to Taiwanese residents/firms) into the AI+ economic frame; should be read as PRC policy toward Taiwan, not cross-strait consensus.",
    "safety_salience": "No AI-safety language; the '安全' in these documents refers to cross-strait data-flow control ('确保数据流动安全可控') and integration objectives, not model safety.",
    "evidence_basis": "official",
    "confidence_level": "medium",
    "source_ids": [
      "cpc-fujian-cross-strait-integration-opinion-2023",
      "fujian-ai-plus-industry-report-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-compute-center-duplication",
    "jurisdiction": "national / local dynamics",
    "actor_class": "provincial_government",
    "instrument": "智算中心 duplication and utilization concerns (state media + industry data)",
    "claim": "Redundant intelligent-compute-center (智算中心) build-out is a documented central-local tension. The Party paper 科技日报 (2025-07-17) ran a front-oriented investigation reporting a western-city 千卡 center with '上架率不足50%，已上架服务器实际利用率不到30%，而年运营成本超过3000万元'; it cited 浪潮人工智能研究院's estimate that '全国智算中心平均算力使用率约30%', with ~150 built and ~400 in-build/planned as of Nov 2024. 数智前线 counted at least 458 智算-center-related projects across ~29 provinces/~100 prefecture cities in 2024; 证券时报 described '超250个智算中心\"遍地开花\"'. NDRC reportedly halted energy quotas for new data centers (钛媒体, secondary). The 2024 《数据中心绿色低碳发展专项行动计划》 sets PUE/efficiency limits and cancels preferential power prices for high-energy use.",
    "so_what": "Direct evidence of provinces over-building compute for subsidy/prestige reasons, prompting central corrective pressure (energy-quota controls, anti-'内卷' clauses in the AI+制造 opinion): the core local-central friction in the rollout. The '30%' figure is an industry-research estimate, not an official statistic.",
    "safety_salience": "Not an AI-safety issue per se; a resource-allocation/governance-coordination problem. Framing that provinces 'diverge from central pacing' is analyst_inference.",
    "evidence_basis": "credible_reporting",
    "confidence_level": "medium",
    "source_ids": [
      "stdaily-sleeping-compute-investigation-2025",
      "stcn-compute-center-overbuild-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-ai-safety-governance-framework-2",
    "jurisdiction": "national",
    "actor_class": "central_ministry",
    "actor_entity_id": "cn-tc260",
    "instrument": "《人工智能安全治理框架》2.0版",
    "claim": "Released 2025-09-15 at the 国家网络安全宣传周 main forum, drafted by the 全国网络安全标准化技术委员会 (TC260) under CAC (国家网信办) guidance, with 国家计算机网络应急技术处理协调中心 and others. Upgrades the Sept-2024 1.0 framework: five governance principles including '包容审慎、确保安全' and '可信防失控' (ensure AI stays under human control); adds lifecycle management, open-source/supply-chain security, and risk-tiering for reasoning models, open lightweight models, agents, embodied intelligence and BCI.",
    "so_what": "This is the central non-binding-but-authoritative safety-governance backbone the AI+ agenda operates within; TC260's downstream evaluation standards (below) implement it. It is the reference layer the rest of this briefing sits inside.",
    "safety_salience": "The core safety instrument. 安全 here is comprehensive (safety+security+controllability); explicit goal '确保人工智能始终处于人类控制之下，造福于人类'.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "cac-ai-safety-governance-framework-2-release-2025",
      "tc260-ai-safety-governance-framework-2-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-caict-benchmark-apparatus",
    "jurisdiction": "national",
    "actor_class": "central_ministry",
    "actor_entity_id": "cn-caict",
    "instrument": "AI Safety Benchmark / \"方升\" 大模型基准测试体系; TC260 evaluation standards",
    "claim": "The China Academy of Information and Communications Technology (中国信通院/CAICT), a MIIT-affiliated institute, runs the AI Safety Benchmark via the AIIA安全治理委员会, launched Q1 2024 and run quarterly; its Q1 2024 round covered '内容安全、数据安全和科技伦理' three dimensions subdivided into '20余个细粒度的测评类别' (not 27), with 360智脑 ranked first. CAICT also runs the '方升' benchmark system evaluating 行业/应用/安全 capability, and launched a 大模型幻觉 (hallucination) evaluation in March 2025. Separately, the first 'safety-model basic cybersecurity capability assessment certificates' were awarded 2024-09 at the Chengdu 2024 CCS conference to seven firms (360 among them), tied to the AIIA 《安全大模型能力要求与评估方法 第1部分：总体框架》. New TC260 technical-document drafts (mid-2026) include 《大模型稳健性测评方法》 and 《人工智能语料库安全建设指南》.",
    "so_what": "Identifies the operational national evaluation (测评) apparatus — CAICT/AIIA benchmarks plus TC260 standards — that the AI+ opinion's 'model capability evaluation system' (建立健全模型能力评估体系) relies on. These are the key institutional nodes in the safety-evaluation apparatus.",
    "safety_salience": "Directly safety/evaluation-focused; 安全 spans content/data/cyber security and model robustness. Note: the benchmark is industry-consortium-run (AIIA) with a state-affiliated institute, so evidence_basis is credible_reporting rather than a binding official mandate.",
    "evidence_basis": "credible_reporting",
    "confidence_level": "medium",
    "source_ids": [
      "xinhua-caict-360-model-standard-2024",
      "sina-360-caict-security-certification-2024",
      "eet-caict-hallucination-evaluation-2025"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-pilot-zone-designations",
    "jurisdiction": "national",
    "actor_class": "central_ministry",
    "actor_entity_id": "cn-miit",
    "instrument": "国家人工智能创新应用先导区 (MIIT) + 国家新一代人工智能创新发展试验区 (MOST)",
    "claim": "MIIT has designated 11 国家人工智能创新应用先导区: 上海(浦东)、深圳、济南-青岛、北京、天津(滨海新区)、杭州、广州、成都、南京、武汉、长沙 (first batch 2019; second batch — Beijing/Tianjin/Hangzhou/Guangzhou/Chengdu — 2021). MOST separately built ~17–18 国家新一代人工智能创新发展试验区 (Beijing first; incl. Shanghai/Tianjin/Shenzhen/Hangzhou/Hefei/Deqing/Chongqing/Chengdu/Xi'an/Jinan/Guangzhou/Wuhan/Suzhou/Changsha/Zhengzhou/Shenyang). MIIT's 揭榜挂帅 process commissions third-party 测评 to select winners; provinces/单列市 have capped recommendation quotas, and 先导区 get separate quotas — an explicit competitive-designation mechanism.",
    "so_what": "The designation system is the mechanism through which provinces compete for AI status and resources: the structural driver of the local-central race and its duplication. Note designations froze in 2024 (no new tickets that year).",
    "safety_salience": "Not primarily safety; designation is industrial. Competition for designations is documented (quota rules); characterizing it as 'racing that strains safety oversight' would be analyst_inference.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "yicai-ai-pilot-zones-2021",
      "miit-future-industries-unveiling-2023"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-foreign-investment-negative-finding",
    "jurisdiction": "national",
    "actor_class": "foreign_firm",
    "instrument": "AI+ opinion (absence) vs 增值电信业务扩大对外开放试点 (工信部通信函〔2024〕107号) and foreign-R&D-center measures (国办函〔2023〕7号, 商资发〔2026〕97号)",
    "claim": "CRITICAL NEGATIVE FINDING (verified against full text): the State Council AI+ opinion 国发〔2025〕11号 contains NO mention of 外资/外商/外商投资; its openness is framed as outbound '全球合作' and technology sharing, not inbound foreign investment. NDRC's official Q&A mentions inbound investment only once, as a general benefit: '吸引全球对华投资'. Foreign-investment openness relevant to AI comes from SEPARATE tracks: (a) MIIT 《关于开展增值电信业务扩大对外开放试点工作的通告》 工信部通信函〔2024〕107号 (成文2024-04-08) removes foreign equity caps on IDC/CDN/ISP/在线数据处理 in Beijing服务业扩大开放示范区/上海临港/海南自贸港/深圳先行示范区, managed on a '内外资一致' basis — first batch of 13 foreign-invested firms approved Feb 2025; (b) 国办函〔2023〕7号 《关于进一步鼓励外商投资设立研发中心的若干措施》 and MOFCOM/NDRC/MOF 《利用外资固稳促优行动方案》 商资发〔2026〕97号 (2026-06) which '大力吸引外资企业在华设立研发中心' and apply '一视同仁、平等适用' — both sector-general, not AI-specific.",
    "so_what": "A verified negative finding: the AI+ agenda does NOT itself court foreign AI investment. Foreign firms enter AI-adjacent markets (compute/IDC/cloud R&D) only through parallel telecom-opening and FDI-R&D tracks, under national-treatment ('内外资一致') principles. Reading the AI+ opinion as courting foreign AI investment would overstate its openness.",
    "safety_salience": "The telecom-opening pilot excludes 互联网新闻信息、网络出版、网络视听、互联网文化经营 (content-control carve-outs) and screens for national security — 安全 here = national/content security limits on foreign entry.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "state-council-ai-plus-opinion-2025",
      "miit-vats-opening-pilot-2024",
      "mofcom-foreign-investment-action-plan-2026"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  },
  {
    "id": "pe-private-firms-division-of-labor",
    "jurisdiction": "national",
    "actor_class": "private_national",
    "instrument": "《国务院关于深入实施\"人工智能+\"行动的意见》 + AI+制造 opinion",
    "claim": "The AI+ opinion casts private enterprises as the primary innovators/'智能原生企业' and market actors: '鼓励有条件的企业将人工智能融入战略规划…加快培育一批底层架构和运行逻辑基于人工智能的智能原生企业'; supports equity/option incentives to attract talent ('支持企业规范用好股权、期权等中长期激励方式引才留才用才'). The AI+制造 opinion directs support for '生态主导型企业' (ecosystem-leading firms) and '专精特新\"小巨人\"' SMEs, and SASAC explicitly pairs central SOEs with '龙头民企' (leading private firms). Local plans (Beijing/Hangzhou/Shenzhen) name private frontier actors (豆包/智谱/月之暗面/百度; DeepSeek/宇树 in Zhejiang) as the model-layer champions.",
    "so_what": "Confirms a division of labor: private labs supply frontier models/innovation while SOEs supply scale/compute/scenarios and the state supplies capital and safety rules. The '智能原生企业' concept is the policy's core private-sector construct.",
    "safety_salience": "Private firms carry compliance duties under model-filing/评估 regimes (备案, safety assessment); AI+制造 assigns them '数据治理、安全保障' service roles. 安全 = compliance/security obligations.",
    "evidence_basis": "official",
    "confidence_level": "high",
    "source_ids": [
      "state-council-ai-plus-opinion-2025",
      "miit-ai-plus-manufacturing-opinion-2026"
    ],
    "last_verified": "2026-07-07",
    "public_safe_to_show": true
  }
];


// Open questions carried over verbatim from the research payload.
export const peOpenQuestions: string[] = [
  "Was a consolidated, publicly released '国资央企\"AI+\"专项行动实施要点' text ever published in full? SASAC announced it (2025-02-19) but the primary full document was not located on sasac.gov.cn during this research.",
  "The AI+制造 opinion (工信部联科〔2025〕279号) full text and its two annexes (《人工智能赋能制造业重点行业转型指引》《制造业企业人工智能应用指南》) were read via nda.gov.cn / edu.cn reposts and search snippets; the definitive miit.gov.cn primary posting and annex PDFs should be fetched and archived to confirm exact wording of all 21 measures.",
  "Exact per-jurisdiction totals and disbursement outcomes of 算力券/训力券/模型券 programs (how much of announced budgets was actually paid out) are not consistently published; only announced ceilings are reliably sourced.",
  "The '30% average utilization' figure for 智算中心 is an industry-research estimate (浪潮人工智能研究院) reported by state media, not an official government statistic; an authoritative NDRC/国家数据局 utilization figure was not located.",
  "Whether NDRC formally 'halted energy quotas' for new data centers rests on secondary reporting (钛媒体) rather than a located primary NDRC notice; the primary basis is the 2024 《数据中心绿色低碳发展专项行动计划》 (PUE/efficiency limits). Needs primary confirmation.",
  "Hong Kong/Macau's own AI-safety instruments (beyond participation in the GBA joint lab and cross-border data standard contract) were not separately catalogued and merit a dedicated pass for the Atlas.",
  "The precise legal status/enforceability of the 《人工智能安全治理框架》2.0 (guidance vs standard vs regulation) and its relationship to any forthcoming national AI law (人工智能健康发展相关立法) remains to be pinned to a primary legislative-plan source."
];

// Method and scope notes carried over verbatim from the research payload.
export const peJurisdictionNotes: string[] = [
  "SCOPE PRIORITY HONORED: Chinese official/government sources were prioritized; every instrument claim rests on a primary government portal or the verbatim official text where obtainable. News/aggregator sources are used only for corroboration and are labeled credible_reporting.",
  "URL FETCH STATUS: The State Council AI+ opinion full text was fetched successfully at gov.cn (content_7037861.htm) and cross-checked against the mee.gov.cn repost. The NDRC 一图读懂 page fetched OK (image-based; the linked full text is the gov.cn version). Several other government portals (miit.gov.cn, sz.gov.cn, sh.gov.cn, zj.gov.cn, cac.gov.cn, tc260.org.cn) returned full or partial text via search snippets and, where a subagent fetched them, in full — no primary URL is cited here as fetched-and-verified unless it was actually retrieved. Where only search-snippet text (not a full fetch) underlies a quote, treat the quote as high-confidence-but-snippet-sourced; the AI+制造 opinion and several local measures fall in this category.",
  "安全 HANDLING: Per instruction, 安全 is quoted in Chinese throughout and NOT auto-translated as 'safety'. In these documents it variously denotes model safety (模型安全/防范黑箱幻觉), cybersecurity (网络安全), data security (数据安全), production safety (安全生产), content/ideological security (内容安全/意识形态), and national security (国家安全). Each claim's safety_salience field flags the operative sense.",
  "TAIWAN / FUJIAN OPERATING ASSUMPTION: Taiwan is NOT treated as a jurisdiction. The Fujian 两岸融合发展示范区 item is included per the task's explicit political-scope instruction and represents MAINLAND (PRC) government plans FOR Taiwan integration (digital/AI services to Taiwanese residents and firms), NOT Taiwanese policy and NOT a cross-strait consensus. Readers should interpret it strictly as Beijing's stated intent.",
  "CENTRAL-LOCAL STRUCTURE: NDRC is the overall AI+ coordinator; MIIT leads the manufacturing vertical; SASAC drives central SOEs; CAC/TC260 own the safety-governance framework; MIIT+MOST own pilot-zone designations; MOF+MIIT anchor the national AI fund. Provinces implement via localized '人工智能+' action plans plus fiscal vouchers (算力券/模型券/语料券/训力券) and government guidance funds (政府引导基金).",
  "MILITARY-AFFILIATED ACTORS: No open, official public source in this research documents a military/PLA role in the civilian AI+ instruments reviewed; per instruction, none is asserted or inferred.",
  "EVIDENCE DISCIPLINE vs PRIOR (GEMINI) REPORT: This dataset (a) quotes 安全 in original Chinese without mistranslation, (b) labels each claim's evidence_basis, (c) records the critical negative finding that 国发〔2025〕11号 omits 外资/外商 entirely, and (d) distinguishes official mandates from consortium/industry activity (e.g., CAICT/AIIA benchmarks marked credible_reporting, not official)."
];
