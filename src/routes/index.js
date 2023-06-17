import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Room from "../pages/Room/Room";


export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Main />,
        children: []
    },
    {
        path: "/room/:id",
        element: <Room />,
        children: [],
        errorElement: <ErrorPage />,
    }
]);