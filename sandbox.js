let wrappers = document.getElementsByClassName("bladeWrapper");

let blades = document.getElementsByClassName("blade");

for (let item of wrappers) {
    item.addEventListener('click', toggleActive);
}

function toggleActive() {
    for (let item of blades){
        item.classList.remove('active');
    }

    let activate = this.querySelector('.blade');
    activate.classList.add('active');

    console.log(activate);
    
}