import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { OtherComponent } from "./components/OtherComponent";


enum Routes1 {
  Home = "/",
  About = "about",
  Other = "other",
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Routes1.Home} element={<App />}>
        <Route index element={<Navigate to={Routes1.About} replace />} />
        <Route path={Routes1.About} element={<AboutMe />} />
        <Route path={Routes1.Other} element={<OtherComponent />} />
        <Route path="*" element={<Navigate to={Routes1.About} replace />} />
      </Route>
    </Routes>
  );
};
