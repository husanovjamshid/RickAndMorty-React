import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./components/pages/Home/Home";
import { News } from "./components/pages/News/News";
import { Weather } from "./components/pages/Weather/Weather";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "weather",
        element: <Weather />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);
