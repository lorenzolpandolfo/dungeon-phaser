import { Scene } from "phaser";

export default class FloorTileMapService {
  static createTile(scene: Scene, x: number, y: number, tile_id: number) {
    scene.add.image(x, y, "floor_tiles", tile_id).setOrigin(0);
  }
}
