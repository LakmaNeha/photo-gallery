(this.webpackJsonpphotogallery=this.webpackJsonpphotogallery||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(38),o=n.n(a),i=(n(52),n(6)),l=n(18),s=(n(53),n(15));n(56),n(57),n(58);s.a.initializeApp({apiKey:"AIzaSyDFn_vwdX1_csteYbCmU-iatWbj8FXI-no",authDomain:"asthetic-gallery.firebaseapp.com",projectId:"asthetic-gallery",storageBucket:"asthetic-gallery.appspot.com",messagingSenderId:"676145813989",appId:"1:676145813989:web:4a3d0b69cde0cbe937370c"});var u=s.a.storage(),d=s.a.firestore(),j=s.a.firestore.FieldValue.serverTimestamp,b=s.a.auth(),p=n(4),h=function(e){var t=e.docId,n=e.setDocId,c=e.delUrl,r=e.setDelUrl;return d.collection("images").doc(t).delete(),n(null),u.refFromURL(c).delete(),r(null),Object(p.jsx)("div",{})},O=n(31),g=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){var t=d.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),a(t)}));return function(){return t()}}),[e]),{docs:r}},f=n(79),m=n(41),x=n(17),v=function(e){var t=e.setSelectedImage,n=e.setDocId,c=e.setDelUrl,r=Object(x.a)(b),a=Object(i.a)(r,1)[0],o=g("images").docs;return Object(p.jsx)("div",{className:"img-grid",children:o&&o.map((function(e){return Object(p.jsxs)(f.a.div,{className:"img-wrap ",layout:!0,whileHover:{opacity:1},onClick:function(){return t(e.url)},children:[Object(p.jsx)(f.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5}}),a&&Object(p.jsx)("button",{className:"zindex ",children:Object(p.jsx)(m.a,{onClick:function(t){n(e.id),c(e.url),t.stopPropagation()}})})]},e.id)}))})},y=function(e){var t=e.selectedImage,n=e.setSelectedImage;return Object(p.jsx)(f.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&n(null)},initial:{opacity:0},animate:{opacity:1},children:Object(p.jsx)(f.a.img,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})})},S=n(42);var I=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?r(!0):e<=300&&r(!1)})),Object(p.jsx)("button",{className:"arrow-up",children:Object(p.jsx)(S.a,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"inline":"none"}})})},w=n(19),k=n.n(w),A=n(25),D=new s.a.auth.GoogleAuthProvider;function C(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(p.jsx)("div",{className:"login-buttons",children:Object(p.jsx)("button",{className:"login-provider-button",onClick:function(){b.signInWithPopup(D).then((function(e){var t=e.user;console.log(e.user),d.collection("userInfo").doc(t.uid).set({displayName:t.displayName,photoURL:t.photoURL,email:t.email,uid:t.uid}),r(null)})).catch((function(e){r(e),console.log(n)}))},children:Object(p.jsx)("span",{children:" Continue with Google to upload your pictures"})})})}var U,B,N=n(80),W=function(){var e=Object(x.a)(b),t=Object(i.a)(e,1)[0],n=function(){var e=Object(A.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsxs)(N.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(p.jsx)(N.a,{children:Object(p.jsxs)("h1",{style:{letterSpacing:"3px"},children:[Object(p.jsx)("span",{style:{color:" #596854 ",fontWeight:"bolder"},children:"a."}),Object(p.jsx)("span",{style:{color:" #7F803E ",fontWeight:"bolder"},children:"e."}),Object(p.jsx)("span",{style:{color:" #CC9A52 ",fontWeight:"bolder"},children:"s."}),Object(p.jsx)("span",{style:{color:" #AD794B ",fontWeight:"bolder"},children:"t."}),Object(p.jsx)("span",{style:{color:" #f8c96c",fontWeight:"bolder"},children:"h."}),Object(p.jsx)("span",{style:{color:" #596854 ",fontWeight:"bolder"},children:"e."}),Object(p.jsx)("span",{style:{color:" #7F803E ",fontWeight:"bolder"},children:"t."}),Object(p.jsx)("span",{style:{color:" #CC9A52 ",fontWeight:"bolder"},children:"i."}),Object(p.jsx)("span",{style:{color:" #AD794B ",fontWeight:"bolder"},children:"c"})]})}),Object(p.jsx)(N.a,{children:t?Object(p.jsx)("button",{onClick:n,className:"login-provider-button",children:"LogOut"}):Object(p.jsx)(C,{})})]}),Object(p.jsxs)("h1",{children:[Object(p.jsx)("h2",{style:{letterSpacing:"3px",textAlign:"center",color:" #596854 ",marginBottom:" 0rem ",marginTop:"1rem"},children:"Gallery"}),t&&Object(p.jsx)("p",{style:{letterSpacing:"3px",textAlign:"center",fontSize:"smaller",marginTop:"0rem"},children:" Upload your pictures here "})]})]})},E=function(e){var t=Object(c.useState)(0),n=Object(i.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(null),l=Object(i.a)(o,2),s=l[0],b=l[1],p=Object(c.useState)(null),h=Object(i.a)(p,2),O=h[0],g=h[1];return Object(c.useEffect)((function(){var t=u.ref(e.name),n=d.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;a(t)}),(function(e){b(e)}),Object(A.a)(k.a.mark((function e(){var c,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:c=e.sent,r=j(),n.add({url:c,createdAt:r}),g(c);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:O,error:s}},F=function(e){var t=e.uploadedInput,n=e.setUploadedInput,r=E(t),a=r.url,o=r.progress;return Object(c.useEffect)((function(){a&&n(null)}),[a,n]),Object(p.jsx)(f.a.div,{className:"progress-bar",initial:{width:0},animate:{width:o+"%"},children:" "})},T=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),o=Object(i.a)(a,2),l=o[0],s=o[1],u=["image/png","image/jpeg"];return Object(p.jsxs)("form",{children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{id:"hide",type:"file",onChange:function(e){var t=e.target.files[0];t&&u.includes(t.type)?(r(t),s("")):(r(null),s("Please select an image file (png or jpeg)"))}}),Object(p.jsx)("span",{children:"\u2795"})]}),Object(p.jsxs)("div",{style:{letterSpacing:"2px"},children:[Object(p.jsx)("div",{style:{color:"red",textAlign:"center"},children:l}),n&&Object(p.jsx)("div",{children:n.name}),n&&Object(p.jsx)(F,{uploadedInput:n,setUploadedInput:r})]})]})},L={body:"white",text:"#363537",toggleBorder:"#AD794B",background:"transparent"},z={body:"black",text:"#FAFAFA",toggleBorder:"#AD794B",background:"transparent"},P=n(26),R=Object(l.b)(U||(U=Object(P.a)(["\n  body {\n    background: ",";\n    color: ",";\n    \n    transition: all 0.50s linear;\n  }\n  "])),(function(e){return e.theme.body}),(function(e){return e.theme.text})),G=l.c.button(B||(B=Object(P.a)(["\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  border-radius: 30px;\n  cursor: pointer;\n  font-size:0.8rem;\n  padding: 0.6rem;\n  margin-top:1rem;\n  font-size: x-large;\n  \n   \n"])),(function(e){return e.theme.background}),(function(e){return e.theme.toggleBorder}),(function(e){return e.theme.text})),_=function(e){var t=e.theme,n=e.toggleTheme;return Object(p.jsx)(G,{onClick:n,children:"light"===t?"\ud83c\udf19":"\ud83c\udf1e"})};var J=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),o=Object(i.a)(a,2),s=o[0],u=o[1],d=Object(c.useState)(null),j=Object(i.a)(d,2),O=j[0],g=j[1],f=Object(x.a)(b),m=Object(i.a)(f,1)[0],S=function(){var e=Object(c.useState)("light"),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),o=Object(i.a)(a,2),l=o[0],s=o[1],u=function(e){window.localStorage.setItem("theme",e),r(e)};return Object(c.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&r(e),s(!0)}),[]),[n,function(){u("light"===n?"dark":"light")},l]}(),w=Object(i.a)(S,3),k=w[0],A=w[1],D=w[2],C="light"===k?L:z;return D?Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(l.a,{theme:C,children:[Object(p.jsx)(R,{}),Object(p.jsxs)(c.Fragment,{children:[Object(p.jsx)(_,{theme:k,toggleTheme:A}),Object(p.jsx)(W,{}),m&&Object(p.jsx)(T,{}),Object(p.jsx)(v,{setSelectedImage:r,setDocId:u,setDelUrl:g}),n&&Object(p.jsx)(y,{selectedImage:n,setSelectedImage:r}),s&&O&&Object(p.jsx)(h,{docId:s,setDocId:u,delUrl:O,setDelUrl:g}),Object(p.jsx)(I,{})]})]})}):Object(p.jsx)("div",{})};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.883b9bfd.chunk.js.map