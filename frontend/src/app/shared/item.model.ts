export class Item {
    name: string;
    imagePath: string;
    description: string;
    price: number;
    category: string;
    itemId?: string;

    constructor(name: string, imagePath: string, description: string, price: number, category: string, itemId?: string) {
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
        this.price = price;
        this.category = category;
        this.itemId = itemId;
    }
}