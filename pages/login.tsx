import FormWrapper from "../components/FormWrapper";

export default function Login() {
  function handleSubmit() {}

  return (
    <FormWrapper name="Login" linkText="Create account" linkHref="/register">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="login" />
        <input type="password" placeholder="password" />
        <button>Done</button>
      </form>
    </FormWrapper>
  );
}
