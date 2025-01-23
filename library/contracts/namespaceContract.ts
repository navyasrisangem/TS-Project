namespace Project {
    export namespace Contracts {
        export interface namespaceContract {
            Name: string;
            Price: number;
            Qty: number;
            Total(): number;
            Print(): void;
        }
    }
}