"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sioux_1 = require("./Sioux");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Sioux',
    nation: 'the Sioux Nation',
    colors: ['#C27C4E', '#FFF'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Sioux_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map