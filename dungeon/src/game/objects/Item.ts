import * as Phaser from "phaser";
import { Game } from "../scenes/Game";
import Player from "./entities/player/Player";
import itens from "../data/itens.json";

export class Item extends Phaser.GameObjects.Sprite {
  id: string;
  title: string;
  quantity: number;
  stackable: boolean = true;

  constructor(scene: Game, x: number, y: number, id: string) {
    const item_data = itens[id];

    super(scene, x, y, item_data.tilemap, item_data.tileId);

    this.id = id;
    this.title = item_data.title;
    this.quantity = 1;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.add.overlap(scene.player, this, this.collect, null, this);

    scene.tweens.add({
      targets: this,
      y: y - 4,
      duration: 1000,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: -1,
    });
  }

  collect(player: Player, item: Item) {
    item.destroy();
    player.inventory.add(item);
  }
}
