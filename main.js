let numbers= [1,2,3,4,5]


let iterate=(numbers,iteration)=>{
    iteration(numbers)
}

function iteration(num){
    num.forEach(e => {
        document.write(e+"<br>")
    })
}

iterate(numbers,iteration)