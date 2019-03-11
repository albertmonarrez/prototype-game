const ScreenMixin = (superclass) => class extends superclass {
    /*
Has accessory functions to
to pull in width and height from the game object
mix this in what a Phaser game
*/
    getScreenWidth() {
        return this.sys.game.config.width;
    }

    getScreenHeight() {
        return this.sys.game.config.height;
    }
};
const BackGroundMixin = (superclass) => class extends superclass {
    addBackground(backgroundName, fitToScreen = true) {
        let textureObjects = this.sys.textures.list;
        if (textureObjects.hasOwnProperty(backgroundName) != true) {
            console.log(`Couldn't add background: '${backgroundName}'. Name not in texture list`);
            return;
        }
        let gameWidth = this.sys.game.config.width;
        let gameHeight = this.sys.game.config.height;
        let background = this.add.image(0, 0, backgroundName);
        background.depth = -1;
        // Center bg
        background.setPosition(gameWidth / 2, gameHeight / 2);
        if (fitToScreen)
            background.setScale(gameWidth / background.width, gameHeight / background.height);
        return background;

    }
};
export {ScreenMixin, BackGroundMixin};