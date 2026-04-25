import * as Phaser from "phaser";
import { Scene } from "phaser";
import FloorTileMapService from "./FloorTileMapService";

interface RoomConfig {
  x: number;
  y: number;
  width: number;
  height: number;
  tileVariations: number[];
}

export default class DungeonService {
  private readonly TILE_SIZE = 16;
  scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  generate() {
    this.generatePlayerSpawn();
  }

  private generatePlayerSpawn() {
    this.generateRoom({
      x: 23,
      y: 18,
      width: 16,
      height: 10,
      tileVariations: [0, 1, 2, 8],
    });
  }

  private generateRoom(config: RoomConfig) {
    const { x, y, width, height, tileVariations } = config;

    for (let currentX = x; currentX < x + width; currentX++) {
      for (let currentY = y; currentY < y + height; currentY++) {
        const finalTileId = Phaser.Utils.Array.GetRandom(tileVariations);

        FloorTileMapService.createTile(
          this.scene,
          currentX * this.TILE_SIZE,
          currentY * this.TILE_SIZE,
          finalTileId,
        );
      }
    }
  }
}
