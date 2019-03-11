import {screenWidth} from "./constants";
import {
    calculateScaleToFillScreen,
    getScreenCenterHeight,
    getScreenCenterWidth
} from "./utils";
import {screenHeight} from "./constants";

function loadBackground(gamescene) {
    let imageName = "sky";
    let background = gamescene.add.image(getScreenCenterWidth(), getScreenCenterHeight(), imageName);
    let scaleWidth = calculateScaleToFillScreen(background.width, screenWidth);
    let scaleHeight = calculateScaleToFillScreen(background.height, screenHeight);
    background.setScale(scaleWidth, scaleHeight);

}

const addBackground = (backgroundName, gameScene, fitToScreen = true) => {
    let textureObjects = gameScene.sys.textures.list;
    if (textureObjects.hasOwnProperty(backgroundName) != true) {
        console.log(`Couldn't add background: '${backgroundName}'. Name not in texture list`);
        return;
    }
    let gameWidth = gameScene.sys.game.config.width;
    let gameHeight = gameScene.sys.game.config.height;
    let background = gameScene.add.image(0, 0, backgroundName);
    background.depth = -1;
    // Center bg
    background.setPosition(gameWidth / 2, gameHeight / 2);
    if (fitToScreen)
        background.setScale(gameWidth / background.width, gameHeight / background.height);
    return background;

};

export {addBackground};
export {loadBackground};