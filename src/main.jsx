/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./CartContext";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.jsx";
import "./index.css";

function Fallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const queryClient = new QueryClient();

function AppSetup() {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={Fallback}>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <App />
          </CartProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<AppSetup />);
