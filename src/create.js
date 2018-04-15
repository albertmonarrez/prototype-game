import utils from "./utils.js";
import keyboard from "./keyboard.js";

export function create() {
    console.log('Create module create');
    utils.loadBackground(this);
    let width = utils.getScreenCenterWidth();
    let logo = this.add.image(width, 150, 'logo');
    keyboard.setupKeyboard(this);

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}

