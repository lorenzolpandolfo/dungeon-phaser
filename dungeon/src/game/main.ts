import { Menu as MainMenu } from "./scenes/Menu";
import { Game as GameScene } from "./scenes/Game";
import { AUTO, Game, Scale, Types } from "phaser";

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 1024,
  height: 768,
  parent: "game-container",
  backgroundColor: "#242424",
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  pixelArt: true,
  // scene: [MainMenu, GameScene],
  scene: [GameScene],
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
