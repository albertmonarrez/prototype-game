import {loadBackground} from "./backgroundUtils";

const gameSceneMock = jest.fn();
const width = 500;
const height = 600;
const mockScale = (x, y) => {

};
gameSceneMock.add = {};
gameSceneMock.add.image = function () {
    return {'width': width, 'height': height, setScale: mockScale};
};
test('Checks load background', () => {
    loadBackground(gameSceneMock);
});
