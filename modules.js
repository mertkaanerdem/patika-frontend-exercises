export default (name) => {
  console.log(`Selam ${name}, kolay gelsin`);
};

const addition = (a, b) => a + b;
const subtract = (a, b) => a - b;
const division = (a, b) => a / b;
const multiplication = (a, b) => a * b;

const me = {
  name: "Mehmet Mertkaan",
  familyName: "Erdem",
  birth: "1992, May 1",
  hand: "left",
  club: "Fenerbahçe",
  daughters: ["Diba", "Ivan"],
};

const users = [
  {
    name: "Mustafa Kemal",
    familyName: "Atatürk",
    birth: "1881, May 19",
    hand: "right",
    club: "Fenerbahçe",
    daughters: ["Sabiha Gökçen", "Afet İnan"],
  },
  {
    name: "Mehmet Mertkaan",
    familyName: "Erdem",
    birth: "1992, May 1",
    hand: "left",
    club: "Fenerbahçe",
    daughters: ["Diba", "Ivan"],
  },
];

export { addition, subtract, division, multiplication, me, users };
