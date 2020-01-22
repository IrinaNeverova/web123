
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

var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
    /*каждый раз, когд вводят чтотл, мы проверяем, является ли корректным поле почты.*/
  if (email.validity.valid) {
    /*если появится сообщение об ошибке, если поле является корректным, мы удаляем сообщение об ошибке.*/
    error.innerHTML = ""; /* cбросить содержимое сообщения */
    error.className = "error"; /* cбросить визуальное состояние сообщения */
  }
}, false);
form.addEventListener("submit", function (event) {
  /*Каждый раз, когда пользователь пытается отправить данные, мы проверяем валидность поля электронной почты.*/
  if (!email.validity.valid) {
    
    /*Если поле невалидно, отображается пользовательское сообщение об ошибке.*/
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    /*и предотвращаем отправку формы путем отмены события*/
    event.preventDefault();
  }
}, false);
