import { useFish } from './fishDataProvider.js'
import { FishList } from "./FishList.js"
const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()