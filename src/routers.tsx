import Home from "./routes/home";
import Layout from "./components/layout";

export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];
