import{a as P,b as R,c as H,d as Q,e as $,f as V,g as k,h as O,i as L,j as N,k as U,l as A,n as j,o as B,p as _,q,r as z}from"./chunk-Q3NTKMEE.js";import{n as E,q as v,r as w,s as g,t as I}from"./chunk-JXXXVDU4.js";import{l as G}from"./chunk-QKOWUZ2H.js";import{Fa as i,Ga as n,Ha as T,Ia as p,Ja as c,Oa as S,T as h,Ua as F,Va as M,Wa as b,Ya as a,Za as f,ab as D,ia as o,ja as x,rc as y,ta as r,wa as s}from"./chunk-REGT5QFK.js";function K(e,t){e&1&&(i(0,"th",17),a(1,"Date"),n())}function W(e,t){if(e&1&&(i(0,"td",18),a(1),n()),e&2){let l=t.$implicit;o(),f(l.date)}}function X(e,t){e&1&&(i(0,"th",17),a(1,"Nom du Fournisseur"),n())}function Y(e,t){if(e&1&&(i(0,"td",18),a(1),n()),e&2){let l=t.$implicit;o(),f(l.NameFournisseur)}}function Z(e,t){e&1&&(i(0,"th",17),a(1,"Designation"),n())}function ee(e,t){if(e&1&&(i(0,"td",18),a(1),n()),e&2){let l=t.$implicit;o(),f(l.Designation)}}function te(e,t){e&1&&(i(0,"th",17),a(1,"Quantite"),n())}function ie(e,t){if(e&1&&(i(0,"td",18),a(1),n()),e&2){let l=t.$implicit;o(),f(l.Quantite)}}function ne(e,t){e&1&&(i(0,"th",17),a(1,"Prix Unitaire"),n())}function ae(e,t){if(e&1&&(i(0,"td",18),a(1),n()),e&2){let l=t.$implicit;o(),f(l.Prix_Unitaire)}}function le(e,t){e&1&&(i(0,"th",17),a(1,"Type de Vente"),n())}function oe(e,t){if(e&1&&(i(0,"td",18),a(1),n()),e&2){let l=t.$implicit;o(),f(l.TypeDeVente)}}function me(e,t){e&1&&(i(0,"th",17),a(1,"Prix Total"),n())}function re(e,t){if(e&1&&(i(0,"td",18),a(1),n()),e&2){let l=t.$implicit;o(),f(l.PrixTotal)}}function de(e,t){e&1&&(i(0,"th",17),a(1,"ID"),n())}function pe(e,t){if(e&1&&(i(0,"td",18),a(1),n()),e&2){let l=t.$implicit;o(),f(l.id)}}function ce(e,t){e&1&&T(0,"tr",19)}function fe(e,t){e&1&&T(0,"tr",20)}var Ee=(()=>{let t=class t{constructor(d){this.serviceFinal=d,this.title="Inventaire de Stock",this.displayedColumns=["id","date","NameFournisseur","Designation","Quantite","Prix_Unitaire","TypeDeVente","PrixTotal"]}ngOnInit(){this.serviceFinal.GetDataFromList().subscribe(d=>{this.dataSource=new A(d),this.dataSource.sort=this.sort,console.log(d)})}ApplyFilter(d){let m=d.target.value;this.dataSource.filter=m.trim().toLocaleLowerCase(),console.log(m)}};t.\u0275fac=function(m){return new(m||t)(x(B))},t.\u0275cmp=h({type:t,selectors:[["app-final-table"]],viewQuery:function(m,u){if(m&1&&F(_,5),m&2){let C;M(C=b())&&(u.sort=C.first)}},standalone:!0,features:[D],decls:34,vars:4,consts:[[3,"title"],[1,"body"],[1,"container"],["matInput","","placeholder","Ex. ium",3,"keyup"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","NameFournisseur"],["matColumnDef","Designation"],["matColumnDef","Quantite"],["matColumnDef","Prix_Unitaire"],["matColumnDef","TypeDeVente"],["matColumnDef","PrixTotal"],["matColumnDef","id"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(m,u){m&1&&(i(0,"app-admin-tool-bar",0)(1,"div",1)(2,"div",2)(3,"mat-form-field")(4,"mat-label"),a(5,"Recherche"),n(),i(6,"input",3),S("keyup",function(J){return u.ApplyFilter(J)}),n()(),i(7,"table",4),p(8,5),r(9,K,2,0,"th",6)(10,W,2,1,"td",7),c(),p(11,8),r(12,X,2,0,"th",6)(13,Y,2,1,"td",7),c(),p(14,9),r(15,Z,2,0,"th",6)(16,ee,2,1,"td",7),c(),p(17,10),r(18,te,2,0,"th",6)(19,ie,2,1,"td",7),c(),p(20,11),r(21,ne,2,0,"th",6)(22,ae,2,1,"td",7),c(),p(23,12),r(24,le,2,0,"th",6)(25,oe,2,1,"td",7),c(),p(26,13),r(27,me,2,0,"th",6)(28,re,2,1,"td",7),c(),p(29,14),r(30,de,2,0,"th",6)(31,pe,2,1,"td",7),c(),r(32,ce,1,0,"tr",15)(33,fe,1,0,"tr",16),n()()()()),m&2&&(s("title",u.title),o(7),s("dataSource",u.dataSource),o(25),s("matHeaderRowDef",u.displayedColumns),o(),s("matRowDefColumns",u.displayedColumns))},dependencies:[w,v,E,I,g,U,P,H,k,Q,R,O,$,V,L,N,j,y,z,_,q,G],styles:[".body[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100% justify-content:center;align-items:center;margin-top:50px}.container[_ngcontent-%COMP%]{width:90%}mat-form-field[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]{width:100%}"]});let e=t;return e})();export{Ee as default};
