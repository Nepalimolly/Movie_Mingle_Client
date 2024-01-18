import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Add } from "../components/addWatchlist/Add";

jest.mock("axios");

describe("Add component", () => {
  it("renders correctly", async () => {
    axios.request.mockResolvedValue({ data: { results: [] } });

    render(
      <Router>
        <Add />
      </Router>
    );

    // Check if the add-page div is in the document
    const addPageDiv = screen.getByTestId("add-page");
    expect(addPageDiv).toBeInTheDocument();
  });
});
