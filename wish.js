cartArr=JSON.parse(localStorage.getItem("cartArr"))||[]
    wishArr= JSON.parse(localStorage.getItem("wishArr"))||[]
    function appenddata(wishArr){
 wishArr.map( (data,index)=> {
  var div = document.createElement("div");
  div.setAttribute("id","flex")
  //img,name,price,strikedoffprice

  // image creation
  var image = document.createElement("img");
  image.setAttribute("src", data.imageUrl);

  // name creation

  var name = document.createElement("p");
  name.textContent = data.name;

  var div4 = document.createElement("button")
    div4.setAttribute("id","car")
    div4.addEventListener("click",function(){
        functionad1(data)
    })  
    div4.innerHTML="<p>Add To Bag</p>"
    var remover = document.createElement('button')
  remover.textContent="Remove"
  remover.id="remove"
  remover.addEventListener('click',()=>{
     rem(index)
})

  div.append(image, name, div4,remover);
  document.querySelector("#container3").append(div);
 });
 function functionad1(data){
        cartArr.push(data)
        localStorage.setItem("cartArr",JSON.stringify(cartArr))        
    }
    
  }