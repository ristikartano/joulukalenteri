const joulufaktat = [
	"Joulukuusi yleistyi Suomessa vasta 1800-luvulla.",
	"Ensimmäiset varmat tiedot joulupukista löytyvät 200-luvulta Pyhä Nikolaoksesta.",
	"Joulukinkku nousi suomalaiskodeissa ykkösruoaksi vasta 1900-luvulla.",
	"Punainen joulupukki vakiintui Coca-Colan mainoksista 1930-luvulla.",
	"Joulunajan tunnetuin kasvi, misteli, on Suomessa rauhoitettu.",
	"Reikiin porattuja joulukuusen koristekiteitä kutsutaan palloiksi vain Suomessa – muualla ne ovat \"baubles\".",
	"Joulurauhan julistus on luettu Turussa 1300-luvulta asti.",
	"Joulutähti-kasvi on kotoisin Meksikosta ja sen väri ei ole kukka vaan lehti.",
	"Joululaulu \"Jingle Bells\" oli alun perin kiitospäivän laulu.",
	"Maailman suurin piparkakkutalo rakennettiin Teksasissa, USA:ssa (yli 1000 m²).",
	"Jouluaatto ei ole Suomessa virallinen pyhäpäivä, vaikka moni luulee niin.",
	"Suomen vanhin joulumarkkina on Turun Vanha Suurtori.",
	"Joulusuklaan suosituin maku Suomessa on maitosuklaa.",
	"Koristevaloissa käytetty LED-tekniikka kuluttaa jopa 90 % vähemmän sähköä kuin vanhat hehkulamput.",
	"Joulupukin virallinen kotiosoite on Korvatunturi.",
	"Elvis Presley teki yhden myydyimmistä joulualbumeista koskaan.",
	"Joululahjojen paketointi yleistyi vasta 1900-luvun lopulla.",
	"Suomessa joulupukilla on viralliset lentoluvat jouluyön reittiin.",
	"Joulutortuissa luumuhillo yleistyi vasta 1900-luvulla – ennen käytettiin omenahilloa.",
	"Piparkakku tuli Suomeen keskiajalla hansakauppiaiden mukana.",
	"Useissa maissa joulupukki kulkee porojen sijasta hevosella tai kamelilla.",
	"Valkoinen joulu on Suomessa keskimäärin vain joka toinen vuosi Etelä-Suomessa.",
	"Ensimmäinen suomalainen joulukortti tehtiin 1800-luvun loppupuolella.",
	"Joulun perinnevalot (kyntteliköt) pohjautuvat vanhoihin kynttiläkransseihin."
];

function voiAvataOven(paiva) {
	let tanaan = new Date();
	let kuukausi = tanaan.getMonth() + 1;
	let paivaNumero = tanaan.getDate();

	if (kuukausi === 12) {
		return paivaNumero >= paiva;
	} else if (kuukausi === 1) {
		return true;
	} else {
		return false;
	}
}

function avaaOviNumero(paiva) {
	if (!voiAvataOven(paiva)) {
		return;
	}

	let oviElementti = document.getElementById("ovi" + paiva);
	if (oviElementti) {
		let fakta = joulufaktat[paiva - 1];
		oviElementti.innerHTML = fakta;
		oviElementti.classList.add("avattu");
	}
}

function naytaKalenteri() {
	let kalenteri = document.getElementById("kalenteri");
	let teksti = "";

	for (let i = 1; i <= 24; i++) {
		let voiAvata = voiAvataOven(i);
		
		if (voiAvata) {
			teksti = teksti + '<div id="ovi' + i + '" class="luukku" onclick="avaaOviNumero(' + i + ')">' + i + '</div>';
		} else {
			teksti = teksti + '<div id="ovi' + i + '" class="luukku ei-avattavissa">' + i + '</div>';
		}
	}

	kalenteri.innerHTML = teksti;
}

naytaKalenteri();

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    snowflake.style.opacity = Math.random();

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 300);
