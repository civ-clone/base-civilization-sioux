import Sioux from './Sioux';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Sioux',
  nation: 'the Sioux Nation',
  colors: ['#A8663A', '#FFFFFF'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Sioux, name, value))
);
