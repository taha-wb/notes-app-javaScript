const notesWrapper = document.querySelector('#notes-wrapper');
const closeIcon = document.querySelector("#closeIcon");
const addCloseIcon = document.querySelector("#add-closeIcon");
const panel = document.querySelector('#window');
const addPanel = document.querySelector('#add-window');
const windowText = panel.querySelector('.window-text') ;
const deleteBtn = panel.querySelector('.deleteBtn');
const addBtn = document.getElementById('add-icon');
const addForm = document.getElementById('add-form');
const newInput = document.getElementById("text-area");
const submitBtn = document.getElementById('#submitBtn');

// adding funcionality to the close icon 


closeIcon.addEventListener('click',function(e){
  
  panel.style.display = 'none';
})




// deleting notes

deleteBtn.addEventListener('click' , function(e){
  Array.from(notes).forEach(note => {
    const noteText = note.querySelector('.text');
  
    if(noteText.textContent == windowText.textContent){
      
      notesWrapper.removeChild(note);
      panel.style.display = 'none';
    }
  })
})

// addin notes 
addBtn.addEventListener('click' , function(e){
  addPanel.style.display = 'flex' ;
})

// close button for add window 

addCloseIcon.addEventListener('click',function(e){
  
  addPanel.style.display = 'none';
})

// creating new notes 

addForm.addEventListener('submit' , function(e){
  e.preventDefault();
  const newValue = newInput.value ;
  const newNote = document.createElement('div');
  newNote.className = 'note';

  const newText = document.createElement('p');
  newText.className = 'text' ;

  newText.textContent = newValue ;

  newNote.appendChild(newText);
  notesWrapper.appendChild(newNote);

  addPanel.style.display = 'none';
  addingPopUpClickEvent(newNote);

})
// adding pop-up functionalities to notes

function addingPopUpClickEvent(item) {
 item.addEventListener('click' , e => {
    const text = e.target.querySelector('.text');
     
   
     windowText.textContent = text.textContent ;
     panel.style.display = 'flex';
  })
}

