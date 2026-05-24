let mylead=[]


const inputel=document.getElementById("input-el")
const inputbutton=document.getElementById("input-btn")
const ulel=document.getElementById("ul-el")
const deletebutton=document.getElementById("delete-btn")

const leadfromlocalstorage=JSON.parse(localStorage.getItem("myleads"))
if(leadfromlocalstorage){
  mylead= leadfromlocalstorage
  renderleads()
}

deletebutton.addEventListener("dblclick",function(){
  localStorage.clear()
  mylead=[]
  renderleads()
})

inputbutton.addEventListener("click",function(){ 
    mylead.push(inputel.value)
    inputel.value=""
    localStorage.setItem("myleads",JSON.stringify(mylead))
    renderleads()
  })

function renderleads(){
let listitem=""
for(let i=0;i<mylead.length;i++){
    listitem += "<li><a target='_blank' href=' "+mylead[i]+" '>" + mylead[i] + "</a></li>"

//alternative
//const li=document.createElement("li")
//li.textContent=mylead[i]
//ulel.append(li) 

}
ulel.innerHTML=listitem
}