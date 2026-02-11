import { Character } from './Character';

export type RootStackParamList = {
  CharacterList: undefined;
  CharacterDetail: {
    character: Character;
  };
  AddCharacter: {
    onAdd?: () => void;
  };
};
