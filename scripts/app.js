const studentFullName = "Tejkumar Upeshkumar Patel";
const studentNumber = 1198877;

console.log('$(studentNumber) -${studentNumber}');

const headerContent = document.querySelector("h1");
headerContent.innerHTML = `${studentFullName} - ${studentNumber}`;
headerContent.classList.add("headingPrimary");