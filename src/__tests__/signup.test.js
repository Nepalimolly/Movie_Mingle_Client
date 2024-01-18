import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../context/authContext";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "../Signup/Signup";

jest.mock("../App", () => () => <div>Mock App</div>);

test("should render Signup Component", () => {
  const mockContext = {
    currentUser: null,
    signup: jest.fn(),
  };

  render(
    <AuthContext.Provider value={mockContext}>
      <Router>
        <Signup />
      </Router>
    </AuthContext.Provider>
  );

  const signupButton = screen.getByRole("button", { name: /signup/i });
  expect(signupButton).toBeInTheDocument();

  const emailField = screen.getByPlaceholderText(/email/i);
  expect(emailField).toBeInTheDocument();

  const nameField = screen.getByPlaceholderText(/^name$/i);
  expect(nameField).toBeInTheDocument();

  const usernameField = screen.getByPlaceholderText(/^username$/i);
  expect(usernameField).toBeInTheDocument();
});
