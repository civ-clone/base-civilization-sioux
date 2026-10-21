"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sioux_1 = require("./Sioux");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
[
    'Paha Sapa',
    'Mni Sota',
    'Wounded Knee',
    'Greasy Grass',
    'Pine Ridge',
    'Rosebud',
    'Standing Rock',
    'Cheyenne River',
    'Lower Brule',
    'Crow Creek',
    'Sisseton',
    'Wahpeton',
    'Mdewakanton',
    'Wakpala',
    'Kyle',
    'Oglala',
    'Wanblee',
    'Porcupine',
    'Manderson',
    'Eagle Butte',
    'Fort Yates',
    'Kul Wicasa',
    'Mni Luzahan',
    'Inyan Kara',
    'Mato Tipila',
    'Okreek',
    'Bull Head',
    'Little Eagle',
    'Cannon Ball',
    'Spirit Lake',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Sioux_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map