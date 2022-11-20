import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"

const MultiSelectField = ({ options, defaultValue, onChange, nameElement, label }) => {
    const optionArray = !Array.isArray(options) && typeof (options) === "object"
        ? Object.keys(options).map(optionName => ({ label: options[optionName].name, value: options[optionName]._id }))
        : options
    const handleChange = (value) => {
        console.log({ nameElement, value })
        onChange({ name: nameElement, value })
    }
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                closeMenuOnSelect={false}
                isMulti
                defaultValue={defaultValue}
                options={optionArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={nameElement}
            />
        </div>
    )
}

MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    nameElement: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.array
}

export default MultiSelectField
