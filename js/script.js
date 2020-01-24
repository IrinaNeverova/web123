
// функция для установки заданной темы / цветовой схемы
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// функция переключения между светлой и темной темой
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// cразу вызывается функция для установки темы при начальной загрузке
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
   } else {
      setTheme('theme-light');
   }
})();

/*Validace*/

function check() {
  if(!document.getElementById("userEmailId").checkValidity()) {

    alert("input not valid!");

  }else {
    
    callMeIfValid();
  }
}

function callMeIfValid() {

  alert("valid input");
}