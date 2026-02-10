import { Book, Scene, Project, CaseStudy } from '../types';

export const BOOKS: Book[] = [
    { id: 1, title: '프로젝트 A', image: '/bookcover1.png', description: '회사 A에서 PM으로 다양한 프로젝트를 리드함.', slug: 'project-a' },
    { id: 2, title: '브랜드 콜라보', image: '/bookcover2.png', description: '브랜드 B와 아트웍 콜라보를 진행함.', slug: 'brand-collab' },
    { id: 3, title: 'UX 전략 리뉴얼', image: '/bookcover3.png', description: '스타트업 UX 리뉴얼 전략을 수립하고 실행.', slug: 'ux-renewal' },
    { id: 4, title: '기획 강의 제작', image: '/bookcover4.png', description: '강의 플랫폼을 위한 기획 강의 영상 콘텐츠 제작.', slug: 'lecture-production' },
];

export const FOREST_SCENES: Scene[] = [
    { id: 1, action: 'dig', text: "처음하는 사업,\n맨땅에 삽질하기!" },
    { id: 2, action: 'prune', text: "복잡한 문제\n가지치기" },
    { id: 3, action: 'water', text: "지속적인\n관리와 애정" },
    { id: 4, action: 'sweep', text: "버그와\n군더더기 청소" },
    { id: 5, action: 'type', text: "기획과 디자인\n설계" },
    { id: 6, action: 'tea', text: "여유와\n회고의 시간" },
];

export const PROJECTS = [
    {
        id: "nitsoft",
        heading: "1-1. IT기획 > 메시지 발송 플랫폼 'NITSOFT' (웹앱기획)",
        image: "/images/project_msg.gif",
        title: "NITSOFT Messaging Service",
        description: "기업용 문자 발송 통합 플랫폼",
        role: "UX 설계, 정보 구조 설계, 주요 기능 정의",
        year: "2024",
        link: "https://www.nitsoft.co.kr/"
    },
    {
        id: "cellook",
        heading: "1-2. IT기획 > 여성의류 플랫폼 'Cellook'",
        image: "/images/project-cellook.gif",
        title: "Cellook Platform",
        description: "여성의류 쇼핑몰 플랫폼 런칭을 위한 UX 기획",
        role: "UI/UX 설계, 기획안 작성",
        year: "2022",
        link: "https://www.instagram.com/cellook.kr/"
    },
    {
        id: "sgroup-edu",
        heading: "1-3. IT기획 > 'S'그룹 DX 교육 플랫폼",
        image: "/images/project-samoo.gif",
        title: "DX 사내교육 플랫폼 구축",
        description: "전사 DX 교육을 위한 통합 플랫폼 기획",
        role: "기획, 커리큘럼 구성, 개발 커뮤니케이션",
        year: "2024",
        linkText: "사내 전용 사이트"
    },
    {
        id: "artch",
        heading: "1-4. IT기획 > Artch - 예술X기업 연결 서비스",
        image: "/images/project-artch.gif",
        title: "Artch Platform",
        description: "기업과 아티스트의 협업을 중개하는 플랫폼",
        role: "기획, 비즈니스 모델 수립, 운영 총괄",
        year: "2024",
        link: "https://artch.io"
    },
    {
        id: "revind",
        heading: "1-5. IT기획 > Re:vind - 멀티 링크 서비스",
        image: "/images/project_revind.gif",
        title: "Re:vind 서비스 구축",
        description: "SNS 프로필을 위한 멀티 링크 서비스 기획",
        role: "UX 기획, 웹앱 설계",
        year: "2023",
        link: "https://revind.io"
    },
    {
        id: "sam-invest",
        heading: "1-6. IT기획 > 'S' 자산운용사 기업 홈페이지",
        image: "/images/project-seed.gif",
        title: "자산운용사 기업 사이트",
        description: "브랜드 리뉴얼 및 정보 구조 개편",
        role: "UX 기획, 디자인 디렉션",
        year: "2022",
        link: "http://seedamc.com/"
    },
    {
        id: "wine-pickup",
        heading: "2-1. 운영기획 > 'L'그룹 O4O 매장픽업 서비스 운영",
        image: "/images/project-winepickup.png",
        images: [
            "/images/project-smartpick1.jpg",
            "/images/project-smartpick2.jpg",
            "/images/project-smartpick3.jpg"
        ],
        title: "'L'그룹 온라인 주문 후 오프라인 매장 픽업 서비스 운영",
        description: "'스마트픽' 서비스 사용자 교육(백화점 매니저 대상)\n'스마트픽' 운영 시스템 '파트너 플러스' 운영/관리 및 개선",
        role: "운영 프로세스 설계, 개선안 제시",
        year: "2018~2021"
    },
    {
        id: "lotte-shipping",
        heading: "2-2. 운영기획 > 'L'그룹 온라인몰 배송 정책/품질 개선",
        image: "/images/project-lottecom.jpg",
        title: "롯데닷컴 배송 품질 개선",
        description: "고객 배송 만족도 향상을 위한 분석 및 개선",
        role: "VOC 분석, 배송 정책 제안",
        year: "2014~2018"
    },
    {
        id: "pickup-edu",
        heading: "2-3. 운영기획 > 스마트픽 교육 영상 배포",
        image: "/images/project-pickupedu.png",
        title: "스마트픽 교육 영상 제작",
        description: "전국 매장 대상의 서비스 가이드 영상 기획",
        role: "기획, 대본 구성, 영상 제작 관리",
        year: "2018"
    },
    {
        id: "lux-cosmetics",
        heading: "3-1. 사업기획 > 명품 화장품 직구 사업",
        image: "/images/project-luxcosmetics.png",
        title: "럭셔리 화장품 직구몰 구축",
        description: "홍콩 유통망을 활용한 명품 화장품 직구 사업",
        role: "브랜드 전략, 스마트스토어/쿠팡 셋업",
        year: "2025"
    },
    {
        id: "biz-plan",
        heading: "3-2. 사업기획 > 사업 기획안 작성",
        image: "/images/project-bizplan.png",
        title: "신규 사업 기획안",
        description: "시장 조사 기반의 실현 가능한 사업기획서 작성",
        role: "시장 분석, 경쟁사 분석, 비즈니스 모델링",
        year: "2024"
    },
    {
        id: "ir-deck",
        heading: "3-3. 사업기획 > IR 자료 작성",
        image: "/images/project-irdeck.png",
        title: "IR Deck 제작",
        description: "투자 유치를 위한 IR 자료 기획 및 디자인",
        role: "자료 기획, 시나리오 구성, 디자인 디렉션",
        year: "2022"
    },
    {
        id: "workshop",
        heading: "4-1. 기타 > 1박 2일 워크샵 기획",
        image: "/images/project-workshop.png",
        title: "팀 빌딩 워크샵 기획",
        description: "기획팀 전체 워크샵 일정 및 운영 전담",
        role: "장소 선정, 프로그램 기획, 운영",
        year: "2023"
    },
    {
        id: "edu-system",
        heading: "4-2. 기타 > 회사 시스템 교육",
        image: "/images/project-systemedu.png",
        title: "사내 시스템 교육",
        description: "신입 및 전사 직원 대상 사내 시스템 교육 운영",
        role: "교육안 기획 및 교육 진행",
        year: "2018"
    },
    {
        id: "play",
        heading: "4-3. 기타 > 직장인 극단 '우리들의 시간' 주연",
        image: "/images/project-play.png",
        title: "사랑에 관한 5가지 소묘 주연",
        description: "연극무대에서의 창의적인 표현과 팀워크 경험",
        role: "배우 (주연), 대본 리딩 및 공연",
        year: "2016"
    },
    {
        id: "univ-talk",
        heading: "4-4. 기타 > 대외활동 플러스 강연 및 대학생 상담",
        image: "/images/project-univtalk.png",
        title: "대학생 대상 진로 강연 및 상담",
        description: "대외활동 경험 공유 및 진로 컨설팅 진행",
        role: "강연, 멘토링",
        year: "2018"
    },
    {
        id: "youtube",
        heading: "4-5. 기타 > 유튜브 크루 활동",
        image: "/images/project-youtube.png",
        title: "콘텐츠 크루 유튜브 활동",
        description: "다양한 포맷의 영상 콘텐츠 기획 및 촬영",
        role: "기획, 출연",
        year: "2021"
    },
    {
        id: "my-life",
        heading: "4-6. 기타 > 내 인생 기획",
        image: "/images/project-mylife.png",
        title: "내 인생의 방향 기획",
        description: "나의 일과 삶을 위한 장기 로드맵 수립",
        role: "자기 성찰, 비전 수립",
        year: "2025"
    }
];

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: "lotte-order-improvement",
        title: "롯데닷컴 주문완료율 개선 프로젝트",
        period: "2014~2018",
        description: "고객 이탈 패턴 분석 및 결제 프로세스 최적화를 통한 주문 전환율 극대화",
        summary: "데이터 기반의 UX 개선으로 실질적인 매출 증대 기여",
        tags: ["Data Analysis", "UX Optimization", "Conversion"],
        color: "#E60012",
        category: "매출·전환을 직접 건드린 프로젝트",
        categoryPhrase: "돈버는 일",
        details: {
            purpose: "대한민국 최초의 온라인 종합 쇼핑몰이자, 백화점 상품을 온라인으로 판매하는 롯데닷컴에서 주문이 발생한 이후 결품·취소·반품으로 이어지지 않고 ‘주문 완료’까지 안정적으로 이어지도록 개선하여 매출 손실을 최소화하는 것",
            problem: "매월 약 100만 건의 주문, 월 700억 원 규모의 결제가 발생하나 실제 매출 확정률은 약 85% 수준. 15%의 취소(월 약 105억 원) 중, 관리로 개선 가능한 '결품(전체 주문의 3%)' 문제에 집중. 원인은 시스템 사용 미숙, 운영 소홀, 재고 관리 한계 등 운영 구조와 정책의 문제.",
            role: "QCM(Quality Control Management) 파트 신설 멤버. 팀원으로 시작해 파트장까지 수행하며 현장 행동, 시스템 구조, 정책 로직을 통합적으로 관리하는 전략적 접근 방식 정립.",
            points: [
                {
                    title: "관리자 시스템 교육 강화",
                    desc: "전국 롯데백화점 10,000여 개 매장을 직접 방문하여 '파트너플러스' 앱 집합 교육 수행 및 사용자 이해도 제고"
                },
                {
                    title: "상위 결품 매장 밀착 계도",
                    desc: "결품률 상위 매장 방문 미팅을 통해 창고 동선 효율화, 모바일 앱 활용 지원, 알림 기능 개선 등 현장 맞춤형 솔루션 제공"
                },
                {
                    title: "배송 정책 구조 혁신 (1+1+1 → 2+1)",
                    desc: "순차 할당 구조를 분석하여 최초 매장(A)에 1일을 더 주는 것이 결품을 줄이고 배송 속도를 높임을 입증, 정책 변경을 통한 구조적 개선 달성"
                }
            ],
            results: [
                "결품률 3% → 1.5% 개선 (월 약 10.5억 원 매출 손실 감소)",
                "사람 중심 교육/관리 효과: 약 0.5%p 개선",
                "정책/시스템 구조 개선 효과: 약 1%p 개선 (구조적 개선의 우위 입증)"
            ],
            insights: [
                "사람의 노력만으로 관리하는 방식에는 한계가 있으며, 지속적인 개선은 반드시 ‘시스템’으로 귀결되어야 한다.",
                "시스템은 현장의 목소리를 충분히 듣고 이해한 뒤에만 제대로 설계될 수 있다.",
                "“사람의 문제처럼 보이는 대부분의 이슈는 결국 구조와 정책의 문제다”"
            ]
        }
    },
    {
        id: "gray-gray-ir",
        title: "그린앤그레이 IR을 통한 50억 유치",
        period: "2022",
        description: "스타트업 성장 전략 수립 및 핵심 지표 시각화를 통한 성공적인 투자 유치",
        summary: "비즈니스 모델 고도화 및 IR Deck 기획/제작 총괄",
        tags: ["Business Strategy", "IR", "Investment"],
        color: "#4CAF50",
        category: "매출·전환을 직접 건드린 프로젝트",
        categoryPhrase: "'돈버는 일'",
        details: {
            purpose: "스타트업 그린앤그레이가 사업을 지속하고 다음 단계로 도약하기 위해 외부 투자 유치에 성공하는 것",
            problem: "명확한 미래 비즈니스 모델과 기술 비전은 있었으나 현재 안정적인 매출이 발생하지 않는 상태. “지금의 실적이 아니라, 미래의 가능성으로 설득해야 하는 상황”이었으며, 기술·운영·재무 각 영역의 논리를 하나의 일관된 투자 스토리로 묶어 투자자를 설득할 자료가 필요했음.",
            role: "IR 자료(PPT) 메인 기획 및 제작 총괄. 전체 자료의 90% 이상 직접 작성. COO, CTO, CFO 각 이해관계자의 의견을 조율하여 기획자의 시선으로 하나의 스토리로 재구성하는 '설계자' 역할 수행.",
            points: [
                {
                    title: "이해관계자 의견 구조화",
                    desc: "COO의 사업 방향, CTO의 기술 경쟁력, CFO의 재무 계획을 투자자가 따라갈 수 있는 서사 구조로 재배열"
                },
                {
                    title: "시각적 스토리텔링 전환",
                    desc: "장황한 텍스트 대신 이미지·도식·구조화된 그래프를 활용하여 “읽는 자료”가 아닌 “이해되는 자료”로 설계"
                },
                {
                    title: "엄격한 품질 및 기준 관리",
                    desc: "수치와 논리의 지속적 검증은 물론, 다양한 의견이 추가되는 과정에서도 설득 대상(투자자) 중심의 기획 기준점 유지"
                }
            ],
            results: [
                "‘N’사로부터 50억 원 규모의 투자 유치 성공",
                "스타트업의 재정적 안정성 확보 및 중장기 사업 추진을 위한 골든타임 확보",
                "기획을 통해 ‘가능성’을 ‘신뢰’로 전환한 성공적 사례"
            ],
            insights: [
                "IR은 단순히 예쁜 자료를 만드는 것이 아니라 설득 구조를 설계하는 일이다.",
                "기술, 비전, 숫자 중 무엇 하나만으로는 투자를 이끌 수 없으며, 기획자는 각자의 언어를 하나의 이야기로 통합해야 한다.",
                "“기획은 내부를 정리하는 일이자, 외부를 설득하는 언어를 만드는 일이다.”"
            ]
        }
    },
    {
        id: "lotte-o4o-smartpick",
        title: "롯데닷컴 O4O 서비스 스마트픽 시스템 관리",
        period: "2018~2021",
        description: "온-오프라인 통합 픽업 서비스 '스마트픽' 운영 및 파트너 시스템 고도화",
        summary: "전국 유통망을 연결하는 옴니채널 서비스 운영 리딩",
        tags: ["O4O", "System Management", "Operation"],
        color: "#005EB8",
        category: "운영·시스템을 설계한 프로젝트",
        categoryPhrase: "돌아가게 만든 일",
        details: {
            purpose: "롯데 전 계열사의 오프라인 거점을 활용한 Online for Offline 픽업 서비스 ‘스마트픽’의 안정적인 운영과 사용 확산. 단순히 서비스를 만드는 것을 넘어, 현장에서 실제로 문제없이 작동하고 지속적으로 사용되는 구조를 구축하는 것.",
            problem: "매장 현장의 서비스 인지도 및 숙련도 부족, 계열사 간 협업 시 낮은 직접 매출 기여도로 인한 운영 비협조 등 '서비스는 존재하나 조직과 현장이 따라오지 못하는' 구조적 한계 봉착.",
            role: "스마트픽 TF 정책·운영 담당. 문서를 넘어 현장에서 답을 찾는 QCM 파트의 경험을 접목하여, 사용 흐름 관찰 및 담당자 인터뷰를 기반으로 교육·정책·시스템 개선을 동시 병행하는 '실전형 운영 엔진' 역할 수행.",
            points: [
                {
                    title: "전국 단위 현장 교육 및 계도",
                    desc: "전국 롯데백화점 및 세븐일레븐 매장을 직접 방문하여 매장 담당자 대상 시스템 실무 교육 실시 및 운영 밀착 관리"
                },
                {
                    title: "운영 실수를 방지하는 시스템 구조 혁신",
                    desc: "상품별 개별 체크 방식의 한계를 극복하기 위해 카테고리 단위로 ‘스마트픽 가능’이 Default가 되도록 로직 변경. 현장 의견을 수렴하여 운영 실수를 시스템으로 상쇄."
                },
                {
                    title: "온라인 교육 체계 및 알림 자동화",
                    desc: "직접 방문의 한계를 넘는 온라인 교육 콘텐츠 신설과, 기존 상담원 OB 콜을 ‘카카오톡 알림톡’ 자동화 서비스로 대체하여 인지율 향상 및 운영 효율 극대화"
                }
            ],
            results: [
                "스마트픽 가능 상품 범위: 약 40% → 80%로 2배 확대",
                "온라인 교육 시스템 정착으로 전사적 서비스 이해도 및 숙련도 상향 평준화",
                "운영 효율 및 비용 절감: 콜센터 OB 제거 및 카카오 알림톡 전환을 통해 월 약 50만 원(상담원 시급 기준) 비용 세이브"
            ],
            insights: [
                "좋은 서비스라도 조직과 현장이 이해하지 못하면 작동하지 않으며, 특히 대기업 O4O에서는 기능보다 '전달 방식'과 '운영 구조'가 핵심이다.",
                "현장의 불편함은 단순 교육이 아닌, 시스템 구조(Default 설정 등)로 해결해야 지속성을 가질 수 있다.",
                "“서비스는 단순한 기능이 아니라, 조직을 설득하고 움직이게 만드는 구조다”"
            ]
        }
    },
    {
        id: "cellook-backoffice",
        title: "여성의류 플랫폼 ‘셀룩(Cellook)’ 백오피스 기획 프로젝트",
        period: "2022",
        description: "운영 효율 개선 + 매출 기능 추가를 동시에 달성한 백오피스 UX 고도화",
        summary: "실사용자 중심의 어드민 시스템 개선 및 수익 창출을 위한 기능 기획",
        tags: ["Backoffice", "Admin Design", "Process Design", "Automation"],
        color: "#FF4081",
        category: "운영·시스템을 설계한 프로젝트",
        categoryPhrase: "돌아가게 만든 일",
        details: {
            purpose: "여성의류 쇼핑 플랫폼 셀룩(Cellook) 서비스의 백오피스(어드민) 시스템을 실사용자 중심으로 개선하고, 운영 효율을 높이는 동시에 매출을 직접적으로 발생시킬 수 있는 기능을 기획하는 것이 본 프로젝트의 목적이었다.",
            problem: "셀룩은 서비스 자체는 출시되어 있었으나, 백오피스 시스템은 기능은 존재하지만 실제 사용성을 고려하지 않은 ‘구색만 갖춘’ 상태였다. 시스템 미비로 인해 상품 관리, 매출 데이터 정리, 입점몰 관리 등 사람의 손으로 반복 처리되는 업무가 다수 존재했으며, 운영 도구에만 머물러 매출을 창출하는 구조가 부재했다. 즉, “운영자는 불편하고, 플랫폼은 돈을 벌지 못하는 상태”였다.",
            role: "스타트업 백오피스 기획자(기획 총괄)로서 MD 및 CS 담당자 인터뷰를 통해 실제 업무 흐름을 파악했다. 단순히 '불편을 줄이는 것'을 넘어, '현재 가진 자원으로 입점몰이 매력을 느낄 수 있는 서비스는 무엇인가?'라는 질문을 중심에 두고 기획을 진행했다.",
            points: [
                {
                    title: "백오피스 사용성(UI/UX) 개선",
                    desc: "상품 등록 시 Default 값 개선, 전체 선택(체크) 기능 추가, 업무 흐름 기준 메뉴 재정리 등 매일 사용하는 사용자의 피로도를 낮추는 기본 구조 개선"
                },
                {
                    title: "반복 업무 자동화",
                    desc: "매크로 및 크롤링 방식을 활용하여 입점몰의 순위와 매출 정보를 일 단위로 자동 추출. 반복 업무를 사람 중심에서 시스템 중심의 관리 방식으로 전환"
                },
                {
                    title: "매출 발생을 위한 기능 기획 (FO + BO 통합)",
                    desc: "기획전 및 라이브 커머스 기능 기획 등 백오피스를 단순 운영 도구가 아닌 매출을 만드는 비즈니스 도구로 확장 설계"
                }
            ],
            results: [
                "실 사용자 불편 사항 감소",
                "반복 수기 작업 자동화로 업무 시간 및 운영 리소스 효율화",
                "기획전·라이브 기능 도입을 통해 입점몰 홍보 수단 확보 및 매출 발생 구조 마련"
            ],
            insights: [
                "모든 서비스는 사용자와의 소통을 통해서만 개선된다.",
                "반복적이고 루틴한 업무에는 반드시 개선하거나 자동화할 수 있는 포인트가 존재한다.",
                "백오피스 기획은 단순한 관리 화면 설계가 아니라 운영 효율과 비즈니스 성과를 동시에 만드는 일이다."
            ]
        }
    },
    {
        id: "messaging-platform",
        title: "메시지 플랫폼 기획",
        period: "2024",
        description: "기업형 대량 메시지 발송 시스템의 안정성 확보 및 사용자 대시보드 개선",
        summary: "B2B 솔루션의 편의성 및 데이터 가독성 강화",
        tags: ["B2B", "Messaging System", "UI/UX"],
        color: "#3F51B5",
        category: "운영·시스템을 설계한 프로젝트",
        categoryPhrase: "돌아가게 만든 일"
    },
    {
        id: "revind-planning",
        title: "리바인드(Re:vind) 서비스 기획 프로젝트",
        period: "2023",
        description: "인스타그램 기반 멀티링크 서비스의 MVP 기획부터 런칭, 유료화까지 전 과정 총괄",
        summary: "아이디어 검증을 넘어 실제 매출로 가능성을 증명한 단기 집중 프로젝트",
        tags: ["MVP", "UX Strategy", "Service Planning", "Monetization"],
        color: "#6200EE",
        category: "사업·플랫폼을 처음부터 만든 프로젝트",
        categoryPhrase: "없는 걸 만든 일",
        details: {
            purpose: "스타트업 초기 단계에서 대주주에게 유의미한 현금 흐름 창출 역량을 증명하기 위한 MVP 프로젝트. 동시에 차기 주력 서비스인 Artch와의 연계를 고려한 멀티링크 플랫폼의 신규 런칭을 목적으로 함.",
            problem: "팀 전원이 멀티링크 서비스에 대한 경험이 전무한 상태에서 투입되었으며, 이미 링크트리(Linktree), 리틀리(Littly) 등 강력한 선발주자들이 시장을 점유하고 있는 레드오션 상황. “후발주자로서 우리만이 줄 수 있는 가치”를 정의하는 것이 급선무였음.",
            role: "서비스 기획 총괄. 주요 경쟁사 상위 서비스를 직접 구독하며 모든 기능을 역기획(Reverse Engineering)하여 구조화. 경쟁사의 강점은 흡수하고 약점은 보완하며, “기능은 더 많되 요금은 더 합리적인 서비스”라는 명확한 전략적 포지셔닝 수립.",
            points: [
                {
                    title: "‘꾸미기 자유도’의 극대화",
                    desc: "멀티링크의 핵심인 '개성 표현'을 위해 경쟁사 대비 훨씬 디테일한 커스터마이징 옵션(색상, 버튼 스타일, 레이아웃 등)을 설계하여 사용자 만족도 제고"
                },
                {
                    title: "쇼핑몰 운영자 특화 기능 설계",
                    desc: "기존 영업 인프라의 쇼핑몰 고객들을 겨냥하여 단순 링크 나열을 넘어 상품 홍보와 구매 전환을 유도할 수 있는 커머스 친화적 구조 도입"
                }
            ],
            results: [
                "기획부터 유료화 런칭까지 단 2개월 내 완료",
                "월 3,300원 유료 구독 모델 안착 및 전체 회원 약 500명 확보",
                "초기 유료 구독자 50명 확보를 통해 실질적 과금 구조 및 사업성 입증"
            ],
            insights: [
                "스타트업의 가장 강력한 무기는 '완성도'보다 '속도'이며, 빠른 실행과 피드백 순환이 핵심이다.",
                "완전히 새로운 것이 아니더라도 선발주자의 기능을 재구성하고 보완하는 것만으로도 충분한 경쟁력을 확보할 수 있다.",
                "시장의 반응을 확인하는 가장 확실한 지표는 '아이디어'가 아닌 '결제'가 발생하는 구조를 만드는 일이다."
            ]
        }
    },
    {
        id: "artch-planning",
        title: "아치(artch) 서비스 기획 프로젝트",
        period: "2024",
        description: "아티스트의 작품을 상품과 서비스에 연결해 스토리 있는 협업 구조를 만든 플랫폼 기획",
        summary: "아티스트 × 커머스 중개 플랫폼 기획 및 작가 풀 구축",
        tags: ["Art-Tech", "Platform Planning", "UX"],
        color: "#000000",
        category: "사업·플랫폼을 처음부터 만든 프로젝트",
        categoryPhrase: "없는 걸 만든 일",
        details: {
            purpose: "기존 커머스 인프라를 확장하여 예술가의 작품을 디자인 요소로 활용하고, 작가와 기업을 연결하는 아티스트 기반 협업 프로젝트 '아치(artch)' 서비스 기획 및 구축",
            problem: "그림만으로 생계 유지가 어려운 아티스트, 상품 차별화와 스토리 부여에 한계를 느끼는 기업, 그리고 예술가 네트워크가 없던 조직의 문제를 동시에 해결하는 연결 구조의 부재",
            role: "홈페이지 기획과 작가 모집 전반 담당. 단순 매칭을 넘어 '작가–기업 협업이 자연스럽게 이루어지는 구조'를 만드는 것을 목표로 설계 및 운영 총괄",
            points: [
                {
                    title: "작가 모집을 위한 다각도 접근",
                    desc: "공모전 기획, 인스타그램·노트폴리오 개별 컨택, 일러스트레이션 페어 직접 방문 등 능동적인 작가 풀(Pool) 구축"
                },
                {
                    title: "‘작가–기업 매칭’ 중심의 홈페이지 기획",
                    desc: "단순 포트폴리오를 넘어 작가의 스타일과 활용 영역을 기업 관점에서 설계하여 협업을 쉽게 만들어주는 매칭 구조 구축"
                }
            ],
            results: [
                "작가–기업 매칭 홈페이지 제작 완료 및 약 50명의 작가 풀 확보",
                "실제 협업 성과: 마틸라 침구류에 작가 작품 활용 디자인 상품 출시",
                "유베이스 홈페이지 작가 일러스트 활용 라이선스 계약 체결"
            ],
            insights: [
                "AI 시대에도 작가의 작품이 가진 ‘스토리’는 여전히 강력한 시장 가치를 지닌다.",
                "플랫폼 기획의 핵심은 기술이 아니라 사람과 사람을 연결하는 신뢰 구조를 설계하는 것이다.",
                "기획은 새로운 가치를 만드는 일이 아니라, 이미 존재하는 가치를 연결하는 일이다."
            ]
        }
    },
    {
        id: "sgroup-edu-platform",
        title: "'S'그룹 교육 플랫폼 기획 (SI)",
        period: "2024",
        description: "대기업 DX 교육 환경에 최적화된 학습 관리 시스템(LMS) 요구사항 분석 및 기획",
        summary: "엔터프라이즈 환경의 대규모 교육 플랫폼 구축 리딩",
        tags: ["SI", "LMS", "Enterprise"],
        color: "#1A237E",
        category: "대기업 SI·교육 플랫폼",
        categoryPhrase: "복잡한 이해관계 속에서 정리한 일"
    }
];

export const NAV_ITEMS = [
    { href: '/insight', label: 'Insight' },
    { href: '/journal', label: 'Journal' },
    { href: '/case-study', label: 'Case Study' },
    { href: '/project', label: 'Project' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

