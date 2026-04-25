import * as Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  speed: number = 160;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player_1");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    // hitbox nos pes
    this.body?.setSize(20, 10).setOffset(6, 22);
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    const isMoving =
      cursors.left.isDown ||
      cursors.right.isDown ||
      cursors.up.isDown ||
      cursors.down.isDown;

    if (isMoving) {
      this.play("player-idle", true);
    } else {
      this.play("player-idle", true);
    }

    if (cursors.left.isDown) {
      this.setVelocityX(-this.speed);
    } else if (cursors.right.isDown) {
      this.setVelocityX(this.speed);
    }

    if (cursors.up.isDown) {
      this.setVelocityY(-this.speed);
      this.play("walk-up", true);
    } else if (cursors.down.isDown) {
      this.setVelocityY(this.speed);
      this.play("walk-down", true);
    }

    this.body?.velocity.normalize().scale(this.speed);

    if (this.body?.velocity.x === 0 && this.body?.velocity.y === 0) {
      this.anims.stop();
    }
  }
}
