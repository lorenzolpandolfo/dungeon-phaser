import * as Phaser from "phaser";
import InventoryService from "../../../services/InventoryService";

const wizard_idle_start_tile = 168;
const wizard_idle_end_tile = 172;

export default class Player extends Phaser.Physics.Arcade.Sprite {
  // speed: number = 105;
  speed: number = 305;
  keys: object;
  health: number = 5;
  inventoryService: InventoryService = new InventoryService();

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player_1");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body?.setSize(20, 10).setOffset(6, 22);

    this.keys = scene.input.keyboard?.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      upArrow: Phaser.Input.Keyboard.KeyCodes.UP,
      downArrow: Phaser.Input.Keyboard.KeyCodes.DOWN,
      leftArrow: Phaser.Input.Keyboard.KeyCodes.LEFT,
      rightArrow: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    });

    this.scene.anims.create({
      key: "player-idle",
      frames: this.scene.anims.generateFrameNumbers("small_mobs_tiles", {
        start: wizard_idle_start_tile,
        end: wizard_idle_end_tile,
      }),
      frameRate: 6,
      repeat: -1,
    });
  }

  update() {
    this.setVelocity(0);

    const { left, right, up, down, leftArrow, rightArrow, upArrow, downArrow } =
      this.keys;

    // 1. Define a direção (X)
    if (left.isDown || leftArrow.isDown) {
      this.setVelocityX(-1);
      this.setFlip(true, false);
    } else if (right.isDown || rightArrow.isDown) {
      this.setVelocityX(1);
      this.setFlip(false, false);
    }

    // 2. Define a direção (Y)
    if (up.isDown || upArrow.isDown) {
      this.setVelocityY(-1);
    } else if (down.isDown || downArrow.isDown) {
      this.setVelocityY(1);
    }

    if (this.body.velocity.length() > 0) {
      this.body.velocity.normalize().scale(this.speed);
    }

    if (this.body?.velocity.x === 0 && this.body?.velocity.y === 0) {
      this.play("player-idle", true);
    }
  }
}
