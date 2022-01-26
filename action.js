const form = document.querySelector("form")
const inputs = document.querySelectorAll("input")
const emailInput = document.getElementById("email")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    inputs.forEach(input => {
        
        if(!input.value) {
            input.parentElement.classList.add("error")
            input.classList.add("input-class")
            if (input.name == "email"){
                emailInput.placeholder="email@example/com"
                emailInput.classList.add("email")
            }
        }   
        else if (input.name == 'email'){ 

            if(validateEmail(input.value)) {
                    input.parentElement.classList.remove("error")   
            } else {
                input.parentElement.classList.add("error")
                document.getElementById("email-error").style.display = "none"
                document.getElementById("email-verify-error").style.display = "block"

              }
        } 
        else {
            input.parentElement.classList.remove("error")   
        }        
                
    }) 
})

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}