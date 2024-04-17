function checkOperatingSystemTheme() {
    const preferDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if(preferDarkTheme) {
        document.body.classList.add('dark-theme');
    }
}

function toggleTheme() {
    const themeToggle = document.querySelector('#theme-toggle');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    checkOperatingSystemTheme();
    toggleTheme();
});
