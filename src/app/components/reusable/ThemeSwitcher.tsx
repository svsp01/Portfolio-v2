"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { MoonIcon, SunIcon } from "./Icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        checked={theme === "dark"}
        startContent={<SunIcon />}
        className="p-6"
        endContent={<MoonIcon />}
        onChange={(e) => setTheme( theme=== "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
      </Switch>
    </div>
  );
}
