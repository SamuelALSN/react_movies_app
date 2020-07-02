import React from 'react';

type InputWithLabelProps = {
    id: string;
    value: string;
    type?: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isFocused?: boolean;
    children: React.ReactNode;
}
const InputWithLabel = ({id, value, onInputChange, type = 'text', children, isFocused}: InputWithLabelProps) => {

    return (
        <>
            <label htmlFor={id} className='label'> {children}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onInputChange}
                className='input'
            />
        </>
    );
};

export default InputWithLabel;