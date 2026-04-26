import * as Phaser from "phaser";
import ItemSelector from "../objects/hud/ItemSelector";
import Player from "../objects/entities/player/Player";
import { Item } from "../objects/Item";

export class HUD extends Phaser.Scene {
  score: number = 0;
  player: Player;
  gameScene: Phaser.Scene;
  private slots: ItemSelector[] = [];

  scoreText: Phaser.GameObjects.Text;

  constructor() {
    super("HUD");
  }

  init(data: any) {
    this.player = data.player;
  }

  create() {
    this.scoreText = this.add.text(10, 10, "Pontos: 0");
    this.gameScene = this.scene.get("Game");

    this.gameScene.events.on("updateScore", (s: number) => {
      this.score += s;
      this.scoreText.setText(`Pontos: ${this.score}`);
    });

    this.createInventory();
  }

  createInventory() {
    for (let i = 0; i < 3; i++) {
      this.slots.push(new ItemSelector(this, 16 + 52 * i, 32, i));
    }

    this.gameScene.events.on("collectItem", (item: Item) => {
      let targetSlot = this.slots.find((s) => s.itemId === item.id);

      if (!targetSlot) {
        targetSlot = this.slots.find((s) => s.isEmpty);
      }

      if (targetSlot) {
        targetSlot.setItem(item);
        item.destroy();
      }
    });

    this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.gameScene.events.off("collectItem");
    });
  }
}
