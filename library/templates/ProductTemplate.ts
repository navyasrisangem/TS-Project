import { ProductContract } from "../contracts/ProductContract";

export abstract class ProductTemplate implements ProductContract {
    public Name = "";
    public Price = 0;
    public Qty = 0;
    public abstract Total():number;
    public abstract Print():void;
}