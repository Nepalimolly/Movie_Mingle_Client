import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Login from "../Login/Login";

test("should render Login Component", () => {
  const mockContext = {
    login: jest.fn(),
  };

  render(
    <AuthContext.Provider value={mockContext}>
      <Router>
        <Login />
      </Router>
    </AuthContext.Provider>
  );

  const loginButton = screen.getByRole("button", { name: /login/i });
  expect(loginButton).toBeInTheDocument();

  const usernameField = screen.getByPlaceholderText(/^username$/i);
  expect(usernameField).toBeInTheDocument();

  const passwordField = screen.getByPlaceholderText(/^password$/i);
  expect(passwordField).toBeInTheDocument();
});
