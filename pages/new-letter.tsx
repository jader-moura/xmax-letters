import React from "react";
import FormWrapper from "../components/FormWrapper";

export default function NewLetter() {
  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <FormWrapper name="New Letter">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Letter Title
          <input type="text" placeholder="Title" />
        </label>
        <label>
          Letter Description
          <textarea placeholder="Description" cols={14} />
        </label>
        <button>Done</button>
      </form>
    </FormWrapper>
  );
}
