import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

import "./scss/app.scss";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route index path="" element={<Home />} />
        <Route index path="cart" element={<Cart />} />
        <Route index path="pizza/:id" element={<FullPizza />} />
      </Route>
    </Routes>
  );
}

export default App;
