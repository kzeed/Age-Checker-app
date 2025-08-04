const btnEl  = document.getElementById("btn");
const brithdayEl  = document.getElementById("birthday");
 const resultEl  = document.getElementById("result"); 
  
 //Age calculation Function
function calculateAge(){
    const brithdayValue = brithdayEl.value;
    if(brithdayValue === "")  {
      alert("Please enter your birthday");
    } else{
        const age = getAge(brithdayValue);
        resultEl.innerText = `Your Age is" ${age} ${age > 1 ? "years" : "year"} old`;
    }

}

 //Get Age Function
function getAge(brithdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(brithdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if(
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ){
        age--;
    }

    return age;
}

 btnEl.addEventListener("click", calculateAge)