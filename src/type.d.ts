interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface IUserApi {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface IPostsApi {
  userId: number;
  title: string;
  body: string;
  id: number;
}

type ButtonProps = {
  optionclass?: string;
  size?: 'md' | 'lg';
} & JSX.IntrinsicElements['button'];
