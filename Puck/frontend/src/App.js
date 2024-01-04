import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import { EditorScreen } from "./Components/EditorScreen";
import ViewScreen from "./Components/ViewScreen";
import InventoryScreen from "./Screens/InventoryScreen";
import CatelogScreen from "./Screens/CatelogScreen";
import FundScreen from "./Screens/FundScreen";
import OrderScreen from "./Screens/OrderScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/editor" element={<EditorScreen />} />
          <Route path="/viewdraft" element={<ViewScreen />} />
          <Route path="/inventory" element={<InventoryScreen />} />
          <Route path="/catalog" element={<CatelogScreen />} />
          <Route path="/funds" element={<FundScreen />} />
          <Route path="/orders" element={<OrderScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
