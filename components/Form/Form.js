import React from "react";
import { Field, Form, Formik } from "formik";
import { FormStyled } from "./FormStyled.js";
import styles from "../../styles/Form.module.css";
import { StylesContext } from "@material-ui/styles";

export default function FormComponent() {
  function onSubmit(values, action) {
    console.log("SUBMIT", values);
  }
  const validate = (values, props) => {
    const errors = {};

    if (!values.nome) {
      errors.nome = "Nome de usuário Requerido";
    }

    if (
      !values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email em formato inválido";
    }

    if (!values.endereco) {
      errors.endereco = "Nome de endereco Requerido";
    }

    return errors;
  };
  return (
    <Formik
      validate={validate}
      onSubmit={onSubmit}
      initialValues={{
        name: "",
        email: "",
        endereco: "",
      }}
      render={({ values, errors, touched }) => (
        <FormStyled>
          <Form>
            <div className={styles.divform}>
              <label className={styles.labelinput}>Nome</label>
              <Field
                className={styles.inputbox}
                name="name"
                type="text"
                placeholder="Noan"
              />
              {errors.name && touched.name ? (
                <div className={styles.errortext}>{errors.name}</div>
              ) : null}
            </div>
            <div className={styles.divform}>
              <label className={styles.labelinput}>Email</label>
              <Field
                className={styles.inputbox}
                name="email"
                type="text"
                placeholder="email@gmail.com"
              />
              {errors.email && touched.email ? (
                <div className={styles.errortext}>{errors.email}</div>
              ) : null}
            </div>
            <div className={styles.divform}>
              <label className={styles.labelinput}>Endereço</label>
              <Field
                className={styles.inputbox}
                name="endereco"
                type="text"
                placeholder="Rua das quixabeiras"
              />
              {errors.endereco && touched.endereco ? (
                <div className={styles.errortext}>{errors.endereco}</div>
              ) : null}
            </div>
            <button className={styles.buttonbox} type="submit">
              {" "}
              Enviar{" "}
            </button>
          </Form>
        </FormStyled>
      )}
    />
  );
}
