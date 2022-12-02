var json = require('../../assets/colors/theme-orange.json');
const obj = JSON.parse(json);
console.log(obj.LightMode[0].background)

const ToggleDarkMode = ({ state }) => {
    console.log('on passe a l\'état ' + state + '.')
    if (state === true) {
        document.documentElement.style.setProperty('--background', '#232946');
        document.documentElement.style.setProperty('--headline', '#fffffe');
        document.documentElement.style.setProperty('--paragraph', '#b8c1ec');
        document.documentElement.style.setProperty('--button', '#eebbc3');
        document.documentElement.style.setProperty('--button-text', 'var(--headline)');
        document.documentElement.style.setProperty('--button-text-hover', 'var(--background)');
        document.documentElement.style.setProperty('--stroke', 'var(--headline)');
        document.documentElement.style.setProperty('--main', 'var(--paragraph)');
        document.documentElement.style.setProperty('--highlight', 'var(--button)');
        document.documentElement.style.setProperty('--secondary', 'var(--headline)');
        document.documentElement.style.setProperty('--tertiary', 'var(--button)');
    } else {
        document.documentElement.style.setProperty('--background', '#fef6e4');
        document.documentElement.style.setProperty('--headline', '#001858');
        document.documentElement.style.setProperty('--paragraph', '#172c66');
        document.documentElement.style.setProperty('--button', '#f582ae');
        document.documentElement.style.setProperty('--button-text', 'var(--headline)');
        document.documentElement.style.setProperty('--button-text-hover', 'var(--headline)');
        document.documentElement.style.setProperty('--stroke', 'var(--headline)');
        document.documentElement.style.setProperty('--main', '#f3d2c1');
        document.documentElement.style.setProperty('--highlight', 'var(--background)');
        document.documentElement.style.setProperty('--secondary', '#8bd3dd');
        document.documentElement.style.setProperty('--tertiary', 'var(--button)');
    }
}

export default ToggleDarkMode;