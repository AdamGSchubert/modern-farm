// define and export harvestPlants function
//must accept the plant arr as input
// returns array of seed obj
//iterate the array of growing plants 
//

/*
harvestPlants
    input of an array
    create blank array
    iterate over the input array
        if the object does not equal corn
            iterate for each number of output and push object to the blank seed array

        if obj = corn, iterate for number of output/2 as sold half output to ranchers.
            then push to seed array.

return the seed array.
*/

export let harvestPlants = (plantArr) =>{
   let seed=[]
    for (let plant of plantArr){
        if (plant.type != "Corn"){
        for (let i = 0; i < plant.output; i++){
            seed.push(plant)
       }
      }
      else 
        for (let i = 0; i < (plant.output/2); i++){
            seed.push(plant)
      }
    }
   return seed 
}