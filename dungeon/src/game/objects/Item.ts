import * as Phaser from "phaser";

const texture = "item_tiles";

export class Item extends Phaser.GameObjects.Sprite {
  id: string;
  title: string;
  quantity: number;

  constructor(scene: Phaser.Scene, x: number, y: number, frame: number) {
    super(scene, x, y, texture, frame);

    scene.add.existing(this);

    scene.tweens.add({
      targets: this,
      y: y - 4,
      duration: 1000,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: -1,
    });

    scene.physics.add.existing(this);
  }
}
