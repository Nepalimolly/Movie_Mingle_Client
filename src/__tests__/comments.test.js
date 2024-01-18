import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContext } from "../context/authContext";
import Comments from "../components/comments/Comments";

describe("Comments component", () => {
  it("renders correctly", () => {
    const currentUser = {
      id: "1",
      name: "Test User",
      profilePic: "https://example.com/profile.jpg",
    };

    const queryClient = new QueryClient();

    render(
      <AuthContext.Provider value={{ currentUser }}>
        <QueryClientProvider client={queryClient}>
          <Comments postId="1" />
        </QueryClientProvider>
      </AuthContext.Provider>
    );

    // Check if the comments div is in the document
    const commentsDiv = screen.getByTestId("comments");
    expect(commentsDiv).toBeInTheDocument();
  });
});
