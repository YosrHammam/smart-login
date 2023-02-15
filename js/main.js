// var recipeList=[]
// var myRequest=new XMLHttpRequest()
// myRequest.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza")
// myRequest.send()
// myRequest.addEventListener("readystatechange",function(){
// if(myRequest.status==200&&myRequest.readyState==4){
//     recipeList=JSON.parse(myRequest.response).recipes
//     console.log(recipeList)
//     display()
// }


// })

// function display(){
//     var temp=""
//     for(var i=0;i<recipeList.length;i++){
//         temp+=`<div class="col-md-4">
//         <div class="item border">
//     <h2>`+recipeList[i].title+`</h2>
//     <img src="`+recipeList[i].image_url+`" class="w-100" alt="">
//     </div>
// </div>`}
//     document.getElementById("myRow").innerHTML=temp
// }
let person={
name:"yosr",
age:"22",
salary:5000,
calcSalary:function(){
    let calcTax=()=>{
        return this.salary*0.15
    }
    return this.salary+calcTax()
}


}
let x=person.calcSalary()
console.log(x);