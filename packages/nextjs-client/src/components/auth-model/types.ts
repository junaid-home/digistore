export interface NewUserType {
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  postal_code: number;
  residential_address: string;
}

export interface LoginCredentialsType {
  email: string;
  password: string;
}
