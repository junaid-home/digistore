import * as React from "react";

/**
 * importing Tabs would print warning on the console
 *
 * https://github.com/MostafaRostami72/react-best-tabs/issues/4
 */
import Tabs, { Tab } from "react-best-tabs";
import Modal from "react-responsive-modal";

import { useLogin, useRegister } from "../../services/api/auth";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import { LoginCredentialsType, NewUserType } from "./types";

function AuthModel({ open, setOpen }: AuthModelProps) {
  const { signIn, loading: loggingIn } = useLogin();
  const { signUp, loading: signingUp } = useRegister();

  const handleLogin = async (data: LoginCredentialsType) => {
    await signIn(data, () => setOpen(false));
  };

  const handleSignUp = async (data: NewUserType) => {
    await signUp(data, () => setOpen(false));
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      center
      styles={{
        modal: { maxWidth: 350, width: "100%", outline: "solid" },
      }}
    >
      <Tabs ulClassName="model-tabs" activeTab={1}>
        <Tab title="Sign In">
          <LoginForm loading={loggingIn} onSubmit={handleLogin} />
        </Tab>
        <Tab title="Register">
          <RegisterForm onSubmit={handleSignUp} loading={signingUp} />
        </Tab>
      </Tabs>
    </Modal>
  );
}

interface AuthModelProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default AuthModel;
