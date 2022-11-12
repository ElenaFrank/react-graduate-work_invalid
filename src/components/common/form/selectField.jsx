import React from "react"
import PropTypes from "prop-types"

const SelectField = ({ label, value, onChange, defaultOption, options, error }) => {
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
            <label className="form-label">{label}</label>
            <select
                value={value}
                className={getInputClasses()}
                id="validationCustom04"
                name="profession"
                onChange={handleChange}
            >
                <option disabled value="">{defaultOption}</option>
                {optionArray &&
                optionArray.map(option => (
                    <option
                        key={option.value}
                        value={option.value}

                    >
                        {option.name}
                    </option>

                ))}
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
    onChange: PropTypes.func,
    error: PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default SelectField
