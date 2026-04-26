import * as Phaser from "phaser";
import { HUD } from "../../scenes/Hud";
import { Item } from "../Item";

export default class ItemSelector extends Phaser.GameObjects.Image {
  slot: number;
  itemId: string | null = null;
  quantity: number = 0;
  private icon: Phaser.GameObjects.Image | null = null;
  private text: Phaser.GameObjects.Text | null = null;
  private tooltip: Phaser.GameObjects.Text | null = null;
  itemData: { title: string };

  constructor(scene: HUD, x: number, y: number, slot: number) {
    super(scene, x, y, "item_slot");
    this.setOrigin(0, 0).setScale(2).setInteractive();
    this.slot = slot;
    scene.add.existing(this);

    this.on("pointerover", () => {
      this.scene.tweens.add({
        targets: [this.icon],
        scale: 2.3,
        duration: 200,
        ease: "Power1",
      });

      if (!this.isEmpty && this.itemData) {
        this.showTooltip(this.itemData.title);
      }
    });

    this.on("pointerout", () => {
      this.scene.tweens.add({
        targets: [this, this.icon],
        scale: 2,
        duration: 100,
        ease: "Power1",
      });
      this.hideTooltip();
    });
  }
  get isEmpty() {
    return this.itemId === null;
  }

  setItem(item: Item) {
    if (this.itemId === item.id && item.stackable) {
      this.quantity += item.quantity;
      this.updateUI();
      return true;
    }

    if (this.isEmpty) {
      this.itemId = item.id;
      this.itemData = { title: item.title };
      this.quantity = item.quantity;

      this.icon = this.scene.add
        .image(this.x + 23, this.y + 23, item.texture.key, item.frame.name)
        .setOrigin(0.5)
        .setScale(2);

      this.updateUI();
      return true;
    }

    return false;
  }

  private updateUI() {
    if (this.quantity > 1) {
      if (!this.text) {
        this.text = this.scene.add.text(this.x + 6, this.y + 0, "", {
          fontSize: "16px",
          stroke: "#000",
          strokeThickness: 2,
        });
      }
      this.text.setText(this.quantity.toString());
    }
  }

  private showTooltip(name: string) {
    if (!this.tooltip) {
      this.tooltip = this.scene.add
        .text(0, 0, name, {
          fontSize: "14px",
          backgroundColor: "#000000aa",
          padding: { x: 5, y: 2 },
        })
        .setDepth(100);
    }
    this.tooltip.setText(name).setVisible(true);

    this.scene.input.on("pointermove", (pointer: Phaser.Input.Pointer) => {
      if (this.tooltip && this.tooltip.visible) {
        this.tooltip.setPosition(pointer.x + 10, pointer.y + 10);
      }
    });
  }

  private hideTooltip() {
    if (this.tooltip) {
      this.tooltip.setVisible(false);
      this.scene.input.off("pointermove");
    }
  }
}
