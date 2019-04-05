let todos = document.getElementById('todos');

// DONE
document.querySelector('body').addEventListener('mouseover', function(event){
	if(event.target.classList.contains('item')){
	     let listItems = document.querySelectorAll('li');
         listItems.forEach(function(listItem){
	     listItem.addEventListener('click', function(){
	     this.classList.add('done')
	    })
     })
	}
})





// Add New Todo
let newTodo = document.querySelector('input[type="text"]');
newTodo.addEventListener('keypress', function(){
	let newTodoText = this.value;
     if ( event.which == 13 ) {
     	this.value = ""
        todos.innerHTML += "<li class='item'><span class='delete'><i class='fas fa-trash'></i></span> " + newTodoText + "</li>" ;
  }
})


// Delete Todo

document.querySelector('body').addEventListener('mouseover', function(event){
	if(event.target.classList.contains('delete')){
           // Delete
           let deleteBtns = document.querySelectorAll('li span');
           deleteBtns.forEach(function(deleteBtn){
	       deleteBtn.addEventListener('click', function(event){
		   this.parentElement.remove();
		   event.stopPropagation();
	       })
        })
	}
})


// Fading Effect For Input
document.getElementById('plusBtn').addEventListener('click', function(){
	document.querySelector('input').classList.toggle('fading')
})


// Type weiter effect
let title = document.querySelector('#title');
let i =0 ;
let txt = "Todo List";
function typewriter(){
	if(i<txt.length){
      title.innerHTML += txt.charAt(i);
        i++;
      setTimeout(typewriter, 250)
	}
}
// Execute The function
typewriter();