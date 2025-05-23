import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import View from "./pages/View";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-3xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
