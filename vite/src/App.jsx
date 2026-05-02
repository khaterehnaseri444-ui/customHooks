import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalTest from "./pages/ModalTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ModalTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
