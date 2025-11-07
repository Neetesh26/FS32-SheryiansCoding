import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <AppRouter />
    </QueryClientProvider>
  </Provider>
);
