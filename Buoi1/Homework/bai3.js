let array = [1,1,2,3,4]


//Cach1 

// const uniSet = new Set(array)
// console.log(...uniSet)

//Cach2 
// let newArray = []
// let check = true
// for(let i = 0 ; i < array.length ; i++){
//     for(let j = i+1 ; j < array.length ; j++){
//         if(array[i]==array[j]){
//             check = false
//             break
//         }
//     }
//     if(check == true){
//         newArray.push(array[i])
//     }
//     check = true
// }
// console.log(...newArray)

//Bai tap sau khi thay đổi đề :))

let countTime = {}

for(let i = 0 ; i < array.length ; i++){
    if(!(array[i] in countTime)){
        countTime[array[i]] = 1
    }else{
        countTime[array[i]]++
    }  
}

let newArray = []
for(let i = 0 ; i < array.length ; i++){
    if(countTime[array[i]] == 1){
        newArray.push(array[i])
    }
}

console.log(...newArray)

