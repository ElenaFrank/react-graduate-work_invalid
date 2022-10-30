import React from "react"
import PropType from "prop-types"

const TextField = ({ label, type, name, value, onChange, error }) => {
    return (
        <div>
            <label
                htmlFor={name}
            >
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <p>{error}</p>}
        </div>
    )
}
TextField.defaultProps = {
    type: "text"
}
TextField.propTypes = {
    label: PropType.string,
    type: PropType.string,
    name: PropType.string,
    value: PropType.string,
    onChange: PropType.func,
    error: PropType.string
}
export default TextField
