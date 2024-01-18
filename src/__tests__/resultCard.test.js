import { render, screen } from "@testing-library/react";
import { ResultCard } from "../components/resultCard/ResultCard";
import { GlobalContext } from "../context/globalStateContext";

describe("ResultCard component", () => {
  it("renders correctly", () => {
    const movie = {
      id: "1",
      titleText: {
        text: "Test Movie",
      },
      releaseDate: {
        year: "2022",
      },
      primaryImage: {
        url: "https://example.com/image.jpg",
      },
    };

    const contextValues = {
      addMovieToWatchlist: jest.fn(),
      watchlist: [],
      watched: [],
      addMovieToWatched: jest.fn(),
    };

    render(
      <GlobalContext.Provider value={contextValues}>
        <ResultCard movie={movie} />
      </GlobalContext.Provider>
    );

    // Check if the result-card div is in the document
    const resultCardDiv = screen.getByTestId("result-card");
    expect(resultCardDiv).toBeInTheDocument();

    // Check if the movie title is in the document
    const movieTitle = screen.getByText(movie.titleText.text);
    expect(movieTitle).toBeInTheDocument();
  });
});
