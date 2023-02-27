/*define a function to create seed
//function should be named like createCorn
use an arrow function 

each function should return an object with following properties
    type soybean
    height  20
    output  4

corn is exception
    return an array with 2 identical objects each with proper 'keys" and values
//export function 


*/

export let createSoybean = () =>{//creates seed object with properties
    let soybean ={
        type: "Soybean",
        height: 20,
        output: 4
    }
    return soybean
}