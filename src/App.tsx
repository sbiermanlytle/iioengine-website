import "./App.css";
import AppRoutes from "./AppRoutes";
import { BackgroundColor } from "./components/styles/BackgroundColor";
import { bgBlack } from "./constants/colors";
import ApiPage from "./pages/ApiPage";
import DemoPage from "./pages/DemoPage";
import HomePage from "./pages/HomePage";
import BaseThemeProvider from "./themes/BaseTheme";
import { AppRoute } from "./types";

const APP_ROUTES: Record<string, AppRoute> = {
  home: {
    path: "/",
    reactPath: "/*",
    label: "Home",
    element: <HomePage />,
    // icon: <DashboardIcon color="primary" />,
  },
  api: {
    path: "/api",
    label: "Api",
    element: <ApiPage />,
    // icon: <DashboardIcon color="primary" />,
  },
  demos: {
    path: "/demos",
    label: "Demos",
    element: <DemoPage />,
  },
};

export const IIO_ENGINE_ROUTES: AppRoute[] = Object.keys(APP_ROUTES).map(
  (key) => APP_ROUTES[key]
);

function App() {
  return (
    <BaseThemeProvider>
      <BackgroundColor color={bgBlack} />
      <AppRoutes appRoutes={IIO_ENGINE_ROUTES} />
    </BaseThemeProvider>
  );
}

export default App;
