let oscuro = false;

const libros = {
  "Génesis": 50,
  "Éxodo": 40,
  "Levítico": 27,
  "Números": 36,
  "Deuteronomio": 34,
  "Josué": 24,
  "Jueces": 21,
  "Rut": 4,
  "1 Samuel": 31,
  "2 Samuel": 24,
  "Mateo": 28,
  "Marcos": 16,
  "Lucas": 24,
  "Juan": 21,
  "Hechos": 28,
  "Romanos": 16,
  "Apocalipsis": 22
};

mostrarLibros();

function mostrarLibros() {

  let html = "";

  for (let libro in libros) {

    html += `
      <div class="libro"
      onclick="mostrarCapitulos('${libro}')">
      📖 ${libro}
      </div>
    `;

  }

  document.getElementById("contenido").innerHTML = html;

}

function mostrarCapitulos(libro) {

  let total = libros[libro];

  let html = `
    <h2>${libro}</h2>

    <button onclick="mostrarLibros()">
      ⬅ Volver
    </button>

    <br><br>
  `;

  for (let i = 1; i <= total; i++) {

    html += `
      <button class="capitulo"
      onclick="mostrarVersiculos('${libro}',${i})">
      ${i}
      </button>
    `;

  }

  document.getElementById("contenido").innerHTML = html;

}

function mostrarVersiculos(libro, capitulo) {

  document.getElementById("contenido").innerHTML = `

    <h2>📖 ${libro} ${capitulo}</h2>

    <button onclick="mostrarCapitulos('${libro}')">
      ⬅ Volver
    </button>

    <br><br>

    <div class="libro">
      Aquí aparecerán los versículos cuando agreguemos los archivos JSON de la Biblia.
    </div>

  `;

}

function filtrar() {

  let texto =
    document.getElementById("buscar")
      .value
      .toLowerCase();

  let html = "";

  for (let libro in libros) {

    if (libro.toLowerCase().includes(texto)) {

      html += `
        <div class="libro"
        onclick="mostrarCapitulos('${libro}')">
        📖 ${libro}
        </div>
      `;

    }

  }

  document.getElementById("contenido").innerHTML = html;

}

function modoOscuro() {

  if (!oscuro) {

    document.body.classList.add("oscuro");
    oscuro = true;

  } else {

    document.body.classList.remove("oscuro");
    oscuro = false;

  }

}
