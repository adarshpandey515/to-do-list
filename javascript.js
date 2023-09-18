function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  let it=0;
Summit.addEventListener("click", function(e){
    e.preventDefault();
    console.log(e);
    it++;
    noTasks.innerHTML=it;
    console.log(ghead.value);
    console.log(gtext.value);
    ielement.innerHTML+=`<div class="alert alert-primary ch${it}" role="alert">
    <b id="mntext">${ghead.value}</b> <br>
    ${gtext.value}
<div class="at" style="display: inline;"> <button id="del"class=" btn btn-lg btn-danger "><i class="fa-solid fa-trash fa-bounce"></i></button></div>
</div>`;
localStorage.setItem(ghead.value, gtext.value);
    document.getElementById("myForm").style.display = "none";
})
del.addEventListener("click", function(e){
    localStorage.deleteItem(ghead.value);
    ghead.value="";
    gtext.value="";
})