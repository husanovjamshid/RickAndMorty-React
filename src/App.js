import { Header } from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Weather } from "./components/pages/Weather/Weather";
import { News } from "./components/pages/News/News";
import { Home } from "./components/pages/Home/Home";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />

        <Route path="news/*" element={<News />}>
          <Route index element={<Navigate to="uzbek" />} />
          <Route path="jahon" element={<h3>Jahon Yangiliklari</h3>} />
          <Route path="uzbek" element={<h3>O'zbekiston Yangiliklari</h3>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
