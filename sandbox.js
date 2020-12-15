// Get the needed div elements
let wrappers = Array.from(document.getElementsByClassName("bladeWrapper"));
let blades = Array.from(document.getElementsByClassName("blade"));
//.getElements returns as an HTMLCollection and must be converted to an array  

//First, remove any existing 'active' classes, then add 'active' to the clicked element if it's a 'blade' element
function toggleActive(evt) {
    blades.forEach(blade => blade.classList.remove("active"));
    if (evt.target.classList.contains("blade")) {
        evt.target.classList.add("active");
    }
}

//Add the eventListener to all of the wrapper elements
wrappers.forEach(wrapper => wrapper.addEventListener('click', toggleActive));