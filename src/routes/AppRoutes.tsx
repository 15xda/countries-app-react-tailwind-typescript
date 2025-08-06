import CountryInstpectPage from "../pages/CountryInspectPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/country/:countryName", element: <CountryInstpectPage /> },
  { path: "/*", element: <NotFound /> },
];

export { routes };
