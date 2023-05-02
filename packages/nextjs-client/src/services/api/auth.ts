import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";

import { setAuth } from "../../store/auth-slice";
import { AUTHENTICATE_USER, REGISTER_USER } from "../../graphql/auth";
import { startTransition } from "react";
import {
  NewUserType,
  LoginCredentialsType,
} from "../../components/auth-model/types";

export const useLogin = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [login, { loading }] = useMutation(AUTHENTICATE_USER);

  const signIn = async (
    credentials: LoginCredentialsType,
    onSuccess: () => void
  ) => {
    try {
      const { data: result } = await login({
        variables: { credentials },
      });

      if (result?.login?.status !== "error") {
        dispatch(
          setAuth({
            isAuthenticated: true,
            token: result?.login?.data?.token,
            user: result?.login?.data?.user,
          })
        );

        startTransition(() => {
          alert.success(`Welcome back ${result?.login?.data?.user?.name}!`);
          onSuccess();
        });
      } else {
        alert.error(result?.login?.message);
      }
    } catch (error) {
      let message = "Unknown Error!";
      if (error instanceof Error) message = error.message;

      alert.error(message);
    }
  };

  return {
    signIn,
    loading,
  };
};

export const useRegister = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [register, { loading }] = useMutation(REGISTER_USER);

  const signUp = async (user: NewUserType, onSuccess: () => void) => {
    try {
      const { data: result } = await register({
        variables: { user },
      });

      if (result?.createUser?.status !== "error") {
        dispatch(
          setAuth({
            isAuthenticated: true,
            token: result?.createUser?.data?.token,
            user: result?.createUser?.data?.user,
          })
        );

        startTransition(() => {
          alert.success(
            `Welcome onboard ${result?.createUser?.data?.user?.name}!`
          );
          onSuccess();
        });
      } else {
        alert.error(result?.createUser?.message);
      }
    } catch (error) {
      let message = "Unknown Error!";
      if (error instanceof Error) message = error.message;

      alert.error(message);
    }
  };

  return {
    signUp,
    loading,
  };
};
