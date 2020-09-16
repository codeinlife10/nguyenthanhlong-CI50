// let yes = document.getElementById('yes')
// let no = document.getElementById('no')

// yes.addEventListener('mouseover',()=>{
//     if(yes.innerHTML == "Yes"){
//         yes.innerHTML = "No"
//         no.innerHTML = "Yes"
//         yes.style.background = 'red'
//         no.style.background = 'green'
//     }else{
//         yes.innerHTML = "Yes"
//         no.innerHTML = "No"
//         no.style.background = 'red'
//         yes.style.background = 'green'
//     }
// })
// no.addEventListener('mouseover',()=>{
//     if(no.innerHTML == "No"){
//          yes.innerHTML = "No"
//          no.innerHTML = "Yes"
//          no.style.background = 'green'
//          yes.style.background = 'red'
//     }else{
//         yes.innerHTML = "Yes"
//         no.innerHTML = "No"
//         yes.style.background = 'green'
//         no.style.background = 'red'
//     }
   
// })

let left = Math.random()*50 + 10 
let top = Math.random()*50 + 20 
    $('.no').click(function(){
         $('.no').animate({"left": `${left}`, "top": `${top}`},1000)
    })


// function troll(){
//     Dien dola => DOM
//     let $answers = document.getElementById('answers') 
//     if($answers.classList.contains('reverse')){
//           $answers.classList.remove('reverse')
//     }else{
//           $answers.classList.add('reverse')
//     }

//     document.getElementById('duoi').classList.toggle('reverse')
// }

// let maxTop = window.innerHeight - 100 
// let maxLeft = window.innerWidth - 200
// let randomTop = Math.random()*maxTop
// let randomLeft = Math.random()*maxLeft

// $no.style.position = 'absolute'
// $no.style.top = randomTop + 'px'
// $no.style.left = randomLeft + 'px'