import React from "react"
import PropTypes from "prop-types"

const SelectField = ({ label, value, onChange, valueOption, name, defaultOption, options, error }) => {
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "")
    }
    const optionArray = !Array.isArray(options) && typeof (options) === "object"
        ? Object.keys(options).map(optionName => ({ name: options[optionName].name, value: options[optionName]._id }))
        : options
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">{label}</label>
            <select
                value={value}
                className={getInputClasses()}
                id={name}
                name={name}
                onChange={handleChange}
            >
                <option
                    disabled={!valueOption && true}
                    value={valueOption}
                >
                    {defaultOption}
                </option>
                {optionArray &&
                optionArray.map(option => {
                    return valueOption !== option.value &&
                        <option
                            key={option.value}
                            value={option.value}

                        >
                            {option.name}
                        </option>
                }

                )}
            </select>
            {error && <div className="invalid-feedback">
                {error}
            </div>}
        </div>
    )
}

SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    valueOption: PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default SelectField
