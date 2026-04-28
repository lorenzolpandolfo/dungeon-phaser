import Entity from "../Entity";

export default class Orc extends Entity {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, undefined);

    this.scene.anims.create({
      key: "orc-idle",
      frames: this.scene.anims.generateFrameNumbers("tileset_16x32", {
        start: 183,
        end: 186,
      }),
      frameRate: 6,
      repeat: -1,
    });

    this.play("orc-idle");
  }
}
