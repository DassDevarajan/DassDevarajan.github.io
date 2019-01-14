(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");





var routes = [
    { path: 'product-list', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
    { path: 'product-entry', component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n<br>\n<div style=\"text-align:center\">\n  <h2>{{ subtitle }}</h2>\n</div>\n<br>\n<app-product-list></app-product-list>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular Demo Project';
        this.subtitle = 'Online Product Catalog';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-view/product-view.component */ "./src/app/product-view/product-view.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
                _product_view_product_view_component__WEBPACK_IMPORTED_MODULE_8__["ProductViewComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!status\" class=\"container\">\n  <h3>Product Edit Form</h3>\n  <form #editForm=\"ngForm\" (ngSubmit)=\"onSubmit(editForm)\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required [(ngModel)]=\"product.name\" #name=\"ngModel\">\n        <div *ngIf=\"name.invalid && (submitted || name.touched || name.dirty)\">\n          <div *ngIf=\"name.errors.required\" class=\"alert alert-danger\">Name is required</div>\n        </div>\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"desc\">Description:</label>\n        <textarea class=\"form-control\" id=\"desc\" name=\"description\" required [(ngModel)]=\"product.description\" #description=\"ngModel\"></textarea>\n        <div *ngIf=\"description.invalid && (submitted || description.touched || description.dirty)\">\n          <div *ngIf=\"description.errors.required\" class=\"alert alert-danger\">Description is required</div>\n        </div>\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"category\">Category:</label>\n        <select class=\"form-control\" name=\"category\" required [(ngModel)]=\"product.category\" #category=\"ngModel\">\n            <option value=\"Appliances\">Appliances</option> \n            <option value=\"Books\">Books</option>\n            <option value=\"Clothes\">Clothes</option>\n            <option value=\"Electronics\">Electronics</option>\n            <option value=\"Furniture\">Furniture</option>\n        </select>\n        <div *ngIf=\"category.invalid && (submitted || category.touched || category.dirty)\">\n          <div *ngIf=\"category.errors.required\" class=\"alert alert-danger\">Category is required</div>\n        </div>\n      </div>\n  \n      <div class=\"form-group\">\n          <label for=\"quantity\">Quantity:</label>\n          <input type=\"number\" class=\"form-control\" id=\"quantity\" min=\"1\" \n            name=\"quantity\" required [(ngModel)]=\"product.quantity\" #quantity=\"ngModel\">\n          <div *ngIf=\"quantity.invalid && (submitted || quantity.touched || quantity.dirty)\">\n            <div *ngIf=\"quantity.errors.required\" class=\"alert alert-danger\">Quantity is required</div>\n            <div *ngIf=\"quantity.errors.min\" class=\"alert alert-danger\">Minimum is 1</div>\n        </div>\n      </div>\n  \n      <div class=\"form-group\">\n          <label for=\"unitprice\">Unit Price($):</label>\n          <input type=\"number\"  pattern=\"^\\d*(\\.\\d{0,2})?$\"  class=\"form-control\" \n            id=\"unitprice\" name=\"unitprice\" required [(ngModel)]=\"product.unitprice\" #unitprice=\"ngModel\">\n          <div *ngIf=\"unitprice.invalid && (submitted || unitprice.touched || unitprice.dirty)\">\n            <div *ngIf=\"unitprice.errors.required\" class=\"alert alert-danger\">Unit Price is required</div>\n            <div *ngIf=\"unitprice.errors.pattern\" class=\"alert alert-danger\">Invalid format</div>\n          </div>\n      </div>\n  \n      <div class=\"form-group\">\n          <label for=\"supplier\">Supplier:</label>\n          <input type=\"text\" class=\"form-control\" id=\"supname\" name=\"supplier\" \n          required [(ngModel)]=\"product.supplier\" #supplier=\"ngModel\">\n          <div *ngIf=\"supplier.invalid && (submitted || supplier.touched || supplier.dirty)\">\n            <div *ngIf=\"supplier.errors.required\" class=\"alert alert-danger\">Supplier is required</div>\n        </div>\n      </div>\n  \n      <div class=\"checkbox\">\n          <label><input type=\"checkbox\" name=\"returnable\" \n            [(ngModel)]=\"product.returnable\" #returnable=\"ngModel\"> Returnable</label>\n      </div>\n      \n      <button type=\"submit\" class=\"btn btn-primary\" id=\"submit\">Update</button>\n  </form>\n</div>\n<div *ngIf=\"status\" class=\"container\">\n    <br><br>\n    <div class=\"alert alert-success\">Product is successfully updated!</div>\n</div>\n  \n  "

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(_productService) {
        this._productService = _productService;
        this.submitted = false;
        this.status = false;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
    };
    ProductEditComponent.prototype.onSubmit = function (editForm) {
        this.submitted = true;
        if (editForm.valid) {
            this.submitted = false;
            this.status = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _product__WEBPACK_IMPORTED_MODULE_3__["Product"])
    ], ProductEditComponent.prototype, "product", void 0);
    ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product-edit/product-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    border: none;\r\n    color: dodgerblue;\r\n    padding: 6px 8px;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n  }\r\n  .btn:hover {\r\n    background-color: lightgrey;\r\n  }\r\n  .menubtn {\r\n    background-color: DodgerBlue;\r\n    border: none;\r\n    color: white;\r\n    padding: 6px 8px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n  }\r\n  .menubtn:hover {\r\n    background-color: RoyalBlue;\r\n  }\r\n  td {\r\n      vertical-align: baseline;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsNEJBQTRCO0dBQzdCO0VBQ0Q7SUFDRSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsNEJBQTRCO0dBQzdCO0VBQ0Q7TUFDSSx5QkFBeUI7R0FDNUIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgfVxyXG4gIC5tZW51YnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAubWVudWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSb3lhbEJsdWU7XHJcbiAgfVxyXG4gIHRkIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showList == false\" class=\"container\">\n    <button (click)=\"showListForm()\" id=\"list-menu\" style=\"float: right\" class=\"menubtn\"><i class=\"fa fa-list\"></i> List Products</button>\n </div>\n\n<div *ngIf=\"showList == true\" class=\"container\">\n    <button (click)=\"showEntryForm()\" id=\"add-menu\" style=\"float: right\" class=\"menubtn\"><i class=\"fa fa-plus\"></i> Add Product</button>\n</div>\n\n<div *ngIf=\"showList == true\" class=\"container\">\n    <h3>Product List</h3>\n\n    <table class=\"table table-hover\">\n        <tr>\n            <th *ngFor=\"let header of headers\">\n              {{header}}\n            </th>\n            <th>View</th>\n            <th>Edit</th>\n            <th>Delete</th>\n          </tr>\n        <tr *ngFor=\"let product of products; index as i\">\n          <td *ngFor=\"let col of columns\">\n            {{product[col]}}\n          </td>\n          <td>\n                <button (click)=\"view(i)\" id=\"view\" class=\"btn\"><i class=\"fa fa-eye\"></i></button>\n          </td>\n          <td>\n                <button (click)=\"edit(i)\" id=\"edit\" class=\"btn\"><i class=\"fa fa-edit\"></i></button>\n          </td>\n          <td>\n              <button (click)=\"delete(i)\" id=\"delete\" class=\"btn\"><i class=\"fa fa-trash\"></i></button>\n          </td>\n         \n        </tr>\n      </table>\n</div>\n\n<div *ngIf=\"showEntry == true\" class=\"container\">\n    <app-product></app-product>\n</div>\n\n<div *ngIf=\"showEdit == true\" class=\"container\">\n    <app-product-edit [product]=\"this.editProduct\"></app-product-edit>\n</div>\n\n<div  *ngIf=\"showView == true\" class=\"container\">\n    <h3>Product View</h3>\n    <app-product-view [productView]=\"this.viewProduct\"></app-product-view>\n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.reset();
        this.showList = true;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this._productService.getProducts();
        this.headers = this._productService.getListHeaders();
        this.columns = this._productService.getListColumns();
    };
    ProductListComponent.prototype.delete = function (index) {
        this._productService.deleteProduct(index);
    };
    ProductListComponent.prototype.view = function (index) {
        this.reset();
        this.showView = true;
        this.viewProduct = this._productService.getProduct(index);
    };
    ProductListComponent.prototype.edit = function (index) {
        this.reset();
        this.showEdit = true;
        this.editProduct = this._productService.getProduct(index);
    };
    ProductListComponent.prototype.showListForm = function () {
        this.reset();
        this.showList = true;
    };
    ProductListComponent.prototype.showEntryForm = function () {
        this.reset();
        this.showEntry = true;
    };
    ProductListComponent.prototype.showViewForm = function () {
        this.reset();
        this.showView = true;
    };
    ProductListComponent.prototype.reset = function () {
        this.showList = false;
        this.showEntry = false;
        this.showEdit = false;
        this.showView = false;
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product-view/product-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-view/product-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-view/product-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-view/product-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-hover\">\n    <tr *ngFor=\"let col of columns; index as i\">\n      <th>{{headers[i]}}</th>\n      <td>{{productView[col]}}</td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/product-view/product-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-view/product-view.component.ts ***!
  \********************************************************/
/*! exports provided: ProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function() { return ProductViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");




var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent(_productService) {
        this._productService = _productService;
    }
    ProductViewComponent.prototype.ngOnInit = function () {
        this.headers = this._productService.getHeaders();
        this.columns = this._productService.getColumns();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _product__WEBPACK_IMPORTED_MODULE_2__["Product"])
    ], ProductViewComponent.prototype, "productView", void 0);
    ProductViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-view',
            template: __webpack_require__(/*! ./product-view.component.html */ "./src/app/product-view/product-view.component.html"),
            styles: [__webpack_require__(/*! ./product-view.component.css */ "./src/app/product-view/product-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductViewComponent);
    return ProductViewComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [
            {
                name: "Lenovo Ideapad 330S Laptop", description: "Processor: AMD A9-9425 processor. Operating System: Pre-loaded Windows 10 with lifetime validity. Display: 14-inch HD display", category: "Electronics",
                quantity: 25, unitprice: 400, supplier: "Lenovo", returnable: true
            },
            {
                name: "HP 14 Core i3 Laptop", description: "Processor: 7th Generation Intel core i3-7020U processor, 2.3GHz base processor speed. Operating System: Pre-loaded Windows 10 Home with lifetime validity. Display: 14-inch HD (1366x768) display", category: "Electronics",
                quantity: 10, unitprice: 450, supplier: "HP", returnable: true
            },
            {
                name: "IFB 6.5 Kg Fully-Automatic Washing Machine", description: "Fully-automatic top load washing machine: Affordable with great wash quality, Easy to use. Capacity 6.5 kg: Suitable for families with 3 to 4 members. Warranty: 4 years on product, 4 years on motor", category: "Appliances",
                quantity: 20, unitprice: 250, supplier: "IFB", returnable: true
            },
            {
                name: "1001 Activities Book", description: "Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.", category: "Books",
                quantity: 300, unitprice: 4, supplier: "ABC Publications", returnable: false
            }
        ];
    }
    ProductService.prototype.getColumns = function () {
        return ["name", "description", "category", "quantity", "unitprice", "supplier", "returnable"];
    };
    ProductService.prototype.getListColumns = function () {
        return ["name", "category", "quantity", "unitprice", "supplier"];
    };
    ProductService.prototype.getHeaders = function () {
        return ["Name", "Description", "Category", "Quantity", "Unit Price($)", "Supplier", "Returnable"];
    };
    ProductService.prototype.getListHeaders = function () {
        return ["Name", "Category", "Quantity", "Unit Price($)", "Supplier"];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.getProduct = function (index) {
        return this.products[index];
    };
    ProductService.prototype.addProduct = function (newProduct) {
        this.products.push(newProduct);
    };
    ProductService.prototype.deleteProduct = function (index) {
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product.ts":
/*!****************************!*\
  !*** ./src/app/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
        this.returnable = true;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf =\"!status\" class=\"container\">\n  <h3>Product Entry Form</h3>\n  <form #entryForm=\"ngForm\" (ngSubmit)=\"onSubmit(entryForm)\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required [(ngModel)]=\"product.name\" #name=\"ngModel\">\n      <div *ngIf=\"name.invalid && (submitted || name.touched || name.dirty)\">\n        <div *ngIf=\"name.errors.required\" class=\"alert alert-danger\">Name is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"desc\">Description:</label>\n      <textarea class=\"form-control\" id=\"desc\" name=\"description\" required [(ngModel)]=\"product.description\" #description=\"ngModel\"></textarea>\n      <div *ngIf=\"description.invalid && (submitted || description.touched || description.dirty)\">\n        <div *ngIf=\"description.errors.required\" class=\"alert alert-danger\">Description is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"category\">Category:</label>\n      <select class=\"form-control\" name=\"category\" required [(ngModel)]=\"product.category\" #category=\"ngModel\">\n          <option value=\"Appliances\">Appliances</option> \n          <option value=\"Books\">Books</option>\n          <option value=\"Clothes\">Clothes</option>\n          <option value=\"Electronics\">Electronics</option>\n          <option value=\"Furniture\">Furniture</option>\n      </select>\n      <div *ngIf=\"category.invalid && (submitted || category.touched || category.dirty)\">\n        <div *ngIf=\"category.errors.required\" class=\"alert alert-danger\">Category is required</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"quantity\">Quantity:</label>\n        <input type=\"number\" class=\"form-control\" id=\"quantity\" min=\"1\" \n          name=\"quantity\" required [(ngModel)]=\"product.quantity\" #quantity=\"ngModel\">\n        <div *ngIf=\"quantity.invalid && (submitted || quantity.touched || quantity.dirty)\">\n          <div *ngIf=\"quantity.errors.required\" class=\"alert alert-danger\">Quantity is required</div>\n          <div *ngIf=\"quantity.errors.min\" class=\"alert alert-danger\">Minimum is 1</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"unitprice\">Unit Price($):</label>\n        <input type=\"number\"  pattern=\"^\\d*(\\.\\d{0,2})?$\"  class=\"form-control\" \n          id=\"unitprice\" name=\"unitprice\" required [(ngModel)]=\"product.unitprice\" #unitprice=\"ngModel\">\n        <div *ngIf=\"unitprice.invalid && (submitted || unitprice.touched || unitprice.dirty)\">\n          <div *ngIf=\"unitprice.errors.required\" class=\"alert alert-danger\">Unit Price is required</div>\n          <div *ngIf=\"unitprice.errors.pattern\" class=\"alert alert-danger\">Invalid format</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"supplier\">Supplier:</label>\n        <input type=\"text\" class=\"form-control\" id=\"supname\" name=\"supplier\" \n        required [(ngModel)]=\"product.supplier\" #supplier=\"ngModel\">\n        <div *ngIf=\"supplier.invalid && (submitted || supplier.touched || supplier.dirty)\">\n          <div *ngIf=\"supplier.errors.required\" class=\"alert alert-danger\">Supplier is required</div>\n      </div>\n    </div>\n\n    <div class=\"checkbox\">\n        <label><input type=\"checkbox\" name=\"returnable\" \n          [(ngModel)]=\"product.returnable\" #returnable=\"ngModel\"> Returnable</label>\n    </div>\n    \n    <button type=\"submit\" class=\"btn btn-primary\" id=\"submit\">Add</button>\n    \n  </form>\n</div>\n<div *ngIf=\"status\" class=\"container\">\n    <br><br>\n    <div class=\"alert alert-success\">Product is successfully added!</div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");




var ProductComponent = /** @class */ (function () {
    function ProductComponent(_productService) {
        this._productService = _productService;
        this.product = new _product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
        this.submitted = false;
        this.status = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.onSubmit = function (entryForm) {
        this.submitted = true;
        if (entryForm.valid) {
            this._productService.addProduct(Object.assign({}, this.product));
            this.status = true;
        }
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular-projects\demo-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map