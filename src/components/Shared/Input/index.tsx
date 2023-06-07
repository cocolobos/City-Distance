import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import style from "./Input.module.css"

export interface IFormValues {
  "City of origin": string;
  "City of destination": string;
  "Passengers": number;
  "Date": string
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const Input = ({ label, register, required }: InputProps) => (
  <div className={style.inputWrapper}>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </div>
);

export default Input
