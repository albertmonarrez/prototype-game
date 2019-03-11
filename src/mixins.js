const mixinAdder = (superclass) => new MixinBuilder(superclass);

class MixinBuilder {
    // Takes two classes and creates a single one
    constructor(superclass) {
        this.superclass = superclass;
    }

    with(...mixins) {
        return mixins.reduce((c, mixin) => mixin(c), this.superclass);
    }
}


export {mixinAdder};