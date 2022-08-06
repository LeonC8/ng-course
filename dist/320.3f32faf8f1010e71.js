"use strict";(self.webpackChunkcourse_project=self.webpackChunkcourse_project||[]).push([[320],{3320:(Z,g,r)=>{r.r(g),r.d(g,{ShoppingListModule:()=>L});var p=r(4719),u=r(3510),h=r(4466),t=r(6738),l=r(2457),a=r(9102),m=r(6895),f=r(9985);const v=["f"];function S(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onDelete())}),t._uU(1,"Delete"),t.qZA()}}let b=(()=>{class e{constructor(n){this.shoppingListService=n,this.editMode=!1}ngOnInit(){this.subscription=this.shoppingListService.startedEditing.subscribe(n=>{this.editMode=!0,this.editedItemIndex=n,this.editedItem=this.shoppingListService.getIngredient(n),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onIngredientAdded(n){const i=n.value,o=new f.o(i.name,i.amount);this.editMode?this.shoppingListService.updateIngredient(this.editedItemIndex,o):this.shoppingListService.addIngredient(o),this.editMode=!1,this.slForm.reset()}onClear(){this.editMode=!1,this.slForm.reset()}ngOnDestroy(){this.subscription.unsubscribe()}onDelete(){this.shoppingListService.deleteIngredient(this.editedItemIndex),this.onClear()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l._))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-edit"]],viewQuery:function(n,i){if(1&n&&t.Gf(v,5),2&n){let o;t.iGM(o=t.CRH())&&(i.slForm=o.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",2,"margin-right","5px",3,"disabled"],["class","btn btn-danger","style","margin-right: 5px","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-danger",2,"margin-right","5px",3,"click"]],template:function(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(o);const c=t.MAs(3);return t.KtG(i.onIngredientAdded(c))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",0)(14,"div",1)(15,"button",10),t._uU(16),t.qZA(),t.YNc(17,S,2,0,"button",11),t.TgZ(18,"button",12),t.NdJ("click",function(){return i.onClear()}),t._uU(19,"Clear"),t.qZA()()()()()()}if(2&n){const o=t.MAs(3);t.xp6(15),t.Q6J("disabled",!o.valid),t.xp6(1),t.Oqu(i.editMode?"Update":"Add"),t.xp6(1),t.Q6J("ngIf",i.editMode)}},dependencies:[p._Y,p.Fj,p.wV,p.JJ,p.JL,p.Q7,p.c5,p.On,p.F,m.O5]}),e})();function C(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const d=t.CHM(n).index,c=t.oxw();return t.KtG(c.onEditItem(d))}),t._uU(1),t.qZA()}if(2&e){const n=s.$implicit;t.xp6(1),t.AsE(" ",n.name," (",n.amount,") ")}}let I=(()=>{class e{constructor(n,i){this.shoppingListService=n,this.logginService=i}ngOnInit(){this.ingredients=this.shoppingListService.getIngredients(),this.subscription=this.shoppingListService.ingredientsChanged.subscribe(n=>{this.ingredients=n}),this.logginService.printLog("Hello from ShoppingListComponent ngOnInit!")}addIngredient(n){this.ingredients.push(n)}ngOnDestroy(){this.subscription.unsubscribe()}onEditItem(n){this.shoppingListService.startedEditing.next(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l._),t.Y36(a.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor:pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-edit")(3,"hr"),t.TgZ(4,"ul",2),t.YNc(5,C,2,2,"a",3),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",i.ingredients))},dependencies:[m.sg,b]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.u5,h.m,u.Bz.forChild([{path:"",component:I}])]}),e})()}}]);