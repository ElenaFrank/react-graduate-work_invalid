import React, { useState } from "react"
import PropType from "prop-types"

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false)
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "")
    }
    const toggleShowPassword = () => {
        setShowPassword((prevstate) => !prevstate)
    }

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    return (
        <>
            <div className="mb-4">
                <label htmlFor={name}>{label}</label>
                <div className="input-group">
                    <input
                        type={showPassword ? "text" : type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        className={getInputClasses()}
                    />
                    {type === "password" && <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
                    </button>
                    }
                </div>

                {error &&
                <div className="invalid-feedback" style={{ display: "contents" }}>
                    {error}
                </div>}
            </div>
        </>
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
