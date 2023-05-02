import cls from "@digistore/scss/lib/templates/Auth-model.module.css";

import * as React from "react";

import { Input, Button } from "@digistore/react-components";
import { NewUserType } from "./types";

function RegisterForm({ onSubmit, loading }: RegisterFormProps) {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [address, setAddress] = React.useState({
    city: "",
    postal_code: 12345,
    residential_address: "",
  });

  const handleFormSubmission: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit &&
      onSubmit({
        ...user,
        ...address,
      });
  };

  return (
    <form onSubmit={handleFormSubmission} className={cls.register_container}>
      <div className="tm-sm">
        <Input
          required
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="Full Name"
          fullWidth
        />
      </div>
      <div className="tm-sm">
        <Input
          required
          type="email"
          value={user.email}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Email Address"
          fullWidth
        />
      </div>
      <div className="tm-sm">
        <Input
          required
          value={user.phone}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, phone: e.target.value }))
          }
          placeholder="Phone Number"
          fullWidth
        />
      </div>
      <div className="tm-sm">
        <Input
          required
          type="password"
          value={user.password}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Password"
          fullWidth
        />
      </div>
      <div className="tm-sm">
        <Input
          required
          value={address.city}
          onChange={(e) =>
            setAddress((prev) => ({ ...prev, city: e.target.value }))
          }
          placeholder="City"
          fullWidth
        />
      </div>
      <div className="tm-sm">
        <Input
          required
          type="number"
          minLength={5}
          maxLength={5}
          value={address.postal_code}
          onChange={(e) =>
            setAddress((prev) => ({
              ...prev,
              postal_code: parseInt(e.target.value),
            }))
          }
          placeholder="Postal Code"
          fullWidth
        />
      </div>
      <div className="tm-sm">
        <Input
          required
          value={address.residential_address}
          onChange={(e) =>
            setAddress((prev) => ({
              ...prev,
              residential_address: e.target.value,
            }))
          }
          placeholder="Residential Address"
          fullWidth
        />
      </div>
      <div className="tm-sm">
        <Button
          fullWidth
          isLoading={loading}
          isDisabled={loading}
          color="secondary"
          type="submit"
        >
          Register
        </Button>
      </div>
    </form>
  );
}

interface RegisterFormProps {
  onSubmit: (user: NewUserType) => void;
  loading: boolean;
}

export default RegisterForm;
