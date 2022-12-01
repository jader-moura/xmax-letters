import Link from "next/link";
import React from "react";
import styles from "../styles/FormWrapper.module.css";

interface FormWrapperProps {
  name: string;
  children: React.ReactNode;
  linkHref?: string;
  linkText?: string;
}

export default function FormWrapper({
  name,
  children,
  linkHref,
  linkText,
}: FormWrapperProps) {
  return (
    <div className={styles.formWrapper}>
      <h2>{name}</h2>
      {children}
      {linkText && linkHref && (
        <Link className={styles.link} href={linkHref}>
          {linkText}
        </Link>
      )}
    </div>
  );
}
