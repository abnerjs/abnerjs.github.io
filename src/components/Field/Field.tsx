import React from 'react';
import './field.css';
import { TextField } from '@mui/material';

interface Props {
    label: string;
    placeholder?: string;
    multiline?: boolean;
}

const Field = (props: Props) => {
    return (
        <div className="field">
            <div className="label">{props.label}</div>
            <TextField
                variant="filled"
                fullWidth
                placeholder={props.placeholder}
                InputProps={{
                    disableUnderline: true,
                }}
                multiline={props.multiline}
                rows={8}
            />
        </div>
    );
}

export default Field;