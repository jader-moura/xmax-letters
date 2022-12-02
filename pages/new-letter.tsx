import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormWrapper from "../components/FormWrapper";
import Router from "next/router";
import styles from "../styles/NewLetter.module.css";

export default function NewLetter(props: any) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
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
          name="title"
          control={control}
          rules={{
            required: "Title is required, min 3 and max 14 characters",
            maxLength: 14,
            minLength: 3,
          }}
          render={({ field }) => (
            <label className={styles.formLabel}>
              Letter Title
              <input {...field} className={styles.textField} />
              {errors.title && (
                <span role="alert" className={styles.error}>
                  {errors.title.message}
                </span>
              )}
            </label>
          )}
        />

        <Controller
          name="description"
          control={control}
          rules={{
            required: "Description is required, max 280 characters",
            maxLength: 280,
            minLength: 1,
          }}
          render={({ field }) => (
            <label className={styles.formLabel}>
              Letter Description
              <textarea className={styles.textField} {...field} rows={7} />
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
