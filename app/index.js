import users from "./users.js";

function getNameUserCity(person) {
  return `
    <p>${person.name} ${person.username} is ${person.email} </p>
  `;
}

const mapNamesUserCity = users.map(getNameUserCity);

console.log(mapNamesUserCity);
