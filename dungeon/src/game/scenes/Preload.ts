import * as Phaser from "phaser";

export class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.spritesheet("floor_tiles", "assets/tilemaps/atlas_floor.png", {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet("small_mobs_tiles", "assets/tileset.png", {
      frameWidth: 16,
      frameHeight: 28,
    });
  }

  create() {
    this.scene.start("Game");
  }
}
