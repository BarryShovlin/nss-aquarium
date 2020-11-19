const fishCollection = [
  {
    name: "name: Schmitty",
    species: "species: Koi",
    food: "food: Your soul",
    location: "found at: Lake Wallenpaupak",
    length: "length: 24",
    image: "koi.jpg"
  },
  {
    name: "name: Squirrelly Pete",
    species: "species: Catfish",
    food: "food: Mousefish",
    location: "found at: The darkest corners of my nightmares",
    length: "length: 78",
    image: "catfish.jpg"
  },

    {
      name: "name: Dirty Mike",
      species: "species: Goldfish",
      food: "food: yes",
      location: "found at: Kroger Isle 4",
      length: "length: 3",
      image: "goldfish.jpg"
    },
 
    {
      name: "name: Slick Willis",
      species: "species: Cuddle Fish",
      food: "food: Twizzlers",
      location: "found at: Sid's Lab",
      length: "length: 12",
      image: "spider.jpg"
    }
]
  
  export const useFish = () => {
    return fishCollection.slice()
  }


