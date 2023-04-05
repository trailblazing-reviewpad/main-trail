// @reviewpad-an: critical
interface Person {
  name: string;
  age: number;
  email?: string;
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

const john: Person = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
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

export {};
