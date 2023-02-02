import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Character } from "./components/Character/Character";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Character />,
      },
    ],
  },
]);
