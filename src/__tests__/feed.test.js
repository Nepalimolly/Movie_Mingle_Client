import { render, screen } from "@testing-library/react";
import Feed from "../components/feed/Feed";

describe("Feed component", () => {
  it("renders correctly", () => {
    render(<Feed />);

    // Check if the feed div is in the document
    const feedDiv = screen.getByTestId("feed");
    expect(feedDiv).toBeInTheDocument();

    // Check if the story div is in the document
    const storyDiv = screen.getByTestId("story");
    expect(storyDiv).toBeInTheDocument();

    // Check if the banner image is in the document
    const bannerImg = screen.getByAltText("Banner");
    expect(bannerImg).toBeInTheDocument();
  });
});
