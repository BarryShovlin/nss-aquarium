const fishCollection = [
  {
    name: "name: Schmitty",
    species: "species: Koi",
    food: "food: Your soul",
    location: "found at: Lake Wallenpaupak",
    length: 24,
    image: "koi.jpg"
  },
  {
    name: "name: Squirrelly Pete",
    species: "species: Catfish",
    food: "food: Mousefish",
    location: "found at: The darkest corners of my nightmares",
    length: 67,
    image: "catfish.jpg"
  },

    {
      name: "name: Dirty Mike",
      species: "species: Goldfish",
      food: "food: yes",
      location: "found at: Kroger Isle 4",
      length: 3,
      image: "goldfish.jpg"
    },
 
    {
      name: "name: Slick Willis",
      species: "species: Cuddle Fish",
      food: "food: Twizzlers",
      location: "found at: Sid's Lab",
      length: 12,
      image: "spider.jpg"
    }
]
  
  export const useFish = () => {
    return fishCollection.slice()
  }


  export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = [] 

    for (const fish of fishCollection) {
      if (fish.length % 3 === 0)
        holyFish.push(fish)
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of fishCollection) {
      if (fish.length % 5 === 0 && fish.length % 3 !== 0)
        soldiers.push(fish)
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const unworthy = []
    for (const fish of fishCollection) {
      if (fish.length % 3 !== 0 && fish.length % 5 !== 0)
      unworthy.push(fish)
    }
    return unworthy
}