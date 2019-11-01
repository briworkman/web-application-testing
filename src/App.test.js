import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test("it displays a balls component", () => {
  const { getAllByText } = render(<App />);
  getAllByText(/balls/i);
});

test("it displays a strikes component", () => {
  const { getAllByText } = render(<App />);
  getAllByText(/strikes/i);
});

test("it displays a hit component", () => {
  const { getByText } = render(<App />);
  getByText(/hit/i);
});

test("it displays a foul component", () => {
  const { getByText } = render(<App />);
  getByText(/foul/i);
});

test("it renders without crashing", () => {
  render(<App />);
});
