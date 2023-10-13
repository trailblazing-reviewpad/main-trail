// reviewpad-an: critical
interface Person {
  name: string;
  age: number;
  email?: string;
  address?: Address;
  extraField?: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

function greet(person: Person) {
  console.log(`Hello, ${person.name}!`);
}

function printPerson(person: Person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  if (person.email) {
    console.log(`Email: ${person.email}`);
  }
  if (person.address) {
    console.log('Address:');
    console.log(`  Street: ${person.address.street}`);
    console.log(`  City: ${person.address.city}`);
    console.log(`  State: ${person.address.state}`);
    console.log(`  Zip: ${person.address.zip}`);
  }
}

function getFullName(person: Person) {
  return `${person.name}`;
}

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

function getEmailAddress(person: Person) {
  if (person.email) {
    return person.email;
  } else {
    return 'No email address';
  }
}

function getFormattedAddress(person: Person) {
  if (person.address) {
    return `${person.address.street}, ${person.address.city}, ${person.address.state} ${person.address.zip}`;
  } else {
    return 'No address';
  }
}

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

export {};
