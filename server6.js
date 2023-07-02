function extractNameAndStreet(person) {
    const { name, address: {street}} = person;
    return { name, street};
}

const person = {
    name: 'vguru',
    age: 23,
    address: {
        street: '123 Main St',
        city: 'karnataka',
        country: 'India'
    }
};
const result = extractNameAndStreet(person);
console.log(result);