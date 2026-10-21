"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SittingBull = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Sioux_1 = require("../Sioux");
class SittingBull extends Leader_1.default {
    static civilization() {
        return Sioux_1.default;
    }
    name() {
        return 'Sitting Bull';
    }
}
exports.SittingBull = SittingBull;
exports.default = SittingBull;
//# sourceMappingURL=SittingBull.js.map