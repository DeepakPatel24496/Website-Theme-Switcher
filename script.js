const switcher = document.querySelector('#ThemeSwitcher');

navigator.geolocation.getCurrentPosition((position) =>{
    let sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
    let sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);

    if (isDay(sunset, sunrise)){
        setTheme('theme-light');
        }else{
            setTheme('theme-dark');

    }
    function isDay(sunset, sunrise){
        const NowHours = new Date().getHours();
        return NowHours >= sunrise.getHours() && NowHours < sunset.getHours();
    }
})


const defaultTheme = localStorage.getItem('theme') || 'theme-light';
setTheme(defaultTheme);


switcher.addEventListener('change', (e) =>{
    setTheme(e.target.value);
});

function setTheme(theme){
    theme = theme || 'theme-light';
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    switcher.value = theme;
}