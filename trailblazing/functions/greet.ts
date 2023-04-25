import { Person } from '../models/Person';

function greet(person: Person) {
  console.log(`Hello, ${person.name}!`);
}

export { greet };
