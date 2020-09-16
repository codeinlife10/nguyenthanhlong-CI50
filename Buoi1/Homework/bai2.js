let $timer = document.getElementById('timer')
// let $change = document.getElementById('change')
let $contain = document.getElementById('contain')
console.log($contain.children[0])
var timeInterval

const countTime = () => {
    --$timer.innerHTML

    if($timer.innerHTML == "-1"){
        clearInterval(timeInterval)
        Run()
    }
}

const controller = () => {
    if($contain.children[0].classList.contains('red')){
        $contain.children[0].classList.remove('red')
        $contain.children[1].classList.toggle('yellow')
    }else if($contain.children[1].classList.contains('yellow')){
        $contain.children[1].classList.remove('yellow')
        $contain.children[2].classList.toggle('green')
    }else{
        $contain.children[2].classList.remove('green')
        $contain.children[0].classList.toggle('red')
    }
}

const Run = () => {
    //Timer
    $timer.innerHTML = "3"
    controller()
    timeInterval = setInterval(countTime,1000)   

}
