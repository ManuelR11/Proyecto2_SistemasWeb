# Proyecto2_SistemasWeb
Este proyecto incluye dos juegos clásicos de arcade: Tetris y Snake. Ambos juegos fueron desarrollados utilizando Angular, Node.js y firebase. 
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
  #### Codigo De Ejemplo
  ```.arcade-screen {
    background-image: linear-gradient(to bottom,#a83386, #4a2a6e);
    max-width: 100%;
    height: auto;
    padding: 20px;
    box-sizing: border-box;
    border: 10px solid rgb(19, 6, 16);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 0 25px black;
  } 
  ```
### Game-engine
  Game-engine es el componente utilizado en el juego de snake donde se encuentra el funcionamiento lógico del juego de snake
    #### Codigo De Ejemplo
    
      export function outsideGrid(position: any) {
  `    position.x < 1 || position.x > GRID_SIZE ||
 ```   position.y < 1 || position.y > GRID_SIZE
```
### Menu
  Menu es el componente donde se hace la navegación desde el menu principal a los diferentes juegos
  
  
```  </div> 
  <div class="arcade-select">
    <button class="arcade-button" (click)="navigateToSnake()">Snake</button>
    <button class="arcade-button" (click)="navigateToTetris() ">Tetris</button>
  </div>  
  ```
### Snake
En el componente de Snake se controla el comportamiento del juego de la serpiente.
  #### Codigo De Ejemplo
    ```  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if (!this.gameOver) {
      return;
    }
    this.gameBoard.classList.add('blur');
  }

### Tetris
En el componente de Tetris se encuentra la creación del juego de tetris y la lógica de este mismo
  #### Codigo De Ejemplo
    ``` <div class="button-container">
            <button
                (click)="play()"
                class="play-button"
                *ngIf="!gameStarted"
            >
                Play
            </button>
            <button
                (click)="gameOver()"
                class="reset-button"
                *ngIf="gameStarted"
            >  ```
  - Assets


