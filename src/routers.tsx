import Home from "./routes/home";
import Layout from "./components/layout";
import Login from "./routes/login";

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
];
