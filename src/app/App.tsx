import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./routers";

const router = createBrowserRouter(routers);

function App() {
  return (
    <div style={{ minWidth: "1280px" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
