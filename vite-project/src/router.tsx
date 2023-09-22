import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Playground from "./pages/Playground.tsx";
import { Landing } from "./pages/Landing.tsx";
import { MainLayout } from "./components/MainLayout.tsx";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { Services } from "./pages/Services.tsx";
import { TorsPage } from "./pages/TorsPage.tsx";
import { Flex } from "./pages/Flex.tsx";
import { MatrixPage } from "./pages/MatrixPage.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Landing />} />
                <Route path="home" element={<Home />} />
                <Route path="torspage" element={<TorsPage />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="flex" element={<Flex />} />
            </Route>
            <Route path="matrix" element={<MatrixPage />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/playground" element={<Playground />} />
        </>
    )
);
