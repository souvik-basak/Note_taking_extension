const container = document.querySelector(".notesContainer");
const button = document.querySelector("button");
let notes = document.querySelectorAll(".input_Box");

function showNotes() {
    container.innerHTML=localStorage.getItem("notes")
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes",container.innerHTML);
}

button.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input_Box";
    inputBox.setAttribute("contenteditable","true");
    img.src="delete.png";
    container.appendChild(inputBox).appendChild(img);
})

container.addEventListener("click",function(fn){
    if(fn.target.tagName==="IMG"){
        fn.target.parentElement.remove();
        updateStorage();
    }
    else if(fn.target.tagName==="P"){
        notes=document.querySelectorAll(".input_Box");
        notes.forEach(nt=>{
            nt.onkeyup=()=>{
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})