import * as Phaser from "phaser";
import { HealthService } from "../../services/HealthService";

const DEFAULT_STATUS = {
  speed: 100,
  initHealth: 3,
  curHealth: 3,
  damage: 1,
};

interface EntityData {
  speed: number;
  initHealth: number;
  curHealth: number;
  damage: number;
}

export default class Entity extends Phaser.Physics.Arcade.Sprite {
  speed: number;
  initHealth: number;
  curHealth: number;
  damage: number;
  healthService: HealthService;

  constructor(scene: Phaser.Scene, x: number, y: number, data?: EntityData) {
    super(scene, x, y, "");

    data = data ?? DEFAULT_STATUS;

    this.speed = data.speed;
    this.initHealth = data.initHealth;
    this.curHealth = data.curHealth;
    this.damage = data.damage;

    this.healthService = new HealthService(this.initHealth);

    scene.add.existing(this);
    scene.physics.add.existing(this);
  }
}
