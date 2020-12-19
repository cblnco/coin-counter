class SoundFX {
  #isSoundEnabled;
  #COIN_FX = 'https://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav';
  #ERROR_FX = 'https://themushroomkingdom.net/sounds/wav/smw/smw_lemmy_wendy_incorrect.wav';
  #DECREASE_FX = 'https://themushroomkingdom.net/sounds/wav/smw/smw_stomp_bones.wav';
  #INCREASE_FX = 'https://themushroomkingdom.net/sounds/wav/smw/smw_stomp.wav';
  #BLOCK_KICK_FX = 'https://themushroomkingdom.net/sounds/wav/smw/smw_shell_ricochet.wav';

  constructor(isSoundEnabled) {
    this.#isSoundEnabled = isSoundEnabled;
  }

  set isSoundEnabled(isSoundEnabled) {
    this.#isSoundEnabled = isSoundEnabled;
  }

  get isSoundEnabled() {
    return this.#isSoundEnabled;
  }

  /**
   * This method should be private (#), but dealing with CRA and babel
   * plugins, without ejecting CRA, is not worth the effort for this kind
   * of project.
   *
   * No JSDoc this time... at all ¯\_(ツ)_/¯
   */
  playSound(soundSource) {
    if (this.#isSoundEnabled) {
      const sound = new Audio(soundSource);
      sound.play();
    }
  }

  playCoin() {
    this.playSound(this.#COIN_FX);
  }

  playError() {
    this.playSound(this.#ERROR_FX);
  }

  playDecrease() {
    this.playSound(this.#DECREASE_FX);
  }

  playIncrease() {
    this.playSound(this.#INCREASE_FX);
  }

  playBlockKick() {
    this.playSound(this.#BLOCK_KICK_FX);
  }
}

const soundBoard = new SoundFX(true);

export default soundBoard;
