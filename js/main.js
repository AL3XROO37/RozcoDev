//Animacion para el menu desplegable, responsive
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});



// Palabras que cambiarán dinámicamente----------------------------------------------------------------
const words = ["Programador","Desarrollo Web", "Publicidad Creativa","Flyers Profesionales","Anuncios para Negocios", "Impulsa tu negocio"];
let currentWordIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");
const cursorElement = document.querySelector(".cursor");

function typeWord() {
    const currentWord = words[currentWordIndex];

    if (charIndex < currentWord.length) {
        // Agregar una letra a la vez
        typingElement.textContent += currentWord[charIndex];
        charIndex++;
        setTimeout(typeWord, 100); // Velocidad de escritura
    } else {
        // Pausa al terminar la palabra antes de borrarla
        setTimeout(eraseWord, 1500);
    }
}

function eraseWord() {
    const currentWord = words[currentWordIndex];

    if (charIndex > 0) {
        // Eliminar una letra a la vez
        typingElement.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseWord, 100); // Velocidad de borrado
    } else {
        // Cambiar a la siguiente palabra
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(typeWord, 700);
    }
}

// Iniciar la animación
typeWord();


//SCRIPT PARA DIA Y NOCHE TEMA---------------------------------------------------------
// Seleccionar el botón y el body
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Verificar la preferencia guardada o usar la del sistema
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Aplicar el tema inicial
const applyTheme = (theme) => {
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
};

// Aplicar el tema inicial
const initialTheme = userTheme || systemTheme;
applyTheme(initialTheme);

// Cambiar tema al hacer clic
toggleButton.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Guardar preferencia
});

// Cambiar icono del botón según el tema
toggleButton.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
toggleButton.addEventListener('click', () => {
    toggleButton.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

//---------Projects Script-----------------------------
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Actualizar botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filtrar proyectos
            projectCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

//hola como estas
// Obtener elementos del DOM
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Variables del carrusel
let images = [];
let currentImageIndex = 0;

// Abrir modal al hacer clic en una tarjeta
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Extraer título y descripción
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;

        // Obtener imágenes desde el atributo data-images
        const imageData = card.getAttribute('data-images');
        images = imageData.split(','); // Separar rutas de imágenes en un array

        // Configurar el modal
        currentImageIndex = 0;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = images[currentImageIndex];

        // Mostrar modal
        modal.style.display = "flex";
    });
});

// Botón anterior
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex];
});

// Botón siguiente
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex];
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


//---------Contact Form Script-----------------------------
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario

    var formData = new FormData(this);

    fetch('https://formsubmit.co/ajax/javier.rosas.orosco@gmail.com', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('formMessage').innerText = 'Mensaje enviado correctamente.';
            document.getElementById('contactForm').reset(); // Opcional: Resetea el formulario
        })
        .catch(error => {
            document.getElementById('formMessage').innerText = 'Error al enviar el mensaje.';
        });
});


    // JavaScript para cambiar la clase activa en el menú de navegación
    window.addEventListener('scroll', function () {
        var sections = document.querySelectorAll('section');
        var navLinks = document.querySelectorAll('.navbar a');
        var threshold = window.innerHeight / 2; // Ajusta este valor según sea necesario

        sections.forEach(function (section) {
            var rect = section.getBoundingClientRect();
            if (rect.top <= threshold && rect.bottom >= threshold) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

  //Animation

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.face-left, .face-right, .zoom-in, .rotate-in, .slide-up, .fade-in');

  const handleScroll = () => {
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      // Verificar si el elemento es visible y aún no tiene la clase .show
      if (rect.top < window.innerHeight - 50 && rect.bottom > 0 && !element.classList.contains('show')) {
        element.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  // Ejecutar al cargar para elementos visibles inicialmente
  handleScroll();
});

document.getElementById('language-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Si estás en el archivo index.html (Español), redirige a index2.html (Inglés)
    if (window.location.pathname.includes('index.html')) {
        window.location.href = 'index2.html';
    } else {
        // Si estás en el archivo index2.html (Inglés), redirige a index.html (Español)
        window.location.href = 'index.html';
    }
});
