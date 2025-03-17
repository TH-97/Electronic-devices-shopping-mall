import { Home } from "../pages/user/home";
import { LayoutHeader } from "../widgets/LayoutHeader";
import { AdminPage } from "../pages/admin/admin-home";
import { AdminAsideBar } from "../widgets/AdminAsideBar/ui/AdminAsideBar";
import { ParcelTrack } from "../pages/user/parcel-track";
import { LoginPage } from "../pages/user/login";

export const routers = [
  {
    path: "/",
    element: <LayoutHeader />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/parcel-tracking",
        element: <ParcelTrack />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminAsideBar />,
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
];
