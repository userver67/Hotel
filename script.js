document.addEventListener("DOMContentLoaded", () => {
    
    // Вспомогательная функция плавного переключения экранов
    function changeScreen(screenId) {
        document.querySelectorAll(".screen").forEach(screen => {
            screen.classList.remove("active");
        });
        const activeScreen = document.getElementById(screenId);
        if (activeScreen) {
            activeScreen.classList.add("active");
            document.querySelector(".mobile-wrapper").scrollTop = 0;
        }
    }

    // Кнопка перехода с Главного экрана к Меню услуг
    const goMenuBtn = document.getElementById("go-to-menu");
    if (goMenuBtn) {
        goMenuBtn.addEventListener("click", () => changeScreen("screen-2"));
    }

    // Универсальный переключатель через data-target
    document.querySelectorAll("[data-target]").forEach(element => {
        element.addEventListener("click", () => {
            const target = element.getAttribute("data-target");
            const chosenService = element.getAttribute("data-service");
            
            // Если переходим на форму и передаем название услуги
            if (target === "screen-5" && chosenService) {
                const serviceInput = document.getElementById("input-service");
                if (serviceInput) serviceInput.value = chosenService;
            }
            
            changeScreen(target);
        });
    });

    // Кнопка Назад на экране формы
    const formBack = document.getElementById("form-back");
    if (formBack) {
        formBack.addEventListener("click", () => changeScreen("screen-2"));
    }

    // Сабмит формы бронирования
    const bookingForm = document.getElementById("booking-form-element");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const clientName = document.getElementById("input-name").value;
            const chosenService = document.getElementById("input-service").value;
            const dateTime = document.getElementById("input-datetime").value;
            
            alert(`Успешно забронировано!\n\nГость: ${clientName}\nУслуга: ${chosenService}\nВремя: ${dateTime}`);
            
            bookingForm.reset();
            changeScreen("screen-1"); // Возврат на главную
        });
    }
});