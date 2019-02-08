let ScreenMixin = (superclass) => class extends superclass {
    getScreenWidth() {
        return this.sys.game.config.width;
    }

    getScreenHeight() {
        return this.sys.game.config.height;
    }
};

const mixinAdder = (superclass) => new MixinBuilder(superclass);

class MixinBuilder {
    constructor(superclass) {
        this.superclass = superclass;
    }

    with(...mixins) {
        return mixins.reduce((c, mixin) => mixin(c), this.superclass);
    }
}


export default {ScreenMixin, mixinAdder};