let Addbtn=document.getElementById("Add-btn");
let savenotediv=document.getElementById("savenotediv");
let savedel=document.getElementById("savdel");
let notewrite=document.getElementById("notewrite");
let savednotes=[];
let current=0;

const notes=localStorage.getItem("SavedNotes");
if(notes!==null){
    savednotes=JSON.parse(notes);

}

    displayNotes();

function displayNotes() {
    savenotediv.innerHTML = "";

    savednotes.forEach(function (note) {
        let savecard = document.createElement("div");
        savecard.classList.add("savecard");

        let p = document.createElement("p");
        let span=document.createElement("span");
        p.textContent =note;
        span.textContent="X";
        span.classList.add("span");
        savecard.appendChild(p);
        savecard.appendChild(span);
        savenotediv.appendChild(savecard);
        span.addEventListener("click",function(){
            savednotes=savednotes.filter(item=>item!==note);
            localStorage.setItem("SavedNotes",JSON.stringify(savednotes));

            displayNotes();
        })
    });
}



Addbtn.addEventListener("click",function(){
    let ptextarea=document.querySelector("textarea");
if(ptextarea){
    return;
}
    
    let savebtn=document.createElement("button");
    savebtn.classList.add("txtbtn");
    savebtn.textContent="💾 Save";
    let discardbtn=document.createElement("button");
    discardbtn.classList.add("txtbtn2");
    discardbtn.textContent="🚫 Cancel";
    let textarea=document.createElement("textarea");
    textarea.classList.add("textarea");
    notewrite.append(textarea);
    savedel.append(savebtn,discardbtn);
    savedel.classList.add("savedel");

    savebtn.addEventListener("click",function(){
        if(textarea.value===""){
            return;
        }else{
            savednotes.push(textarea.value); 
           let strnote= JSON.stringify(savednotes);
           displayNotes();   
           textarea.value = "";
          localStorage.setItem("SavedNotes",strnote)       
        }
         current++;
    })
    discardbtn.addEventListener("click",function(){
        textarea.remove();
        discardbtn.remove();
        savebtn.remove();
    })
})


