var normal = document.getElementById("nav-menu");
var reverse = document.getElementById("nav-menu-left");

var icon = normal !== null ? normal : reverse;

// Toggle the "menu-open" % "menu-opn-left" classes
function toggle() {
	  var navRight = document.getElementById("nav");
	  var navLeft = document.getElementById("nav-left");
	  var nav = navRight !== null ? navRight : navLeft;

	  var button = document.getElementById("menu");
	  var site = document.getElementById("wrap");
	  
	  if (nav.className == "menu-open" || nav.className == "menu-open-left") {
	  	  nav.className = "";
	  	  button.className = "";
	  	  site.className = "";
	  } else if (reverse !== null) {
	  	  nav.className += "menu-open-left";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	  } else {
	  	  nav.className += "menu-open";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	    }
	}

// Ensures backward compatibility with IE old versions
function menuClick() {
	if (document.addEventListener && icon !== null) {
		icon.addEventListener('click', toggle);
	} else if (document.attachEvent && icon !== null) {
		icon.attachEvent('onclick', toggle);
	} else {
		return;
	}
}

// A prose that I don't want to be seen by everyone but still want in the site.

var pag = `
---
layout: post
title:  "Pagan"
date:   2019-02-01
---

Merhaba Pagan, bir çılgınlık yapmazsam okumayacağın bu yazıyı senin için yazıyorum. Seninle tanışma şeklimiz, konuşmaya başlama şeklimiz ve muhtemelen sevişme isteğimiz çok garip gelişti. Zaten hepsi bir günde geliştiği için garip olmaması ihtimali yoktu sanırım. Ne yapsak, ne söylesek ve hatta ne istesek garip olacaktı. Keşke birlikte bir şarap içme ihtimalimiz olsaydı.

Tinder'da seni gördüm, anında bir superlike attım ve oraya yazdığın diğer tek mecradan seni ekledim, Discord'dan. Dota oynuyormuşsun, sanırım anime seviyorsun ve biraz da rock ve metal müzik. Daha sonra Tinder hesabımı sildim ve hayatıma gayet normal bir şekilde devam ettim. Ta ki sen benim isteğimi kabul edene kadar. Açık olacağım, her zaman olduğum gibi, fotoğraflarından inanılmaz etkilenmiştim ve açıkcası hiç eşleşeceğimizi düşünmedim. Ama yine de bir gazla sana yazma kararı verdim. E tabi yazdım da, birkaç gün sonra cevap verdin bana, ben de sana birkaç gün sonra. Böyle devam eden bu süreçte hiç seninle geldiğimiz son aşamaya geleceğimizi tahmin etmezdim. Cool çocuğu oynamaya çalışmadım hiç sana karşı. Ne de olsa tanımadığım biriydin ve benim hakkımda ne düşündüğünü, çok açık bir şekilde, umursamıyordum. Discord uygulamam bildirim göndermediği için, hala göndermiyor, senden istediğim başka sosyal medya adreslerinden hiçbirini alamadım, numaranı da vermek istemedim sonuçta kimliği belirsiz biriydim. Bu davranışını takdir ediyorum, bence doğru olandı. Senelerdir kullanmadığım Snapchat uygulamasını sırf sen kullanıyorsun diye yükledim. Sırf seninle konuşmak adına... 

Benden "rumuz" istedin, hatırlamam gerekti, tahmin etmem lazımdı aslında. Zaten her yerde aynı ismi kullanıyordum. Rumuzumu aldıktan sonra gelen istekle birkaç mesaj gönderdik birimize ve sanıyorum muhabbet daha fazla uzamadı. Birkaç gün sonra tekrar mesaj attım çünkü senden etkilenmiştim, cevap almadım. Sonra bir daha, yeter bu kadarı taciz miydi? Sanmıyorum. Konuşmak istemediğin zaman söylemen yeterliydi bu zamana kadar kimseye zarar vermemiştim, sana da verecek değildim. Birkaç gün sonra bir mesaj daha, buna cevap aldım. Kısa bir cevap ve sana yine cevap verdim, yine cevap alamadım. Uzun bir süre, seninle konuşmalarımız hep bir hafta arayla oldu. Kimi zaman keşke Pagan bir şeyler söylese dediğim bir hafta, kimi zaman aklıma bile gelmediğin bir hafta. Zaten seninle toplam bir ay kadar konuştuk ama bana sorarsan toplam konuştuk diyebileceğim kısım sadece son iki gün. Zira diğerleri konuşmaktan çok haftada bir cevap vermekti. Boşanmaya yakın evli bir çift gibiydik, zorunda değildik ama ayıp olmasın diye cevap veriyorduk. Yani senin öyle yaptığını düşünüyorum çünkü ben her seferinde daha çok düşünüp, heyecanla cevap veriyordum. Yaşadığım iki uzun sayılabilecek başarısız ilişki ve bunların ikisini de bitiren bir crush'ım olduğu için psikolojik olarak bir kadına yakınlaşma konusunda fazla hazır hissetmiyordum. Kendimi partnerim olacak insanlar yanında da fazla rahat hissetmiyordum, zaten yeni birini tanımaya da üşeniyordum. Bunda en büyük suçun toplum olduğunu düşünüyorum. Birini cinsel olarak tanımanın şart olduğunu ve eğer kişiler birbirini cinsel olarak tanımazsa bir birlikteliğin çok uzun süremeyeceğini düşünenlerdenim. Açıkcası cinsel zevklerimin uyuşmadığı ve yatakta tanımadığım bir insanla birlikte olmak da istemem. Call me hard. Ben sadece bana uygun birini bulmak istiyorum. Aradan bir süre daha geçti, hiç konuşmadığımız kısa bir süre ve bu sırada ben bütünleme sınavlarıma girmeye okula geldim. Ders çalışacak ve kalan derslerimin hepsini geçecektim. Tek başıma zaten başarılı olamazdım. Fazla zorlamadım.

Bir gece ben uyuduktan on dakika sonra bir bildirim gelmiş, saat kaçta uyuduğumu biliyorum çünkü her zaman yatağa girmeden önce saate bakarım. Bildirimi sabah gördüm, sabah cevap verdim. Ben cevap verdiğimde sabahtı, sen uyandığında öğlen. O gün arkadaşlarımla, mesleğimizi icra etmeye, şarap içmeye gidiyorduk. Telefonum çaldı, tuvaletteydim ya, açamadım. Snapchat'te arama özelliği mi varmış?! İlk defa görmüştüm, telefona benzeyen ikona tıkladım ve bekledim. Kimse açmadı, çalması bittiği gibi yeniden çalmaya başladı. Sen arıyordun. İlk konuşmamızı sanırım hayatım boyunca unutmayacağım, gerçekten eğlendim. Senin hakkında birçok bilgi edindim. Bazıları gerekli, bazıları gereksiz. Bana kalsa hepsi iyi bilgilerdi. Ben gayet memnundum, sana birkaç tavsiye verdim. Hala da arkasındayım. Tuzla, çok uzak. Daha sonra benden telefon numaramı istedin. İstemedin, sordun. "Alabilir miyim?", "Bakarız." Buna daha troll bir cevap veremezdim ama ne yapayım zaten seninle haberleşiyorduk ve telefon numarası çok da önemli bir şey değildi. O gün seninle konuşmamı ve "ilgilenmemi" istedin. Söz vermiş olmasam bütün gün hiç sıkılmadan seninle konuşabilirdim. Konuşma şeklin, açık sözlülüğün, gayet rahatça küfür edebilmen açıkcası benim hoşuma gitmişti. Tatlıydı, hoştu. Sen "Sürekli Dizi" izlemeye gittin ben de dışarı çıktım, telefon kapandı. Ama emindim, Snapchat konuşmaları devam edecekti, ve açık konuşayım, etmesini de istiyordum. Bizimkilerin yanına vardığım zaman senden iki mesaj geldi:

-"Burak"

-Photo

Emin ol bu cesaretin beni gerçekten çok etkiledi. Ardından bir tane daha:

-Photo

-"Burak, neden oradasın?"

Cevap verdim, "Orospu çocuğu S****n yüzünden." Gerçekten de öyleydi orada olmamın tek bir sebebi vardı. Bahsettiğim sebep.

Ardından bir mesaj daha geldi:

-Video

-"Hiçbir şey hissetmiyor musun?"

Yine cevap verdim, "Sence ben robot muyum? Tabii ki bir şeyler hissediyorum."


Açık olayım, senden en başından beri hoşlanmamın en büyük sebeplerinden biri açık sözlü olmandı ve şimdi bu cesaretin beni gerçekten daha da etkilemişti. Senin gibi biri ile tanışmak kolay değil. Gerçekten ileri görüşlü olduğunu düşünüyorum. Bazı şeyleri aştığını düşünüyorum. Ya da umursamadığını. Kim bilir belki de böyle davranıyorsun çünkü farklı görünmek istiyorsun diye düşünüyorum ama hayır, sen zaten farklıydın besbelli ortada bu canım. Anlamak seninle konuşunca çok zor olmuyor. Cesaretin beni gerçekten çok etkiledi. Bu süreçte birkaç kez beni davet ettin ve sordun, "İstanbul'a dönünce o zaman, söz mü?" Anladığım kadarıyla benim senin kişiliğini ve açık sözlülüğünü sevdiğim gibi sen de bende benzeri şeyleri sevmiştin. En azından bana öyle söyledin. Akşam oldu, sarhoştum, açıkcası seninle de konuşmak istiyordum. Sana attığım mesajdan sonra, neyse ki, sen de cevap verdin ve bir sohbet başladı. Snapchat'i kullanması biraz zordu, açıkcası ben de çok hoşnut değildim zaten o uygulamadan. Kullanması çok zor. Discord'dan mesaj attığını söyledin. Oraya baktım ve muhabbet buradan devam etti. Sanırım birbirimizi en çok tanıdığımız yer bu konuşmaydı. Sabah için üzgün ve utangaçtın, olma, çünkü gerçekten takdire şayan bir davranış bu. Ayrıca istediğin şeyleri paylaşmak senin elinde. Kimse sana bir şey diyemez, kimse seni yargılayamaz. Ben yargılamadım en azından. Hala da yargılamıyorum seni. Biraz konuştuk, bana aklımdan çıkmayan bir şey söyledin, "Bana sapık gibi davranmıyorsun, çok garip, başka biri olsa şu an farklı şeyler isteyebilirdi." Ve bunlardan biraz sonra "Çok tatlısın." Duygularımızı bu şekilde korkusuzca ifade etmek harika bir şeydi. Galiba gerçekten rahattım. Sonra uykun geldiğini söyledin. Sonraki gün sınavım olduğu için beni uyandırıcağını da söyledin. Teşekkür ederim.


"İyi geceler Coni"

"İyi geceler Pagan"


Sabah telefonum çaldı, belli baya uykuluydun, yanlışlıkla kendini susturmuşsun. Sonra telefon kapandı. Ben uyanmıştım, tebrikler Pagan, bir puan daha. E tabi ben sana telefon numaramı sonradan verdim ama sen bana daha vermemiştin. Seni geri aradım, konuşmak istedim ama başaramadık. Tam bir uykucusun. Kalktım, duş aldım, üzerimi değiştirdim ve yavaştan sınava doğru yola çıktım. Okula vardım, sınava girdim ve şu an yurt dışında olan bir arkadaşım için Uluslararası İlişkilere gittim. Yeni uyanmıştın, dün beni aradığın saate çok yakın bir saatte beni aradın, telefonu açtım ama meşguldüm, olabildiğince cevap verdim sana ve bütün puanlarımı silen o cümleyi söyledim. "Şu an Uluslararası İlişkilerdeyim ve işim var biraz az sonra arayayım mı seni?" Evli bir çift olmadığımızı unutmuşum, kusuruma bakma. "Neyse arama, gerek yok." Bana bir süre için çok kötü duygular yaşatan o cümle. Anında sana olan ulaşımımı her yerden engelledin. İşim bittikten sonra seni aradım ama açmadın, bir yandan da rahatsız etmek istemiyordum seni, on dakika sonra bir daha aradım.


-"Alo, efendim, önemli bir şey söylüyor musun? Hayır mı?"

-"Kalbim kırıldı."

-"Umrumda değil."


Sonrasında seni aramaya çalıştım ama maalesef sanırım çoktan kaybetmiştim ya da kaybetmiştik, bu konudaki düşüncelerini bilmiyorum. Hareketlerinden gerçekten hoşlanmıştım Pagan, keşke görüşebilseydik. Seninle vakit geçirme şansınız olsaydı, kim bilir belki de bu güne kadar kimsenin eğlenmediği kadar çok eğlenirdik. Belki de şu an seni bu satırlara gömüyor olmazdım. Kalbim biraz kırık, biraz da sarhoş sayılırım. "Kadrolu şarapçılığımı" yaptım. Aklıma bunları yazmak geldi. Her neyse eğer bir gün ucuz şarap, kötü sex veya boş muhabbet istersen eğer ~~numarama~~ sahipsin. 

`

function paga() {
	console.log(pag)
}

menuClick();

console.log("to see it, type the word.")