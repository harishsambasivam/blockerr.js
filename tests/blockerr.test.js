const { blockMacroTaskQueue } = require('../index');

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
test('Should block the macro task queue', () => {
    blockMacroTaskQueue(5);
    jest.runAllTimers();
    console.log(setTimeout.mock.calls.length);
    expect(setTimeout.mock.calls.length).toBeGreaterThan(100);
});
