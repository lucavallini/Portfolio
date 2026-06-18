# 🗂️ Portfolio Personal — Luca Vallini

![Hero section del portfolio](/public/assets/img/portfolio.png)

> Portfolio personal desarrollado con HTML, CSS, TypeScript y Web Components nativos. Diseñado para ser escalable: toda la información personal se gestiona desde un único archivo `data.json`.

---

## 🚀 Stack tecnológico

| Tecnología | Uso |
|---|---|
| **TypeScript** | Lógica de componentes y tipado estático |
| **Web Components** | Componentes nativos sin frameworks |
| **HTML5** | Estructura semántica |
| **CSS3** | Estilos personalizados con custom properties |
| **Vite** | Build tool y servidor de desarrollo |
| **Devicons** | Íconos de tecnologías |
| **Font Awesome** | Íconos de contacto |
| **Google Fonts** | Tipografías (Rock Salt + Inter) |

---

## 📁 Estructura del proyecto

```
portfolio/
├── public/
│   ├── assets/
│   │   └── img/              # Imágenes estáticas
│   └── data.json             # Única fuente de verdad
├── src/
│   ├── components/
│   │   ├── atoms/            # Componentes reutilizables
│   │   │   ├── contact-link.ts
│   │   │   ├── project-card.ts
│   │   │   ├── tech-badge.ts
│   │   │   └── title-card.ts
│   │   └── sections/         # Secciones de la página
│   │       ├── about-section.ts
│   │       ├── hero-section.ts
│   │       ├── project-section.ts
│   │       ├── tech-section.ts
│   │       └── title-section.ts
│   ├── services/
│   │   └── data.service.ts   # Carga y tipado del JSON
│   ├── styles/
│   │   ├── base.css          # Variables, reset, tipografía
│   │   └── layout.css        # Grid, secciones, componentes
│   ├── types/
│   │   └── portfolio.types.ts # Interfaces TypeScript
│   └── main.ts               # Entry point
├── index.html
├── tsconfig.json
└── package.json
```

---

## 🧩 Arquitectura

El proyecto sigue una arquitectura basada en **Web Components nativos** con separación clara entre datos, lógica y presentación.

### Flujo de datos

```
data.json → data.service.ts → main.ts → secciones → átomos
```

1. `data.service.ts` carga el JSON y devuelve los datos tipados como `PortfolioData`
2. `main.ts` distribuye cada parte del objeto a su sección correspondiente
3. Cada sección recibe sus datos mediante el método `setData()`
4. Los átomos reciben datos via atributos HTML

### Atomic Design

Los componentes se dividen en dos niveles:

**Átomos** — piezas pequeñas y reutilizables:
- `contact-link` → ícono de contacto con comportamiento (abrir link o copiar mail)
- `tech-badge` → tecnología con ícono y nivel
- `project-card` → card de proyecto con imagen, descripción, tecnologías y repo
- `title-card` → título académico o certificación

**Secciones** — contenedores que consumen átomos:
- `hero-section`, `about-section`, `project-section`, `tech-section`, `title-section`

---

## 📄 data.json — Fuente de verdad

Toda la información personal se centraliza en `public/data.json`. Para agregar una nueva tecnología, proyecto o título, solo hay que editar este archivo.

```json
{
  "hero": { "name": "Luca", "lastName": "Vallini", "info": [...], "contact": [...], "img": "..." },
  "about": { "description": [...] },
  "projects": [{ "name": "...", "description": "...", "technologies": [...], "repo": "...", "img": "..." }],
  "technologies": [{ "name": "...", "level": "...", "category": "...", "icon": "..." }],
  "titles": [{ "name": "...", "institution": "...", "state": "..." }]
}
```

### Tipos disponibles

```typescript
type TechLevel    = "basic" | "intermediate" | "intermediate/advanced" | "advanced"
type TechCategory = "frontend" | "backend" | "database"
type TitleState   = "in progress" | "completed"
```

---

## ⚙️ Instalación y uso

### Requisitos

- Node.js 18+
- npm

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/lucavallini/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

El servidor de desarrollo corre en `http://localhost:5173`.

---

## 📐 Sistema de diseño

El proyecto usa **CSS custom properties** para un sistema de diseño consistente y fácil de mantener.

```css
:root {
  /* Colores */
  --color-primary: #008f68;
  --color-bg: #212121;
  --color-bg-secondary: #3a3b3a;
  --color-text: #e0e0e0;

  /* Tipografía */
  --font-family: 'Inter', sans-serif;
  --font-family-display: 'Rock Salt', cursive;

  /* Espaciado (sistema de 8px) */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 4rem;
}
```

---

## 👤 Autor

**Luca Vallini**
Estudiante de Tecnicatura Universitaria en Programación — UTN FRVT, Venado Tuerto, Argentina.

[![GitHub](https://img.shields.io/badge/GitHub-lucavallini-181717?style=flat&logo=github)](https://github.com/lucavallini)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-luca--vallini-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/luca-vallini)
