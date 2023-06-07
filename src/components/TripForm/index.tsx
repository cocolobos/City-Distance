import React from "react"
import style from "./TripForm.module.css"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input, { IFormValues } from "../Shared/Input";

const TripForm = () => {
  const { register, handleSubmit, watch, setValue, control } = useForm<IFormValues>();

  const counter = watch('Passengers', 0);

  const handleIncrement = () => {
    setValue('Passengers', counter + 1);
  };

  const handleDecrement = () => {
    setValue('Passengers', counter - 1);

  };

  const onSubmit: SubmitHandler<IFormValues> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={style.wrapper}>
      <h1>Trip Form</h1>
      <div className={style.tripInfoContainer}>
        <div className={style.tripGuide}>Left side</div>
        <form className={style.tripFormWrapper} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.tripFormInputs}>
            <div className={style.tripFormCities}>
              <Input label="City of origin" register={register} required />
              <Input label="City of destination" register={register} required />
            </div>
            <div className={style.tripStaticValuesContainer}>
              <div className={style.passengerContainer}>
                <label>Passengers</label>
                <div className={style.passengerWrapper}>
                  <button onClick={handleIncrement}>+</button>
                  <input
                    type="number"
                    {...register('Passengers', { min: 0, minLength: 1 })}
                    readOnly
                    required
                  />
                  <button onClick={handleDecrement}>-</button>
                </div>
              </div>
              <div className={style.dateWrapper}>
                  <label>Date</label>
                    <Controller
                      name="Date"
                      control={control}
                      defaultValue=""
                      render={() => (
                          <input placeholder="Trip Date" type="date" {...register('Date', {
                            validate: {
                              greaterThanToday: v => v > Date.now().toString(),
                            }
                          })}
                        />
                      )}
                    />
                </div>
            </div>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default TripForm