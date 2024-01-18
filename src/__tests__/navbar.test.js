import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Navbar from "../components/navbar/Navbar";

describe("Navbar component", () => {
  it("renders correctly", () => {
    const currentUser = {
      id: "1",
      name: "Test User",
      profilePic: "https://example.com/profile.jpg",
    };

    render(
      <AuthContext.Provider value={{ currentUser }}>
        <Router>
          <Navbar />
        </Router>
      </AuthContext.Provider>
    );

    // Check if the navbar div is in the document
    const navbarDiv = screen.getByTestId("navbar");
    expect(navbarDiv).toBeInTheDocument();
  });
});
