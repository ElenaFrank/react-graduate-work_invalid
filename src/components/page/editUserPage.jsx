import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator"
import API from "../../API"
import TextField from "../common/form/textField"
import SelectField from "../common/form/selectField"
import RadioField from "../common/form/radioField"
import MultiSelectField from "../common/form/multiSelectField"
import PropType from "prop-types"

const EditUserPage = ({ id, comebackUser }) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState()
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

        API.qualities
            .fetchAll()
            .then((data) =>
                setQualities(
                    data
                )
            )

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

    if (userData && professions) {
        const isValid = Object.keys(errors).length === 0

        const handleSubmit = (e) => {
            e.preventDefault()
            const isValid = validate()
            if (!isValid) return
            console.log(e.target)

            API.users.update(userData._id, userData)
                .then(() => comebackUser())
                .catch()
        }

        const getValueObject = (id, Objects) => {
            let valueObject
            Object.values(Objects).forEach(object => {
                if (object._id === id) valueObject = object
            })
            return valueObject
        }

        function handleChange(target) {
            const newValue = target.name === "qualities"
                ? target.value.map(value => {
                    return getValueObject(value.value, qualities)
                })
                : target.name === "profession"
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
            <div className="container mt-5" onSubmit={handleSubmit}>
                <div className="row">
                    <div className=".col-md-6 .offset-md-3 shadow p-4">

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
                                defaultOption={userData.profession.name}
                                options={professions}
                                onChange={handleChange}
                                name="profession"
                                value={userData.profession.name}
                                valueOption = {userData.profession._id}
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
                    </div>
                </div>
            </div>
        )
    } else return "Loading..."
}

EditUserPage.propTypes = {
    id: PropType.string,
    comebackUser: PropType.func,
}
export default EditUserPage
