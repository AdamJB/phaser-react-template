import * as Phaser from 'phaser'
import MainScene from '../scenes/mainScene';
import GameController from '../controllers/gameController';

export default class Game extends Phaser.Game {
  constructor() {
    const config = {
      backgroundColor: '#000000',
      type: Phaser.AUTO,
      parent: 'gameContainer',
      width: 800,
      height: 600,
      scene: [MainScene]
    };
    super(config);
    this.gameController = new GameController();  
  }
}