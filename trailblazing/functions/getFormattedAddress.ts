import { Person } from '../models/Person';

function getFormattedAddress(person: Person) {
  if (person.address) {
    return `${person.address.street}, ${person.address.city}, ${person.address.state} ${person.address.zip}`;
  } else {
    return 'No address';
  }
}

export { getFormattedAddress };