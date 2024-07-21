/* ---------------------------------- */
/*              STRINGLER             */
/* ---------------------------------- */

// Strıng tanımlama
const str1 = "merhaba"
const str2 = "nasılsın"

console.log(typeof(str1));

// String constructor ile string oluşturma
const str3 =  new String("World")
console.log(typeof(str3));

const str4 = "" 

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.

let kelime = "clarusway"
for(let i=0; i<9; i++){
    console.log(kelime[i]);
}

kelime[7] = "o"
console.log(kelime);

//! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur

//? lenght
//Prototype

//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

/* ---------------------------------- */
/*           length property          */
/* ---------------------------------- */

const metin = "var mı istnabul'dan güzeli"
console.log(metin.length);
const keli = "yavuz rasim"
console.log(keli.length);

//! ************STRING METHODS ************
// String metodları () kullanılır. 
// Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================


console.log(metin.toLowerCase());
console.log(metin.toUpperCase());

let metin1 = metin.toLowerCase()
console.log(metin1);

/* ---------------------------------- */
/*       String birleştrime yönt      */
/* ---------------------------------- */

//+ ile
//concat ile 
//template literal ile (``)

let text1 = "Merhaba"
let text2 = "Millet"
console.log(text1+" "+text2);

let text ="Merhaba"
text += " Cocuklar"
console.log(text);

//concat immutable
const str5 = "Mola saati"
const str6 = " yaklaşıyor"
console.log(str5.concat(str6));

const nexstr = str5.concat(str6)
console.log(nexstr);

// template literal (``)
// ES6 ile tanıtılan bu yöntem, backtick işareti (`) kullanarak string birleştirmeyi kolaylaştırır ve değişkenleri doğrudan string içinde kullanmanıza olanak tanır.

let s1 = "merhaba"
let s2 = "Dünya"
console.log(`${s1} Burak; ${s2} bizim`);
// let isim = prompt("adınınzı giriniz:")
// console.log(`${s1} Burak; ${s2} bizim,${isim} ${s1}`);

// Klasik backtik olmadan birden fazla satır
console.log("Merhaba")
console.log("      ")
console.log("Dünya")

// Template literal (backtik) birden fazla satır
console.log(`${str5} Clarusway , 

    ${str5} 
    
    ${str6} `)

const yeniDeger=`${str5} Clarusway, 


${str5} 


${str6}`

console.log(yeniDeger.length)





//! String Parçalama Metodları
//split()
//substring()
//substr()
//slice()

// *=========================================================
// *                 split() immutable
// *=========================================================
// Stringi belirtilen şekilde parçalara ayırır ve parçalarını bir diziye aktarır
// str.split(seperator) 
// saparator : ayraç
// Parçaladığı elemanları bir diziye aktarır.

let metin2 = "İnsan ne acayip"
console.log(metin2.split("")); 

let parcalımetin = metin2.split(" ")
console.log(parcalımetin[2]);
console.log(parcalımetin);

for(let i=0; i<parcalımetin.length;i++){
    if(parcalımetin[i]==="ne"){
        console.log(`"ne" var`)
    }
}


let date = "10.07.2024"
console.log(date.split("."));

/* ---------------------------------- */
/*             Join Metodu            */
/* ---------------------------------- */
// String metodu değildir
// Javascript dilinde join metodu, biz dizi elemanı string olarak birleştirir. Join metodu dizi (array) alarak bunu virgül gibi bir karakter ile ayırarak string'e dönüştürür.
console.log(parcalımetin.join("/"));


/* ---------------------------------- */
/*           Reverse Metodu           */
/* ---------------------------------- */
// String metodu değildir
// reverse methodu ile bir diziyi tersine çevirebilmekteyiz. Dizi içerisindeki ilk değeri son, Son değeri ise ilk sıraya şeklinde sıralayabilmekteyiz.

// Bir kelimeyi tersten yazdıran program
//önce split ile veriyi diziy eçeviririz sonra reverse uygulanır. reverse direk olarak springe uygulanmaz:
let kelime1 = "Merhaba"
console.log(kelime1.split("").reverse().join());


let sent = "oku da adam ol"
console.log(sent.split("").reverse().join());
console.log(sent.split(" ").reverse().join(" "));



//polindrom
let cumle = "ey edip adanada pide ye"
let cumle2 = cumle.split("").reverse().join("");
console.log(cumle===cumle2 ? "polindrom" : "değil");

/* ---------------------------------- */
/*                slice               */
/* ---------------------------------- */
//! Slice Metodu
//? String içinde bir bölümü almak için kullanılır.
// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir)). sadece tek değere girilirse bu kalanın tamamını al demektir.


let cumle3 = "Merhaba insanlar"
console.log(cumle3.slice(8,16));
console.log(cumle3.slice(7 ));
console.log(cumle3);

// negatif değer verilerek geriye doğru değer verilebilir

console.log(cumle3.slice(-8,-2));

// *=========================================================
// *               substring
// *=========================================================
//! substring(başlangıç index numarası,bitiş index numarası) 
//Slicedan farkı negatif sayı kullanılmaz

console.log(cumle3.substring(12,17))

// *=========================================================
// *               substr
// *=========================================================
//! substr(başlangıç index numarası,kaç adet karakter alınacağı)

console.log(cumle3.substr(8,8))

/* ---------------------------------- */
/*    String içinde arama işlemler    */
/* ---------------------------------- */
// includes, indexOf, search ,match  metodlarını kullanabiliriz

// includes, indexOf, search ,match  metodlarını kullanabiliriz
// *=========================================================
// *               includes
// *=========================================================
//? includes()   ... yı içeriyor mu -> true yada false bir değer döndürür.
//? caseSensitive bir özelliktir.

const kelime4 = "to be or not to be, that is the question"
console.log(kelime4.includes("To"));
console.log(kelime4.toUpperCase().includes("THE"));

const kelime5="to be or not To be, that is The  questions."
console.log(kelime5.toUpperCase().includes("TO BE"))

const kelime6 = "Eve gelirken, 5 ekmek al"
console.log(kelime6.toLowerCase().includes("eve"));

//Bir site adresi güvenlimi değilmi kontrolü
// https : s secure

let url = "https evde.com"
console.log(url.includes("https"));
let msj = url.includes("https") ? "bu site güvenli" : "güvenli değil"
console.log(msj);

// *=========================================================
// *               indexOf
// *=========================================================
//? indexOf (aranacak metin, konum) Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir. Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir

console.log(kelime5.indexOf("be"));
console.log(kelime6.indexOf("at"));

// *=========================================================
// *               search
// *=========================================================

//? search() bir string içindeki aranan elemanın ilk index numarsını yazar. Bulamazsa -1 dönderir.
// Büyük küçük harfe duyarlıdır. 
console.log(kelime5.search("be"));

//!REGEX- regular expression 
// Regex regular expression denir. Bunların yazım stili / işaretiyledir.

// Flags Kullanımı
// Düzenli ifadelerde çeşitli bayraklar kullanarak aramayı değiştirebiliriz:

// g : Global arama
// i : Büyük/küçük harf duyarsız arama

console.log(kelime6.search(/G/i)); 

let kelime7 = "KüçüK"
console.log(kelime7.search(/[A-Z]/));  
console.log(kelime7.search(/[a-z]/));  // türkçe karakteri görmedi
console.log(kelime6.search(/[0-9]/));
console.log(kelime6.search(/[,]/));

// ^   olmayanlar 
console.log(kelime7.search(/[^A-Z]/)); // türkçe karakteri gördü. büyük harf olmayanı bul demek

// *=========================================================
// *               match
// *=========================================================
//?match metodu, bir dize içindeki bir düzenli ifadeye (RegEx) uyan kısımları bulur ve bir dizi olarak döner.
// Bir dizi dönderir

let phone= "My phone number is 123-456-7890";

let result=phone.match(/\d+/g)

console.log(result)


let text3 = "Contact us at support@example.com or sales@example.com";
let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
let emails = text3.match(emailPattern);
console.log(emails)

// *=========================================================
// *               startsWith(), endsWith() -- case sensitive
// *=========================================================
// startsWith :.. ile başlıyormu (True , false)
// endsWith :.. ile başlıyormu (True , false)
console.log(phone.startsWith("m"))

//!Stringde Değişiklik yapma 

// *=========================================================
// *               Replace -immutable
// *=========================================================
let text7 = "Merhaba Dünya, Dünya bizim için değerli"
let yeniText = text7.replace("Dünya","Gelecek!")
console.log(text7);
console.log(yeniText);
console.log(text7.replaceAll("Dünya","Gelecek"));

// *=========================================================
// *               Trim
// *=========================================================
//? baş ve sondaki boşlukları kaldırmak için => trim

let metin3 = "   BAYDAR     "
console.log(metin3.trim());

console.log("clarusway".endsWith("Way"));

let str = "Once a day";
let index = str.indexOf("a")
let index2 = str.lastIndexOf("a")
console.log(index);
console.log(index2);
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));
console.log(str.indexOf("a",index + 1) === index2);
















// let kel = "baydar"  OLMADI
// for(let i = length.kel; i>=0; i--)
//     console.log(kel[i]);

