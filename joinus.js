function saveInfo (){
    let parentName= document.getElementById("parentName");
    localStorage.setItem("parentName", parentName.value);
    let phone= document.getElementById("phone");
    localStorage.setItem("phone", phone.value);
    let email= document.getElementById("email");
    localStorage.setItem("email", email.value);
    let kidName= document.getElementById("kidName");
    localStorage.setItem("kidName", kidName.value);
    let age= document.getElementById("age");
    localStorage.setItem("age", age.value);
    let girlGender= document.getElementById("girlGender").checked;
    localStorage.setItem("girlGender", girlGender);
    let boyGender= document.getElementById("boyGender").checked;
    localStorage.setItem("boyGender", boyGender);
    let moreInfo= document.getElementById("moreInfo");
    localStorage.setItem("moreInfo", moreInfo.value);
}