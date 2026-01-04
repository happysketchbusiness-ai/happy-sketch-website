import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("[main] mounting app...");

function ErrorBoundary({ children }: { children: React.ReactNode }) {
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const onError = (e: ErrorEvent) => {
			setError(e.message || String(e.error || e));
		};
		const onRejection = (e: PromiseRejectionEvent) => {
			try {
				const reason = (e.reason && (e.reason.message || String(e.reason))) || String(e.reason);
				setError(reason as string);
			} catch {
				setError("Unhandled promise rejection");
			}
		};

		window.addEventListener("error", onError);
		window.addEventListener("unhandledrejection", onRejection as any);
		return () => {
			window.removeEventListener("error", onError);
			window.removeEventListener("unhandledrejection", onRejection as any);
		};
	}, []);

	if (error) {
		return (
			<div style={{ padding: 24, color: "#7f1d1d", background: "#fff1f2", minHeight: "100vh" }}>
				<h2 style={{ marginTop: 0 }}>Application Error</h2>
				<pre style={{ whiteSpace: "pre-wrap" }}>{error}</pre>
				<p>Please check the development console for the full stack trace.</p>
			</div>
		);
	}

	return <>{children}</>;
}

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
);
