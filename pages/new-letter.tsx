import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormWrapper from "../components/FormWrapper";
import Router from "next/router";
import styles from "../styles/NewLetter.module.css";

export default function NewLetter() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
    },
  });

  const onSubmit = handleSubmit(async (formData) => {
    if (errorMessage) setErrorMessage("");

    try {
      const res = await fetch("/api/letters/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        Router.push("/");
      } else {
        throw new Error(await res.text());
      }
    } catch (error: any) {
      console.error(error);
      if (error) {
        setErrorMessage(error.message);
      }
    }
  });

  return (
    <FormWrapper name="New Letter">
      <form onSubmit={onSubmit}>
        <Controller
          name="description"
          control={control}
          rules={{
            required: "The description is required, max 300 characters",
            maxLength: 300,
            minLength: 1,
          }}
          render={({ field }) => (
            <label className={styles.formLabel}>
              <textarea
                className={styles.textField}
                {...field}
                rows={8}
                placeholder="Dear Santa Claus..."
              />
              {errors.description && (
                <span role="alert" className={styles.error}>
                  {errors.description.message}
                </span>
              )}
            </label>
          )}
        />

        <button type="submit" className={styles.submitButton}>
          Create
        </button>
        {errorMessage && (
          <p role="alert" className="errorMessage">
            {errorMessage}
          </p>
        )}
      </form>
    </FormWrapper>
  );
}
