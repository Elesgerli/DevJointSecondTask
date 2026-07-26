import './styles/css/style.css';
import { Suspense, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from './routes/index.routes';

function App() {

    const routes = createBrowserRouter(ROUTES);

    return (
        <Suspense fallback={<PulseLoader />}>
            <Toaster />
            <RouterProvider router={routes} />
        </Suspense>
    )
}

export default App