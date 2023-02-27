/*define a function to create seed
//function should be named like createCorn
use an arrow function 

each function should return an object with following properties
    type corn
    height 180
    output  6

corn is exception
    return an array with 2 identical objects each with proper 'keys" and values
//export function 


*/

export let createCorn = () =>{//creates 2 seed object with properties
    let corn =[
        {
        type: "Corn",
        height: 180,
        output: 6 
        },
        {
        type: "Corn",
        height: 180,
        output: 6  
        }

    ]
    return corn
}