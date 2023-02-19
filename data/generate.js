import { faker } from "@faker-js/faker";

const drillTypes = ["putting", "driving"];
const scoreUnits = ["feet", "makes"];
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const completedDrills = new Array(10).fill(0).map(() => createCompletedDrill());

function createCompletedDrill() {
  return {
    id: faker.helpers.arrayElement(ids),
    score: faker.datatype.number({ min: 5, max: 50 }),
    units: faker.helpers.arrayElement(scoreUnits),
    date: faker.date.recent(10),
  };
}

function createPlayer() {
  const name = faker.name.fullName();
  const email = faker.internet.email(
    name.split(" ")[0],
    name.split(" ")[1],
    "oregonstate.edu"
  );
  return {
    name,
    email,
    completedDrills: faker.helpers.arrayElements(
      completedDrills,
      (Math.floor(Math.random() * 10) % 4) + 1
    ),
    assignedDrills: faker.helpers.arrayElements(
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      (Math.floor(Math.random() * 10) % 6) + 1
    ),
  };
}

function createCoache() {
  const name = faker.name.fullName();
  const email = faker.internet.email(
    name.split(" ")[0],
    name.split(" ")[1],
    "oregonstate.edu"
  );
  return {
    name,
    email,
    title: faker.helpers.arrayElement(["Head Coach", "Assitant Coach"]),
  };
}

function createDrill() {
  const id = faker.helpers.arrayElement(ids);
  const media = new Array((Math.floor(Math.random() * 10) % 4) + 1)
    .fill(0)
    .map(() => faker.image.sports());
  return {
    id,
    dueDate: faker.date.soon(15),
    name: `Drill ${id}`,
    description: faker.lorem.paragraphs(3),
    media,
    type: faker.helpers.arrayElement(drillTypes),
  };
}

const players = new Array(10).fill(0).map(() => createPlayer());
const coaches = new Array(3).fill(0).map(() => createCoache());
const drills = new Array(15).fill(0).map(() => createDrill());

const team = {
  name: "OSU Sample Golf Team",
  players,
  coaches,
  drills,
};

console.log(JSON.stringify(team, undefined, 4));
