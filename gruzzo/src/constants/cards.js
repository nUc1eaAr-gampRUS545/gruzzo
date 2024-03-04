
const createStreets = (streetsNames) => {
  let massiv = [];
  streetsNames.map((data) => {

       return massiv.push({
        name: data,
        cities: [...createAdress(data)],
      });
    });
  return massiv;
};
const createAdress = (name) => {
  let massiv = [];
  for (let i = 1; i <= 100; i+=3) {
    massiv.push({ cname: `${name} ${i}` });
  }
  return massiv;
};
const cards = [
  {
    id: 1,
    title: "Warehousing , Distrbution",
    img: require("../assets/images/project-1.jpg"),
    body: "Warehouse inventory",
  },
  {
    id: 2,
    title: "Logistics, Analytics",
    img: require("../assets/images/project-2.jpg"),
    body: "Minimize Manufacturing",
  },
  {
    id: 3,
    title: "Warehousing , Distrbution",
    img: require("../assets/images/project-3.jpg"),
    body: "Warehouse inventory",
  },
  {
    id: 4,
    title: "Logistics, Analytics",
    img: require("../assets/images/project-4.jpg"),
    body: "Minimize Manufacturing",
  },
  {
    id: 5,
    title: "Warehousing , Distrbution",
    img: require("../assets/images/project-5.jpg"),
    body: "Warehouse inventory",
  },
  {
    id: 6,
    title: "Logistics, Analytics",
    img: require("../assets/images/project-6.jpg"),
    body: "Minimize Manufacturing",
  },
];
export default cards;

const Center = [
  "Гагарина",
  "Кирова",
  "Плеханова",
  "Рылеева",
  "Ленина",
  "Суворова",
  "Луначарского",
];
const RightBank=["Генерала Попова", "Cпартака", "Комфортная","Минская"]
export const streets = [
  {
    name: "Центр",
    states: [...createStreets(Center)],
  },
  {
    name: "Правый Берег",
    code: "CA",
    states: [...createStreets(RightBank)],
  },
  {
    name: "Московская площадь",
    code: "US",
    states: [
      {
        name: "California",
        cities: [
          { cname: "Los Angeles", code: "US-LA" },
          { cname: "San Diego", code: "US-SD" },
          { cname: "San Francisco", code: "US-SF" },
        ],
      },
      {
        name: "Florida",
        cities: [
          { cname: "Jacksonville", code: "US-JA" },
          { cname: "Miami", code: "US-MI" },
          { cname: "Tampa", code: "US-TA" },
          { cname: "Orlando", code: "US-OR" },
        ],
      },
      {
        name: "Texas",
        cities: [
          { cname: "Austin", code: "US-AU" },
          { cname: "Dallas", code: "US-DA" },
          { cname: "Houston", code: "US-HO" },
        ],
      },
    ],
  },
  {
    name: "Терепец",
    code: "US",
    states: [
      {
        name: "California",
        cities: [
          { cname: "Los Angeles", code: "US-LA" },
          { cname: "San Diego", code: "US-SD" },
          { cname: "San Francisco", code: "US-SF" },
        ],
      },
      {
        name: "Florida",
        cities: [
          { cname: "Jacksonville", code: "US-JA" },
          { cname: "Miami", code: "US-MI" },
          { cname: "Tampa", code: "US-TA" },
          { cname: "Orlando", code: "US-OR" },
        ],
      },
      {
        name: "Texas",
        cities: [
          { cname: "Austin", code: "US-AU" },
          { cname: "Dallas", code: "US-DA" },
          { cname: "Houston", code: "US-HO" },
        ],
      },
    ],
  },
  {
    name: "Байконур",
    code: "US",
    states: [
      {
        name: "California",
        cities: [
          { cname: "Los Angeles", code: "US-LA" },
          { cname: "San Diego", code: "US-SD" },
          { cname: "San Francisco", code: "US-SF" },
        ],
      },
      {
        name: "Florida",
        cities: [
          { cname: "Jacksonville", code: "US-JA" },
          { cname: "Miami", code: "US-MI" },
          { cname: "Tampa", code: "US-TA" },
          { cname: "Orlando", code: "US-OR" },
        ],
      },
      {
        name: "Texas",
        cities: [
          { cname: "Austin", code: "US-AU" },
          { cname: "Dallas", code: "US-DA" },
          { cname: "Houston", code: "US-HO" },
        ],
      },
    ],
  },
  {
    name: "Северный",
    code: "US",
    states: [
      {
        name: "California",
        cities: [
          { cname: "Los Angeles", code: "US-LA" },
          { cname: "San Diego", code: "US-SD" },
          { cname: "San Francisco", code: "US-SF" },
        ],
      },
      {
        name: "Florida",
        cities: [
          { cname: "Jacksonville", code: "US-JA" },
          { cname: "Miami", code: "US-MI" },
          { cname: "Tampa", code: "US-TA" },
          { cname: "Orlando", code: "US-OR" },
        ],
      },
      {
        name: "Texas",
        cities: [
          { cname: "Austin", code: "US-AU" },
          { cname: "Dallas", code: "US-DA" },
          { cname: "Houston", code: "US-HO" },
        ],
      },
    ],
  },
  {
    name: "Турынино",
    code: "US",
    states: [
      {
        name: "California",
        cities: [
          { cname: "Los Angeles", code: "US-LA" },
          { cname: "San Diego", code: "US-SD" },
          { cname: "San Francisco", code: "US-SF" },
        ],
      },
      {
        name: "Florida",
        cities: [
          { cname: "Jacksonville", code: "US-JA" },
          { cname: "Miami", code: "US-MI" },
          { cname: "Tampa", code: "US-TA" },
          { cname: "Orlando", code: "US-OR" },
        ],
      },
      {
        name: "Texas",
        cities: [
          { cname: "Austin", code: "US-AU" },
          { cname: "Dallas", code: "US-DA" },
          { cname: "Houston", code: "US-HO" },
        ],
      },
    ],
  },
  {
    name: "Анненки",
    code: "US",
    states: [
      {
        name: "California",
        cities: [
          { cname: "Los Angeles", code: "US-LA" },
          { cname: "San Diego", code: "US-SD" },
          { cname: "San Francisco", code: "US-SF" },
        ],
      },
      {
        name: "Florida",
        cities: [
          { cname: "Jacksonville", code: "US-JA" },
          { cname: "Miami", code: "US-MI" },
          { cname: "Tampa", code: "US-TA" },
          { cname: "Orlando", code: "US-OR" },
        ],
      },
      {
        name: "Texas",
        cities: [
          { cname: "Austin", code: "US-AU" },
          { cname: "Dallas", code: "US-DA" },
          { cname: "Houston", code: "US-HO" },
        ],
      },
    ],
  },
  {
    name: "Тайфун",
    code: "US",
    states: [
      {
        name: "California",
        cities: [
          { cname: "Los Angeles", code: "US-LA" },
          { cname: "San Diego", code: "US-SD" },
          { cname: "San Francisco", code: "US-SF" },
        ],
      },
      {
        name: "Florida",
        cities: [
          { cname: "Jacksonville", code: "US-JA" },
          { cname: "Miami", code: "US-MI" },
          { cname: "Tampa", code: "US-TA" },
          { cname: "Orlando", code: "US-OR" },
        ],
      },
      {
        name: "Texas",
        cities: [
          { cname: "Austin", code: "US-AU" },
          { cname: "Dallas", code: "US-DA" },
          { cname: "Houston", code: "US-HO" },
        ],
      },
    ],
  },
];
