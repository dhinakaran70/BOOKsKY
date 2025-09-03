var pop_box = document.querySelector(".popupbox")
var pop_overlay=document.querySelector(".overlay")
var pop_button=document.getElementById("popbutton")
pop_button.addEventListener("click",function(){
    pop_box.style.display="block";
    pop_overlay.style.display="block"
})
var pop_cancel=document.querySelector(".can-form")
pop_cancel.addEventListener("click",function(event){
event.preventDefault()
pop_box.style.display="none";
    pop_overlay.style.display="none"
})
var book_container=document.querySelector(".container")
var add_book=document.querySelector(".add-book")
var booktitleinput=document.getElementById("book-title")
var bookauthorinput=document.getElementById("bookauthor")
var bookdescrip=document.getElementById("book-description")
add_book.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h4>${bookauthorinput.value}</h4>
            <p>${bookdescrip.value}</p>
            <button onclick="deletefunc(event)">DeLeTe</button>`
    book_container.append(div)
    pop_box.style.display="none"
    pop_overlay.style.display="none"
})
 function deletefunc(event){
event.target.parentElement.remove()
 }    