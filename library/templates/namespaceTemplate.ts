///<reference path="../contracts/namespaceContract.ts"/>

import namespaceContract = Project.Contracts.namespaceContract;
namespace Project {
    export namespace Templates {
        export abstract class namespaceTemplate implements namespaceContract {
            public Name = "";
            public Price = 0;
            public Qty = 0;
            public abstract Total(): number;
            public abstract Print(): void;
        }
    }
}