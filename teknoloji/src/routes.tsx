import React from "react";
import { RouteObject } from "react-router-dom";
import Contact from "./pages/Contact";
import HomeEngineering from "./pages/HomeEngineering";
import CekiDemiri from "./pages/CekiDemiri";
import BrandPage from "./pages/BrandPage";
import ModelPage from "./pages/ModelPage";
import Marka from "./pages/Markalar";
import ProductsPage from "./pages/ProductsPage";
import Hakkimizda from "./pages/Hakkimizda";


const routes: RouteObject[] = [
  { path: "/", element: <HomeEngineering /> },
  { path: "/hakkimizda", element: <Hakkimizda /> },
  { path: "/contact", element: <Contact /> },
  { path: "/cekidemiri", element: <CekiDemiri /> },
  { path: "/cekidemiri/:brandName", element: <BrandPage /> },
  { path: "/cekidemiri/:brandName/:modelName", element: <ModelPage /> },
  { path: "/markalar/", element: <Marka/> },
  { path: "/markalar/:markaIsim", element: <ProductsPage /> }
];

export default routes;
