import * as Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene '});
  }

  preload() {
    console.log('Preload');
  }
}