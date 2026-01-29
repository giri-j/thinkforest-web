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
        details: {
            purpose: "대한민국 최초의 온라인 쇼핑몰 '롯데닷컴'의 온라인 주문 결품/반품율을 개선하여 매출 손실을 최소화",
            problem: "매월 700억 매출 중 약 15%(105억)가 취소 및 반품으로 손실 발생. 특히 전체 주문의 3%에 달하는 '결품' 문제에 집중.",
            role: "QCM 파트 팀원 및 파트장 (4년간 수행). 정책 수립 및 현장 관리 총괄.",
            points: [
                { title: "관리자 시스템 교육", desc: "전국 10,000여개 백화점 매장 매니저 대상 '파트너플러스' 앱 교육 실시" },
                { title: "현장 밀착형 계도", desc: "결품율 상위 매장 방문, 창고 동선 효율화 및 시스템 개선안(알림 기능 등) 반영" },
                { title: "배송 정책 최적화", desc: "배송 할당 정책 변경(1+1+1 -> 2+1)을 통한 실질적 배송 기일 단축 및 결품 예방" }
            ],
            results: [
                "결품율 3% -> 1.5%로 개선 (월 10.5억 매출 손실 방어)",
                "교육을 통한 인적 개선 효과 약 0.5% 달성",
                "정책/시스템 고도화를 통한 구조적 개선 효과 약 1% 달성"
            ],
            insights: [
                "인적 노력보다 시스템적 설계 변경이 더 지속적이고 큰 효과를 낸다.",
                "효과적인 시스템 개선을 위해서는 현장의 목소리를 듣는 '인적 노력'이 선행되어야 한다."
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
        color: "#005EB8"
    },
    {
        id: "gray-gray-ir",
        title: "그린앤그레이 IR을 통한 50억 유치",
        period: "2022",
        description: "스타트업 성장 전략 수립 및 핵심 지표 시각화를 통한 성공적인 투자 유치",
        summary: "비즈니스 모델 고도화 및 IR Deck 기획/제작 총괄",
        tags: ["Business Strategy", "IR", "Investment"],
        color: "#4CAF50"
    },
    {
        id: "cellook-backoffice",
        title: "셀룩 서비스 백오피스 기획",
        period: "2022",
        description: "패션 플랫폼 운영 효율화를 위한 어드민 시스템 설계 및 프로세스 정의",
        summary: "복잡한 정산 및 배송 관리 프로세스의 디지털 전환",
        tags: ["Backoffice", "Admin Design", "Process Design"],
        color: "#FF4081"
    },
    {
        id: "revind-planning",
        title: "리바인드 서비스 기획",
        period: "2023",
        description: "멀티 링크 플랫폼의 핵심 사용자 가치 정의 및 MVP 기능 상세 설계",
        summary: "초기 서비스의 UX 전략 및 시장 진입 로드맵 수립",
        tags: ["UX Planning", "MVP", "Service Strategy"],
        color: "#6200EE"
    },
    {
        id: "artch-planning",
        title: "아치 서비스 기획",
        period: "2024",
        description: "아티스트와 기업을 연결하는 아트 매칭 플랫폼 비즈니스 모델 및 UX 기획",
        summary: "예술 생태계의 비즈니스 연결을 위한 플랫폼 구조화",
        tags: ["Art-Tech", "Platform Planning", "UX"],
        color: "#000000"
    },
    {
        id: "messaging-platform",
        title: "메시지 플랫폼 기획",
        period: "2024",
        description: "기업형 대량 메시지 발송 시스템의 안정성 확보 및 사용자 대시보드 개선",
        summary: "B2B 솔루션의 편의성 및 데이터 가독성 강화",
        tags: ["B2B", "Messaging System", "UI/UX"],
        color: "#3F51B5"
    },
    {
        id: "sgroup-edu-platform",
        title: "'S'그룹 교육 플랫폼 기획 (SI)",
        period: "2024",
        description: "대기업 DX 교육 환경에 최적화된 학습 관리 시스템(LMS) 요구사항 분석 및 기획",
        summary: "엔터프라이즈 환경의 대규모 교육 플랫폼 구축 리딩",
        tags: ["SI", "LMS", "Enterprise"],
        color: "#1A237E"
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

