import * as Phaser from "phaser";
import DungeonService from "../services/DungeonService";
import Player from "../objects/entities/player/Player";
import ItemFactory from "../factory/ItemFactory";
import Entity from "../objects/entities/Entity";
import Orc from "../objects/entities/enemies/Orc";

export class Game extends Phaser.Scene {
  player: Player;
  cursors: object;

  constructor() {
    super("Game");
  }

  create() {
    const dungeonService = new DungeonService(this);
    dungeonService.generate();

    this.player = new Player(this, 100, 70);

    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    this.cameras.main.setZoom(2);

    const data = {
      player: this.player,
    };
    this.scene.launch("HUD", data);

    // const entity = new Entity(this, 50, 50);
    const orc = new Orc(this, 50, 50);

    ItemFactory.createBomb(this, 165, 75);
    ItemFactory.createBomb(this, 185, 75);
    ItemFactory.createBomb(this, 205, 75);
    ItemFactory.createBomb(this, 225, 75);

    ItemFactory.createHpPotion(this, 145, 95);
    ItemFactory.createHpPotion(this, 165, 95);

    ItemFactory.createManaPotion(this, 145, 115);
    ItemFactory.createManaPotion(this, 165, 115);

    ItemFactory.createDmgPotion(this, 145, 135);
    ItemFactory.createDmgPotion(this, 165, 135);

    ItemFactory.createMiniHpPotion(this, 40, 95);
    ItemFactory.createMiniHpPotion(this, 60, 95);

    ItemFactory.createMiniManaPotion(this, 40, 115);
    ItemFactory.createMiniManaPotion(this, 60, 115);

    ItemFactory.createMiniDmgPotion(this, 40, 135);
    ItemFactory.createMiniDmgPotion(this, 60, 135);
  }

  update() {
    this.player.update();
  }
}
