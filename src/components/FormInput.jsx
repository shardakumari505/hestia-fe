import React from "react";
//import { TextField, Grid } from "@material-ui/core";
import  TextField  from "@mui/material/TextField";
//import { Grid } from "@mui/material/Grid";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <TextField fullWidth label={label} required />}
      />
    </>
  );
};

export default FormInput;