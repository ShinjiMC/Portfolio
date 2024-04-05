import { render, screen, fireEvent } from "@testing-library/react";
import About from "./About";

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

describe("About component", () => {
  test("displays skills tab content by default", () => {
    render(<About />);
    expect(screen.getByText("About.Title")).toBeInTheDocument();
    expect(screen.queryByText("About.Description")).toBeInTheDocument();
    expect(screen.queryByText("About.Skills")).toBeInTheDocument();
    expect(screen.queryByText("About.Education")).toBeInTheDocument();
    expect(screen.queryByText("About.Certifications")).toBeInTheDocument();
  });

  test("switches tab content correctly", () => {
    render(<About />);
    const educationButton = screen.getByText("About.Education", {
      selector: "button > p",
    });
    fireEvent.click(educationButton);
    expect(screen.getByText("TABDATA.ed1")).toBeInTheDocument();
    expect(screen.getByText("TABDATA.ed2")).toBeInTheDocument();

    const certificationsButton = screen.getByText("About.Certifications", {
      selector: "button > p",
    });
    fireEvent.click(certificationsButton);
    expect(screen.getByText("TABDATA.cert1")).toBeInTheDocument();

    const skillsButton = screen.getByText("About.Skills", {
      selector: "button > p",
    });
    fireEvent.click(skillsButton);
    expect(screen.queryByText("Node.js")).toBeInTheDocument();
  });
  test("handles non-existent tab content gracefully", () => {
    const nonExistentTab = "nonExistentTab";
    render(<About initialTab={nonExistentTab} />);
    expect(screen.getByText("About.NOTTHERE")).toBeInTheDocument();
  });
});
