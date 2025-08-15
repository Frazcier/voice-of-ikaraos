(function () {
    const root = document.documentElement;
    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
    root.setAttribute("data-theme", currentTheme);
    updateThemeButton(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const now = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", now);
            localStorage.setItem("theme", now);
            updateThemeButton(now);
        });
    }

    function updateThemeButton(theme) {
        if (!themeToggle) return;
        const isDark = theme === "dark";
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.title = isDark ? "Swith to light mode" : "Switch to dark mode";
        themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
    }
})();