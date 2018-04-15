import {screenHeight, screenWidth} from "./config.js";

function loadBackground(self) {

    let imageName = "sky";
    let background = self.add.image(getScreenCenterWidth(), getScreenCenterHeight(), imageName);
    let scaleWidth = calculateScaleToFillScreen(background.width, screenWidth);
    let scaleHeight = calculateScaleToFillScreen(background.height, screenHeight);
    background.setScale(scaleWidth, scaleHeight);

}

function calculateScaleToFillScreen(number, screenWidthOrHeight) {
    /**
     * figures out the scale needed to multiply a number by to fill the entire screen
     */
    return screenWidthOrHeight / number;
}

function getScreenCenter() {
    /**
     * Gets the center coordinates of the current screen width/height
     */
    return [getScreenCenterWidth(), getScreenCenterHeight()];

}

function getScreenCenterWidth() {
    return calculateCenter(screenWidth);
}

function getScreenCenterHeight() {
    return calculateCenter(screenHeight);

}

function calculateCenter(number) {
    /**
     * Figures out what the center coordinates should be based on the passed
     * in number
     */
    return number / 2;

}

export default {
    loadBackground,
    calculateScaleToFillScreen,
    calculateCenter,
    getScreenCenter,
    getScreenCenterWidth,
    getScreenCenterHeight
};
