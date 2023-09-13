import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App.tsx";
import Playground from "./pages/Playground.tsx";
import { Landing } from "./pages/Landing.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Landing />} />
            <Route path="/playground" element={<Playground />} />
        </>
    )
);
