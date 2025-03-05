import Home from "./routes/home";
import Layout from "./components/layout";
import Login from "./routes/login";
import AdminPage from "./routes/admin-page";
import AdminLayout from "./components/admin/admin-layout";

export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
];
