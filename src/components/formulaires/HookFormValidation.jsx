import React from "react";
import { useForm } from "react-hook-form";

function HookFormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Email: ${data.email}, Mot de passe: ${data.password}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email :
        <input {...register("email", { required: "Email requis" })} />
      </label>
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      <label>
        Mot de passe :
        <input
          type="password"
          {...register("password", {
            required: "Mot de passe requis",
            minLength: {
              value: 8,
              message: "Le mot de passe doit contenir au moins 8 caractères",
            },
          })}
        />
      </label>
      {errors.password && (
        <p style={{ color: "red" }}>{errors.password.message}</p>
      )}

      <button type="submit">Soumettre</button>
    </form>
  );
}

export default HookFormValidation;
