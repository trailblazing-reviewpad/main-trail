import { Person } from './models/Person';
import { Address } from './models/Address';
import { greet } from './functions/greet';
import { printPerson } from './functions/printPerson';
import { getFullName } from './functions/getFullName';
import { getAgeInYears } from './functions/getAgeInYears';
import { getEmailAddress } from './functions/getEmailAddress';
import { getFormattedAddress } from './functions/getFormattedAddress';

// Example data and code
const john: Person = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

const jane: Person = {
  name: 'Jane',
  age: 25,
  email: 'jane@example.com'
};

const people: Person[] = [john, jane];

console.log('People:');
for (const person of people) {
  console.log('-'.repeat(20));
  printPerson(person);
}

console.log('Full names:');
for (const person of people) {
  console.log(getFullName(person));
}

console.log('Ages:');
for (const person of people) {
  console.log(getAgeInYears(person));
}

console.log('Email addresses:');
for (const person of people) {
  console.log(getEmailAddress(person));
}

console.log('Formatted addresses:');
for (const person of people) {
  console.log(getFormattedAddress(person));
}