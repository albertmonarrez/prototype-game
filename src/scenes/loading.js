let bootScene = new Phaser.Scene('Boot');

bootScene.preload = function () {
    console.log('loading!');
};

bootScene.create = function () {
    this.scene.start('LevelOne');
};

export {bootScene};