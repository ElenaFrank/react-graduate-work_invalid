import React from "react"
import PropType from "prop-types"

const CheckboxField = ({ nameElement, value, onChange, error, children }) => {
    const getInputClasses = () => {
        return "form-check-input" + (error ? " is-invalid" : "")
    }
    const handleChange = () => {
        onChange({ name: nameElement, value: !value })
    }
    return (
        <div className="form-check mb-4">
            <input className={getInputClasses()} type="checkbox" value="" id={nameElement} onChange={handleChange} checked={value}/>
            <label className="form-check-label" htmlFor={nameElement}>
                {children}
            </label>
            {error && <div className="invalid-feedback">
                {error}
            </div>}
        </div>
    )
}

CheckboxField.propTypes = {
    nameElement: PropType.string,
    value: PropType.bool,
    onChange: PropType.func,
    children: PropType.oneOfType([
        PropType.arrayOf(PropType.node),
        PropType.node]),
    error: PropType.string
}
export default CheckboxField
