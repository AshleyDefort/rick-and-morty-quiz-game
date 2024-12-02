class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.unlockedCharacters = [];
  }

  unlockCharacter(character) {
    this.unlockedCharacters.push(character);
  }
}

export default Player;