var cuisine = new Array();
cuisine[152] = "African";
cuisine[1] = "American";
cuisine[131] = "Australian";
cuisine[132] = "Belgian";
cuisine[159] = "Brazilian";
cuisine[133] = "British";
cuisine[491] = "Cajun";
cuisine[158] = "Caribbean";
cuisine[25] = "Chinese";
cuisine[287] = "Colombian";
cuisine[153] = "Cuban";
cuisine[38] = "European";
cuisine[958] = "Dominican";
cuisine[112] = "Filipino";
cuisine[45] = "French";
cuisine[134] = "German";
cuisine[156] = "Greek";
cuisine[148] = "Indian";
cuisine[114] = "Indonesian";
cuisine[135] = "Irish";
cuisine[60] = "Japanese";
cuisine[67] = "Korean";
cuisine[134] = "German";
cuisine[156] = "Greek";
cuisine[70] = "Mediterranean";
cuisine[73] = "Mexican";
cuisine[87] = "Portuguese";
cuisine[84] = "Russian";
cuisine[89] = "Spanish";
cuisine[190] = "Taiwanese";
cuisine[95] = "Thai";
cuisine[142] = "Turkish";
cuisine[99] = "Vietnamese";



var target = new Array()
var cbh = document.getElementById('checkboxes');
console.log(cbh);
var val = '';
var cap = "";
var textboxValue="";

var t = document.getElementById('t');
for (var i in cuisine) {
    val = i.toString();
    var cb = document.createElement('input');
    var label = document.createElement("label");

    cap = cuisine[i];
    var text = document.createTextNode(cap);
    cb.type = 'checkbox';
    cbh.append(cb);
    cb.name = cap;
    cb.value = val;
    label.append(cb);
    label.append(text);
    cbh.append(label);
    cb.addEventListener('click', updateText)
    if(target.indexOf(i)>=0){
        cb.checked =true ;
    }
}
updateText();
function updateText() {
    t.value = [null, ...document.querySelectorAll('#checkboxes [type="checkbox"]')].reduce((s, el) => el && el.checked ? s = (s || '') + el.value + ',' : s || '')
    textboxValue = t.value;
    console.log(textboxValue);
}
