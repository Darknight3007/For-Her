import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "@/pages/Experience";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Experience />} />
          <Route path="*" element={<Experience />} />
        </Routes>
      </BrowserRouter>
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}

export default App;
