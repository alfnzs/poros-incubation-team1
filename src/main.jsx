import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

import ProductDetailPage from "./pages/ProductDetailPage";
import DefaultLayout from "./layout/DefaultLayout";
import ProductContextProvider from "./context/ProductContextProvider";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/product/:id",
        element: <ProductDetailPage />,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ProductContextProvider>
            <RouterProvider router={router} />
        </ProductContextProvider>
    </React.StrictMode>
);
