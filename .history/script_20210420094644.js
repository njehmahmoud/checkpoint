let btnPlus = document.getElementsByClassName("incr")
console.log(btnPlus)

for(let el of btnPlus){
    el.addEventListener('click', function(){
        el.nextElementSibling.nextElementSibling.value++
    })
}

let btnMoins = document.getElementsByClassName("decr")
console.log(btnMoins)

for(let el of btnMoins){
    if(value>0){
    el.addEventListener('click', function(){
               el.nextElementSibling.nextElementSibling.value--
    })
}}