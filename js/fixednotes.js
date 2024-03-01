function createNote(){
    const section = document.querySelector('.notes')
    const createElement = document.createElement('.fixednotes')
    var size = Math.random() * 60;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + "px";
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    },4000)
}

  
setInterval(createNote,100)