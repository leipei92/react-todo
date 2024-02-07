
import React from 'react';
import style from './InputWithLabel.module.css';
import PropTypes from 'prop-types';

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
                className={style.input}

            />
        </>
    );
};
InputWithLabel.propTypes = {
    id: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    type: PropTypes.func.isRequired,
    name: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default InputWithLabel;
