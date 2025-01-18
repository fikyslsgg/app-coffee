import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Spin } from "antd";
import { Cart } from "./components/Cart/Cart.tsx";
import { Error } from "./components/Error/Error.tsx";
import "./index.css";

const queryClient = new QueryClient();
const App = lazy(() => import("./App.tsx"));
const router = createBrowserRouter([
	{
		path: "/app-coffee/",
		element: (
			<Suspense fallback={<Spin size="large" />}>
				<App />
			</Suspense>
		),
	},
	{
		path: "/app-coffee/cart",
		element: <Cart />,
	},
	{
		path: "/app-coffee/*",
		element: <Error />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	</StrictMode>,
);
