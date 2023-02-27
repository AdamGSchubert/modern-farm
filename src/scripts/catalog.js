/*
catalog function
    input array
        create empty html string
        iterate over the input array, 
            for each obj add html string + to the blank html string

    return the html string as output.
*/

export let catalog = (harvestedFood) =>{
    let foodHtml =""
    for (let food of harvestedFood){
        foodHtml += `<section class="plant">${food.type}</section>`
    }
    return foodHtml
}