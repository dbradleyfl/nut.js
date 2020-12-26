import { Point } from "../point.class";
import { Region } from "../region.class";
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeAt: (position: Point) => {};
            toBeIn: (region: Region) => {};
        }
    }
}
export declare const jestMatchers: {
    toBeAt: (received: import("../mouse.class").Mouse, position: Point) => Promise<{
        message: () => string;
        pass: boolean;
    }>;
    toBeIn: (received: import("../mouse.class").Mouse, region: Region) => Promise<{
        message: () => string;
        pass: boolean;
    }>;
};
//# sourceMappingURL=jest.matcher.function.d.ts.map