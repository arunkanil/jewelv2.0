(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6dU7":function(a,e,i){"use strict";i.r(e),i.d(e,"DashboardModule",function(){return f});var b=i("s7LF"),t=i("hrfs"),r=i("FE24"),s=i("8Y7J");const o={provide:b.h,useExisting:Object(s.T)(()=>n),multi:!0};let n=(()=>{class a{constructor(){this.btnCheckboxTrue=!0,this.btnCheckboxFalse=!1,this.state=!1,this.onChange=Function.prototype,this.onTouched=Function.prototype}onClick(){this.isDisabled||(this.toggle(!this.state),this.onChange(this.value))}ngOnInit(){this.toggle(this.trueValue===this.value)}get trueValue(){return void 0===this.btnCheckboxTrue||this.btnCheckboxTrue}get falseValue(){return void 0!==this.btnCheckboxFalse&&this.btnCheckboxFalse}toggle(a){this.state=a,this.value=this.state?this.trueValue:this.falseValue}writeValue(a){this.state=this.trueValue===a,this.value=a?this.trueValue:this.falseValue}setDisabledState(a){this.isDisabled=a}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275dir=s.Gb({type:a,selectors:[["","btnCheckbox",""]],hostVars:3,hostBindings:function(a,e){1&a&&s.Yb("click",function(){return e.onClick()}),2&a&&(s.Ab("aria-pressed",e.state),s.Db("active",e.state))},inputs:{btnCheckboxTrue:"btnCheckboxTrue",btnCheckboxFalse:"btnCheckboxFalse"},features:[s.yb([o])]}),a})();const d={provide:b.h,useExisting:Object(s.T)(()=>l),multi:!0};let l=(()=>{class a{constructor(a,e,i,b){this.el=a,this.cdr=e,this.renderer=i,this.group=b,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radio",this._hasFocus=!1}get value(){return this.group?this.group.value:this._value}set value(a){this.group?this.group.value=a:this._value=a}get disabled(){return this._disabled}set disabled(a){this.setDisabledState(a)}get controlOrGroupDisabled(){return!!(this.disabled||this.group&&this.group.disabled)||void 0}get hasDisabledClass(){return this.controlOrGroupDisabled&&!this.isActive}get isActive(){return this.btnRadio===this.value}get tabindex(){return this.controlOrGroupDisabled?void 0:this.isActive||null==this.group?0:-1}get hasFocus(){return this._hasFocus}toggleIfAllowed(){this.canToggle()&&(this.value=this.uncheckable&&this.btnRadio===this.value?void 0:this.btnRadio,this._onChange(this.value))}onSpacePressed(a){this.toggleIfAllowed(),a.preventDefault()}focus(){this.el.nativeElement.focus()}onFocus(){this._hasFocus=!0}onBlur(){this._hasFocus=!1,this.onTouched()}canToggle(){return!this.controlOrGroupDisabled&&(this.uncheckable||this.btnRadio!==this.value)}ngOnInit(){this.uncheckable=void 0!==this.uncheckable}_onChange(a){this.group?this.group.value=a:(this.onTouched(),this.onChange(a))}writeValue(a){this.value=a,this.cdr.markForCheck()}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this._disabled=a,a?this.renderer.setAttribute(this.el.nativeElement,"disabled","disabled"):this.renderer.removeAttribute(this.el.nativeElement,"disabled")}}return a.\u0275fac=function(e){return new(e||a)(s.Lb(s.l),s.Lb(s.h),s.Lb(s.E),s.Lb(Object(s.T)(()=>u),8))},a.\u0275dir=s.Gb({type:a,selectors:[["","btnRadio",""]],hostVars:8,hostBindings:function(a,e){1&a&&s.Yb("click",function(){return e.toggleIfAllowed()})("keydown.space",function(a){return e.onSpacePressed(a)})("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()}),2&a&&(s.Ab("role",e.role)("aria-disabled",e.controlOrGroupDisabled)("aria-checked",e.isActive)("tabindex",e.tabindex),s.Db("disabled",e.hasDisabledClass)("active",e.isActive))},inputs:{value:"value",disabled:"disabled",uncheckable:"uncheckable",btnRadio:"btnRadio"},features:[s.yb([d])]}),a})();const c={provide:b.h,useExisting:Object(s.T)(()=>u),multi:!0};let u=(()=>{class a{constructor(a){this.cdr=a,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radiogroup"}get value(){return this._value}set value(a){this._value=a,this.onChange(a)}get tabindex(){return this._disabled?null:0}writeValue(a){this._value=a,this.cdr.markForCheck()}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this.radioButtons&&(this._disabled=a,this.radioButtons.forEach(e=>{e.setDisabledState(a)}),this.cdr.markForCheck())}onFocus(){if(this._disabled)return;const a=this.getActiveOrFocusedRadio();if(a)a.focus();else{const a=this.radioButtons.find(a=>!a.disabled);a&&a.focus()}}onBlur(){this.onTouched&&this.onTouched()}selectNext(a){this.selectInDirection("next"),a.preventDefault()}selectPrevious(a){this.selectInDirection("previous"),a.preventDefault()}get disabled(){return this._disabled}selectInDirection(a){if(this._disabled)return;function e(e,i){let b=(e+("next"===a?1:-1))%i.length;return b<0&&(b=i.length-1),b}const i=this.getActiveOrFocusedRadio();if(i){const a=this.radioButtons.toArray(),b=a.indexOf(i);for(let i=e(b,a);i!==b;i=e(i,a))if(a[i].canToggle()){a[i].toggleIfAllowed(),a[i].focus();break}}}getActiveOrFocusedRadio(){return this.radioButtons.find(a=>a.isActive)||this.radioButtons.find(a=>a.hasFocus)}}return a.\u0275fac=function(e){return new(e||a)(s.Lb(s.h))},a.\u0275dir=s.Gb({type:a,selectors:[["","btnRadioGroup",""]],contentQueries:function(a,e,i){if(1&a&&s.Eb(i,l,0),2&a){let a;s.mc(a=s.Zb())&&(e.radioButtons=a)}},hostVars:2,hostBindings:function(a,e){1&a&&s.Yb("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()})("keydown.ArrowRight",function(a){return e.selectNext(a)})("keydown.ArrowDown",function(a){return e.selectNext(a)})("keydown.ArrowLeft",function(a){return e.selectPrevious(a)})("keydown.ArrowUp",function(a){return e.selectPrevious(a)}),2&a&&s.Ab("role",e.role)("tabindex",e.tabindex)},features:[s.yb([c])]}),a})(),h=(()=>{class a{static forRoot(){return{ngModule:a,providers:[]}}}return a.\u0275mod=s.Jb({type:a}),a.\u0275inj=s.Ib({factory:function(e){return new(e||a)}}),a})();var v=i("iInd"),g=i("NuRj"),R=i("H++W");function Q(a,e){1&a&&(s.Rb(0,"div",134),s.Rb(1,"a",135),s.wc(2,"Action"),s.Qb(),s.Rb(3,"a",135),s.wc(4,"Another action"),s.Qb(),s.Rb(5,"a",135),s.wc(6,"Something else here"),s.Qb(),s.Rb(7,"a",135),s.wc(8,"Something else here"),s.Qb(),s.Qb())}function p(a,e){1&a&&(s.Rb(0,"div",134),s.Rb(1,"a",135),s.wc(2,"Action"),s.Qb(),s.Rb(3,"a",135),s.wc(4,"Another action"),s.Qb(),s.Rb(5,"a",135),s.wc(6,"Something else here"),s.Qb(),s.Qb())}function w(a,e){1&a&&(s.Rb(0,"div",134),s.Rb(1,"a",135),s.wc(2,"Action"),s.Qb(),s.Rb(3,"a",135),s.wc(4,"Another action"),s.Qb(),s.Rb(5,"a",135),s.wc(6,"Something else here"),s.Qb(),s.Qb())}const m=[{path:"",component:(()=>{class a{constructor(){this.radioModel="Month",this.lineChart1Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart1Labels=["January","February","March","April","May","June","July"],this.lineChart1Options={tooltips:{enabled:!1,custom:R.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:35,max:89}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart1Colours=[{backgroundColor:Object(g.getStyle)("--primary"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart1Legend=!1,this.lineChart1Type="line",this.lineChart2Data=[{data:[1,18,9,17,34,22,11],label:"Series A"}],this.lineChart2Labels=["January","February","March","April","May","June","July"],this.lineChart2Options={tooltips:{enabled:!1,custom:R.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:-4,max:39}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart2Colours=[{backgroundColor:Object(g.getStyle)("--info"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart2Legend=!1,this.lineChart2Type="line",this.lineChart3Data=[{data:[78,81,80,45,34,12,40],label:"Series A"}],this.lineChart3Labels=["January","February","March","April","May","June","July"],this.lineChart3Options={tooltips:{enabled:!1,custom:R.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart3Colours=[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)"}],this.lineChart3Legend=!1,this.lineChart3Type="line",this.barChart1Data=[{data:[78,81,80,45,34,12,40,78,81,80,45,34,12,40,12,40],label:"Series A",barPercentage:.6}],this.barChart1Labels=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],this.barChart1Options={tooltips:{enabled:!1,custom:R.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart1Colours=[{backgroundColor:"rgba(255,255,255,.3)",borderWidth:0}],this.barChart1Legend=!1,this.barChart1Type="bar",this.mainChartElements=27,this.mainChartData1=[],this.mainChartData2=[],this.mainChartData3=[],this.mainChartData=[{data:this.mainChartData1,label:"Current"},{data:this.mainChartData2,label:"Previous"},{data:this.mainChartData3,label:"BEP"}],this.mainChartLabels=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Thursday","Wednesday","Thursday","Friday","Saturday","Sunday"],this.mainChartOptions={tooltips:{enabled:!1,custom:R.CustomTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(a,e){return{backgroundColor:e.data.datasets[a.datasetIndex].borderColor}}}},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{drawOnChartArea:!1},ticks:{callback:function(a){return a.charAt(0)}}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.mainChartColours=[{backgroundColor:Object(g.hexToRgba)(Object(g.getStyle)("--info"),10),borderColor:Object(g.getStyle)("--info"),pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:Object(g.getStyle)("--success"),pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:Object(g.getStyle)("--danger"),pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5]}],this.mainChartLegend=!1,this.mainChartType="line",this.brandBoxChartData1=[{data:[65,59,84,84,51,55,40],label:"Facebook"}],this.brandBoxChartData2=[{data:[1,13,9,17,34,41,38],label:"Twitter"}],this.brandBoxChartData3=[{data:[78,81,80,45,34,12,40],label:"LinkedIn"}],this.brandBoxChartData4=[{data:[35,23,56,22,97,23,64],label:"Google+"}],this.brandBoxChartLabels=["January","February","March","April","May","June","July"],this.brandBoxChartOptions={tooltips:{enabled:!1,custom:R.CustomTooltips},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.brandBoxChartColours=[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff"}],this.brandBoxChartLegend=!1,this.brandBoxChartType="line"}random(a,e){return Math.floor(Math.random()*(e-a+1)+a)}ngOnInit(){for(let a=0;a<=this.mainChartElements;a++)this.mainChartData1.push(this.random(50,200)),this.mainChartData2.push(this.random(80,100)),this.mainChartData3.push(65)}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s.Fb({type:a,selectors:[["ng-component"]],decls:553,vars:57,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-6","col-lg-3"],[1,"card","text-white","bg-info"],[1,"card-body","pb-0"],["type","button",1,"btn","btn-transparent","p-0","float-right"],[1,"icon-location-pin"],[1,"text-value"],[1,"chart-wrapper","mt-3","mx-3",2,"height","70px"],["baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"],[1,"card","text-white","bg-primary"],["dropdown","",1,"btn-group","float-right"],["type","button","dropdownToggle","",1,"btn","btn-transparent","dropdown-toggle","p-0"],[1,"icon-settings"],["class","dropdown-menu dropdown-menu-right",4,"dropdownMenu"],[1,"card","text-white","bg-warning"],[1,"chart-wrapper","mt-3",2,"height","70px"],[1,"card","text-white","bg-danger"],[1,"card"],[1,"card-body"],[1,"col-sm-5"],[1,"card-title","mb-0"],[1,"small","text-muted"],[1,"col-sm-7","d-none","d-md-block"],["type","button",1,"btn","btn-primary","float-right"],[1,"icon-cloud-download"],["data-toggle","buttons",1,"btn-group","btn-group-toggle","float-right","mr-3"],["btnRadio","Day","id","option1",1,"btn","btn-outline-secondary",3,"ngModel","ngModelChange"],["btnRadio","Month","id","option2",1,"btn","btn-outline-secondary",3,"ngModel","ngModelChange"],["btnRadio","Year","id","option3",1,"btn","btn-outline-secondary",3,"ngModel","ngModelChange"],[1,"chart-wrapper",2,"height","300px","margin-top","40px"],[1,"card-footer"],[1,"row","text-center"],[1,"col-sm-12","col-md","mb-sm-2","mb-0"],[1,"text-muted"],[1,"progress","progress-xs","mt-2"],["role","progressbar","aria-valuenow","40","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","40%"],["role","progressbar","aria-valuenow","20","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","20%"],["role","progressbar","aria-valuenow","60","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","60%"],["role","progressbar","aria-valuenow","80","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","80%"],["role","progressbar","aria-valuenow","40","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","40%"],[1,"brand-card"],[1,"brand-card-header","bg-facebook"],[1,"fa","fa-facebook"],[1,"chart-wrapper"],[1,"brand-card-body"],[1,"text-uppercase","text-muted","small"],[1,"brand-card-header","bg-twitter"],[1,"fa","fa-twitter"],[1,"brand-card-header","bg-linkedin"],[1,"fa","fa-linkedin"],[1,"brand-card-header","bg-google-plus"],[1,"fa","fa-google-plus"],[1,"col-md-12"],[1,"card-header"],[1,"col-sm-6"],[1,"callout","callout-info"],[1,"h4"],[1,"callout","callout-danger"],[1,"mt-0"],[1,"progress-group","mb-4"],[1,"progress-group-prepend"],[1,"progress-group-text"],[1,"progress-group-bars"],[1,"progress","progress-xs"],["role","progressbar","aria-valuenow","34","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","34%"],["role","progressbar","aria-valuenow","78","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","78%"],["role","progressbar","aria-valuenow","56","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","56%"],["role","progressbar","aria-valuenow","94","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","94%"],["role","progressbar","aria-valuenow","12","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","12%"],["role","progressbar","aria-valuenow","67","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","67%"],["role","progressbar","aria-valuenow","43","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","43%"],["role","progressbar","aria-valuenow","91","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","91%"],["role","progressbar","aria-valuenow","22","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","22%"],["role","progressbar","aria-valuenow","73","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","73%"],["role","progressbar","aria-valuenow","53","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","53%"],["role","progressbar","aria-valuenow","82","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","82%"],["role","progressbar","aria-valuenow","9","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","9%"],["role","progressbar","aria-valuenow","69","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","69%"],[1,"callout","callout-warning"],[1,"callout","callout-success"],[1,"progress-group"],[1,"progress-group-header"],[1,"icon-user","progress-group-icon"],[1,"ml-auto","font-weight-bold"],["role","progressbar","aria-valuenow","43","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","43%"],[1,"progress-group","mb-5"],[1,"icon-user-female","progress-group-icon"],[1,"progress-group-header","align-items-end"],[1,"icon-globe","progress-group-icon"],[1,"ml-auto","font-weight-bold","mr-2"],[1,"text-muted","small"],["role","progressbar","aria-valuenow","56","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","56%"],[1,"icon-social-facebook","progress-group-icon"],["role","progressbar","aria-valuenow","15","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","15%"],[1,"icon-social-twitter","progress-group-icon"],["role","progressbar","aria-valuenow","11","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","11%"],[1,"icon-social-linkedin","progress-group-icon"],["role","progressbar","aria-valuenow","8","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","8%"],[1,"table","table-responsive-sm","table-hover","table-outline","mb-0"],[1,"thead-light"],[1,"text-center"],[1,"icon-people"],[1,"avatar"],["src","assets/img/avatars/1.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-success"],["title","us","id","us",1,"flag-icon","flag-icon-us","h4","mb-0"],[1,"clearfix"],[1,"float-left"],[1,"float-right"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","50%"],[1,"fa","fa-cc-mastercard",2,"font-size","24px"],["src","assets/img/avatars/2.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-danger"],["title","br","id","br",1,"flag-icon","flag-icon-br","h4","mb-0"],["role","progressbar","aria-valuenow","10","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","10%"],[1,"fa","fa-cc-visa",2,"font-size","24px"],["src","assets/img/avatars/3.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-warning"],["title","in","id","in",1,"flag-icon","flag-icon-in","h4","mb-0"],["role","progressbar","aria-valuenow","74","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","74%"],[1,"fa","fa-cc-stripe",2,"font-size","24px"],["src","assets/img/avatars/4.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],[1,"avatar-status","badge-secondary"],["title","fr","id","fr",1,"flag-icon","flag-icon-fr","h4","mb-0"],["role","progressbar","aria-valuenow","98","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","98%"],[1,"fa","fa-paypal",2,"font-size","24px"],["src","assets/img/avatars/5.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],["title","es","id","es",1,"flag-icon","flag-icon-es","h4","mb-0"],[1,"fa","fa-google-wallet",2,"font-size","24px"],["src","assets/img/avatars/6.jpg","alt","admin@bootstrapmaster.com",1,"img-avatar"],["title","pl","id","pl",1,"flag-icon","flag-icon-pl","h4","mb-0"],["role","progressbar","aria-valuenow","43","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","43%"],[1,"fa","fa-cc-amex",2,"font-size","24px"],[1,"dropdown-menu","dropdown-menu-right"],["href","#",1,"dropdown-item"]],template:function(a,e){if(1&a){s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"div",3),s.Rb(4,"div",4),s.Rb(5,"button",5),s.Mb(6,"i",6),s.Qb(),s.Rb(7,"div",7),s.wc(8,"9.823"),s.Qb(),s.Rb(9,"div"),s.wc(10,"Members online"),s.Qb(),s.Qb(),s.Rb(11,"div",8),s.Mb(12,"canvas",9),s.Qb(),s.Qb(),s.Qb(),s.Rb(13,"div",2),s.Rb(14,"div",10),s.Rb(15,"div",4),s.Rb(16,"div",11),s.Rb(17,"button",12),s.Mb(18,"i",13),s.Qb(),s.uc(19,Q,9,0,"div",14),s.Qb(),s.Rb(20,"div",7),s.wc(21,"9.823"),s.Qb(),s.Rb(22,"div"),s.wc(23,"Members online"),s.Qb(),s.Qb(),s.Rb(24,"div",8),s.Mb(25,"canvas",9),s.Qb(),s.Qb(),s.Qb(),s.Rb(26,"div",2),s.Rb(27,"div",15),s.Rb(28,"div",4),s.Rb(29,"div",11),s.Rb(30,"button",12),s.Mb(31,"i",13),s.Qb(),s.uc(32,p,7,0,"div",14),s.Qb(),s.Rb(33,"div",7),s.wc(34,"9.823"),s.Qb(),s.Rb(35,"div"),s.wc(36,"Members online"),s.Qb(),s.Qb(),s.Rb(37,"div",16),s.Mb(38,"canvas",9),s.Qb(),s.Qb(),s.Qb(),s.Rb(39,"div",2),s.Rb(40,"div",17),s.Rb(41,"div",4),s.Rb(42,"div",11),s.Rb(43,"button",12),s.Mb(44,"i",13),s.Qb(),s.uc(45,w,7,0,"div",14),s.Qb(),s.Rb(46,"div",7),s.wc(47,"9.823"),s.Qb(),s.Rb(48,"div"),s.wc(49,"Members online"),s.Qb(),s.Qb(),s.Rb(50,"div",8),s.Mb(51,"canvas",9),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(52,"div",18),s.Rb(53,"div",19),s.Rb(54,"div",1),s.Rb(55,"div",20),s.Rb(56,"h4",21),s.wc(57,"Traffic"),s.Qb(),s.Rb(58,"div",22),s.wc(59,"November 2017"),s.Qb(),s.Qb(),s.Rb(60,"div",23),s.Rb(61,"button",24),s.Mb(62,"i",25),s.Qb(),s.Rb(63,"div",26),s.Rb(64,"label",27),s.Yb("ngModelChange",function(a){return e.radioModel=a}),s.wc(65,"Day"),s.Qb(),s.Rb(66,"label",28),s.Yb("ngModelChange",function(a){return e.radioModel=a}),s.wc(67,"Month"),s.Qb(),s.Rb(68,"label",29),s.Yb("ngModelChange",function(a){return e.radioModel=a}),s.wc(69,"Year"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(70,"div",30),s.Mb(71,"canvas",9),s.Qb(),s.Qb(),s.Rb(72,"div",31),s.Rb(73,"div",32),s.Rb(74,"div",33),s.Rb(75,"div",34),s.wc(76,"Visits"),s.Qb(),s.Rb(77,"strong"),s.wc(78,"29.703 Users (40%)"),s.Qb(),s.Rb(79,"div",35),s.Mb(80,"div",36),s.Qb(),s.Qb(),s.Rb(81,"div",33),s.Rb(82,"div",34),s.wc(83,"Unique"),s.Qb(),s.Rb(84,"strong"),s.wc(85,"24.093 Users (20%)"),s.Qb(),s.Rb(86,"div",35),s.Mb(87,"div",37),s.Qb(),s.Qb(),s.Rb(88,"div",33),s.Rb(89,"div",34),s.wc(90,"Pageviews"),s.Qb(),s.Rb(91,"strong"),s.wc(92,"78.706 Views (60%)"),s.Qb(),s.Rb(93,"div",35),s.Mb(94,"div",38),s.Qb(),s.Qb(),s.Rb(95,"div",33),s.Rb(96,"div",34),s.wc(97,"New Users"),s.Qb(),s.Rb(98,"strong"),s.wc(99,"22.123 Users (80%)"),s.Qb(),s.Rb(100,"div",35),s.Mb(101,"div",39),s.Qb(),s.Qb(),s.Rb(102,"div",33),s.Rb(103,"div",34),s.wc(104,"Bounce Rate"),s.Qb(),s.Rb(105,"strong"),s.wc(106,"40.15%"),s.Qb(),s.Rb(107,"div",35),s.Mb(108,"div",40),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(109,"div",1),s.Rb(110,"div",2),s.Rb(111,"div",41),s.Rb(112,"div",42),s.Mb(113,"i",43),s.Rb(114,"div",44),s.Mb(115,"canvas",9),s.Qb(),s.Qb(),s.Rb(116,"div",45),s.Rb(117,"div"),s.Rb(118,"div",7),s.wc(119,"89k"),s.Qb(),s.Rb(120,"div",46),s.wc(121,"friends"),s.Qb(),s.Qb(),s.Rb(122,"div"),s.Rb(123,"div",7),s.wc(124,"459"),s.Qb(),s.Rb(125,"div",46),s.wc(126,"feeds"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(127,"div",2),s.Rb(128,"div",41),s.Rb(129,"div",47),s.Mb(130,"i",48),s.Rb(131,"div",44),s.Mb(132,"canvas",9),s.Qb(),s.Qb(),s.Rb(133,"div",45),s.Rb(134,"div"),s.Rb(135,"div",7),s.wc(136,"973k"),s.Qb(),s.Rb(137,"div",46),s.wc(138,"followers"),s.Qb(),s.Qb(),s.Rb(139,"div"),s.Rb(140,"div",7),s.wc(141,"1.792"),s.Qb(),s.Rb(142,"div",46),s.wc(143,"tweets"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(144,"div",2),s.Rb(145,"div",41),s.Rb(146,"div",49),s.Mb(147,"i",50),s.Rb(148,"div",44),s.Mb(149,"canvas",9),s.Qb(),s.Qb(),s.Rb(150,"div",45),s.Rb(151,"div"),s.Rb(152,"div",7),s.wc(153,"500+"),s.Qb(),s.Rb(154,"div",46),s.wc(155,"contacts"),s.Qb(),s.Qb(),s.Rb(156,"div"),s.Rb(157,"div",7),s.wc(158,"292"),s.Qb(),s.Rb(159,"div",46),s.wc(160,"feeds"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(161,"div",2),s.Rb(162,"div",41),s.Rb(163,"div",51),s.Mb(164,"i",52),s.Rb(165,"div",44),s.Mb(166,"canvas",9),s.Qb(),s.Qb(),s.Rb(167,"div",45),s.Rb(168,"div"),s.Rb(169,"div",7),s.wc(170,"894"),s.Qb(),s.Rb(171,"div",46),s.wc(172,"followers"),s.Qb(),s.Qb(),s.Rb(173,"div"),s.Rb(174,"div",7),s.wc(175,"92"),s.Qb(),s.Rb(176,"div",46),s.wc(177,"circles"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(178,"div",1),s.Rb(179,"div",53),s.Rb(180,"div",18),s.Rb(181,"div",54),s.wc(182," Traffic & Sales "),s.Qb(),s.Rb(183,"div",19),s.Rb(184,"div",1),s.Rb(185,"div",55),s.Rb(186,"div",1),s.Rb(187,"div",55),s.Rb(188,"div",56),s.Rb(189,"small",34),s.wc(190,"New Clients"),s.Qb(),s.Mb(191,"br"),s.Rb(192,"strong",57),s.wc(193,"9,123"),s.Qb(),s.Qb(),s.Qb(),s.Rb(194,"div",55),s.Rb(195,"div",58),s.Rb(196,"small",34),s.wc(197,"Recuring Clients"),s.Qb(),s.Mb(198,"br"),s.Rb(199,"strong",57),s.wc(200,"22,643"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Mb(201,"hr",59),s.Rb(202,"div",60),s.Rb(203,"div",61),s.Rb(204,"span",62),s.wc(205," Monday "),s.Qb(),s.Qb(),s.Rb(206,"div",63),s.Rb(207,"div",64),s.Mb(208,"div",65),s.Qb(),s.Rb(209,"div",64),s.Mb(210,"div",66),s.Qb(),s.Qb(),s.Qb(),s.Rb(211,"div",60),s.Rb(212,"div",61),s.Rb(213,"span",62),s.wc(214," Tuesday "),s.Qb(),s.Qb(),s.Rb(215,"div",63),s.Rb(216,"div",64),s.Mb(217,"div",67),s.Qb(),s.Rb(218,"div",64),s.Mb(219,"div",68),s.Qb(),s.Qb(),s.Qb(),s.Rb(220,"div",60),s.Rb(221,"div",61),s.Rb(222,"span",62),s.wc(223," Wednesday "),s.Qb(),s.Qb(),s.Rb(224,"div",63),s.Rb(225,"div",64),s.Mb(226,"div",69),s.Qb(),s.Rb(227,"div",64),s.Mb(228,"div",70),s.Qb(),s.Qb(),s.Qb(),s.Rb(229,"div",60),s.Rb(230,"div",61),s.Rb(231,"span",62),s.wc(232," Thursday "),s.Qb(),s.Qb(),s.Rb(233,"div",63),s.Rb(234,"div",64),s.Mb(235,"div",71),s.Qb(),s.Rb(236,"div",64),s.Mb(237,"div",72),s.Qb(),s.Qb(),s.Qb(),s.Rb(238,"div",60),s.Rb(239,"div",61),s.Rb(240,"span",62),s.wc(241," Friday "),s.Qb(),s.Qb(),s.Rb(242,"div",63),s.Rb(243,"div",64),s.Mb(244,"div",73),s.Qb(),s.Rb(245,"div",64),s.Mb(246,"div",74),s.Qb(),s.Qb(),s.Qb(),s.Rb(247,"div",60),s.Rb(248,"div",61),s.Rb(249,"span",62),s.wc(250," Saturday "),s.Qb(),s.Qb(),s.Rb(251,"div",63),s.Rb(252,"div",64),s.Mb(253,"div",75),s.Qb(),s.Rb(254,"div",64),s.Mb(255,"div",76),s.Qb(),s.Qb(),s.Qb(),s.Rb(256,"div",60),s.Rb(257,"div",61),s.Rb(258,"span",62),s.wc(259," Sunday "),s.Qb(),s.Qb(),s.Rb(260,"div",63),s.Rb(261,"div",64),s.Mb(262,"div",77),s.Qb(),s.Rb(263,"div",64),s.Mb(264,"div",78),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(265,"div",55),s.Rb(266,"div",1),s.Rb(267,"div",55),s.Rb(268,"div",79),s.Rb(269,"small",34),s.wc(270,"Pageviews"),s.Qb(),s.Mb(271,"br"),s.Rb(272,"strong",57),s.wc(273,"78,623"),s.Qb(),s.Qb(),s.Qb(),s.Rb(274,"div",55),s.Rb(275,"div",80),s.Rb(276,"small",34),s.wc(277,"Organic"),s.Qb(),s.Mb(278,"br"),s.Rb(279,"strong",57),s.wc(280,"49,123"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Mb(281,"hr",59),s.Rb(282,"div",81),s.Rb(283,"div",82),s.Mb(284,"i",83),s.Rb(285,"div"),s.wc(286,"Male"),s.Qb(),s.Rb(287,"div",84),s.wc(288,"43%"),s.Qb(),s.Qb(),s.Rb(289,"div",63),s.Rb(290,"div",64),s.Mb(291,"div",85),s.Qb(),s.Qb(),s.Qb(),s.Rb(292,"div",86),s.Rb(293,"div",82),s.Mb(294,"i",87),s.Rb(295,"div"),s.wc(296,"Female"),s.Qb(),s.Rb(297,"div",84),s.wc(298,"37%"),s.Qb(),s.Qb(),s.Rb(299,"div",63),s.Rb(300,"div",64),s.Mb(301,"div",85),s.Qb(),s.Qb(),s.Qb(),s.Rb(302,"div",81),s.Rb(303,"div",88),s.Mb(304,"i",89),s.Rb(305,"div"),s.wc(306,"Organic Search"),s.Qb(),s.Rb(307,"div",90),s.wc(308,"191.235"),s.Qb(),s.Rb(309,"div",91),s.wc(310,"(56%)"),s.Qb(),s.Qb(),s.Rb(311,"div",63),s.Rb(312,"div",64),s.Mb(313,"div",92),s.Qb(),s.Qb(),s.Qb(),s.Rb(314,"div",81),s.Rb(315,"div",88),s.Mb(316,"i",93),s.Rb(317,"div"),s.wc(318,"Facebook"),s.Qb(),s.Rb(319,"div",90),s.wc(320,"51.223"),s.Qb(),s.Rb(321,"div",91),s.wc(322,"(15%)"),s.Qb(),s.Qb(),s.Rb(323,"div",63),s.Rb(324,"div",64),s.Mb(325,"div",94),s.Qb(),s.Qb(),s.Qb(),s.Rb(326,"div",81),s.Rb(327,"div",88),s.Mb(328,"i",95),s.Rb(329,"div"),s.wc(330,"Twitter"),s.Qb(),s.Rb(331,"div",90),s.wc(332,"37.564"),s.Qb(),s.Rb(333,"div",91),s.wc(334,"(11%)"),s.Qb(),s.Qb(),s.Rb(335,"div",63),s.Rb(336,"div",64),s.Mb(337,"div",96),s.Qb(),s.Qb(),s.Qb(),s.Rb(338,"div",81),s.Rb(339,"div",88),s.Mb(340,"i",97),s.Rb(341,"div"),s.wc(342,"LinkedIn"),s.Qb(),s.Rb(343,"div",90),s.wc(344,"27.319"),s.Qb(),s.Rb(345,"div",91),s.wc(346,"(8%)"),s.Qb(),s.Qb(),s.Rb(347,"div",63),s.Rb(348,"div",64),s.Mb(349,"div",98),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Mb(350,"br"),s.Rb(351,"table",99),s.Rb(352,"thead",100),s.Rb(353,"tr"),s.Rb(354,"th",101),s.Mb(355,"i",102),s.Qb(),s.Rb(356,"th"),s.wc(357,"User"),s.Qb(),s.Rb(358,"th",101),s.wc(359,"Country"),s.Qb(),s.Rb(360,"th"),s.wc(361,"Usage"),s.Qb(),s.Rb(362,"th",101),s.wc(363,"Payment Method"),s.Qb(),s.Rb(364,"th"),s.wc(365,"Activity"),s.Qb(),s.Qb(),s.Qb(),s.Rb(366,"tbody"),s.Rb(367,"tr"),s.Rb(368,"td",101),s.Rb(369,"div",103),s.Mb(370,"img",104),s.Mb(371,"span",105),s.Qb(),s.Qb(),s.Rb(372,"td"),s.Rb(373,"div"),s.wc(374,"Yiorgos Avraamu"),s.Qb(),s.Rb(375,"div",22),s.Rb(376,"span"),s.wc(377,"New"),s.Qb(),s.wc(378," | Registered: Jan 1, 2015 "),s.Qb(),s.Qb(),s.Rb(379,"td",101),s.Mb(380,"i",106),s.Qb(),s.Rb(381,"td"),s.Rb(382,"div",107),s.Rb(383,"div",108),s.Rb(384,"strong"),s.wc(385,"50%"),s.Qb(),s.Qb(),s.Rb(386,"div",109),s.Rb(387,"small",34),s.wc(388,"Jun 11, 2015 - Jul 10, 2015"),s.Qb(),s.Qb(),s.Qb(),s.Rb(389,"div",64),s.Mb(390,"div",110),s.Qb(),s.Qb(),s.Rb(391,"td",101),s.Mb(392,"i",111),s.Qb(),s.Rb(393,"td"),s.Rb(394,"div",22),s.wc(395,"Last login"),s.Qb(),s.Rb(396,"strong"),s.wc(397,"10 sec ago"),s.Qb(),s.Qb(),s.Qb(),s.Rb(398,"tr"),s.Rb(399,"td",101),s.Rb(400,"div",103),s.Mb(401,"img",112),s.Mb(402,"span",113),s.Qb(),s.Qb(),s.Rb(403,"td"),s.Rb(404,"div"),s.wc(405,"Avram Tarasios"),s.Qb(),s.Rb(406,"div",22),s.Rb(407,"span"),s.wc(408,"Recurring"),s.Qb(),s.wc(409," | Registered: Jan 1, 2015 "),s.Qb(),s.Qb(),s.Rb(410,"td",101),s.Mb(411,"i",114),s.Qb(),s.Rb(412,"td"),s.Rb(413,"div",107),s.Rb(414,"div",108),s.Rb(415,"strong"),s.wc(416,"10%"),s.Qb(),s.Qb(),s.Rb(417,"div",109),s.Rb(418,"small",34),s.wc(419,"Jun 11, 2015 - Jul 10, 2015"),s.Qb(),s.Qb(),s.Qb(),s.Rb(420,"div",64),s.Mb(421,"div",115),s.Qb(),s.Qb(),s.Rb(422,"td",101),s.Mb(423,"i",116),s.Qb(),s.Rb(424,"td"),s.Rb(425,"div",22),s.wc(426,"Last login"),s.Qb(),s.Rb(427,"strong"),s.wc(428,"5 minutes ago"),s.Qb(),s.Qb(),s.Qb(),s.Rb(429,"tr"),s.Rb(430,"td",101),s.Rb(431,"div",103),s.Mb(432,"img",117),s.Mb(433,"span",118),s.Qb(),s.Qb(),s.Rb(434,"td"),s.Rb(435,"div"),s.wc(436,"Quintin Ed"),s.Qb(),s.Rb(437,"div",22),s.Rb(438,"span"),s.wc(439,"New"),s.Qb(),s.wc(440," | Registered: Jan 1, 2015 "),s.Qb(),s.Qb(),s.Rb(441,"td",101),s.Mb(442,"i",119),s.Qb(),s.Rb(443,"td"),s.Rb(444,"div",107),s.Rb(445,"div",108),s.Rb(446,"strong"),s.wc(447,"74%"),s.Qb(),s.Qb(),s.Rb(448,"div",109),s.Rb(449,"small",34),s.wc(450,"Jun 11, 2015 - Jul 10, 2015"),s.Qb(),s.Qb(),s.Qb(),s.Rb(451,"div",64),s.Mb(452,"div",120),s.Qb(),s.Qb(),s.Rb(453,"td",101),s.Mb(454,"i",121),s.Qb(),s.Rb(455,"td"),s.Rb(456,"div",22),s.wc(457,"Last login"),s.Qb(),s.Rb(458,"strong"),s.wc(459,"1 hour ago"),s.Qb(),s.Qb(),s.Qb(),s.Rb(460,"tr"),s.Rb(461,"td",101),s.Rb(462,"div",103),s.Mb(463,"img",122),s.Mb(464,"span",123),s.Qb(),s.Qb(),s.Rb(465,"td"),s.Rb(466,"div"),s.wc(467,"En\xe9as Kwadwo"),s.Qb(),s.Rb(468,"div",22),s.Rb(469,"span"),s.wc(470,"New"),s.Qb(),s.wc(471," | Registered: Jan 1, 2015 "),s.Qb(),s.Qb(),s.Rb(472,"td",101),s.Mb(473,"i",124),s.Qb(),s.Rb(474,"td"),s.Rb(475,"div",107),s.Rb(476,"div",108),s.Rb(477,"strong"),s.wc(478,"98%"),s.Qb(),s.Qb(),s.Rb(479,"div",109),s.Rb(480,"small",34),s.wc(481,"Jun 11, 2015 - Jul 10, 2015"),s.Qb(),s.Qb(),s.Qb(),s.Rb(482,"div",64),s.Mb(483,"div",125),s.Qb(),s.Qb(),s.Rb(484,"td",101),s.Mb(485,"i",126),s.Qb(),s.Rb(486,"td"),s.Rb(487,"div",22),s.wc(488,"Last login"),s.Qb(),s.Rb(489,"strong"),s.wc(490,"Last month"),s.Qb(),s.Qb(),s.Qb(),s.Rb(491,"tr"),s.Rb(492,"td",101),s.Rb(493,"div",103),s.Mb(494,"img",127),s.Mb(495,"span",105),s.Qb();s.Qb(),s.Rb(496,"td"),s.Rb(497,"div"),s.wc(498,"Agapetus Tade\xe1\u0161"),s.Qb(),s.Rb(499,"div",22),s.Rb(500,"span"),s.wc(501,"New"),s.Qb(),s.wc(502," | Registered: Jan 1, 2015 "),s.Qb(),s.Qb(),s.Rb(503,"td",101),s.Mb(504,"i",128),s.Qb(),s.Rb(505,"td"),s.Rb(506,"div",107),s.Rb(507,"div",108),s.Rb(508,"strong"),s.wc(509,"22%"),s.Qb(),s.Qb(),s.Rb(510,"div",109),s.Rb(511,"small",34),s.wc(512,"Jun 11, 2015 - Jul 10, 2015"),s.Qb(),s.Qb(),s.Qb(),s.Rb(513,"div",64),s.Mb(514,"div",73),s.Qb(),s.Qb(),s.Rb(515,"td",101),s.Mb(516,"i",129),s.Qb(),s.Rb(517,"td"),s.Rb(518,"div",22),s.wc(519,"Last login"),s.Qb(),s.Rb(520,"strong"),s.wc(521,"Last week"),s.Qb(),s.Qb(),s.Qb(),s.Rb(522,"tr"),s.Rb(523,"td",101),s.Rb(524,"div",103),s.Mb(525,"img",130),s.Mb(526,"span",113),s.Qb(),s.Qb(),s.Rb(527,"td"),s.Rb(528,"div"),s.wc(529,"Friderik D\xe1vid"),s.Qb(),s.Rb(530,"div",22),s.Rb(531,"span"),s.wc(532,"New"),s.Qb(),s.wc(533," | Registered: Jan 1, 2015 "),s.Qb(),s.Qb(),s.Rb(534,"td",101),s.Mb(535,"i",131),s.Qb(),s.Rb(536,"td"),s.Rb(537,"div",107),s.Rb(538,"div",108),s.Rb(539,"strong"),s.wc(540,"43%"),s.Qb(),s.Qb(),s.Rb(541,"div",109),s.Rb(542,"small",34),s.wc(543,"Jun 11, 2015 - Jul 10, 2015"),s.Qb(),s.Qb(),s.Qb(),s.Rb(544,"div",64),s.Mb(545,"div",132),s.Qb(),s.Qb(),s.Rb(546,"td",101),s.Mb(547,"i",133),s.Qb(),s.Rb(548,"td"),s.Rb(549,"div",22),s.wc(550,"Last login"),s.Qb(),s.Rb(551,"strong"),s.wc(552,"Yesterday"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()}2&a&&(s.zb(12),s.gc("datasets",e.lineChart2Data)("labels",e.lineChart2Labels)("options",e.lineChart2Options)("colors",e.lineChart2Colours)("legend",e.lineChart2Legend)("chartType",e.lineChart2Type),s.zb(13),s.gc("datasets",e.lineChart1Data)("labels",e.lineChart1Labels)("options",e.lineChart1Options)("colors",e.lineChart1Colours)("legend",e.lineChart1Legend)("chartType",e.lineChart1Type),s.zb(13),s.gc("datasets",e.lineChart3Data)("labels",e.lineChart3Labels)("options",e.lineChart3Options)("colors",e.lineChart3Colours)("legend",e.lineChart3Legend)("chartType",e.lineChart3Type),s.zb(13),s.gc("datasets",e.barChart1Data)("labels",e.barChart1Labels)("options",e.barChart1Options)("colors",e.barChart1Colours)("legend",e.barChart1Legend)("chartType",e.barChart1Type),s.zb(13),s.gc("ngModel",e.radioModel),s.zb(2),s.gc("ngModel",e.radioModel),s.zb(2),s.gc("ngModel",e.radioModel),s.zb(3),s.gc("datasets",e.mainChartData)("labels",e.mainChartLabels)("options",e.mainChartOptions)("colors",e.mainChartColours)("legend",e.mainChartLegend)("chartType",e.mainChartType),s.zb(44),s.gc("datasets",e.brandBoxChartData1)("labels",e.brandBoxChartLabels)("options",e.brandBoxChartOptions)("colors",e.brandBoxChartColours)("legend",e.brandBoxChartLegend)("chartType",e.brandBoxChartType),s.zb(17),s.gc("datasets",e.brandBoxChartData2)("labels",e.brandBoxChartLabels)("options",e.brandBoxChartOptions)("colors",e.brandBoxChartColours)("legend",e.brandBoxChartLegend)("chartType",e.brandBoxChartType),s.zb(17),s.gc("datasets",e.brandBoxChartData3)("labels",e.brandBoxChartLabels)("options",e.brandBoxChartOptions)("colors",e.brandBoxChartColours)("legend",e.brandBoxChartLegend)("chartType",e.brandBoxChartType),s.zb(17),s.gc("datasets",e.brandBoxChartData4)("labels",e.brandBoxChartLabels)("options",e.brandBoxChartOptions)("colors",e.brandBoxChartColours)("legend",e.brandBoxChartLegend)("chartType",e.brandBoxChartType))},directives:[t.a,r.a,r.d,r.b,l,b.i,b.l],encapsulation:2}),a})(),data:{title:"Dashboard"}}];let C=(()=>{class a{}return a.\u0275mod=s.Jb({type:a}),a.\u0275inj=s.Ib({factory:function(e){return new(e||a)},imports:[[v.g.forChild(m)],v.g]}),a})(),f=(()=>{class a{}return a.\u0275mod=s.Jb({type:a}),a.\u0275inj=s.Ib({factory:function(e){return new(e||a)},imports:[[b.f,C,t.b,r.c,h.forRoot()]]}),a})()}}]);