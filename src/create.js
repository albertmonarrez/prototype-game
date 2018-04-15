import {screenWidth, screenHeight} from './config.js'

export function create() {
    console.log('Create module create');
    loadBackground(this)
    let width = getScreenCenterWidth()
    let logo = this.add.image(width, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}

function loadBackground(self) {
    let backgroundImageName = 'sky';
    let background = self.add.image(getScreenCenterWidth(), getScreenCenterHeight(), backgroundImageName)
    let scaleWidth = calculateScaleToFillScreen(background.width, screenWidth)
    let scaleHeight = calculateScaleToFillScreen(background.height, screenHeight)
    background.setScale(scaleWidth, scaleHeight);


}

function calculateScaleToFillScreen(number, screenWidthOrHeight) {
    /**
     * figures out the scale needed to multiply a number by to fill the entire screen
     */
    return screenWidthOrHeight / number
}

function getScreenCenter() {
    /**
     * Gets the center coordinates of the current screen width/height
     */
    return [getScreenCenterWidth(), getScreenCenterHeight()]

}

function getScreenCenterWidth() {
    return calculateCenter(screenWidth)
}

function getScreenCenterHeight() {
    return calculateCenter(screenHeight)

}

function calculateCenter(number) {
    /**
     * Figures out what the center coordinates should be based on the passed
     * in number
     */
    return number / 2

}