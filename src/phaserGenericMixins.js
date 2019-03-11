import {mixinAdder} from './mixins';
import {ScreenMixin, BackGroundMixin} from "./genericMixins";

class PhaserSceneMix extends mixinAdder(Phaser.Scene).with(ScreenMixin, BackGroundMixin) {

}

export {
    PhaserSceneMix,
};