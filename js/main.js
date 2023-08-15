document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: ` 
        --move-x: ${(e.clientY - window.innerWidth / 2) * -.01}deg;
        --move-y: ${(e.clientX - window.innerWidth / 2) * -.01}deg;` //Определяет координаты курсора по X и Y
    })
})
