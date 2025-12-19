
import ProjectCover from '@/components/ProjectCover';
import ProjectSection from '@/components/ProjectSection';
import ProjectNavigation from '@/components/ProjectNavigation';

const PROJECTS = [
  // IT기획
  {
    id: "nitsoft",
    heading: "1-1. IT기획 > 메시지 발송 플랫폼 'NITSOFT' (웹앱기획)",
    image: "/images/project-nitsoft.png",
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
    year: "2023",
    link: "https://www.instagram.com/cellook.kr/"
  },
  {
    id: "showa-edu",
    heading: "1-3. IT기획 > 'S'그룹 DX 교육 플랫폼",
    image: "/images/project-showaedu.png",
    title: "DX 사내교육 플랫폼 구축",
    description: "전사 DX 교육을 위한 통합 플랫폼 기획",
    role: "기획, 커리큘럼 구성, 개발 커뮤니케이션",
    year: "2024"
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
    image: "/images/project-revind.png",
    title: "Re:vind 서비스 구축",
    description: "SNS 프로필을 위한 멀티 링크 서비스 기획",
    role: "UX 기획, 웹앱 설계",
    year: "2023",
    link: "https://revind.io"
  },
  {
    id: "sam-invest",
    heading: "1-6. IT기획 > 'S' 자산운용사 기업 홈페이지",
    image: "/images/project-saminvest.png",
    title: "자산운용사 기업 사이트",
    description: "브랜드 리뉴얼 및 정보 구조 개편",
    role: "UX 기획, 디자인 디렉션",
    year: "2022"
  },
  // 운영기획
  {
    id: "wine-pickup",
    heading: "2-1. 운영기획 > 스마트픽 서비스 운영",
    image: "/images/project-winepickup.png",
    title: "스마트픽 서비스 운영",
    description: "와인 스마트픽 서비스 운영 및 개선 기획",
    role: "운영 프로세스 설계, 개선안 제시",
    year: "2022"
  },
  {
    id: "lotte-shipping",
    heading: "2-2. 운영기획 > 롯데닷컴 배송 품질 개선",
    image: "/images/project-lottedelivery.png",
    title: "롯데닷컴 배송 품질 개선",
    description: "고객 배송 만족도 향상을 위한 분석 및 개선",
    role: "VOC 분석, 배송 정책 제안",
    year: "2022"
  },
  {
    id: "pickup-edu",
    heading: "2-3. 운영기획 > 스마트픽 교육 영상 배포",
    image: "/images/project-pickupedu.png",
    title: "스마트픽 교육 영상 제작",
    description: "전국 매장 대상의 서비스 가이드 영상 기획",
    role: "기획, 대본 구성, 영상 제작 관리",
    year: "2023"
  },
  // 사업기획
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
    year: "2024"
  },
  // 기타
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
    year: "2023"
  },
  {
    id: "play",
    heading: "4-3. 기타 > 직장인 극단 '우리들의 시간' 주연",
    image: "/images/project-play.png",
    title: "사랑에 관한 5가지 소묘 주연",
    description: "연극무대에서의 창의적인 표현과 팀워크 경험",
    role: "배우 (주연), 대본 리딩 및 공연",
    year: "2022"
  },
  {
    id: "univ-talk",
    heading: "4-4. 기타 > 대외활동 플러스 강연 및 대학생 상담",
    image: "/images/project-univtalk.png",
    title: "대학생 대상 진로 강연 및 상담",
    description: "대외활동 경험 공유 및 진로 컨설팅 진행",
    role: "강연, 멘토링",
    year: "2023"
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

export default function ProjectPage() {
  return (
    <main className="relative">
      <ProjectNavigation />
      <ProjectCover />
      {PROJECTS.map((project) => (
        <ProjectSection
          key={project.id}
          id={project.id}
          heading={project.heading}
          image={project.image}
          title={project.title}
          description={project.description}
          role={project.role}
          year={project.year}
          link={project.link}
        />
      ))}
    </main>
  );
}
