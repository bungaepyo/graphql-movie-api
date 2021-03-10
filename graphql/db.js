export const people = [
    {
        id: 1,
        name: "toby",
        age: 23,
        gender: "male"
    },
    {
        id: 2,
        name: "toby",
        age: 23,
        gender: "male"
    },
    {
        id: 3,
        name: "toby",
        age: 23,
        gender: "male"
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}