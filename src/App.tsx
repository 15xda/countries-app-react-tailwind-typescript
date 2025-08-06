import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
