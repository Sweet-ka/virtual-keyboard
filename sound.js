export class Sound {
  constructor(src) {
    this.audio = new Audio();
    this.audio.src = src;

    let play = this.audio.play();
    if (play) {
      play
        .catch((e) => {
          console.log(e);
        })
        .then(() => {});
    }
  }
}
