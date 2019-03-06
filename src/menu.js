const defaultAction = function () {
    /*
    If no action is passed into menu item action this is used as a backup.
     */
    let label = this._menuLabel ? this._menuLabel : '';
    console.log(`${label} doing the default action)`);

};

class MenuFactory {
    constructor(gameScene) {
        this.gameScene = gameScene;
        this.menuItems = [];
    }

    createMenu() {
        let textArray = [];
        let defaultStyle = {
            fill: '#ffffff',
            align: 'center',
            lineSpacing: 6,
            stroke: '#000000',
            strokeThickness: 4
        };
        let spacing = 24;
        let defaultX = this.gameScene.sys.game.config.width / 2;
        let defaultY = this.gameScene.sys.game.config.height / 2;
        for (let index = 0; index < this.menuItems.length; index++) {

            let menuItem = this.menuItems[index];
            let style = menuItem._style ? menuItem._style : defaultStyle;
            let text = this.gameScene.add.text(defaultX, defaultY, menuItem._menuLabel, style)
            text.setOrigin(0.5, 0.5);
            text._menuLabel = menuItem._menuLabel;
            text.execute = menuItem.execute;
            textArray.push(text);
            defaultY += spacing;

        }
        return new Menu(textArray);

    }

    addMenuItem(menuLabel = 'some text', action = defaultAction, style = undefined) {
        let menuText = {};
        menuText._menuLabel = menuLabel;
        menuText.execute = action;
        menuText._style = style;
        this.menuItems.push(menuText);
    }

}

class Menu {
    constructor(textArray = []) {
        this.textArray = textArray;
        this.currentIndex = 0;
        this.highlightChoice(this.currentIndex);

    }

    highlightChoice(index) {
        let text = this.textArray[index];
        text.setStyle({fontStyle: "italic"});
        text.setText('> ' + text._menuLabel);

    }

    unHighlightChoice(index) {
        let text = this.textArray[index];
        text.setStyle({fontStyle: ""});
        text.setText(text._menuLabel);
    }

    next() {
        this.unHighlightChoice(this.currentIndex);
        this._next();
        this.highlightChoice(this.currentIndex);
    }

    previous() {
        this.unHighlightChoice(this.currentIndex);
        this._previous();
        this.highlightChoice(this.currentIndex);
    }

    _next() {
        if (this.currentIndex + 1 < this.textArray.length) {
            this.currentIndex++;
        } else
            this.currentIndex = 0;
    }

    _previous() {
        if (this.currentIndex - 1 > -1) {
            this.currentIndex--;
        } else
            this.currentIndex = this.textArray.length - 1;
    }

    execute() {
        if (this.textArray.length > 0) {
            this.textArray[this.currentIndex].execute();
        } else console.log('The textArray on this object is empty!');
    }


}


export default {MenuFactory, Menu};