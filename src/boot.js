let bootScene = new Phaser.Scene('Boot');


bootScene.preload = function () {
    this.load.image('logo', 'assets/logo.png');
    this.load.image('sky', 'assets/sky.png');
    this.load.image('platform', 'assets/platform.png');
    this.load.image('superlogo', 'assets/super.png');
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    this.load.audio('tape', 'assets/tape.ogg');
    this.load.audio('menuclick', 'assets/basicclick.wav');
    this.load.image('environment', 'assets/environment.png');


};

bootScene.create = function () {
    this.scene.start('Home');
};

export default {bootScene};