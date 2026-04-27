import ItemSlot from "../../objects/hud/ItemSlot";
import { Item } from "../../objects/Item";
import { HUD } from "../../scenes/Hud";
import InventoryService from "../InventoryService";

export default class InventoryHudService {
  private slots: ItemSlot[] = [];

  constructor(
    private hudScene: HUD,
    private inventoryService: InventoryService,
  ) {}

  public init() {
    for (let i = 0; i < 6; i++) {
      this.slots.push(new ItemSlot(this.hudScene, 16 + 52 * i, 32, i));
    }

    this.refresh();

    this.hudScene.gameScene.events.on("collectItem", (item: Item) => {
      const success = this.inventoryService.addItem(item);

      if (success) {
        item.destroy();
        this.refresh();
      }
    });
  }

  private refresh() {
    const items = this.inventoryService.getItems();
    items.forEach((data, index) => {
      this.slots[index].updateFromData(data);
    });
  }
}
