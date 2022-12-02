import FormWrapper from "../components/FormWrapper";
import { signIn, signOut, useSession } from "next-auth/react";
import { ImGithub } from "react-icons/im";

export default function Auth() {
  const { status } = useSession();

  return (
    <FormWrapper name="Login">
      {status === "authenticated" ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <button onClick={() => signIn("github")}>
          <ImGithub />
          Login with GitHub
        </button>
      )}
    </FormWrapper>
  );
}
