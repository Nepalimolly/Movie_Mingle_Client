import { render, screen } from "@testing-library/react";
import axios from "axios";
import Rightbar from "../components/rightbar/Rightbar";

jest.mock("axios");

describe("Rightbar component", () => {
  it("renders and makes API call", async () => {
    const data = {
      data: {
        results: [
          {
            id: "1",
            primaryImage: { url: "https://example.com/image.jpg" },
            titleText: { text: "Movie Title" },
          },
        ],
      },
    };

    axios.get.mockResolvedValue(data);

    render(<Rightbar />);

    // Check if the API call was made
    expect(axios.get).toHaveBeenCalledWith(
      "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      }
    );

    // Check if the movie title is in the document
    // Note: You'll need to wait for the state update, you can use `findByText` for this
    const movieTitle = await screen.findByText("Movie Title");
    expect(movieTitle).toBeInTheDocument();
  });
});
