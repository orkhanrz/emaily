import { useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchUser } from "./actions";

function App() {
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/surveys" element={<h1>Dashboard</h1>} />
          <Route path="/surveys/new" element={<h1>New survey</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
