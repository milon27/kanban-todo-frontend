import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../page/404/not-found.page";
import HomePage from "../page/home/home.page";
import LoginPage from "../page/login/login.page";
import { RouteUrl } from "./url";

export function RootRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={RouteUrl.HOME}
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path={RouteUrl.LOGIN}
            element={
              <>
                <LoginPage />
              </>
            }
          />
          <Route path={RouteUrl.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
