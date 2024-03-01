$(document).ready(function() {
    // Simular la obtención del saldo actual (reemplazar con API real)
    var saldoActual = "1.000.000";
    $("#saldo-cuenta").text("$ " + saldoActual.toFixed(2));

    $("#ver-transacciones").click(function() {
        window.location.href = "transactions.html";
    });

    $("#realizar-deposito").click(function() {
        window.location.href = "deposit.html";
    });

    $("#enviar-dinero").click(function() {
        window.location.href = "sendmoney.html";
    });
});
