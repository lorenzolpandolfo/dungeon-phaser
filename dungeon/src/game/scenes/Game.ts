import { Scene } from "phaser";
import DungeonService from "../services/DungeonService";
import Player from "../objects/entities/player/Player";

export class Game extends Scene {
  private player!: Player;

  constructor() {
    super("Game");
  }

  preload() {
    this.load.spritesheet("floor_tiles", "assets/tilemaps/atlas_floor.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    // this.load();

    this.load.image(
      "player_1",
      "assets/entities/player/idle/player_idle_0.png",
    );
    this.load.image(
      "player_2",
      "assets/entities/player/idle/player_idle_1.png",
    );
    this.load.image(
      "player_3",
      "assets/entities/player/idle/player_idle_2.png",
    );
    this.load.image(
      "player_4",
      "assets/entities/player/idle/player_idle_3.png",
    );
  }
  create() {
    // this.cameras.main.setZoom(2);
    const dungeonService = new DungeonService(this);
    dungeonService.generate();

    this.anims.create({
      key: "player-idle",
      frames: [
        { key: "player_1" },
        { key: "player_2" },
        { key: "player_3" },
        { key: "player_4" },
      ],
      frameRate: 1,
      repeat: -1,
    });

    const player = new Player(this, 0, 0);
  }

  update(time: number, delta: number): void {
    const cursors = this.input.keyboard?.createCursorKeys();

    this.player.update(cursors);
  }
}
