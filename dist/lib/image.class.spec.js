"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_class_1 = require("./image.class");
describe("Image class", () => {
    it("should return alphachannel = true for > 3 channels", () => {
        const SUT = new image_class_1.Image(200, 200, 123, 4);
        expect(SUT.hasAlphaChannel).toBeTruthy();
    });
    it("should return alphachannel = false for <= 3 channels", () => {
        const SUT = new image_class_1.Image(200, 200, 123, 3);
        expect(SUT.hasAlphaChannel).toBeFalsy();
    });
    it("should return alphachannel = false for <= 3 channels", () => {
        const SUT = new image_class_1.Image(200, 200, 123, 2);
        expect(SUT.hasAlphaChannel).toBeFalsy();
    });
    it("should return alphachannel = false for <= 3 channels", () => {
        const SUT = new image_class_1.Image(200, 200, 123, 1);
        expect(SUT.hasAlphaChannel).toBeFalsy();
    });
    it("should throw for <= 0 channels", () => {
        expect(() => new image_class_1.Image(200, 200, 123, 0)).toThrowError("Channel <= 0");
    });
    it("should have a default pixel density of 1.0", () => {
        const SUT = new image_class_1.Image(200, 200, 123, 1);
        expect(SUT.pixelDensity).toEqual({ scaleX: 1.0, scaleY: 1.0 });
    });
});
//# sourceMappingURL=image.class.spec.js.map