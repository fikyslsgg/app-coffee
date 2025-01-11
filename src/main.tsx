import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { Cart } from "./components/Cart/Cart.tsx";
import "./index.css";

const queryClient = new QueryClient();
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/cart",
		element: <Cart />,
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
