// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
 console.log("This is child window editgoal.js");
 $.editgoal.open();
 
 var win = Ti.UI.createWindow({
  backgroundColor: 'white',
  exitOnClose: true,
  fullscreen: false,
  title: 'Use picker to make selection'
});
var surah =  [{
 	"name": "al-Fatihah",
 	"count": "7"
 }, {
 	"name": "al-Baqarah",
 	"count": "286"
 }, {
 	"name": "Al-Imran",
 	"count": "200"
 }, {
 	"name": "an-Nisa",
 	"count": "176"
 }, {
 	"name": "al-Maidah",
 	"count": "120"
 }, {
 	"name": "al-Anam",
 	"count": "165"
 }, {
 	"name": "al-Araf",
 	"count": "206"
 }, {
 	"name": "al-Anfal",
 	"count": "75"
 }, {
 	"name": "at-Tawbah",
 	"count": "129"
 }, {
 	"name": "Yunus",
 	"count": "109"
 }, {
 	"name": "Hud",
 	"count": "123"
 }, {
 	"name": "Yusuf",
 	"count": "111"
 }, {
 	"name": "ar-Rad",
 	"count": "43"
 }, {
 	"name": "Ibrahim",
 	"count": "52"
 }, {
 	"name": "al-Hijr",
 	"count": "99"
 }, {
 	"name": "an-Nahl",
 	"count": "128"
 }, {
 	"name": "Al-Isra",
 	"count": "111"
 }, {
 	"name": "al-Kahf",
 	"count": "110"
 }, {
 	"name": "Maryam",
 	"count": "98"
 }, {
 	"name": "Ta Ha",
 	"count": "135"
 }, {
 	"name": "al-Anbiya",
 	"count": "112"
 }, {
 	"name": "al-Hajj",
 	"count": "78"
 }, {
 	"name": "al-Muminun ",
 	"count": "118"
 }, {
 	"name": "an-Nur",
 	"count": "64"
 }, {
 	"name": "al-Furqan",
 	"count": "77"
 }, {
 	"name": "ash-Shuara",
 	"count": "227"
 }, {
 	"name": "an-Naml",
 	"count": "93"
 }, {
 	"name": "al-Qasas",
 	"count": "88"
 }, {
 	"name": "al-Ankabut",
 	"count": "69"
 }, {
 	"name": "ar-Rum",
 	"count": "60"
 }, {
 	"name": "Luqman",
 	"count": "34"
 }, {
 	"name": "as-Sajdah",
 	"count": "30"
 }, {
 	"name": "al-Ahzab",
 	"count": "73"
 }, {
 	"name": "Saba",
 	"count": "54"
 }, {
 	"name": "Fatir",
 	"count": "45"
 }, {
 	"name": "YaSin",
 	"count": "83"
 }, {
 	"name": "as-Saffat",
 	"count": "182"
 }, {
 	"name": "Sad",
 	"count": "88"
 }, {
 	"name": "az-Zumar",
 	"count": "75"
 }, {
 	"name": "Ghafir",
 	"count": "85"
 }, {
 	"name": "Fussilat",
 	"count": "54"
 }, {
 	"name": "ash-Shura",
 	"count": "53"
 }, {
 	"name": "az-Zukhruf",
 	"count": "89"
 }, {
 	"name": "ad-Dukhan",
 	"count": "59"
 }, {
 	"name": "al-Jathiyah",
 	"count": "37"
 }, {
 	"name": "al-Ahqaf",
 	"count": "35"
 }, {
 	"name": "Muhammad",
 	"count": "38"
 }, {
 	"name": "al-Fath",
 	"count": "29"
 }, {
 	"name": "al-Hujurat",
 	"count": "18"
 }, {
 	"name": "Qaf",
 	"count": "45"
 }, {
 	"name": "ad-Dhariyat",
 	"count": "60"
 }, {
 	"name": "at-Tur",
 	"count": "49"
 }, {
 	"name": "an-Najm",
 	"count": "62"
 }, {
 	"name": "al-Qamar",
 	"count": "55"
 }, {
 	"name": "ar-Rahman",
 	"count": "78"
 }, {
 	"name": "al-Waqiah",
 	"count": "96"
 }, {
 	"name": "al-Hadid",
 	"count": "29"
 }, {
 	"name": "al-Mujadilah",
 	"count": "22"
 }, {
 	"name": "al-Hashr",
 	"count": "24"
 }, {
 	"name": "al-Mumtahanah",
 	"count": "13"
 }, {
 	"name": "as-Saff",
 	"count": "14"
 }, {
 	"name": "al-Jumuah",
 	"count": "11"
 }, {
 	"name": "al-Munafiqun",
 	"count": "11"
 }, {
 	"name": "at-Taghabun",
 	"count": "18"
 }, {
 	"name": "at-Talaq",
 	"count": "12"
 }, {
 	"name": "at-Tahrim",
 	"count": "12"
 }, {
 	"name": "al-Mulk",
 	"count": "30"
 }, {
 	"name": "al-Qalam",
 	"count": "52"
 }, {
 	"name": "al-Haqqah",
 	"count": "52"
 }, {
 	"name": "al-Maarij",
 	"count": "44"
 }, {
 	"name": "Nuh",
 	"count": "28"
 }, {
 	"name": "al-Jinn",
 	"count": "28"
 }, {
 	"name": "al-Muzammil",
 	"count": "20"
 }, {
 	"name": "al-Mudathir",
 	"count": "56"
 }, {
 	"name": "al-Qiyamah",
 	"count": "40"
 }, {
 	"name": "al-Insan",
 	"count": "31"
 }, {
 	"name": "al-Mursalat",
 	"count": "50"
 }, {
 	"name": "an-Naba",
 	"count": "40"
 }, {
 	"name": "an-Naziat",
 	"count": "46"
 }, {
 	"name": "`Abasa",
 	"count": "42"
 }, {
 	"name": "at-Takwir",
 	"count": "29"
 }, {
 	"name": "al-Infitar",
 	"count": "19"
 }, {
 	"name": "Al-Mutaffifeen",
 	"count": "36"
 }, {
 	"name": "al-Inshiqaq",
 	"count": "25"
 }, {
 	"name": "al-Buruj",
 	"count": "22"
 }, {
 	"name": "at-Tariq",
 	"count": "17"
 }, {
 	"name": "al-A`la",
 	"count": "19"
 }, {
 	"name": "al-Ghashiya",
 	"count": "26"
 }, {
 	"name": "al-Fajr",
 	"count": "30"
 }, {
 	"name": "al-Balad",
 	"count": "20"
 }, {
 	"name": "ash-Shams",
 	"count": "15"
 }, {
 	"name": "al-Layl",
 	"count": "21"
 }, {
 	"name": "ad-Duha",
 	"count": "11"
 }, {
 	"name": "ash-Sharh",
 	"count": "8"
 }, {
 	"name": "at-Tin",
 	"count": "8"
 }, {
 	"name": "al-`Alaq",
 	"count": "19"
 }, {
 	"name": "al-Qadr",
 	"count": "5"
 }, {
 	"name": "al-Bayyinah",
 	"count": "8"
 }, {
 	"name": "Az-Zalzala",
 	"count": "8"
 }, {
 	"name": "al-`Adiyat",
 	"count": "11"
 }, {
 	"name": "al-Qari`ah",
 	"count": "11"
 }, {
 	"name": "at-Takathur",
 	"count": "8"
 }, {
 	"name": "al-`Asr",
 	"count": "3"
 }, {
 	"name": "al-Humazah",
 	"count": "9"
 }, {
 	"name": "al-Fil",
 	"count": "5"
 }, {
 	"name": "al-Quraish",
 	"count": "4"
 }, {
 	"name": "al-Ma`un",
 	"count": "7"
 }, {
 	"name": "al-Kawthar",
 	"count": "3"
 }, {
 	"name": "al-Kafirun",
 	"count": "6"
 }, {
 	"name": "an-Nasr",
 	"count": "3"
 }, {
 	"name": "Al-Masad",
 	"count": "5"
 }, {
 	"name": "al-Ikhlas",
 	"count": "4"
 }, {
 	"name": "al-Falaq",
 	"count": "5"
 }, {
 	"name": "an-Nas",
 	"count": "6"
 }];

var Page = [
	["1","1"],
	//Al-Baqarah first-ayats-on-page
	["1", "6", "17", "25", "30", "38", "49", "58",
	"62", "70", "77", "84", "89", "94", "102", "106", 
	"113", "120", "127", "135", "142", "146", "154", "164", 
	"170", "177", "182", "187", "191", "197", "203", "211", 
	"216", "220", "225", "231", "234", "238", "246", "249",
	"253", "257", "260", "265", "270", "275", "282", "283"
	], 
	//Al-Imran first-ayats-on-page
	["3","1"],
	["3","10"],
	["3","16"],
	["3","23"],
	["3","30"],
	["3","38"],
	["3","46"],
	["3","53"],
	["3","62"],
	["3","71"],
	["3","78"],
	["3","84"],
	["3","92"],
	["3","101"],
	["3","109"],
	["3","116"],
	["3","122"],
	["3","133"],
	["3","141"],
	["3","149"],
	["3","154"],
	["3","158"],
	["3","166"],
	["3","174"],
	["3","181"],
	["3","187"],
	["3","195"],
	["4","1"],
	["4","7"],
	["4","12"],
	["4","15"],
	["4","20"],
	["4","24"],
	["4","27"],
	["4","34"],
	["4","38"],
	["4","45"],
	["4","52"],
	["4","60"],
	["4","66"],
	["4","75"],
	["4","80"],
	["4","87"],
	["4","92"],
	["4","95"],
	["4","102"],
	["4","106"],
	["4","114"],
	["4","122"],
	["4","128"],
	["4","135"],
	["4","141"],
	["4","148"],
	["4","155"],
	["4","163"],
	["4","171"],
	["4","176"],
	["5","3"],
	["5","6"],
	["5","10"],
	["5","14"],
	["5","18"],
	["5","24"],
	["5","32"],
	["5","37"],
	["5","42"],
	["5","46"],
	["5","51"],
	["5","58"],
	["5","65"],
	["5","71"],
	["5","77"],
	["5","83"],
	["5","90"],
	["5","96"],
	["5","104"],
	["5","109"],
	["5","114"],
	["6","1"],
	["6","9"],
	["6","19"],
	["6","28"],
	["6","36"],
	["6","45"],
	["6","53"],
	["6","60"],
	["6","69"],
	["6","74"],
	["6","82"],
	["6","91"],
	["6","95"],
	["6","102"],
	["6","111"],
	["6","119"],
	["6","125"],
	["6","132"],
	["6","138"],
	["6","143"],
	["6","147"],
	["6","152"],
	["6","158"],
	["7","1"],
	["7","12"],
	["7","23"],
	["7","31"],
	["7","38"],
	["7","44"],
	["7","52"],
	["7","58"],
	["7","68"],
	["7","74"],
	["7","82"],
	["7","88"],
	["7","96"],
	["7","105"],
	["7","121"],
	["7","131"],
	["7","138"],
	["7","144"],
	["7","150"],
	["7","156"],
	["7","160"],
	["7","164"],
	["7","171"],
	["7","179"],
	["7","188"],
	["7","196"],
	["8","1"],
	["8","9"],
	["8","17"],
	["8","26"],
	["8","34"],
	["8","41"],
	["8","46"],
	["8","53"],
	["8","62"],
	["8","70"],
	["9","1"],
	["9","7"],
	["9","14"],
	["9","21"],
	["9","27"],
	["9","32"],
	["9","37"],
	["9","41"],
	["9","48"],
	["9","55"],
	["9","62"],
	["9","69"],
	["9","73"],
	["9","80"],
	["9","87"],
	["9","94"],
	["9","100"],
	["9","107"],
	["9","112"],
	["9","118"],
	["9","123"],
	["10","1"],
	["10","7"],
	["10","15"],
	["10","21"],
	["10","26"],
	["10","34"],
	["10","43"],
	["10","54"],
	["10","62"],
	["10","71"],
	["10","79"],
	["10","89"],
	["10","98"],
	["10","107"],
	["11","6"],
	["11","13"],
	["11","20"],
	["11","29"],
	["11","38"],
	["11","46"],
	["11","54"],
	["11","63"],
	["11","72"],
	["11","82"],
	["11","89"],
	["11","98"],
	["11","109"],
	["11","118"],
	["12","5"],
	["12","15"],
	["12","23"],
	["12","31"],
	["12","38"],
	["12","44"],
	["12","53"],
	["12","64"],
	["12","70"],
	["12","79"],
	["12","87"],
	["12","96"],
	["12","104"],
	["13","1"],
	["13","6"],
	["13","14"],
	["13","19"],
	["13","29"],
	["13","35"],
	["13","43"],
	["14","6"],
	["14","11"],
	["14","19"],
	["14","25"],
	["14","34"],
	["14","43"],
	["15","1"],
	["15","16"],
	["15","32"],
	["15","52"],
	["15","71"],
	["15","91"],
	["16","7"],
	["16","15"],
	["16","27"],
	["16","35"],
	["16","43"],
	["16","55"],
	["16","65"],
	["16","73"],
	["16","80"],
	["16","88"],
	["16","94"],
	["16","103"],
	["16","111"],
	["16","119"],
	["17","1"],
	["17","8"],
	["17","18"],
	["17","28"],
	["17","39"],
	["17","50"],
	["17","59"],
	["17","67"],
	["17","76"],
	["17","87"],
	["17","97"],
	["17","105"],
	["18","5"],
	["18","16"],
	["18","21"],
	["18","28"],
	["18","35"],
	["18","46"],
	["18","54"],
	["18","62"],
	["18","75"],
	["18","84"],
	["18","98"],
	["19","1"],
	["19","12"],
	["19","26"],
	["19","39"],
	["19","52"],
	["19","65"],
	["19","77"],
	["19","96"],
	["20","13"],
	["20","38"],
	["20","52"],
	["20","65"],
	["20","77"],
	["20","88"],
	["20","99"],
	["20","114"],
	["20","126"],
	["21","1"],
	["21","11"],
	["21","25"],
	["21","36"],
	["21","45"],
	["21","58"],
	["21","73"],
	["21","82"],
	["21","91"],
	["21","102"],
	["22","1"],
	["22","6"],
	["22","16"],
	["22","24"],
	["22","31"],
	["22","39"],
	["22","47"],
	["22","56"],
	["22","65"],
	["22","73"],
	["23","1"],
	["23","18"],
	["23","28"],
	["23","43"],
	["23","60"],
	["23","75"],
	["23","90"],
	["23","105"],
	["24","1"],
	["24","11"],
	["24","21"],
	["24","28"],
	["24","32"],
	["24","37"],
	["24","44"],
	["24","54"],
	["24","59"],
	["24","62"],
	["25","3"],
	["25","12"],
	["25","21"],
	["25","33"],
	["25","44"],
	["25","56"],
	["25","68"],
	["26","1"],
	["26","20"],
	["26","40"],
	["26","61"],
	["26","84"],
	["26","112"],
	["26","137"],
	["26","160"],
	["26","184"],
	["26","207"],
	["27","1"],
	["27","14"],
	["27","23"],
	["27","36"],
	["27","45"],
	["27","56"],
	["27","64"],
	["27","77"],
	["27","89"],
	["28","6"],
	["28","14"],
	["28","22"],
	["28","29"],
	["28","36"],
	["28","44"],
	["28","51"],
	["28","60"],
	["28","71"],
	["28","78"],
	["28","85"],
	["29","7"],
	["29","15"],
	["29","24"],
	["29","31"],
	["29","39"],
	["29","46"],
	["29","53"],
	["29","64"],
	["30","6"],
	["30","16"],
	["30","25"],
	["30","33"],
	["30","42"],
	["30","51"],
	["31","1"],
	["31","12"],
	["31","20"],
	["31","29"],
	["32","1"],
	["32","12"],
	["32","21"],
	["33","1"],
	["33","7"],
	["33","16"],
	["33","23"],
	["33","31"],
	["33","36"],
	["33","44"],
	["33","51"],
	["33","55"],
	["33","63"],
	["34","1"],
	["34","8"],
	["34","15"],
	["34","23"],
	["34","32"],
	["34","40"],
	["34","49"],
	["35","4"],
	["35","12"],
	["35","19"],
	["35","31"],
	["35","39"],
	["35","45"],
	["36","13"],
	["36","28"],
	["36","41"],
	["36","55"],
	["36","71"],
	["37","1"],
	["37","25"],
	["37","52"],
	["37","77"],
	["37","103"],
	["37","127"],
	["37","154"],
	["38","1"],
	["38","17"],
	["38","27"],
	["38","43"],
	["38","62"],
	["38","84"],
	["39","6"],
	["39","11"],
	["39","22"],
	["39","32"],
	["39","41"],
	["39","48"],
	["39","57"],
	["39","68"],
	["39","75"],
	["40","8"],
	["40","17"],
	["40","26"],
	["40","34"],
	["40","41"],
	["40","50"],
	["40","59"],
	["40","67"],
	["40","78"],
	["41","1"],
	["41","12"],
	["41","21"],
	["41","30"],
	["41","39"],
	["41","47"],
	["42","1"],
	["42","11"],
	["42","16"],
	["42","23"],
	["42","32"],
	["42","45"],
	["42","52"],
	["43","11"],
	["43","23"],
	["43","34"],
	["43","48"],
	["43","61"],
	["43","74"],
	["44","1"],
	["44","19"],
	["44","40"],
	["45","1"],
	["45","14"],
	["45","23"],
	["45","33"],
	["46","6"],
	["46","15"],
	["46","21"],
	["46","29"],
	["47","1"],
	["47","12"],
	["47","20"],
	["47","30"],
	["48","1"],
	["48","10"],
	["48","16"],
	["48","24"],
	["48","29"],
	["49","5"],
	["49","12"],
	["50","1"],
	["50","16"],
	["50","36"],
	["51","7"],
	["51","31"],
	["51","52"],
	["52","15"],
	["52","32"],
	["53","1"],
	["53","27"],
	["53","45"],
	["54","7"],
	["54","28"],
	["54","50"],
	["55","17"],
	["55","41"],
	["55","68"],
	["56","17"],
	["56","51"],
	["56","77"],
	["57","4"],
	["57","12"],
	["57","19"],
	["57","25"],
	["58","1"],
	["58","7"],
	["58","12"],
	["58","22"],
	["59","4"],
	["59","10"],
	["59","17"],
	["60","1"],
	["60","6"],
	["60","12"],
	["61","6"],
	["62","1"],
	["62","9"],
	["63","5"],
	["64","1"],
	["64","10"],
	["65","1"],
	["65","6"],
	["66","1"],
	["66","8"],
	["67","1"],
	["67","13"],
	["67","27"],
	["68","16"],
	["68","43"],
	["69","9"],
	["69","35"],
	["70","11"],
	["70","40"],
	["71","11"],
	["72","1"],
	["72","14"],
	["73","1"],
	["73","20"],
	["74","18"],
	["74","48"],
	["75","20"],
	["76","6"],
	["76","26"],
	["77","20"],
	["78","1"],
	["78","31"],
	["79","16"],
	["80","1"],
	["81","1"],
	["82","1"],
	["83","7"],
	["83","35"],
	["85","1"],
	["86","1"],
	["87","16"],
	["89","1"],
	["89","24"],
	["91","1"],
	["92","15"],
	["95","1"],
	["97","1"],
	["98","8"],
	["100","10"],
	["103","1"],
	["106","1"],
	["109","1"],
	["112","1"],
	["115","1"]
];

//This new variable is going to be used in the pickers, so users can start with any surah
var ayatChoices = [
	//0 Al-Fatihah
  ["1"],
  //1
	["1", "6", "17", "25", "30", "38", "49", "58",
	"62", "70", "77", "84", "89", "94", "102", "106", 
	"113", "120", "127", "135", "142", "146", "154", "164", 
	"170", "177", "182", "187", "191", "197", "203", "211", 
	"216", "220", "225", "231", "234", "238", "246", "249",
	"253", "257", "260", "265", "270", "275", "282", "283"
	],
  //2
	//Al-Imran first-ayat-on-page
	["1", "10", "16", "23", "30", "38", "46", "53",
	"62", "71", "78", "84", "92", "101", "109", "116",
	"122", "133", "141", "149", "154", "158", "166", "174",
	"181", "187", "195"],
  //3
	//an-Nisa first-ayat-on-page
	["1", "7", "12", "15", "20", "24", "27", "34", "38",
	"45", "52", "60", "66", "75", "80", "87", "92", "95",
	"102", "106", "114", "122", "128", "135", "141", "148",
	"155", "163", "171", "176"],
  //4
	//al-Maidah first-ayat-on-page
	["5","3", "6", "10", "14", "18", "24", "32", "37", "42",
	"46", "51", "58", "65", "71", "77", "83", "90", "96",
	"104", "109", "114"],
  //5
	//al-Anam first-ayat-on-page
	["6","1", "9", "19", "28", "36", "45", "53", "60", "69",
	"74", "82", "91", "95", "102", "111", "119", "125", "132",
	"138", "143", "147", "152", "158"],
  //6
	//al-Araf first-ayat-on-page
	["7", "1", "12", "23", "31", "38", "44", "52", "58", "68", "74",
     "82", "88", "96", "105", "121", "131", "138", "144", "150", "156",
     "160", "164", "171", "179", "188", "196"],
  //7
    ["8", "1", "9", "17", "26", "34", "41", "46", "53", "62", "70"],
  //8
    //al-Anfal
	["9", "1", "7", "14", "21", "27", "32", "37", "41", "48", "55", 
     "62", "69", "73", "80", "87", "94", "100", "107", "112", "118",
     "123"],
  //9
	["10", "1", "7", "15", "21", "26", "34", "43", "54", "62", "71",
     "79", "89", "98", "107"],
  //10
	["11", "6", "13", "20", "29", "38", "46", "54", "63", "72", "82",
     "89", "98", "109", "118"],
  //11
	["12", "5", "15", "23", "31", "38", "44", "53", "64", "70", "79",
     "87", "96", "104"],
  //12
	["13", "1", "6", "14", "19", "29", "35", "43"],
  //13
	["14","6", "11", "19", "25", "34", "43"],
  //14
	["15","1", "16", "32", "52", "71", "91"],
  //15
	["16", "7", "15", "27", "35", "43", "55", "65", "73", "80", 
    "88", "94", "103", "111", "119"],
  //16
	["17", "1", "8", "18", "28", "39", "50", "59", "67", "76", "87", 
     "97", "105"],
  //17
	["18", "5", "16", "21", "28", "35", "46", "54", "62", "75", "84", "98"],

	["19", "1", "12", "26", "39", "52", "65", "77", "96",],
	
	["20", "13", "38", "52", "65", "77", "88", "99", "114", "126",],
	
	["21", "1", "11", "25", "36", "45", "58", "73", "82", "91", "102"],
	
	["22", "1", "6", "16", "24", "31", "39", "47", "56", "65", "73"],
	
	["23", "1", "18", "28", "43", "60", "75", "90", "105"],
	
	["24", "1", "11", "21", "28", "32", "37", "44", "54", "59", "62"],
	
	["25", "3", "12", "21", "33", "44", "56", "68"],
	
	["26", "1", "20", "40", "61", "84", "112", "137", "160", "184", "207"],
	
	["27", "1", "14", "23", "36", "45", "56", "64", "77", "89"],
	
	["28", "6", "14", "22", "29", "36", "44", "51", "60", "71", "78", "85"],
	
	["29", "7", "15", "24", "31", "39", "46", "53", "64"],
	
	["30", "6", "16", "25", "33", "42", "51"],
	
	["31", "1", "12", "20", "29"],
	
	["32", "1", "12", "21"],
	
	["33", "1", "7", "16", "23", "31", "36", "44", "51", "55", "63"],
	
	["34", "1", "8", "15", "23", "32", "40", "49"],
	
	["35", "4", "12", "19", "31", "39", "45"],
	
	["36", "13", "28", "41", "55", "71"],
	
	["37", "1", "25", "52", "77", "103", "127", "154"],
	
	["38", "1", "17", "27", "43", "62", "84"],
	
	["39", "6", "11", "22", "32", "41", "48", "57", "68", "75"],
	
	["40", "8", "17", "26", "34", "41", "50", "59", "67", "78"],
	
	["41", "1", "12", "21", "30", "39", "47"],
	
	["42", "1", "11", "16", "23", "32", "45", "52"],
	
	["43", "11", "23", "34", "48", "61", "74"],
	
	["44", "1", "19", "40"],
	
	["45", "1", "14", "23", "33"],
	
	["46","6", "15", "21", "29"],
	
	["47", "1", "12", "20", "30"],
	
	["48", "1", "10", "16", "24", "29"],
	
	["49", "5", "12"],
	
	["50","1", "16", "36"],
	
	["51","7", "31", "52"],
	
	["52", "15", "32"],
	
	["53","1", "27", "45"],
	
	["54", "7", "28", "50"],
	
	["55", "17", "41", "68"],
	
	["56", "17", "51", "77"],
	
	["57", "4", "12", "19", "25"],
	
	["58", "1", "7", "12", "22"],
	
	["59", "4", "10", "17"],
	
	["60", "1", "6", "12"],
	
	["61","6"],
  
	["62","1", "9"],
	
	["63","5"],
  
	["64","1", "10"],
	
	["65","1", "6"],
	
	["66","1", "8"],
	
	["67", "1", "13", "27"],
	
	["68","16", "43"],
	
	["69","9", "35"],
	
	["70","11", "40"],
	
	["71","11"],
  
	["72","1", "14"],
	
	["73","1", "20"],
	
	["74","18", "48"],
	
	["75","20"],
  
	["76","6", "26"],
	
	["77","20"],
  
	["78","1", "31"],
  
	["79","16"],
  
	["80","1"],
  
	["81","1"],
  
	["82","1"],
  
	["83","7", "35"],
  
	["85","1"],
  
	["86","1"],
  
	["87","16"],
  
	["89","1", "24"],
  
	["91","1"],
  
	["92","15"],
  
	["95","1"],
  
	["97","1"],
  
	["98","8"],
  
	["100","10"],
  
	["103","1"],
  
	["106","1"],
  
	["109","1"],
  
	["112","1"],
  
	["115","1"]
];
var column1 = Ti.UI.createPickerColumn();

for(var i=0, ilen=surah.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
    title: surah[i].name
    });
  column1.addRow(row);
};

var column2 = Ti.UI.createPickerColumn();

/*for(var i=0, ilen=Page.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
    title: Page[i][1]
  });
  column2.addRow(row);
};*/

var surahpicker = Ti.UI.createPicker({
  columns: [column1],
  selectionIndicator: true,
  useSpinner: true, // required in order to use multi-column pickers with Android
  top:37.5,
  height: 100,
  width: 200,
  right: 5
});

/***var ayahpicker = Ti.UI.createPicker({
	//columns: [column2],
  	selectionIndicator: true,
 	useSpinner: true, // required in order to use multi-column pickers with Android
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	*/

surahpicker.addEventListener("change",function(e){
	console.log("surahChange: JSON.stringify(e): "+JSON.stringify(e));
	var surahname = e.row.title;
	surahvalue.text = surahname;
	
	// set for ayah picker	
for(j=0; j<surah.length; j++){
		if(surah[j].name == surahvalue.text)
		{var count = surah[j].count;}
		console.log("surahChange: count: "+count);
		};

if (surahname == "al-Fatihah") {
	console.log(Page[0][1]);
	
	var fatihahPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, // required in order to use multi-column pickers with Android
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	fatihahPickerColumn = Ti.UI.createPickerColumn();

	for (var i = 0; i <= Page.length; i++) {
		var fatihahAyahRow = Ti.UI.createPickerRow();
		var fatihahLabel = Ti.UI.createLabel({
			text: Page[0][i]
		});
	fatihahAyahRow.add(fatihahLabel);	
	fatihahPickerColumn.addRow(fatihahAyahRow);
	}
	fatihahPicker.add(fatihahPickerColumn);
	win.add(fatihahPicker);
	
} else if (surahname == "al-Baqarah") {
	//console.log("Baqarah");
	var baqarahPicker = Ti.UI.createPicker({
	//columns: [column2],
  	selectionIndicator: true,
 	useSpinner: true, // required in order to use multi-column pickers with Android
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var baqarahPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var baqarahAyahRow = Ti.UI.createPickerRow();
		/****I am going to see if using a label inside of the row will allow me to display all
		 * the verse numbers in that specific surah. The Page variable contains many arrays of
		 * different surah and the last ayat on the pages. I want this Picker to display all ayats.*****/
		var baqarahLabel = Ti.UI.createLabel({
	    text: Page[1][i]
	  });
  	baqarahAyahRow.add(baqarahLabel);
	baqarahPickerColumn.addRow(baqarahAyahRow);	
	}
	baqarahPicker.add(baqarahPickerColumn);
	win.add(baqarahPicker);
	
} else if (surahname == "Al-Imran") {
	var baqarahPicker = Ti.UI.createPicker({
	//columns: [column2],
  	selectionIndicator: true,
 	useSpinner: true, // required in order to use multi-column pickers with Android
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var baqarahPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var baqarahAyahRow = Ti.UI.createPickerRow();
		var baqarahLabel = Ti.UI.createLabel({
	    text: Page[1][i]
	  });
  	baqarahAyahRow.add(baqarahLabel);
	baqarahPickerColumn.addRow(baqarahAyahRow);	
	}
	baqarahPicker.add(baqarahPickerColumn);
	win.add(baqarahPicker);
};


	
	/*
	
	var ayahPickerColumn = Ti.UI.createPickerColumn();
		if (count != "0") { //!="0" means count is not equal to zero
		for(var i=1; i<=count ; i++){
		  	var rowAyahNumber = Ti.UI.createPickerRow({
		   		title: i
		   		 ///""\""+i+"\"" 
		   	})};
		   	};*/
});



 /* for (var p = 0; p < Page.length; p++) {
        console.log();
    
    if (surah[i] === Page[p]) {
    			console.log('Match: ' + surah[i].name);
				}
    }*/



/*
function loadAyahPicker(k) {
	
	var ayahPickerColumn = Ti.UI.createPickerColumn();
		if (count != "0") { //!="0" means count is not equal to zero
		for(var i=1; i<=count ; i++){
		  	var rowAyahNumber = Ti.UI.createPickerRow({
		   		title: i;})
		   	
		   		}}
		else (ayahPickerColumn >= 1);
		{ayahPickerColumn.removeRow(rowAyahNumber)};
		{ayahpicker.add(ayahPickerColumn);
		ayahPickerColumn.addRow(rowAyahNumber);
		};
		
	ayahpicker.show();
		}
		};
				

ayahpicker.addEventListener("change", function(a){
	console.log("ayahChange: JSON.stringify(a): "+ JSON.stringify(a));
	ayahvalue.text = a.row.title;
	
	/*{ayahpicker.add(ayahPickerColumn);
		ayahPickerColumn.addRow(rowAyahNumber);
		};
		ayahpicker.show();*/
		
		
	//ayahlabeladdpicker = "1";

	/*if(rowAyahNumber >= 1) {ayahpicker.remove(column2);
		};
	ayahpicker.hide();
	rowAyahNumber = 0;
		  	//rowAyahNumber.hide()
		 
		 	});
	
*/
/*ayahpicker.addEventListener("change", function(a){
	console.log("ayahChange: JSON.strin gify(a): "+ JSON.stringify(a));
	ayahvalue.text = a.row.title;});*/

var ayahvalue = Ti.UI.createLabel({
	text: "Ayah: ",
	top: 250,
	left: Ti.UI.Center
});
	
/*	
for(j=0;j<surah.length;j++){
	if(surah[j].name == surahname)
	{ var count = surah[j].count}};	
	console.log("surahChange: count: "+count);

*/

	
/*function pickerDefaults(obj){
  // on iOS, must be after picker has been rendered
  surahpicker.setSelectedRow(0, true);
  surahpicker.setSelectedRow(0, true);
}*/

var surahvalue = Ti.UI.createLabel({
	text: "Surah:",
	top: 250,
	left: 85
});



	
win.add(surahpicker);
//win.add(ayahpicker);
win.add(surahvalue);
win.add(ayahvalue);


var isAndroid = Ti.Platform.osname === 'android';

/*if(isAndroid){
  pickerDefaults(surahpicker);
}*/

win.open();

if(!isAndroid){
  setTimeout(function(){
    /*pickerDefaults(surahpicker);*/
  }, 1500);
};



function goBack(s){
	console.log("settings.js: check goback: "+JSON.stringify(s));
	var settingsController = Alloy.createController('settings').getView();
	$.editgoal.open(settingsController);
};
/*function pickerBlur(b){
	console.log("see if picker blurs:" +JSON.stringify(b));
	var surahpicker = Alloy.createPicker('surahpicker').show();
	$.surahpicker.blur();
}*/// Didn't work
 


/*
///if ayahpicker = 1, "do nothing". if ayahpciker = 0 "launch picker"

$.surahpicker.addEventListener("change",function(e){
	console.log("surahChange: JSON.stringify(e): "+JSON.stringify(e));
	var surahname = e.row.title;
	$.surahvalue.text = surahname;
	
	// set for ayah picker	
	for(j=0;j<surah.length;j++){
		if(surah[j].name == surahname){ var count = surah[j].count;}		
	}
	console.log("surahChange: count: "+count);
	var column2 = Ti.UI.createPickerColumn();
	if (count != "0") { //!="0" means count is not equal to zero
		for(var i=1;i<=count; i++){
		  	var rowAyahNumber = Ti.UI.createPickerRow({
		   		title: "\""+i+"\""
		 	});
		  	column2.addRow(rowAyahNumber);
		}
	
	 
	$.ayahpicker.add(column2);
  	$.ayahlabel.addEventListener("click",function(e){
  		console.log("surahChange: ayahlabel: JSON.stringify(e): "+JSON.stringify(e));
  		$.surahpicker.hide();		
		$.ayahpicker.show();
		});		
	};


	$.ayahpicker.addEventListener("change",function(e){
	console.log("ayahChange: JSON.stringify(e): "+JSON.stringify(e));
	$.ayahvalue.text = e.row.title;
	});

});

$.surahpicker.on("focus", function focus () {
  surahpicker.show();
});
$.ayahpicker.show();
$.pagepicker.hide();

surahlabeladdpicker = "0";
$.surahlabel.addEventListener("click",function(e){
	console.log("surahlabel: surahlabeladdpicker: "+surahlabeladdpicker);
	if(surahlabeladdpicker == "0") {$.surahpicker.add(column1);
		};
	$.surahpicker.show();
	surahlabeladdpicker = "1";
});
ayahlabeladdpicker = "0";
$.ayahlabel.addEventListener("click", function(a){
	console.log("ayahlabel: ayahlabeladdpicker: "+ayahlabeladdpicker);
	if(ayahlabeladdpicker =="0") {$.ayahpicker.add(column2);
		};
	$.ayahpicker.show();
	ayahlabeladdpicker ="1";

	if(ayahlabeladdpicker == "1") {$.ayahpicker.remove(column2);
		};
	$.ayahpicker.hide();
	//ayahlabeladdpicker ="0";
	
});


*/

////GoalPicker.add([column1, column2]);
//goalWin.add(GoalPicker);
