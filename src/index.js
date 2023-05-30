import virtualDom from "react-dom";
import React from "react";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import { Home } from "./pages/home";
import "./index.css";
let meeting = virtualDom.createRoot(document.getElementById("root"));
meeting.render(
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
     </Routes>
    </BrowserRouter>
)