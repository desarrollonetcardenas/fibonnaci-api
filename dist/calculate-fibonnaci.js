"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fibonnaci = void 0;
class Fibonnaci {
    calculate(value) {
        if (value <= 1)
            return value;
        return this.calculate(value - 1) + this.calculate(value - 2);
    }
}
exports.Fibonnaci = Fibonnaci;
//# sourceMappingURL=calculate-fibonnaci.js.map