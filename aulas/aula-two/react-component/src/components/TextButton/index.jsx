function TextButton(params) {
    console.log(params)

    let obj = {
        name: "João",
        idade: 30,
        addres: "rua Joao pedro",
        phoneNumber: "74386734"
    }

    console.log(obj.idade)
    console.log(obj.phoneNumber)
    console.log(obj)

    let {name, idade} = obj

    console.log(name)
    console.log(idade)


    return (
        <button type="button">
            {params.label}
        </button>
    )
}

export default TextButton