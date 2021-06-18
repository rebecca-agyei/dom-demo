
const addMovieModal = document.querySelector('.modal');
const addMovieBtn = document.getElementsByTagName('header')[0].lastElementChild;
const backdrop = document.getElementById('backdrop');
const add = document.querySelector('.btn--success')
movielist = [];

addMovieBtn.addEventListener('click',(e)=>{ 
    addMovieModal.style.display='block';
    backDropToogle();a
})

function backDropToogle(){
    if( addMovieModal.style.display==='block'){
        backdrop.style.display='block';
        backdrop.style.pointerEvents='auto';
    }
    else{
        backdrop.style.display='none';
    }
}

function closeModal(){
    addMovieModal.style.display='none';
    backdrop.style.display='none';
}

function closeBackdrop(){
    backdrop.style.display='none';
    addMovieModal.style.display='none';
    backdrop.style.pointerEvents='none';
  
}
document.querySelector('.btn--passive').addEventListener('click',()=>{
    closeModal();
    clearInputs
})
backdrop.addEventListener('click',()=>{
    closeBackdrop();
    clearInputs();
   
})

add.addEventListener('click',()=>{addMovieBtns()})

function addMovieBtns(){
 const title = document.getElementById('title').value;
 const rating = document.getElementById('rating').value;
 const url = document.getElementById('image-url').value;
 mymovies={};
  if(title==="" || +rating < 1 || +rating > 5 || url===""  ){ 
      window.alert('Oops..Please enter valid values')
      return
  }
  else{
     mymovies.title=title;
     mymovies.rating=rating;
     mymovies.url=url;
     movielist.push(movielist);
     clearInputs();
     closeModal();
    
    
    }
}

function clearInputs(){
 document.getElementById('title').value = "";
 document.getElementById('rating').value="";
 document.getElementById('image-url').value="";
}