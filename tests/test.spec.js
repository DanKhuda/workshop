function test(a, b) {
    return a + b;
}

describe("test for test function", () => {
    it('should sum two arguments', () => {
        expect(test(1, 2)).toEqual(3);
    });
});
