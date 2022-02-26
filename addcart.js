
cartArr = JSON.parse(localStorage.getItem("cartArr"))||[]

function appenddata(cartArr){
    document.querySelector("#container2").innerHTML="";

 cartArr.map( (data,index) => {
  var div = document.createElement("div");
  div.setAttribute("id","flex")
  //img,name,price,strikedoffprice

  // image creation
  var image = document.createElement("img");
  image.src=data.image_link

  // name creation

  var name = document.createElement("p");
  name.textContent = data.name;

  // price creation

  var div2 = document.createElement("div");
  div2.setAttribute("class", "flex");

  var p1 = document.createElement("p");
  p1.textContent = "$"+data.price;

  var p2 = document.createElement("p");
  p2.innerHTML = (Number(data.price)*1.5).toFixed(2);
  p2.setAttribute("id","strike")
  // p2.style.textDecoration = "line-through";

  var remover = document.createElement('button')
  remover.textContent="Remove"
  remover.id="remove"
  remover.addEventListener('click',()=>{
     rem(index)
})

  div2.append(p1, p2);

  //append
  div.append(image, name, div2,remover);
  document.querySelector("#container2").append(div);
 });
 var total = cartArr.reduce((ac,cv)=>{
    return ac+Number(cv.price);
 },0)
    document.querySelector(".sub").innerText= total
     functiondist=()=>{ 
        var x = Number(document.querySelector(".dist").value)
         if(x==""){
             document.querySelector("#offers").disabled=true
         }
         else{
            document.querySelector("#offers").disabled=false
            if(x<=25){ 
            document.querySelector("h3").innerHTML="Total " +Number(total);
            total = total;
            document.querySelector(".ship").innerHTML="Free"
         }
         else if(x<=50){
             document.querySelector("h3").innerHTML="Total "+Number(total+25)
             total = total + 25;
             document.querySelector(".ship").innerHTML=25
         }
         else{
             document.querySelector("h3").innerHTML="Total "+Number(total+50)
             total = total+50;
             document.querySelector(".ship").innerHTML=50
         }
        }
}
     offer=()=>{
  var offers = document.getElementById("offers").value
  if(offers=="MASAI25"){
    total1 = (total-(0.25*total))
    document.querySelector("h3").innerHTML="Total "+ total1.toFixed(2);
    alert("Promo Applied !")
  }
  else{
    total1 = (total)+25;
    alert("Not a valid code")
    document.querySelector("h3").innerHTML="Total "+total1
  }
}
}
appenddata(cartArr)
function rem(index){
   cartArr.splice(index,1)
   localStorage.setItem('cartArr',JSON.stringify(cartArr))
   appenddata(cartArr)
}