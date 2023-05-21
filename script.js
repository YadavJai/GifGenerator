
let search=document.querySelector(".header button");
let input=document.querySelector(".header input");
const apikey="BT6pxYi631OE71bXh0IzsJprHZexfOka";
let container=document.querySelector(".container");
let loader=document.querySelector(".loader");

//for search button

search.addEventListener("click",async()=>{
let val=input.value;
loader.style.display="flex";
const childDivs = container.querySelectorAll('div');
childDivs.forEach(childDiv => childDiv.remove());
await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${val}`)
  .then(response=>response.json())
  .then(response=>{
  loader.style.display="none";
  const elements=response.data;
  elements.forEach(ele=>{
  let url=ele.images.original.url;
  const newDiv = document.createElement('div');
  newDiv.innerHTML= `<div class="part">
      <img
        src="${url}">
      <button class="link">
        Copy Link
      </button>
    </div>`; // Set the content of the new <div>
  newDiv.querySelector(".link").addEventListener("click",()=>{
   navigator.clipboard.writeText(url); 
  })
  container.appendChild(newDiv);
  })
  })
})

//ends here