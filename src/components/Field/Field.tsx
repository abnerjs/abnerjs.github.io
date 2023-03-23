import React, { useEffect, useState } from "react";
import "./field.css";
import { TextField } from "@mui/material";

interface Props {
  label: string;
  placeholder?: string;
  multiline?: boolean;
  type?: React.HTMLInputTypeAttribute;
  helperText?: string;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  name?: string;
  control?: any;
  rest?: any;
  maxLength?: number;
  minLength?: number;
  value?: any;
  onChange?: any;
}

const Field = (props: Props) => {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    setFilled(
      props.value !== null && props.value !== undefined && props.value !== ""
    );
  }, [props.value]);

  return (
    <div className="field">
      <div className={`label${filled ? " filled" : ""}`}>{props.label}</div>
      <TextField
        name={props.name}
        variant="filled"
        fullWidth
        type={props.type}
        helperText={props.helperText}
        placeholder={props.placeholder}
        InputProps={{
          disableUnderline: true,
        }}
        multiline={props.multiline}
        rows={8}
        onChange={props.onChange}
        onFocus={props.onFocus}
        inputProps={{
          maxLength: props.maxLength,
          minLength: props.minLength,
        }}
        value={props.value}
        {...props.rest}
      />
    </div>
  );
};

export default Field;
