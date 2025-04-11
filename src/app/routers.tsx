import { Home } from "../pages/user/home";
import { LayoutHeader } from "../widgets/LayoutHeader";
import { AdminPage } from "../pages/admin/admin-home";
import { AdminAsideBar } from "../widgets/AdminAsideBar/ui/AdminAsideBar";
import { ParcelTrack } from "../pages/user/parcel-track";
import { LoginPage } from "../pages/user/login";
import { Cart } from "../pages/user/cart";
import { MyPage } from "../pages/user/myPage";
import { CreateAccount } from "../pages/user/create-account";
import { ProductPage } from "../pages/user/product";

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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/my-page",
        element: <MyPage />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
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
