var e = exports;

(e.aa =
 e.agq =
 e.bas =
 e.byn =
 e.dav =
 e.dje =
 e.dua =
 e.dyo =
 e.ebu =
 e.ewo =
 e.guz =
 e.ia =
 e.kam =
 e.khq =
 e.ki =
 e.kln =
 e.kok =
 e.ksf =
 e.lu =
 e.luo =
 e.luy =
 e.mer =
 e.mfe =
 e.mgh =
 e.mua =
 e.nmg =
 e.nus =
 e.rn =
 e.rw =
 e.sbp =
 e.swc =
 e.tg =
 e.twq =
 e.vai =
 e.wal =
 e.yav =
 e.zgh = function aa(n) {

}).count = 1;

(e.af =
 e.asa =
 e.az =
 e.bem =
 e.bez =
 e.bg =
 e.brx =
 e.cgg =
 e.chr =
 e.ee =
 e.el =
 e.eo =
 e.es =
 e.eu =
 e.fo =
 e.fur =
 e.gsw =
 e.ha =
 e.haw =
 e.hu =
 e.jgo =
 e.jmc =
 e.ka =
 e.kk =
 e.kkj =
 e.kl =
 e.ks =
 e.ksb =
 e.ky =
 e.lg =
 e.mas =
 e.mgo =
 e.ml =
 e.mn =
 e.nb =
 e.nd =
 e.ne =
 e.nn =
 e.nnh =
 e.nr =
 e.nyn =
 e.om =
 e.or =
 e.os =
 e.ps =
 e.rm =
 e.rof =
 e.rwk =
 e.saq =
 e.seh =
 e.sn =
 e.so =
 e.sq =
 e.ss =
 e.ssy =
 e.st =
 e.ta =
 e.te =
 e.teo =
 e.tig =
 e.tn =
 e.tr =
 e.ts =
 e.ug =
 e.uz =
 e.ve =
 e.vo =
 e.vun =
 e.wae =
 e.xh =
 e.xog = function af(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1)return"one";return"other"
}).count = 2;

(e.ak =
 e.ln =
 e.mg =
 e.nso =
 e.pa =
 e.ti = function ak(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===Math.floor(n)&&n>=0&&n<=1)return"one";return"other"
}).count = 2;

(e.am =
 e.bn =
 e.fa =
 e.gu =
 e.hi =
 e.kn =
 e.mr =
 e.zu = function am(n) {
var i=Math.floor(Math.abs(n));if(typeof n==="string")n=parseInt(n,10);if(i===0||n===1)return"one";return"other"
}).count = 2;

(e.ar = function ar(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===0)return"zero";if(n===1)return"one";if(n===2)return"two";if(n%100===Math.floor(n%100)&&n%100>=3&&n%100<=10)return"few";if(n%100===Math.floor(n%100)&&n%100>=11&&n%100<=99)return"many";return"other"
}).count = 6;

(e.as =
 e.ast =
 e.ca =
 e.de =
 e.en =
 e.et =
 e.fi =
 e.fy =
 e.gl =
 e.it =
 e.nl =
 e.sv =
 e.sw =
 e.ur = function as(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(typeof n==="string")n=parseInt(n,10);if(i===1&&v===0)return"one";return"other"
}).count = 2;

(e.be = function be(n) {
if(typeof n==="string")n=parseInt(n,10);if(n%10===1&&!(n%100===11))return"one";if(n%10===Math.floor(n%10)&&n%10>=2&&n%10<=4&&!(n%100>=12&&n%100<=14))return"few";if(n%10===0||n%10===Math.floor(n%10)&&n%10>=5&&n%10<=9||n%100===Math.floor(n%100)&&n%100>=11&&n%100<=14)return"many";return"other"
}).count = 4;

(e.bm =
 e.bo =
 e.dz =
 e.id =
 e.ig =
 e.ii =
 e.ja =
 e.kde =
 e.kea =
 e.km =
 e.ko =
 e.lkt =
 e.lo =
 e.ms =
 e.my =
 e.root =
 e.sah =
 e.ses =
 e.sg =
 e.th =
 e.to =
 e.vi =
 e.yo =
 e.zh = function bm(n) {
return"other"
}).count = 1;

(e.br = function br(n) {
if(typeof n==="string")n=parseInt(n,10);if(n%10===1&&!(n%100===11||n%100===71||n%100===91))return"one";if(n%10===2&&!(n%100===12||n%100===72||n%100===92))return"two";if(n%10===Math.floor(n%10)&&(n%10>=3&&n%10<=4||n%10===9)&&!(n%100>=10&&n%100<=19||n%100>=70&&n%100<=79||n%100>=90&&n%100<=99))return"few";if(!(n===0)&&n%1e6===0)return"many";return"other"
}).count = 5;

(e.bs =
 e.hr =
 e.sr = function bs(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length,f=parseInt(n.toString().replace(/^[^.]*\.?/,""),10);if(typeof n==="string")n=parseInt(n,10);if(v===0&&i%10===1&&(!(i%100===11)||f%10===1&&!(f%100===11)))return"one";if(v===0&&i%10===Math.floor(i%10)&&i%10>=2&&i%10<=4&&(!(i%100>=12&&i%100<=14)||f%10===Math.floor(f%10)&&f%10>=2&&f%10<=4&&!(f%100>=12&&f%100<=14)))return"few";return"other"
}).count = 3;

(e.cs =
 e.sk = function cs(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(typeof n==="string")n=parseInt(n,10);if(i===1&&v===0)return"one";if(i===Math.floor(i)&&i>=2&&i<=4&&v===0)return"few";if(!(v===0))return"many";return"other"
}).count = 4;

(e.cy = function cy(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===0)return"zero";if(n===1)return"one";if(n===2)return"two";if(n===3)return"few";if(n===6)return"many";return"other"
}).count = 6;

(e.da = function da(n) {
var i=Math.floor(Math.abs(n)),t=parseInt(n.toString().replace(/^[^.]*\.?|0+$/g,""),10);if(typeof n==="string")n=parseInt(n,10);if(n===1||!(t===0)&&(i===0||i===1))return"one";return"other"
}).count = 2;

(e.ff =
 e.fr =
 e.hy =
 e.kab = function ff(n) {
var i=Math.floor(Math.abs(n));if(typeof n==="string")n=parseInt(n,10);if(i===0||i===1)return"one";return"other"
}).count = 2;

(e.fil = function fil(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length,f=parseInt(n.toString().replace(/^[^.]*\.?/,""),10);if(typeof n==="string")n=parseInt(n,10);if(v===0&&(i===1||i===2||i===3||v===0&&(!(i%10===4||i%10===6||i%10===9)||!(v===0)&&!(f%10===4||f%10===6||f%10===9))))return"one";return"other"
}).count = 2;

(e.ga = function ga(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1)return"one";if(n===2)return"two";if(n===Math.floor(n)&&n>=3&&n<=6)return"few";if(n===Math.floor(n)&&n>=7&&n<=10)return"many";return"other"
}).count = 5;

(e.gd = function gd(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1||n===11)return"one";if(n===2||n===12)return"two";if(n===Math.floor(n)&&(n>=3&&n<=10||n>=13&&n<=19))return"few";return"other"
}).count = 4;

(e.gv = function gv(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(typeof n==="string")n=parseInt(n,10);if(v===0&&i%10===1)return"one";if(v===0&&i%10===2)return"two";if(v===0&&(i%100===0||i%100===20||i%100===40||i%100===60||i%100===80))return"few";if(!(v===0))return"many";return"other"
}).count = 5;

(e.he = function he(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(typeof n==="string")n=parseInt(n,10);if(i===1&&v===0)return"one";if(i===2&&v===0)return"two";if(v===0&&!(n>=0&&n<=10)&&n%10===0)return"many";return"other"
}).count = 4;

(e.is = function is(n) {
var i=Math.floor(Math.abs(n)),t=parseInt(n.toString().replace(/^[^.]*\.?|0+$/g,""),10);if(typeof n==="string")n=parseInt(n,10);if(t===0&&i%10===1&&(!(i%100===11)||!(t===0)))return"one";return"other"
}).count = 2;

(e.ksh = function ksh(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===0)return"zero";if(n===1)return"one";return"other"
}).count = 3;

(e.kw =
 e.naq =
 e.se = function kw(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1)return"one";if(n===2)return"two";return"other"
}).count = 3;

(e.lag = function lag(n) {
var i=Math.floor(Math.abs(n));if(typeof n==="string")n=parseInt(n,10);if(n===0)return"zero";if((i===0||i===1)&&!(n===0))return"one";return"other"
}).count = 3;

(e.lt = function lt(n) {
var f=parseInt(n.toString().replace(/^[^.]*\.?/,""),10);if(typeof n==="string")n=parseInt(n,10);if(n%10===1&&!(n%100>=11&&n%100<=19))return"one";if(n%10===Math.floor(n%10)&&n%10>=2&&n%10<=9&&!(n%100>=11&&n%100<=19))return"few";if(!(f===0))return"many";return"other"
}).count = 4;

(e.lv = function lv(n) {
var v=n.toString().replace(/^[^.]*\.?/,"").length,f=parseInt(n.toString().replace(/^[^.]*\.?/,""),10);if(typeof n==="string")n=parseInt(n,10);if(n%10===0||n%100===Math.floor(n%100)&&n%100>=11&&n%100<=19||v===2&&f%100===Math.floor(f%100)&&f%100>=11&&f%100<=19)return"zero";if(n%10===1&&(!(n%100===11)||v===2&&f%10===1&&(!(f%100===11)||!(v===2)&&f%10===1)))return"one";return"other"
}).count = 3;

(e.mk = function mk(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length,f=parseInt(n.toString().replace(/^[^.]*\.?/,""),10);if(typeof n==="string")n=parseInt(n,10);if(v===0&&(i%10===1||f%10===1))return"one";return"other"
}).count = 2;

(e.mt = function mt(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===1)return"one";if(n===0||n%100===Math.floor(n%100)&&n%100>=2&&n%100<=10)return"few";if(n%100===Math.floor(n%100)&&n%100>=11&&n%100<=19)return"many";return"other"
}).count = 4;

(e.pl = function pl(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(typeof n==="string")n=parseInt(n,10);if(i===1&&v===0)return"one";if(v===0&&i%10===Math.floor(i%10)&&i%10>=2&&i%10<=4&&!(i%100>=12&&i%100<=14))return"few";if(v===0&&!(i===1)&&(i%10===Math.floor(i%10)&&i%10>=0&&i%10<=1||v===0&&(i%10===Math.floor(i%10)&&i%10>=5&&i%10<=9||v===0&&i%100===Math.floor(i%100)&&i%100>=12&&i%100<=14)))return"many";return"other"
}).count = 4;

(e.pt = function pt(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length,t=parseInt(n.toString().replace(/^[^.]*\.?|0+$/g,""),10);if(typeof n==="string")n=parseInt(n,10);if(i===1&&(v===0||i===0&&t===1))return"one";return"other"
}).count = 2;

(e.ro = function ro(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(typeof n==="string")n=parseInt(n,10);if(i===1&&v===0)return"one";if(!(v===0)||n===0||!(n===1)&&n%100===Math.floor(n%100)&&n%100>=1&&n%100<=19)return"few";return"other"
}).count = 3;

(e.ru =
 e.uk = function ru(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(typeof n==="string")n=parseInt(n,10);if(v===0&&i%10===1&&!(i%100===11))return"one";if(v===0&&i%10===Math.floor(i%10)&&i%10>=2&&i%10<=4&&!(i%100>=12&&i%100<=14))return"few";if(v===0&&(i%10===0||v===0&&(i%10===Math.floor(i%10)&&i%10>=5&&i%10<=9||v===0&&i%100===Math.floor(i%100)&&i%100>=11&&i%100<=14)))return"many";return"other"
}).count = 4;

(e.shi = function shi(n) {
var i=Math.floor(Math.abs(n));if(typeof n==="string")n=parseInt(n,10);if(i===0||n===1)return"one";if(n===Math.floor(n)&&n>=2&&n<=10)return"few";return"other"
}).count = 3;

(e.si = function si(n) {
var i=Math.floor(Math.abs(n)),f=parseInt(n.toString().replace(/^[^.]*\.?/,""),10);if(typeof n==="string")n=parseInt(n,10);if(n===0||n===1||i===0&&f===1)return"one";return"other"
}).count = 2;

(e.sl = function sl(n) {
var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(typeof n==="string")n=parseInt(n,10);if(v===0&&i%100===1)return"one";if(v===0&&i%100===2)return"two";if(v===0&&(i%100===Math.floor(i%100)&&i%100>=3&&i%100<=4||!(v===0)))return"few";return"other"
}).count = 4;

(e.tzm = function tzm(n) {
if(typeof n==="string")n=parseInt(n,10);if(n===Math.floor(n)&&n>=0&&n<=1||n===Math.floor(n)&&n>=11&&n<=99)return"one";return"other"
}).count = 2;