import { render, screen } from "@testing-library/react";
import { MovieControls } from "../components/movieControls/MovieControls";
import { GlobalContext } from "../context/globalStateContext";

describe("MovieControls component", () => {
  it("renders correctly", () => {
    const movie = {
      id: "1",
      title: "Test Movie",
    };

    const contextValues = {
      removeMovieFromWatchlist: jest.fn(),
      addMovieToWatched: jest.fn(),
      moveToWatchlist: jest.fn(),
      removeFromWatched: jest.fn(),
    };

    render(
      <GlobalContext.Provider value={contextValues}>
        <MovieControls movie={movie} type="watchlist" />
      </GlobalContext.Provider>
    );

    // Check if the inner-card-controls div is in the document
    const controlsDiv = screen.getByTestId("inner-card-controls");
    expect(controlsDiv).toBeInTheDocument();
  });
});
