import { render, screen } from '@testing-library/react';
import Welcome from "./Welcome";
import userEvents from "@testing-library/user-event"

describe("Welcome Test Checking", () => {
    test('renders learn react link', () => {
        render(<Welcome />);
        const helloworld = screen.getByText("hello world", {exact: false});
        expect(helloworld).toBeInTheDocument();
      });
      test('button not clicked', () => {
        render(<Welcome />);
        const helloworld = screen.getByText("good to have", {exact: false});
        expect(helloworld).toBeInTheDocument();
      });
      test("Button is clicked", () => {
        render(<Welcome/>);
        const button = screen.getByRole("button");
        userEvents.click(button);
        const element = screen.queryByText("Text was Changed", {exact: false});
        expect(element).toBeInTheDocument();
      });
      test("removed message", () => {
        render(<Welcome/>);
        const button = screen.getByRole("button");
        userEvents.click(button);
        const element = screen.queryByText("Good to have", {exact: false});
        expect(element).toBeNull();
      });
});


