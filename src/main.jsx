import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";
import AuthContext from "./context/AuthContext.jsx";
import ColorProvider from "./components/hook/ColorProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorProvider>
      <AuthContext>
        {" "}
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AuthContext>
    </ColorProvider>
  </StrictMode>
);
