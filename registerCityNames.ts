import Sioux from './Sioux';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
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
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Sioux, i === 0))
);
