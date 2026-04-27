import { Item } from "../objects/Item";

export default class InventoryService {
  private items: Item[] = [];
  private maxSlots = 6;

  addItem(item: Item): boolean {
    if (item.stackable) {
      const existing = this.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
        return true;
      }
    }

    if (this.items.length < this.maxSlots) {
      this.items.push({ ...item });
      return true;
    }

    return false;
  }

  getItems() {
    return this.items;
  }
}
