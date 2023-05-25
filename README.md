# Proyecto2_SistemasWeb
Este proyecto incluye dos juegos clásicos de arcade: Tetris y Snake. Ambos juegos fueron desarrollados utilizando Angular, Node.js y firebase. 
1. Clonar repositorio `https://github.com/DiegoValdez10/Proyecto-1-STW`
2. Moverse al directorio: `cd Proyecto_2_STW`.<br />
3. Correr `npm install` para instalar dependencias.<br />
4. Correr `ng serve` para ver la página.
## Requisitos previos
1. Clonar repositorio `https://github.com/ManuelR11/Proyecto2_SistemasWeb`
2. Moverse al directorio: `cd Proyecto_2_STW`.<br />
3. Correr `npm install -g @angular/cli` en la terminal para instalar Angular Cli
4. Correr `npm install` para instalar dependencias.<br />
5. Correr `ng serve` para inicializar el código
6. Abre tu navegador web y visita la siguiente URL: `http://localhost:4200`
## Link de Firebase:

https://proyecto-2-stw.web.app/app
## Estructura
La estructura del proyecto esta realizada de la siguiente manera:

-src
  - app
    - Game-boy
    - game-engine
    - menu
    - snake
    - Tetris
  - Assets
### Game-Boy
  Game boy es el componente en el cual se creó el fondo del proyecto es decir el espacio donde los dos juegos y toda la aplicación fue desarrollada
### Game-engine
  Game-engine es el componente utilizado en el juego de snake donde se encuentra el funcionamiento lógico del juego de snake
### Menu
  Menu es el componente donde se hace la navegación desde el menu principal a los diferentes juegos
  
### Snake
En el componente de Snake se controla el comportamiento del juego de la serpiente.

### Tetris
En el componente de Tetris se encuentra la creación del juego de tetris y la lógica de este mismo
  - Assets
## Codigo de Ejemplo:
```
  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if (!this.gameOver) {
      return;
    }
    this.gameBoard.classList.add('blur');
  }
