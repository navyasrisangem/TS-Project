///<reference path="../templates/namespaceTemplate.ts"/>

import namespaceTemplate = Project.Templates.namespaceTemplate;
namespace Project {
    export namespace Components {
        export class namespaceComponent extends namespaceTemplate {
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
    }
}