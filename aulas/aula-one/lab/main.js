// let fullName = "Cleo de Jesus"

// console.log(fullName.split(" "))

// let arrayString = fullName.split(" ")
// console.table(arrayString)

// let arrayCount = arrayString.length
// console.log(arrayCount)

// let name = arrayString[0]
// let lastName = arrayString(arrayCount - 1)

// function Welcome() {
//     console.log("Hello World! dentro da função");
// }

// Welcome()

// function WelcomeComParams(name) {
//     console.log(`Olá ${name}`)
// }

// WelcomeComParams("Chocolate")


// let fullName = "Ricardo Ribeiro Trindade"
// // let arrayString = fullName.split(" ")

// // let arrayCount = arrayString.length

// // let name = arrayString[0]
// // let lastName = arrayString(arrayCount - 1)

// function showName(fullName) {
//     let arrayString = fullName.split(" ")

//     let arrayCount = arrayString.length

//     let name = arrayString[0]
//     let lastName = arrayString(arrayCount - 1)
// }

// showName(fullName);

function welcome(fullName) {
    let arrayString = fullName.split(" ")
    let firstName = arrayString[0]
    let lastName = arrayString[arrayString.lengh - 1]

    console.log(`Olá, ${firstName} ${lastName}`)
}

welcome("Cleo Santos de Jesus")
welcome("Ricardo Ribeiro Trindade")