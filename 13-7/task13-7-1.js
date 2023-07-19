
// function showData(){
//     let html="<table border=2px>";
//     html+="<tr>";
//     html+="<th>"+"User Name"+"</th>";
//     html+="<th>"+"User Email"+"</th>";
//     html+="</tr>";
//     for (let index = 0; index < data.length; index++) {
        
//         html+="<tr>";
//         html+="<td>"+data[index].name+"</td>";
//         html+="<td>"+data[index].email+"</td>";
//         html+="</tr>";
        
//     }
//     html+="</table>";
//     document.getElementById("data").innerHTML=html;
// }
// let button=document.getElementById("hide");
// button.addEventListener("click",function hideData(){
//     document.getElementById("data").innerHTML="";

// })
function show(){
    document.getElementById("data").style.border="1px solid black";
    document.getElementById("data").style.width="30%"
    document.getElementById("data").style.height="10%"
    document.getElementById("data").style.background="gray"



    document.getElementById("data").innerHTML="loremlorelorelorjvjrehvujervujrvrnvjkrnvr<br>ehfvgvyyuwrfuyfjiiji<br>emjvnjfv"

    
}





function hide(){


    

   
    document.getElementById("data2").style.display="none"

}



















