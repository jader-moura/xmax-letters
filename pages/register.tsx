import FormWrapper from "../components/FormWrapper";

export default function Register() {
  function handleSubmit() {}

  return (
    <FormWrapper name="Register" linkText="Create account" linkHref="/login">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="reegister" />
        <input type="password" placeholder="password" />
        <button>Done</button>
      </form>
    </FormWrapper>
  );
}
