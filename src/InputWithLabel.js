
import React from 'react';

const InputWithLabel = ({
    id,
    children,
    type,
    name,
    value,
    isFocused,
    onChange,
}) => {

    const inputRef = React.useRef();

    React.useEffect(() => {

        inputRef.current.focus();

    });

    return (
        <>
            <label htmlFor={id} > {children} </label>
            <input
                isFocused
                ref={inputRef}
                type={type}
                name={children}
                value={value}
                onChange={onChange}

            />
        </>
    );
};

export default InputWithLabel;
