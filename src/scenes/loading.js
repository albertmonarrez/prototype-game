let loadScene = new Phaser.Scene('Boot');

loadScene.preload = function () {
    console.log('loading!');
};

loadScene.create = function () {
    this.scene.start('LevelOne');
};

export default {bootScene: loadScene};