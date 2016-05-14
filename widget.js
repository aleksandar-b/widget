(function () {



if(location.search){
var query =  location.search.split("?").filter(function(val){
		return val;
	})
query = query[0].split("&")
console.log(query)


var params = {};
query.forEach( function(element, index) {
	var split = element.split("=");
	params[split[0]] = split[1];
});
}
console.log(params);

var defaultParams = {

	additionaldescription: "display",
	servicesinterestedin: "display",
	contactphone: "required",
	width: 500,
	height:600


};



var params = Object.assign(defaultParams, params);

console.log(params)

/*** Inspiration https://stripe.com/docs/checkout ***/

var script = document.getElementById("widget");


var options = {
additionaldescription: params.additionaldescription,
servicesinterestedin: params.servicesinterestedin,
contactphone: params.contactphone,
width: (params.width),
height:params.height

}


var close = document.createElement("div");
close.style.background = "url('https://b.stripecdn.com/checkout/v3/images/close-gbN3V5bjbhRxDClwGYFQ.png')";
close.style.position = "absolute";
close.style.top = "7px";
close.style.right = "8px";
close.style.left = "auto";
close.style.width = "22px";
close.style.height = "23px";
close.style.backgroundSize = "100% 100%"
close.style.cursor = "pointer";


var header = document.createElement("div");
header.style.width = "100%";
header.style['min-height'] = "27px";
header.innerHTML = "Form Widget";
header.className = "header";
header.style['background-image']= "linear-gradient(to left, #00d2ff , #3a7bd5)";
header.style['border-bottom'] = "1px solid hsl(240, 1%, 83%)";
header.style['fontSize'] = "16px";
header.style['fontSize'] = "16px";
header.style['fontWeight'] = "900";
header.style['marginBottom'] = "25px";
header.style['paddingTop'] = "12px";
header.style['borderTopLeftRadius'] = "8px";
header.style['borderTopRightRadius'] = "8px";
header.style.textShadow = "0 1px 0 hsl(0, 100%, 100%)";

/*

var image = document.createElement("div");
image.style.width = "76px";
image.style['height'] = "75px";
image.style.position = "absolute";
image.style.top = "-30px";
image.style.left = "50%";
image.style['marginLeft'] = "-38px";

image.innerHTML = "<img style='position:absolute; top:4px; background-size: 100% 100%; left:6px; width:64px; height:64px; display:block; background:hsl(0,100%, 100%); border-radius:32px; webkit-border-radius:32px;' src='https://stripe.com/img/documentation/checkout/marketplace.png'><img style='position:absolute; top:0; left:0' src='https://b.stripecdn.com/checkout/v3/images/icon-border-Uz9anqiDNVCgXMysAAWGQ.png'></img>";



*/

var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"https://httpbin.org/post");
f.style.boxSizing = "border-box";
f.style.width = options.width +"px"
f.style.margin = "0px";



var wrapperDiv  = document.createElement("div");
wrapperDiv.style.position = "absolute";
wrapperDiv.style.top = "0px";
wrapperDiv.style.left = "0px";
wrapperDiv.style.width = options.width +"px";
wrapperDiv.style.height = options.height +"px";

wrapperDiv.style.textAlign = "center";
wrapperDiv.style.backgroundImage="linear-gradient(to left, #00d2ff , #3a7bd5)";
wrapperDiv.style.border = "1px solid hsl(0, 100%, 100%)";
wrapperDiv.style.borderBottom = "1px solid hsl(240, 1%, 83%)";
wrapperDiv.style['border-radius'] = "8px";
wrapperDiv.style['border'] = "1px solid black";
wrapperDiv.style['padding-bottom'] = "20px";







var firstName= document.createElement("input"); //input element, text
firstName.setAttribute('type',"text");
firstName.setAttribute('name',"firstname");
firstName.required = true;
firstName.placeholder = "First Name";
firstName.setAttribute("maxlength", "32")
firstName.setAttribute('pattern',/^[A-z]+$/.source);
firstName.setAttribute('title',"Only alphabetic characters");



var lastName= document.createElement("input"); //input element, text
lastName.setAttribute('type',"text");
lastName.setAttribute('name',"lastname");
lastName.required = true;
lastName.placeholder = "Last Name";
lastName.setAttribute("maxlength", "32")
lastName.setAttribute('pattern',/^[A-z]+$/.source);
lastName.setAttribute('title',"Only alphabetic characters");

var email= document.createElement("input"); //input element, text
email.setAttribute('type',"email");
email.setAttribute('name',"email");
email.required = true;
email.placeholder = "Email"
email.setAttribute("maxlength", "64")
//email.setAttribute("pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")



var phone= document.createElement("input"); //input element, text
phone.setAttribute('type',"tel");
phone.setAttribute('name',"phone");
phone.setAttribute('pattern',/^\d{4}-\d{3}-\d{4}$/.source);
phone.setAttribute('title',"Format: XXXX-XXX-XXXX");
phone.required = true;
phone.placeholder = "Phone";
phone.setAttribute("size", "13");


function isEmail(elem, helperMsg){
	var regexp  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(regexp.test(elem.value)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function isValidUsername(elem, msg) {
	var regx = /\b[A-Z]+.+[?^ ][A-Z].{1,19}|\b[A-Z]+.+[?^,][A-Z].{1,19}/;
	if(regx.test(elem.value)){
		return true;
	}else {
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


function checkPhone(elem, helperMsg)
{
	var str = elem.value;
	var phone2 = /\d/;
	if (str.match(phone2)) {

   		return true;
 	} else {


		//elem.focus();
		return false;
 	}
}


var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


var country=  document.createElement("select");
country.name ="Country";
country.value = "Afghanistan";
country.required = true;
country.style.margin = "4px";
country.style.width = "70%";
country.style.padding="0";



country_list.forEach( function(element, index) {

var option = document.createElement('option');
option.value = element;
option.innerHTML = element;
option.style.padding = "0px 0px 0px 0px";
option.style.margin = "0px";


country.appendChild(option);


});



var i = document.createElement("input"); //input element, text
i.setAttribute('type',"text");
i.setAttribute('name',"address");
i.required = true;
i.placeholder = "Address of Residance";
i.setAttribute("maxlength", "256")




var servicesDiv = document.createElement("div");

servicesDiv.style.width = "100%";
checkboxes = ["Web Marketing", "Banner Advertising", "Native Advertising", "PR"];
var labels = "";
checkboxes.forEach( function(element, index) {
var br = "";
if(index ===2) {

	br = "<br>"
}
labels += `${br}<label style="width:50%; display:inline-block; float:left;"><input type="checkbox" name="${element}" value="${element}" checked=true>${element}</label>
`




});

servicesDiv.innerHTML = "<p>Services interested in:</p><br>"+labels;
var x = document.createElement("INPUT");
x.setAttribute("type", "checkbox");



var textarea = document.createElement("TEXTAREA");
textarea.setAttribute("rows", "4");
textarea.setAttribute("name", "additionalDescription");
textarea.required = true;
textarea.setAttribute("cols", "50");
textarea.setAttribute("placeholder", "Additional description of services required");

var breaktag = document.createElement("HR");





var s = document.createElement("button"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('name',"submit");

s.textContent = "Submit";


console.log(options.contactphone);
	if(options.contactphone !== "required"){

		phone.removeAttribute("required");


	}



//wrapperDiv.appendChild(image);
wrapperDiv.appendChild(header);
wrapperDiv.appendChild(close);
wrapperDiv.appendChild(firstName);
wrapperDiv.appendChild(lastName);
wrapperDiv.appendChild(phone);
wrapperDiv.appendChild(email);
wrapperDiv.appendChild(country);
wrapperDiv.appendChild(i);
if(options.servicesinterestedin === "display"){
wrapperDiv.appendChild(servicesDiv);
}

if(options.additionaldescription === "display"){
wrapperDiv.appendChild(textarea);

}

wrapperDiv.appendChild(breaktag);


wrapperDiv.appendChild(s);

f.appendChild(wrapperDiv);







var target = document.body;

//var shadow = target.createShadowRoot();

var node = document.createElement('style');
    node.innerHTML = `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt,
b, u, i, center,option,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


    `;
 target.appendChild(node);

target.appendChild(f);


Array.from(target.querySelectorAll("input")).forEach( function(element, index) {




if(element.type !== "checkbox"){

  element.style['border']= "1px solid hsl(240, 1%, 81%)";
	element.style['border-top-color'] = "hsl(240, 1%, 71%)";
	element.style['border-bottom-color'] = "hsl(240, 2%, 87%)";
	element.style['box-shadow'] = "inset 0 1px 1px hsla(240, 1%, 49%, 0.1),0 1px 0 hsla(0, 100%, 100%, 0.7),0 0 4px hsla(212, 65%, 60%, 0)";
	element.style['height'] = "32px";
	element.style['padding'] = "0";
	element.style['border-radius'] = "4px";
	  element.style['font-size'] = "15px";
	  element.style['width'] = "70%";
	  element.style['margin'] = "0px";
}else{
element.style['box-shadow'] = "inset 0 1px 1px hsla(240, 1%, 49%, 0.1),0 1px 0 hsla(0, 100%, 100%, 0.7),0 0 4px hsla(212, 65%, 60%, 0)";
	element.style['height'] = "32px";
	element.style['padding'] = "0 0px 0px 0px";
	element.style['margin'] = "0px";


}




	});




/*** Listeners ***/


Array.from(target.querySelectorAll("input")).forEach( function(element, index) {


if(element.type !== "checkbox"){


element.addEventListener("click", function(){



})


}




})





close.addEventListener('click', function(){



Array.from(target.querySelectorAll("input")).forEach( function(element, index) {
element.style.transitionDelay = index*30+"ms";
element.style.transitionTimingFunction = "cubic-bezier(.32,-0.55,1,-0.36)";
element.style.transform = "translateY(40px)";
element.style.opacity = "0";

element.style.transitionDuration = "400ms";
})

});


wrapperDiv.addEventListener("transitionend", function(){
	wrapperDiv.style.transitionDelay = "-50ms";
	wrapperDiv.style.transitionTimingFunction = "ease-in"
	wrapperDiv.style.transform = "translateY(40px)";
	wrapperDiv.style.opacity = "0";

	wrapperDiv.style.transitionDuration = "400ms";

}, false);









f.onsubmit = function (e) {
	


e.preventDefault();







  var values = {};
  for (var i = 0; i < f.length; ++i) {
    var input = f[i];
    if (input.name ) {

i

      values[input.name] = input.value;


if (input.type === "checkbox" && !input.checked) {

delete values[input.name];

}



    }

  
  }
console.log(values)



  var xhr = new XMLHttpRequest();
  xhr.open(f.method, f.action, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  // send the collected data as JSON
  xhr.send(JSON.stringify(values));

Array.from(target.querySelectorAll("input")).forEach( function(element, index) {
element.disabled = true;

})


xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var myArr = JSON.parse(xhr.responseText);
        document.getElementsByClassName("header")[0].style['background-image']= "linear-gradient(to left, #03F040 , #00BA27)";

Array.from(target.querySelectorAll("input")).forEach( function(element, index) {
element.style.transitionDelay = index*30+"ms";
element.style.transitionTimingFunction = "cubic-bezier(.32,-0.55,1,-0.36)";
element.style.transform = "translateY(40px)";
element.style.opacity = "0";

element.style.transitionDuration = "400ms";
})



    }
};

  xhr.onloadend = function () {


  	    // done
  };


}







})();
