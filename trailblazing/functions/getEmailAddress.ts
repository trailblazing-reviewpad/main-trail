import { Person } from '../models/Person';

function getEmailAddress(person: Person) {
  if (person.email) {
    return person.email;
  } else {
    return 'No email address';
  }
}

export { getEmailAddress };