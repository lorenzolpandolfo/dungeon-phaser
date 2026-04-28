import { Item } from "../objects/Item";
import { Game } from "../scenes/Game";

export default class ItemFactory {
  static createBomb(scene: Game, x: number, y: number) {
    return new Item(scene, x, y, "bomb");
  }

  static createHpPotion(scene: Game, x: number, y: number) {
    return new Item(scene, x, y, "hp_potion");
  }

  static createManaPotion(scene: Game, x: number, y: number) {
    return new Item(scene, x, y, "mana_potion");
  }

  static createSpeedPotion(scene: Game, x: number, y: number) {
    return new Item(scene, x, y, "speed_potion");
  }

  static createDmgPotion(scene: Game, x: number, y: number) {
    return new Item(scene, x, y, "dmg_potion");
  }

  static createMiniHpPotion(scene: Game, x: number, y: number) {
    return new Item(scene, x, y, "mini_hp_potion");
  }

  static createMiniManaPotion(scene: Game, x: number, y: number) {
    return new Item(scene, x, y, "mini_mana_potion");
  }

  static createMiniSpeedPotion(scene: Game, x: number, y: number) {
    return new Item(scene, x, y, "mini_speed_potion");
  }

  static createMiniDmgPotion(scene: Game, x: number, y: number) {
    return new Item(scene, x, y, "mini_dmg_potion");
  }
}
