document.getElementById('inputName').addEventListener('input', function() {
    this.value = this.value
        .split(' ') // Divide o texto em palavras.
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza cada palavra
        .join(' '); // Junta as palavras novamente.
});// FUNCÃO: SOMENTE AS PRIMEIRAS LETRAS DE CADA PALAVRA DO INPUT SERÁ MAIÚSCULA.

