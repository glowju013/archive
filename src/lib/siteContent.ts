export const introContent = {
  title: "사용자 피드백을 실제 화면 개선으로 연결하는\n 프론트엔드 개발자 이윤주입니다.",
  description:
    "온보딩, 성능 최적화, 상태 동기화, 업로드 UX처럼 사용자가 직접 체감하는 문제를 구조적으로 정리하고 구현하는 작업에 집중하고 있습니다.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/glowju013",
    },
    {
      label: "Blog",
      href: "https://blog.naver.com/013churrr",
    },
  ],
} as const;

export const projects = [
  {
    id: "ceep",
    label: "Project 01",
    title: "Ceep",
    description: "Amuse8의 AI 기반 자료 관리 서비스 입니다.",
    work: {
      title: "What I worked on",
      description:
        "사용자 피드백을 반영하면서 메인 경험을 직접 개선하는 작업을 중심으로 진행했습니다.",
      items: [
        "Ceep 카드 컴포넌트 구현",
        "메인 화면 구성 및 UI 정리",
        "카테고리 생성 및 관리 기능 구현",
        "온보딩 기능 구현",
        "피드백을 반영한 화면 개선 반복",
      ],
    },
    image: {
      src: "/ceep-screen.png",
      alt: "Ceep 서비스 화면",
      width: 2938,
      height: 1832,
    },
  },
  {
    id: "picketing",
    label: "Project 02",
    title: "픽켓팅",
    description:
      "픽켓팅은 브랜드 등록, 광고 추천, 프로모션 노출, 사용자 액션 중심 흐름을 한 화면에 정리한 모바일 광고 서비스 프로젝트입니다.",
    work: {
      title: "What I worked on",
      description:
        "서비스 화면의 완성도와 운영 관점의 흐름을 함께 설계하는 방향으로 작업했습니다.",
      items: [
        "프론트엔드 구현",
        "관리자 대시보드 기획 및 개발",
      ],
    },
    image: {
      src: "/picketing-screen-v2.png",
      alt: "Picketing 서비스 화면",
      width: 846,
      height: 866,
      frameClassName: "mx-auto w-full max-w-[720px]",
    },
  },
] as const;
