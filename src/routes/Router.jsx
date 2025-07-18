import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
// import Main from "../layouts/Main";
// import Home from "../pages/Home";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
