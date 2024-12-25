import { useEffect } from "react";

const SignoutPage = ({ onSignout }) => {
  useEffect(() => {
    onSignout();
  }, [onSignout]);

  return <p>Signing out...</p>;
};

export default SignoutPage;
