import "@/index.css";
import "@/i18n/config.ts";

import { createRoot } from "react-dom/client";

import { App } from "@/App";
import { ErrorBoundary } from "@/components/ErrorBoundary";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
