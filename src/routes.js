import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Character } from "./components/Character/Character";
import { Episode } from "./components/Episode/Episode";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Character />,
      },
      {
        path: "/episode/*",
        element: <Episode />,
      },
    ],
  },
]);
