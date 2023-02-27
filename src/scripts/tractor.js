import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createSoybean } from "./seeds/soybean.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant, usePlants } from "./field.js"

/*
function creates blank array
iterates over the passed in array
iterate over the type
check the name of the plant
    if the plant name is x create the seed and add the seed obj to the field with the addPlant function.
    if corn do this for each obj (2 corn)

*/
export let plantSeeds = (plantPlan) =>{
    let seedArr =[]
    for (let plants of plantPlan){
        for (let plant of plants ){
            if (plant === "Asparagus"){
                addPlant(createAsparagus())
            }
            else if (plant === "Wheat"){
                addPlant(createWheat())
            } 
            else if (plant === "Potato"){
                addPlant(createPotato())
            } 
            else if (plant === "Soybean"){
                addPlant(createSoybean())        
            } 
            else if(plant === "Sunflower"){
                addPlant(createSunflower())
            }
            else if (plant === "Corn"){
                let ear = createCorn()
                for (let corn of ear){
                    addPlant(corn)
                }   
            }
        }
    }
    
}