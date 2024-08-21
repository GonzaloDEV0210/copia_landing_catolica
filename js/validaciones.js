const check_politicas = document.getElementById('check_politicas');
const input_nombre = document.getElementById('input_nombre');
const input_email = document.getElementById('input_email');
const input_celular = document.getElementById('input_celular');
const input_dni = document.getElementById('input_dni');
const input_nivel = document.getElementById('input_nivel');
const error_input_nombres = document.getElementById('error_input_nombres');
const error_input_email = document.getElementById('error_input_email');
const error_input_celular = document.getElementById('error_input_celular');
const error_input_dni = document.getElementById('error_input_dni');
const error_input_nivel = document.getElementById('error_input_nivel');
const error_email = document.getElementById('error_email');

check_politicas.addEventListener('change', ()=>{
    const selectedValue = input_nivel.value;
    if (check_politicas.checked) {
        if (input_nombre.value.trim() === '') {
            error_input_nombres.classList.remove('hidden');
        };
        if (input_email.value.trim() === '') {
            error_input_email.classList.remove('hidden');
        };
        if (input_celular.value.trim() === '') {
            error_input_celular.classList.remove('hidden');
        };
        if (input_dni.value.trim() === '') {
            error_input_dni.classList.remove('hidden');
        };
        if (selectedValue === 'Seleccione') {
            error_input_nivel.classList.remove('hidden');
        }
        
    } else {
        
    }
});

input_nombre.addEventListener('input', ()=>{
    if (input_nombre.value.trim() !== '') {
        error_input_nombres.classList.add('hidden');
    } else {
        error_input_nombres.classList.remove('hidden');
    }
});

input_email.addEventListener('input', ()=>{
    const condicion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input_email.value.trim() !== '') {
        error_input_email.classList.add('hidden');
        if (!condicion.test(input_email.value)) {
            error_email.classList.remove('hidden')
        } else {
            error_email.classList.add('hidden')
        }
    } else {
        error_input_email.classList.remove('hidden');
    }
    if (input_email.value === '') {
        error_email.classList.add('hidden')
    }
});

input_celular.addEventListener('input', ()=>{
    if (input_celular.value.trim() !== '') {
        error_input_celular.classList.add('hidden');
    } else {
        error_input_celular.classList.remove('hidden');
    }
});

input_dni.addEventListener('input', ()=>{
    if (input_dni.value.trim() !== '') {
        error_input_dni.classList.add('hidden');
    } else {
        error_input_dni.classList.remove('hidden');
    }
});

input_nivel.addEventListener('change', ()=>{
    const seleccion = input_nivel.value;
    if (seleccion !== 'Seleccione') {
        error_input_nivel.classList.add('hidden');
    } else {
        error_input_nivel.classList.remove('hidden');
    }
});