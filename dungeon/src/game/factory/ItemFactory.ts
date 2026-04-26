import { Item } from "../objects/Item";

export default class ItemFactory {
  static createBomb(scene: Phaser.Scene, x: any, y: any) {
    return new Item(scene, x, y, "bomb");
  }

  static createHpPotion(scene: Phaser.Scene, x: any, y: any) {
    return new Item(scene, x, y, "hp_potion");
  }

  static createManaPotion(scene: Phaser.Scene, x: any, y: any) {
    return new Item(scene, x, y, "mana_potion");
  }

  static createSpeedPotion(scene: Phaser.Scene, x: any, y: any) {
    return new Item(scene, x, y, "speed_potion");
  }
  static createDmgPotion(scene: Phaser.Scene, x: any, y: any) {
    return new Item(scene, x, y, "dmg_potion");
  }
}
