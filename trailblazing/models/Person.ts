import { Address } from './Address';

interface Person {
  name: string;
  age: number;
  email?: string;
  address?: Address;
}

export { Person };
