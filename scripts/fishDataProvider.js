const fishCollection = [
    {
      name: "Dirty Mike",
      species: "Goldfish",
      food: "flakes",
      location: "Kroger Isle 4",
      length: 3,
      image: "goldfish.jpg"
    },
    {
      name: "Squirrelly Pete",
      species: "Catfish",
      food: "Mousefish",
      location: "The darkest corners of my nightmares",
      length: 78,
      image: "catfish.jpg"
    },
    {
      name: "Schmitty",
      species: "Koi",
      food: "Your soul",
      location: "Lake Wallenpaupak",
      length: 24,
      image: "koi.jpg"
    }
]
  
  export const useFish = () => {
    return fishCollection.slice()
  }