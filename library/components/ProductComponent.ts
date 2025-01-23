import { ProductTemplate } from "../templates/ProductTemplate";

export class ProductComponent extends ProductTemplate {
    Name = "Samsung";
    Price = 400;
    Qty = 3;
    Total() {
        return this.Qty * this.Price;
    }
    Print() {
        console.log(`Name = ${this.Name}\nTotal = ${this.Total()}`);
    }
}