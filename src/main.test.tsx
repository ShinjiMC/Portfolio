import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Main from "./main";

vi.mock("./App.tsx", () => ({
  default: () => <div>App</div>,
}));

vi.mock("react-dom/client", () => ({
  default: {
    createRoot: vi.fn().mockImplementation(() => ({
      render: vi.fn(),
    })),
  },
}));

describe("Main", () => {
  it("renders the App component", () => {
    render(<Main />);
    expect(screen.getByText("App")).toBeInTheDocument();
  });
});
