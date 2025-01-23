var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="../contracts/namespaceContract.ts"/>
var Project;
(function (Project) {
    var Templates;
    (function (Templates) {
        var namespaceTemplate = /** @class */ (function () {
            function namespaceTemplate() {
                this.Name = "";
                this.Price = 0;
                this.Qty = 0;
            }
            return namespaceTemplate;
        }());
        Templates.namespaceTemplate = namespaceTemplate;
    })(Templates = Project.Templates || (Project.Templates = {}));
})(Project || (Project = {}));
///<reference path="../templates/namespaceTemplate.ts"/>
var namespaceTemplate = Project.Templates.namespaceTemplate;
var Project;
(function (Project) {
    var Components;
    (function (Components) {
        var namespaceComponent = /** @class */ (function (_super) {
            __extends(namespaceComponent, _super);
            function namespaceComponent() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.Name = "Samsung";
                _this.Price = 400;
                _this.Qty = 3;
                return _this;
            }
            namespaceComponent.prototype.Total = function () {
                return this.Qty * this.Price;
            };
            namespaceComponent.prototype.Print = function () {
                console.log("Name = ".concat(this.Name, "\nTotal = ").concat(this.Total()));
            };
            return namespaceComponent;
        }(namespaceTemplate));
        Components.namespaceComponent = namespaceComponent;
    })(Components = Project.Components || (Project.Components = {}));
})(Project || (Project = {}));
///<reference path="../library/components/namespaceComponent.ts"/>
var namespaceComponent = Project.Components.namespaceComponent;
var obj = new namespaceComponent();
obj.Print();
