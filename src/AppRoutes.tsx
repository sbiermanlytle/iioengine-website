import { Route, Routes } from "react-router-dom";
import { AppRoute } from "./types";

export interface AppRoutesProps {
  appRoutes: AppRoute[];
}

const AppRoutes = ({ appRoutes }: AppRoutesProps) => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route
          key={`route-${route.label}`}
          path={route.reactPath || route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
