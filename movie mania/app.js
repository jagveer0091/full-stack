/* Attaching Event listeners to different tags */

/* Get the element which we want to attach listener to.
   In this case the .delete class inside the li span
*/

var btns = document.querySelectorAll('#movie-list .delete');

btns.forEach(function(btn){
  // Each button is attached with the click event
  btn.addEventListener('click', function(e){

    /* we want to remove the li associated with which delete button we click.
    e.target will get me the element which was triggered (in this case <span class='delete'>)
    */
    var li = e.target.parentElement;

    /*
     This will remove the li which is the target in previous line.
     the target li has the parent ul. We fetch the parent and then delete the child
     by removeChild(li) method. li beong the taget li.
    */
    li.parentNode.removeChild(li)
  });
});
// Drawback of this method is that it will be expensive task to attach each button with event listeners
// TO check the drawback add the following code from developer console in html and try deleting the new element.


/*
  --> Event Bubbling and using it in deleting the movies
      We will assign event to the ul tag and when the delete button is clicked,
      event will bubble up to the ul and then we can delete the li associated to the event
  --> We are using the concept of Event Bubbling to attach the event to UI.
      Advantage: attaching the event to <ul> will help us delete any new <li> attached to movie-list
  --> Now this is good because if we have to add another movie to the list, we can delete it unlike the previous event listener.
*/

var list = document.querySelector('#movie-list ul');

list.addEventListener('click', function(e){
  if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
    var li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
    console.log(li);
    list.removeChild(li);
  }
})


// Add Movies

/* Interacting with forms and how we handle the submit button
  -> There are two forms in our application. One on the top for search and one to add the movies.
  -> in console write document.forms -> returns forms in our app.
  -> to access we can either do document.forms[0] --- for first form element
  -> document.forms['<by class-name>'] better to use cause easier to track.
  -> At the end of this we will know how to attach submit event listener to the form.
*/

const addForm = document.forms['add-movie'];

addForm.addEventListener('submit', function(e){
  // Prevent the default behaviour of submitting form i.e refresh
  e.preventDefault();

  // To extract the value(input text that we are entering) from the form we selected(addForm)
  var value = addForm.querySelector('input[type="text"]').value;


  // create element to add to the DOM with the value.
  // we have to check for the elements needed i.e-> li and 2 spans
  var li = document.createElement('li');
  var movieName = document.createElement('span');
  var deleteBtn = document.createElement('span');

  // Once we have created the element we need to appended it to the exact place.
  // first we append span to li and then we will append li to the respective ul
  li.appendChild(movieName);     // We have to make sure we follow the sequennce we append
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // add content inside the elements before we can append
  deleteBtn.textContent =  'delete';
  movieName.textContent = value;

  // add classes to the above elements
  // we can get add by li.className += " name " but this is not a good idea
  // Instead we use .classList.add
  // We can also use the generic way of .getAttribute('class') and set .setAttribute('class', 'new name')
  // if we need to remove attribute .removeAttribute('class')
  // if we want to check if the element as an attribute .hasAttribute.
  movieName.classList.add('name');
  deleteBtn.classList.add('delete');
})

//SEARCH BUTTON
var searchbar=document.forms['search-movies'].querySelector('input');
searchbar.addEventListener('keyup',function(e){
  var term=e.target.value.toLowerCase();
  var movies=list.getElementsByTagName('li');
  Array.from(movies).forEach(function(movie){
    var title=movie.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term)!=-1){
      movie.style.display='block';
    }else{
      movie.style.display='none';
    }
  })
});

//HIDE BUTTON
var hide=document.querySelector("#hide");
hide.addEventListener('change',function(e){
  if(hide.checked){
    list.style.display="none";
  }
  else {
    list.style.display="initial";
  }
});