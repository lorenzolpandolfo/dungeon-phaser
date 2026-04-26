import { Scene } from "phaser";
import NewGameButton from "../objects/menu/NewGameButton";
import ExitGameButton from "../objects/menu/ExitGameButton";

export class Menu extends Scene {
  constructor() {
    super("Menu");
  }

  create() {
    this.add.tileSprite(0, 0, 1024, 768, "background").setOrigin(0);

    this.add
      .text(512, 160, "Eternal Dungeon", {
        fontFamily: "Arial Black",
        fontSize: 72,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 6,
        align: "center",
      })
      .setOrigin(0.5);

    new NewGameButton(this, 150, 350);
    new ExitGameButton(this, 150, 450);
  }
}
