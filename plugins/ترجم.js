import translate from '@vitalets/google-translate-api'
const defaultLang = 'ar'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `
 Miku-BOT 
         

🔊 مثال :

.ترجم ar مرحبا
.ترجم ar hallo world

المتاح في القائمه
                   اللغات: 


عربي: ar   
الأفريكانية:	af
الألبانية:	sq
الأمهرية:	am
الأرمينية:	hy
الأسامية: 	as
ايمارا	: ay
أذربيجاني: 	az
يرتدونها: 	bm
الباسك:	eu
البيلاروسية:	be
البنغالية:	bn
البهوجبرية	: bho
البوسنية: 	bs
البلغارية:	bg
الكاتالونية:	ca
السيبيونو:	ceb
كورسيكية:	co
الكرواتية:	hr
التشيكية:	cs
دانماركي:	da
الديفيهي:	dv
دوجري:	doi
هولندي:	nl
إنجليزي:	en
الاسبرانتو:	eo
الإستونية:	et
نعجة	ee:
الفلبينية: (التاغالوغية)	fil
الفنلندية:	fi
فرنسي	:fr
الفريزية:	fy
الجاليكية:	gl
الجورجية:	ka
ألمانية:  de
اليونانية: 	el
الغواراني: 	gn
الغوجاراتية:	gu
الكريولية الهايتية:	ht
الهوسا: 	ha
هاواي:	haw
اللغة العبرية:	 heأوiw
الهندية :	hi
همونغ:	hmn
المجرية:	hu
الأيسلندية: 	is
الإيغبو: 	ig
ايلوكانو:	ilo
الاندونيسية: 	id
الأيرلندية:	ga
ايطالي:	it
اليابانية:	ja
الجاوية:	jvأوjw
الكانادا: 	kn
الكازاخستانية:	kk
الخمير: 	km
الكينيارواندية: 	rw
الكونكانية: 	gom
الكورية:	ko
كريو: 	kri
كردي:	 ku
الكردية (السورانية)	: ckb
قيرغيزستان :	ky
لاو: 	lo
اللاتينية:	la
لاتفيا :	lv
اللينجالا:	ln
الليتوانية:	lt
إنجليزي:	lg
اللوكسمبرجية:	lb
المقدونية:	mk
مايثيلي:	mai
مدغشقر: 	mg
لغة الملايو : ms
المالايالامية:	ml
المالطية	:mt
الماوري:	mi
المهاراتية	: mr
ميتيلون (مانيبوري)	:  mni-Mtei
إنجليزي: 	lus
المنغولية	mn
ميانمار (البورمية)	my
النيبالية	ne
النرويجية	no
نيانجا (الإنجليزية)	ny
أوديا (الأوريا)	or
الأورومو	om
الباشتو	ps
اللغة الفارسية	fa
تلميع	pl
البرتغالية (البرتغال، البرازيل)	pt
البنجابية	pa
الكيشوا	qu
روماني	ro
الروسية	ru
ساموا	sm
السنسكريتية	sa
الغيلية الاسكتلندية	gd
السيبيدية	nso
الصربية	sr
إنجليزي	st
شونا	sn
السندية	sd
السنهالية (السنهالية)	si
السلوفاكية	sk
السلوفينية	sl
الصومالية	so
الأسبانية	es
السودانية	su
السواحلية	sw
السويدية	sv
التاغالوغية (الفلبينية)	tl
الطاجيكية	tg
التاميل	ta
التتار	tt
التيلجو	te
التايلاندية	th
التغرينية	ti
تسونجا	ts
اللغة التركية	tr
التركمان	tk
توي (ويل)	ak
الأوكرانية	uk
الأردية	ur
الأويغور	ug
الأوزبكية	uz
الفيتنامية	vi
تهرب من دفع الرهان	cy
خوسا	xh
اليديشية	yi
اليوروبا	yo
الزولو	zu
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       m.reply(result.text)
    } catch (e) {
        throw err
    } 

}
handler.help = ['trad <leng> <text>']
handler.tags = ['tools']
handler.command = ['tl', 'ترجم']

export default handler