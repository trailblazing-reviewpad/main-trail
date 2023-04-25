import { Person } from '../models/Person';

function getFullName(person: Person) {
  return `${person.name}`;
}

export { getFullName };