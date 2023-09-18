function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function clearall(){
    localStorage.clear();
    ielement.innerHTML="";
    ghead.value="";
    gtext.value="";
    noTasks.innerHTML=0;
  }
  let it=0;
Summit.addEventListener("click", function(e){
    e.preventDefault();
    console.log(e);
    it++;
    noTasks.innerHTML=it;
    console.log(ghead.value);
    console.log(gtext.value);
    ielement.innerHTML+=`  <div class="alert alert-primary ch${it}" role="alert"><span class="btn  btn-danger btn-sm"> ${it}</span>
    <b id="mntext">${ghead.value}</b> <br>
    <p style="margin-left:30px">${gtext.value}</p>
</div>`;
localStorage.setItem(ghead.value, gtext.value);
    document.getElementById("myForm").style.display = "none";
})
del.addEventListener("click", function(e){
    localStorage.deleteItem(ghead.value);
    ghead.value="";
    gtext.value="";
})