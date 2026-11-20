import {creativeEntries} from './creative-translations.js';
// Canonical Chinese | English | Japanese | Korean. All translations are bundled; no translation service is called.
const rows=`
开源灵感，四种打开方式|Open-source ideas, four ways to build|オープンソースを4つの形に|오픈소스의 네 가지 활용법
Common Ground · 社区贡献看板|Common Ground · Contribution board|Common Ground · 貢献ボード|Common Ground · 기여 보드
Open Atlas · AI 与云端资源导航|Open Atlas · AI & cloud directory|Open Atlas · AI とクラウドのリソース集|Open Atlas · AI 및 클라우드 모음
，探索开源与云端社区的可复用交互网站模板。|. Reusable interactive templates for open-source and cloud communities.|。オープンソースとクラウド向けの再利用可能なテンプレート。|. 오픈소스와 클라우드 커뮤니티를 위한 재사용 가능한 인터랙티브 템플릿.
让模板，持续生长。|Built to keep evolving.|テンプレートを、育て続ける。|계속 발전하는 템플릿.
四套独立用途的页面，共享一个静态站点。无构建依赖，无数据库，内容与本机项目无关。|Four purpose-built pages in one static site. No build dependencies, no database and no connection to local projects.|4つの用途別ページをひとつの静的サイトに。外部ビルド依存、データベース、ローカルとの接続はありません。|하나의 정적 사이트에 네 가지 목적별 페이지를 담았습니다. 외부 빌드 의존성, 데이터베이스, 로컬 프로젝트 연결이 없습니다.
四套模板的边界|What each template does|各テンプレートの範囲|각 템플릿의 범위
原创产品发布模板；工作流为本地交互示例，不调用 AI。|An original launch template. The workflow is a local example and does not call AI.|オリジナルの紹介テンプレート。ワークフローはローカルの例で AI は呼び出しません。|오리지널 출시 템플릿입니다. 워크플로는 로컬 예시이며 AI를 호출하지 않습니다.
读取公开 GitHub 仓库指标。发布时快照和手动刷新均显示时间；没有历史增长数据，不代表 GitHub Trending。|Shows public repository metrics with snapshot and refresh timestamps. No historical growth data; this is not GitHub Trending.|公開指標と取得日時を表示。増加履歴はなく、GitHub Trending ではありません。|공개 저장소 지표와 갱신 시간을 표시합니다. 과거 증가율이나 GitHub Trending 순위가 아닙니다.
个人任务保存在当前浏览器，可导出导入；不连接 GitHub Issue，不是多人协作服务。|Personal tasks are stored in this browser with import and export. No GitHub Issues sync or shared workspace.|個人タスクをブラウザー内に保存し、読み込みと出力に対応。GitHub Issues 同期や共同編集はありません。|개인 작업을 브라우저에 저장하고 가져오기와 내보내기를 지원합니다. GitHub 이슈 동기화나 공동 작업 공간은 없습니다.
官方入口目录，支持浏览器内收藏与自定义链接；不是公开投稿平台。|A directory of official links with browser-local favorites and custom entries. Not a public submission platform.|公式リンク集。お気に入りと独自リンクはブラウザー内で管理。公開投稿サービスではありません。|공식 링크 모음이며 즐겨찾기와 개인 링크는 브라우저에 저장됩니다. 공개 투고 플랫폼은 아닙니다.
GitHub 维护流程|The GitHub maintenance workflow|GitHub での運用手順|GitHub 유지보수 절차
将源码放进你指定的 GitHub 仓库，用分支、Pull Request 与检查管理修改。合并后，通过 Codex 的 Sites 工具同步同一份代码、保存版本并部署。GitHub 推送和 Sites 发布是两个步骤。|Keep source in your chosen GitHub repository and review changes with branches, pull requests and checks. After merging, sync the exact code through Codex Sites, save a version and deploy. A GitHub push and a Sites deployment are separate steps.|指定の GitHub リポジトリでブランチ、PR、チェックを管理します。マージ後に Codex Sites で同じコードを同期し、版を保存して公開します。GitHub への push と Sites の公開は別の手順です。|지정한 GitHub 저장소에서 브랜치, PR, 검사를 관리하세요. 병합 후 Codex Sites로 같은 코드를 동기화하고 버전을 저장해 배포합니다. GitHub 푸시와 Sites 배포는 별도 단계입니다.
当前模板附带 GitHub Actions 检查配置；尚未绑定 GitHub 仓库，也没有配置 GitHub 自动部署。Sites 的短期发布凭证不能作为长期 GitHub Secret 使用。|GitHub Actions checks are included, but no GitHub repository or automatic deployment is connected yet. Short-lived Sites credentials must not be used as permanent GitHub secrets.|Actions のチェック設定は付属していますが、リポジトリや自動公開は未接続です。Sites の短期認証情報を長期 Secret として使わないでください。|Actions 검사 설정은 포함되어 있지만 GitHub 저장소와 자동 배포는 아직 연결되지 않았습니다. 단기 Sites 자격 증명을 장기 GitHub 비밀로 사용하지 마세요.
从源文件到发布|From source to deployment|ソースから公開まで|소스에서 배포까지
修改页面与交互；| contains pages and interactions; | はページと操作を管理し、|에서 페이지와 동작을 수정하고,
维护精选资源和仓库快照。执行| contains curated resources and repository snapshots. Run | は厳選リソースとスナップショットを管理します。実行：|에서 리소스와 스냅샷을 관리합니다. 실행:
后，使用 Sites 保存并部署。|, then save and deploy with Sites.| を実行してから、Sites で保存・公開します。| 실행 후 Sites로 저장 및 배포하세요.
维护热度快照时，执行|To update the repository snapshot, run |スナップショット更新には次を実行：|저장소 스냅샷을 갱신하려면 실행:
。这只访问固定名单中的 GitHub 公共 API，不发送你的账号凭证。|. This calls only the fixed list of public GitHub APIs and sends no account credentials.|。固定の公開 GitHub API のみにアクセスし、アカウント認証情報は送信しません。|. 고정 목록의 GitHub 공개 API만 호출하며 계정 자격 증명을 보내지 않습니다.
社区灵感与来源|Community inspiration and sources|コミュニティの参考と出典|커뮤니티 참고 자료와 출처
模板为原创实现，没有复制下列项目的源码或品牌。社区案例帮助确定用途与信息结构：|These are original implementations. No source code or branding was copied from the following projects; they informed the use cases and information structure.|オリジナルの実装です。以下のコードやブランドは複製せず、用途と情報構成の参考にしました。|오리지널 구현입니다. 아래 프로젝트의 코드나 브랜드를 복사하지 않았으며 용도와 정보 구조를 참고했습니다.
shadcn-admin：管理后台与数据界面|shadcn-admin: admin and data interfaces|shadcn-admin：管理・データ画面|shadcn-admin: 관리 및 데이터 인터페이스
AstroWind：产品与内容宣传页面|AstroWind: product and content pages|AstroWind：製品・コンテンツ紹介|AstroWind: 제품 및 콘텐츠 페이지
ShadcnStore：宣传页与看板组合|ShadcnStore: launch pages and dashboards|ShadcnStore：紹介ページとダッシュボード|ShadcnStore: 출시 페이지와 대시보드
OpenAI Sites：托管和发布说明|OpenAI Sites: hosting and publishing|OpenAI Sites：ホスティングと公開|OpenAI Sites: 호스팅 및 게시
数据与隐私|Data and privacy|データとプライバシー|데이터 및 개인정보
本站不提供账号注册、不收集表单、不保存访问者的任务或收藏到服务端。手动刷新看板会从浏览器请求 api.github.com，受 GitHub 公共 API 的限流和网络条件影响。清除浏览器数据会移除本地任务和收藏，重要内容请先导出。|This site has no registration and stores no visitor tasks or favorites on a server. Refreshing analytics calls api.github.com from your browser and may hit network or API limits. Clearing browser data removes local tasks and favorites; export important tasks first.|登録機能はなく、タスクやお気に入りをサーバーに保存しません。更新時はブラウザーから api.github.com を呼び出し、通信や API 制限の影響を受けます。ブラウザーデータを消去する前に、必要なタスクを出力してください。|회원 가입이 없으며 작업이나 즐겨찾기를 서버에 저장하지 않습니다. 갱신 시 브라우저가 api.github.com에 요청하며 네트워크 및 API 제한이 적용됩니다. 브라우저 데이터를 지우면 로컬 데이터가 삭제되므로 중요한 작업을 먼저 내보내세요.
四套模板|Four templates|4つのテンプレート|네 가지 템플릿
跳到主要内容|Skip to main content|メインコンテンツへ|본문으로 이동
模板导航|Template navigation|テンプレートナビゲーション|템플릿 탐색
模板馆|Template gallery|テンプレート一覧|템플릿 갤러리
模板总览|All templates|すべてのテンプレート|모든 템플릿
发布页|Launch|リリース|출시
数据|Analytics|データ|데이터
任务|Tasks|タスク|작업
导航|Resources|リソース|리소스
维护指南|Maintenance guide|運用ガイド|유지보수 가이드
使用与 GitHub 维护指南|Usage & GitHub maintenance|使い方と GitHub 運用|사용법 및 GitHub 유지보수
GitHub 维护指南|GitHub maintenance|GitHub 運用ガイド|GitHub 유지보수
开源灵感，|Open-source ideas.|オープンソースの発想を。|오픈소스 아이디어,
四种打开方式。|Four ways to build.|4つの形に。|네 가지 활용법.
从一次产品发布，到每天的社区协作。四套不同用途的交互模板，为 AI、云端与开源项目准备，也为你的下一个想法留白。|From your next launch to everyday community work. Four interactive templates for AI, cloud and open-source ideas, ready to make your own.|次のリリースから日々のコミュニティ活動まで。AI、クラウド、オープンソース向けの4つのテンプレートを、あなたのアイデアに。|제품 출시부터 일상적인 커뮤니티 활동까지. AI, 클라우드, 오픈소스를 위한 네 가지 인터랙티브 템플릿을 만나보세요.
探索全部模板|Explore the templates|テンプレートを見る|템플릿 살펴보기
Fieldnotes · 开源发布页|Fieldnotes · Launch page|Fieldnotes · リリースページ|Fieldnotes · 출시 페이지
产品叙事、交互演示、发布计划与 FAQ。适合把一个开源想法介绍清楚。|A clear story, interactive demo, roadmap and FAQ for your next open-source launch.|紹介、デモ、ロードマップ、FAQ で、プロジェクトの価値を伝えます。|제품 소개, 인터랙티브 데모, 로드맵과 FAQ로 오픈소스 아이디어를 소개하세요.
产品宣传|Product launch|製品紹介|제품 소개
演示切换|Interactive demo|インタラクティブデモ|인터랙티브 데모
Pulse · 开源热度看板|Pulse · Community analytics|Pulse · コミュニティ分析|Pulse · 커뮤니티 분석
精选仓库的 Stars、Forks 与社区指标。支持筛选、排序、实时刷新和导出。|Explore selected repositories through stars, forks and community metrics. Filter, refresh and export.|厳選リポジトリのスター、フォークなどを表示。絞り込み、更新、出力に対応。|선별한 저장소의 스타, 포크, 커뮤니티 지표를 필터링하고 갱신하거나 내보내세요.
GitHub 公共数据|Public GitHub data|GitHub 公開データ|GitHub 공개 데이터
CSV 导出|CSV export|CSV 出力|CSV 내보내기
Common Ground · 贡献看板|Common Ground · Contribution board|Common Ground · 貢献ボード|Common Ground · 기여 보드
把社区贡献拆成可执行任务。新增、编辑、推进进度，数据保存在当前浏览器。|Turn community contributions into actionable tasks. Plan, edit and track progress in your browser.|コミュニティへの貢献をタスクに分解。作成、編集、進捗管理をブラウザーで。|커뮤니티 기여를 실행 가능한 작업으로 정리하고 브라우저에서 관리하세요.
本地保存|Saved in your browser|ブラウザーに保存|브라우저에 저장
JSON 备份|JSON backup|JSON バックアップ|JSON 백업
Open Atlas · 工具导航|Open Atlas · Resource directory|Open Atlas · リソース集|Open Atlas · 리소스 모음
精选 AI、云开发与前端资源。分类搜索、收藏与自定义链接，让信息更容易找到。|A curated directory for AI, cloud and frontend builders. Search, save favorites and add your own links.|AI、クラウド、フロントエンドの厳選リソース。検索、保存、独自リンクの追加に対応。|AI, 클라우드, 프런트엔드 리소스를 검색하고 즐겨찾기와 개인 링크를 추가하세요.
社区资源|Community resources|コミュニティリソース|커뮤니티 리소스
个人收藏|Personal favorites|お気に入り|개인 즐겨찾기
选择一个起点|Pick your starting point|出発点を選ぶ|시작점 선택
四套模板均可直接体验，内容围绕公共社区，不包含本机工程信息。|Explore all four templates, built around public communities and independent of local projects.|公開コミュニティを題材にした4つのテンプレート。ローカルプロジェクトの情報は含みません。|공개 커뮤니티를 주제로 한 네 가지 템플릿이며 로컬 프로젝트와 무관합니다.
换成你的内容|Make it your own|自分のコンテンツに|나만의 콘텐츠로
源码使用原生 HTML、CSS 和 JavaScript，数据与样式都可独立修改。|Plain HTML, CSS and JavaScript. Customize the content, data and visual style independently.|HTML、CSS、JavaScript のシンプルな構成。コンテンツ、データ、スタイルを個別に変更できます。|순수 HTML, CSS, JavaScript로 콘텐츠, 데이터, 스타일을 각각 수정할 수 있습니다.
持续迭代|Keep improving|継続的に改善|지속적인 개선
用 GitHub 管理版本和检查，再通过 Sites 发布，保留每次变更记录。|Manage versions and checks on GitHub, then publish with Sites and keep a clear change history.|GitHub でバージョンとチェックを管理し、Sites から公開します。|GitHub에서 버전과 검사를 관리한 뒤 Sites로 게시하고 변경 기록을 남기세요.
OPEN SOURCE TEMPLATE LAB · 原创交互模板|OPEN SOURCE TEMPLATE LAB · Original interactive templates|OPEN SOURCE TEMPLATE LAB · オリジナルテンプレート|OPEN SOURCE TEMPLATE LAB · 오리지널 인터랙티브 템플릿
精选案例，非官方排名或项目背书|Curated examples, not an official ranking or endorsement|厳選事例。公式ランキングや推奨ではありません|선별한 예시이며 공식 순위나 보증이 아닙니다
开源项目宣传模板|An open-source launch template|オープンソース紹介テンプレート|오픈소스 출시 템플릿
把灵感写下来，|Capture the idea.|アイデアを記録し、|아이디어를 기록하고,
把下一步做出来。|Build what comes next.|次の一歩を形に。|다음 단계를 만드세요.
为 AI 工作流、云工具和社区项目提供一个清晰的发布起点。让人看懂你的想法，再决定如何参与。|A thoughtful starting point for AI workflows, cloud tools and community projects. Help people understand your idea and find their way in.|AI ワークフロー、クラウドツール、コミュニティプロジェクトをわかりやすく紹介し、参加のきっかけを作ります。|AI 워크플로, 클라우드 도구, 커뮤니티 프로젝트를 명확하게 소개하고 참여 방법을 안내하세요.
体验交互演示|Try the interactive demo|デモを試す|인터랙티브 데모 체험
探索社区项目|Explore community projects|コミュニティを探す|커뮤니티 프로젝트 탐색
Fieldnotes 为示例品牌；此页不代表真实产品已发布。|Fieldnotes is a demo brand, not an announcement of an actual product.|Fieldnotes はサンプルブランドです。実在製品のリリース告知ではありません。|Fieldnotes는 예시 브랜드이며 실제 제품 출시를 알리는 페이지가 아닙니다.
工作流界面演示|Workflow interface demo|ワークフローデモ|워크플로 인터페이스 데모
预览|Preview|プレビュー|미리 보기
◇ 收集|◇ Collect|◇ 集める|◇ 수집
▦ 整理|▦ Curate|▦ 整理する|▦ 정리
社区与开源资源|Community and open source|コミュニティとオープンソース|커뮤니티와 오픈소스
分类与摘要|Categories and summaries|分類と要約|분류와 요약
无需账号|No account needed|アカウント不要|계정 불필요
适合你的下一个项目|Made for your next project|次のプロジェクトに|다음 프로젝트를 위해
让价值，比功能列表更清晰。|Lead with value, not a feature list.|機能より先に、価値を伝える。|기능 목록보다 가치를 먼저.
讲清一个具体问题|Start with a real problem|具体的な課題から|구체적인 문제에서 시작
从访客正在经历的场景开始，说明项目解决什么，以及他们可以如何尝试。|Start with a familiar situation. Explain the problem your project solves and how visitors can try it.|身近な場面から、解決する課題と試し方を説明します。|방문자가 겪는 상황에서 시작해 해결할 문제와 체험 방법을 설명하세요.
给出可探索的示例|Make the idea tangible|試せる例を用意する|직접 살펴볼 수 있는 예시
用可切换的工作流演示承接介绍。先展示体验，再引导读文档或访问仓库。|Let visitors explore a workflow before sending them to the docs or repository.|ワークフローを試してから、ドキュメントやリポジトリへ案内します。|워크플로를 먼저 체험한 후 문서나 저장소를 방문하도록 안내하세요.
邀请社区一起完善|Invite the community in|コミュニティと育てる|커뮤니티와 함께 개선
把使用说明、项目边界和下一步放在一起，让参与者知道从哪里开始。|Put usage instructions, project boundaries and next steps together so contributors know where to begin.|使い方、対応範囲、次のステップをまとめ、参加しやすくします。|사용법, 프로젝트 범위, 다음 단계를 모아 기여자가 쉽게 시작하도록 하세요.
一个好想法，|A good idea deserves|よいアイデアには、|좋은 아이디어에는
值得清晰的路线。|a clear path forward.|明確な道筋を。|명확한 방향이 필요합니다.
以下为模板的示例发布计划。请在正式使用时替换为真实版本与时间。|This is an illustrative roadmap. Replace it with your actual versions and dates before launch.|以下はサンプルの計画です。公開前に実際のバージョンと日付に置き換えてください。|예시 출시 계획입니다. 실제 사용 전에 정확한 버전과 일정으로 바꾸세요.
在贡献看板里规划任务|Plan tasks on the contribution board|貢献ボードで計画する|기여 보드에서 작업 계획
准备|Prepare|準備|준비
发布|Launch|公開|출시
迭代|Iterate|改善|개선
定义最小可用体验|Define the smallest useful experience|最小限の体験を定義する|최소한의 유용한 경험 정의
说明目标用户、核心流程和不支持的场景。|Describe the audience, core workflow and unsupported scenarios.|対象ユーザー、基本フロー、非対応の用途を説明します。|대상 사용자, 핵심 흐름, 지원하지 않는 시나리오를 설명하세요.
开放示例与文档|Share examples and documentation|例とドキュメントを公開する|예시와 문서 공개
提供运行说明、许可信息与可复现的使用示例。|Provide setup instructions, licensing information and reproducible examples.|実行手順、ライセンス情報、再現可能な例を用意します。|실행 방법, 라이선스 정보, 재현 가능한 예시를 제공하세요.
收集反馈，保持透明|Listen, learn and stay transparent|意見を聞き、透明性を保つ|피드백을 듣고 투명하게 운영
记录变更、处理问题，让贡献者了解项目方向。|Document changes, address issues and help contributors understand the direction.|変更を記録し、課題に対応して、方向性を共有します。|변경을 기록하고 문제를 해결하며 프로젝트 방향을 공유하세요.
开始之前，你可能想知道。|A few things to know before you start.|始める前に知っておきたいこと。|시작하기 전에 알아두세요.
这个页面已经接入 AI 或云服务了吗？|Is this connected to an AI or cloud service?|AI やクラウドに接続していますか？|AI 또는 클라우드 서비스에 연결되어 있나요?
没有。它是可复用的产品宣传模板，演示在浏览器本地运行。正式产品需要另外接入真实后端和服务。|No. This is a reusable launch template with a browser-only demo. A real product needs its own backend and service integrations.|いいえ。デモはブラウザー内で動きます。実際の製品には別途バックエンドとサービス接続が必要です。|아니요. 브라우저에서 동작하는 출시 템플릿입니다. 실제 제품에는 별도의 백엔드와 서비스 연동이 필요합니다.
可以换成自己的项目吗？|Can I use this for my own project?|自分のプロジェクトに使えますか？|내 프로젝트에 사용할 수 있나요?
可以。替换文案、项目链接、示例和品牌颜色即可。请勿把示例路线当作真实发布承诺。|Yes. Replace the copy, project links, examples and brand colors. The sample roadmap is not a release commitment.|はい。文章、リンク、例、ブランドカラーを変更してください。サンプル計画は実際の約束ではありません。|네. 문구, 링크, 예시, 브랜드 색상을 교체하세요. 예시 로드맵은 실제 출시 약속이 아닙니다.
如何参与真实社区项目？|How do I contribute to a real project?|実際のプロジェクトに参加するには？|실제 프로젝트에 어떻게 기여하나요?
先阅读项目的 README、许可证和 CONTRIBUTING，再从文档或 good first issue 开始。|Read the README, license and CONTRIBUTING first, then start with documentation or a good first issue.|README、ライセンス、CONTRIBUTING を読み、文書の改善や good first issue から始めましょう。|README, 라이선스, CONTRIBUTING을 읽고 문서나 good first issue부터 시작하세요.
查看精选资源|Browse curated resources|厳選リソースを見る|선별된 리소스 보기
给下一个想法，一个好开场。|Give your next idea a strong start.|次のアイデアに、よいスタートを。|다음 아이디어의 좋은 시작.
从一个清晰的页面开始，让合适的人看见。|Start with a clear page. Help the right people discover it.|わかりやすいページで、必要な人に届けましょう。|명확한 페이지로 필요한 사람들에게 알리세요.
查看模板使用指南|Read the template guide|使い方を見る|템플릿 가이드 보기
试一试信息整理流程|Try a curation workflow|情報整理フローを試す|정보 정리 워크플로 체험
本地交互演示，不调用模型或第三方 API。|A local interactive demo. No models or third-party APIs are called.|ローカルデモです。モデルや外部 API は呼び出しません。|로컬 인터랙티브 데모이며 모델이나 외부 API를 호출하지 않습니다.
选择场景|Choose a scenario|シナリオを選択|시나리오 선택
开源周报|Open-source digest|オープンソース週報|오픈소스 주간 소식
产品发布|Product launch|製品リリース|제품 출시
学习清单|Learning checklist|学習リスト|학습 체크리스트
关闭演示|Close demo|デモを閉じる|데모 닫기
社区与云端主题|Community and cloud|コミュニティとクラウド|커뮤니티와 클라우드
独立静态模板|Standalone static templates|独立した静的テンプレート|독립형 정적 템플릿
不连接你的本机项目|Independent of local projects|ローカルプロジェクトと独立|로컬 프로젝트와 무관
◷ 开源热度|◷ Community analytics|◷ コミュニティ分析|◷ 커뮤니티 분석
▦ 社区任务|▦ Contribution board|▦ 貢献ボード|▦ 기여 보드
◇ 工具导航|◇ Resource directory|◇ リソース集|◇ 리소스 모음
◈ 项目发布|◈ Project launch|◈ プロジェクト紹介|◈ 프로젝트 출시
开源社区，正在发生。|Signals from the open-source community.|オープンソースの今を知る。|오픈소스 커뮤니티의 지금.
精选 AI、自动化与云开发项目的公开指标。这里是样本观察，不是全站排行榜。|Public metrics for selected AI, automation and cloud projects. A sample to explore, not a platform-wide ranking.|厳選した AI、自動化、クラウド開発の公開指標です。全体ランキングではありません。|선별한 AI, 자동화, 클라우드 프로젝트의 공개 지표이며 전체 순위가 아닙니다.
刷新 GitHub 数据|Refresh GitHub data|GitHub データを更新|GitHub 데이터 새로고침
导出 CSV|Export CSV|CSV を出力|CSV 내보내기
数据说明|About this data|データについて|데이터 안내
正在加载已核验的数据快照…|Loading the verified snapshot…|確認済みスナップショットを読み込み中…|확인된 스냅샷을 불러오는 중…
项目关注度|Repository attention|リポジトリへの注目|저장소 관심도
Stars · 累计值|Stars · all time|スター · 累計|스타 · 누적
项目星标对比|Repository stars comparison|スター数の比較|저장소 스타 비교
主题分布|Topic breakdown|テーマ別内訳|주제별 분포
当前筛选结果中的项目数量|Repository count in the current selection|現在の絞り込み結果の件数|현재 필터의 프로젝트 수
Stars 代表累计关注，不代表增长速度、质量或投资价值。|Stars indicate cumulative attention, not growth, quality or investment value.|スターは累計の関心を示すもので、成長、品質、投資価値ではありません。|스타는 누적 관심도이며 성장률, 품질, 투자 가치를 의미하지 않습니다.
仓库观察列表|Repository watchlist|リポジトリ一覧|저장소 관찰 목록
搜索仓库|Search repositories|リポジトリを検索|저장소 검색
搜索名称、简介…|Search names or descriptions…|名前や説明を検索…|이름 또는 설명 검색…
项目分类|Repository category|プロジェクト分類|프로젝트 분류
全部主题|All topics|すべてのテーマ|모든 주제
AI 工具|AI tools|AI ツール|AI 도구
自动化|Automation|自動化|자동화
云开发|Cloud development|クラウド開発|클라우드 개발
前端设计|Frontend design|フロントエンド|프런트엔드 디자인
社区学习|Community & learning|コミュニティと学習|커뮤니티와 학습
排序|Sort by|並び順|정렬
Stars 从高到低|Most stars|スター数順|스타 많은 순
Forks 从高到低|Most forks|フォーク数順|포크 많은 순
名称 A–Z|Name A–Z|名前 A–Z|이름 A–Z
项目 / 来源|Repository / source|プロジェクト / 出典|프로젝트 / 출처
开放 Issues + PR|Open issues + PRs|未解決 Issue + PR|열린 이슈 + PR
许可证标识|License identifier|ライセンス識別子|라이선스 식별자
没有匹配的项目，试试清除搜索条件。|No matching repositories. Try clearing your filters.|一致する項目がありません。条件を変更してください。|일치하는 프로젝트가 없습니다. 필터를 지워보세요.
浏览器本地工作区|Your browser workspace|ブラウザー内の作業スペース|브라우저 작업 공간
让每一份贡献，都有下一步。|Every contribution has a next step.|すべての貢献に、次の一歩を。|모든 기여에 다음 단계가 있습니다.
文档、设计、代码与社区协作，在一张看板上有序推进。|Bring documentation, design, code and community work together on one board.|文書、デザイン、コード、コミュニティ活動をひとつのボードに。|문서, 디자인, 코드, 커뮤니티 활동을 하나의 보드에서 관리하세요.
＋ 新建任务|＋ New task|＋ タスクを作成|＋ 새 작업
这是个人贡献规划模板。初始卡片为演示任务，不是真实项目 Issue；修改只保存到当前浏览器，不会提交至 GitHub，也不会与其他访客共享。|A personal contribution planner. Starter cards are examples, not real issues. Changes stay in this browser and are not submitted to GitHub or shared with other visitors.|個人用の計画テンプレートです。初期カードは架空のタスクです。変更はブラウザー内に保存され、GitHub や他の訪問者には共有されません。|개인 기여 계획 템플릿입니다. 초기 카드는 예시이며 변경은 이 브라우저에만 저장되고 GitHub나 다른 방문자와 공유되지 않습니다.
搜索任务|Search tasks|タスクを検索|작업 검색
搜索任务或分类…|Search tasks or categories…|タスクや分類を検索…|작업 또는 분류 검색…
优先级|Priority|優先度|우선순위
全部优先级|All priorities|すべての優先度|모든 우선순위
高优先|High|高|높음
普通|Normal|通常|보통
低优先|Low|低|낮음
导出备份|Export backup|バックアップを出力|백업 내보내기
导入 JSON|Import JSON|JSON を読み込む|JSON 가져오기
新建贡献任务|New contribution task|貢献タスクを作成|새 기여 작업
编辑贡献任务|Edit contribution task|貢献タスクを編集|기여 작업 편집
任务标题|Task title|タスク名|작업 제목
例如：完善快速入门文档|For example: improve the quickstart guide|例：クイックスタートを改善する|예: 빠른 시작 가이드 개선
分类|Category|分類|분류
任务说明|Description|説明|설명
写下一个具体的下一步|Describe a concrete next step|具体的な次の一歩を記入|구체적인 다음 단계 입력
状态|Status|状態|상태
待开始|To do|未着手|할 일
进行中|In progress|進行中|진행 중
已完成|Done|完了|완료
删除任务|Delete task|タスクを削除|작업 삭제
取消|Cancel|キャンセル|취소
保存任务|Save task|タスクを保存|작업 저장
好工具，值得被找到。|Good tools deserve to be found.|よいツールに、出会おう。|좋은 도구를 만나보세요.
从 AI 工作流到云开发，把值得探索的项目放在一起。精选官方入口，帮你少找一会儿，多做一点。|From AI workflows to cloud development, explore useful projects through curated official links. Less searching, more building.|AI ワークフローからクラウド開発まで。公式リンクで探す時間を減らし、作る時間を増やしましょう。|AI 워크플로부터 클라우드 개발까지 공식 링크를 통해 유용한 프로젝트를 만나보세요. 검색은 줄이고 만드는 시간을 늘리세요.
搜索工具和资源|Search tools and resources|ツールとリソースを検索|도구 및 리소스 검색
搜索 AI、数据库、前端…|Search AI, databases, frontend…|AI、データベース、フロントエンドを検索…|AI, 데이터베이스, 프런트엔드 검색…
下一次贡献，从一个小问题开始。|Your next contribution starts small.|次の貢献は、小さな課題から。|다음 기여는 작은 문제에서 시작됩니다.
逛逛 GitHub 的 good first issue，读完贡献指南，再选择适合自己的任务。|Explore good first issues on GitHub, read the contribution guide and find a task that fits.|GitHub の good first issue と貢献ガイドを読み、自分に合った課題を探しましょう。|GitHub의 good first issue와 기여 가이드를 읽고 알맞은 작업을 찾아보세요.
探索社区机会|Find ways to contribute|貢献の機会を探す|기여 기회 탐색
精选工具与学习资源|Curated tools and learning resources|厳選ツールと学習リソース|선별한 도구와 학습 리소스
只看收藏|Favorites only|お気に入りのみ|즐겨찾기만
＋ 添加链接|＋ Add a link|＋ リンクを追加|＋ 링크 추가
资源分类|Resource categories|リソース分類|리소스 분류
收藏与自定义链接仅保存于当前浏览器。|Favorites and custom links are saved only in this browser.|お気に入りと独自リンクは、このブラウザーにのみ保存されます。|즐겨찾기와 개인 링크는 이 브라우저에만 저장됩니다.
精选不等于推荐所有使用场景；请查阅各项目许可证与服务条款。|Check each project's license and terms before choosing it for your use case.|用途に応じて各プロジェクトのライセンスと規約を確認してください。|사용 목적에 맞는지 각 프로젝트의 라이선스와 약관을 확인하세요.
资源列表|Resource list|リソース一覧|리소스 목록
本目录为人工精选入口，不宣称为热度排名。开源、源码可用与商业服务的许可条件各有不同，请以项目官网为准。|An editorial selection, not a popularity ranking. Open-source, source-available and commercial services have different terms; check the official project pages.|人気ランキングではなく編集による選定です。オープンソース、ソース公開、商用サービスでは条件が異なります。公式情報をご確認ください。|편집자가 선별한 목록이며 인기 순위가 아닙니다. 오픈소스, 소스 공개, 상용 서비스의 조건은 다르므로 공식 안내를 확인하세요.
添加自己的资源|Add your own resource|自分のリソースを追加|나만의 리소스 추가
名称|Name|名前|이름
HTTPS 网址|HTTPS URL|HTTPS URL|HTTPS URL
简介|Description|説明|설명
保存链接|Save link|リンクを保存|링크 저장
全部资源|All resources|すべてのリソース|모든 리소스
访问资源|Visit resource|リソースを開く|리소스 방문
移除自定义链接|Remove custom link|独自リンクを削除|개인 링크 제거
模型运行|Model runtime|モデル実行|모델 실행
AI 工作流|AI workflows|AI ワークフロー|AI 워크플로
数据库平台|Database platform|データベース基盤|데이터베이스 플랫폼
官方文档|Official docs|公式ドキュメント|공식 문서
组件系统|Component system|コンポーネント|컴포넌트 시스템
管理后台|Admin dashboard|管理画面|관리 대시보드
宣传模板|Launch template|紹介テンプレート|홍보 템플릿
社区发现|Community discovery|コミュニティ探索|커뮤니티 탐색
贡献指南|Contribution guide|貢献ガイド|기여 가이드
Web 基础|Web fundamentals|Web の基礎|웹 기초
仓库自动化|Repository automation|リポジトリ自動化|저장소 자동화
探索本地与云端模型运行，从官方文档开始了解模型与部署方式。|Explore local and cloud model runtimes, with official documentation on models and deployment.|ローカルとクラウドのモデル実行を、公式ドキュメントから学べます。|공식 문서를 통해 로컬 및 클라우드 모델 실행과 배포 방식을 살펴보세요.
可视化 AI 应用与 Agent 工作流平台，包含 RAG 与工具集成。|A visual platform for AI apps and agent workflows, including RAG and tool integrations.|RAG とツール連携に対応する AI アプリとエージェントの構築基盤。|RAG와 도구 통합을 포함한 시각적 AI 앱 및 에이전트 워크플로 플랫폼입니다.
连接应用和数据的自动化工作流平台；许可为 fair-code，请先阅读条款。|Workflow automation connecting apps and data. Uses a fair-code license; read the terms first.|アプリとデータをつなぐ自動化基盤。fair-code ライセンスの条件をご確認ください。|앱과 데이터를 연결하는 자동화 플랫폼입니다. fair-code 라이선스 약관을 확인하세요.
以 Postgres 为核心的应用开发平台，探索数据库及相关云端能力。|A Postgres-based application platform for databases and related cloud capabilities.|Postgres を中心としたデータベースとクラウド機能の開発基盤。|Postgres 기반의 데이터베이스 및 클라우드 앱 개발 플랫폼입니다.
Workers、D1 与 R2 等产品的官方文档与实践入口。|Official documentation and guides for Workers, D1, R2 and related products.|Workers、D1、R2 などの公式ドキュメントと実践ガイド。|Workers, D1, R2 등의 공식 문서와 실습 가이드입니다.
可阅读、修改和组合的 UI 组件，适合搭建自己的设计系统。|Readable, editable UI components for building your own design system.|読んで変更し、組み合わせられる UI コンポーネント。|읽고 수정하고 조합하여 나만의 디자인 시스템을 만드는 UI 컴포넌트입니다.
面向后台应用的数据界面、表格和导航布局参考。|A reference for admin interfaces, tables and navigation layouts.|管理画面、テーブル、ナビゲーションの参考実装。|관리 화면, 표, 탐색 레이아웃을 참고할 수 있습니다.
以 Astro 构建产品与内容站点的社区模板，使用前核对当前依赖版本。|A community Astro template for product and content sites. Check current dependency versions before use.|製品やコンテンツサイト向けの Astro テンプレート。依存関係の現行版をご確認ください。|제품 및 콘텐츠 사이트용 Astro 커뮤니티 템플릿입니다. 사용 전 의존성 버전을 확인하세요.
探索社区项目与主题，找到感兴趣的工具和贡献方向。|Explore community projects and topics to discover tools and contribution opportunities.|コミュニティのプロジェクトやテーマから、ツールと貢献先を見つけましょう。|커뮤니티 프로젝트와 주제를 살펴보고 도구와 기여 기회를 찾아보세요.
了解如何参与、维护和发展开源项目，以及贡献者协作方式。|Learn how to contribute to, maintain and grow open-source projects.|オープンソースへの参加、保守、発展と協力の方法を学べます。|오픈소스 프로젝트의 참여, 유지보수, 성장과 협업 방법을 배워보세요.
学习 HTML、CSS、JavaScript 和 Web API 的基础文档。|Fundamental documentation for HTML, CSS, JavaScript and Web APIs.|HTML、CSS、JavaScript、Web API の基礎ドキュメント。|HTML, CSS, JavaScript, Web API의 기초 문서입니다.
了解仓库检查、工作流和自动化维护的官方使用方法。|Official guides to repository checks, workflows and maintenance automation.|リポジトリのチェック、ワークフロー、自動保守の公式ガイド。|저장소 검사, 워크플로, 자동 유지보수를 위한 공식 가이드입니다.
全部任务|All tasks|すべてのタスク|전체 작업
文档|Documentation|ドキュメント|문서
设计|Design|デザイン|디자인
社区|Community|コミュニティ|커뮤니티
规划|Planning|計画|계획
编辑|Edit|編集|편집
修改状态|Change status|状態を変更|상태 변경
暂无说明|No description yet|説明はありません|설명이 없습니다
没有匹配任务。|No matching tasks.|一致するタスクはありません。|일치하는 작업이 없습니다.
还没有任务。|No tasks yet.|まだタスクはありません。|아직 작업이 없습니다.
为快速入门补一个完整示例|Add a complete quickstart example|クイックスタートの実例を追加|빠른 시작 전체 예시 추가
检查移动端和键盘操作|Check mobile and keyboard access|モバイルとキーボードを確認|모바일 및 키보드 접근 확인
整理社区贡献指南|Organize the contribution guide|貢献ガイドを整理|기여 가이드 정리
核验资源链接与许可证|Verify resource links and licenses|リンクとライセンスを確認|리소스 링크와 라이선스 확인
确定最小模板范围|Define the initial template scope|初期テンプレートの範囲を定義|초기 템플릿 범위 정의
演示任务：从安装到第一次运行，检查说明是否可复现。|Demo task: verify the guide from installation to the first successful run.|サンプルタスク：インストールから初回実行まで再現を確認。|예시 작업: 설치부터 첫 실행까지 가이드의 재현성을 확인하세요.
演示任务：测试焦点、表单标签与窄屏排版。|Demo task: test focus states, form labels and narrow-screen layout.|サンプルタスク：フォーカス、ラベル、狭い画面の配置を確認。|예시 작업: 포커스, 양식 라벨, 좁은 화면 배치를 테스트하세요.
演示任务：列出提 Issue、提交 PR 和行为准则的入口。|Demo task: document issue, PR and code-of-conduct entry points.|サンプルタスク：Issue、PR、行動規範の入口を整理。|예시 작업: 이슈, PR, 행동 강령의 안내 링크를 정리하세요.
演示任务：以项目官方文档为准，标记更新时间。|Demo task: verify against official docs and record the check date.|サンプルタスク：公式文書を確認し、確認日を記録。|예시 작업: 공식 문서를 확인하고 확인 날짜를 기록하세요.
演示任务：完成用途、边界和数据保存方式说明。|Demo task: document the purpose, boundaries and storage behavior.|サンプルタスク：用途、範囲、データ保存方法を文書化。|예시 작업: 용도, 범위, 데이터 저장 방식을 문서화하세요.
收集本周关注的仓库 → 按主题整理 → 阅读项目更新 → 撰写并分享周报。|Collect repositories → group by topic → read project updates → write and share a weekly digest.|リポジトリ収集 → テーマ別に整理 → 更新を確認 → 週報を作成・共有。|저장소 수집 → 주제별 정리 → 업데이트 확인 → 주간 소식 작성 및 공유.
写清目标用户 → 展示核心使用场景 → 准备文档与演示 → 开放社区反馈。|Define the audience → show the core use case → prepare docs and a demo → invite community feedback.|対象を定義 → 利用例を紹介 → 文書とデモを準備 → 意見を募集。|대상 정의 → 핵심 사용 사례 소개 → 문서와 데모 준비 → 커뮤니티 피드백 수집.
选择一个主题 → 找到官方入门指南 → 完成可复现练习 → 记录学习笔记。|Choose a topic → find the official quickstart → complete a reproducible exercise → record what you learned.|テーマを選択 → 公式入門を探す → 再現可能な練習 → 学習メモを作成。|주제 선택 → 공식 시작 가이드 찾기 → 재현 가능한 실습 → 학습 기록 작성.
任务已保存到当前浏览器。|Task saved in this browser.|このブラウザーに保存しました。|이 브라우저에 작업을 저장했습니다.
备份已导入。|Backup imported.|バックアップを読み込みました。|백업을 가져왔습니다.
资源已保存到当前浏览器。|Resource saved in this browser.|このブラウザーにリソースを保存しました。|이 브라우저에 리소스를 저장했습니다.
浏览器未允许保存；请导出备份。|Browser storage is unavailable. Export a backup.|ブラウザーに保存できません。バックアップを出力してください。|브라우저에 저장할 수 없습니다. 백업을 내보내세요.
浏览器保存内容无效，已使用演示数据；未覆盖原记录。|Saved data is invalid. Showing demo data without overwriting your records.|保存データが無効です。元の記録は上書きせず、サンプルを表示しています。|저장 데이터가 올바르지 않습니다. 기존 기록을 덮어쓰지 않고 예시 데이터를 표시합니다.
最多可导入 300 项任务。|Import up to 300 tasks.|最大300件まで読み込めます。|최대 300개 작업을 가져올 수 있습니다.
任务格式无效或 ID 重复。|Invalid task format or duplicate ID.|形式が無効、または ID が重複しています。|잘못된 작업 형식이거나 ID가 중복됩니다.
已达到 300 项任务上限，请先导出或整理。|The 300-task limit has been reached. Export or organize tasks first.|300件の上限に達しました。出力または整理してください。|작업 300개 한도에 도달했습니다. 먼저 내보내거나 정리하세요.
删除这项任务？此操作可通过已导出的备份恢复。|Delete this task? You can restore it from an exported backup.|このタスクを削除しますか？出力済みバックアップから復元できます。|이 작업을 삭제할까요? 내보낸 백업으로 복원할 수 있습니다.
备份文件不能超过 1 MB。|Backup files must be 1 MB or smaller.|バックアップは1 MB以下にしてください。|백업 파일은 1MB 이하여야 합니다.
备份版本不受支持。|Unsupported backup version.|未対応のバックアップ版です。|지원하지 않는 백업 버전입니다.
最多保存 100 个自定义资源。|Save up to 100 custom resources.|独自リソースは最大100件です。|개인 리소스는 최대 100개까지 저장할 수 있습니다.
请填写名称、简介和有效的 HTTPS 网址。|Enter a name, description and a valid HTTPS URL.|名前、説明、有効な HTTPS URL を入力してください。|이름, 설명, 유효한 HTTPS URL을 입력하세요.
移除这个自定义链接？|Remove this custom link?|この独自リンクを削除しますか？|이 개인 링크를 제거할까요?
没有匹配资源。试试其他分类，或添加自己的链接。|No matching resources. Try another category or add your own link.|一致するリソースはありません。分類を変更するか、リンクを追加してください。|일치하는 리소스가 없습니다. 다른 분류를 선택하거나 링크를 추가하세요.
精选资源加载失败，请刷新页面。|Could not load the resource list. Refresh the page.|リソースを読み込めません。ページを再読み込みしてください。|리소스를 불러오지 못했습니다. 페이지를 새로고침하세요.
精选资源加载失败，当前仅显示本地自定义链接。|Could not load curated resources. Only your custom links are shown.|厳選リソースを読み込めません。独自リンクのみ表示しています。|선별 리소스를 불러오지 못했습니다. 개인 링크만 표시됩니다.
数据加载失败，请刷新页面重试。|Could not load the data. Refresh the page to try again.|データを読み込めません。ページを再読み込みしてください。|데이터를 불러오지 못했습니다. 페이지를 새로고침하세요.
没有匹配数据。|No matching data.|一致するデータはありません。|일치하는 데이터가 없습니다.
观察项目|Repositories|観察プロジェクト|관찰 프로젝트
当前筛选结果|Current selection|現在の選択|현재 선택
累计 Stars|Total stars|スター合計|누적 스타
GitHub 公共累计值|Public GitHub totals|GitHub 公開累計|GitHub 공개 누적값
累计 Forks|Total forks|フォーク合計|누적 포크
仓库分叉数量|Repository fork count|フォーク数|저장소 포크 수
自定义 / 查看仓库|Custom / see repository|独自 / リポジトリを確認|사용자 정의 / 저장소 확인
未标识|Not specified|未指定|명시되지 않음
正在刷新…|Refreshing…|更新中…|새로고침 중…
GitHub 公共 API 暂时限流。|The public GitHub API is rate-limited.|GitHub 公開 API が制限されています。|GitHub 공개 API 요청이 제한되었습니다.
GitHub 请求失败。|GitHub request failed.|GitHub への要求に失敗しました。|GitHub 요청에 실패했습니다.
数据格式不匹配。|Unexpected data format.|データ形式が一致しません。|데이터 형식이 일치하지 않습니다.
已刷新全部项目的公开指标。|Public metrics refreshed for all projects.|すべての公開指標を更新しました。|모든 프로젝트의 공개 지표를 갱신했습니다.
数据快照|Data snapshot|データスナップショット|데이터 스냅샷
已手动刷新|Refreshed manually|手動更新済み|수동 갱신 완료
（北京时间）| (Beijing time)|（北京時間）| (베이징 시간)
来源：GitHub 公共 API。样本名单固定；刷新不提供历史涨幅。|Source: GitHub public API. Fixed sample; no historical growth data.|出典：GitHub 公開 API。固定サンプルで、過去の増加率は含みません。|출처: GitHub 공개 API. 고정 표본이며 과거 증가율은 제공하지 않습니다.
刷新未完成，保留上次完整快照（|Refresh failed. Keeping the last complete snapshot (|更新に失敗しました。前回の完全なスナップショットを保持（|갱신 실패. 마지막 전체 스냅샷 유지 (
请稍后重试。|Please try again later.|後でもう一度お試しください。|나중에 다시 시도하세요.
（| (|（| (
）。|).|）。|).
收藏 |Favorite |お気に入りに追加 |즐겨찾기 추가 
取消收藏 |Unfavorite |お気に入りを解除 |즐겨찾기 해제 
编辑：|Edit: |編集：|편집: 
：修改状态|: change status|：状態を変更|: 상태 변경
仓库|Repository|リポジトリ|저장소
快照时间|Snapshot time|取得日時|스냅샷 시간
来源|Source|出典|출처
开放Issues和PR|Open issues and PRs|未解決 Issue と PR|열린 이슈 및 PR
`;
export const entries=[...rows.trim().split('\n').map(line=>line.split('|')),...creativeEntries];
export const dictionary=new Map(entries.map(([zh,en,ja,ko])=>[zh,{zh,en,ja,ko}]));
export const supported=['en','zh','ja','ko'];
export const locales={en:'en-US',zh:'zh-CN',ja:'ja-JP',ko:'ko-KR'};
let language='en';
export function currentLanguage(){return language;}
export function setLanguage(value){language=supported.includes(value)?value:'en';}
const ordered=[...dictionary.keys()].filter(k=>k.length>2).sort((a,b)=>b.length-a.length);
const pattern=new RegExp(ordered.map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
export function t(value,lang=language){if(typeof value!=='string')return value;const exact=dictionary.get(value);if(exact)return exact[lang];if(lang==='zh')return value;
 const count=value.match(/^(\d+) 个精选项目$/);if(count)return {en:`${count[1]} selected repositories`,ja:`厳選リポジトリ ${count[1]} 件`,ko:`선별 저장소 ${count[1]}개`}[lang];
 const resources=value.match(/^(\d+) 个匹配资源 · (\d+) 个精选入口 \/ (\d+) 个自定义链接$/);if(resources)return {en:`${resources[1]} matches · ${resources[2]} curated / ${resources[3]} custom`,ja:`${resources[1]} 件一致 · 厳選 ${resources[2]} 件 / 独自 ${resources[3]} 件`,ko:`${resources[1]}개 일치 · 선별 ${resources[2]}개 / 개인 ${resources[3]}개`}[lang];
 const imported=value.match(/^导入 (\d+) 项任务将替换当前看板。确定继续？$/);if(imported)return {en:`Importing ${imported[1]} tasks will replace this board. Continue?`,ja:`${imported[1]} 件のタスクで現在のボードを置き換えます。続けますか？`,ko:`${imported[1]}개 작업을 가져오면 현재 보드가 교체됩니다. 계속할까요?`}[lang];
 return value.replace(pattern,key=>dictionary.get(key)[lang]);}
