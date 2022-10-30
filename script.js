function validate()
{
    const firstName = document.getElementById("first-name").value 
    const lastName = document.getElementById("last-name").value 
    const emailValue= document.getElementById("email").value 
    const numberValue = document.getElementById("number").value 
   let check = false // const genderValue = document.getElementById("gender").value 
if(firstName && !(firstName.includes("1")||firstName.includes("2")||firstName.includes("3")||firstName.includes("4")||firstName.includes("5")||firstName.includes("6")||firstName.includes("7")||firstName.includes("8")||firstName.includes("9")||firstName.includes("0")))
{
    document.getElementById("first-name-valid").style.display = 'block'
    document.getElementById("first-name-invalid").style.display = 'none'
}
else
{ check = true
    document.getElementById("first-name-valid").style.display = 'none'
    document.getElementById("first-name-invalid").style.display = 'block'
}
if(lastName && !(lastName.includes("1")||lastName.includes("2")||lastName.includes("3")||lastName.includes("4")||lastName.includes("5")||lastName.includes("6")||lastName.includes("7")||lastName.includes("8")||lastName.includes("9")||lastName.includes("0")))
{
    document.getElementById("last-name-valid").style.display = 'block'
    document.getElementById("last-name-invalid").style.display = 'none'
}
else
{ check = true
    document.getElementById("last-name-valid").style.display = 'none'
    document.getElementById("last-name-invalid").style.display = 'block'
}
if(emailValue && emailValue.includes('@') && emailValue.includes('.') && emailValue.indexOf('@')!=0 && emailValue.lastIndexOf(".") <= emailValue.length - 3)
{ 
    document.getElementById("email-valid").style.display = 'block'
    document.getElementById("email-invalid").style.display = 'none'
}
else
{ check = true
    document.getElementById("email-valid").style.display = 'none'
    document.getElementById("email-invalid").style.display = 'block'
}
if(!numberValue || isNaN(numberValue) || numberValue.length < 10)
{ check = true
    document.getElementById("number-valid").style.display = 'none'
    document.getElementById("number-invalid").style.display = 'block'
}
else
{
    document.getElementById("number-valid").style.display = 'block'
    document.getElementById("number-invalid").style.display = 'none'
}
if(document.getElementById("male").checked)
{
    document.getElementById("gender-valid").style.display = 'block'
    document.getElementById("gender-invalid").style.display = 'none'
}
else if(document.getElementById("female").checked)
{
    document.getElementById("gender-valid").style.display = 'block'
    document.getElementById("gender-invalid").style.display = 'none'
}
else if(document.getElementById("other").checked)
{
    document.getElementById("gender-valid").style.display = 'block'
    document.getElementById("gender-invalid").style.display = 'none'
}
else
{ check = true
    document.getElementById("gender-valid").style.display = 'none'
    document.getElementById("gender-invalid").style.display = 'block'
}

if(document.getElementById("countryDefault").selected)
{ check = true 
    document.getElementById("country-valid").style.display = 'none'
    document.getElementById("country-invalid").style.display = 'block'
}

else
{
    document.getElementById("country-valid").style.display = 'block'
    document.getElementById("country-invalid").style.display = 'none' 
}
if(!check)
{
    alert("Your form have been saved successfully !")
    document.getElementById("first-name-valid").style.display = 'none'
    document.getElementById("last-name-valid").style.display = "none"
    document.getElementById("email-valid").style.display = "none"
    document.getElementById("number-valid").style.display = "none"
    document.getElementById("country-valid").style.display = "none"
    document.getElementById("gender-valid").style.display = 'none'

}


}