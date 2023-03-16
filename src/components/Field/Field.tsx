import React, { useState } from 'react';
import './field.css';
import { TextField } from '@mui/material';

interface Props {
    label: string;
    placeholder?: string;
    multiline?: boolean;
}

const Field = (props: Props) => {
    const [filled, setFilled] = useState(false);

    return (
        <div className="field">
            <div className={`label${filled ? ' filled':''}`}>{props.label}</div>
            <TextField
                variant="filled"
                fullWidth
                placeholder={props.placeholder}
                InputProps={{
                    disableUnderline: true,
                }}
                multiline={props.multiline}
                rows={8}
                onChange={(e) => {
                    setFilled(e.target.value !== null && e.target.value !== undefined && e.target.value !== '');
                }}
            />
        </div>
    );
}

export default Field;