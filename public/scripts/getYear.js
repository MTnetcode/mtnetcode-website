export default function setYear() {
  let showYear = document.getElementById("year");
  let currentYear = new Date().getFullYear();
  showYear.innerHTML = currentYear;
}
