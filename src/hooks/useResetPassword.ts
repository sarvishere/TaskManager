import { useState } from "react";
import passwordService, { IPassword } from "../services/password-service";

const useResetPassword = () => {
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);
  const [passwords, setPasswords] = useState<IPassword>();

  const resetPassword = (data: IPassword) => {
    setIsLoading(true);
    passwordService(data)
      .then((res) => setPasswords(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };
  return {error,isLoading,passwords,resetPassword}
};

export default useResetPassword;