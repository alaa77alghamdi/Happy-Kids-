console.log(localStorage.getItem("parentName"));

let parentNameContainer= document.getElementById('parentName')
parentNameContainer.textContent= localStorage.getItem("parentName")

let kidNameContainer= document.getElementById('kidName')
kidNameContainer.textContent= localStorage.getItem("kidName")

let emailContainer= document.getElementById('email')
emailContainer.textContent= localStorage.getItem("email")

let phoneContainer= document.getElementById('phone')
phoneContainer.textContent= localStorage.getItem("phone")

localStorage.removeItem()