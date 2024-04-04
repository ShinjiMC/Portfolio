import { render, waitFor } from "@testing-library/react";
import ArchievementSection from "./ArchievementSection";
import { expect, it, vi } from "vitest";

vi.mock("react-animated-numbers", () => ({
  __esModule: true,
  default: () => <div>AnimatedNumbers</div>,
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("<ArchievementSection />", () => {
  it("renders correctly", async () => {
    const { getByText } = render(<ArchievementSection />);
    expect(getByText("Archievements.projects")).toBeInTheDocument();
    expect(getByText("Archievements.users")).toBeInTheDocument();
    await waitFor(() =>
      expect(getByText("AnimatedNumbers")).toBeInTheDocument()
    );
  });
});
