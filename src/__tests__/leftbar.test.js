import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Leftbar from "../components/leftbar/Leftbar";

describe("Leftbar component", () => {
  it("renders and displays current user name", () => {
    const currentUser = {
      id: "1",
      name: "Test User",
      profilePic: "https://example.com/profile.jpg",
    };

    render(
      <AuthContext.Provider value={{ currentUser }}>
        <Router>
          <Leftbar />
        </Router>
      </AuthContext.Provider>
    );

    // Check if the user name is in the document
    const userName = screen.getByText("Test User");
    expect(userName).toBeInTheDocument();
  });
});
