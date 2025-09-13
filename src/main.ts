import './style.css'
import '@h0rn0chse/dark-mode-toggle/dist/bundle.min.css';
import '@mahozad/theme-switch/dist/theme-switch.min.js';

document.addEventListener('DOMContentLoaded', () => {
    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = "light";
    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";
    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");

    const theme = localStorage.getItem('theme') ?? 'light';

    // initialize theme based on local storage or default to light
    // but tailwind was already setting it to dark because of system preference
    if (theme === 'light' && document.documentElement.classList.contains('dark')) {
        (document.querySelector('theme-switch') as any)?.click();
    }
});

document.addEventListener("themeToggle", (event: any) => {
    console.log(`Old theme: ${event.detail.oldState}`);
    console.log(`New theme: ${event.detail.newState}`);

    if (event.detail.oldState === "auto") {
        document.documentElement.classList.remove("dark");
    } else {
        document.documentElement.classList.remove(event.detail.oldState);
    }

    if (event.detail.newState === "auto") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.add(event.detail.newState);
    }
});