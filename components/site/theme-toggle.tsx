"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

const KEY = "atlas-theme";
type Theme = "light" | "dark";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Theme {
  const stored = localStorage.getItem(KEY) as Theme | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeToggle() {
  const theme = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const onToggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    localStorage.setItem(KEY, next);
    window.dispatchEvent(new StorageEvent("storage", { key: KEY }));
  };

  return (
    <Button variant="secondary" size="sm" onClick={onToggle}>
      {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
    </Button>
  );
}
