import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator"
import TextField from "../common/form/textField"
import CheckboxField from "../common/form/checkboxField"
// import * as yup from "yup"

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false })
    const [errors, setErrors] = useState({})

    // const validateSheme = yup.object().shape({
    //     password: yup.string().required("Password обязателен для заполнения")
    //         .matches(/^(?=.*[A-Z])/, "Должны присутствовать заглавные буквы")
    //         .matches(/^(?=.*[0-9])/, "Должны присутствовать числа")
    //         .matches(/^(?=.*[!@#$%^&*_-])/, "Должен присутствовать хотябы один специальный символ")
    //         .matches(/^(?=.{8,})/, "Пароль должен состоять не менее чем из 8 исмволов"),
    //     email: yup.string().required("Email обязателен для заполнения").email("Email введен некорректно")
    // })

    const validatorConfig = {
        email: {
            isRequired: { message: "Email обязателен для заполнения" },
            isEmail: { message: "Email введен некорректно" }
        },
        password: {
            isRequired: { message: "Password обязателен для заполнения" },
            isCapitalSymbol: { message: "Должны присутствовать заглавные буквы" },
            isContainDigit: { message: "Должны присутствовать числа" }
        }
    }

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        // validateSheme.validate(data)
        //     .then(() => setErrors({}))
        //     .catch((err) => setErrors({ [err.path]: err.message }))
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }
    return (

        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckboxField
                value={data.stayOn}
                nameElement={"stayOn"}
                onChange={handleChange}
            >
                    Оставаться в системе
            </CheckboxField>
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
            >
                            Submit
            </button>
        </form>

    )
}

export default LoginForm
