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

Codigo de Ejemplo:
```
  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if (!this.gameOver) {
      return;
    }
    this.gameBoard.classList.add('blur');
  }
