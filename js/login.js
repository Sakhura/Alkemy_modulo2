$(document).ready(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();

        var email = $("#email").val();
        var password = $("#password").val();

        // Validación de campos
        if (email === "" || password === "") {
            $(".error-message").text("Por favor, complete todos los campos");
            return;
        }

        // Simulación de inicio de sesión (reemplazar con API real)
        if (email === "usuario@ejemplo.com" && password === "123456") {
            // Redirigir a la página principal
            window.location.href = "menu.html";
        } else {
            $(".error-message").text("Correo electrónico o contraseña incorrectos");
        }
    });
});
