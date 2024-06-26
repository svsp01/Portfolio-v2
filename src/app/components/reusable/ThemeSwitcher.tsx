'use client'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/switch';
import { MoonIcon, SunIcon } from './Icons';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-6">
      <Switch
        checked={theme === 'dark'}
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onChange={(e) => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle theme"
      />
    </div>
  );
}
