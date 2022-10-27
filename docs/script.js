btnDarkMode = document.querySelector('.toggle-btn');

btnDarkMode.addEventListener('click', () =>{
    
    const body = document.body;

    if(body.classList.contains('dark')){

        //MODE CLAIR :
        
        body.classList.add('light')
        body.classList.remove('dark')

        document.documentElement.style.setProperty('--background','#fef6e4')
        document.documentElement.style.setProperty('--headline','#001858')
        document.documentElement.style.setProperty('--paragraph','#172c66')
        document.documentElement.style.setProperty('--button','#f582ae')
        document.documentElement.style.setProperty('--button-text','var(--headline)')
        document.documentElement.style.setProperty('--button-text-hover','var(--headline)')
        document.documentElement.style.setProperty('--stroke','var(--headline)')
        document.documentElement.style.setProperty('--main','#f3d2c1')
        document.documentElement.style.setProperty('--highlight','var(--background)')
        document.documentElement.style.setProperty('--secondary','#8bd3dd')
        document.documentElement.style.setProperty('--tertiary','var(--button)')
        document.documentElement.style.setProperty('--background-image','url(assets/background-light.svg)')
        document.documentElement.style.setProperty('--post-image','url(assets/post-light.svg)')
        
    } else if(body.classList.contains('light')){
        
        //MODE SOMBRE :

        body.classList.add('dark')
        body.classList.remove('light')

        document.documentElement.style.setProperty('--background','#232946')
        document.documentElement.style.setProperty('--headline','#fffffe')
        document.documentElement.style.setProperty('--paragraph','#b8c1ec')
        document.documentElement.style.setProperty('--button','#eebbc3')
        document.documentElement.style.setProperty('--button-text','var(--headline)')
        document.documentElement.style.setProperty('--button-text-hover','var(--background)')
        document.documentElement.style.setProperty('--stroke','var(--headline)')
        document.documentElement.style.setProperty('--main','var(--paragraph)')
        document.documentElement.style.setProperty('--highlight','var(--button)')
        document.documentElement.style.setProperty('--secondary','var(--headline)')
        document.documentElement.style.setProperty('--tertiary','var(--button)')
        document.documentElement.style.setProperty('--background-image','url(assets/background-dark.svg)')
        document.documentElement.style.setProperty('--post-image','url(assets/post-dark.svg)')

    }
})