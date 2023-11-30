
import React from 'react';

const InputWithLabel = ({
    id,
    children,
    type,
    name,
    value,
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
                id={id}
                ref={inputRef}
                type={type}
                name={name}
                value={value}
                onChange={onChange}

            />
        </>
    );
};

export default InputWithLabel;
