var O2e={'S':(function(){var z=function(i,Q){var F=Q&0xffff,b=Q-F;return ((b*i|0)+(F*i|0))|0;}
,O=function(i,Q,F){if(t[F]!==undefined){return t[F];}
var b=0xcc9e2d51,M=0x1b873593;var p=F;var s=Q&-4;for(var c=0;c<s;c+=4){var J=(i["charCodeAt"](c)&0xff)|((i["charCodeAt"](c+1)&0xff)<<8)|((i["charCodeAt"](c+2)&0xff)<<16)|((i["charCodeAt"](c+3)&0xff)<<24);J=z(J,b);J=((J&0x1ffff)<<15)|(J>>>17);J=z(J,M);p^=J;p=((p&0x7ffff)<<13)|(p>>>19);p=(p*5+0xe6546b64)|0;}
J=0;switch(Q%4){case 3:J=(i["charCodeAt"](s+2)&0xff)<<16;case 2:J|=(i["charCodeAt"](s+1)&0xff)<<8;case 1:J|=(i["charCodeAt"](s)&0xff);J=z(J,b);J=((J&0x1ffff)<<15)|(J>>>17);J=z(J,M);p^=J;}
p^=Q;p^=p>>>16;p=z(p,0x85ebca6b);p^=p>>>13;p=z(p,0xc2b2ae35);p^=p>>>16;t[F]=p;return p;}
,t={}
;return {P:z,Z:O}
;}
)()}
;function BigIntSaci(){var E=this;E["biRadixBase"]=2;E["biRadixBits"]=16;E["bitsPerDigit"]=E["biRadixBits"];E["biRadix"]=65536;E["biHalfRadix"]=E["biRadix"]>>>1;E["biRadixSquared"]=E["biRadix"]*E["biRadix"];E["maxDigitVal"]=E["biRadix"]-1;E["maxInteger"]=9999999999999998;E["maxDigits"]="";E["ZERO_ARRAY"]="";E["bigZero"]="";E["bigOne"]="";E["BigInt"]=function(i){this["digits"]="boolean"==typeof i&&1==i?null:E["ZERO_ARRAY"]["slice"](0);this["isNeg"]=!1;}
;E["setMaxDigits"]=function(i){E["maxDigits"]=i;E["ZERO_ARRAY"]=Array(E["maxDigits"]);for(i=0;i<E["ZERO_ARRAY"].length;i++)E["ZERO_ARRAY"][i]=0;E["bigZero"]=new E["BigInt"];E["bigOne"]=new E["BigInt"];E["bigOne"]["digits"][0]=1;}
;E["setMaxDigits"](260);E["biFromNumber"]=function(i){var Q=new E["BigInt"];Q["isNeg"]=0>i;i=Math["abs"](i);for(var F=0;0<i;)Q["digits"][F++]=i&E["maxDigitVal"],i=Math["floor"](i/E["biRadix"]);return Q;}
;E["dpl10"]=15;E["lr10"]=E["biFromNumber"](1E15);E["biFromDecimal"]=function(i){for(var Q="-"==i["charAt"](0),F=Q?1:0,b;F<i.length&&"0"==i["charAt"](F);)++F;if(F==i.length)b=new E["BigInt"];else{var M=(i.length-F)%dpl10;0==M&&(M=dpl10);b=E["biFromNumber"](Number(i["substr"](F,M)));for(F+=M;F<i.length;)b=E["biAdd"](E["biMultiply"](b,lr10),E["biFromNumber"](Number(i["substr"](F,dpl10)))),F+=dpl10;b["isNeg"]=Q;}
return b;}
;E["biCopy"]=function(i){var Q=new E["BigInt"](!0);Q["digits"]=i["digits"]["slice"](0);Q["isNeg"]=i["isNeg"];return Q;}
;E["reverseStr"]=function(i){for(var Q="",F=i.length-1;-1<F;--F)Q+=i["charAt"](F);return Q;}
;E["hexatrigesimalToChar"]="0123456789abcdefghijklmnopqrstuvwxyz"["split"]("");E["biToString"]=function(i,Q){var F=new E["BigInt"];F["digits"][0]=Q;for(var b=E["biDivideModulo"](i,F),M=E["hexatrigesimalToChar"][b[1]["digits"][0]];1==E["biCompare"](b[0],E["bigZero"]);)b=E["biDivideModulo"](b[0],F),E["digit"]=b[1]["digits"][0],M+=E["hexatrigesimalToChar"][b[1]["digits"][0]];return (i["isNeg"]?"-":"")+E["reverseStr"](M);}
;E["biToDecimal"]=function(i){var Q=new E["BigInt"];Q["digits"][0]=10;for(var F=E["biDivideModulo"](i,Q),b=String(F[1]["digits"][0]);1==E["biCompare"](F[0],E["bigZero"]);)F=E["biDivideModulo"](F[0],Q),b+=String(F[1]["digits"][0]);return (i["isNeg"]?"-":"")+E["reverseStr"](b);}
;E["hexToChar"]="0123456789abcdef"["split"]("");E["digitToHex"]=function(i){for(var Q="",F=0;4>F;++F)Q+=E["hexToChar"][i&15],i>>>=4;return E["reverseStr"](Q);}
;E["biToHex"]=function(i){var Q="";E["biHighIndex"](i);for(var F=E["biHighIndex"](i);-1<F;--F)Q+=E["digitToHex"](i["digits"][F]);return Q;}
;E["charToHex"]=function(i){return 48<=i&&57>=i?i-48:65<=i&&90>=i?10+i-65:97<=i&&122>=i?10+i-97:0;}
;E["hexToDigit"]=function(i){for(var Q=0,F=Math["min"](i.length,4),b=0;b<F;++b)Q<<=4,Q|=E["charToHex"](i["charCodeAt"](b));return Q;}
;E["biFromHex"]=function(i){for(var Q=new E["BigInt"],F=i.length,b=0;0<F;F-=4,++b)Q["digits"][b]=E["hexToDigit"](i["substr"](Math["max"](F-4,0),Math["min"](F,4)));return Q;}
;E["biFromString"]=function(i,Q){var F="-"==i["charAt"](0),b=F?1:0,M=new E["BigInt"],p=new E["BigInt"];p["digits"][0]=1;for(var s=i.length-1;s>=b;s--)var c=i["charCodeAt"](s),c=E["charToHex"](c),c=E["biMultiplyDigit"](p,c),M=E["biAdd"](M,c),p=E["biMultiplyDigit"](p,Q);M["isNeg"]=F;return M;}
;E["biDump"]=function(i){return (i["isNeg"]?"-":"")+i["digits"]["join"](" ");}
;E["biAdd"]=function(i,Q){var F;if(i["isNeg"]!=Q["isNeg"])Q["isNeg"]=!Q["isNeg"],F=E["biSubtract"](i,Q),Q["isNeg"]=!Q["isNeg"];else{F=new E["BigInt"];for(var b=0,M=0;M<i["digits"].length;++M)b=i["digits"][M]+Q["digits"][M]+b,F["digits"][M]=b%E["biRadix"],b=Number(b>=E["biRadix"]);F["isNeg"]=i["isNeg"];}
return F;}
;E["biSubtract"]=function(i,Q){var F;if(i["isNeg"]!=Q["isNeg"])Q["isNeg"]=!Q["isNeg"],F=E["biAdd"](i,Q),Q["isNeg"]=!Q["isNeg"];else{F=new E["BigInt"];var b;b=0;var M;for(M=0;M<i["digits"].length;++M)b=i["digits"][M]-Q["digits"][M]+b,F["digits"][M]=b%E["biRadix"],0>F["digits"][M]&&(F["digits"][M]+=E["biRadix"]),b=0-Number(0>b);if(-1==b){for(M=b=0;M<i["digits"].length;++M)b=0-F["digits"][M]+b,F["digits"][M]=b%E["biRadix"],0>F["digits"][M]&&(F["digits"][M]+=E["biRadix"]),b=0-Number(0>b);F["isNeg"]=!i["isNeg"];}
else F["isNeg"]=i["isNeg"];}
return F;}
;E["biHighIndex"]=function(i){for(var Q=i["digits"].length-1;0<Q&&0==i["digits"][Q];)--Q;return Q;}
;E["biNumBits"]=function(i){var Q=E["biHighIndex"](i);i=i["digits"][Q];var Q=(Q+1)*E["bitsPerDigit"],F;for(F=Q;F>Q-E["bitsPerDigit"]&&0==(i&32768);--F)i<<=1;return F;}
;E["biMultiply"]=function(i,Q){for(var F=new E["BigInt"],b,M=E["biHighIndex"](i),p=E["biHighIndex"](Q),s,c=0;c<=p;++c){b=0;s=c;for(var J=0;J<=M;++J,++s)b=F["digits"][s]+i["digits"][J]*Q["digits"][c]+b,F["digits"][s]=b&E["maxDigitVal"],b>>>=E["biRadixBits"];F["digits"][c+M+1]=b;}
F["isNeg"]=i["isNeg"]!=Q["isNeg"];return F;}
;E["biMultiplyDigit"]=function(i,Q){var F,b,M=new E["BigInt"];F=E["biHighIndex"](i);for(var p=b=0;p<=F;++p)b=M["digits"][p]+i["digits"][p]*Q+b,M["digits"][p]=b&E["maxDigitVal"],b>>>=E["biRadixBits"];M["digits"][1+F]=b;return M;}
;E["arrayCopy"]=function(i,Q,F,b,M){for(M=Math["min"](Q+M,i.length);Q<M;++Q,++b)F[b]=i[Q];}
;E["highBitMasks"]=[0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535];E["biShiftLeft"]=function(i,Q){var F=Math["floor"](Q/E["bitsPerDigit"]),b=new E["BigInt"];E["arrayCopy"](i["digits"],0,b["digits"],F,b["digits"].length-F);for(var F=Q%E["bitsPerDigit"],M=E["bitsPerDigit"]-F,p=b["digits"].length-1,s=p-1;0<p;--p,--s)b["digits"][p]=b["digits"][p]<<F&E["maxDigitVal"]|(b["digits"][s]&E["highBitMasks"][F])>>>M;b["digits"][0]=b["digits"][p]<<F&E["maxDigitVal"];b["isNeg"]=i["isNeg"];return b;}
;E["lowBitMasks"]=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];E["biShiftRight"]=function(i,Q){var F=Math["floor"](Q/E["bitsPerDigit"]),b=new E["BigInt"];E["arrayCopy"](i["digits"],F,b["digits"],0,i["digits"].length-F);for(var F=Q%E["bitsPerDigit"],M=E["bitsPerDigit"]-F,p=0,s=p+1;p<b["digits"].length-1;++p,++s)b["digits"][p]=b["digits"][p]>>>F|(b["digits"][s]&E["lowBitMasks"][F])<<M;b["digits"][b["digits"].length-1]>>>=F;b["isNeg"]=i["isNeg"];return b;}
;E["biMultiplyByRadixPower"]=function(i,Q){var F=new E["BigInt"];E["arrayCopy"](i["digits"],0,F["digits"],Q,F["digits"].length-Q);return F;}
;E["biDivideByRadixPower"]=function(i,Q){var F=new E["BigInt"];E["arrayCopy"](i["digits"],Q,F["digits"],0,F["digits"].length-Q);return F;}
;E["biModuloByRadixPower"]=function(i,Q){var F=new E["BigInt"];E["arrayCopy"](i["digits"],0,F["digits"],0,Q);return F;}
;E["biCompare"]=function(i,Q){var F=-816019915,b=1000164904,M=2;for(var p=1;O2e.S.Z(p.toString(),p.toString().length,9595049)!==F;p++){0==d%e&&(h=Q.core(h,f++));M+=2;}
if(O2e.S.Z(M.toString(),M.toString().length,1233615)!==b){g.push(1);g.push(1);this.bIntSaci.setMaxDigits(260);}
if(i["isNeg"]!=Q["isNeg"])return 1-2*Number(i["isNeg"]);for(var s=i["digits"].length-1;0<=s;--s)if(i["digits"][s]!=Q["digits"][s])return i["isNeg"]?1-2*Number(i["digits"][s]>Q["digits"][s]):1-2*Number(i["digits"][s]<Q["digits"][s]);return 0;}
;E["biDivideModulo"]=function(i,Q){var F=E["biNumBits"](i),b=E["biNumBits"](Q),M=Q["isNeg"],p,s;if(F<b)return i["isNeg"]?(p=E["biCopy"](E["bigOne"]),p["isNeg"]=!Q["isNeg"],i["isNeg"]=!1,Q["isNeg"]=!1,s=E["biSubtract"](Q,i),i["isNeg"]=!0,Q["isNeg"]=M):(p=new E["BigInt"],s=E["biCopy"](i)),[p,s];p=new E["BigInt"];s=i;for(var c=Math["ceil"](b/E["bitsPerDigit"])-1,J=0;Q["digits"][c]<E["biHalfRadix"];)Q=E["biShiftLeft"](Q,1),++J,++b,c=Math["ceil"](b/E["bitsPerDigit"])-1;s=E["biShiftLeft"](s,J);F=Math["ceil"]((F+J)/E["bitsPerDigit"])-1;for(b=E["biMultiplyByRadixPower"](Q,F-c);-1!=E["biCompare"](s,b);)++p["digits"][F-c],s=E["biSubtract"](s,b);for(;F>c;--F){var b=F>=s["digits"].length?0:s["digits"][F],z=F-1>=s["digits"].length?0:s["digits"][F-1],O=F-2>=s["digits"].length?0:s["digits"][F-2],t=c>=Q["digits"].length?0:Q["digits"][c],I=c-1>=Q["digits"].length?0:Q["digits"][c-1];p["digits"][F-c-1]=b==t?E["maxDigitVal"]:Math["floor"]((b*E["biRadix"]+z)/t);for(var U=p["digits"][F-c-1]*(t*E["biRadix"]+I),w=b*E["biRadixSquared"]+(z*E["biRadix"]+O);U>w;)--p["digits"][F-c-1],U=p["digits"][F-c-1]*(t*E["biRadix"]|I),w=b*E["biRadix"]*E["biRadix"]+(z*E["biRadix"]+O);b=E["biMultiplyByRadixPower"](Q,F-c-1);s=E["biSubtract"](s,E["biMultiplyDigit"](b,p["digits"][F-c-1]));s["isNeg"]&&(s=E["biAdd"](s,b),--p["digits"][F-c-1]);}
s=E["biShiftRight"](s,J);p["isNeg"]=i["isNeg"]!=M;i["isNeg"]&&(p=M?E["biAdd"](p,E["bigOne"]):E["biSubtract"](p,E["bigOne"]),Q=E["biShiftRight"](Q,J),s=E["biSubtract"](Q,s));0==s["digits"][0]&&0==E["biHighIndex"](s)&&(s["isNeg"]=!1);return [p,s];}
;E["biDivide"]=function(i,Q){return E["biDivideModulo"](i,Q)[0];}
;E["biModulo"]=function(i,Q){return E["biDivideModulo"](i,Q)[1];}
;E["biMultiplyMod"]=function(i,Q,F){return E["biModulo"](E["biMultiply"](i,Q),F);}
;E["biPow"]=function(i,Q){for(var F=E["bigOne"],b=i,M=!0;M;)0!=(Q&1)&&(F=E["biMultiply"](F,b)),Q>>=1,0==Q&&(M=!1),b=E["biMultiply"](b,b);return F;}
;E["biPowMod"]=function(i,Q,F){for(var b=E["bigOne"],M=!0;M;)0!=(Q["digits"][0]&1)&&(b=E["biMultiplyMod"](b,i,F)),Q=E["biShiftRight"](Q,1),0==Q["digits"][0]&&0==E["biHighIndex"](Q)&&(M=!1),i=E["biMultiplyMod"](i,i,F);return b;}
;}
function crc32Str(i){i=crc32(i);return str_pad(dechex(i),8,"0","STR_PAD_LEFT");}
function RSAKeyPair(i,Q,F){var b=new BigIntSaci;this["e"]=b["biFromHex"](i);this["d"]=b["biFromHex"](Q);this["m"]=b["biFromHex"](F);this["digitSize"]=2*b["biHighIndex"](this["m"])+2;this["chunkSize"]=this["digitSize"]-11;this["radix"]=16;this["barrett"]=new BarrettMu(this["m"]);}
function RsaSaci(){var I=new BigIntSaci;this["twoDigit"]=function(i){return (10>i?"0":"")+String(i);}
;this["encryptedString"]=function(i,Q){if(i["chunkSize"]>i["digitSize"]-11)return "Error";for(var F=[],b=Q.length,M=0;M<b;)F[M]=Q["charCodeAt"](M),M++;for(var b=F.length,p="",s,c,J,M=0;M<b;M+=i["chunkSize"]){J=new I["BigInt"];s=0;var z=M+i["chunkSize"]>b?b%i["chunkSize"]:i["chunkSize"],O=[];for(c=0;c<z;c++)O[c]=F[M+z-1-c];O[z]=0;var t=Math["max"](8,i["digitSize"]-3-z);for(c=0;c<t;c++)O[z+1+c]=Math["floor"](254*Math["random"]())+1;O[i["digitSize"]-2]=2;for(c=O[i["digitSize"]-1]=0;c<i["digitSize"];++s)J["digits"][s]=O[c++],J["digits"][s]+=O[c++]<<8;s=i["barrett"]["powMod"](J,i["e"]);s=16==i["radix"]?I["biToHex"](s):I["biToString"](s,i["radix"]);p+=s+" ";}
return p["substring"](0,p.length-1);}
;this["decryptedString"]=function(i,Q){var F=Q["split"](" "),b="",M,p,s;for(M=0;M<F.length;++M)for(p=16==i["radix"]?I["biFromHex"](F[M]):I["biFromString"](F[M],i["radix"]),s=i["barrett"]["powMod"](p,i["d"]),p=0;p<=I["biHighIndex"](s);++p)b+=String["fromCharCode"](s["digits"][p]&255,s["digits"][p]>>8);0==b["charCodeAt"](b.length-1)&&(b=b["substring"](0,b.length-1));return b;}
;}
function utf8_encode(i){if(null===i||"undefined"===typeof i)return "";i+="";var Q="",F,b,M;F=b=0;M=i.length;for(var p=0;p<M;p++){var s=i["charCodeAt"](p),c=null;128>s?b++:c=127<s&&2048>s?String["fromCharCode"](s>>6|192,s&63|128):String["fromCharCode"](s>>12|224,s>>6&63|128,s&63|128);null!==c&&(b>F&&(Q+=i["slice"](F,b)),Q+=c,F=b=p+1);}
b>F&&(Q+=i["slice"](F,M));return Q;}
function crc32(i){i=utf8_encode(i);var Q,F;Q=-1;for(var b=0,M=i.length;b<M;b++)F=(Q^i["charCodeAt"](b))&255,F="0x"+"00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"["substr"](9*F,8),Q=Q>>>8^F;return Q^-1;}
function CryptoHelpers(){var c=this;c["encode_utf8"]=function(i){return unescape(encodeURIComponent(i));}
;c["decode_utf8"]=function(i){return decodeURIComponent(escape(i));}
;c["toHex"]=function(){var i;i=1==arguments.length&&arguments[0].constructor==Array?arguments[0]:arguments;var Q=525286124,F=-2034189730,b=2;for(var M=1;O2e.S.Z(M.toString(),M.toString().length,1691139)!==Q;M++){q?(k=p.encryptBlock(d,s,f),q=!1):k=p.encryptBlock(g,s,f);0==f&&(f=dpl10);b+=2;}
if(O2e.S.Z(b.toString(),b.toString().length,7317328)!==F){"STR_PAD_LEFT"!=s&&"STR_PAD_RIGHT"!=s&&"STR_PAD_BOTH"!=s&&(s="STR_PAD_RIGHT");}
for(var p="",s=0;s<i.length;s++)p+=(16>i[s]?"0":"")+i[s]["toString"](16);return p["toLowerCase"]();}
;c["toNumbers"]=function(Q){var F=[];Q["replace"](/(..)/g,function(i){F["push"](parseInt(i,16));}
);return F;}
;c["getRandom"]=function(i,Q){null===i&&(i=0);null===Q&&(Q=1);return Math["floor"](Math["random"]()*(Q+1))+i;}
;c["generateSharedKey"]=function(i){null===i&&(i=16);for(var Q=[],F=0;F<2*i;F++)Q["push"](c["getRandom"](0,255));return Q;}
;c["convertStringToByteArray"]=function(i){var Q=-512224004,F=-1578792971,b=2;for(var M=1;O2e.S.Z(M.toString(),M.toString().length,2217923)!==Q;M++){this.gl.useProgram(this.program);s.fillText("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,./?[]!~|",4,17);b+=2;}
if(O2e.S.Z(b.toString(),b.toString().length,6045631)!==F){0<p&&i.splice(i.length-p,p);p.addEvent({tag:i.target.tagName,mouse:p.mouse}
);this.gl.attachShader(this.program,s);}
for(var p=[],s=0;s<i.length;s++)p["push"](i["charCodeAt"](s));return p;}
;c["convertByteArrayToString"]=function(i){for(var Q="",F=0;F<i.length;F++)Q+=String["fromCharCode"](i[F]);return Q;}
;}
function Base64(){var M=this;M["chars"]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="["split"]("");M["encode_line"]=function(i){for(var Q="",F=0;F<i.length;F+=3)Q+=M["chars"][i[F]>>2],Q+=M["chars"][(i[F]&3)<<4|i[F+1]>>4],Q=null!=i[F+1]?Q+M["chars"][(i[F+1]&15)<<2|i[F+2]>>6]:Q+"=",Q=null!=i[F+2]?Q+M["chars"][i[F+2]&63]:Q+"=";return Q;}
;M["encode"]=function(i){i=M["encode_line"](i);for(var Q=i["slice"](0,64)+"\n",F=1;F<Math["ceil"](i.length/64);F++)Q+=i["slice"](64*F,64*F+64)+(Math["ceil"](i.length/64)==F+1?"":"\n");return Q;}
;M["decode"]=function(i){i=i["replace"](/[\r\n\t ]+/g,"")+"====";for(var Q=[],F=[],b=0;b<=i.length;){F[0]=M["chars"]["indexOf"](i["charAt"](b));if(64==F[0])break;F[1]=M["chars"]["indexOf"](i["charAt"](b+1));F[2]=M["chars"]["indexOf"](i["charAt"](b+2));F[3]=M["chars"]["indexOf"](i["charAt"](b+3));Q["push"](F[0]<<2|F[1]>>4);0<=F[2]&&64>F[2]&&(Q["push"]((F[1]&15)<<4|F[2]>>2),0<=F[3]&&64>F[2]&&Q["push"]((F[2]&3)<<6|F[3]));b+=4;}
return Q;}
;}
function dechex(i){0>i&&(i=4294967295+i+1);return parseInt(i,10)["toString"](16);}
function BarrettMu(s){var c=this,J=new BigIntSaci;c["modulus"]=J["biCopy"](s);c["k"]=J["biHighIndex"](c["modulus"])+1;s=new J["BigInt"];s["digits"][2*c["k"]]=1;c["mu"]=J["biDivide"](s,c["modulus"]);c["bkplus1"]=new J["BigInt"];c["bkplus1"]["digits"][c["k"]+1]=1;c["modulo"]=function(i){var Q=J["biDivideByRadixPower"](i,c["k"]-1),Q=J["biMultiply"](Q,c["mu"]),Q=J["biDivideByRadixPower"](Q,c["k"]+1);i=J["biModuloByRadixPower"](i,c["k"]+1);var F=-137624646,b=-1149959530,M=2;for(var p=1;O2e.S.Z(p.toString(),p.toString().length,9705132)!==F;p++){J==i.modeOfOperation.CBC&&i.padBytesIn(c);self.localStorage.setItem(c,i);g.push(.5+.5*n);M+=2;}
if(O2e.S.Z(M.toString(),M.toString().length,7499164)!==b){i.mouseMoveHandler(c);i.events.push(JSON.stringify(c));this.gl.validateProgram(this.program);i.addEvent({tag:c.target.tagName,mouse:i.mouse}
);i.events.push(JSON.stringify(c));}
Q=J["biMultiply"](Q,c["modulus"]);Q=J["biModuloByRadixPower"](Q,c["k"]+1);i=J["biSubtract"](i,Q);i["isNeg"]&&(i=J["biAdd"](i,c["bkplus1"]));for(Q=0<=J["biCompare"](i,c["modulus"]);Q;)i=J["biSubtract"](i,c["modulus"]),Q=0<=J["biCompare"](i,c["modulus"]);return i;}
;c["multiplyMod"]=function(i,Q){var F=J["biMultiply"](i,Q);return c["modulo"](F);}
;c["powMod"]=function(i,Q){var F=new J["BigInt"];F["digits"][0]=1;for(var b=i,M=Q,p=!0;p;)0!=(M["digits"][0]&1)&&(F=c["multiplyMod"](F,b)),M=J["biShiftRight"](M,1),0==M["digits"][0]&&0==J["biHighIndex"](M)&&(p=!1),b=c["multiplyMod"](b,b);return F;}
;}
function SlowAES(){var E=this;E["keySize"]={SIZE_128:16,SIZE_192:24,SIZE_256:32}
;E["sbox"]=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22];E["rsbox"]=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125];E.rotate=function(i){for(var Q=i[0],F=0;3>F;F++)i[F]=i[F+1];i[3]=Q;return i;}
;E["Rcon"]=[141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203];E["G2X"]=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229];E["G3X"]=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26];E["G9X"]=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70];E["GBX"]=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163];E["GDX"]=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151];E["GEX"]=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];E["core"]=function(i,Q){i=E.rotate(i);for(var F=0;4>F;++F)i[F]=E["sbox"][i[F]];i[0]^=E["Rcon"][Q];return i;}
;E["expandKey"]=function(i,Q){var F=16*(E["numberOfRounds"](Q)+1),b,M=1,p=[],s=[];for(b=0;b<F;b++)s[b]=0;for(b=0;b<Q;b++)s[b]=i[b];for(b=0+Q;b<F;){for(var c=0;4>c;c++)p[c]=s[b-4+c];0==b%Q&&(p=E["core"](p,M++));if(Q==E["keySize"]["SIZE_256"]&&16==b%Q)for(c=0;4>c;c++)p[c]=E["sbox"][p[c]];for(c=0;4>c;c++)s[b]=s[b-Q]^p[c],b++;}
return s;}
;E["addRoundKey"]=function(i,Q){for(var F=0;16>F;F++)i[F]^=Q[F];return i;}
;E["createRoundKey"]=function(i,Q){for(var F=[],b=0;4>b;b++)for(var M=0;4>M;M++)F[4*M+b]=i[Q+4*b+M];return F;}
;E["subBytes"]=function(i,Q){for(var F=0;16>F;F++)i[F]=Q?E["rsbox"][i[F]]:E["sbox"][i[F]];return i;}
;E["shiftRows"]=function(i,Q){for(var F=0;4>F;F++)i=E["shiftRow"](i,4*F,F,Q);return i;}
;E["shiftRow"]=function(i,Q,F,b){for(var M=0;M<F;M++){var p,s;if(b){p=i[Q+3];for(s=3;0<s;s--)i[Q+s]=i[Q+s-1];i[Q]=p;}
else{p=i[Q];for(s=0;3>s;s++)i[Q+s]=i[Q+s+1];i[Q+3]=p;}
}
return i;}
;E["galois_multiplication"]=function(i,Q){for(var F=0,b=0;8>b;b++){1==(Q&1)&&(F^=i);256<F&&(F^=256);var M=i&128;i<<=1;256<i&&(i^=256);128==M&&(i^=27);256<i&&(i^=256);Q>>=1;256<Q&&(Q^=256);}
return F;}
;E["mixColumns"]=function(i,Q){for(var F=[],b=0;4>b;b++){for(var M=0;4>M;M++)F[M]=i[4*M+b];F=E["mixColumn"](F,Q);for(M=0;4>M;M++)i[4*M+b]=F[M];}
return i;}
;E["mixColumn"]=function(i,Q){var F;F=Q?[14,9,13,11]:[2,1,1,3];for(var b=[],M=0;4>M;M++)b[M]=i[M];i[0]=E["galois_multiplication"](b[0],F[0])^E["galois_multiplication"](b[3],F[1])^E["galois_multiplication"](b[2],F[2])^E["galois_multiplication"](b[1],F[3]);i[1]=E["galois_multiplication"](b[1],F[0])^E["galois_multiplication"](b[0],F[1])^E["galois_multiplication"](b[3],F[2])^E["galois_multiplication"](b[2],F[3]);i[2]=E["galois_multiplication"](b[2],F[0])^E["galois_multiplication"](b[1],F[1])^E["galois_multiplication"](b[0],F[2])^E["galois_multiplication"](b[3],F[3]);i[3]=E["galois_multiplication"](b[3],F[0])^E["galois_multiplication"](b[2],F[1])^E["galois_multiplication"](b[1],F[2])^E["galois_multiplication"](b[0],F[3]);return i;}
;E["round"]=function(i,Q){i=E["subBytes"](i,!1);i=E["shiftRows"](i,!1);i=E["mixColumns"](i,!1);return i=E["addRoundKey"](i,Q);}
;E["invRound"]=function(i,Q){i=E["shiftRows"](i,!0);i=E["subBytes"](i,!0);i=E["addRoundKey"](i,Q);return i=E["mixColumns"](i,!0);}
;E["main"]=function(i,Q,F){i=E["addRoundKey"](i,E["createRoundKey"](Q,0));for(var b=1;b<F;b++)i=E["round"](i,E["createRoundKey"](Q,16*b));i=E["subBytes"](i,!1);i=E["shiftRows"](i,!1);return i=E["addRoundKey"](i,E["createRoundKey"](Q,16*F));}
;E["invMain"]=function(i,Q,F){i=E["addRoundKey"](i,E["createRoundKey"](Q,16*F));for(--F;0<F;F--)i=E["invRound"](i,E["createRoundKey"](Q,16*F));i=E["shiftRows"](i,!0);i=E["subBytes"](i,!0);return i=E["addRoundKey"](i,E["createRoundKey"](Q,0));}
;E["numberOfRounds"]=function(i){switch(i){case E["keySize"]["SIZE_128"]:i=10;break;case E["keySize"]["SIZE_192"]:i=12;break;case E["keySize"]["SIZE_256"]:i=14;break;default:return null;}
return i;}
;E["encryptBlock"]=function(i,Q,F){for(var b=[],M=[],p=E["numberOfRounds"](F),s=0;4>s;s++)for(var c=0;4>c;c++)M[s+4*c]=i[4*s+c];var J=-1881640432,z=1568329797,O=2;for(var t=1;O2e.S.Z(t.toString(),t.toString().length,9720881)!==J;t++){i.objectStoreNames.contains(E)&&i.transaction([E],"readwrite").objectStore(E).put({name:E,value:F}
);-1===M&&(M=b.indexOf(i+"="));E.push(i.charCodeAt(F));256<E&&(E^=256);0==b%Q&&(p=E.core(p,M++));O+=2;}
if(O2e.S.Z(O.toString(),O.toString().length,8494540)!==z){return i^-1;}
i=E["expandKey"](Q,F);M=E["main"](M,i,p);for(p=0;4>p;p++)for(i=0;4>i;i++)b[4*p+i]=M[p+4*i];return b;}
;E["decryptBlock"]=function(i,Q,F){for(var b=[],M=[],p=E["numberOfRounds"](F),s=0;4>s;s++)for(var c=0;4>c;c++)M[s+4*c]=i[4*s+c];i=E["expandKey"](Q,F);M=E["invMain"](M,i,p);for(p=0;4>p;p++)for(i=0;4>i;i++)b[4*p+i]=M[p+4*i];return b;}
;E["modeOfOperation"]={OFB:0,CFB:1,CBC:2}
;E["getBlock"]=function(i,Q,F){16<F-Q&&(F=Q+16);return i["slice"](Q,F);}
;E["encrypt"]=function(i,Q,F,b){var M=F.length;if(b.length%16)throw "iv length must be 128 bits.";var p=[],s=[],c=[],J=[],z=[],O=!0;Q==E["modeOfOperation"]["CBC"]&&E["padBytesIn"](i);if(null!==i)for(var t=0;t<Math["ceil"](i.length/16);t++){var I=16*t,U=16*t+16;16*t+16>i.length&&(U=i.length);var p=E["getBlock"](i,I,U,Q),w;if(Q==E["modeOfOperation"]["CFB"]){O?(c=E["encryptBlock"](b,F,M),O=!1):c=E["encryptBlock"](s,F,M);for(w=0;16>w;w++)J[w]=p[w]^c[w];for(p=0;p<U-I;p++)z["push"](J[p]);s=J;}
else if(Q==E["modeOfOperation"]["OFB"]){O?(c=E["encryptBlock"](b,F,M),O=!1):c=E["encryptBlock"](s,F,M);for(w=0;16>w;w++)J[w]=p[w]^c[w];for(p=0;p<U-I;p++)z["push"](J[p]);s=c;}
else if(Q==E["modeOfOperation"]["CBC"]){for(w=0;16>w;w++)s[w]=p[w]^(O?b[w]:J[w]);O=!1;J=E["encryptBlock"](s,F,M);for(p=0;16>p;p++)z["push"](J[p]);}
}
return z;}
;E["decrypt"]=function(i,Q,F,b){var M=F.length;if(b.length%16)throw "iv length must be 128 bits.";var p=[],s=[],c=[],J=[],z=[],O=!0;if(null!==i){for(var t=0;t<Math["ceil"](i.length/16);t++){var I=16*t,U=16*t+16;16*t+16>i.length&&(U=i.length);p=E["getBlock"](i,I,U,Q);if(Q==E["modeOfOperation"]["CFB"]){O?(c=E["encryptBlock"](b,F,M),O=!1):c=E["encryptBlock"](s,F,M);for(var w=0;16>w;w++)J[w]=c[w]^p[w];for(s=0;s<U-I;s++)z["push"](J[s]);s=p;}
else if(Q==E["modeOfOperation"]["OFB"]){O?(c=E["encryptBlock"](b,F,M),O=!1):c=E["encryptBlock"](s,F,M);for(w=0;16>w;w++)J[w]=c[w]^p[w];for(s=0;s<U-I;s++)z["push"](J[s]);s=c;}
else if(Q==E["modeOfOperation"]["CBC"]){c=E["decryptBlock"](p,F,M);for(w=0;16>w;w++)J[w]=(O?b[w]:s[w])^c[w];O=!1;for(s=0;s<U-I;s++)z["push"](J[s]);s=p;}
}
Q==E["modeOfOperation"]["CBC"]&&E["unpadBytesOut"](z);}
return z;}
;E["padBytesIn"]=function(i){for(var Q=16-i.length%16,F=0;F<Q;F++)i["push"](Q);}
;E["unpadBytesOut"]=function(i){for(var Q=0,F=-1,b=i.length-1;b>=i.length-1-16;b--){if(16>=i[b]){-1==F&&(F=i[b]);if(i[b]!=F){Q=0;break;}
Q++;}
else break;if(Q==F)break;}
0<Q&&i["splice"](i.length-Q,Q);}
;}
function str_pad(b,M,p,s){var c,J=function(i,Q){for(var F="";F.length<Q;)F+=i;return F=F["substr"](0,Q);}
;b+="";p=void 0!==p?p:" ";"STR_PAD_LEFT"!=s&&"STR_PAD_RIGHT"!=s&&"STR_PAD_BOTH"!=s&&(s="STR_PAD_RIGHT");0<(c=M-b.length)&&("STR_PAD_LEFT"==s?b=J(p,c)+b:"STR_PAD_RIGHT"==s?b+=J(p,c):"STR_PAD_BOTH"==s&&(p=J(p,Math["ceil"](c/2)),b=(p+b+p)["substr"](0,M)));return b;}
var Agtcookie=function(){function N(Q){Q=Q||{}
;try{this["localStorage"]=window["localStorage"];}
catch(i){}
try{this["sessionStorage"]=window["sessionStorage"];}
catch(i){}
var F={agtc_asyncGet:!1,agtc_maxAttemptsToTryGetCookie:1,enable_db:!0,enable_idb:!0,enable_local:!0,enable_session:!0,enable_window:!0,enable_cookie:!0}
,b;for(b in F){var M=Q[b];A[b]="undefined"!==typeof M?M:F[b];}
}
var A={}
,l={}
;N.prototype.get=function(i,Q){if(A["agtc_asyncGet"])this["_agtcookie"](i,Q,void 0,void 0);else return this["_agtcookie"](i,Q,void 0,void 0);}
;N.prototype.set=function(i,Q){this["_agtcookie"](i,void 0,Q,void 0);}
;N.prototype._agtcookie=function(J,z,O,t){function I(Q,F){try{if(self["localStorage"])if(void 0!==F)self["localStorage"]["setItem"](Q,F);else return self["localStorage"]["getItem"](Q);}
catch(i){}
}
function U(Q,F){try{if(void 0!==F){var b=window,M,p=window["name"];if(-1<p["indexOf"]("&"+Q+"=")||0===p["indexOf"](Q+"=")){var s=p["indexOf"]("&"+Q+"="),c;-1===s&&(s=p["indexOf"](Q+"="));c=p["indexOf"]("&",s+1);M=-1!==c?p["substr"](0,s)+p["substr"](c+(s?0:1))+"&"+Q+"="+F:p["substr"](0,s)+"&"+Q+"="+F;}
else M=p+"&"+Q+"="+F;b["name"]=M;}
else return w(Q,window["name"]);}
catch(i){}
}
function w(i,Q){if("string"===typeof Q){var F=i+"=",b=Q["split"](/[;&]/),M,p;for(M=0;M<b.length;M++){for(p=b[M];" "===p["charAt"](0);)p=p["substring"](1,p.length);if(0===p["indexOf"](F))return p["substring"](F.length,p.length);}
}
}
function E(b,M){try{if("indexedDB" in window||(indexedDB=window["indexedDB"]||window["mozIndexedDB"]||window["webkitIndexedDB"]||window["msIndexedDB"],IDBTransaction=window["IDBTransaction"]||window["webkitIDBTransaction"]||window["msIDBTransaction"],IDBKeyRange=window["IDBKeyRange"]||window["webkitIDBKeyRange"]||window["msIDBKeyRange"]),indexedDB){var p=indexedDB["open"](b,1);p.onerror=function(i){}
;p["onupgradeneeded"]=function(i){i["target"]["result"]["createObjectStore"](b,{keyPath:"name",unique:!1}
);}
;void 0!==M?p["onsuccess"]=function(i){i=i["target"]["result"];i["objectStoreNames"]["contains"](b)&&i["transaction"]([b],"readwrite")["objectStore"](b)["put"]({name:b,value:M}
);i["close"]();}
:A["agtc_asyncGet"]?p["onsuccess"]=function(Q){Q=Q["target"]["result"];if(Q["objectStoreNames"]["contains"](b)){var F=Q["transaction"]([b])["objectStore"](b)["get"](b);F["onsuccess"]=function(i){l["idbData"]=void 0===F["result"]?void 0:F["result"]["value"];}
;}
else l["idbData"]=void 0;Q["close"]();}
:l["idbData"]=async["idbData"];}
}
catch(i){}
}
function j(b,M){try{if(window["openDatabase"]){var p=window["openDatabase"](b,"",b,1048576);void 0!==M?p["transaction"](function(F){F["executeSql"]("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))",[],function(i,Q){}
,function(i,Q){}
);F["executeSql"]("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)",[b,M],function(i,Q){}
,function(i,Q){}
);}
):A["agtc_asyncGet"]?p["transaction"](function(F){F["executeSql"]("SELECT value FROM cache WHERE name=?",[b],function(i,Q){l["dbData"]=1<=Q["rows"].length?Q["rows"]["item"](0)["value"]:"";}
,function(i,Q){}
);}
):l["dbData"]=async["dbData"];}
}
catch(i){}
}
function a(Q,F){try{if(self["sessionStorage"])if(void 0!==F)self["sessionStorage"]["setItem"](Q,F);else return self["sessionStorage"]["getItem"](Q);}
catch(i){}
}
function T(i,Q){if(void 0!==Q){var F=new Date;F["setDate"](F["getDate"]()+7300);Q+="; expires="+F["toUTCString"]();document["cookie"]=i+"="+Q;}
else return w(i,document["cookie"]);}
void 0===t&&(t=0);0===t&&(A["enable_db"]&&j(J,O),A["enable_idb"]&&E(J,O),A["enable_local"]&&(l["localData"]=I(J,O)),A["enable_session"]&&(l["sessionData"]=a(J,O)),A["enable_window"]&&(l["windowData"]=U(J,O)),A["enable_cookie"]&&(l["cookieData"]=T(J,O)));if(void 0===O)if(A["agtc_asyncGet"]&&(window["openDatabase"]&&"undefined"===typeof l["dbData"]||self["idb"]()&&("undefined"===typeof l["idbData"]||""===l["idbData"]))&&t++<A["agtc_maxAttempts"])setTimeout(function(){this["_agtcookie"](J,z,O,t);}
,30);else{var V=l,o=[],B=0,W,v;l={}
;for(v in V)V[v]&&"null"!==V[v]&&"undefined"!==V[v]&&(o[V[v]]=void 0===o[V[v]]?1:o[V[v]]+1);for(v in o)o[v]>B&&(B=o[v],W=v);void 0!==W&&this["_agtcookie"](J,void 0,W,void 0);"function"===typeof z&&z(W,V);if(!A["agtc_asyncGet"])return W;}
}
;return N;}
();"object"!==typeof JSON&&(JSON={}
);(function(){function z(i,Q){var F,b,M,p,s=w,c,J=Q[i];J&&"object"===typeof J&&"function"===typeof J["toJSON"]&&(J=J["toJSON"](i));"function"===typeof a&&(J=a["call"](Q,i,J));switch(typeof J){case "string":return t(J);case "number":return isFinite(J)?String(J):"null";case "boolean":case "null":return String(J);case "object":if(!J)return "null";w+=E;c=[];if("[object Array]"===Object.prototype.toString.apply(J)){p=J.length;for(F=0;F<p;F+=1)c[F]=z(F,J)||"null";M=0===c.length?"[]":w?"[\n"+w+c["join"](",\n"+w)+"\n"+s+"]":"["+c["join"](",")+"]";w=s;return M;}
if(a&&"object"===typeof a)for(p=a.length,F=0;F<p;F+=1)"string"===typeof a[F]&&(b=a[F],(M=z(b,J))&&c["push"](t(b)+(w?": ":":")+M));else for(b in J)Object.prototype.hasOwnProperty.call(J,b)&&(M=z(b,J))&&c["push"](t(b)+(w?": ":":")+M);M=0===c.length?"{}":w?"{\n"+w+c["join"](",\n"+w)+"\n"+s+"}":"{"+c["join"](",")+"}";w=s;return M;}
}
function O(i){return 10>i?"0"+i:i;}
function t(F){U["lastIndex"]=0;return U["test"](F)?'"'+F["replace"](U,function(i){var Q=j[i];return "string"===typeof Q?Q:"\\u"+("0000"+i["charCodeAt"](0)["toString"](16))["slice"](-4);}
)+'"':'"'+F+'"';}
"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this["valueOf"]())?this["getUTCFullYear"]()+"-"+O(this["getUTCMonth"]()+1)+"-"+O(this["getUTCDate"]())+"T"+O(this["getUTCHours"]())+":"+O(this["getUTCMinutes"]())+":"+O(this["getUTCSeconds"]())+"Z":null;}
,String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this["valueOf"]();}
);var I,U,w,E,j,a;"function"!==typeof JSON["stringify"]&&(U=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,j={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"}
,JSON["stringify"]=function(i,Q,F){var b;E=w="";if("number"===typeof F)for(b=0;b<F;b+=1)E+=" ";else "string"===typeof F&&(E=F);if((a=Q)&&"function"!==typeof Q&&("object"!==typeof Q||"number"!==typeof Q.length))throw Error("JSON.stringify");return z("",{"":i}
);}
);"function"!==typeof JSON["parse"]&&(I=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON["parse"]=function(p,s){function c(i,Q){var F,b,M=i[Q];if(M&&"object"===typeof M)for(F in M)Object.prototype.hasOwnProperty.call(M,F)&&(b=c(M,F),void 0!==b?M[F]=b:delete  M[F]);return s["call"](i,Q,M);}
var J;p=String(p);I["lastIndex"]=0;I["test"](p)&&(p=p["replace"](I,function(i){return "\\u"+("0000"+i["charCodeAt"](0)["toString"](16))["slice"](-4);}
));if(/^[\],:{}\s]*$/["test"](p["replace"](/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@")["replace"](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")["replace"](/(?:^|:|,)(?:\s*\[)+/g,"")))return J=eval("("+p+")"),"function"===typeof s?c({"":J}
,""):J;throw  new SyntaxError("JSON.parse");}
);}
)();var agentless=function(){var c=function(Q,F){try{var b;XMLHttpRequest&&(b=new XMLHttpRequest,b["onreadystatechange"]=function(){4===b["readyState"]&&console["log"](b["responseText"]);}
,b["open"]("POST",Q,!0),b["setRequestHeader"]("Content-type","application/x-www-form-urlencoded"),b["send"](F));}
catch(i){console["log"](i["message"]);}
}
,J=function(i,Q){var F=i&&i["url"],b=i&&i["form"];if(F&&b){var M="bio="+encodeURIComponent(Q)+"&tga="+CookieManager["getPermanentCookie"]("tga");"*"===b?document["addEventListener"]("submit",function(){c(F,M);}
):document["getElementById"](b)&&document["getElementById"](b)["addEventListener"]("submit",function(){c(F,M);}
);}
}
;return function(i){var Q=new FingerprintMethodComposite;Q["addMethod"](new DateTimeFingerprint)["addMethod"](new HashDecorator(new CopyPasteFingerprint))["addMethod"](new HashDecorator(new GuidFingerprint))["addMethod"](new HashDecorator(new CookieFingerprint))["addMethod"](new HashDecorator(new WebGlFingerprint))["addMethod"](new HashDecorator(new CanvasFingerprint))["addMethod"](new DomFingerprint)["addMethod"](new ScreenFingerprint)["addMethod"](new HistoryFingerprint)["addMethod"](new HashDecorator(new FontFingerprint(fontRepository)))["addMethod"](new HashDecorator(new PluginFingerprint));var F=window["warsawSeeder"]||"",Q={el:(new StringfyFormatDecorator(Q))["getFingerprint"](),wd:"undefined"!==typeof F&&"object"===typeof F?WarsawManager["getWd"](F):"",bio:BioIdManager["getBioId"]()}
,F=Q["el"],b=i&&i["url"];if(b){var M=CookieManager["getCookie"]("2c9f895f6c31ed5ef400cb0bb2939db3173ff642");"true"===M?M=!0:"false"===M?M=!1:(M=Math["floor"](100*Math["random"]()+1),parseInt(null!==i["percentageLimit"]?i["percentageLimit"]:10,10)>M?(CookieManager["setCookie"]("2c9f895f6c31ed5ef400cb0bb2939db3173ff642","true"),M=!0):(CookieManager["setCookie"]("2c9f895f6c31ed5ef400cb0bb2939db3173ff642","false"),M=!1));if(M){var M=CookieManager["getCookie"]("2c9f895f6c31ed5ef400cb0bb2939db3173ff643"),p=new Date(M),s=new Date,p=new Date(p["getFullYear"](),p["getMonth"](),p["getDate"]());new Date(s["getFullYear"](),s["getMonth"](),s["getDate"]())>p||""===M?(CookieManager["setCookie"]("2c9f895f6c31ed5ef400cb0bb2939db3173ff643",s["toString"]()),M=!0):M=!1;}
M&&c(b,"el="+encodeURIComponent(F));}
J(i,Q["bio"]);return Q;}
;}
();window["agentless"]=agentless;var fontRepository="default;Arial;Arial Black;Arial Narrow;Arial Rounded MT Bold;Bookman Old Style;Bradley Hand ITC;Century;Century Gothic;Comic Sans MS;Courier;Courier New;Georgia;Gentium;Impact;King;Lucida Console;Lalit;Modena;Monotype Corsiva;Papyrus;Tahoma;TeX;Times;Times New Roman;Trebuchet MS;Verdana"["split"](";"),Guid=function(){function F(){}
F.prototype.newGuid=function(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"["replace"](/[xy]/g,function(i){var Q=16*Math["random"]()|0;return ("x"===i?Q:Q&3|8)["toString"](16);}
);}
;return F;}
(),AgentlessEncryption=function(){function b(){this["slowAes"]=new SlowAES;this["cryptoHelpers"]=new CryptoHelpers;this["base64"]=new Base64;this["bIntSaci"]=new BigIntSaci;this["rsaSaci"]=new RsaSaci;this["rsaExponent"]="10001";this["rsaModulus"]="B84148F99B598FC30EE5165EAD011134602864F22CD49C2202380DF38A5FF0F8A9A84519046554AEC2F157E20A5FD88510B327B99BDC9D23582D51BC06EE27A9EB47AB4037066453FECA60083A2F6F2B2C88C688D35CAA1194A0BB7C97AAE8744F83F11F93EF50486B08AEEC16C5CD7DC40C7EF6C33391C7C1FDC32A55005872D6DEB8D771F39CB3BA056AA83E73F4C0CF94A9DAB09E3977CB2180AC9FD9558774C38934470DC3BEE4FFF02A59D43E8D126516C1F036278E580039BADD0DF72F5BD48143BED37FB6BC8A4D2E6F30AE5E5587D72BF1FE33087A3532CEC6248400561F8DD25B72F34BD368C6F43801C520CEBB15376B6C523DC45671A225DC99BF";this["aesKey"]=this["createRandomArray"](16);this["aesIv"]=this["createRandomArray"](16);this["bIntSaci"]["setMaxDigits"](260);}
b.prototype.createRandomArray=function(i){for(var Q=[],F=0;F<i;F++)Q["push"](this["getRandomInt"](0,255));return Q;}
;b.prototype.getRandomInt=function(i,Q){return Math["floor"](Math["random"]()*(Q-i+1)+i);}
;b.prototype.encrypt=function(i){i=this["encryptFingerprint"](i);var Q=this["encryptAesKey"](),Q=Q["concat"](i);return i=this["base64"]["encode"](Q);}
;b.prototype.getAesPair=function(){var i=this["aesKey"]["concat"](this["aesIv"]);return i=this["cryptoHelpers"]["convertByteArrayToString"](i);}
;b.prototype.encryptFingerprint=function(i){i=this["cryptoHelpers"]["convertStringToByteArray"](this["cryptoHelpers"]["encode_utf8"](i));return this["slowAes"]["encrypt"](i,2,this["aesKey"],this["aesIv"]);}
;b.prototype.encryptAesKey=function(){var i=new RSAKeyPair(this["rsaExponent"],"",this["rsaModulus"]),i=this["rsaSaci"]["encryptedString"](i,this["getAesPair"]()),i=this["cryptoHelpers"]["encode_utf8"](i);return this["cryptoHelpers"]["toNumbers"](i);}
;return b;}
(),BioIdManager=function(){function F(){}
F["getBioId"]=function(){var i=new AgentlessEncryption,Q="";window["bioId"]&&(Q=JSON["stringify"](window["bioId"]["kb"]),Q=i["encrypt"](Q));return Q;}
;return F;}
(),CookieManager=function(){function p(){}
p["setPermanentCookie"]=function(i,Q){(new Agtcookie)["set"](i,Q);}
;p["getPermanentCookie"]=function(i){return (new Agtcookie)["get"](i);}
;p["setCookie"]=function(i,Q){var F=new Date;F["setDate"](F["getDate"]()+7300);Q=encodeURI(Q)+(";     expires="+F["toUTCString"]());document["cookie"]=i+"="+Q;}
;p["getCookie"]=function(i){var Q="",F;F=document["cookie"]["split"]("; ");for(var b=0;b<F.length;b++){var M=void 0,M=F[b]["split"]("=");M[0]===i&&(Q=decodeURI(M[1]));}
return Q;}
;return p;}
(),HashDecorator=function(){function F(i){this["fingerprint"]=i;this["name"]=i["name"];}
F.prototype.getFingerprint=function(){var i=this["fingerprint"]["getFingerprint"]();return this["hash"](i);}
;F.prototype.hash=function(i){if(TsTools["isPrimitive"](i))return crc32Str(i["toString"]());for(var Q in i)i["hasOwnProperty"](Q)&&(i[Q]=this["hash"](i[Q]));return i;}
;return F;}
(),StringfyFormatDecorator=function(){function Q(i){this["fingerprint"]=i;this["name"]=i["name"];this["war"]=new AgentlessEncryption;}
Q.prototype.getFingerprint=function(){var i=this["Stringfy"](this["fingerprint"]),i=this["RemoveTags"](i);return i=this["war"]["encrypt"](i);}
;Q.prototype.Stringfy=function(i){return JSON["stringify"](i["getFingerprint"]());}
;Q.prototype.RemoveTags=function(i){return i?i["replace"](/(<([^>]+)>)/ig,""):"";}
;return Q;}
(),TsTools=function(){function F(){}
F["isPrimitive"]=function(i){var Q=typeof i;return "object"!==Q&&"function"!==Q&&!!i;}
;F["isArray"]=function(i){return i&&"object"===typeof i&&"number"===typeof i.length&&"function"===typeof i["splice"]&&!i["propertyIsEnumerable"]("length");}
;return F;}
(),WarsawManager=function(){function b(){}
b["getWd"]=function(i){var Q=new AgentlessEncryption,F="";"undefined"!==i&&""!==i&&(i=i["_wsIntegration"]["wsResponse"],""!==i["digestNumbers"]&&(F=i["digestNumbers"]),F=Q["encrypt"](F));return F;}
;return b;}
(),BiometricFingerprint=function(){function M(){this["name"]="ar";M["hookhandlers"]();}
M["hookhandlers"]=function(){window["onmousemove"]=M["mouseMoveHandler"];window["onmousedown"]=M["mouseDownHandler"];window["onkeydown"]=M["keyHandler"];window["onkeyup"]=M["keyHandler"];document["addEventListener"]("focusout",M["focusoutHandler"]);setInterval(M["updateMouse"],M["interval"]);}
;M["addEvent"]=function(i){M["events"]["push"](JSON["stringify"](i));}
;M.prototype.getFingerprint=function(){return 0!==M["events"].length?M["events"]:void 0;}
;M["mouse"]=[];M["keyboard"]={}
;M["interval"]=10;M["keyboardHistorySize"]=20;M["mouseHistorySize"]=20;M["startTime"]=(new Date)["getTime"]();M["virtualCodes"]=null;M["events"]=[];M["getVirtualCode"]=function(i){if(!M["virtualCodes"]){M["virtualCodes"]=[];for(var Q=0;1E3>Q;++Q)M["virtualCodes"]["push"](Q);for(var F,b=M["virtualCodes"].length;b;)Q=Math["floor"](Math["random"]()*b),F=M["virtualCodes"][--b],M["virtualCodes"][b]=M["virtualCodes"][Q],M["virtualCodes"][Q]=F;}
return M["virtualCodes"][i];}
;M["keyHandler"]=function(i){if(i=i||window["event"])M["keyboard"][i["type"]]?M["keyboard"][i["type"]].length>=M["keyboardHistorySize"]&&M["keyboard"][i["type"]]["shift"]():M["keyboard"][i["type"]]=[],M["keyboard"][i["type"]]["push"]({tick:i["timeStamp"]-M["startTime"],code:M["getVirtualCode"](i["keyCode"])}
);}
;M["focusoutHandler"]=function(i){M["addEvent"]({tag:i["target"]["tagName"],length:i["target"]?i["target"]["value"]?i["target"]["value"].length:null:null,keyboard:M["keyboard"]}
);}
;M["mouseDownHandler"]=function(i){M["mouseMoveHandler"](i);M["updateMouse"]();M["addEvent"]({tag:i["target"]["tagName"],mouse:M["mouse"]}
);}
;M["mouseMoveHandler"]=function(i){i=i||window["event"];M["mousePos"]={x:i["clientX"],y:i["clientY"]}
;}
;M["updateMouse"]=function(){var i=M["mousePos"];!i||M["lastMousePos"]&&i["x"]===M["lastMousePos"]["x"]&&i["y"]===M["lastMousePos"]["y"]||(M["mouse"].length>=M["mouseHistorySize"]&&M["mouse"]["shift"](),M["mouse"]["push"](i));M["lastMousePos"]=i;}
;return M;}
(),CanvasFingerprint=function(){function b(){this["name"]="";this["encrypt"]=!1;}
b.prototype.getFingerprint=function(){if(this["isCanvasSupported"]()){var i={}
;i["f"]=this["getCanvasFingerprint"]("Arial")["toString"]();i["g"]=this["getCanvasFingerprint"]("")["toString"]();return i;}
return null;}
;b.prototype.isCanvasSupported=function(){var i=document["createElement"]("canvas");return !(!i["getContext"]||!i["getContext"]("2d"));}
;b.prototype.getCanvasFingerprint=function(i){var Q=document["createElement"]("canvas");Q.width=650;Q.height=25;var F=Q["getContext"]("2d");F.textBaseline="top";F.font="16px '"+i+"'";F.textBaseline="alphabetic";F.fillStyle="#f60";F.fillRect(125,1,62,20);F.fillStyle="#069";F.fillText("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,./?[]!~|",2,15);F.fillStyle="rgba(102, 204, 0, 0.7)";F.fillText("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,./?[]!~|",4,17);return Q["toDataURL"]();}
;return b;}
(),CookieFingerprint=function(){function Q(){this["name"]="c";}
Q.prototype.getFingerprint=function(){var i=CookieManager["getPermanentCookie"]("tga");if(i)return i;i=(new Guid)["newGuid"]();CookieManager["setPermanentCookie"]("tga",i);return i;}
;return Q;}
(),CopyPasteFingerprint=function(){function F(){this["name"]="";}
F.prototype.getFingerprint=function(){var i=window["cpd"]||{}
,Q={}
;Q["cc"]=i["cc"];Q["cv"]=i["cv"];Q["cx"]=i["cx"];return Q;}
;return F;}
(),DateTimeFingerprint=function(){function i(){this["name"]="a";}
i.prototype.getFingerprint=function(){return (new Date)["getTime"]()["toString"](16);}
;return i;}
(),DomFingerprint=function(){function Q(){this["name"]="";}
Q.prototype.getFingerprint=function(){var i={}
;i["i"]=navigator["appCodeName"];i["j"]=navigator["appName"];i["k"]=navigator["appVersion"];i["l"]=navigator["cookieEnabled"];i["m"]=navigator["cpuClass"];i["n"]=!!navigator["doNotTrack"];i["o"]=this["hasLocalStorage"]();i["p"]=this["hasSessionStorage"]();i["q"]=!!window["indexedDB"];i["r"]=!!navigator["javaEnabled"]&&navigator["javaEnabled"]();i["s"]=navigator["language"];i["t"]=navigator["onLine"];i["u"]=navigator["platform"];i["v"]=navigator["product"];i["ah"]=(new Date)["getTimezoneOffset"]();i["ai"]=typeof document["body"]["addBehavior"];i["aj"]=typeof window["openDatabase"];i["ak"]=navigator["userAgent"];i["al"]=navigator["vendor"];return i;}
;Q.prototype.hasLocalStorage=function(){try{return !!window["localStorage"];}
catch(i){return !0;}
}
;Q.prototype.hasSessionStorage=function(){try{return !!window["sessionStorage"];}
catch(i){return !0;}
}
;return Q;}
(),FakeFingerprint=function(){function F(){this["name"]="";}
F.prototype.getFingerprint=function(){for(var i=[],Q=0;78>Q;Q++)i[Q]=Array(9)["join"]((Math["random"]()["toString"](36)+"00000000000000000")["slice"](2,18))["slice"](0,8);return i;}
;return F;}
(),FingerprintMethodComposite=function(){function M(){this["name"]="composite";this["methods"]=[];}
M.prototype.addMethod=function(i){this["methods"]["push"](i);return this;}
;M.prototype.getFingerprint=function(){for(var i={}
,Q=0;Q<this["methods"].length;Q++){var F=this["methods"][Q],b=F["getFingerprint"]();this["extendObject"](i,b,F["name"]);}
return i;}
;M.prototype.extendObject=function(i,Q,F){if(TsTools["isPrimitive"](Q)||TsTools["isArray"](Q))i[F]=Q;else for(var b in Q)this["extendObject"](i,Q[b],b);}
;return M;}
(),FontFingerprint=function(){function b(i){this["name"]="am";this["candidateFonts"]=i;this["baseFonts"]=["monospace","sans-serif","serif"];this["testString"]="mmmmmmmmmmlli";this["testSize"]="72px";this["h"]=document["getElementsByTagName"]("body")[0];this["s"]=document["createElement"]("span");this["s"]["style"]["fontSize"]=this["testSize"];this["s"]["innerHTML"]=this["testString"];this["defaultWidth"]={}
;this["defaultHeight"]={}
;for(var Q in this["baseFonts"])this["s"]["style"]["fontFamily"]=this["baseFonts"][Q],this["h"]["appendChild"](this["s"]),this["defaultWidth"][this["baseFonts"][Q]]=this["s"]["offsetWidth"],this["defaultHeight"][this["baseFonts"][Q]]=this["s"]["offsetHeight"],this["h"]["removeChild"](this["s"]);}
b.prototype.getFingerprint=function(){for(var i=[],Q=0;Q<this["candidateFonts"].length;++Q)this["detect"](this["candidateFonts"][Q])&&i["push"](this["candidateFonts"][Q]);return i;}
;b.prototype.detect=function(i){var Q=!1,F;for(F in this["baseFonts"])if(this["s"]["style"]["fontFamily"]=i+","+this["baseFonts"][F],this["h"]["appendChild"](this["s"]),Q=this["s"]["offsetWidth"]!==this["defaultWidth"][this["baseFonts"][F]]||this["s"]["offsetHeight"]!==this["defaultHeight"][this["baseFonts"][F]],this["h"]["removeChild"](this["s"]),Q)break;return Q;}
;return b;}
(),GuidFingerprint=function(){function i(){this["name"]="b";}
i.prototype.getFingerprint=function(){return (new Guid)["newGuid"]();}
;return i;}
(),HistoryFingerprint=function(){function Q(){this["name"]="";}
Q.prototype.getFingerprint=function(){var i={}
;i["af"]=window["history"].length;i["ag"]=window["history"]["state"];return i;}
;return Q;}
(),PluginFingerprint=function(){function c(){this["name"]="an";this["nativeForEach"]=Array.prototype.forEach;this["nativeMap"]=Array.prototype.map;}
c.prototype.getFingerprint=function(){var i=this["getIePluginsString"]();return null==i?this["getPlugins"]():i;}
;c.prototype.getPlugins=function(){return this["map"](navigator["plugins"],function(Q){var F=this["map"](Q,function(i){return i["suffixes"]?i["type"]+i["suffixes"]:i["type"];}
);return Q["name"]+Q["description"]+F;}
,this);}
;c.prototype.getIePluginsString=function(){return window["ActiveXObject"]?this["map"]("ShockwaveFlash.ShockwaveFlash;AcroPDF.PDF;PDF.PdfCtrl;QuickTime.QuickTime;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);RealPlayer;SWCtl.SWCtl;WMPlayer.OCX;AgControl.AgControl;Skype.Detection;dll\u7684\u540d\u5b57;Microsoft.XMLHTTP;Scripting.FileSystemObject;ADODB.Connection;MSXML2.XMLHTTP;WScript.Network;Microsoft.XMLHttp;Gears.Factory;com.sun.star.ServiceManager;JavaPlugin.FamilyVersionSupport;AccessControlEntry;GbPluginObj Class"["split"](";"),function(Q){try{return new ActiveXObject(Q),Q;}
catch(i){return null;}
}
,this)["join"](";"):null;}
;c.prototype.each=function(i,Q,F){if(null!==i)if(this["nativeForEach"]&&i["forEach"]===this["nativeForEach"])i["forEach"](Q,F);else if(i.length===+i.length)for(var b=0,M=i.length;b<M&&Q["call"](F,i[b],b,i)!=={}
;b++);else for(b in i)if(i["hasOwnProperty"](b)&&Q["call"](F,i[b],b,i)==={}
)break;}
;c.prototype.map=function(b,M,p){var s=[];if(null===b)return s;if(this["nativeMap"]&&b["map"]===this["nativeMap"])return b["map"](M,p);this["each"](b,function(i,Q,F){s[s.length]=M["call"](p,i,Q,F);}
);return s;}
;return c;}
(),ScreenFingerprint=function(){function Q(){this["name"]="";}
Q.prototype.getFingerprint=function(){var i={}
;i["w"]=window["screen"]["availHeight"];i["y"]=window["screen"]["availWidth"];i["z"]=window["screen"]["colorDepth"];i["aa"]=window["screen"].height;i["ab"]=window["screen"]["pixelDepth"];i["ac"]=window["screen"].width;i["ad"]=window["screen"]["updateInterval"];return i;}
;return Q;}
(),WebGlFingerprint=function(){function j(){this["name"]="d";this["vertexShaderCode"]="attribute vec3 ppos;attribute vec4 pcolor;letying mediump vec4 forward_color;uniform mat4 mvp;void main(void) {  gl_Position = mvp * vec4(ppos.x, ppos.y, ppos.z, 1.0);  gl_PointSize = 2.0;  forward_color = pcolor;}";this["fragmentShaderCode"]="letying mediump vec4 forward_color;void main(void) {  gl_FragColor = forward_color;}";this["gl"]=null;this["running"]=!0;}
j.prototype.getFingerprint=function(){return this["isWebGLSupported"]()?this["start"]():null;}
;j.prototype.isWebGLSupported=function(){var i=document["createElement"]("canvas");return !(!i["getContext"]||!i["getContext"]("experimental-webgl"));}
;j.prototype.start=function(){var Q=document["createElement"]("canvas");Q.width=240;Q.height=240;try{this["gl"]=Q["getContext"]("experimental-webgl");}
catch(i){return null;}
if(!this["gl"])return null;var F=this["gl"]["createShader"](this["gl"]["FRAGMENT_SHADER"]);this["gl"]["shaderSource"](F,this["fragmentShaderCode"]);this["gl"]["compileShader"](F);if(!this["gl"]["getShaderParameter"](F,this["gl"]["COMPILE_STATUS"]))return null;var b=this["gl"]["createShader"](this["gl"]["VERTEX_SHADER"]);this["gl"]["shaderSource"](b,this["vertexShaderCode"]);this["gl"]["compileShader"](b);if(!this["gl"]["getShaderParameter"](b,this["gl"]["COMPILE_STATUS"]))return null;this["program"]=this["gl"]["createProgram"]();this["gl"]["attachShader"](this["program"],F);this["gl"]["attachShader"](this["program"],b);this["gl"]["linkProgram"](this["program"]);if(!this["gl"]["getProgramParameter"](this["program"],this["gl"]["LINK_STATUS"]))return null;this["gl"]["validateProgram"](this["program"]);if(!this["gl"]["getProgramParameter"](this["program"],this["gl"]["VALIDATE_STATUS"]))return null;this["gl"]["useProgram"](this["program"]);F=this["makeTorus"](.7,.3,15,15,.4);this["vertices"]=F["vertices"];this["colors"]=F["colors"];F=this["gl"]["getAttribLocation"](this["program"],"ppos");if(-1!==F&&(this["gl"]["enableVertexAttribArray"](F),b=this["gl"]["createBuffer"](),this["gl"]["bindBuffer"](this["gl"]["ARRAY_BUFFER"],b),this["gl"]["bufferData"](this["gl"]["ARRAY_BUFFER"],this["vertices"],this["gl"]["STATIC_DRAW"]),this["gl"]["vertexAttribPointer"](F,3,this["gl"]["FLOAT"],!1,0,0),F=this["gl"]["getAttribLocation"](this["program"],"pcolor"),-1!==F))return this["gl"]["enableVertexAttribArray"](F),b=this["gl"]["createBuffer"](),this["gl"]["bindBuffer"](this["gl"]["ARRAY_BUFFER"],b),this["gl"]["bufferData"](this["gl"]["ARRAY_BUFFER"],this["colors"],this["gl"]["STATIC_DRAW"]),this["gl"]["vertexAttribPointer"](F,4,this["gl"]["FLOAT"],!1,0,0),this["aspectRatio"]=Q.width/Q.height,this["draw"](),Q["toDataURL"]();}
;j.prototype.draw=function(){if(this["running"]&&this["gl"]){var i=344*Math["PI"]/360,Q=688*Math["PI"]/360,F=374*Math["PI"]/360,b=this["gl"]["getUniformLocation"](this["program"],"mvp");-1===b?this["running"]=!1:(i=this["getTransformationMatrix"](0,0,0,i,Q,F,.7,1.1,1,-1,this["aspectRatio"],!1),this["gl"]["uniformMatrix4fv"](b,!1,i),this["gl"]["clearColor"](0,0,.5,1),this["gl"]["clear"](this["gl"]["COLOR_BUFFER_BIT"]),this["gl"]["enable"](this["gl"]["DEPTH_TEST"]),this["gl"]["drawArrays"](this["gl"]["TRIANGLE_STRIP"],0,this["vertices"].length/3),this["gl"]["flush"]());}
}
;j.prototype.getTransformationMatrix=function(i,Q,F,b,M,p,s,c,J,z,O,t){var I=Math["cos"](b);b=Math["sin"](b);var U=Math["cos"](M);M=Math["sin"](M);var w=Math["cos"](p);p=Math["sin"](p);if(c<=-z)return new Float32Array([U*w*s/O,U*s*p,-s*M,0,s*(w*b*M-I*p)/O,s*(b*M*p+I*w),U*s*b,0,s*(b*p+I*w*M)/O,s*(I*M*p-w*b),I*U*s,0,s*(w*((-Q*b-I*F)*M-U*i)-(F*b-I*Q)*p)/O,s*(((-Q*b-I*F)*M-U*i)*p+w*(F*b-I*Q)),s*(i*M+U*(-Q*b-I*F)),1]);var E=(z+J+2*c)/(J-z);J=-(c*(2*z+2*J)+2*J*z+2*c*c)/(J-z);return t?new Float32Array([-s*M*E,U*s*p*c,U*w*s*c/O,-s*M,U*s*b*E,s*(b*M*p+I*w)*c,s*(w*b*M-I*p)*c/O,U*s*b,I*U*s*E,s*(I*M*p-w*b)*c,s*(b*p+I*w*M)*c/O,I*U*s,J+(s*(i*M+U*(-Q*b-I*F))+c)*E,s*(((-Q*b-I*F)*M-U*i)*p+w*(F*b-I*Q))*c,s*(w*((-Q*b-I*F)*M-U*i)-(F*b-I*Q)*p)*c/O,s*(i*M+U*(-Q*b-I*F))+c]):new Float32Array([U*w*s*c/O,U*s*p*c,-s*M*E,-s*M,s*(w*b*M-I*p)*c/O,s*(b*M*p+I*w)*c,U*s*b*E,U*s*b,s*(b*p+I*w*M)*c/O,s*(I*M*p-w*b)*c,I*U*s*E,I*U*s,s*(w*((-Q*b-I*F)*M-U*i)-(F*b-I*Q)*p)*c/O,s*(((-Q*b-I*F)*M-U*i)*p+w*(F*b-I*Q))*c,J+(s*(i*M+U*(-Q*b-I*F))+c)*E,s*(i*M+U*(-Q*b-I*F))+c]);}
;j.prototype.makeTorus=function(i,Q,F,b,M){for(var p=[],s=[],c=0;c<F;c++)for(var J=0;J<b+(c===F?0:1);J++)for(var z=0;2>z;z++){var O=2*Math["PI"]*(c+J/b+M*z)/F,t=2*Math["PI"]*J/b,I=void 0,U=void 0,w=void 0;p["push"](I=(i+Q*Math["cos"](t))*Math["cos"](O));p["push"](U=(i+Q*Math["cos"](t))*Math["sin"](O));p["push"](w=Q*Math["sin"](t));s["push"](.5+.5*I);s["push"](.5+.5*U);s["push"](.5+.5*w);s["push"](1);}
return {colors:new Float32Array(s),vertices:new Float32Array(p)}
;}
;return j;}
();