import React from "react"
import PropType from "prop-types"

const SelectField = ({ label, value, onChange, defaultOption, options, error }) => {
    const getInputClasses = () => {
        return "form-form-select" + (error ? " is-invalid" : "")
    }
    const optionArray = !Array.isArray(options) && typeof (options) === "object"
        ? Object.keys(options).map(optionName => ({ name: options[optionName].name, value: options[optionName]._id }))
        : options
    return (
        <div className="mb-4">
            <label htmlFor="validationCustom04" className="form-label">{label}</label>
            <select
                value={value}
                className={getInputClasses()}
                id="validationCustom04"
                name="profession"
                onChange={onChange}
            >
                <option disabled value="">{defaultOption}</option>
                {optionArray &&
                optionArray.map(option => (
                    <option
                        value={option.value}
                        key={option.value}
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
    label: PropType.string,
    value: PropType.string,
    onChange: PropType.func,
    error: PropType.string,
    defaultOption: PropType.string,
    options: PropType.oneOfType([PropType.object, PropType.array]),
}

export default SelectField
