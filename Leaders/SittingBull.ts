import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Sioux from '../Sioux';

export class SittingBull extends Leader {
  static civilization(): typeof Civilization {
    return Sioux;
  }

  name(): string {
    return 'Sitting Bull';
  }
}

export default SittingBull;
