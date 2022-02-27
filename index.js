async function  apicall(u){
    let res = await fetch(u)
    let data  =  await res.json()
   
    return data;
}
var cartArr = JSON.parse(localStorage.getItem("cartArr"))||[]

function appenddata(parent,data){
    console.log(data)
    data.map(element => {
        let div = document.createElement('div')
        parent.append(div)
        let img =  document.createElement('img')
        img.setAttribute('id','imgid')
        img.src=element.image_link
        div.append(img)

        
        let para2 = document.createElement('p')
        para2.innerText="name:"+element.name
        div.append(para2)

        let para = document.createElement('p')
        para.innerText="price:"+element.price
        div.append(para)

        let para1 = document.createElement('p')
        para1.innerHTML="discount price: "+element.price
        div.append(para1)
        
        let but =document.createElement('button')
        but.textContent='add to cart'
        but.addEventListener('click',()=>{
            cartArr.push(element)
            localStorage.setItem('cartArr',JSON.stringify(cartArr))
        })
        div.append(but)

         
    });
  
}

 export {apicall,appenddata}
