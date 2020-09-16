let array = [5,5,3,5,4]


//Cach1 

// const uniSet = new Set(array)
// console.log(...uniSet)

//Cach2 
let newArray = []
let check = true
for(let i = 0 ; i < array.length ; i++){
    for(let j = i+1 ; j < array.length ; j++){
        if(array[i]==array[j]){
            check = false
            break
        }
    }
    if(check == true){
        newArray.push(array[i])
    }
    check = true
}
console.log(...newArray)


