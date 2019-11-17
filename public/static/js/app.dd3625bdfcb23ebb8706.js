webpackJsonp([1],{"7zck":function(t,a){},ANWC:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("/5sW"),r={data:function(){return{drawer:null,items:[{icon:"home",text:"Start",link:"/"},{icon:"help",text:"Frågor & Svar",link:"/faq"},{icon:"person",text:"Kontakt",link:"/kontakt"},{icon:"enhanced_encryption",text:"Användarvillkor",link:"/userterms"},{icon:"security",text:"Sekretesspolicy",link:"/policy"}]}},props:{source:String}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"inspire",light:""}},[e("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",{staticClass:"mt-2",attrs:{dense:""}},t._l(t.items,function(a){return e("v-btn",{key:a.text,staticClass:"secondary--text mb-2",attrs:{to:a.link,block:"",flat:""}},[e("v-icon",{staticClass:"mr-4"},[t._v(t._s(a.icon))]),t._v("\n            "+t._s(a.text)+"\n          "),e("v-spacer")],1)})),t._v(" "),e("v-divider")],1),t._v(" "),e("v-toolbar",{attrs:{color:"lightgrey",dense:"",fixed:"","clipped-left":"",app:""}},[e("v-toolbar-side-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-toolbar-title",{staticClass:"mr-5 align-center pointer",on:{click:function(a){t.$router.push("/")}}},[e("span",{staticClass:"jobflix-title"},[e("v-icon",{staticClass:"black--text play-icon-title"},[t._v("play_arrow")]),t._v(" "),e("span",{staticClass:"jobflix-title1"},[t._v("Job")]),e("span",{staticClass:"jobflix-title2"},[t._v("flix")])],1)]),t._v(" "),e("v-spacer"),t._v(" "),e("v-layout",{staticStyle:{"max-width":"650px"},attrs:{row:"","align-center":""}})],1),t._v(" "),e("v-content",[e("router-view",{staticStyle:{"margin-bottom":"180px"}}),t._v(" "),e("v-footer",{attrs:{dark:"",absolute:""}},[e("v-card",{staticClass:"indigo lighten-1 white--text text-xs-center",staticStyle:{width:"100vw","margin-top":"-95px!important"},attrs:{flat:"",tile:""}},[e("v-card-text",[e("a",{attrs:{target:"_blank",href:"https://business.jobflix.se/"}},[e("v-btn",{staticClass:"mx-3 white--text",attrs:{round:"",flat:""}},[t._v("\n                Företag\n              ")])],1),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://www.jobflix.se/"}},[e("v-btn",{staticClass:"mx-3 white--text",attrs:{round:"",flat:""}},[t._v("\n                Arbetssökande\n              ")])],1),t._v(" "),e("v-btn",{staticClass:"mx-3 white--text",attrs:{to:"/kontakt",round:"",flat:""}},[t._v("\n                Kontakt\n              ")]),t._v(" "),e("v-btn",{staticClass:"mx-3 white--text",attrs:{to:"/userterms",round:"",flat:""}},[t._v("\n              Användarvillkor\n            ")]),t._v(" "),e("v-btn",{staticClass:"mx-3 white--text",attrs:{to:"/policy",round:"",flat:""}},[t._v("\n              Sekretesspolicy\n            ")])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",{staticClass:"white--text"},[t._v("\n            ©"+t._s((new Date).toISOString().substr(0,4))+" — "),e("strong",[t._v("Jobflix")])])],1)],1)],1)],1)},staticRenderFns:[]};var i=e("VU/8")(r,s,!1,function(t){e("ANWC")},null,null).exports,l=e("/ocq"),o={methods:{toFaq:function(){console.log("toFaq")}}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-slide-y-transition",{attrs:{mode:"out-in"}},[e("v-layout",{attrs:{"mt-4":"","px-3":"",row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("div",{staticClass:"display-1 black--text"},[t._v("\n          Vad är Jobflix?\n        ")])]),t._v(" "),e("v-flex",{staticClass:"body-1 py-4",attrs:{xs12:""}},[e("p",[t._v("\n          Jobflix är en plattform byggd för att underlätta kommunikationen mellan arbetsgivare och arbetssökande under\n          en anställningsprocess. Vi skiftar fokus från traditionell rekrytering till ett nyare och modernare sätt att rekrytera på.\n          Vi tror starkt att detta är framtiden för rekryteringsbranschen.\n        ")])]),t._v(" "),e("v-flex",{attrs:{"px-3":"","mb-2":"",xs12:"",md4:""},on:{click:function(a){t.$router.push("/faq")}}},[e("v-card",{staticClass:"navigationCard",staticStyle:{height:"160px"}},[e("v-card-title",{staticClass:"justify-center"},[e("div",{staticClass:"title"},[t._v("\n              Vanliga frågor & svar\n            ")])]),t._v(" "),e("v-card-text",{staticStyle:{"border-top":"2px solid lightgrey"}},[e("div",{staticClass:"body-1 text-xs-center"},[t._v("\n              Vi besvarar vanliga funderingar gällande tjänsten.\n            ")])])],1)],1),t._v(" "),e("v-flex",{attrs:{"px-3":"","mb-2":"",xs12:"",md4:""},on:{click:function(a){t.$router.push("/kontakt")}}},[e("v-card",{staticClass:"navigationCard",staticStyle:{height:"160px"}},[e("v-card-title",{staticClass:"justify-center"},[e("div",{staticClass:"title"},[t._v("\n              Kontakt\n            ")])]),t._v(" "),e("v-card-text",{staticStyle:{"border-top":"2px solid lightgrey"}},[e("div",{staticClass:"body-1 text-xs-center"},[t._v("\n              Vi finns alltid tillgängliga på mail och svarar alltid inom 24 timmar. \n              Vi svarar på telefon under arbetstid.\n            ")])])],1)],1),t._v(" "),e("v-flex",{attrs:{"px-3":"","mb-2":"",xs12:"",md4:""},on:{click:function(a){t.$router.push("/userterms")}}},[e("v-card",{staticClass:"navigationCard",staticStyle:{height:"160px"}},[e("v-card-title",{staticClass:"justify-center"},[e("div",{staticClass:"title"},[t._v("\n              Användarvillkor\n            ")])]),t._v(" "),e("v-card-text",{staticStyle:{"border-top":"2px solid lightgrey"}},[e("div",{staticClass:"body-1 text-xs-center"},[t._v("\n              Vill du först läsa igenom användarvillkoren för tjänsten så kan du göra det här!\n            ")])])],1)],1),t._v(" "),e("v-flex",{attrs:{xs12:"","mt-5":"","pb-4":""}},[e("div",{staticClass:"title",staticStyle:{"font-weight":"bold"}},[t._v("\n          Feedback\n        ")])]),t._v(" "),e("v-flex",{attrs:{xs12:"","pb-4":""}},[e("div",{staticClass:"body-1"},[t._v("\n          Har du feedback på något. En bugg du hittat, eller bara övriga funderingar så blir vi glada om du kontaktar oss på\n          support@jobflix.se.\n        ")])])],1)],1)],1)},staticRenderFns:[]};var d=e("VU/8")(o,v,!1,function(t){e("arD0")},"data-v-040f8a95",null).exports,c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",[e("v-layout",{attrs:{"mt-4":"","px-3":"",row:"",wrap:""}},[e("v-flex",[e("h1",{staticClass:"display-1"},[t._v("Frågor & svar")])]),t._v(" "),e("v-flex",{attrs:{xs12:"","mt-4":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              När grundades Jobflix?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v("Svar:\n              Idén till Jobflix kom under hösten 2018. Vi vill nog hellre kalla det för en lösning på ett stort och\n              signifikant problem på arbetsmarknaden som vi byggt en lösning för. Så Jobflix grundades alltså hösten 2018.\n            ")])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              Är Jobflix gratis?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v("Svar:\n              Jobflix är gratis för de som söker jobb. För att kunna använda businessportalen så behöver man uppgradera till\n              antingen Guld eller Platinum för att få full nytta av tjänsten.\n            ")])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              Är ni rektyterare?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v("Svar:\n              Nej. Jobflix är ett verktyg helt och hållet dedikerat till arbetsgivare och arbetssökande. En plattform\n              som underlättar kommunkation och effektiviserar rekryteringsprocesserna.\n            ")])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              Hur skiljer ni er från andra portaler?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v("Svar:\n              Jobflix är helt unik i sin marknad, rekrytering. Videorekrytering finns redan i olika former, men Jobflix\n              tar konceptet videorektrytering till en helt ny dimension.\n            ")])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              Är Jobflix ett socialt media?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v("Svar:\n              Jobflix är likt ett socialt media på så sätt att man har profiler och kommunicerar med de man bokat möte med.\n              Så visst kan man säga att Jobflix är ett socialt media för företag och arbetssökande.\n            ")])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              Vilka kan få tillgång till mina videopresentaioner?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v('Svar:\n              Endast registrerade företagsanvädare som betalar antingen guld eller platinum har full tillgång till "marknaden" och\n              andra bevakningsfunktionaliteter där dina presentationer kan hamna i.\n            ')])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              Jag vill inte synas för vissa företag, går det?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v('Svar:\n              Det är en funktion som kommer i kommade "release". I dagsläget behövs det inte. Men det kommer.\n            ')])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              Vart dyker mina presentationer upp?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v('Svar:\n              Dina "aktiva presentationer" dyker alltid upp i marknaden och i eventuella bevakningar. Svarar du på en annons så\n              skickar du en färdig presentation med personligt meddelande direkt till företaget.\n            ')])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              När jag fått jobb, vad gör jag då?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v("Svar:\n              När du inte söker jobb längre så ska du stänga av eller pausa alla dina presentationer \n              så de inte ligger ute i onödan. \n            ")])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              Hur fungererar företagskontot?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v('Svar:\n              Man kan skapa hur många företagskonton som helst. Tänk på att man kan vara ett obegränsat antal användare i samma\n              företagskonto med samma prispaket dock. Men är företaget uppdelat i avdelningar och vill "displaya" olika företagsprofiler\n              så är det rekommenderat att man startar ett separat företagskonto. \n            ')])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              Hur vet vi att obehöriga inte skapar konto i företaget?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v('Svar:\n              Alla användare blir notifierade när någon lagts till i ett företag, eller ändrat i företagsprofilen.\n              Är det något som inte stämmer så klickar ni på "Anmäl" och mailar support@jobflix.se så löser vi det! \n            ')])]),t._v(" "),e("v-flex",{attrs:{"my-3":"","px-3":"",xs6:"",md4:""}},[e("div",{staticClass:"body-2"},[t._v("\n              Hur lägger man till sig i ett registerat företag?\n            ")]),t._v(" "),e("div",{staticClass:"body-1"},[t._v("Svar:\n              Man skapar alltid konto som vanligt. \n              Är det så att VatId redan finns så läggs man då till som ny användare i företaget. Viktigt att man skriver in rätt Vat Id m.a.o.\n            ")])])],1)],1),t._v(" "),e("v-flex",{attrs:{xs12:""}},[e("div",{staticClass:"subheading my-4"},[t._v("\n          Har du övriga frågor eller synpunkter så tar vi görna emot din åsikt på support@jobflix.se.\n        ")])])],1)],1)],1)},staticRenderFns:[]},p=e("VU/8")(null,c,!1,null,null,null).exports,f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("v-container",[a("v-layout",[a("v-flex",[a("h1",[this._v("Hjälp SIDA")])])],1)],1)],1)},staticRenderFns:[]},u=e("VU/8")(null,f,!1,null,null,null).exports,m={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("v-container",[a("v-layout",[a("v-flex",[a("v-layout",{attrs:{"mt-4":"","px-3":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"display-1"},[this._v("\n            Kontakt\n          ")])]),this._v(" "),a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"subheading py-4"},[this._v("\n              Ni når oss alltid på "),a("a",{attrs:{href:"mailto:support@jobflix.se"}},[this._v("support@jobflix.se.")]),this._v(" Vi svarar alltid inom 24 timmar.\n              "),a("v-icon",{staticClass:"ml-2"},[this._v("mail")])],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]},g=e("VU/8")(null,m,!1,null,null,null).exports,x={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",[e("v-layout",[e("v-flex",{attrs:{"px-3":"",xs12:""}},[e("h2",{staticClass:"display-1 py-4"},[t._v("Privacy Policy")]),t._v(" "),e("p",[t._v("Your privacy is important to us. It is Jobflix AB's policy to respect your privacy regarding any information we may collect from you across our website, "),e("a",{attrs:{href:"https://www.jobflix.se/"}},[t._v("https://www.jobflix.se/")]),t._v(", and other sites we own and operate.")]),t._v(" "),e("p",[t._v("We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.")]),t._v(" "),e("p",[t._v("We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.")]),t._v(" "),e("p",[t._v("We don’t share any personally identifying information publicly or with third-parties, except when required to by law.")]),t._v(" "),e("p",[t._v("Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.")]),t._v(" "),e("p",[t._v("You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.")]),t._v(" "),e("p",[t._v("Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.")]),t._v(" "),e("p",[t._v("This policy is effective as of 14 November 2018.")])])],1)],1)],1)},staticRenderFns:[]},b=e("VU/8")(null,x,!1,null,null,null).exports,y={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",[e("v-layout",[e("v-flex",{attrs:{"px-3":"",xs12:""}},[e("h2",{staticClass:"display-1 py-4"},[t._v("Jobflix AB - GDPR")]),t._v(" "),e("p",[t._v("\n         Vi behöver spara och behandla personuppgifter om dig, så som namn, epost och mobilnummer. Syftet med en sådan behandling är för att kunna kontakta er samt låta företag som ni bokat möte med kontakta er. \n       ")]),t._v(" "),e("p",[t._v("\n         Vi har fått dina uppgifter från jobflix.se. Vi tillämpar vid var tid gällande integritetslagstiftning vid all behandling av personuppgifter. Den rättsliga grunden för att behandla dina personuppgifter är ett samtycke från dig vid registrering. Dina uppgifter kommer att sparas så länge ni finns med på jobflix.se. \n       ")]),t._v(" "),e("p",[t._v("\n         De personuppgifter vi behandlar om dig delas med företag som ni har bokat möte med. Vi kan även komma att dela dina personuppgifter med en tredje part, förutsatt att vi är skyldiga att göra så enligt lag. Däremot kommer vi aldrig att överföra dina uppgifter till ett land utanför EU.\n       ")]),t._v(" "),e("p",[t._v("\n         Personuppgiftsansvarig är Håkan Sundström. Du har rätt att kontakta oss om du vill ha ut information om de uppgifter vi har om dig, för att begära rättelse, överföring eller för att begära att vi begränsar behandlingen, för att göra invändningar eller begära radering av  dina uppgifter. \n       ")]),t._v(" "),e("p",[t._v("\n          Detta gör du enklast genom att kontakta oss på support@jobflix.se. Om du har klagomål på vår behandling av dina personuppgifter har du rätt att inge klagomål till tillsynsmyndigheten Datainspektionen. \n       ")])])],1)],1)],1)},staticRenderFns:[]},_=e("VU/8")(null,y,!1,null,null,null).exports;n.default.use(l.a);var k=new l.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:d},{path:"/faq",name:"faq",component:p},{path:"/help",name:"helo",component:u},{path:"/kontakt",name:"kontakt",component:g},{path:"/policy",name:"Policy",component:b},{path:"/userterms",name:"Userterms",component:_}],scrollBehavior:function(t,a,e){return{x:0,y:0}}}),h=e("3EgV"),w=e.n(h);e("7zck");n.default.use(w.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:k,render:function(t){return t(i)}})},arD0:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.dd3625bdfcb23ebb8706.js.map