import BaseClassStats from '../src/archetypes.js';
import Character from '../src/RPG.js';

describe('Character', () => {

  test('it should create a character with properties for their character name, archetype, and level', () => {
    const newCharacter = new Character("JohnBoy", "Warrior", 1);
    expect(newCharacter.name).toEqual("JohnBoy");
    expect(newCharacter.archetype).toEqual("Warrior");
    expect(newCharacter.level).toEqual(1);
  });

  test('choosing warrior will take the BaseClassStats and run it through archetypeSelection function to add stats for Warrior selection', () => {
    const warrior = new BaseClassStats("Warrior");
    const newCharacter = new Character("JohnBoy", warrior.archetype, 1);
    expect(newCharacter.name).toEqual("JohnBoy");
    expect(newCharacter.archetype).toEqual("Warrior");
    expect(newCharacter.level).toEqual(1);
  });

});