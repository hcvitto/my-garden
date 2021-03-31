import shop from "./const";

const plants = [
  {
    id: "1",
    slug: "orazio",
    type: "Ficus benjamin",
    name: "Orazio",
    origin: "",
    images: { main: "", small: "" },
    arrrivalData: {
      boughtFrom: shop[0],
      date: "24 dicembre 2018",
      height: "",
      image: "",
    },
    cares: { soil: "", water: "", light: "", fertilization: "", repotting: "" },
  },
  {
    id: "2",
    slug: "bombolo",
    type: "Aloe vera",
    name: "Bombolo",
    origin: "",
    images: { main: "", small: "" },
    arrrivalData: {
      boughtFrom: shop[1],
      date: "6 giugno 2020",
      height: "",
      image: "",
    },
    cares: { soil: "", water: "", light: "", fertilization: "", repotting: "" },
  },
];

export default plants;
