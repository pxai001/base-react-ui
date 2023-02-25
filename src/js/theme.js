export function autoTheme() {
    autoDark();
}

export function autoDark() {
    //获取media信息对象
    let media = window.matchMedia('(prefers-color-scheme:dark)');
    if (media.matches) {
        setDark();
    } else {
        setLight();
    }
    //监听切换
    let callback = e => {
        let prefersDarkMode = e.matches;
        if (prefersDarkMode) {
            setDark();
        } else {
            setLight();
        }
    }
    if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', callback);
    } else if (typeof media.addListener === 'function') {
        media.addListener(callback);
    }
}

export function setDark() {
    document.documentElement.setAttribute('theme', 'dark');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#45494f');
    localStorage.setItem("dark", true);
}

export function setLight() {
    document.documentElement.removeAttribute('theme');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f2f2f2');
    localStorage.setItem("dark", false);
}
