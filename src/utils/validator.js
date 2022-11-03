export function validator(data, config) {
    const errors = {}
    const validate = (validateMethod, data, config) => {
        let statusValidate
        switch (validateMethod) {
        case "isRequired":
            statusValidate = data.trim() === ""
            if (data.trim() === "") return config.message
            break
        case "isEmail": {
            const emailRegExp = /^\S+@\S+\.\S+$/g
            statusValidate = !emailRegExp.test(data)
            break
        }
        case "isCapitalSymbol":{
            const capitalRegExp = /[A-Z]+/g
            statusValidate = !capitalRegExp.test(data)
            break
        }
        case "isContainDigit": {
            const digitRegExp = /\d+/g
            statusValidate = !digitRegExp.test(data)
            break
        }
        }
        if (statusValidate) return config.message
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])
            if (error && !errors[fieldName]) errors[fieldName] = error
            console.log("error: " + error, "!errors[fieldNsme]: " + errors[fieldName])
        }
    }
    return errors
}