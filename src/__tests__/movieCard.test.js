import { render, screen } from "@testing-library/react";
import { MovieCard } from "../components/movieCard/MovieCard";

describe("MovieCard component", () => {
  it("renders correctly", () => {
    const movie = {
      primaryImage: {
        url: "https://example.com/image.jpg",
      },
      titleText: {
        text: "Test Movie",
      },
    };

    render(<MovieCard movie={movie} type="test" />);

    // Check if the movie-card div is in the document
    const movieCardDiv = screen.getByTestId("movie-card");
    expect(movieCardDiv).toBeInTheDocument();

    // Check if the image is in the document
    const image = screen.getByAltText(`${movie.titleText.text} Poster`);
    expect(image).toBeInTheDocument();
  });
});
