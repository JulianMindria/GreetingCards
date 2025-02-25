import { render, screen, fireEvent } from "@testing-library/react";
import GreetingCard from "../App";
import { expect } from 'vitest'
import "@testing-library/jest-dom";


describe("GreetingCard Component", () => {
  test("renders input fields and button", () => {
    render(<GreetingCard />);

    expect(screen.getByPlaceholderText("Dear")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("From")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /download greeting card/i })).toBeInTheDocument();
  });

  test("disables download button when form is incomplete", () => {
    render(<GreetingCard />);
    const downloadButton = screen.getByRole("button", { name: /download greeting card/i });

    expect(downloadButton).toBeDisabled();
  }); 
  
  test("enables download button when form is complete", () => {
    render(<GreetingCard />);

    fireEvent.change(screen.getByPlaceholderText("Dear"), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText("Message"), { target: { value: "Happy Birthday!" } });
    fireEvent.change(screen.getByPlaceholderText("From"), { target: { value: "Alice" } });

    const imageInput = new Event("change", { bubbles: true });
    Object.defineProperty(imageInput, "target", {
      writable: true,
      value: { files: ["sample-image.png"] },
    });

    fireEvent(screen.getByText(/browse or drop an image/i), imageInput);

    expect(screen.getByRole("button", { name: /download greeting card/i })).not.toBeDisabled();
  });
});
