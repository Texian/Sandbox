let wrappers = Array.from(document.getElementsByClassName("bladeWrapper"));

let blades = Array.from(document.getElementsByClassName("blade"));
    
function toggleActive(evt) {
    blades.forEach(blade => blade.classList.remove("active"));
    evt.target.classList.add("active");
}

wrappers.forEach(wrapper => wrapper.addEventListener('click', toggleActive));