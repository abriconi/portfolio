import { Route, Navigate, Routes } from "react-router-dom";
import App from "./App";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { AppRoutes } from "./routes";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Resume } from "./components/Resume/Resume";
import { Features } from "./components/Features/Features";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<App />}>
        <Route index element={<Navigate to={AppRoutes.About} replace />} />
        <Route path={AppRoutes.About} element={<AboutMe />} />
        <Route path={AppRoutes.Portfolio} element={<Portfolio />} />
        <Route path={AppRoutes.Resume} element={<Resume />} />
        <Route path={AppRoutes.Features} element={<Features />} />
        <Route path="*" element={<Navigate to={AppRoutes.About} replace />} />
      </Route>
    </Routes>
  );
};
