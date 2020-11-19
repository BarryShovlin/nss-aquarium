import { mostHolyFish, soldierFish, nonHolyFish } from './fishDataProvider.js'
import { Fish } from './Fish.js'


export const FishList = () => {
    const contentElement = document.querySelector(".fishList")


   
    const holyFish = mostHolyFish()
    const soldier = soldierFish()
    const loser = nonHolyFish()

   for (const fish of holyFish) {
       const fishHTML = Fish(fish)
       contentElement.innerHTML += fishHTML
   }

   for (const fish of soldier) {
       const fishHTML = Fish(fish)
       contentElement.innerHTML += fishHTML
   }
   
   for (const fish of loser) {
       const fishHTML = Fish(fish)
       contentElement.innerHTML += fishHTML
   }

}





//`<article class="fishList">
        
//</article>`

//let fishHTMLRepresentations = ""