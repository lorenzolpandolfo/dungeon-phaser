import * as Phaser from "phaser";
import Player from "../objects/entities/player/Player";
import InventoryHudService from "../services/hud/InventoryHudService";
import { Game } from "./Game";
import HealthHudService from "../services/hud/HealthHudService";

export class HUD extends Phaser.Scene {
  score: number = 0;
  player: Player;
  gameScene: Game;

  scoreText: Phaser.GameObjects.Text;

  constructor() {
    super("HUD");
  }

  init(data: any) {
    this.player = data.player;
  }

  create() {
    this.gameScene = this.scene.get("Game") as Game;

    const inventoryHud = new InventoryHudService(
      this,
      this.player.inventoryService,
    );
    inventoryHud.init();

    const healthHud = new HealthHudService(this, this.player.healthService);
    healthHud.init();
  }
}
