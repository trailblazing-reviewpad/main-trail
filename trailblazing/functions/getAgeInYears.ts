import { Person } from '../models/Person';

function getAgeInYears(person: Person) {
  const now = new Date();
  const birthdate = new Date(now.getFullYear() - person.age, now.getMonth());
  const ageInYears = now.getFullYear() - birthdate.getFullYear();
  if (now < birthdate) {
    return ageInYears - 1;
  } else {
    return ageInYears;
  }
}

export { getAgeInYears };