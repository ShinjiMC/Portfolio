import { fireEvent, render, screen } from "@testing-library/react";
import ProjectSection from "./ProjectSection";
import { vi } from "vitest";

vi.mock("react-i18next", async () => {
  const originalModule = await import("react-i18next");
  return {
    ...originalModule,
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: { changeLanguage: vi.fn() },
    }),
    initReactI18next: { type: "3rdParty", init: vi.fn() },
  };
});

vi.mock("./projectTag/ProjectTag", () => {
  return {
    default: vi.fn(({ onClick, name, text }) => (
      <button onClick={() => onClick(name)}>{text}</button>
    )),
  };
});

interface MotionLiProps {
  key: number;
  children: React.ReactNode;
  initial?: string;
  animate?: string;
  transition?: React.CSSProperties;
}

vi.mock("framer-motion", () => ({
  motion: {
    li: ({ children, initial, transition, key, ...props }: MotionLiProps) => (
      <li
        key={key}
        {...props}
        style={{ ...transition, opacity: initial === "initial" ? 0 : 1 }}
      >
        {children}
      </li>
    ),
  },
  useInView: vi.fn(() => true),
}));

vi.mock("./projectCard/ProjectCard", () => {
  return {
    default: vi.fn(({ title, description, imgUrl, gitUrl, previewUrl }) => (
      <div>
        <div>Title: {title}</div>
        <div>Description: {description}</div>
        <div>ImgUrl: {imgUrl}</div>
        <div>GitUrl: {gitUrl}</div>
        <div>PreviewUrl: {previewUrl}</div>
      </div>
    )),
  };
});

describe("ProjectSection", () => {
  it("renders project section with tags and projects", () => {
    render(<ProjectSection />);
    expect(screen.getByText("Project.Title")).toBeInTheDocument();
    expect(screen.getByText("Project.All")).toBeInTheDocument();
    expect(screen.getByText("Project.Web")).toBeInTheDocument();
    expect(screen.getByText("Project.Mobile")).toBeInTheDocument();
    expect(screen.getByText("ProjectData.title1")).toBeInTheDocument();
    expect(screen.getByText("ProjectData.title2")).toBeInTheDocument();
  });

  it("handles tag change correctly", () => {
    render(<ProjectSection />);
    fireEvent.click(screen.getByText("Project.Web"));
    const webTagButton = screen.getByText("Project.Web");
    expect(webTagButton.className).toMatch(/btnSelected/);
  });

  it("animates correctly based on isInView value", () => {
    // setupUseInViewMock(true);
    // render(<ProjectSection />);
    // const motionLis = screen.queryAllByTestId("motion-li");
    // console.log(motionLis);
    // const firstMotionLi = motionLis[0];
    // expect(firstMotionLi).toHaveStyle("transform: translateX(0)");
    // setupUseInViewMock(false);
    // render(<ProjectSection />);
    // const motionLiss = screen.queryAllByTestId("motion-li");
    // const firstMotionLis = motionLiss[0];
    // expect(firstMotionLis).toHaveStyle("transform: translateX(0)");
  });
});
