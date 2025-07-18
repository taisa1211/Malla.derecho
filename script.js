// Definición de ramos con id, nombre, prerrequisitos y semestre
const ramos = [
  {id:"DERE001", nombre:"Introducción al Derecho", prereqs:[], semestre:1},
  {id:"DERE002", nombre:"Historia del Derecho", prereqs:[], semestre:1},
  {id:"DERE003", nombre:"Instituciones Políticas y Derecho Constitucional Orgánico", prereqs:[], semestre:1},
  {id:"DERE004", nombre:"Derecho Romano", prereqs:[], semestre:1},
  {id:"CEGHC11", nombre:"Habilidades Comunicativas", prereqs:[], semestre:1},

  {id:"DERE005", nombre:"Nociones de Economía", prereqs:[], semestre:2},
  {id:"DERE006", nombre:"Teoría de los Derechos y Acciones Constitucionales", prereqs:[], semestre:2},
  {id:"DERE007", nombre:"Fundamentos de Derecho Privado", prereqs:[], semestre:2},
  {id:"DERE008", nombre:"Interpretación y Argumentación", prereqs:[], semestre:2},
  {id:"ING119", nombre:"Inglés I", prereqs:[], semestre:2},

  {id:"DERE009", nombre:"Derechos Fundamentales", prereqs:["DERE006"], semestre:3},
  {id:"DERE010", nombre:"Negocio Jurídico y Teoría General de las Obligaciones", prereqs:["DERE007"], semestre:3},
  {id:"DERE011", nombre:"Derecho Procesal Parte General", prereqs:[], semestre:3},
  {id:"CEGPC13", nombre:"Pensamiento Crítico", prereqs:[], semestre:3},
  {id:"ING129", nombre:"Inglés II", prereqs:["ING119"], semestre:3},

  {id:"DERE012", nombre:"Fundamentos del Derecho Comercial y Teoría General de los títulos de crédito", prereqs:[], semestre:4},
  {id:"DERE013", nombre:"Derecho Internacional Público", prereqs:["DERE003"], semestre:4},
  {id:"DERE014", nombre:"Derecho de los Bienes", prereqs:["DERE010"], semestre:4},
  {id:"DERE015", nombre:"Normas Comunes a todo procedimiento", prereqs:["DERE011"], semestre:4},
  {id:"ING239", nombre:"Inglés III", prereqs:["ING129"], semestre:4},

  {id:"DERE016", nombre:"Principios Fundamentales del Derecho Penal y de la Pena", prereqs:["DERE009"], semestre:5},
  {id:"DERE017", nombre:"Derecho Administrativo I", prereqs:["DERE003"], semestre:5},
  {id:"DERE018", nombre:"Cumplimiento e incumplimiento de las obligaciones contractuales", prereqs:["DERE014"], semestre:5},
  {id:"DERE019", nombre:"Procedimientos Declarativos", prereqs:["DERE015"], semestre:5},
  {id:"DERE020", nombre:"Seminario de Integración", prereqs:["DERE001","DERE002","DERE004","DERE005","DERE008","DERE009","DERE012","DERE013","DERE014","DERE015"], semestre:5},
  {id:"ING249", nombre:"Inglés IV", prereqs:["ING239"], semestre:5},

  {id:"DERE021", nombre:"Derecho Societario", prereqs:[], semestre:6},
  {id:"DERE022", nombre:"Parte General del Derecho Penal", prereqs:["DERE016"], semestre:6},
  {id:"DERE023", nombre:"Derecho Administrativo II", prereqs:["DERE017"], semestre:6},
  {id:"DERE024", nombre:"Responsabilidad Extracontractual", prereqs:["DERE018"], semestre:6},
  {id:"DERE025", nombre:"Derecho Laboral", prereqs:[], semestre:6},
  {id:"DERE026", nombre:"Ejecución y Recursos", prereqs:["DERE019"], semestre:6},

  {id:"DERE027", nombre:"Derecho Tributario", prereqs:["DERE021"], semestre:7},
  {id:"DERE028", nombre:"Parte Especial del Derecho Penal", prereqs:["DERE022"], semestre:7},
  {id:"DERE029", nombre:"Contratos", prereqs:["DERE018"], semestre:7},
  {id:"DERE030", nombre:"Destrezas de asesoría legal", prereqs:["DERE018","DERE021","DERE023"], semestre:7},
  {id:"DERE031", nombre:"Derecho Procesal Penal", prereqs:["DERE022","DERE026"], semestre:7},
  {id:"DERE032", nombre:"Derecho, Innovación y Tecnología", prereqs:[], semestre:7},

  {id:"DERE033", nombre:"Litigación Oral", prereqs:["DERE030","DERE031"], semestre:8},
  {id:"DERE034", nombre:"Ética Profesional", prereqs:[], semestre:8},
  {id:"DERE035", nombre:"Derecho de Familia", prereqs:["DERE029"], semestre:8},
  {id:"DERE036", nombre:"Redacción Forense", prereqs:["DERE026","DERE029","DERE030"], semestre:8},
  {id:"DERE037", nombre:"Negociación y Mediación", prereqs:["DERE029","DERE030"], semestre:8},
  {id:"DERE038", nombre:"Seminario de Doctrina y Jurisprudencia", prereqs:[], semestre:8},

  {id:"DERE039", nombre:"Electivo I", prereqs:["DERE036","DERE037"], semestre:9},
  {id:"DERE040", nombre:"Seminario de Investigación", prereqs:["DERE038"], semestre:9},
  {id:"DERE041", nombre:"Derecho Sucesorio", prereqs:["DERE035"], semestre:9},
  {id:"DERE042", nombre:"Consultorio Jurídico I", prereqs:["DERE033","DERE034","DERE035","DERE036","DERE037","DERE038"], semestre:9},
  {id:"DERE043", nombre:"Derecho, Género e Inclusión", prereqs:["DERE009","DERE028","DERE035"], semestre:9},

  {id:"DERE044", nombre:"Electivo II", prereqs:["DERE039"], semestre:10},
  {id:"DERE045", nombre:"Electivo III", prereqs:["DERE039"], semestre:10},
  {id:"DERE046", nombre:"Electivo IV", prereqs:["DERE039"], semestre:10},
  {id:"DERE047", nombre:"Consultorio Jurídico II", prereqs:["DERE041","DERE042","DERE043"], semestre:10},
  {id:"DERE048", nombre:"Actividad Final de Graduación", prereqs:["DERE038","DERE039","DERE040","DERE041","DERE042","DERE043"], semestre:10}
];

const container = document.getElementById("malla-container");
const semestres = [...new Set(ramos.map(r => r.semestre))].sort();

// Cargar estado guardado
function cargarEstado() {
  const guardado = localStorage.getItem('mallaDerechoEstado');
  return guardado ? JSON.parse(guardado) : {};
}

// Guardar estado
function guardarEstado(estado) {
  localStorage.setItem('mallaDerechoEstado', JSON.stringify(estado));
}

// Renderizar acordeones y checkboxes
function renderizarMalla(estado) {
  container.innerHTML = "";
  semestres.forEach(sem => {
    const acc = document.createElement("button");
    acc.className = "accordion";
    acc.textContent = `Semestre ${sem}`;
    container.appendChild(acc);

    const panel = document.createElement("div");
    panel.className = "panel";

    const ramosDelSem = ramos.filter(r => r.semestre === sem);

    ramosDelSem.forEach(ramo => {
      const label = document.createElement("label");
      label.htmlFor = ramo.id;
      label.id = `label-${ramo.id}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = ramo.id;

      // Si existe estado guardado, aplicar
      checkbox.checked = estado[ramo.id] === true;

      const span = document.createElement("span");
      span.textContent = ramo.nombre;

      label.appendChild(checkbox);
      label.appendChild(span);
      panel.appendChild(label);

      // Evento para guardar estado y actualizar
      checkbox.addEventListener("change", () => {
        estado[ramo.id] = checkbox.checked;
        guardarEstado(estado);
        actualizarEstado(estado);
      });
    });

    container.appendChild(panel);
  });

  setupAccordion();
}

// Manejo acordeones
function setupAccordion() {
  const accs = document.getElementsByClassName("accordion");
  for(let i=0; i < accs.length; i++) {
    accs[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if(panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

// Actualizar estado visual y desbloqueo según prerrequisitos
function actualizarEstado(estado) {
  const aprobados = new Set(Object.entries(estado).filter(([k,v]) => v).map(([k]) => k));

  ramos.forEach(ramo => {
    const checkbox = document.getElementById(ramo.id);
    const label = document.getElementById(`label-${ramo.id}`);

    const aprobado = checkbox.checked;
    const desbloqueado = ramo.prereqs.every(pr => aprobados.has(pr));

    // Deshabilitar checkbox si no cumple prerrequisitos y no está aprobado
    checkbox.disabled = !desbloqueado && !aprobado;

    // Estilos
    if(aprobado) {
      label.classList.add("aprobado");
      label.classList.remove("bloqueado", "desbloqueado");
    } else if(desbloqueado) {
      label.classList.add("desbloqueado");
      label.classList.remove("bloqueado", "aprobado");
    } else {
      label.classList.add("bloqueado");
      label.classList.remove("desbloqueado", "aprobado");
    }
  });
}

// Inicialización
const estadoGuardado = cargarEstado();
renderizarMalla(estadoGuardado);
actualizarEstado(estadoGuardado);
