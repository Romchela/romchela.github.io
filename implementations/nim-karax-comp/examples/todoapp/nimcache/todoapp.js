/* Generated by the Nim Compiler v0.16.1 */
/*   (c) 2017 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI92069 = {size: 0,kind: 24,base: null,node: null,finalizer: null};
var NTI27030 = {size: 0,kind: 1,base: null,node: null,finalizer: null};
var NTI92007 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI76458 = {size: 0,kind: 16,base: null,node: null,finalizer: null};
var NTI76452 = {size: 0,kind: 16,base: null,node: null,finalizer: null};
var NTI76741 = {size: 0,kind: 24,base: null,node: null,finalizer: null};
var NTI30240 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI30208 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI27038 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI27040 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI30287 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI30224 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI30238 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI30242 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI30242 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI30242.node = NNI30242;
var NNI30238 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI30238.node = NNI30238;
NTI30287.base = NTI30224;
var NNI30224 = {kind: 2, len: 4, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI30287, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI27040, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI27038, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI27038, name: "trace", sons: null}]};
NTI30224.node = NNI30224;
var NNI30208 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI30208.node = NNI30208;
NTI30224.base = NTI30208;
NTI30238.base = NTI30224;
NTI30242.base = NTI30238;
var NNI30240 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI30240.node = NNI30240;
NTI30240.base = NTI30238;
NTI76741.base = NTI27040;
NTI76452.base = NTI27040;
NTI76458.base = NTI27040;
var NNI92007 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI27040, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI27030, name: "Field1", sons: null}]};
NTI92007.node = NNI92007;
NTI92069.base = NTI92007;
function makeNimstrLit(c_40803) {

    var ln = c_40803.length;
    var result = new Array(ln + 1);
    var i = 0;
    for (; i < ln; ++i) {
      result[i] = c_40803.charCodeAt(i);
    }
    result[i] = 0; // terminating zero
    return result;
    }
function SetConstr() {

      var result = {};
      for (var i = 0; i < arguments.length; ++i) {
        var x = arguments[i];
        if (typeof(x) == "object") {
          for (var j = x[0]; j <= x[1]; ++j) {
            result[j] = true;
          }
        } else {
          result[x] = true;
        }
      }
      return result;
    }
function nimCopy(dest_46017, src_46018, ti_46019) {

var result_46429 = null;
switch (ti_46019.kind) {
case 21: case 22: case 23: case 5: if (!(isFatPointer_46001(ti_46019))) {
result_46429 = src_46018;
}
else {
result_46429 = [src_46018[0], src_46018[1]];}


break;
case 19:       if (dest_46017 === null || dest_46017 === undefined) {
        dest_46017 = {};
      }
      else {
        for (var key in dest_46017) { delete dest_46017[key]; }
      }
      for (var key in src_46018) { dest_46017[key] = src_46018[key]; }
      result_46429 = dest_46017;
    
break;
case 18: case 17: if (!((ti_46019.base == null))) {
result_46429 = nimCopy(dest_46017, src_46018, ti_46019.base);
}
else {
if ((ti_46019.kind == 17)) {
result_46429 = (dest_46017 === null || dest_46017 === undefined) ? {m_type: ti_46019} : dest_46017;}
else {
result_46429 = (dest_46017 === null || dest_46017 === undefined) ? {} : dest_46017;}
}
nimCopyAux(result_46429, src_46018, ti_46019.node);

break;
case 24: case 4: case 27: case 16:       if (src_46018 === null) {
        result_46429 = null;
      }
      else {
        if (dest_46017 === null || dest_46017 === undefined) {
          dest_46017 = new Array(src_46018.length);
        }
        else {
          dest_46017.length = src_46018.length;
        }
        result_46429 = dest_46017;
        for (var i = 0; i < src_46018.length; ++i) {
          result_46429[i] = nimCopy(result_46429[i], src_46018[i], ti_46019.base);
        }
      }
    
break;
case 28:       if (src_46018 !== null) {
        result_46429 = src_46018.slice(0);
      }
    
break;
default: 
result_46429 = src_46018;
break;
}
return result_46429;
}
function eqStrings(a_43403, b_43404) {

    if (a_43403 == b_43404) return true;
    if ((!a_43403) || (!b_43404)) return false;
    var alen = a_43403.length;
    if (alen != b_43404.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_43403[i] != b_43404[i]) return false;
    return true;
  }
function toJSStr(s_41203) {

    var len = s_41203.length-1;
    var asciiPart = new Array(len);
    var fcc = String.fromCharCode;
    var nonAsciiPart = null;
    var nonAsciiOffset = 0;
    for (var i = 0; i < len; ++i) {
      if (nonAsciiPart !== null) {
        var offset = (i - nonAsciiOffset) * 2;
        var code = s_41203[i].toString(16);
        if (code.length == 1) {
          code = "0"+code;
        }
        nonAsciiPart[offset] = "%";
        nonAsciiPart[offset + 1] = code;
      }
      else if (s_41203[i] < 128)
        asciiPart[i] = fcc(s_41203[i]);
      else {
        asciiPart.length = i;
        nonAsciiOffset = i;
        nonAsciiPart = new Array((len - i) * 2);
        --i;
      }
    }
    asciiPart = asciiPart.join("");
    return (nonAsciiPart === null) ?
        asciiPart : asciiPart + decodeURIComponent(nonAsciiPart.join(""));
  }
function raiseException(e_40206, ename_40207) {

e_40206.name = ename_40207;
if ((excHandler == 0)) {
unhandledException(e_40206);
}

throw e_40206;}
var toTag_76449 = nimCopy(null, ["#text", "#int", "#bool", "#vthunk", "#dthunk", "HTML", "HEAD", "TITLE", "BASE", "LINK", "META", "STYLE", "SCRIPT", "NOSCRIPT", "BODY", "SECTION", "NAV", "ARTICLE", "ASIDE", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "FOOTER", "ADDRESS", "MAIN", "P", "HR", "PRE", "BLOCKQUOTE", "OL", "UL", "LI", "DL", "DT", "DD", "FIGURE", "FIGCAPTION", "DIV", "A", "EM", "STRONG", "SMALL", "S", "CITE", "QUOTE", "DFN", "ABBR", "DATA", "TIME", "CODE", "VAR", "SAMP", "KDB", "SUB", "SUP", "I", "B", "U", "MARK", "RUBY", "RT", "RP", "BDI", "DBO", "SPAN", "BR", "WBR", "INS", "DEL", "IMG", "IFRAME", "EMBED", "OBJECT", "PARAM", "VIDEO", "AUDIO", "SOURCE", "TRACK", "CANVAS", "MAP", "AREA", "SVG", "MATH", "TABLE", "CAPTION", "COLGROUP", "COL", "TBODY", "THEAD", "TFOOT", "TR", "TD", "TH", "FORM", "FIELDSET", "LEGEND", "LABEL", "INPUT", "BUTTON", "SELECT", "DATALIST", "OPTGROUP", "OPTION", "TEXTAREA", "KEYGEN", "OUTPUT", "PROGRESS", "METER", "DETAILS", "SUMMARY", "COMMAND", "MENU"], NTI76452);
var toEventName_76455 = nimCopy(null, ["click", "dblclick", "keyup", "keydown", "keypressed", "blur", "change", "scroll", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "keyupenter", "keyuplater"], NTI76458);
function nimMin(a_45639, b_45640) {

var Tmp1;
var result_45641 = 0;
BeforeRet: do {
if ((a_45639 <= b_45640)) {
Tmp1 = a_45639;
}
else {
Tmp1 = b_45640;
}

result_45641 = Tmp1;
break BeforeRet;
} while (false); 
return result_45641;
}
var nimvm_32687 = false;
var nim_program_result = 0;
var globalRaiseHook_37805 = [null];
var localRaiseHook_37810 = [null];
var outOfMemHook_37813 = [null];
function isFatPointer_46001(ti_46003) {

var result_46004 = false;
BeforeRet: do {
result_46004 = !((SetConstr(17, 16, 4, 18, 27, 19, 23, 22, 21)[ti_46003.base.kind] != undefined));
break BeforeRet;
} while (false); 
return result_46004;
}
function nimCopyAux(dest_46022, src_46023, n_46025) {

switch (n_46025.kind) {
case 0: 
break;
case 1:       dest_46022[n_46025.offset] = nimCopy(dest_46022[n_46025.offset], src_46023[n_46025.offset], n_46025.typ);
    
break;
case 2: L1: do {
var i_46415 = 0;
var colontmp__46417 = 0;
colontmp__46417 = (n_46025.len - 1);
var res_46420 = 0;
L2: do {
L3: while (true) {
if (!(res_46420 <= colontmp__46417)) break L3;
i_46415 = res_46420;
nimCopyAux(dest_46022, src_46023, n_46025.sons[i_46415]);
res_46420 += 1;
}
} while(false);
} while(false);

break;
case 3:       dest_46022[n_46025.offset] = nimCopy(dest_46022[n_46025.offset], src_46023[n_46025.offset], n_46025.typ);
      for (var i = 0; i < n_46025.sons.length; ++i) {
        nimCopyAux(dest_46022, src_46023, n_46025.sons[i][1]);
      }
    
break;
}
}
function add_37829(x_37832, x_37832_Idx, y_37833) {

        var len = x_37832[0].length-1;
        for (var i = 0; i < y_37833.length; ++i) {
          x_37832[0][len] = y_37833.charCodeAt(i);
          ++len;
        }
        x_37832[0][len] = 0
      }
function unhandledException(e_40053) {

var Tmp1;
var buf_40054 = /**/[makeNimstrLit("")];
if (!!(eqStrings(e_40053.message, null))) Tmp1 = false; else {Tmp1 = !((e_40053.message[0] == 0)); }if (Tmp1) {
if (buf_40054[0] != null) { buf_40054[0] = (buf_40054[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception: ")); } else { buf_40054[0] = makeNimstrLit("Error: unhandled exception: ");};
if (buf_40054[0] != null) { buf_40054[0] = (buf_40054[0].slice(0, -1)).concat(e_40053.message); } else { buf_40054[0] = e_40053.message;};
}
else {
if (buf_40054[0] != null) { buf_40054[0] = (buf_40054[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception")); } else { buf_40054[0] = makeNimstrLit("Error: unhandled exception");};
}

if (buf_40054[0] != null) { buf_40054[0] = (buf_40054[0].slice(0, -1)).concat(makeNimstrLit(" [")); } else { buf_40054[0] = makeNimstrLit(" [");};
add_37829(buf_40054, 0, e_40053.name);
if (buf_40054[0] != null) { buf_40054[0] = (buf_40054[0].slice(0, -1)).concat(makeNimstrLit("]\x0A")); } else { buf_40054[0] = makeNimstrLit("]\x0A");};
var cbuf_40201 = toJSStr(buf_40054[0]);
framePtr = null;
  if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_40201);
  }
  else {
    throw cbuf_40201;
  }
  }
function raiseOverflow() {

var e_40640 = null;
e_40640 = {m_type: NTI30242, parent: null, name: null, message: null, trace: null};
e_40640.message = nimCopy(null, makeNimstrLit("over- or underflow"), NTI27038);
e_40640.parent = null;
raiseException(e_40640, "OverflowError");
}
function raiseDivByZero() {

var e_40658 = null;
e_40658 = {m_type: NTI30240, parent: null, name: null, message: null, trace: null};
e_40658.message = nimCopy(null, makeNimstrLit("division by zero"), NTI27038);
e_40658.parent = null;
raiseException(e_40658, "DivByZeroError");
}
var objectID_80232 = /**/[0];
var dirty_87054 = /**/[{}];
var someDirty_87055 = [false];
var vcomponents_87126 = /**/[{}];
var dcomponents_87138 = /**/[{}];
var toFocus_89021 = [null];
var toFocusV_89022 = [null];
var dorender_89480 = [null];
var currentTree_89481 = [null];
var entries_92008 = [null];
var selectedEntry_92009 = /**/[-1];
var filter_92010 = [0];
function newVNode_76851(kind_76853) {

var result_76854 = null;
result_76854 = {kind: kind_76853, key: -1, id: null, class: null, text: null, kids: null, attrs: null, events: null, hash: 0, validHash: false, dom: null};
return result_76854;
}
function add_76837(parent_76839, kid_76840) {

if (parent_76839.kids != null) { parent_76839.kids.push(kid_76840); } else { parent_76839.kids = [kid_76840]; };
}
function tree_76856(kind_76858, kids_76860) {

var result_76861 = null;
result_76861 = newVNode_76851(kind_76858);
L1: do {
var k_76886 = null;
var i_76890 = 0;
L2: do {
L3: while (true) {
if (!(i_76890 < (kids_76860 != null ? kids_76860.length : 0))) break L3;
k_76886 = kids_76860[i_76890];
add_76837(result_76861, k_76886);
i_76890 += 1;
}
} while(false);
} while(false);
return result_76861;
}
function toClass_92097(completed_92099) {

var Tmp1;
var result_92100 = null;
if (completed_92099) {
Tmp1 = "completed";
}
else {
Tmp1 = null;
}

result_92100 = Tmp1;
return result_92100;
}
function setAttr_76718(n_76720, key_76721, val_76722) {

BeforeRet: do {
if ((n_76720.attrs === null)) {
n_76720.attrs = nimCopy(null, [key_76721, val_76722], NTI76741);
}
else {
L1: do {
var i_76760 = 0;
var colontmp__76782 = 0;
colontmp__76782 = ((n_76720.attrs != null ? n_76720.attrs.length : 0) - 2);
var res_76785 = 0;
L2: do {
L3: while (true) {
if (!(res_76785 <= colontmp__76782)) break L3;
i_76760 = res_76785;
if ((n_76720.attrs[i_76760] == key_76721)) {
n_76720.attrs[(i_76760 + 1)] = val_76722;
break BeforeRet;
}

res_76785 += 2;
}
} while(false);
} while(false);
if (n_76720.attrs != null) { n_76720.attrs.push(key_76721); } else { n_76720.attrs = [key_76721]; };
if (n_76720.attrs != null) { n_76720.attrs.push(val_76722); } else { n_76720.attrs = [val_76722]; };
}

} while (false); 
}
function toChecked_92102(checked_92104) {

var Tmp1;
var result_92105 = null;
if (checked_92104) {
Tmp1 = "checked";
}
else {
Tmp1 = null;
}

result_92105 = Tmp1;
return result_92105;
}
function addEventListener_77041(n_77043, event_77044, handler_77045) {

if (n_77043.events != null) { n_77043.events.push({Field0: event_77044, Field1: handler_77045}); } else { n_77043.events = [{Field0: event_77044, Field1: handler_77045}]; };
}
function key_89013(e_89015) {

var result_89016 = 0;
if ((e_89015.hasOwnProperty("karaxKey"))) {
result_89016 = e_89015.karaxKey;
}
else {
result_89016 = -1;
}

return result_89016;
}
function valueeq__76512(n_76514, v_76515) {

n_76514.text = v_76515;
}
function value_76508(n_76510) {

var result_76511 = null;
result_76511 = n_76510.text;
return result_76511;
}
function wrapEvent_89047(d_89049, n_89050, k_89051, action_89052) {

function laterWrapper_89078() {

function colonanonymous__89087(ev_89089) {

function wrapper_89090() {

valueeq__76512(n_89085, ev_89089.target.value);
action_89084(ev_89089, n_89085);
ev_89089.target.value = value_76508(n_89085);
}
if (!((timer_89086 == null))) {
clearTimeout(timer_89086);
}

timer_89086 = setTimeout(wrapper_89090, 400);
}
var result_89083 = null;
var action_89084 = action_89052;
var n_89085 = n_89050;
var timer_89086 = null;
result_89083 = colonanonymous__89087;
return result_89083;
}
function enterWrapper_89064() {

function colonanonymous__89072(ev_89074) {

if ((ev_89074.keyCode == 13)) {
valueeq__76512(n_89071, ev_89074.target.value);
action_89070(ev_89074, n_89071);
ev_89074.target.value = value_76508(n_89071);
}

}
var result_89069 = null;
var action_89070 = action_89052;
var n_89071 = n_89050;
result_89069 = colonanonymous__89072;
return result_89069;
}
function stdWrapper_89053() {

function colonanonymous__89061(ev_89063) {

action_89059(ev_89063, n_89060);
}
var result_89058 = null;
var action_89059 = action_89052;
var n_89060 = n_89050;
result_89058 = colonanonymous__89061;
return result_89058;
}
switch (k_89051) {
case 23: d_89049.addEventListener("keyup", laterWrapper_89078(), false);

break;
case 22: d_89049.addEventListener("keyup", enterWrapper_89064(), false);

break;
default: 
d_89049.addEventListener(toEventName_76455[k_89051], stdWrapper_89053(), false);
break;
}
}
function vnodeToDom_89120(n_89122) {

var result_89123 = null;
BeforeRet: do {
if ((n_89122.kind == 0)) {
result_89123 = document.createTextNode(n_89122.text);
n_89122.dom = result_89123;
}
else {
if ((n_89122.kind == 3)) {
var x_89152 = vcomponents_87126[0][n_89122.text](n_89122.kids);
result_89123 = vnodeToDom_89120(x_89152);
n_89122.key = key_89013(result_89123);
n_89122.dom = result_89123;
break BeforeRet;
}
else {
if ((n_89122.kind == 4)) {
result_89123 = dcomponents_87138[0][n_89122.text](n_89122.kids);
n_89122.key = key_89013(result_89123);
n_89122.dom = result_89123;
break BeforeRet;
}
else {
result_89123 = document.createElement(toTag_76449[n_89122.kind]);
n_89122.dom = result_89123;
L1: do {
var k_89172 = null;
L2: do {
var i_89425 = 0;
var colontmp__89427 = 0;
colontmp__89427 = (n_89122.kids != null ? n_89122.kids.length : 0);
var i_89429 = 0;
L3: do {
L4: while (true) {
if (!(i_89429 < colontmp__89427)) break L4;
i_89425 = i_89429;
k_89172 = n_89122.kids[i_89425];
result_89123.appendChild(vnodeToDom_89120(k_89172));
i_89429 += 1;
}
} while(false);
} while(false);
} while(false);
if (!((n_89122.text == null))) {
result_89123.value = n_89122.text;
}

}
}}
if (!((n_89122.id == null))) {
result_89123.id = n_89122.id;
}

if (!((n_89122.class == null))) {
result_89123.className = n_89122.class;
}

if ((0 <= n_89122.key)) {
result_89123.karaxKey = n_89122.key;
}

L5: do {
var k_89173 = null;
var v_89174 = null;
L6: do {
var i_89434 = 0;
var colontmp__89436 = 0;
colontmp__89436 = ((n_89122.attrs != null ? n_89122.attrs.length : 0) - 2);
var res_89438 = 0;
L7: do {
L8: while (true) {
if (!(res_89438 <= colontmp__89436)) break L8;
i_89434 = res_89438;
k_89173 = n_89122.attrs[i_89434];
v_89174 = n_89122.attrs[(i_89434 + 1)];
if (!((v_89174 == null))) {
result_89123.setAttribute(k_89173, v_89174);
}

res_89438 += 2;
}
} while(false);
} while(false);
} while(false);
L9: do {
var e_89402 = 0;
var h_89403 = null;
var colontmp__89442 = null;
colontmp__89442 = n_89122.events;
var i_89445 = 0;
var L_89447 = (colontmp__89442 != null ? colontmp__89442.length : 0);
L10: do {
L11: while (true) {
if (!(i_89445 < L_89447)) break L11;
e_89402 = colontmp__89442[i_89445]["Field0"];
h_89403 = colontmp__89442[i_89445]["Field1"];
wrapEvent_89047(result_89123, n_89122, e_89402, h_89403);
i_89445 += 1;
}
} while(false);
} while(false);
if (((n_89122 == toFocusV_89022[0]) && (toFocus_89021[0] === null))) {
toFocus_89021[0] = result_89123;
}

} while (false); 
return result_89123;
}
function replaceById_89484(id_89486, newTree_89487) {

var x_89488 = document.getElementById(id_89486);
x_89488.parentNode.replaceChild(newTree_89487, x_89488);
}
function len_76821(x_76823) {

var result_76824 = 0;
result_76824 = (x_76823.kids != null ? x_76823.kids.length : 0);
return result_76824;
}
function X5BX5D__76832(x_76834, idx_76835) {

var result_76836 = null;
result_76836 = x_76834.kids[idx_76835];
return result_76836;
}
function sameAttrs_76999(a_77001, b_77002) {

var result_77003 = false;
BeforeRet: do {
if (((a_77001.attrs != null ? a_77001.attrs.length : 0) == (b_77002.attrs != null ? b_77002.attrs.length : 0))) {
result_77003 = true;
L1: do {
var i_77034 = 0;
var colontmp__77036 = 0;
colontmp__77036 = (a_77001.attrs != null ? a_77001.attrs.length : 0);
var i_77039 = 0;
L2: do {
L3: while (true) {
if (!(i_77039 < colontmp__77036)) break L3;
i_77034 = i_77039;
if (!((a_77001.attrs[i_77034] == b_77002.attrs[i_77034]))) {
result_77003 = false;
break BeforeRet;
}

i_77039 += 1;
}
} while(false);
} while(false);
}

} while (false); 
return result_77003;
}
function equalsShallow_89489(a_89491, b_89492) {

var Tmp1;
var result_89493 = false;
BeforeRet: do {
if (!((a_89491.kind == b_89492.kind))) {
result_89493 = false;
break BeforeRet;
}

if (!((a_89491.id == b_89492.id))) {
result_89493 = false;
break BeforeRet;
}

if (!((a_89491.key == b_89492.key))) {
result_89493 = false;
break BeforeRet;
}

if ((a_89491.kind == 0)) {
if (!((a_89491.text == b_89492.text))) {
result_89493 = false;
break BeforeRet;
}

}
else {
if ((a_89491.kind == 3)) Tmp1 = true; else {Tmp1 = (a_89491.kind == 4); }if (Tmp1) {
if (!((a_89491.text == b_89492.text))) {
result_89493 = false;
break BeforeRet;
}

if (!((len_76821(a_89491) == len_76821(b_89492)))) {
result_89493 = false;
break BeforeRet;
}

L2: do {
var i_89538 = 0;
var colontmp__89540 = 0;
colontmp__89540 = len_76821(a_89491);
var i_89543 = 0;
L3: do {
L4: while (true) {
if (!(i_89543 < colontmp__89540)) break L4;
i_89538 = i_89543;
if (!(equalsShallow_89489(X5BX5D__76832(a_89491, i_89538), X5BX5D__76832(b_89492, i_89538)))) {
result_89493 = false;
break BeforeRet;
}

i_89543 += 1;
}
} while(false);
} while(false);
}
}
if (!(sameAttrs_76999(a_89491, b_89492))) {
result_89493 = false;
break BeforeRet;
}

if (!((a_89491.class == b_89492.class))) {
result_89493 = false;
break BeforeRet;
}

result_89493 = true;
break BeforeRet;
} while (false); 
return result_89493;
}
function eq_76622(a_76624, b_76625) {

var result_76626 = false;
BeforeRet: do {
if (!((a_76624.kind == b_76625.kind))) {
result_76626 = false;
break BeforeRet;
}

if (!((a_76624.id == b_76625.id))) {
result_76626 = false;
break BeforeRet;
}

if (!((a_76624.class == b_76625.class))) {
result_76626 = false;
break BeforeRet;
}

if (!((a_76624.key == b_76625.key))) {
result_76626 = false;
break BeforeRet;
}

if (!((a_76624.kind == 0))) {
if (!(((a_76624.kids != null ? a_76624.kids.length : 0) == (b_76625.kids != null ? b_76625.kids.length : 0)))) {
result_76626 = false;
break BeforeRet;
}

L1: do {
var i_76674 = 0;
var colontmp__76707 = 0;
colontmp__76707 = (a_76624.kids != null ? a_76624.kids.length : 0);
var i_76710 = 0;
L2: do {
L3: while (true) {
if (!(i_76710 < colontmp__76707)) break L3;
i_76674 = i_76710;
if (!(eq_76622(a_76624.kids[i_76674], b_76625.kids[i_76674]))) {
result_76626 = false;
break BeforeRet;
}

i_76710 += 1;
}
} while(false);
} while(false);
}

if (!((a_76624.text == b_76625.text))) {
result_76626 = false;
break BeforeRet;
}

if (!(((a_76624.attrs != null ? a_76624.attrs.length : 0) == (b_76625.attrs != null ? b_76625.attrs.length : 0)))) {
result_76626 = false;
break BeforeRet;
}

L4: do {
var i_76705 = 0;
var colontmp__76713 = 0;
colontmp__76713 = (a_76624.attrs != null ? a_76624.attrs.length : 0);
var i_76716 = 0;
L5: do {
L6: while (true) {
if (!(i_76716 < colontmp__76713)) break L6;
i_76705 = i_76716;
if (!((a_76624.attrs[i_76705] == b_76625.attrs[i_76705]))) {
result_76626 = false;
break BeforeRet;
}

i_76716 += 1;
}
} while(false);
} while(false);
result_76626 = true;
} while (false); 
return result_76626;
}
function equalsTree_89545(a_89547, b_89548) {

var result_89549 = false;
result_89549 = eq_76622(a_89547, b_89548);
return result_89549;
}
function updateElement_89663(parent_89665, current_89666, newNode_89667, oldNode_89668) {

var Tmp5;
var Tmp6;
if (!(equalsShallow_89489(newNode_89667, oldNode_89668))) {
oldNode_89668.dom = null;
var n_89669 = vnodeToDom_89120(newNode_89667);
if ((parent_89665 == null)) {
replaceById_89484("ROOT", n_89669);
}
else {
parent_89665.replaceChild(n_89669, current_89666);
}

}
else {
if (!((newNode_89667.kind == 0))) {
var newLength_89690 = len_76821(newNode_89667);
var oldLength_89691 = len_76821(oldNode_89668);
var minLength_89692 = nimMin(newLength_89690, oldLength_89691);
var commonPrefix_90001 = 0;
L1: do {
L2: while (true) {
if (!((commonPrefix_90001 < minLength_89692) && equalsTree_89545(X5BX5D__76832(newNode_89667, commonPrefix_90001), X5BX5D__76832(oldNode_89668, commonPrefix_90001)))) break L2;
commonPrefix_90001 += 1;
}
} while(false);
var oldPos_90011 = (oldLength_89691 - 1);
var newPos_90012 = (newLength_89690 - 1);
L3: do {
L4: while (true) {
if (!(commonPrefix_90001 <= oldPos_90011)) Tmp6 = false; else {Tmp6 = (commonPrefix_90001 <= newPos_90012); }if (!Tmp6) Tmp5 = false; else {Tmp5 = equalsTree_89545(X5BX5D__76832(newNode_89667, newPos_90012), X5BX5D__76832(oldNode_89668, oldPos_90011)); }if (!Tmp5) break L4;
oldPos_90011 -= 1;
newPos_90012 -= 1;
}
} while(false);
var pos_90031 = (nimMin(oldPos_90011, newPos_90012) + 1);
L7: do {
var i_90041 = 0;
var colontmp__90083 = 0;
colontmp__90083 = (pos_90031 - 1);
var res_90086 = commonPrefix_90001;
L8: do {
L9: while (true) {
if (!(res_90086 <= colontmp__90083)) break L9;
i_90041 = res_90086;
updateElement_89663(current_89666, current_89666.childNodes[i_90041], X5BX5D__76832(newNode_89667, i_90041), X5BX5D__76832(oldNode_89668, i_90041));
res_90086 += 1;
}
} while(false);
} while(false);
var nextChildPos_90042 = (oldPos_90011 + 1);
L10: do {
L11: while (true) {
if (!(pos_90031 <= newPos_90012)) break L11;
if ((nextChildPos_90042 == oldLength_89691)) {
current_89666.appendChild(vnodeToDom_89120(X5BX5D__76832(newNode_89667, pos_90031)));
}
else {
current_89666.insertBefore(vnodeToDom_89120(X5BX5D__76832(newNode_89667, pos_90031)), current_89666.childNodes[nextChildPos_90042]);
}

oldLength_89691 += 1;
pos_90031 += 1;
nextChildPos_90042 += 1;
}
} while(false);
L12: do {
var i_90079 = 0;
var res_90094 = pos_90031;
L13: do {
L14: while (true) {
if (!(res_90094 <= oldPos_90011)) break L14;
i_90079 = res_90094;
X5BX5D__76832(oldNode_89668, i_90079).dom = null;
current_89666.removeChild(current_89666.childNodes[pos_90031]);
res_90094 += 1;
}
} while(false);
} while(false);
}
}
}
function isDirty_87083(key_87085) {

var result_87086 = false;
result_87086 = dirty_87054[0].hasOwnProperty(key_87085);
return result_87086;
}
function unmarkDirty_87071(key_87073) {

delete dirty_87054[0][key_87073];
}
function updateDirtyElements_89601(parent_89603, current_89604, newNode_89605) {

var Tmp1;
var Tmp2;
var Tmp3;
if (!(0 <= newNode_89605.key)) Tmp1 = false; else {Tmp1 = isDirty_87083(newNode_89605.key); }if (Tmp1) {
unmarkDirty_87071(newNode_89605.key);
var n_89606 = vnodeToDom_89120(newNode_89605);
if ((parent_89603 == null)) {
replaceById_89484("ROOT", n_89606);
}
else {
parent_89603.replaceChild(n_89606, current_89604);
}

}
else {
if (!!((newNode_89605.kind == 0))) Tmp3 = false; else {Tmp3 = !((newNode_89605.kind == 3)); }if (!Tmp3) Tmp2 = false; else {Tmp2 = !((newNode_89605.kind == 4)); }if (Tmp2) {
L4: do {
var i_89654 = 0;
var colontmp__89656 = 0;
colontmp__89656 = (len_76821(newNode_89605) - 1);
var res_89659 = 0;
L5: do {
L6: while (true) {
if (!(res_89659 <= colontmp__89656)) break L6;
i_89654 = res_89659;
updateDirtyElements_89601(current_89604, current_89604.childNodes[i_89654], X5BX5D__76832(newNode_89605, i_89654));
res_89659 += 1;
}
} while(false);
} while(false);
}
}
}
function dodraw_90201() {

var newtree_90203 = dorender_89480[0]();
newtree_90203.id = "ROOT";
toFocus_89021[0] = null;
if ((currentTree_89481[0] == null)) {
currentTree_89481[0] = newtree_90203;
var asdom_90215 = vnodeToDom_89120(currentTree_89481[0]);
replaceById_89484("ROOT", asdom_90215);
}
else {
var olddom_90216 = document.getElementById("ROOT");
updateElement_89663(null, olddom_90216, newtree_90203, currentTree_89481[0]);
if (someDirty_87055[0]) {
updateDirtyElements_89601(null, olddom_90216, newtree_90203);
someDirty_87055[0] = false;
}

currentTree_89481[0] = newtree_90203;
}

if (!((toFocus_89021[0] == null))) {
toFocus_89021[0].focus();
}

}
function redraw_90233() {

window.requestAnimationFrame(dodraw_90201);
}
function addEventHandler_90409(n_90411, k_90412, action_90413) {

function wrapper_90414(ev_90416, n_90417) {

action_90413(ev_90416, n_90417);
redraw_90233();
}
addEventListener_77041(n_90411, k_90412, wrapper_90414);
}
function toggleEntry_92046(ev_92048, n_92049) {

var id_92050 = n_92049.key;
entries_92008[0][id_92050]["Field1"] = !(entries_92008[0][id_92050]["Field1"]);
}
function editHandler_92034(ev_92036, n_92037) {

selectedEntry_92009[0] = n_92037.key;
}
function text_76935(s_76937) {

var result_76938 = null;
result_76938 = {kind: 0, text: s_76937, key: -1, id: null, class: null, kids: null, attrs: null, events: null, hash: 0, validHash: false, dom: null};
return result_76938;
}
function removeHandler_92028(ev_92030, n_92031) {

nimCopy(entries_92008[0][n_92031.key], {Field0: null, Field1: false}, NTI92007);
}
function focusLost_92038(ev_92040, n_92041) {

selectedEntry_92009[0] = -1;
}
function editEntry_92042(ev_92044, n_92045) {

entries_92008[0][n_92045.key]["Field0"] = value_76508(n_92045);
selectedEntry_92009[0] = -1;
}
function setFocus_89025(n_89027) {

toFocusV_89022[0] = n_89027;
}
function innercreateEntry_92120(id_92122, d_92123, completed_92124, selected_92125) {

var result_92126 = null;
var tmp_92139 = tree_76856(94, []);
var tmp_92145 = tree_76856(35, []);
tmp_92145.class = toClass_92097(completed_92124);
if (!(selected_92125)) {
var tmp_92151 = tree_76856(41, []);
tmp_92151.class = "view";
var tmp_92157 = tree_76856(101, []);
tmp_92157.class = "toggle";
setAttr_76718(tmp_92157, "type", "checkbox");
setAttr_76718(tmp_92157, "checked", toChecked_92102(completed_92124));
addEventHandler_90409(tmp_92157, 0, toggleEntry_92046);
tmp_92157.key = id_92122;
add_76837(tmp_92151, tmp_92157);
var tmp_92164 = tree_76856(100, []);
addEventHandler_90409(tmp_92164, 1, editHandler_92034);
tmp_92164.key = id_92122;
add_76837(tmp_92164, text_76935(d_92123));
add_76837(tmp_92151, tmp_92164);
var tmp_92171 = tree_76856(102, []);
tmp_92171.class = "destroy";
tmp_92171.key = id_92122;
addEventHandler_90409(tmp_92171, 0, removeHandler_92028);
add_76837(tmp_92151, tmp_92171);
add_76837(tmp_92145, tmp_92151);
}
else {
var tmp_92178 = tree_76856(101, []);
tmp_92178.class = "edit";
setAttr_76718(tmp_92178, "name", "title");
tmp_92178.key = id_92122;
addEventHandler_90409(tmp_92178, 5, focusLost_92038);
addEventHandler_90409(tmp_92178, 22, editEntry_92042);
valueeq__76512(tmp_92178, d_92123);
setFocus_89025(tmp_92178);
add_76837(tmp_92145, tmp_92178);
}

add_76837(tmp_92139, tmp_92145);
result_92126 = tmp_92139;
return result_92126;
}
function intValue_76516(n_76518) {

var result_76519 = 0;
result_76519 = n_76518.key;
return result_76519;
}
function createEntry_92188(args_92191) {

var result_92192 = null;
result_92192 = innercreateEntry_92120(intValue_76516(args_92191[0]), args_92191[1].text, !((intValue_76516(args_92191[2]) == 0)), !((intValue_76516(args_92191[3]) == 0)));
return result_92192;
}
vcomponents_87126[0]["createEntry"] = createEntry_92188;
function selected_92107(v_92109) {

var Tmp1;
var result_92110 = null;
if ((filter_92010[0] == v_92109)) {
Tmp1 = "selected";
}
else {
Tmp1 = null;
}

result_92110 = Tmp1;
return result_92110;
}
function text_76929(s_76931) {

var result_76932 = null;
result_76932 = {kind: 0, text: toJSStr(s_76931), key: -1, id: null, class: null, kids: null, attrs: null, events: null, hash: 0, validHash: false, dom: null};
return result_76932;
}
function clearCompleted_92070(ev_92072, n_92073) {

L1: do {
var i_92090 = 0;
var colontmp__92092 = 0;
colontmp__92092 = (entries_92008[0] != null ? entries_92008[0].length : 0);
var i_92095 = 0;
L2: do {
L3: while (true) {
if (!(i_92095 < colontmp__92092)) break L3;
i_92090 = i_92095;
if (entries_92008[0][i_92090]["Field1"]) {
entries_92008[0][i_92090]["Field0"] = null;
}

i_92095 += 1;
}
} while(false);
} while(false);
}
function innermakeFooter_92205(entriesCount_92207, completedCount_92208) {

var Tmp1;
var result_92209 = null;
var tmp_92226 = tree_76856(26, []);
tmp_92226.class = "footer";
var tmp_92232 = tree_76856(68, []);
tmp_92232.class = "todo-count";
var tmp_92238 = tree_76856(44, []);
add_76837(tmp_92238, text_76935(((entriesCount_92207)+'')));
add_76837(tmp_92232, tmp_92238);
if (!((entriesCount_92207 == 1))) {
Tmp1 = makeNimstrLit("s left");
}
else {
Tmp1 = makeNimstrLit(" left");
}

add_76837(tmp_92232, text_76935((" item" + (toJSStr(Tmp1)))));
add_76837(tmp_92226, tmp_92232);
var tmp_92244 = tree_76856(34, []);
tmp_92244.class = "filters";
var tmp_92250 = tree_76856(35, []);
var tmp_92256 = tree_76856(42, []);
tmp_92256.class = selected_92107(0);
setAttr_76718(tmp_92256, "href", "#/");
add_76837(tmp_92256, text_76929(makeNimstrLit("All")));
add_76837(tmp_92250, tmp_92256);
add_76837(tmp_92244, tmp_92250);
var tmp_92262 = tree_76856(35, []);
var tmp_92268 = tree_76856(42, []);
tmp_92268.class = selected_92107(1);
setAttr_76718(tmp_92268, "href", "#/active");
add_76837(tmp_92268, text_76929(makeNimstrLit("Active")));
add_76837(tmp_92262, tmp_92268);
add_76837(tmp_92244, tmp_92262);
var tmp_92274 = tree_76856(35, []);
var tmp_92280 = tree_76856(42, []);
tmp_92280.class = selected_92107(2);
setAttr_76718(tmp_92280, "href", "#/completed");
add_76837(tmp_92280, text_76929(makeNimstrLit("Completed")));
add_76837(tmp_92274, tmp_92280);
add_76837(tmp_92244, tmp_92274);
add_76837(tmp_92226, tmp_92244);
var tmp_92286 = tree_76856(102, []);
tmp_92286.class = "clear-completed";
addEventHandler_90409(tmp_92286, 0, clearCompleted_92070);
add_76837(tmp_92286, text_76935((("Clear completed (" + ((completedCount_92208)+'')) + ")")));
add_76837(tmp_92226, tmp_92286);
result_92209 = tmp_92226;
return result_92209;
}
function makeFooter_92299(args_92302) {

var result_92303 = null;
result_92303 = innermakeFooter_92205(intValue_76516(args_92302[0]), intValue_76516(args_92302[1]));
return result_92303;
}
vcomponents_87126[0]["makeFooter"] = makeFooter_92299;
function onTodoEnter_92013(ev_92015, n_92016) {

if (entries_92008[0] != null) { entries_92008[0].push({Field0: value_76508(n_92016), Field1: false}); } else { entries_92008[0] = [{Field0: value_76508(n_92016), Field1: false}]; };
valueeq__76512(n_92016, "");
}
function innermakeHeader_92316() {

var result_92318 = null;
var tmp_92327 = tree_76856(25, []);
tmp_92327.class = "header";
var tmp_92333 = tree_76856(19, []);
add_76837(tmp_92333, text_76929(makeNimstrLit("todos")));
add_76837(tmp_92327, tmp_92333);
var tmp_92339 = tree_76856(101, []);
tmp_92339.class = "new-todo";
setAttr_76718(tmp_92339, "placeholder", "What needs to be done?");
setAttr_76718(tmp_92339, "name", "newTodo");
addEventHandler_90409(tmp_92339, 22, onTodoEnter_92013);
setFocus_89025(tmp_92339);
add_76837(tmp_92327, tmp_92339);
result_92318 = tmp_92327;
return result_92318;
}
function makeHeader_92344(args_92347) {

var result_92348 = null;
result_92348 = innermakeHeader_92316();
return result_92348;
}
vcomponents_87126[0]["makeHeader"] = makeHeader_92344;
function setOnHashChange_90418(action_90423) {

function wrapper_90428() {

action_90423(window.location.hash);
redraw_90233();
}
window.onhashchange = wrapper_90428;
}
function colonanonymous__92496(hash_92498) {

if ((hash_92498 == "#/")) {
filter_92010[0] = 0;
}
else {
if ((hash_92498 == "#/completed")) {
filter_92010[0] = 2;
}
else {
if ((hash_92498 == "#/active")) {
filter_92010[0] = 1;
}
}}
}
setOnHashChange_90418(colonanonymous__92496);
function init_90401(ev_90403) {

window.requestAnimationFrame(dodraw_90201);
}
function setRenderer_90404(renderer_90408) {

dorender_89480[0] = renderer_90408;
window.onload = init_90401;
}
function at__76557(a_76562) {

var result_76564 = null;
result_76564 = new Array((a_76562 != null ? a_76562.length : 0)); for (var i=0;i<(a_76562 != null ? a_76562.length : 0);++i) {result_76564[i]=null;}L1: do {
var i_76596 = 0;
var colontmp__76598 = 0;
colontmp__76598 = ((a_76562 != null ? a_76562.length : 0) - 1);
var res_76601 = 0;
L2: do {
L3: while (true) {
if (!(res_76601 <= colontmp__76598)) break L3;
i_76596 = res_76601;
result_76564[i_76596] = a_76562[i_76596];
res_76601 += 1;
}
} while(false);
} while(false);
return result_76564;
}
function vthunk_76549(name_76551, args_76553) {

var result_76554 = null;
result_76554 = {kind: 3, text: name_76551, key: -1, kids: at__76557(args_76553), id: null, class: null, attrs: null, events: null, hash: 0, validHash: false, dom: null};
return result_76554;
}
function onAllDone_92051(ev_92053, n_92054) {

entries_92008[0] = nimCopy(null, [], NTI92069);
selectedEntry_92009[0] = -1;
}
function vn_76520(i_76522) {

var result_76523 = null;
result_76523 = {kind: 1, key: i_76522, id: null, class: null, text: null, kids: null, attrs: null, events: null, hash: 0, validHash: false, dom: null};
return result_76523;
}
function vn_76539(x_76541) {

var result_76542 = null;
result_76542 = {kind: 0, key: -1, text: x_76541, id: null, class: null, kids: null, attrs: null, events: null, hash: 0, validHash: false, dom: null};
return result_76542;
}
function vn_76526(b_76528) {

var result_76529 = null;
result_76529 = {kind: 1, key: (b_76528 ? 1:0), id: null, class: null, text: null, kids: null, attrs: null, events: null, hash: 0, validHash: false, dom: null};
return result_76529;
}
function createDom_92361() {

var Tmp4;
var result_92363 = null;
var tmp_92378 = tree_76856(41, []);
tmp_92378.class = "todomvc-wrapper";
var tmp_92384 = tree_76856(15, []);
tmp_92384.class = "todoapp";
var tmp_92389 = vthunk_76549("makeHeader", []);
add_76837(tmp_92384, tmp_92389);
var tmp_92395 = tree_76856(15, []);
tmp_92395.class = "main";
var tmp_92401 = tree_76856(101, []);
tmp_92401.class = "toggle-all";
setAttr_76718(tmp_92401, "type", "checkbox");
setAttr_76718(tmp_92401, "name", "toggle");
add_76837(tmp_92395, tmp_92401);
var tmp_92407 = tree_76856(100, []);
setAttr_76718(tmp_92407, "for", "toggle-all");
addEventHandler_90409(tmp_92407, 0, onAllDone_92051);
add_76837(tmp_92407, text_76929(makeNimstrLit("Mark all as complete")));
add_76837(tmp_92395, tmp_92407);
var entriesCount_92409 = 0;
var completedCount_92410 = 0;
var tmp_92416 = tree_76856(34, []);
tmp_92416.class = "todo-list";
L1: do {
var i_92449 = 0;
var d_92450 = {Field0: null, Field1: false};
var i_92495 = 0;
L2: do {
L3: while (true) {
if (!(i_92495 < (entries_92008[0] != null ? entries_92008[0].length : 0))) break L3;
i_92449 = i_92495;
d_92450 = entries_92008[0][i_92495];
if (!((d_92450["Field0"] == null))) {
switch (filter_92010[0]) {
case 0: Tmp4 = true;

break;
case 1: Tmp4 = !(d_92450["Field1"]);

break;
case 2: Tmp4 = d_92450["Field1"];

break;
}
var b_92451 = Tmp4;
if (b_92451) {
var tmp_92455 = vthunk_76549("createEntry", [vn_76520(i_92449), vn_76539(d_92450["Field0"]), vn_76526(d_92450["Field1"]), vn_76526((i_92449 == selectedEntry_92009[0]))]);
add_76837(tmp_92416, tmp_92455);
}

completedCount_92410 += (d_92450["Field1"] ? 1:0);
entriesCount_92409 += 1;
}

i_92495 += 1;
}
} while(false);
} while(false);
add_76837(tmp_92395, tmp_92416);
add_76837(tmp_92384, tmp_92395);
var tmp_92484 = vthunk_76549("makeFooter", [vn_76520(entriesCount_92409), vn_76520(completedCount_92410)]);
add_76837(tmp_92384, tmp_92484);
add_76837(tmp_92378, tmp_92384);
result_92363 = tmp_92378;
return result_92363;
}
setRenderer_90404(createDom_92361);
