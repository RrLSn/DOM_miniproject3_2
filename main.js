const bodyEl = document.querySelector('body')
bodyEl.style.width = '100vw'
bodyEl.style.height = '100vh'
bodyEl.style.display = 'flex'
bodyEl.style.justifyContent = 'center'
bodyEl.style.fontFamily = 'segoe UI'
bodyEl.style.alignItems = 'center'
bodyEl.style.flexDirection = 'column'

const mainEl = document.createElement('div')
mainEl.textContent = 'Press Any Keyboard key'
mainEl.style.display = 'flex'
mainEl.style.justifyContent = 'center'
mainEl.style.fontSize = '3rem'
mainEl.style.fontWeight = '600'
mainEl.style.alignItems = 'center'
mainEl.style.width = '40%'
mainEl.style.marginBottom = '3rem '
mainEl.style.height = '7rem'
mainEl.style.boxShadow = '0 0 0.5rem 0 gray'

const codeEl = document.createElement('div')
bodyEl.addEventListener(
    'keydown',
    (e)=>{
        mainEl.textContent = 'You Pressed'
        const spanEl = document.createElement('span')
        spanEl.textContent = e.key
        spanEl.style.marginLeft = '0.9rem'
        spanEl.style.fontSize = '4rem'
        spanEl.style.color = '#5bbc7a'
        mainEl.appendChild(spanEl)

        codeEl.style.width = '5%'
        codeEl.textContent = e.keyCode
        codeEl.style.boxShadow = '0 0 0.5rem gray'
        codeEl.style.fontSize = '6rem'
        codeEl.style.display = 'flex'
        codeEl.style.justifyContent = 'center'
        codeEl.style.alignItems = 'center'
        codeEl.style.fontWeight = '600'
        codeEl.style.color = '#5bbc7a'
        codeEl.style.padding = '2rem 2.5rem'
    }
)

bodyEl.append(mainEl)
bodyEl.append(codeEl)