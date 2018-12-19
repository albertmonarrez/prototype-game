const playSound = (wrappedFunction, sound, scene) => {
    return () => {
        scene.sound.play(sound);
        return wrappedFunction();
    };

};

export default {playSound};