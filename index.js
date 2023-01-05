    const container =  document.querySelector('.container');

    const hoverHandler = (e) => {
        const { target: button } = e;//берем из события ивент его target и называем его button. 
        button.style.top = `${Math.floor(Math.random() * (window.innerHeight - button.clientHeight))}px`;//назначаем рондомное положение кнопки
        button.style.left = `${Math.floor(Math.random() * (window.innerWidth - button.clientWidth))}px`;
        console.log(button.clientHeight);//получаем размер кнопки через ее свойство
        console.log(button.clientWidth);

    };
    container.addEventListener("mouseover", hoverHandler);