// getItem
// setItem
// clear()

// const ism = "Diyor"

// localStorage.setItem("name" , ism)


// const getName = localStorage.getItem("name")

// console.log(getName)

// localStorage.clear()

// ______________________________________

const ismlar = ["Diyor", "Javohir", "Alisher"]

localStorage.setItem("NameArray" ,JSON.stringify(ismlar))

const arrName = JSON.parse(localStorage.getItem("NameArray"))
console.log(arrName)

