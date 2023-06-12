const people = ["Rafa", "Diego", "Dani", "Rod"]
const upperCasePeopleThatStartWithD = people
  .filter((person) => person.startWith("D"))
  .map((dperson) => dperson.toUpperCase())
