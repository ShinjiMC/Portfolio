import { render, waitFor } from "@testing-library/react";
import ArchievementSection from "./ArchievementSection";
import { expect, it, vi } from "vitest";

vi.mock("react-animated-numbers", () => {
  const MockAnimatedNumbers = ({
    transitions,
  }: {
    transitions: (index: number) => { type: string; duration: number };
  }) => {
    const transitionExample = transitions(0);
    return (
      <div data-testid="mock-animated-numbers">
        Transition:
        {`Type: ${transitionExample.type}, Duration: ${transitionExample.duration}`}
      </div>
    );
  };
  return {
    __esModule: true,
    default: MockAnimatedNumbers,
  };
});

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

describe("<ArchievementSection />", () => {
  it("renders correctly", async () => {
    const { getByText, queryAllByTestId } = render(<ArchievementSection />);
    expect(getByText("Archievements.projects")).toBeInTheDocument();
    expect(getByText("Archievements.users")).toBeInTheDocument();

    await waitFor(() => {
      const mockAnimatedNumbersElements = queryAllByTestId(
        "mock-animated-numbers"
      );
      expect(mockAnimatedNumbersElements.length).toBeGreaterThan(0);
      mockAnimatedNumbersElements.forEach((element) => {
        const transitionsText = element.textContent;
        expect(transitionsText).toContain("Type: spring");
        expect(transitionsText).toContain("Duration:");
      });
    });
  });
});
