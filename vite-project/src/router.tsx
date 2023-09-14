import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Playground from "./pages/Playground.tsx";
import { Landing } from "./pages/Landing.tsx";
import { MainLayout } from "./components/MainLayout.tsx";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { Services } from "./pages/Services.tsx";
import { TorsPage } from "./pages/TorsPage.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="torspage" element={<TorsPage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Route>
      <Route path="/playground" element={<Playground />} />
      <Route path="/playground" element={<Playground />} />
    </>
  )
);
