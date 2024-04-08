import { fireEvent, render, screen } from "@testing-library/react";
import EmailSection from "./EmailSection";
import { expect, it, vi } from "vitest";
import emailjs from "@emailjs/browser";

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

vi.mock("../icons", () => ({
  LinkedinIcon: () => <div>LinkedinIcon</div>,
  GithubIcon: () => <div>GithubIcon</div>,
}));

vi.mock("@emailjs/browser", () => ({
  default: {
    sendForm: vi.fn(() => Promise.resolve({ text: "Success" })),
  },
}));

describe("EmailSection", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    render(<EmailSection />);
  });

  it("render correctly", () => {
    expect(screen.getByText("Email.Title")).toBeInTheDocument();
    expect(screen.getByText("Email.Description")).toBeInTheDocument();
  });

  it("submitted form and status 200", async () => {
    vi.spyOn(emailjs, "sendForm").mockResolvedValueOnce({
      status: 200,
      text: "Success",
    });
    const emailInput = screen.getByPlaceholderText("jacob@google.com");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    const subjectInput = screen.getByPlaceholderText("Email.exampleSubject");
    fireEvent.change(subjectInput, { target: { value: "Test subject" } });
    const messageInput = screen.getByPlaceholderText("Email.exampleMessage");
    fireEvent.change(messageInput, { target: { value: "Test message" } });
    fireEvent.click(screen.getByText("Email.send"));
    expect(await screen.findByText("Email.success")).toBeInTheDocument();
  });

  it("submitted form and status 400", async () => {
    vi.spyOn(emailjs, "sendForm").mockRejectedValueOnce({
      status: 400,
      text: "Error",
    });
    const emailInput = screen.getByPlaceholderText("jacob@google.com");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    const subjectInput = screen.getByPlaceholderText("Email.exampleSubject");
    fireEvent.change(subjectInput, { target: { value: "Test subject" } });
    const messageInput = screen.getByPlaceholderText("Email.exampleMessage");
    fireEvent.change(messageInput, { target: { value: "Test message" } });
    fireEvent.click(screen.getByText("Email.send"));
    expect(await screen.findByText("Email.error")).toBeInTheDocument();
  });
});
