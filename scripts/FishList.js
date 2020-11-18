import { useFish } from './fishDataProvider.js'
import { Fish } from './Fish.js'
export const FishList = () => {
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    contentElement.innerHTML += 
    `<article class="fishList">
        
    </article>`

let fishHTMLRepresentations = ""
for (const fish of fishes) {
    const fishHTML = Fish(fish)
    contentElement.innerHTML += fishHTML
    }   
}