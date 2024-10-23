import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AccountsPage from "../pages/AccountsPage";
import AddAccountPage from "../pages/AddAccountPage";

const router = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout />,
        children: [
            {
                path: "",
                element: <AccountsPage />
            },
            {
                path: "/add",
                element: <AddAccountPage />
            },
            {
                path: "/edit",
                element: <h1>Edit Accounts View</h1>
            },
        ]

    }
])


export default router