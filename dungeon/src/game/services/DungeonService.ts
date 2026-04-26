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
  private readonly ROOM_WIDTH = 24;
  private readonly ROOM_HEIGHT = 16;
  private readonly ROOM_DISTANCE = 30;

  scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  generate() {
    this.generateRooms();
  }

  generateRooms() {
    const roomCount = Phaser.Math.Between(5, 9);
    const pointer = new Phaser.Math.Vector2(0, 0);
    const occupiedPositions = new Set<string>();

    this.createDungeonRoom(pointer);
    occupiedPositions.add(`${pointer.x},${pointer.y}`);

    for (let i = 0; i < roomCount; i++) {
      const oldPos = pointer.clone();
      const direction = Phaser.Math.Between(0, 3);

      if (direction === 0) pointer.y -= this.ROOM_DISTANCE;
      else if (direction === 1) pointer.y += this.ROOM_DISTANCE;
      else if (direction === 2) pointer.x -= this.ROOM_DISTANCE;
      else if (direction === 3) pointer.x += this.ROOM_DISTANCE;

      const posKey = `${pointer.x},${pointer.y}`;

      this.createCorridor(oldPos, pointer);

      if (!occupiedPositions.has(posKey)) {
        this.createDungeonRoom(pointer);
        occupiedPositions.add(posKey);
      }
    }
  }

  private createCorridor(start: Phaser.Math.Vector2, end: Phaser.Math.Vector2) {
    const isHorizontal = start.y === end.y;
    const thickness = Phaser.Math.Between(2, 8);

    if (isHorizontal) {
      const startX = Math.min(start.x, end.x);
      const endX = Math.max(start.x, end.x);
      for (let x = startX; x <= endX; x++) {
        for (let t = 0; t < thickness; t++) {
          this.placeTile(x, start.y + t);
        }
      }
    } else {
      const startY = Math.min(start.y, end.y);
      const endY = Math.max(start.y, end.y);
      for (let y = startY; y <= endY; y++) {
        for (let t = 0; t < thickness; t++) {
          this.placeTile(start.x + t, y);
        }
      }
    }
  }

  private createDungeonRoom(pos: Phaser.Math.Vector2) {
    this.generateRoom({
      x: pos.x - Math.floor(this.ROOM_WIDTH / 2),
      y: pos.y - Math.floor(this.ROOM_HEIGHT / 2),
      width: this.ROOM_WIDTH,
      height: this.ROOM_HEIGHT,
      tileVariations: [0, 1, 2, 8],
    });
  }

  private generateRoom(config: RoomConfig) {
    const { x, y, width, height, tileVariations } = config;
    for (let cx = x; cx < x + width; cx++) {
      for (let cy = y; cy < y + height; cy++) {
        const tileId = Phaser.Utils.Array.GetRandom(tileVariations);
        this.placeTile(cx, cy, tileId);
      }
    }
  }

  private placeTile(gridX: number, gridY: number, tileId: number = 0) {
    FloorTileMapService.createTile(
      this.scene,
      gridX * this.TILE_SIZE,
      gridY * this.TILE_SIZE,
      tileId,
    );
  }
}
