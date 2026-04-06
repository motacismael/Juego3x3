# 🇩🇴 Tres en Raya — Mi Primer Juego en React

**Autor:** Carlos Ismael Mota

## 📖 Descripción

Este es un juego clásico de **Tres en Raya (Tic-Tac-Toe)** desarrollado con **React.js** como parte de mi aprendizaje en el mundo del desarrollo web con componentes modernos. El juego cuenta con una temática dominicana, utilizando los colores de la bandera de la República Dominicana (azul, rojo y blanco) en toda su interfaz.

### Características principales:
- 🎮 Tablero interactivo de 3x3
- 🔄 Turnos alternados entre **Jugador Quisqueya** (❌) y **Jugador Taíno** (⭕)
- 🏆 Detección automática de ganador con animación de celebración
- 🤝 Detección de empate
- 💾 Persistencia del juego con `localStorage` (el juego se guarda al recargar la página)
- 📱 Diseño completamente responsive
- ✨ Animaciones y micro-interacciones modernas

## 🚀 Cómo ejecutar el proyecto

```bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

Luego abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🛠️ Tecnologías utilizadas

- **React.js** — Biblioteca para construir interfaces de usuario
- **Vite** — Herramienta de build ultrarrápida
- **CSS3** — Estilos personalizados con variables CSS y animaciones
- **Google Fonts (Outfit)** — Tipografía moderna

## 📂 Estructura del proyecto

```
src/
├── components/
│   ├── Board.jsx      # Componente del tablero 3x3
│   └── Square.jsx     # Componente de una casilla individual
├── App.jsx            # Componente principal con la lógica del juego
├── constants.js       # Constantes (combinaciones ganadoras, nombres)
├── index.css          # Estilos con temática dominicana
└── main.jsx           # Punto de entrada de React
```

## 📚 Qué aprendí

Este proyecto fue una experiencia fundamental para consolidar mis conocimientos en React. Los principales conceptos que apliqué fueron:

- **`useState`**: Aprendí a manejar el estado de la aplicación de forma declarativa. Usé `useState` tanto para controlar el tablero (un array de 9 posiciones) como para rastrear de quién es el turno actual. Lo más interesante fue aprender a inicializar el estado con una función lazy para leer de `localStorage`.

- **`useEffect`**: Este hook me permitió sincronizar el estado del juego con `localStorage`. Cada vez que el tablero o el turno cambian, el efecto se ejecuta y guarda los datos automáticamente. Entendí bien el concepto de las dependencias y cómo controlar cuándo se ejecuta el efecto.

- **Componentes funcionales y props**: Dividir la interfaz en componentes reutilizables (`Square`, `Board`, `App`) me ayudó a entender la arquitectura basada en componentes de React. Aprendí a pasar datos hacia abajo con props y a comunicar eventos hacia arriba con funciones callback.

- **Inmutabilidad del estado**: Un concepto clave que aprendí es que nunca se debe mutar el estado directamente. Siempre creé copias del array del tablero con el spread operator (`[...board]`) antes de modificarlo.

## 🧗 Qué parte fue más difícil

La parte más desafiante del proyecto fue sin duda la **implementación de la lógica para detectar al ganador**. Al principio intenté hacerlo de forma manual comparando cada fila, columna y diagonal, pero el código se volvía repetitivo y difícil de mantener. La solución fue crear un array con las 8 combinaciones ganadoras posibles y recorrerlo con un loop — esto hizo el código mucho más limpio y escalable.

Otro reto importante fue la **integración de `localStorage`** para persistir el estado del juego. Tuve que entender bien cómo serializar y deserializar los datos con `JSON.stringify` y `JSON.parse`, y cómo usar la inicialización lazy de `useState` para leer los datos guardados solo en el primer renderizado. También fue un desafío manejar el caso de cuando no hay datos guardados y el juego debe iniciar desde cero.

Finalmente, lograr que las **animaciones CSS** se sintieran fluidas y profesionales requirió bastante experimentación con `keyframes`, `cubic-bezier`, y la coordinación entre los estados de React y las clases CSS dinámicas.

---

*Proyecto inspirado en los tutoriales de Fazt Code y midudev.*
