(function(t){function e(e){for(var a,o,r=e[0],l=e[1],u=e[2],m=0,d=[];m<r.length;m++)o=r[m],n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/customer-list-frontend/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"42fe":function(t,e,s){},5675:function(t,e,s){"use strict";var a=s("42fe"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],o=(s("5c0b"),s("2877")),r={},l=Object(o["a"])(r,n,i,!1,null,null,null),u=l.exports,c=s("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customer-list"},[a("h1",{staticClass:"customer-list__title"},[t._v("Список клиентов")]),a("router-link",{staticClass:"btn btn--icon btn--add",attrs:{to:"/create"}}),0!==t.customers.length||t.loading?t._e():a("p",{staticClass:"customer-list--empty"},[t._v("\n    Пока не добавлено ни одного клиента\n  ")]),t.loading?a("p",{staticClass:"customer-list__loading"},[t._v("\n    Загрузка...\n    "),a("img",{attrs:{src:s("cf1c"),alt:"spinner"}})]):t._e(),a("div",{staticClass:"customer-list__table table"},t._l(t.customers,function(e){return a("div",{key:e._id,staticClass:"table__row"},[a("router-link",{staticClass:"btn--view",attrs:{to:{name:"View",params:{id:e._id}}}},[a("span",{staticClass:"table__data table__data--name"},[t._v(t._s(e.last_name)+" "+t._s(e.first_name[0])+". "+t._s(e.middle_name[0])+".")]),a("span",{staticClass:"table__data table__data--status"},[t._v(t._s(e.status))])])],1)}),0)],1)},d=[],_=s("bc3a"),p=s.n(_),f=function(){return p.a.create({baseURL:"https://customer-list-api.herokuapp.com"})},v={getAllCustomers:function(){return f().get("customer/customers")},showCustomer:function(t){return f().get("customer/customer/".concat(t))},addCustomer:function(t){return f().post("customer/create",t)},editCustomer:function(t,e){return f().put("customer/update?customerID=".concat(t),e)},deleteCustomer:function(t){return f().delete("customer/delete?customerID=".concat(t))}},C={data:function(){return{customers:[],loading:!0}},created:function(){this.fetchCustomers()},methods:{fetchCustomers:function(){var t=this;v.getAllCustomers().then(function(e){t.customers=e.data,t.loading=!1})}}},b=C,h=(s("b597"),Object(o["a"])(b,m,d,!1,null,null,null)),g=h.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"customer-form customer-form--edit",on:{submit:function(e){return e.preventDefault(),t.editCustomer()}}},[s("h2",{staticClass:"customer-form__title"},[t._v("Отредактировать информацию")]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Фамилия*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.last_name,expression:"customer.last_name"}],staticClass:"input__field",attrs:{type:"text",required:""},domProps:{value:t.customer.last_name},on:{input:function(e){e.target.composing||t.$set(t.customer,"last_name",e.target.value)}}})]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Имя*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.first_name,expression:"customer.first_name"}],staticClass:"input__field",attrs:{type:"text",required:""},domProps:{value:t.customer.first_name},on:{input:function(e){e.target.composing||t.$set(t.customer,"first_name",e.target.value)}}})]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Отчество")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.middle_name,expression:"customer.middle_name"}],staticClass:"input__field",attrs:{type:"text"},domProps:{value:t.customer.middle_name},on:{input:function(e){e.target.composing||t.$set(t.customer,"middle_name",e.target.value)}}})]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Email*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"input__field",attrs:{type:"email",required:""},domProps:{value:t.customer.email},on:{input:function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)}}})]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Номер телефона*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.phone,expression:"customer.phone"}],staticClass:"input__field",attrs:{type:"text",required:""},domProps:{value:t.customer.phone},on:{input:function(e){e.target.composing||t.$set(t.customer,"phone",e.target.value)}}})]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Адрес*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.address,expression:"customer.address"}],staticClass:"input__field",attrs:{type:"text",required:""},domProps:{value:t.customer.address},on:{input:function(e){e.target.composing||t.$set(t.customer,"address",e.target.value)}}})]),s("div",{staticClass:"customer-form__textarea textarea"},[s("label",{staticClass:"textarea__label"},[t._v("Дополнительная информация")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customer.additionalInfo,expression:"customer.additionalInfo"}],staticClass:"textarea__field",attrs:{rows:"5"},domProps:{value:t.customer.additionalInfo},on:{input:function(e){e.target.composing||t.$set(t.customer,"additionalInfo",e.target.value)}}})]),s("div",{staticClass:"customer-form__select select"},[s("label",{staticClass:"select__label"},[t._v("Статус заявки")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.customer.status,expression:"customer.status"}],staticClass:"select__field",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.customer,"status",e.target.multiple?s:s[0])}}},[s("option",{staticClass:"select__option"},[t._v("Новый клиент")]),s("option",{staticClass:"select__option"},[t._v("В работе")]),s("option",{staticClass:"select__option"},[t._v("Завершена")]),s("option",{staticClass:"select__option"},[t._v("Отмена")])])]),s("button",{staticClass:"btn btn--save"},[t._v("Сохранить")]),s("router-link",{staticClass:"btn--back",attrs:{to:{name:"View",params:{id:t.id}}}},[t._v("\n    Вернуться без сохранения ⇦\n  ")])],1)},w=[],y={data:function(){return{id:0,customer:{}}},created:function(){this.id=this.$route.params.id,this.getCustomer()},methods:{editCustomer:function(){var t=this,e=!0;if(e){var s={last_name:this.customer.last_name,first_name:this.customer.first_name,middle_name:this.customer.middle_name,email:this.customer.email,phone:this.customer.phone,address:this.customer.address,additionalInfo:this.customer.additionalInfo,status:this.customer.status};v.editCustomer(this.id,s).then(function(){V.push({name:"View",params:{id:t.id}})})}},getCustomer:function(){var t=this;v.showCustomer(this.id).then(function(e){return t.customer=e.data})}}},k=y,P=Object(o["a"])(k,x,w,!1,null,null,null),I=P.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"customer-form",on:{submit:function(e){return e.preventDefault(),t.createCustomer()}}},[s("h2",{staticClass:"customer-form__title"},[t._v("Добавить клиента")]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Фамилия*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],staticClass:"input__field",attrs:{type:"text",required:""},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}})]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Имя*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],staticClass:"input__field",attrs:{type:"text",required:""},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}})]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Отчество")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.middle_name,expression:"middle_name"}],staticClass:"input__field",attrs:{type:"text"},domProps:{value:t.middle_name},on:{input:function(e){e.target.composing||(t.middle_name=e.target.value)}}})]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Email*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input__field",attrs:{type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Номер телефона*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"input__field",attrs:{type:"text",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),s("div",{staticClass:"customer-form__input input"},[s("label",{staticClass:"input__label"},[t._v("Адрес*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"input__field",attrs:{type:"text",required:""},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),s("div",{staticClass:"customer-form__textarea textarea"},[s("label",{staticClass:"textarea__label"},[t._v("Дополнительная информация")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.additionalInfo,expression:"additionalInfo"}],staticClass:"textarea__field",attrs:{rows:"5"},domProps:{value:t.additionalInfo},on:{input:function(e){e.target.composing||(t.additionalInfo=e.target.value)}}})]),s("div",{staticClass:"customer-form__select select"},[s("label",{staticClass:"select__label"},[t._v("Статус заявки")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"select__field",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.status=e.target.multiple?s:s[0]}}},[s("option",{staticClass:"select__option"},[t._v("Новый клиент")]),s("option",{staticClass:"select__option"},[t._v("В работе")]),s("option",{staticClass:"select__option"},[t._v("Завершена")]),s("option",{staticClass:"select__option"},[t._v("Отмена")])])]),s("button",{staticClass:"btn btn--save"},[t._v("Добавить")]),s("router-link",{staticClass:"btn--back",attrs:{to:"/"}},[t._v("\n    Вернуться без добавления ⇦\n  ")])],1)},$=[],O={data:function(){return{last_name:"",first_name:"",middle_name:"",email:"",phone:"",address:"",additionalInfo:"",status:""}},methods:{createCustomer:function(){var t={last_name:this.last_name,first_name:this.first_name,middle_name:this.middle_name,email:this.email,phone:this.phone,address:this.address,additionalInfo:this.additionalInfo,status:this.status};this.__submitToServer(t)},__submitToServer:function(t){v.addCustomer(t).then(function(t){console.log(t),V.push({name:"CustomerList"})})}}},j=O,M=(s("5675"),Object(o["a"])(j,N,$,!1,null,null,null)),q=M.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customer-info"},[s("h2",{staticClass:"customer-info__title"},[t._v("Информация о клиенте")]),s("router-link",{staticClass:"btn btn--icon btn--edit",attrs:{to:{name:"Edit",params:{id:t.id}}}}),s("button",{staticClass:"btn btn--icon btn--delete",on:{click:t.toggleDeleteModal}}),t.deleteMode?s("div",{staticClass:"customer-info__confirm-delete"},[s("p",[t._v("Вы уверены, что хотите удалить клиента?")]),s("div",[s("button",{staticClass:"btn btn--icon btn--yes",on:{click:function(e){return t.deleteCustomer(t.id)}}},[t._v("\n      Да\n    ")]),s("button",{staticClass:"btn btn--icon btn--no",on:{click:t.toggleDeleteModal}},[t._v("\n      Нет\n    ")])])]):t._e(),s("div",{staticClass:"customer-info__status"},[t._v("\n    Статус заявки: "+t._s(t.customer.status)+"\n  ")]),s("div",{staticClass:"customer-info__full-name"},[t._v("\n    "+t._s(t.customer.last_name)+" "+t._s(t.customer.first_name)+" "+t._s(t.customer.middle_name)+"\n  ")]),s("div",{staticClass:"middle-block"},[s("div",{staticClass:"customer-info__contacts contacts"},[s("h3",[t._v("Контактная информация: ")]),s("span",{staticClass:"contacts__data contacts__email"},[t._v(t._s(t.customer.email))]),s("a",{staticClass:"contacts__data contacts__phone",attrs:{href:"tel:"+t.customer.phone}},[t._v("\n        "+t._s(t.customer.phone)+"\n      ")]),s("span",{staticClass:"contacts__data contacts__address"},[t._v("\n        "+t._s(t.customer.address)+"\n      ")])]),s("div",{staticClass:"customer-info__additional"},[s("h3",[t._v("Дополнительная информация:")]),s("p",[t._v(t._s(t.customer.additionalInfo))])])]),s("router-link",{staticClass:"btn--back",attrs:{to:"/"}},[t._v("\n    Вернуться к списку клиентов ⇦\n  ")])],1)},D=[],S={data:function(){return{id:0,deleteMode:!1,customer:{}}},created:function(){this.id=this.$route.params.id,this.getCustomer()},methods:{getCustomer:function(){var t=this;v.showCustomer(this.id).then(function(e){return t.customer=e.data})},getBack:function(){V.push({name:"CustomerList"})},toggleDeleteModal:function(){this.deleteMode=!this.deleteMode},deleteCustomer:function(t){var e=this;v.deleteCustomer(t).then(function(t){console.log(t),e.getBack()})}}},T=S,A=(s("d1df"),Object(o["a"])(T,E,D,!1,null,null,null)),L=A.exports;a["a"].use(c["a"]);var V=new c["a"]({base:"/customer-list-frontend/",routes:[{path:"/",name:"CustomerList",component:g},{path:"/create",name:"Create",component:q},{path:"/view/:id",name:"View",component:L},{path:"/edit/:id",name:"Edit",component:I}]});a["a"].config.productionTip=!1,new a["a"]({router:V,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(t,e,s){},"5eff":function(t,e,s){},b27a:function(t,e,s){},b597:function(t,e,s){"use strict";var a=s("5eff"),n=s.n(a);n.a},cf1c:function(t,e,s){t.exports=s.p+"img/loading.4f0d12e8.gif"},d1df:function(t,e,s){"use strict";var a=s("b27a"),n=s.n(a);n.a}});
//# sourceMappingURL=app.b604e73e.js.map