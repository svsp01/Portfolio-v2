'use client'
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/switch';
import { MoonIcon, SunIcon } from './Icons';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-2 sm:p-6">
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
