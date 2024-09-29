document.getElementById('credit-form').addEventListener('input', function () {
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const duration = parseFloat(document.getElementById('duration').value) || 1;

    // Monthly payment formula
    const monthly = (amount / duration).toFixed(1).replace('.', ','); // Changed to replace '.' with ','
    document.getElementById('monthly').value = `${monthly} DH`;
});

document.getElementById('credit-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Votre demande de crédit a été soumise avec succès !');
});
