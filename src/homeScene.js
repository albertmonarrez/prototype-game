import utils from "./utils.js";
import keyboard from "./keyboard.js";
import menu from "./menu.js";
import su from "./soundutils.js";

let homeScene = new Phaser.Scene('Home');

homeScene.create = function () {
    utils.loadBackground(this);
    let width = utils.getScreenCenterWidth();
    this.environment = this.add.tileSprite(0, 0, 1200, 800, 'environment')
    this.environment.setOrigin(0,0);
    this.environment.alpha = 0.03;
    this.environment.setScale(3.5);
    let logo = this.add.image(width, 300, 'superlogo');
    logo.setScale(1.5);

    let menuFactory = new menu.MenuFactory(this);
    menuFactory.addMenuItem('Level Select', () => {
        this.scene.start('LevelTwo');
    });
    menuFactory.addMenuItem('View High Scores');
    menuFactory.addMenuItem('Some more text');
    let selectMenu = menuFactory.createMenu();
    let keyFunctionMap = {
        'ArrowUp': su.playSound(selectMenu.previous.bind(selectMenu), 'menuclick', this),
        'ArrowDown': su.playSound(selectMenu.next.bind(selectMenu), 'menuclick', this),
        'Enter': selectMenu.execute.bind(selectMenu),
    }

    let keyboardInput = new keyboard.Keyboard(this, keyFunctionMap);
    this.sound.play('tape');

}
homeScene.update = function () {
    this.environment.tilePositionX+= 1;

};


export default {homeScene};