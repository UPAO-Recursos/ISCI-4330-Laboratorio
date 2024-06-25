import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { createRoot } from "react-dom/client";
import Main from "./main";
import Aside from "./aside";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Single from './single';
import Basic from './layout/basic';
import Adoptar from './pages/adoptar/adoptar';
import Catalogo from './pages/catalogo/catalogo';
import Carrito from './pages/carrito/carrito';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="col-md-8">
                        <Main></Main>
                    </div>
                    <div className="col-md-4">
                        <Aside></Aside>
                    </div>
                </>
            },
            {
                path: "detalle/:slug",
                element: <Single />,
            },
        ],
    },
    {
        path: "/adoptar",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <Adoptar />
            }
        ],
    },
    {
        path: "/carrito",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <Carrito />
            }
        ],
    },
    {
        path: "/catalogo",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <Catalogo />
            }
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);