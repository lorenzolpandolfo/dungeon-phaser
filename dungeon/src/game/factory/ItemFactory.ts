import { Item } from "../objects/Item";
import * as Phaser from "phaser";

const items_tiles = {
  bomb: 658,
  hp_potion: 690,
  mana_potion: 691,
  speed_potion: 692,
  dmg_potion: 693,
};

export default class ItemFactory {
  static createBomb(scene: Phaser.Scene, x: any, y: any) {
    return new Item(scene, x, y, items_tiles.bomb);
  }

  static createHpPotion(scene: Phaser.Scene, x: any, y: any) {
    return new Item(scene, x, y, items_tiles.hp_potion);
  }

  static createManaPotion(scene: Phaser.Scene, x: any, y: any) {
    return new Item(scene, x, y, items_tiles.mana_potion);
  }

  static createSpeedPotion(scene: Phaser.Scene, x: any, y: any) {
    return new Item(scene, x, y, items_tiles.speed_potion);
  }
  static createDmgPotion(scene: Phaser.Scene, x: any, y: any) {
    return new Item(scene, x, y, items_tiles.dmg_potion);
  }
}
