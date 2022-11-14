import React from "react"
import PropTypes from "prop-types"

const CheckboxField = ({ nameElement, value, onChange, children }) => {
    const handleChange = () => {
        onChange({ name: nameElement, value: !value })
    }
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={nameElement} onChange={handleChange} checked={value}/>
            <label className="form-check-label" htmlFor={nameElement}>
                {children}
            </label>
        </div>
    )
}

CheckboxField.propTypes = {
    nameElement: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
export default CheckboxField
