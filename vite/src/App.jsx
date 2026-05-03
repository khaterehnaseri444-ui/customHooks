import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalTest from "./pages/ModalTest";
import HomePage from "./pages/HomePage";
import StarsTest from "./pages/StarsTest";
import PaginationTest from "./pages/PaginationTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/modal" element={<ModalTest />} />
        <Route path="/stars" element={<StarsTest />} />
        <Route path="/pagination" element={<PaginationTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
