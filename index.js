    const container =  document.querySelector('.container');

    const hoverHandler = (e) => {
        const { target: button } = e;//
        button.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
        button.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
    };
    container.addEventListener("mouseover", hoverHandler);