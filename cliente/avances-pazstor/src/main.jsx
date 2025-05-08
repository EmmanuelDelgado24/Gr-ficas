import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "flowbite";
import Navbar from "./util/Navbar.jsx";
import Footer from "./util/Footer.jsx";
import Reloj from "./util/Reloj.jsx";
import { Socket } from "socket.io-client";
import AppRouter from "./router/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter>
      <>
        <body>
          <nav>
            <Navbar />
          </nav>
          <div>
            <Reloj />
          </div>
          <footer>
            <Footer />
          </footer>
        </body>
      </>
    </AppRouter>
  </StrictMode>
);