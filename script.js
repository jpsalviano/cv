document.addEventListener('DOMContentLoaded', function () {
  const birthdate = '1989-10-05';
  const birthDateObj = new Date(birthdate);
  const currentDate = new Date();
  
  let age = currentDate.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDateObj.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDateObj.getDate())) {
    age--;
  }

  const ageElement = document.querySelector('.age');
  if (ageElement) {
    ageElement.textContent = age;
  }

  let currentYear = currentDate.getFullYear();

  const currentYearElement = document.querySelector('.current-year');
  if (currentYearElement) {
    currentYearElement.textContent = `2024 - ${currentYear}`;
  }
});
