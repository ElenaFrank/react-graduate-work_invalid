import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator"
import API from "../../API"
import TextField from "../common/form/textField"
import SelectField from "../common/form/selectField"
import RadioField from "../common/form/radioField"
import MultiSelectField from "../common/form/multiSelectField"
import PropType from "prop-types"

const Edit = ({ id, comebackUser }) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState()
    // const [updatedUser, setUpdatedUser] = useState(false)
    const [professions, setProfessions] = useState()
    const [qualities, setQualities] = useState()
    const validatorConfig = {
        name: {
            isRequired: { message: "ФИО обязателен для заполнения" }
        },
        email: {
            isRequired: { message: "Email обязателен для заполнения" },
            isEmail: { message: "Email введен некорректно" }
        },
        profession: {
            isRequired: { message: "Необходимо выбрать профессию" }
        },
    }

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

    useEffect(() => {
        API.users
            .getById(id)
            .then((data) => setUserData(data))
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
    }, [userData])

    // useEffect(() => {
    //     comebackUser()
    // }, [updatedUser])

    const updateUserDate = (newData) => {
        API.users.update(newData._id, newData)
            .then(() => comebackUser())
            .catch()
    }

    if (userData) {
        const isValid = Object.keys(errors).length === 0

        const handleSubmit = (e) => {
            e.preventDefault()
            const isValid = validate()
            if (!isValid) return
            console.log(userData)
        }

        const getValueObject = (id, Objects) => {
            let valueObject
            // eslint-disable-next-line array-callback-return
            Object.values(Objects).forEach(object => {
                if (object._id === id) valueObject = object
            })
            return valueObject
        }

        function handleChange(target) {
            const newValue = Array.isArray(target.value)
                ? target.value.map(value => {
                    return getValueObject(value.value, qualities)
                })
                : typeof target.value === "object"
                    ? getValueObject(target.value, professions)
                    : target.value

            setUserData((prevState) => ({
                ...prevState, [target.name]: newValue
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
                    onClick={() => updateUserDate(userData)}
                >
                                Submit
                </button>
            </form>
        )
    } else return "Loading..."
}

Edit.propTypes = {
    id: PropType.string,
    comebackUser: PropType.func,
}
export default Edit
