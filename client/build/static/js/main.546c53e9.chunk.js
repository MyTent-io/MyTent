(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){},107:function(e,t,a){},138:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(37),r=a.n(l),c=a(19),s=(a(85),a(10)),i=a(11),u=a(13),p=a(12),m=a(151),d=a(150),h=a(9),g=a.n(h),f=function(e,t){return console.log("auth route"),g.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},v=function(e,t){return g.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},E=(a(102),a(71)),b=a.n(E),y=function(e){console.log(e),g.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))};var k=function(e){return console.log(e.user),o.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",className:"Navbar"},o.a.createElement(m.a.Brand,{href:"/"},o.a.createElement("img",{src:b.a,className:"Logo"})),o.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(d.a,{className:"navbarItems"},e.user?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"welcomUserTag"},o.a.createElement("h5",{style:{fontWeight:900}},"Welcome ",e.user.username," ")),o.a.createElement("div",{className:"navbarTags"},o.a.createElement(d.a.Link,{href:"/myprofile"},"Profile"),o.a.createElement(d.a.Link,{href:"/favorites"},"Favorites"),o.a.createElement(d.a.Link,{href:"/allPlaces"},"Created places"),o.a.createElement(d.a.Link,{to:"/",onClick:function(){return y(e)}},"Logout"))):o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a.Link,{href:"/signup"},"Sign Up"),o.a.createElement(d.a.Link,{eventKey:2,href:"/login"}," LogIn ")))))},j=(a(106),a(107),a(28)),O=a(14),C=a.n(O),w=(a(64),a(70),a(38)),N=a.n(w),P=(a(68),a(138),a(153)),L=a(148),S=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={place:null},e.handleLike=function(t){console.log("like",t),g.a.put("/api/places/like/".concat(t)).then((function(t){console.log(t.data),e.getData()})).catch((function(e){return e.response}))},e}return Object(i.a)(a,[{key:"getData",value:function(){var e=this;g.a.get("/api/places/details/".concat(this.props.match.params.placeId)).then((function(t){console.log(t.data),e.setState({place:t.data})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){console.log(this.state.place),console.log(this.props.match.params.placeId),this.getData()}},{key:"render",value:function(){var e=this;return this.state.place?o.a.createElement("div",{className:"cardDatailsContainer"},o.a.createElement(P.a,{style:{width:"25rem"},className:"detailsCard"},o.a.createElement(P.a.Text,null,"  ",o.a.createElement("p",null,this.state.place.name)," "),o.a.createElement(P.a.Img,{variant:"top",src:this.state.place.imgPath}),o.a.createElement(P.a.Text,null," ",o.a.createElement("p",null,this.state.place.description)," "),o.a.createElement("p",null,"Likes: ",this.state.place.likes," "),o.a.createElement(L.a,{variant:"primary",type:"like",onClick:function(){return e.handleLike(e.state.place._id)}}," Likes "),o.a.createElement(c.b,{to:"/"},o.a.createElement("p",null,"Back")))):o.a.createElement("div",null,"loading...")}}]),a}(n.Component);C.a.accessToken="pk.eyJ1IjoiZXJ0ZWxzaW0iLCJhIjoiY2tjenh5NzFjMG9iNTJ0b3V4emM4azN4cSJ9.ND9UOA3cfWrFtJv2gjojPw";new N.a({accessToken:C.a.accessToken,mapboxgl:C.a});var D=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={viewport:{lng:13.33,lat:52.51,zoom:8},places:[],editMap:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/api/places").then((function(t){console.log(t,"response"),e.setState({places:t.data})})).catch((function(e){console.log(e)}));var t=new C.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.viewport.lng,this.state.viewport.lat],zoom:this.state.viewport.zoom});t.on("move",(function(){e.setState({lng:t.getCenter().lng.toFixed(4),lat:t.getCenter().lat.toFixed(4),zoom:t.getZoom().toFixed(2)})})),t.on("click",(function(a){var n=(new C.a.Marker).setLngLat([a.lngLat.lng,a.lngLat.lat]).addTo(t);console.log("A click event has occurred at "+a.lngLat),console.log("A Pin was placed at "+a.lngLat),console.log(a.lngLat.lat),console.log(a.lngLat.lng),console.log(a.lngLat),console.log(e.props),e.props.handleMapChange(a.lngLat.lng,a.lngLat.lat),setInterval((function(){n.remove()}),2e3),setTimeout((function(){alert("Marker of location is set and saved.")}),500)})),t.addControl(new C.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),t.addControl(new N.a({accessToken:C.a.accessToken,mapboxgl:C.a})),t.on("load",(function(){e.state.places.forEach((function(e){var a=document.createElement("div");a.className="marker",a.style.backgroundImage="url(".concat(e.imgPath,")"),console.log("this is place.imgPath:",e.imgPath),a.style.width="40px",a.style.height="40px",new C.a.Marker(a).setLngLat([e.longitude,e.latitude]).setPopup((new C.a.Popup).setHTML("<p><b>".concat(e.name,'</b></p><img src="').concat(e.imgPath,'"  width="60" height="60"/> <p>').concat(e.description,"</p><p>created by ").concat(e.userId.username,'</p><a href="/place/').concat(e._id,'">See Details</a>'))).addTo(t)}))}))}},{key:"render",value:function(){var e=this,t=this.state;t.lng,t.lat,t.zoom;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"}),o.a.createElement("div",{className:"sidebarStyle"},"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom:"," ",this.state.zoom))}}]),a}(n.Component),x=(a(141),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={title:"",description:"",photo:"",userPhoto:e.props.user.photo,userPhotoURL:"",uploadOn:!0,uploadOn2:!0,longitude:"",latitude:"",places:[],Likes:0},e.updateLikes=function(t){e.setState({likes:e.state.likes+t})},e.onDrop=function(t){e.setState({photo:e.state.photo.concat(t)})},e.addPlace=function(){var t={title:"Camping in Berlin",description:"The best camping in Berlin"};e.setState((function(e,a){e.places.concat(t)}))},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(j.a)({},n,o))},e.handleMapChange=function(t,a){console.log(t,a,"handlemapchange"),e.setState({longitude:t,latitude:a})},e.handleFileUpload=function(t){var a=new FormData;a.append("imagePath",t.target.files[0]),e.setState({uploadOn2:!0}),g.a.post("/api/places/uploadImage",a).then((function(t){console.log(t),e.setState({photo:t.data,uploadOn2:!1})})).catch((function(e){return console.log("Error while uploading the file",e)}))},e.handleFileUploadProfile=function(t){var a=new FormData;a.append("imagePath",t.target.files[0]),e.setState({uploadOn:!0}),g.a.post("/api/auth/uploadImage",a).then((function(t){console.log(t),e.setState({uploadOn:!1,userPhotoURL:t.data})})).catch((function(e){return console.log("Error while uploading the file",e)}))},e.handleSubmit=function(t){t.preventDefault(),console.log("banana");var a=e.state,n={title:a.title,description:a.description,photo:a.photo,latitude:a.latitude,longitude:a.longitude};console.log("this is the handle Submit",e.handleSubmit),setTimeout((function(){alert("You successfully created a new place!")}),500),g.a.post("/api/places/new",n).then((function(t){console.log(t.data),e.props.getData(),e.setState({title:"",description:"",photo:"",latitude:"",longitude:""})})).catch((function(e){return e.response.data}))},e.handleSubmitUserProfile=function(t){t.preventDefault(),console.log(e.state.userPhotoURL),g.a.post("/api/auth/profilePicture",{photo:e.state.userPhotoURL}).then((function(t){console.log(t.data.photo),e.props.setUser(t.data),e.setState({userPhoto:t.data.photo})})).catch((function(e){return e.response.data}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.userPhoto!==this.state.userPhoto&&this.render()}},{key:"render",value:function(){return console.log(this.state),console.log(this.props,"PROPS"),o.a.createElement("div",{className:"allContainer"},o.a.createElement("h2",null," My Profile"),o.a.createElement("div",{className:"img-conpatiner"},o.a.createElement("img",{className:"profileimg",src:this.state.userPhoto})),o.a.createElement("form",{className:"formfield",encType:"multipart/form-data",onSubmit:this.handleSubmitUserProfile},o.a.createElement("h2",null,"Add a your profile picture!"),o.a.createElement("input",{type:"file",name:"photo",className:"fileInput",onChange:this.handleFileUploadProfile}),o.a.createElement("div",null,this.state.uploadOn?o.a.createElement("button",{className:"buttonAddpic",disabled:!0,type:"submit"}," ","Add your picture"," "):o.a.createElement("button",{type:"submit"}," Add a your profile picture "))),o.a.createElement("form",{encType:"multipart/form-data",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"formfieldMap"},o.a.createElement("div",{className:"divForm"},o.a.createElement("h2",null," Add a new place for Camping!"),this.handleSubmit.state?o.a.createElement("p",null," New place added. "):o.a.createElement("p",null," "),o.a.createElement("div",null,o.a.createElement("label",{className:"titleForm",htmlFor:"title"}," "),o.a.createElement("input",{className:"titleInput",type:"text",name:"title",id:"title",placeholder:"Title",value:this.state.title,onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("label",{className:"discriptionForm",htmlFor:"description"}," "),o.a.createElement("input",{className:"descriptionInput",type:"text",name:"description",id:"description",placeholder:"Description",value:this.state.description,onChange:this.handleChange})),o.a.createElement("input",{className:"fileInput",type:"file",name:"photo",onChange:this.handleFileUpload}),this.state.uploadOn2?o.a.createElement("p",null):o.a.createElement("p",null," Image uploaded! "),this.state.uploadOn2?o.a.createElement("button",{disabled:!0,type:"submit"}," ","Add a Place"," "):o.a.createElement("button",{type:"submit"}," Add a Place ")))),o.a.createElement(D,{className:"mapBoxHome",handleMapChange:this.handleMapChange,user:this.props.user}))}}]),a}(n.Component)),T=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={places:[]},e}return Object(i.a)(a,[{key:"getData",value:function(){var e=this;g.a.get("/api/places/userPlaces").then((function(t){e.setState({places:t.data})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(x,{user:this.props.user,setUser:this.props.setUser,getData:this.getData}))}}]),a}(n.Component),M=a(15);a(142);C.a.accessToken="pk.eyJ1IjoiZXJ0ZWxzaW0iLCJhIjoiY2tjenh5NzFjMG9iNTJ0b3V4emM4azN4cSJ9.ND9UOA3cfWrFtJv2gjojPw";new N.a({accessToken:C.a.accessToken,mapboxgl:C.a});var U=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={viewport:{lng:13.33,lat:52.51,zoom:8},places:[],editMap:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/api/places").then((function(t){console.log(t,"response"),e.setState({places:t.data})})).catch((function(e){console.log(e)}));var t=new C.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.viewport.lng,this.state.viewport.lat],zoom:this.state.viewport.zoom});t.on("move",(function(){e.setState({lng:t.getCenter().lng.toFixed(4),lat:t.getCenter().lat.toFixed(4),zoom:t.getZoom().toFixed(2)})})),t.addControl(new C.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),t.addControl(new N.a({accessToken:C.a.accessToken,mapboxgl:C.a})),t.on("load",(function(){e.state.places.forEach((function(a){var n=document.createElement("div");n.className="marker",n.style.backgroundImage="url(".concat(a.imgPath,")"),console.log("this is place.imgPath:",a.imgPath),n.style.width="40px",n.style.height="40px",new C.a.Marker(n).setLngLat([a.longitude,a.latitude]).setPopup((new C.a.Popup).setHTML("<p><b>".concat(a.name,'</b></p><img src="').concat(a.imgPath,'"  width="60" height="60"/> <p>').concat(a.description,"</p><p>created by ").concat(a.userId.username,'</p><a href="/place/').concat(a._id,'">See Details</a>'))).addTo(t),console.log(e.props.user.username)}))}))}},{key:"render",value:function(){var e=this,t=this.state;t.lng,t.lat,t.zoom;return console.log(this.state.places),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"}),o.a.createElement("div",{className:"sidebarStyle"},"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom:"," ",this.state.zoom))}}]),a}(n.Component),F=a(149),I=a(152),A=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(j.a)({},n,o))},e.handleSubmit=function(t){t.preventDefault(),console.log("here");var a=e.state,n=a.username,o=a.password;f(n,o).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/myprofile"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Signup"),o.a.createElement(F.a,{onSubmit:this.handleSubmit},o.a.createElement(F.a.Group,null,o.a.createElement(F.a.Label,{htmlFor:"username"},"Username: "),o.a.createElement(F.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})),o.a.createElement(F.a.Group,null,o.a.createElement(F.a.Label,{htmlFor:"password"},"Password: "),o.a.createElement(F.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})),this.state.message&&o.a.createElement(I.a,{variant:"danger"},this.state.message),o.a.createElement(L.a,{type:"submit"},"Signup")))}}]),a}(n.Component),z=(a(143),n.Component,a(52)),J=(a(144),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={places:null},e}return Object(i.a)(a,[{key:"getData",value:function(){var e=this;g.a.get("/api/places").then((function(t){e.setState({places:t.data})}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return this.state.places?o.a.createElement(z.a,null,this.state.places.map((function(e){return o.a.createElement(z.a.Item,null,o.a.createElement("img",{className:"d-block w-100",src:e.imgPath,alt:"Third slide"}))}))):o.a.createElement("div",null,"Loading..")}}]),a}(o.a.Component));var B=function(){return o.a.createElement(D,null)},W=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).handleDelete=function(t){console.log("delete",t),g.a.post("/api/places/delete/".concat(t)).then((function(t){console.log(t.data),e.props.getData()})).catch((function(e){return e.response.data}))},e}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.props.places),this.props.places?o.a.createElement("div",{className:"cardContainers"},this.props.places.map((function(e){return o.a.createElement("div",null,o.a.createElement(P.a,{key:e._id,className:"card"},o.a.createElement(P.a.Img,{variant:"top",src:e.imgPath}),o.a.createElement(P.a.Body,null,o.a.createElement(c.b,{to:"/place/".concat(e._id)},o.a.createElement("p",null,e.name)),o.a.createElement(P.a.Text,null," ",o.a.createElement("p",null,e.description)," "))))}))):o.a.createElement("div",null," empty ")}}]),a}(n.Component),Z=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={favorites:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/api/places/favorites").then((function(t){console.log(t,"favoritesPlaces"),e.setState({favorites:t.data.favorites})}))}},{key:"render",value:function(){return console.log(this.state.favorites,"favorites"),o.a.createElement("div",null,o.a.createElement("h1",null," My Favorites "),o.a.createElement(W,{places:this.state.favorites,getData:this.getData}))}}]),a}(n.Component),_=(a(145),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).handleDelete=function(t){console.log("delete",t),g.a.post("/api/places/delete/".concat(t)).then((function(t){console.log(t.data),e.props.getData()})).catch((function(e){return e.response.data}))},e.handleLike=function(t){console.log("like",t),setTimeout((function(){alert("This place is added to your favorites list")}),500),g.a.put("/api/places/like/".concat(t)).then((function(t){console.log(t.data),e.props.getData()})).catch((function(e){return e.response.data}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.places!==this.props.places&&this.render()}},{key:"render",value:function(){var e=this;return console.log(this.props.places,"PLACES"),o.a.createElement("div",{className:"cardContainer"},this.props.places.map((function(t){return o.a.createElement("div",{className:"cardContainer"},o.a.createElement(P.a,{key:t._id,className:"card"},o.a.createElement(P.a.Img,{variant:"top",src:t.imgPath,className:"myPlaces"}),o.a.createElement(P.a.Body,null,o.a.createElement(P.a.Title,null,o.a.createElement(c.b,{to:"/place/".concat(t._id)},o.a.createElement("p",null,t.name))),o.a.createElement(P.a.Text,null,o.a.createElement("p",null," Place created by ",t.userId.username)),o.a.createElement(P.a.Text,null,o.a.createElement("p",null," ",t.description," ")),o.a.createElement(L.a,{className:"cardButton",onClick:function(){return e.handleLike(t._id)},type:"like",variant:"primary"},"Like"),o.a.createElement(L.a,{className:"cardButton",type:"delete",onClick:function(){return e.handleDelete(t._id)},variant:"primary"}," Delete Place "),o.a.createElement(L.a,{className:"cardButton",variant:"primary"}," ",o.a.createElement(c.b,{to:"editPlace/"+t._id},"Edit Place"),"  "))))})))}}]),a}(n.Component)),G=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={places:[]},e.getData=function(){console.log("getData"),g.a.get("/api/places/userPlaces").then((function(t){e.setState({places:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return console.log(this.state.places),o.a.createElement(_,{places:this.state.places,getData:this.getData})}}]),a}(n.Component),H=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={name:"",description:""},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(j.a)({},n,o))},e.handleEdit=function(t,a){console.log("ballern"),t.preventDefault(),setTimeout((function(){alert("You successfully edit the new place!")}),500),g.a.put("/api/places/edit/".concat(e.props.match.params.placeId),{name:e.state.name,description:e.state.description}).then((function(t){console.log("here",t),e.setState({name:t.data.title,description:t.data.description})})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"getData",value:function(){var e=this;g.a.get("/api/places/details/".concat(this.props.match.params.placeId)).then((function(t){console.log("crazy console",t.data),e.setState({name:t.data.name,description:t.data.description})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){console.log(this.state.place),this.getData()}},{key:"render",value:function(){return o.a.createElement("div",{className:"cardDatailsContainer"},o.a.createElement(F.a,{onSubmit:this.handleEdit},o.a.createElement(F.a.Control,{label:"name",name:"name",id:"name",type:"text",value:this.state.name,onChange:this.handleChange}),o.a.createElement(F.a.Control,{label:"description",name:"description",id:"description",type:"text",value:this.state.description,onChange:this.handleChange}),o.a.createElement(L.a,{className:"cardButton",variant:"primary",type:"submit"}," "," save ")),o.a.createElement(c.b,{to:"/allPlaces"},o.a.createElement("p",null,"Back")))}}]),a}(n.Component),Y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={user:e.props.user,editMap:!1},e.setUser=function(t){e.setState({user:t})},e.handleMapChange=function(t,a){console.log(t,a,"handlemapchange"),e.setState({longitude:t,latitude:a})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.user),o.a.createElement("div",{className:"homeApp"},o.a.createElement("nav",null,o.a.createElement(k,{user:this.state.user,setUser:this.setUser})),o.a.createElement(M.b,{exact:!0,path:"/favorites",render:function(t){return e.state.user?o.a.createElement(Z,Object.assign({},t,{setUser:e.setUser,user:e.state.user})):o.a.createElement(M.a,{to:"/"})}}),o.a.createElement(M.b,{exact:!0,path:"/myprofile",render:function(t){return e.state.user?o.a.createElement(T,Object.assign({},t,{setUser:e.setUser,user:e.state.user})):o.a.createElement(M.a,{to:"/"})}}),o.a.createElement(M.b,{exact:!0,path:"/allPlaces",component:G}),o.a.createElement(M.b,{exact:!0,path:"/place/:placeId",render:function(t){return o.a.createElement(S,Object.assign({},t,{user:e.state.user}))}}),o.a.createElement(M.b,{exact:!0,path:"/editPlace/:placeId",render:function(e){return o.a.createElement("div",null,o.a.createElement(H,e))}}),o.a.createElement(M.b,{exact:!0,path:"/edit",render:function(e){return o.a.createElement("div",null,o.a.createElement(B,null))}}),o.a.createElement(M.b,{exact:!0,path:"/signup",render:function(t){return e.state.user?o.a.createElement(M.a,{to:"/"}):o.a.createElement(A,Object.assign({setUser:e.setUser},t))}}),o.a.createElement(M.b,{exact:!0,path:"/login",render:function(t){return e.state.user?o.a.createElement(M.a,{to:"/"}):o.a.createElement(A,Object.assign({setUser:e.setUser},t))}}),o.a.createElement(M.b,{exact:!0,path:"/",render:function(t){return o.a.createElement("div",{className:"homePage"},o.a.createElement("div",{className:"infoText"},o.a.createElement("h1",null,"Hey, welcome to MyTent!"),o.a.createElement("p",null,"Here You can find places all over the world to pitch your tent and enjoy the wilderness")),o.a.createElement(J,{className:"slider"}),o.a.createElement("br",null),o.a.createElement(U,{className:"mapBoxHome",handleMapChange:e.handleMapChange,user:e.state.user}))}}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));C.a.accessToken="pk.eyJ1IjoiZXJ0ZWxzaW0iLCJhIjoiY2tjenh5NzFjMG9iNTJ0b3V4emM4azN4cSJ9.ND9UOA3cfWrFtJv2gjojPw",g.a.get("/api/auth/loggedin").then((function(e){var t=e.data;r.a.render(o.a.createElement(c.a,null,o.a.createElement(Y,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){},71:function(e,t,a){e.exports=a.p+"static/media/LOGOMYTENT.ee2be369.png"},80:function(e,t,a){e.exports=a(146)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.546c53e9.chunk.js.map