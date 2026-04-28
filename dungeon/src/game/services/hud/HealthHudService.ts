import { HUD } from "../../scenes/Hud";
import HealthService from "../HealthService";

export default class HealthHudService {
  private heartImages: Phaser.GameObjects.Image[] = [];
  tiles = {
    fullHeart: 754,
    halfHeart: 755,
    emptyHeart: 756,
  };

  constructor(
    private hudScene: HUD,
    private healthService: HealthService,
  ) {}

  init() {
    this.refresh();
  }

  refresh() {
    this.heartImages.forEach((img) => img.destroy());
    this.heartImages = [];

    const totalHearts = this.healthService.currentHealth / 2;
    const currentHP = this.healthService.currentHealth;

    for (let i = 0; i < totalHearts; i++) {
      let frame = this.tiles.emptyHeart;

      if (currentHP >= (i + 1) * 2) {
        frame = this.tiles.fullHeart;
      } else if (currentHP >= i * 2 + 1) {
        frame = this.tiles.halfHeart;
      }

      const x = 976 - i * 32;
      const img = this.hudScene.add
        .image(x, 32, "tileset_16x16", frame)
        .setScale(2)
        .setOrigin(0, 0);

      this.heartImages.push(img);
    }
  }
}
