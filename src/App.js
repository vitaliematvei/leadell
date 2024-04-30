import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Crm from "./pages/Crm";
import Zoho from "./pages/Zoho";
import Case from "./pages/Case";
import Describe from "./pages/Describe";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NoPage />} />
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/zoho" element={<Zoho />} />
          <Route path="/case" element={<Case />} />
          <Route path="/describe" element={<Describe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
