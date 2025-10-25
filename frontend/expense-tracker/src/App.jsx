import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import Home from "./pages/Dashboard/Home";
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/dashboard" element={<Home />}></Route>
            <Route path="/income" element={<Income />}></Route>
            <Route path="/expense" element={<Expense />}></Route>
          </Routes>
        </Router>
      </div>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </UserProvider>
  );
};

export default App;

const Root = () => {
  //check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  //redirect to dahsboard if authenticated,otherwise to login

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
