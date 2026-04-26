import * as Phaser from "phaser";

export class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.image("background", "assets/menubg.jpg");

    this.load.spritesheet("floor_tiles", "assets/tilemaps/atlas_floor.png", {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet("small_mobs_tiles", "assets/tileset.png", {
      frameWidth: 16,
      frameHeight: 32,
    });

    this.load.spritesheet("item_potions_tilemap", "assets/tileset.png", {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.image("item_slot", "assets/hud/item_slot.png");
  }

  create() {
    this.scene.start("Game");
  }
}
