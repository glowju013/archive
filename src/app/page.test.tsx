import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders intro first and the Ceep project below", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/glowju013"
    );
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "href",
      "https://blog.naver.com/013churrr"
    );
    expect(
      screen.getByRole("heading", {
        name: "사용자 피드백을 실제 화면 개선으로 연결하는 프론트엔드 개발자 이윤주입니다.",
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "프로젝트 보기" })).toHaveAttribute("href", "#ceep");
    expect(screen.getByRole("heading", { name: "Ceep" })).toBeInTheDocument();
    expect(screen.getByText("Amuse8의 AI 기반 자료 관리 서비스 입니다.")).toBeInTheDocument();
    expect(screen.getByText("Ceep 카드 컴포넌트 구현")).toBeInTheDocument();
    expect(screen.getByText(/사용자 피드백을 반영하면서 메인 경험을 직접 개선/)).toBeInTheDocument();
    expect(screen.getByAltText("Ceep 서비스 화면")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "픽켓팅" })).toBeInTheDocument();
    expect(
      screen.getByText(/브랜드 등록, 광고 추천, 프로모션 노출, 사용자 액션 중심 흐름/)
    ).toBeInTheDocument();
    expect(screen.getByText("프론트엔드 디자인 구현")).toBeInTheDocument();
    expect(screen.getByText("관리자 대시보드 기획")).toBeInTheDocument();
    expect(screen.getByText("관리자 대시보드 개발")).toBeInTheDocument();
    expect(screen.getByAltText("Picketing 서비스 화면")).toBeInTheDocument();
  });
});
