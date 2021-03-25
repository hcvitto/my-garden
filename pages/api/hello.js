// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const plants = [
  {
    "id": "orazio",
    "type": "Ficus benjamin",
    "name": "Orazio",
    "origin": "",
    "images": {
      "main": "",
      "small": ""
    },
    "arrrivalData": {
      "boughtFrom": "",
      "date": "",
      "height": "",
      "image": ""
    },
    "cares": {
      "soil": "",
      "water": "",
      "light": "",
      "fertilization": "",
      "repotting": ""
    }
  },
  {
    "id": "bombolo",
    "type": "Aloe vera",
    "name": "Bombolo",
    "origin": "",
    "images": {
      "main": "",
      "small": ""
    },
    "arrrivalData": {
      "boughtFrom": "",
      "date": "",
      "height": "",
      "image": ""
    },
    "cares": {
      "soil": "",
      "water": "",
      "light": "",
      "fertilization": "",
      "repotting": ""
    }
  },
]

export default (req, res) => {
  res.status(200).json(plants)
}

