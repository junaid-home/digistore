import cls from "@digistore/scss/lib/templates/Auth-model.module.css";

import * as React from "react";

import { Input, Button } from "@digistore/react-components";
import { LoginCredentialsType } from "./types";

function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });

  const handleFormSubmission: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit && onSubmit(loginData);
  };

  return (
    <form onSubmit={handleFormSubmission} className={cls.login_container}>
      <div className="tm-sm">
        <Input
          required
          value={loginData.email}
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Email Address"
          fullWidth
        />
      </div>
      <div className="tm-sm">
        <Input
          required
          value={loginData.password}
          onChange={(e) =>
            setLoginData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          placeholder="Password"
          type="password"
          fullWidth
        />
      </div>
      <div className="tm-sm">
        <Button
          isLoading={loading}
          isDisabled={loading}
          loadingText="Logging in..."
          type="submit"
          color="secondary"
          fullWidth
        >
          Login
        </Button>
      </div>
    </form>
  );
}

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentialsType) => void;
  loading: boolean;
}

export default LoginForm;
