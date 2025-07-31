// components/ThemeSwitcher.tsx
import React, { useEffect, useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { primeReactThemes } from '../themes';

interface ThemeOption {
    label: string;
    value: string;
    color: string;
}

const themeColors: Record<string, string> = {
    'bootstrap4-light-blue': '#007bff',
    'bootstrap4-light-purple': '#6f42c1',
    'lara-light-amber': '#ffc107',
    'lara-light-blue': '#2196f3',
    'lara-light-cyan': '#00bcd4',
    'lara-light-green': '#4caf50',
    'lara-light-indigo': '#3f51b5',
    'lara-light-pink': '#e91e63',
    'lara-light-purple': '#9c27b0',
    'lara-light-teal': '#009688',
    'mdc-light-deeppurple': '#673ab7',
    'mdc-light-indigo': '#3f51b5',
    'md-light-deeppurple': '#673ab7',
    'md-light-indigo': '#3f51b5',
    'soho-light': '#607d8b',
    'viva-light': '#00BCD4'
};

const ThemeSwitcher = () => {
    const [selectedTheme, setSelectedTheme] = useState<string>('lara-light-green');
    const op = useRef<OverlayPanel>(null);

    const themeOptions: ThemeOption[] = Object.entries(primeReactThemes).map(([label, value]) => ({
        label,
        value,
        color: themeColors[value] || '#ccc'
    }));

    const loadTheme = (theme: string) => {
        const existingLink = document.getElementById('theme-css') as HTMLLinkElement;

        if (existingLink) {
            existingLink.href = `themes/${theme}/theme.css`;
        } else {
            const link = document.createElement('link');
            link.id = 'theme-css';
            link.rel = 'stylesheet';
            link.href = `themes/${theme}/theme.css`;
            document.head.appendChild(link);
        }

        localStorage.setItem('theme', theme);
        setSelectedTheme(theme);

        // Dispatch theme change event
        setTimeout(() => {
            window.dispatchEvent(new Event('themeChanged'));
        }, 100);
    };

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved) loadTheme(saved);
        else loadTheme(selectedTheme);
    }, []);

    return (
        <div className="flex align-items-center">
            <Button
                icon="pi pi-palette"
                onClick={(e) => op.current?.toggle(e)}
                aria-haspopup
                aria-controls="theme_panel"
                size='small'
                outlined
            />

            <OverlayPanel ref={op} id="theme_panel">
                <div className="grid grid-cols-6 gap-2 p-2 w-[200px]">
                    {themeOptions.map((theme) => (
                        <Button icon="pi pi-palette"
                            key={theme.value}
                            onClick={() => {
                                loadTheme(theme.value);
                                op.current?.hide();
                            }}
                            style={{ color: theme.color }}
                            title={theme.label}
                            size='small'
                            text
                            rounded
                        />
                    ))}
                </div>
            </OverlayPanel>
        </div>
    );
};

export default ThemeSwitcher;
