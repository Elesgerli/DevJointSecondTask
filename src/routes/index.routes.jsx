import Home from "../pages/Home";
import SiteRoot from "../pages/SiteRoot";

export const ROUTES = [
    {
        path: '/',
        element: <SiteRoot />,
        children: [
            {
                index: true,
                element: <Home />,
            },
           
        ]
    },
 
];