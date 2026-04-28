import * as Phaser from "phaser";

export class HealthService {
  currentHealth;

  constructor(health: number) {
    this.currentHealth = health;
  }
}
