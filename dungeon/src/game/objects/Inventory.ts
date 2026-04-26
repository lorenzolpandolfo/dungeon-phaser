import { Item } from "./Item";

export default class Inventory {
  private data: Item[] = [];

  add(item: Item) {
    const existingItem = this.data.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.data.push(item);
    }
  }
}
