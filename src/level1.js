import keyboard from "./keyboard.js";
import mix from "./mixins.js";
import utils from "./utils.js";


class PhaserSceneMix extends mix.mixinAdder(Phaser.Scene).with(mix.ScreenMixin) {

}


let levelOne = new PhaserSceneMix('LevelOne');

levelOne.init = function () {
    this.playerSpeed = 300;
    this.jumpSpeed = 500;

}

levelOne.create = function () {
    this.floorCollision = this.add.group()
    this.player = this.createPlayer(0, this.getScreenHeight() - 220);
    let ground = this.addFloor();
    this.floorCollision.add(ground);
    this.physics.add.collider(this.player, this.floorCollision);
    utils.addBackground('backsky', this);
    this.cursors = this.input.keyboard.createCursorKeys();


}
levelOne.addFloor = function () {
    let floorHeight = this.textures.get('platform').get().height;
    let ground = this.add.tileSprite(10, this.getScreenHeight() - floorHeight - 5, this.getScreenWidth(), floorHeight, 'platform').setOrigin(0, 0);
    this.physics.add.existing(ground, true);
    return ground;

}

levelOne.createPlayer = function (x, y) {
    let player = this.physics.add.image(x, y, 'atlas', 'player/idle/player-idle-1').setOrigin(0, 0);
    player.setScale(5);
    player.setSize(20, 22).setOffset(5, 10);
    player.setScale(4);

    // this.player.body.setSize(12, 16, 8, 16);
    //add animations
    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNames('player/idle/player-idle-', 1, 4, '', 0),
        frameRate: 12,
        repeat: -1,
    });
    // this.anims.generateFrameNames('player/idle/player-idle-', 1, 4, '', 0);
    // this.player.anims.create('idle', this.anims.generateFrameNames('player/idle/player-idle-', 1, 4, '', 0), animVel - 3, true);
    // this.player.anims.add('run', Phaser.Animation.generateFrameNames('player/run/player-run-', 1, 6, '', 0), animVel, true);
    // this.player.anims.add('jump', ['player/jump/player-jump-1'], 1, false);
    // this.player.anims.add('fall', ['player/jump/player-jump-2'], 1, false);
    // this.player.anims.add('crouch', Phaser.Animation.generateFrameNames('player/crouch/player-crouch-', 1, 2, '', 0), 10, true);
    // this.player.anims.add('hurt', Phaser.Animation.generateFrameNames('player/hurt/player-hurt-', 1, 2, '', 0), animVel, true);
    // this.player.anims.play('idle');
    // timer
    // let hurtTimer = this.time.create(false);
    // hurtTimer.loop(500, this.resetHurt, this);
    player.body.setCollideWorldBounds(true);

    return player;

};
levelOne.update = function () {

    // this.player.body.setVelocityX(this.playerSpeed);
    let onGround = this.player.body.blocked.down || this.player.body.touching.down;

    if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-this.playerSpeed);
        this.player.flipX = true;


    } else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(this.playerSpeed);
        this.player.flipX = false;

    } else {
        this.player.body.setVelocityX(0);

    }
    if (onGround && (this.cursors.space.isDown || this.cursors.up.isDown)) {
        // give the player a velocity in y
        this.player.body.setVelocityY(-this.jumpSpeed);

    }

};


export default {LevelOne: levelOne};