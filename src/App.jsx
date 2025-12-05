import "./App.css";
import Home from "./pages/home";
import Tour from "./pages/tour";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import About from "./pages/about";
import AddTour from "./pages/addTour";
import ListTour from "./pages/listTour";
import EditTour from "./pages/editTour";
import Register from "./pages/register";
import Login from "./pages/login";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Public routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddTour />
              </ProtectedRoute>
            }
          />

          <Route
            path="/list"
            element={
              <ProtectedRoute>
                <ListTour />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <EditTour />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
