import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator"
import TextField from "../common/form/textField"
import API from "../../API"
import SelectField from "../common/form/selectField"
import RadioField from "../common/form/radioField"
import MultiSelectField from "../common/form/multiSelectField"
import PropType from "prop-types"

const Edit = ({ id }) => {
    // const [data, setData] = useState({
    //     email: "",
    //     password: "",
    //     profession: "",
    //     sex: "male",
    //     qualities: [],
    //     licence: false
    // })
    const [userData, setUserData] = useState()
    const [errors, setErrors] = useState({})
    const [professions, setProfessions] = useState()
    const [qualities, setQualities] = useState()
    const validatorConfig = {
        name: {
            isRequired: { message: "Email обязателен для заполнения" }
        },
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

    useEffect(() => {
        API.users
            .getById(id)
            .then((data) => setUserData(data))
    }, [])

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
        if (userData) {
            const errors = validator(userData, validatorConfig)
            setErrors(errors)
            return Object.keys(errors).length === 0
        }
    }

    useEffect(() => {
        validate()
    }, [])

    if (userData && qualities) {
        const isValid = Object.keys(errors).length === 0

        const handleSubmit = (e) => {
            e.preventDefault()
            const isValid = validate()
            if (!isValid) return
            console.log(userData)
        }

        const handleChange = (target) => {
            setUserData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }))
        }

        const handleDefaultValue = (defaultQualities) => {
            return defaultQualities.map(defaultQuality => ({ label: defaultQuality.name, value: defaultQuality._id })
            )
        }

        return (

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                <SelectField

                    label={"Выберите ваше профессию"}
                    defaultOption={"Choose..."}
                    options={professions}
                    onChange={handleChange}
                    name="profession"
                    value={userData.profession.name}
                    error={errors.profession}
                />
                <RadioField
                    options={[
                        { name: "Male", value: "male" },
                        { name: "Female", value: "female" },
                        { name: "Other", value: "other" }
                    ]}
                    name={"sex"}
                    value = {userData.sex}
                    onChange={handleChange}
                    label="Выберите ваш пол"
                />
                <MultiSelectField
                    options={qualities}
                    defaultValue = {handleDefaultValue(userData.qualities)}
                    onChange={handleChange}
                    nameElement="qualities"
                    label="Укажите ваши качества"
                />
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
}
Edit.propTypes = {
    id: PropType.string
}
export default Edit
