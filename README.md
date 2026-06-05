# 🌌 Rick and Morty - Buscador y Filtro Avanzado del DOM

Aplicación web interactiva que consume la API de Rick and Morty, diseñada para demostrar el control avanzado del DOM, la asincronía y la gestión de estados mediante filtros combinados en tiempo real.

## 🚀 Características y Lógica Implementada

* **Consumo de API Asincrónica:** Uso del método `fetch` y encadenamiento de Promesas (`.then()`, `.catch()`) para la obtención e inicialización de datos desde un servidor externo.
* **Filtros Multi-criterio en Tiempo Real (Manejo de Estado Global):** Implementación de una función de filtrado reactivo que combina tres criterios simultáneos (búsqueda por texto con `keyup`, filtro por género con `change` y filtro por especie). Los filtros preservan el estado gracias al uso de un array global (`personajesGlobal`).
* **Renderización Dinámica del DOM:** Creación y mutación dinámica de la interfaz mediante *Template Strings* inyectados eficientemente a través de la propiedad `innerHTML`.
* **Programación Funcional:** Uso intensivo de métodos declarativos de arrays en JavaScript, específicamente encadenamiento de `.filter()` y ciclos `.forEach()`.
* **Interfaz Responsiva:** Maquetación moderna utilizando el sistema de rejilla (Grid/Rows/Cols) y componentes de tarjetas (Cards) de **Bootstrap 5**.

## 🛠️ Tecnologías

* **JavaScript (ES6+)** - Lógica, asincronía y manipulación del DOM.
* **Bootstrap 5** - Framework de estilos y diseño responsivo.
* **HTML5** - Estructura semántica.
