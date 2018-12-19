import utils from "./utils.js";
import keyboard from "./keyboard.js";
import menu from "./menu.js";
import su from "./soundutils.js";

let homeScene = new Phaser.Scene('Home');

homeScene.create = function () {
    utils.loadBackground(this);
    let width = utils.getScreenCenterWidth();
    let logo = this.add.image(width, 300, 'superlogo');
    logo.setScale(1.5);

    let menuFactory = new menu.MenuFactory(this);
    menuFactory.addMenuItem('Level Select', () => {
        this.scene.start('LevelTwo');
    });
    menuFactory.addMenuItem('View High Scores');
    let selectMenu = menuFactory.createMenu();
    let keyFunctionMap = {
        'ArrowUp': su.playSound(selectMenu.previous.bind(selectMenu), 'menuclick', this),
        'ArrowDown': su.playSound(selectMenu.next.bind(selectMenu), 'menuclick', this),
        'Enter': selectMenu.execute.bind(selectMenu),
    }

    let keyboardInput = new keyboard.Keyboard(this, keyFunctionMap);
    this.sound.play('tape');

}


export default {homeScene};