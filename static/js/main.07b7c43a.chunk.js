(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{146:function(e,t,a){e.exports=a.p+"static/media/profile.a5ac588b.jpg"},153:function(e,t,a){e.exports=a(402)},158:function(e,t,a){},400:function(e,t,a){},401:function(e,t,a){},402:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(58),r=a.n(s),o=(a(158),a(41)),l=a(42),c=a(55),m=a(53),d=a(59),p=a(34),u=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleScroll=function(e){window.scrollY>10?n.setState({isSticky:!0}):n.setState({isSticky:!1})},n.handleClickDocument=function(e){e.target.classList.contains("site-nav-backdrop")&&n.setState({isOpenSidebar:!1})},n.state={isSticky:!1,isOpenSidebar:!1},n.openSidebar=n.openSidebar.bind(Object(d.a)(n)),n.onHandleClickLink=n.onHandleClickLink.bind(Object(d.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),document.addEventListener("click",this.handleClickDocument)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),document.removeEventListener("click",this.handleClickDocument)}},{key:"openSidebar",value:function(){this.setState({isOpenSidebar:!0})}},{key:"onHandleClickLink",value:function(){this.setState({isOpenSidebar:!1})}},{key:"render",value:function(){var e=this.state,t=e.isSticky,a=e.isOpenSidebar,s=this.props.portfolioData;return i.a.createElement("header",{className:"site-header ".concat(t?"site-header--sticky":""," ")},i.a.createElement("div",{className:"site-header__wrapper"},i.a.createElement("div",{className:"site-header__brand"},i.a.createElement(p.Link,{className:"site-header__link",activeClass:"site-nav__link--active",to:"home",href:"#home",spy:!0,smooth:!0,offset:0,duration:500},i.a.createElement("img",{src:t?s.logo:s.logoWhite,alt:"",className:"site-header__logo"}))),i.a.createElement("div",{className:"site-header__spacer"}),i.a.createElement("button",{type:"button",className:"site-header__btn-mobile",onClick:this.openSidebar},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18.338",height:"12",viewBox:"0 0 18.338 12",className:"site-header__burger-icon ".concat(t?"site-header__burger-icon--dark":"")},i.a.createElement("g",{id:"Group_6148","data-name":"Group 6148",transform:"translate(-288 -20)"},i.a.createElement("rect",{id:"Rectangle_2400","data-name":"Rectangle 2400",width:"18.338",height:"2",rx:"1",transform:"translate(288 20)",fill:"#fff"}),i.a.createElement("rect",{id:"Rectangle_2401","data-name":"Rectangle 2401",width:"14.94",height:"2",rx:"1",transform:"translate(288 25)",fill:"#fff"}),i.a.createElement("rect",{id:"Rectangle_2402","data-name":"Rectangle 2402",width:"18.338",height:"2",rx:"1",transform:"translate(288 30)",fill:"#fff"})))),a&&i.a.createElement(n.Fragment,null," ",i.a.createElement("div",{className:"site-nav-backdrop"})," "),i.a.createElement("div",{className:"site-sidebar ".concat(a?"is-open":"")}),i.a.createElement("ul",{className:"site-nav site-sidebar  ".concat(a?"is-open":"")},i.a.createElement("li",{className:"site-nav__list"},i.a.createElement(p.Link,{onClick:this.onHandleClickLink,className:"site-nav__link",activeClass:"site-nav__link--active",to:"project",href:"#project",spy:!0,smooth:!0,offset:-20,duration:500},"Projects")),i.a.createElement("li",{className:"site-nav__list"},i.a.createElement(p.Link,{onClick:this.onHandleClickLink,href:"#skills",className:"site-nav__link",activeClass:"site-nav__link--active",to:"skills",spy:!0,smooth:!0,offset:-30,duration:500},"Skills")),i.a.createElement("li",{className:"site-nav__list"},i.a.createElement(p.Link,{onClick:this.onHandleClickLink,href:"#work",className:"site-nav__link",activeClass:"site-nav__link--active",to:"work",spy:!0,smooth:!0,offset:-30,duration:500},"Works")),i.a.createElement("li",{className:"site-nav__list"},i.a.createElement(p.Link,{onClick:this.onHandleClickLink,href:"#contact",className:"site-nav__link",activeClass:"site-nav__link--active",to:"contact",spy:!0,smooth:!0,offset:-30,duration:500},"Contact")))))}}]),a}(n.Component),h=a(145),g=a.n(h),f=a(146),v=a.n(f),E=function(e){var t=e.portfolioData;return i.a.createElement("section",{className:"site-intro site-intro--with-clipmask"},i.a.createElement(g.a,{className:"site-intro__canvas"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-intro__wrapper"},i.a.createElement("div",{className:"site-intro__main"},i.a.createElement("div",{className:"site-intro__intro"},i.a.createElement("h2",{className:"site-intro__name"}," I'm ",t.name,". "),i.a.createElement("h2",{className:"site-intro__heading"}," ",t.role," "),i.a.createElement("h1",{className:"site-intro__primary"}," ",t.intro," "),i.a.createElement("div",{className:"site-intro__action"},i.a.createElement(p.Link,{className:"btn btn-outline-white btn-radius btn-lg",to:"project",href:"#project",spy:!0,smooth:!0,offset:-30,duration:500},"See my works")))),i.a.createElement("div",{className:"site-intro__logo-wrapper"},i.a.createElement("img",{src:v.a,alt:"",className:"site-intro__logo"})))))},_=function(e){return i.a.createElement("section",{className:"site-section site-standard",id:"project"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-section__icon"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"7",viewBox:"0 0 73.94 14.19"},i.a.createElement("polyline",{points:"2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83",style:{strokeDashoffset:"2e-05",strokeDasharray:"none"}}))),i.a.createElement("h1",{className:"site-heading"}," My Recent Projects "),i.a.createElement("div",{className:"row"},e.children)))},k=function(e){var t=e.handleClickProject,a=e.imageUrl,n=e.title;e.link;return i.a.createElement("div",{className:"col-4"},i.a.createElement("div",{className:"site-project",onClick:t},i.a.createElement("div",{className:"site-project__cover"},i.a.createElement("div",{className:"site-project__img",style:{backgroundImage:'url("'.concat(a,'")')}}),i.a.createElement("div",{className:"site-project__overlay"},i.a.createElement("div",{className:"site-project__info"},i.a.createElement("button",{onClick:t,className:"btn btn-outline-white btn-radius btn-md",type:"button"}," ","Learn More"," "))))),i.a.createElement("div",{className:"site-project__name",onClick:t},n," "))},b=function(e){var t=e.title,a=e.link,n=e.description,s=e.technology,r=e.codeLink;return i.a.createElement("div",{className:"project-info"},i.a.createElement("div",{className:"project-info__info"},i.a.createElement("div",{className:"project-info__title"}," ",t," "),i.a.createElement("div",{className:"project-info__desc"}," ",n," "),s.length>0&&i.a.createElement("div",null,i.a.createElement("h2",{className:"project-info__heading"}," Technology used "),i.a.createElement("ul",{className:"project-info__tech"},s.map((function(e,t){return i.a.createElement("li",null," ",e," ")})))),i.a.createElement("div",{className:"project-info__action"},""!==a&&i.a.createElement("a",{className:"btn btn-primary  bt-lg",target:"_blank",rel:"noopener noreferrer",href:a}," ","Visit Website"," "),""!==r&&i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary bt-lg",href:r},i.a.createElement("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",className:"btn-icon"},i.a.createElement("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"})),"View Code"))))},N=a(147),w=a.n(N),y=a(99),S=(a(379),function(e){var t=e.portfolioData.skills.map((function(e,t){return i.a.createElement("div",{className:"col-2",key:t},i.a.createElement("div",{className:"site-skill"},i.a.createElement("div",{className:"site-skill__canvas-wrapper"},i.a.createElement(w.a,null,(function(t){var a=t.isVisible?e.percentage:0;return i.a.createElement(y.a,{value:a,text:"".concat(a,"%"),className:"site-skill__canvas",styles:Object(y.b)({textSize:"2rem",pathTransitionDuration:1})})}))),i.a.createElement("div",{className:"site-skill__text"}," ",e.name)))}));return i.a.createElement("section",{className:"site-section",id:"skills"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-section__icon"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"7",viewBox:"0 0 73.94 14.19"},i.a.createElement("polyline",{points:"2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83",style:{strokeDashoffset:"2e-05",strokeDasharray:"none"}}))),i.a.createElement("h1",{className:"site-heading"}," Skills "),i.a.createElement("div",{className:"row"},t)))}),j=function(e){var t=e.portfolioData.workExp.map((function(e,t){return i.a.createElement("div",{className:"stepper__list",key:t},i.a.createElement("div",{className:"stepper__item"},i.a.createElement("div",{className:"stepper__step"},i.a.createElement("div",{className:"stepper__timeline"},i.a.createElement("div",{className:"stepper__circle"}," "),i.a.createElement("div",{className:"stepper__timeline-heading"}," ",e.title," "))),i.a.createElement("div",{className:"stepper__info"},i.a.createElement("div",{className:"stepper__body"},i.a.createElement("h3",{className:"stepper__title"},e.company," ",i.a.createElement("span",{className:"stepper__date"}," ",e.date," ")," "),i.a.createElement("div",{className:"stepper__sub"}," ",e.description," ")))))}));return i.a.createElement("section",{className:"site-section  site-section--with-background",id:"work"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-section__icon stroke-white"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"7",viewBox:"0 0 73.94 14.19"},i.a.createElement("polyline",{points:"2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83",style:{strokeDashoffset:"2e-05",strokeDasharray:"none"}}))),i.a.createElement("h1",{className:"site-heading text-white"}," Employment History "),i.a.createElement("div",{className:"stepper"},t)))},C=a(148),M=a.n(C),L=a(152),D=a(61),A=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onSubmit=function(e,t){var a=t.resetForm;n.setState({isSending:!0}),M.a.post("https://formcarry.com/s/r9snlWBh5biP",e,{headers:{Accept:"application/json"}}).then((function(e){"success"===e.data.status&&(n.setState({isSending:!1,isShowMsg:!0}),a())})).catch((function(e){console.log(e)}))},n.state={isShowMsg:!1,isSending:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSending,a=e.isShowMsg;return i.a.createElement("section",{className:"site-section",id:"contact"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"site-section__icon"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"7",viewBox:"0 0 73.94 14.19"},i.a.createElement("polyline",{points:"2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83",style:{strokeDashoffset:"2e-05",strokeDasharray:"none"}}))),i.a.createElement("h1",{className:"site-heading"}," Contact "),i.a.createElement(L.a,{className:"site-form",initialValues:{name:"",email:"",message:""},validate:function(e){var t={};return e.name||(t.name="Name is required"),e.email||(t.email="Email is required"),e.message||(t.message="Message is required"),t},validationSchema:D.a().shape({name:D.b().required(),email:D.b().email().required(),message:D.b().required()}),onSubmit:this.onSubmit,render:function(e){var s=e.handleChange,r=e.handleBlur,o=e.values,l=e.errors,c=e.handleSubmit,m=e.touched;return i.a.createElement(n.Fragment,null,i.a.createElement("form",{className:"site-form",onSubmit:c},a&&i.a.createElement("div",{className:"alert alert-success"},"Thank you for sending me a message!"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"site-form__form-group"},i.a.createElement("label",{htmlFor:"input-name",className:"site-form__label"}," ","Name"," "),i.a.createElement("input",{type:"text",name:"name",onBlur:r,onChange:s,className:"site-form__input ".concat(l.name&&m.name?"site-form__input-error":""),id:"input-name",value:o.name}),l.name&&m.name&&i.a.createElement("div",{className:"site-form__error"}," ",l.name," "))),i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"site-form__form-group"},i.a.createElement("label",{htmlFor:"input-email",className:"site-form__label"}," ","Email"," "),i.a.createElement("input",{type:"email",name:"email",onChange:s,className:"site-form__input ".concat(l.email&&m.email?"site-form__input-error":""),id:"input-email",value:o.email}),l.email&&m.email&&i.a.createElement("div",{className:"site-form__error"}," ",l.email," ")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"site-form__form-group"},i.a.createElement("label",{htmlFor:"input-message",className:"site-form__label"}," ","Message"," "),i.a.createElement("textarea",{type:"text",name:"message",onChange:s,className:"site-form__textarea ".concat(l.message&&m.message?"site-form__input-error":""),rows:"8",id:"input-message",value:o.message}),l.message&&m.message&&i.a.createElement("div",{className:"site-form__error"}," ",l.message," ")))),i.a.createElement("div",{className:"site-form__action"},i.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-radius",disabled:t},t?i.a.createElement("span",{className:"loading-icon"}," "):"Submit"))))}})))}}]),a}(n.Component),x=function(){return i.a.createElement("footer",{className:"site-footer site-footer--with-clipmask"},i.a.createElement("div",{className:"site-footer__quote"},'"Everyday living is learning."'),i.a.createElement("div",{className:"site-social"},i.a.createElement("div",{className:"site-social__list"},i.a.createElement("a",{href:"https://www.linkedin.com/in/bo-teng-33a0101b4/",className:"site-social__link"},i.a.createElement("svg",{className:"site-social__icon",viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet"},i.a.createElement("path",{d:"M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333zM279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"})))),i.a.createElement("div",{className:"site-social__list"},i.a.createElement("a",{href:"https://github.com/boteng929",className:"site-social__link"},i.a.createElement("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",className:"site-social__icon"},i.a.createElement("path",{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"})))),i.a.createElement("div",{className:"site-social__list"},i.a.createElement("a",{href:"https://codepen.io/boteng929",className:"site-social__link"},i.a.createElement("svg",{viewBox:"0 0 512 512",preserveAspectRatio:"xMidYMid meet",className:"site-social__icon"},i.a.createElement("path",{d:"M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"}))))),i.a.createElement("div",{className:"site-footer__copyright"}," ","Copyright \xa9 2020 All rights reserved"," "))},I={logo:"img/logo.png",logoWhite:"img/logo.png",name:"Bo Teng",role:"Software Engineer",intro:"with strong automation development skills and background working with engineering and quality teams. Highly skilled in Python, Node.js, React.js, Angular and AWS with proven history of best-in-class development.",projects:[{id:0,title:"EnsureDR Dashboard",imageUrl:"img/portfolio/EnsureDR Dashboard.png",link:"",codeLink:"",description:"The idea of the project is to visualize recovery ready data of various system resources, such as CPU, RAM and Network. It's a React.js based project and I used Redux for global state management. I had to use several chart libraries to visualize the data as the client wanted. I used Gauge Chart, Donut Chart and Chart.js. I implemented pixel-perfect UI from Figma design. It is fully tested for cross browser compatibility and mobile responsive.",technology:["React","Redux","Gauge Chart","Donut Chart","Chart.js"]},{id:1,title:"Coherent DMS",imageUrl:"img/portfolio/Coherent DMS.png",link:"",codeLink:"",description:"The client asked me to build an internal website to manage the company resources. He didn't provide any designs, so I used the React Admin template which provides a clean UI based on Material UI. The back-end is built with DRF and is integrated with React Admin front-end. React Admin is a robust React.js template which has its own data provider and it can adapts to any backend(REST, GraphQL, SOAP, etc). I defined data models for the company resources - categories, documents, text entries, forms and users.",technology:["Python","Django","AWS EC2","React","React Admin","Material UI"]},{id:2,title:"Turnout Nation",imageUrl:"img/portfolio/Turnout Nation.png",link:"https://www.turnoutnation.org/",codeLink:"",description:"This is an online voting platform which has millions of election data records. I used MERN stack for the project. The back-end is built really powerful for searching election data thanks to ElasticSearch. Swagger API documentation, Sentry logging and New Relic performance monitoring help the developers maintenance and future improvement.",technology:["Node.js","MongoDB","AWS EC2","ElasticSearch","Swagger","New Relic","Sentry","Chai","React.js","Jasmine"]},{id:3,title:"YPrime Study Builder",imageUrl:"img/portfolio/YPrime Study Builder.png",link:"",codeLink:"",description:"YPrime develops a clinical trial software that offers data collection and information management solutions for bio-pharmaceutical companies. I worked in a 7-person Agile team, weekly sprints. I attended daily standups for progress evaluation. I mainly focused on building the front-end pages using Angular, writing e2e tests using Protractor and unit tests using Jasmine and Karma. At the end of each sprint, all the tasks were finished bug-free and fully-optimized after passing all the scenarios. I helped business analysts write Cucumber scenarios.",technology:["Angular","Agile","Azure","Protractor","Cucumber","Jasmine","Karma"]},{id:4,title:"Preference Center",imageUrl:"img/portfolio/Preference Center.png",link:"",codeLink:"",description:"Arizent is a business information company empowering people in financial and professional services to lead. They wanted to build a preference center to manage the email preferences of all the companies subscribed. I used Angular for this project. The page designs are provided in Adobe XD format. Thanks to Angular Material-UI, I built clean and user-friendly pages with proper animations. On the other hand, I designed several email templates for email campaigns.",technology:["Angular","Angular Material UI","AWS Cognito"]},{id:5,title:"Zerto Labs",imageUrl:"img/portfolio/Zerto.png",link:"",codeLink:"",description:"The client wanted to integrate Zerto Labs as an iframe into a React.js portal for better management. AWS Amplify framework is used for this project. It really provided me with a fast paced development process. Clean UI is provided for the users using Bootstrap.",technology:["React.js","AWS Amplify","AWS Cognito","AWS S3"]},{id:6,title:"Memoriam.Care",imageUrl:"img/portfolio/Memoriam.Care.png",link:"https://www.memoriam.care/",codeLink:"",description:"This project was started as part of the #BuildForCovid19 Global Hackathon, as a way to help families come together and celebrate the lives of their loved ones in an era of physical distancing. I was in charge of back-end development which is using Express.js. I integrated Zoom API for event management. I also used Sequelize and Bookshelf.js for ORM and MailGun for sending emails.",technology:["Express.js","Zoom API","MSSQL","Sequelize","Bookshelf","Mailgun"]}],skills:[{name:"HTML/CSS",percentage:99},{name:"Javascript",percentage:99},{name:"Node.js",percentage:95},{name:"Python",percentage:90},{name:"React",percentage:90},{name:"Angular",percentage:90},{name:"Amazon Web Services",percentage:80}],workExp:[{title:"Software Engineer",date:"Mar 2019- Jan 2020",company:"Next Idea Tech",description:"Lead Developer role in several projects. Programmed applications and tools using TypeScript and Python object-oriented languages with goals for code abstraction, stability and reuse."},{title:"Full-Stack Developer",date:"Oct 2017 - Sep 2018",company:"Neusoft",description:"Developed online voting system with experienced Agile Team."},{title:"Full-Stack Developer",date:"Jan 2017 - Jun 2017",company:"SAP",description:"Completed Text Editor project in Django/React."},{title:"Senior Back-End Developer",date:"Jan 2016 - Dec 2016",company:"Objectiva",description:"Focused on micro services solutions including AWS Lambda, RDS and S3."},{title:"Back-End Developer",date:"Aug 2014 - Nov 2015",company:"JF computer systems Co. Ltd",description:"Worked as a full-stack web developer in the Agile team of 7 people."}]},R=(a(400),function(e){return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-body"},e.children)))}),O=(a(401),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClickDocument=function(e){e.target.classList.contains("modal")&&(n.setState({isOpenModal:!1}),document.querySelector("body").classList.remove("no-scroll"))},n.handleClick=function(e){n.setState({isOpenModal:!0}),document.querySelector("body").classList.add("no-scroll"),n.getInfo(e)},n.getInfo=function(e){var t=I.projects.filter((function(t){return t.id===e}));n.setState({projectInfo:t})},n.state={isOpenModal:!1,projectInfo:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClickDocument)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickDocument)}},{key:"render",value:function(){var e,t,a=this,s=I,r=this.state,o=r.projectInfo,l=r.isOpenModal;return e=s.projects.map((function(e,t){return i.a.createElement(k,Object.assign({key:e.id},e,{handleClickProject:a.handleClick.bind(a,e.id)}))})),t=o.map((function(e,t){return i.a.createElement(b,Object.assign({key:t},e))})),i.a.createElement(n.Fragment,null,i.a.createElement(u,{portfolioData:I}),i.a.createElement("main",{className:"site-main",id:"home"},i.a.createElement(E,{portfolioData:I,id:"home"}),i.a.createElement(_,null,e),i.a.createElement(S,{portfolioData:I}),i.a.createElement(j,{portfolioData:I}),i.a.createElement(A,null),l&&i.a.createElement(R,null,t)),i.a.createElement(x,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[153,1,2]]]);
//# sourceMappingURL=main.07b7c43a.chunk.js.map