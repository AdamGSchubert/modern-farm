let field = []

/*
addPlant 
    takes an input of an object 
    checks if the object passed in is an array of objects 
        if true iterate and push the individual objects to the field
        else just push the object 


 usePlants
    create a new array that copies the field array and returns the copy out of the function.       
*/
export let addPlant = (seed) =>{
    if (Array.isArray(seed)){
        for (let corn of seed){
            field.push(corn)
        }
    }
    else {field.push(seed)
}
}

export let usePlants =()=>{
    let fieldCopy = [...field]
    return fieldCopy
}