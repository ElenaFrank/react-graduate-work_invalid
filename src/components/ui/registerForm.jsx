import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator"
import TextField from "../common/form/textField"
import API from "../../API"
import SelectField from "../common/form/selectField"
import RadioField from "../common/form/radioField"
import MultiSelectField from "../common/form/multiSelectField"
import CheckboxField from "../common/form/checkboxField"

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        licence: false
    })
    const [errors, setErrors] = useState({})
    const [professions, setProfessions] = useState()
    const [qualities, setQualities] = useState()
    const validatorConfig = {
        email: {
            isRequired: { message: "Email обязателен для заполнения" },
            isEmail: { message: "Email введен некорректно" }
        },
        password: {
            isRequired: { message: "Password обязателен для заполнения" },
            isCapitalSymbol: { message: "Должны присутствовать заглавные буквы" },
            isContainDigit: { message: "Должны присутствовать числа" }
        },
        profession: {
            isRequired: { message: "Необходимо выбрать профессию" }
        },
        licence: {
            isRequired: { message: "Необходимо подвердить соглашение" }
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

    useEffect(() => {
        API.professions
            .fetchAll()
            .then((data) =>
                setProfessions(
                    data
                )
            )
    }, [])

    useEffect(() => {
        API.qualities
            .fetchAll()
            .then((data) =>
                setQualities(
                    data
                )
            )
    }, [])

    const validate = () => {
        const errors = validator(data, validatorConfig)
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
            <SelectField

                label={"Выберите ваше профессию"}
                defaultOption={"Choose..."}
                options={professions}
                onChange={handleChange}
                name="profession"
                value={data.profession}
                valueOption = {""}
                error={errors.profession}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                name={"sex"}
                value = {data.sex}
                onChange={handleChange}
                label="Выберите ваш пол"
            />
            <MultiSelectField
                options={qualities}
                defaultValue = {data.qualities}
                onChange={handleChange}
                nameElement="qualities"
                label="Укажите ваши качества"
            />
            <CheckboxField
                value={data.licence}
                nameElement={"licence"}
                onChange={handleChange}
                error={errors.licence}
            >
                    Подтвердить <a>лицензионное соглашение</a>
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

export default RegisterForm
