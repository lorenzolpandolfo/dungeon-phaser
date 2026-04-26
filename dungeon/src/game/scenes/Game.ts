import * as Phaser from "phaser";
import DungeonService from "../services/DungeonService";
import Player from "../objects/entities/player/Player";

export class Game extends Phaser.Scene {
  player: Player;
  cursors: object;

  constructor() {
    super("Game");
  }

  create() {
    const dungeonService = new DungeonService(this);
    dungeonService.generate();

    this.player = new Player(this, 120, 70);

    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    this.cameras.main.setZoom(2);
  }

  update() {
    this.player.update();
  }
}
