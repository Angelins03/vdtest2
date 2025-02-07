$(document).ready(function () {
    $(".container").mousedown(function () {
      $(".card")
        .stop()
        .animate(
          {
            top: "-90px",
          },
          "slow"
        )
        .off("mouseup");
    });
  });
  
// Функция для перенаправления пользователя
function redirectToAnotherPage() {
    window.location.href = "loading.html"; // Замените на URL вашей другой страницы
  }
  
  // Функция для скрытия кнопки
  function hideButton() {
    const btnFalse = document.querySelector(".btn-false2");
    btnFalse.style.display = "none"; // Скрываем кнопку
  }