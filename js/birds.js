let isRepeatBirds1 = true;
let typeLerning = "sounds"
let repeatBirds1 = [];
let repeatBirds2 = [];

const birds = [
	{
		nazwa: "Bogatka",
		nazwaENG: "Great Tit",
		nazwaLat: "Parus major",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Great_tit_side-on.jpg/1024px-Great_tit_side-on.jpg",
		autorJPG:
			"Francis C. Franklin, / CC-BY-SA-3.0, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=35923539",
		spiew: [
			"xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC941807-Kj%C3%B8ttmeis-XC-3--Refsaltjernet--Stange--Elias-A.-Ryberg20200420082752_096.mp3",

			"xeno-canto.org/sounds/uploaded/RGSEIIJGHA/XC944764-GreatTiT_RoodKlooster_241102_3948_edited.mp3",

			"xeno-canto.org/sounds/uploaded/QOTPSPWUVH/XC949406-Topmejse-48-2024-11-11-birdnet-13_55_52_filt.mp3",
		],
		autorzyDzwiekow: ["Elias A. Ryberg", "Bram Piot", "Steen Knarberg"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "sikory",
	},
	{
		nazwa: "Kos",
		nazwaENG: "Blackbird",
		nazwaLat: "Turdus merula",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%B4%D1%80%D0%BE%D0%B7%D0%B4_%28Turdus_merula%2C_mas%29%2C_%D0%91%D0%B8%D1%82%D1%86%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BB%D0%B5%D1%81.jpg/1024px-%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%B4%D1%80%D0%BE%D0%B7%D0%B4_%28Turdus_merula%2C_mas%29%2C_%D0%91%D0%B8%D1%82%D1%86%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BB%D0%B5%D1%81.jpg",
		autorJPG:
			"Dion Art, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=129779688",
		spiew: [
			"xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC949876-Svarttrost-XC-%C3%98vre-Rindal-utvalg-5-Elias-A.Ryberg20240618112336_003.mp3",
			"xeno-canto.org/sounds/uploaded/YHOCFQHBDL/XC950864-Blackbird.2024.11.04%281845%29.Sweetwater.F3%2BBP4025.mp3",
			"xeno-canto.org/sounds/uploaded/PRVFBYIQYZ/XC955326-turdus-merula-5-hide-pinzon-real-02-01-2020.mp3",
		],
		autorzyDzwiekow: ["Elias A. Ryberg", "David Boyle", "Esperanza Poveda"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "drozdowate",
	},
	{
		nazwa: "Raniuszek",
		nazwaENG: "Long-tailed Tit",
		nazwaLat: "Aegithalos caudatus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Aegithalos_caudatus_Apley_2.jpg/1024px-Aegithalos_caudatus_Apley_2.jpg",
		autorJPG:
			"David Friel, England - Long-tailed Tit #2, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=8924528",
		spiew: [
			"xeno-canto.org/sounds/uploaded/FFFADKCCII/XC572456-ltt-D62.mp3",
			"xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC524302-AB-213%20raniuszek%20super%20%282%29.mp3",
		],
		autorzyDzwiekow: ["Simon Elliott", "Jarek Matusiak"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "raniuszki",
	},
	{
		nazwa: "Rudzik",
		nazwaENG: "European Robin",
		nazwaLat: "Erithacus rubecula",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Erithacus_rubecula_with_cocked_head.jpg/1024px-Erithacus_rubecula_with_cocked_head.jpg",
		autorJPG: "Francis C. Franklin, / CC-BY-SA-3.0, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=31367900",
		spiew: [
			"xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC946409-Erithacus-rubecula-ssp-1015_081932-3-2-AA.mp3",
			"xeno-canto.org/sounds/uploaded/SDXDGURYIO/XC954699-29.9.2024-Pettirosso-ticchettio-LOUD.mp3"],
		autorzyDzwiekow: ["Albert Lastukhin","Luca Baghino"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "muchołówkowate",
	},
	{
		nazwa: "Gil",
		nazwaENG: "Eurasian Bullfinch",
		nazwaLat: "Pyrrhula pyrrhula",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/26_Gramm_etwa_wiegt_ein_Dompfaff_M%C3%A4nnchen._17.jpg/1024px-26_Gramm_etwa_wiegt_ein_Dompfaff_M%C3%A4nnchen._17.jpg",
		autorJPG: "Holger Uwe Schmitt, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=106327940",
		spiew: [
			"xeno-canto.org/sounds/uploaded/NKTQOAXTXA/XC903136-Bouvreuilpivoine_22042024_tourbi%C3%A8redefrasne-18h-chant.mp3",
			"xeno-canto.org/sounds/uploaded/NKTQOAXTXA/XC903130-Bouvreuilpivoine_21042024_for%C3%AAtsdurisoux-13h-chant.mp3"
		],
		autorzyDzwiekow: ["Corentin Rivière","	Corentin Rivière"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "łuszczakowate",
	},
	{
		nazwa: "Modraszka",
		nazwaENG: "Eurasian Blue Tit",
		nazwaLat: "Cyanistes caeruleus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Blue_tit_-_Cyanistes_caeruleus1.jpg/1024px-Blue_tit_-_Cyanistes_caeruleus1.jpg",
		autorJPG: "caroline legg, - https://www.flickr.com/photos/128941223@N02/53467604726/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=144126431",
		spiew: [
			"xeno-canto.org/sounds/uploaded/LHCOINSOBZ/XC936541-240929_0076Ferreiri%C3%B1o-calls--10.30-sisalde.mp3",
			"xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC928264-JAREK-MATUSIAK-A-2170-modraszka.mp3"],
		autorzyDzwiekow: ["Jacobo Ramil Millarengo","Jarek Matusiak"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "sikory",
	},
	{
		nazwa: "Kawka",
		nazwaENG: "Western Jackdaw",
		nazwaLat: "Coloeus monedula",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Kawka_Nowa_S%C3%B3l.jpg/1024px-Kawka_Nowa_S%C3%B3l.jpg",
		autorJPG: "Anna Czarnecka, CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=146027390",
		spiew: [
			"xeno-canto.org/sounds/uploaded/WKUHMYUJSN/XC904570-05-08-2024_7h25_choucas-des-tours.mp3",
			"xeno-canto.org/sounds/uploaded/JCPKCBKKAQ/XC899039-CORMON_240412_4067_Peysines31.mp3"],
		autorzyDzwiekow: ["Martin Billard","Olivier SWIFT"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "krukowate",
	},
	{
		nazwa: "Sikora uboga",
		nazwaENG: "Marsh Tit",
		nazwaLat: "Poecile palustris",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Parus_palustris02.jpg",
		autorJPG: "Sławek Staszczuk, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1550036",
		spiew: [
			"xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC913905-L%C3%B8vmeis-XC--1-Rindalsskogen-Elias-A.Ryberg20240616213443_069.mp3",
			"xeno-canto.org/sounds/uploaded/CQARALZBNN/XC896673-Entita-Idebo-240417_1615.mp3"],
		autorzyDzwiekow: ["Elias A. Ryberg","Magnus Wadstein"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "sikory",
	},
	{
		nazwa: "Czarnogłówka",
		nazwaENG: "Willow Tit",
		nazwaLat: "Poecile montanus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Willow_Tit_Lancashire.jpg/1024px-Willow_Tit_Lancashire.jpg",
		autorJPG: "Francis C. Franklin, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=37730399",
		spiew: [
			"xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC949799-Granmeis-3-XC-Nes-Ringsaker--Elias-A.Ryberg20241118134607_043.mp3",
			"xeno-canto.org/sounds/uploaded/DUUYLLTNQS/XC893812-M%C3%A9sange-bor%C3%A9ale-sous-esp%C3%A8ce-montanus-Bois-Sagni%C3%A8res-avril-24-10h45.mp3"],
		autorzyDzwiekow: ["Elias A. Ryberg", "Falco"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "sikory",
	},
	{
		nazwa: "Sosnówka",
		nazwaENG: "Coal Tit",
		nazwaLat: "Periparus ater",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Periparus_ater_%2826205653537%29.jpg/1024px-Periparus_ater_%2826205653537%29.jpg",
		autorJPG: "xulescu_g - Periparus ater, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=67805725",
		spiew: [
			"xeno-canto.org/sounds/uploaded/LHCOINSOBZ/XC941462-241012_08-Periparus-ater-song-10.30-Sisalde.mp3",
			"xeno-canto.org/sounds/uploaded/LKSFUYYSUK/XC926975-150414_10B-Svartmes-kungsf%C3%A5gel-tr%C3%A4dkrypare-talgoxe.mp3"],
		autorzyDzwiekow: ["Jacobo Ramil Millarengo","Ulf Elman"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "sikory",
	},
	{
		nazwa: "Czubatka",
		nazwaENG: "Crested Tit",
		nazwaLat: "Lophophanes cristatus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Lophophanes_cristatus_Luc_Viatour_2.jpg/1024px-Lophophanes_cristatus_Luc_Viatour_2.jpg",
		autorJPG: "Luc Viatour, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=5582176",
		spiew: ["xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC926922-Tofsmes_33.mp3"],
		autorzyDzwiekow: ["Lars Edenius"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "sikory",
	},
	{
		nazwa: "Wrona siwa",
		nazwaENG: "Hooded Crow",
		nazwaLat: "Corvus cornix",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Corvus_cornix_-Egypt-8.jpg/1024px-Corvus_cornix_-Egypt-8.jpg",
		autorJPG: "Bob - Picasa Web Albums, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=12368453",
		spiew: [
			"xeno-canto.org/sounds/uploaded/GIFBPTEXWL/XC955798-20241213_LSP5_0267_08_54_54.mp3","xeno-canto.org/sounds/uploaded/GIFBPTEXWL/XC949290-20241115_001_H1e_08_44_49.mp3"],
		autorzyDzwiekow: ["Johannes Worona","Johannes Worona"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "krukowate",
	},
	{
		nazwa: "Gawron",
		nazwaENG: "Rook",
		nazwaLat: "Corvus frugilegus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Corvus_frugilegus_2.jpg/1024px-Corvus_frugilegus_2.jpg",
		autorJPG: "Rafał Komorowski, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=3203876",
		spiew: [
			"xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC944398-saatkr1209.mp3",
			"xeno-canto.org/sounds/uploaded/XIBLXHRPJO/XC929215-corfru-vbo-S4A10222_20240808_061202.mp3"],
		autorzyDzwiekow: ["Bodo Sonnenburg","Uku Paal"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "krukowate",
	},
	{
		nazwa: "Kruk",
		nazwaENG: "Northern Raven",
		nazwaLat: "Corvus corax",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Corvus_corax_%28NPS%29.jpg/1024px-Corvus_corax_%28NPS%29.jpg",
		autorJPG: "National Park Service - www.nps.gov, Domena publiczna, https://commons.wikimedia.org/w/index.php?curid=119884",
		spiew: [
			"xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC943245-JAREK-MATUSIAK-A-2251-kruk-w-locie.mp3",
			"xeno-canto.org/sounds/uploaded/ZQJCLMBULK/XC952842-626967069.mp3"],
		autorzyDzwiekow: ["Jarek Matusiak","Scott Crabtree"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "krukowate",
	},
	{
		nazwa: "Kwiczoł",
		nazwaENG: "Fieldfare",
		nazwaLat: "Turdus pilaris",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fieldfare_on_branch.jpg/1024px-Fieldfare_on_branch.jpg",
		autorJPG: "hedera.baltica, Poland - Fieldfare, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=90343161",
		spiew: [
			"xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC936737-Bj%C3%B6rktrast_35.mp3",
			"xeno-canto.org/sounds/uploaded/LKSFUYYSUK/XC841670-160604_07A-sel-Bj%C3%B6rktrast.mp3"],
		autorzyDzwiekow: ["Lars Edenius", "Ulf Elman"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "drozdowate",
	},
	{
		nazwa: "Czajka",
		nazwaENG: "Northern Lapwing",
		nazwaLat: "Vanellus vanellus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flickr_-_Rainbirder_-_Lapwing_%28Vanellus_vanellus%29.jpg",
		autorJPG: "Steve Garvie, Fife, Scotland - Lapwing (Vanellus vanellus), CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=11461070",
		spiew: [
			"xeno-canto.org/sounds/uploaded/JCPKCBKKAQ/XC881982-VANVAN_230419_2742_DAVIAUD85_lim008_CroixGivrand.mp3",
			"xeno-canto.org/sounds/uploaded/WBZVBDKAUE/XC910724-lapwingtac26.mp3"],
		autorzyDzwiekow: ["Olivier SWIFT", "Paul Kelly"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "sieweczkowate",
	},
	{
		nazwa: "Dzięcioł duży",
		nazwaENG: "Great Spotted Woodpecker",
		nazwaLat: "Dendrocopos major",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Juvenile_male_Great_Spotted_Woodpecker%2C_18_June_2021.jpg/1024px-Juvenile_male_Great_Spotted_Woodpecker%2C_18_June_2021.jpg",
		autorJPG: "BrayLockBoy, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=106709908",
		spiew: ["xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC951564-JAREK-MATUSIAK-A-2241-%282%29-dzi%C4%99cio%C5%82-du%C5%BCy-ed-%282%29.mp3"],
		autorzyDzwiekow: ["Jarek Matusiak"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "dzięciołowate",
	},
	{
		nazwa: "Kopciuszek",
		nazwaENG: "Black Redstart",
		nazwaLat: "Phoenicurus ochruros",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/2/2e/PhoenicurusOchrurosGuntherHasler01.jpg",
		autorJPG: "Gunther Hasler, Augsburg - http://www.fotocommunity.de/pc/pc/display/9277572, CC BY-SA 3.0 de, https://commons.wikimedia.org/w/index.php?curid=4763131",
		spiew: [
			"xeno-canto.org/sounds/uploaded/NKTQOAXTXA/XC938911-Rougequeuenoir_25042024_coldesaravis-15h-chant.mp3",
			"xeno-canto.org/sounds/uploaded/DMQLDFORTG/XC934037-Phooch240916OveixM_02.mp3"],
		autorzyDzwiekow: ["Corentin Rivière","Pere Josa"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "muchołówkowate",
	},
	{
		nazwa: "Sierpówka",
		nazwaENG: "Eurasian Collared Dove",
		nazwaLat: "Streptopelia decaocto",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Streptopelia_decaocto_zoom.jpg/1024px-Streptopelia_decaocto_zoom.jpg",
		autorJPG: "Dimitri Torterat, CC BY 2.0 fr, https://commons.wikimedia.org/w/index.php?curid=4109635",
		spiew: [
			"xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC951676-JAREK-MATUSIAK-006-%283%29-sierp%C3%B3wka-ed.mp3"],
		autorzyDzwiekow: ["Jarek Matusiak"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "gołębiowate",
	},
	{
		nazwa: "Pustułka",
		nazwaENG: "Common Kestrel",
		nazwaLat: "Falco tinnunculus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Common_kestrel_%28Falco_tinnunculus%29%2C_Hurghada%2C_Egypt_-_20110923.jpg/1024px-Common_kestrel_%28Falco_tinnunculus%29%2C_Hurghada%2C_Egypt_-_20110923.jpg",
		autorJPG: "Edal Anton Lefterov, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=17633463",
		spiew: [
			"xeno-canto.org/sounds/uploaded/RJUNGDNCSJ/XC943742-Faucon_crécerelle_Jura_20_aout_2024.mp3",
			"xeno-canto.org/sounds/uploaded/OQZFKFTAKD/XC942209-TURMFFALKE,-Rufreihen-im-Fluge---5_02--Hh-Kirchstraße--A--VOC_240710-5665.mp3"],
		autorzyDzwiekow: ["Frantz Barrault","Beatrix Saadi-Varchmin"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "sokołowate",
	},
	{
		nazwa: "Oknówka",
		nazwaENG: "House Martin",
		nazwaLat: "Delichon urbicum",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Mehlschwalbe.jpg/1024px-Mehlschwalbe.jpg",
		autorJPG: "Andreas Trepte, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=40871453",
		spiew: [
			"xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC937351-Hirondelle-de-fenetre-auban-56-MG-OS-sep-13-1033-DR0000_2357.mp3",
			"xeno-canto.org/sounds/uploaded/POVKNQVSGU/XC936596-Delichon-urbicum_call-from-the-nest_270924_Aldeaseca-de-la-Armuña.mp3"],
		autorzyDzwiekow: ["Manuel Grosselet","	João Tomás"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "jaskółkowate",
	},
	{
		nazwa: "Mazurek",
		nazwaENG: "Eurasian Tree Sparrow",
		nazwaLat: "Passer montanus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tree-Sparrow-2009-16-02.jpg/1024px-Tree-Sparrow-2009-16-02.jpg",
		autorJPG: "Andreas Trepte, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=5964819",
		spiew: [
			"xeno-canto.org/sounds/uploaded/LBWCUENEBH/XC899208-Passer-montanus-montanus-MP-1604-norm-10dB-NR-12dB-NR-600Hz.mp3",
			"xeno-canto.org/sounds/uploaded/POVKNQVSGU/XC944188-Passer-montanus_call-or-song-near-the-nest_011124_Parque-de-Aldehuela.mp3"],
		autorzyDzwiekow: ["Geoff Carey", "João Tomás"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "wróble",
	},
	{
		nazwa: "Wróbel",
		nazwaENG: "House Sparrow",
		nazwaLat: "Passer domesticus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Huismus%2C_man.jpg/1024px-Huismus%2C_man.jpg",
		autorJPG: "Autorstwa JrPol, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=40108812",
		spiew: [
			"xeno-canto.org/sounds/uploaded/POVKNQVSGU/XC953713-Passer-domesticus_calls_301124_Tardáguila_4.mp3"],
		autorzyDzwiekow: ["João Tomás"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "wróble",
	},
	{
		nazwa: "Grzywacz",
		nazwaENG: "Common Wood Pigeon",
		nazwaLat: "Columba palumbus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Paloma_torcaz_%28Columba_palumbus%29%2C_Hartelholz%2C_M%C3%BAnich%2C_Alemania%2C_2016-04-03%2C_DD_04.jpg/1024px-Paloma_torcaz_%28Columba_palumbus%29%2C_Hartelholz%2C_M%C3%BAnich%2C_Alemania%2C_2016-04-03%2C_DD_04.jpg",
		autorJPG: "Diego Delso, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48514933",
		spiew: ["xeno-canto.org/sounds/uploaded/RNMRWBXEZJ/XC947574-Houtduif%2C-zang%2C-IGS%2C-200524%2C-0700-uur.mp3"],
		autorzyDzwiekow: ["Joost van Bruggen"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "gołębiowate",
	},
	{
		nazwa: "Jerzyk",
		nazwaENG: "Common Swift",
		nazwaLat: "Apus apus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Apus_apus_-Barcelona%2C_Spain-8_%281%29.jpg/1024px-Apus_apus_-Barcelona%2C_Spain-8_%281%29.jpg",
		autorJPG: "pau.artigas - Falciot, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=10187946",
		spiew: ["xeno-canto.org/sounds/uploaded/JLAUXQLBHR/XC918622-Tornseglare-%28Apus-apus%29-Kyrkesta-Eriksberg_2024-05-28_XC.mp3"],
		autorzyDzwiekow: ["Mats Olsson"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "jerzykowate",
	},
	{
		nazwa: "Sójka",
		nazwaENG: "Eurasian Jay",
		nazwaLat: "Garrulus glandarius",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Garrulus_glandarius_1_Luc_Viatour.jpg/1024px-Garrulus_glandarius_1_Luc_Viatour.jpg",
		autorJPG: "Luc Viatour, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=5933620",
		spiew: ["xeno-canto.org/sounds/uploaded/XIBLXHRPJO/XC932398-gargla-aiaste-240820_0757.mp3"],
		autorzyDzwiekow: ["Uku Paal"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "krukowate",
	},
	{
		nazwa: "Pierwiosnek",
		nazwaENG: "Common Chiffchaff",
		nazwaLat: "Phylloscopus collybita",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Phylloscopus_collybita_%28taxobox%29.jpg/1024px-Phylloscopus_collybita_%28taxobox%29.jpg",
		autorJPG: "Hans Hillewaert, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=5050943",
		spiew: ["xeno-canto.org/sounds/uploaded/JCPKCBKKAQ/XC915024-PHYCOL_240620_4659_PontAudemer27_StUlfrant.mp3","xeno-canto.org/sounds/uploaded/JCPKCBKKAQ/XC908343-PHYCOL_240518_4340_CCPAVR_Routot27_PS27.mp3","xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC921071-Grans%C3%A5ngare_47.mp3"],
		autorzyDzwiekow: ["Olivier SWIFT","Olivier SWIFT, Hélène CARTAUD","Lars Edenius"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "świstunki",
	},
	{
		nazwa: "Zięba",
		nazwaENG: "Common Chaffinch",
		nazwaLat: "Fringilla coelebs",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chaffinch_%28Fringilla_coelebs%29_male.jpg/1024px-Chaffinch_%28Fringilla_coelebs%29_male.jpg",
		autorJPG: "Charles J Sharp, from Sharp Photography, sharpphotography, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=31607569",
		spiew: [
			"xeno-canto.org/sounds/uploaded/LHCOINSOBZ/XC944589-240623_07-Pimpin-song-Bodeira-9.00.mp3","xeno-canto.org/sounds/uploaded/BJAXFFKOML/XC954053-Pinsondesarbres_261124_carollesvauban_09h00_cripos%C3%A9_A.mp3"],
		autorzyDzwiekow: ["Jacobo Ramil Millarengo","Sonothèque ADVL"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "łuszczakowate",
	},
	{
		nazwa: "Śmieszka",
		nazwaENG: "Black-headed Gull",
		nazwaLat: "Chroicocephalus ridibundus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Chroicocephalus_ridibundus_%28summer%29.jpg/1024px-Chroicocephalus_ridibundus_%28summer%29.jpg",
		autorJPG: "Hans Hillewaert, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=5548312",
		spiew: ["xeno-canto.org/sounds/uploaded/VJARXMSBTG/XC954802-LARRID_acrobaties_2_241212_Bou.mp3"],
		autorzyDzwiekow: ["FREDERIC Lionel"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "mewowate",
	},
	{
		nazwa: "Szpak",
		nazwaENG: "Common Starling",
		nazwaLat: "Sturnus vulgaris",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ab_bird_025.jpg/1024px-Ab_bird_025.jpg",
		autorJPG: "Andrew Butko, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=4047010",
		spiew: ["xeno-canto.org/sounds/uploaded/XIBLXHRPJO/XC804847-STUVUL-TOOMA-230417_5115.mp3"],
		autorzyDzwiekow: ["Uku Paal"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "szpakowate",
	},
	{
		nazwa: "Kowalik",
		nazwaENG: "Eurasian Nuthatch",
		nazwaLat: "Sitta europaea",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Nuthatch_Patrol.jpg/1024px-Nuthatch_Patrol.jpg",
		autorJPG: "Peter Mulligan, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=9072395",
		spiew: [
			"xeno-canto.org/sounds/uploaded/WXEEFPSPJM/XC903714-240321-MP-2408-11h31-id-sittelle.mp3","xeno-canto.org/sounds/uploaded/ITHRUQEQCF/XC938013-Eurasian-Nuthatch_calls_1006_1013.mp3"],
		autorzyDzwiekow: ["Jack Berteau", "Francesco Sottile"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "kowaliki",
	},
	{
		nazwa: "Dzwoniec",
		nazwaENG: "European Greenfinch",
		nazwaLat: "Chloris chloris",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/3/32/Carduelis_chloris_3_%28Marek_Szczepanek%29.jpg",
		autorJPG: "Marek Szczepanek, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=51367",
		spiew: ["xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC937275-Gr%C3%B6nfink_48.mp3",
			"xeno-canto.org/sounds/uploaded/EDRTTPSCEN/XC871738-Verdier-230425-0900-0SA-France-Ponthoile-MixPre-4343.mp3",
			"xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC789172-Gr%C3%B6nfink_45.mp3"
		],
		autorzyDzwiekow: ["Lars Edenius","Alain Malengreau","Lars Edenius"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "łuszczakowate",
	},
	{
		nazwa: "Czyż",
		nazwaENG: "Eurasian Siskin",
		nazwaLat: "Spinus spinus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/0/01/Carduelis_spinus_2_%28Martin_Mecnarowski%29.jpg",
		autorJPG: "Martin Mecnarowski, (http://www.photomecan.eu/), CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=12719748",
		spiew: ["xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC871416-Spinus-spinus_SONG_Bordes-de-Buiro_240203_1439_xc.mp3"],
		autorzyDzwiekow: ["Xavier Riera"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "łuszczakowate",
	},
	{
		nazwa: "Szczygieł",
		nazwaENG: "European Goldfinch",
		nazwaLat: "Carduelis carduelis",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/European_goldfinch_in_winter.jpg/1024px-European_goldfinch_in_winter.jpg",
		autorJPG: "DmitriyGuryanov, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=114826883",
		spiew: ["xeno-canto.org/sounds/uploaded/LKSFUYYSUK/XC945796-241104_2675B-Steglits.mp3"],
		autorzyDzwiekow: ["Ulf Elman"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "łuszczakowate",
	},
	{
		nazwa: "Śpiewak",
		nazwaENG: "Song Thrush",
		nazwaLat: "Turdus philomelos",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%D0%9F%D0%B5%D0%B2%D1%87%D0%B8%D0%B9_%D0%B4%D1%80%D0%BE%D0%B7%D0%B4_%D0%BD%D0%B0_%D0%BF%D0%B5%D0%BD%D1%8C%D0%BA%D0%B5_%28Turdus_philomelos%29%2C_%D0%91%D0%B8%D1%82%D1%86%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BB%D0%B5%D1%81.jpg/1024px-%D0%9F%D0%B5%D0%B2%D1%87%D0%B8%D0%B9_%D0%B4%D1%80%D0%BE%D0%B7%D0%B4_%D0%BD%D0%B0_%D0%BF%D0%B5%D0%BD%D1%8C%D0%BA%D0%B5_%28Turdus_philomelos%29%2C_%D0%91%D0%B8%D1%82%D1%86%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BB%D0%B5%D1%81.jpg",
		autorJPG: "Dion Art, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=148024346",
		spiew: ["xeno-canto.org/sounds/uploaded/YHOCFQHBDL/XC927308-SongThrush.2023.12.02%280500%29Sweetwater.mp3",
			"xeno-canto.org/sounds/uploaded/MVBSLTSBUW/XC925183-020624_Song-Thrush-song-0648-poss-upload.mp3"
		],
		autorzyDzwiekow: ["David Boyle","Lee Alder"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "drozdowate",
	},
	{
		nazwa: "Wilga",
		nazwaENG: "Eurasian Golden Oriole",
		nazwaLat: "Oriolus oriolus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rigogolo-%28Oriolus_oriolus%29_Lazio%2C_isola_di_Ventotene_%28LT%29_19.4.2024.png/1024px-Rigogolo-%28Oriolus_oriolus%29_Lazio%2C_isola_di_Ventotene_%28LT%29_19.4.2024.png",
		autorJPG: "Apatura1955, CC0, https://commons.wikimedia.org/w/index.php?curid=148050665",
		spiew: ["xeno-canto.org/sounds/uploaded/JDDHNKDHCS/XC916003-2024.06.25-07h11-Loriot-chant.mp3",
			"xeno-canto.org/sounds/uploaded/JJNENFTWPB/XC894509-R00329.mp3"
		],
		autorzyDzwiekow: ["Thierry THOMAS","Roman Cheprasov"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "wilgowate",
	},
	{
		nazwa: "Strzyżyk",
		nazwaENG: "Eurasian Wren",
		nazwaLat: "Troglodytes troglodytes",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Eurasian_Wren_Pangolakha_Wildlife_Sanctuary_East_Sikkim_India_20.10.2015.jpg",
		autorJPG: "Dibyendu Ash, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=45878509",
		spiew: ["xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC928304-Troglodytes-troglodytes_240819_063924_00.mp3","xeno-canto.org/sounds/uploaded/LKSFUYYSUK/XC947333-241110_2679A-G%C3%A4rdsmyg.mp3"],
		autorzyDzwiekow: ["Jorge Leitão","	Ulf Elman"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "strzyżyki",
	},
	{
		nazwa: "Gąsiorek",
		nazwaENG: "Red-backed Shrike",
		nazwaLat: "Lanius collurio",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Neuntoeter.JPG",
		autorJPG: "Kaeptn chemnitz, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=5033417",
		spiew: ["xeno-canto.org/sounds/uploaded/LKSFUYYSUK/XC904308-240518_2154D-T%C3%B6rnskata.mp3"],
		autorzyDzwiekow: ["Ulf Elman"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "dzierzby",
	},
	{
		nazwa: "Pełzacz leśny",
		nazwaENG: "Eurasian Treecreeper",
		nazwaLat: "Certhia familiaris",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/1/14/Certhia_familiaris_1_%28Martin_Mecnarowski%29.jpg",
		autorJPG: "Martin Mecnarowski, (http://www.photomecan.eu/), CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=12686256",
		spiew: ["xeno-canto.org/sounds/uploaded/NKTQOAXTXA/XC904077-Grimpereaudesbois_21042024_for%C3%AAtdurisoux-10h-chant.mp3"],
		autorzyDzwiekow: ["Corentin Rivière"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "pełzacze",
	},
	{
		nazwa: "Pełzacz ogrodowy",
		nazwaENG: "Short-toed Treecreeper",
		nazwaLat: "Certhia brachydactyla",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pe%C5%82zacz_ogrodowy.jpg/1024px-Pe%C5%82zacz_ogrodowy.jpg",
		autorJPG: "Olek Marszałek, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=106329304",
		spiew: ["xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC954081-Certhia-Brachydactyla_241209_113954_00~3.mp3"],
		autorzyDzwiekow: ["Jorge Leitão"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "pełzacze",
	},
	{
		nazwa: "Bocian biały",
		nazwaENG: "White Stork",
		nazwaLat: "Ciconia ciconia",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ciconia_ciconia_-_01.jpg/1024px-Ciconia_ciconia_-_01.jpg",
		autorJPG: "Carlos Delgado, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=25881901",
		spiew: ["xeno-canto.org/sounds/uploaded/BJAXFFKOML/XC922887-Cigogneblanche_juv_240724_09H15_cri.mp3","xeno-canto.org/sounds/uploaded/PNYKOPBQBQ/XC943779-CICCIC291024MixPre-006_CLAPING-(2).mp3"],
		autorzyDzwiekow: ["Sonothèque ADVL", "Jordi Calvet"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "bociany",
	},
	{
		nazwa: "Bocian czarny",
		nazwaENG: "Black Stork",
		nazwaLat: "Ciconia nigra",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ciconia_nigra_638.jpg/1024px-Ciconia_nigra_638.jpg",
		autorJPG: "Matěj Baťha, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=15772514",
		spiew: ["xeno-canto.org/sounds/uploaded/WIPMNWUHXI/XC421071-Zwooi%28mf%29_Karula_20180408_1824.mp3"],
		autorzyDzwiekow: ["Livon"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "bociany",
	},
	{
		nazwa: "Żuraw",
		nazwaENG: "Common Crane",
		nazwaLat: "Grus grus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flickr_-_Rainbirder_-_Eurasian_Crane_%28Grus_grus%29_%28cropped%29.jpg",
		autorJPG: "Steve Garvie, Scotland - Eurasian Crane (Grus grus), CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=11475292",
		spiew: ["xeno-canto.org/sounds/uploaded/POVKNQVSGU/XC953895-Grus-grus_flock-of-100-birds-flying-form-de-pre-dormitory-to-the-dormitory_081224_Azud-de-Riolobos.mp3"],
		autorzyDzwiekow: ["João Tomás"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "żurawie",
	},
	{
		nazwa: "Głuszec",
		nazwaENG: "Western Capercaillie",
		nazwaLat: "Tetrao urogallus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Western_Capercaillie_Spain.jpg",
		autorJPG: "Arturo de Frias Marques, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=28963698",
		spiew: ["xeno-canto.org/sounds/uploaded/WZIAGHEMKS/XC897708-tuppar.mp3"],
		autorzyDzwiekow: ["Baltasar Pinheiro"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "kurowate",
	},
	{
		nazwa: "Gołąb skalny",
		nazwaENG: "Rock Dove",
		nazwaLat: "Columba livia",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pigeon_shot.jpg/480px-Pigeon_shot.jpg",
		autorJPG: "Siva301in, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=22869071",
		spiew: ["xeno-canto.org/sounds/uploaded/CRSGYUOPGR/XC777163-paloma.mp3"],
		autorzyDzwiekow: ["SonoNatura"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "gołębiowate",
	},
	{
		nazwa: "Sroka",
		nazwaENG: "Eurasian Magpie",
		nazwaLat: "Pica pica",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pica_pica_-_Compans_Caffarelli_-_2012-03-16.jpg/1024px-Pica_pica_-_Compans_Caffarelli_-_2012-03-16.jpg",
		autorJPG: "Pierre-Selim, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=19400996",
		spiew: ["xeno-canto.org/sounds/uploaded/GIFBPTEXWL/XC952664-20241127_001_H1e_08_01_51.mp3"],
		autorzyDzwiekow: ["Johannes Worona"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "krukowate",
	},
	{
		nazwa: "Pliszka siwa",
		nazwaENG: "White Wagtail",
		nazwaLat: "Motacilla alba",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/White_wagtail_%28Motacilla_alba%29.jpg/1280px-White_wagtail_%28Motacilla_alba%29.jpg",
		autorJPG: "Hobbyfotowiki, CC0, https://commons.wikimedia.org/w/index.php?curid=85186441",
		spiew: ["xeno-canto.org/sounds/uploaded/LHCOINSOBZ/XC956443-241221_01.-M-alba-alba-canto-call-walking-on-the-mudflat-13.00-mp3.mp3","xeno-canto.org/sounds/uploaded/LKSFUYYSUK/XC946837-200529_15_16_01D-S%C3%A4des%C3%A4rla.mp3"],
		autorzyDzwiekow: ["Jacobo Ramil Millarengo","Ulf Elman"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "pliszkowate",
	},

	{
		nazwa: "Trznadel",
		nazwaENG: "Yellowhammer",
		nazwaLat: "Emberiza citrinella",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Emberiza_citrinella_-New_Zealand_-North_Island-8.jpg",
		autorJPG: "Alan Vernon, North Island, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=8787510",
		spiew: [
			"xeno-canto.org/sounds/uploaded/LHCOINSOBZ/XC919933-240707_03-E-citrinella-song-pino-8.30--58dB-Xestoso.mp3",
			"xeno-canto.org/sounds/uploaded/XIBLXHRPJO/XC909945-EMBCIT-H-RISTNA-240513_0456.mp3"],
		autorzyDzwiekow: ["Jacobo Ramil Millarengo","Uku Paal"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "trznadle",
	},
	{
		nazwa: "Krogulec",
		nazwaENG: "Eurasian Sparrowhawk",
		nazwaLat: "Accipiter nisus",
		jpg: "https://upload.wikimedia.org/wikipedia/commons/3/33/Havik.jpg",
		autorJPG: "Mweilie3, Domena publiczna, https://commons.wikimedia.org/w/index.php?curid=4873087",
		spiew: [
			"xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC905385-aCCIPITER-NISUS_240522_120552_00.mp3", 
			"xeno-canto.org/sounds/uploaded/PAEQEUHPFQ/XC740850-Sparrowhawk_Calls_Rostellan_250722_A_2.mp3"],
		autorzyDzwiekow: ["Jorge Leitão", "Irish Wildlife Sounds"],
		siedlisko: "",
		opis: "",
		okres: "",
		rodzina: "jastrzębiowate",
	},
	// {
	// 	nazwa: "",
	// 	nazwaENG: "",
	// 	nazwaLat: "",
	// 	jpg: "",
	// 	autorJPG: "",
	// 	spiew: [""],
	// 	autorzyDzwiekow: [""],
	// 	siedlisko: "",
	// 	opis: "",
	// 	okres: "",
	// 	rodzina: "",
	// },

];







function filterBirds(nazwa, listaPtaków) {
	// Tworzymy pustą tablicę na wynik
	let wynik = [];

	// Iterujemy przez tablicę ptaków
	for (let ptak of listaPtaków) {
		// Sprawdzamy, czy nazwa ptaka równa się szukanej nazwie
		if (ptak.nazwa === nazwa) {
			wynik.push(ptak);
			return ptak;
		}
	}
}

function createNewBirdList(listName, newBirdList, oldBirdList) {
	let a = { name: listName, ptaki: [] };

	for (let i = 0; i < newBirdList.length; i++) {
		a.ptaki.push(filterBirds(newBirdList[i], oldBirdList));
	}

	return a;
}

// Sikory
const birdList1 = ["Bogatka", "Modraszka", "Sikora uboga","Czarnogłówka", "Czubatka", "Sosnówka"];

// Dodać Piecuszek Pierwiosnek Pleszka Kapturka Piegża Dymówka Zięba
// Ptaki Miasta 1
const birdList2 = ["Bogatka", "Gołąb skalny", "Wróbel", "Mazurek", "Sroka", "Kawka", "Kos", "Szpak", "Jerzyk", "Dzięcioł duży"];

// Ptaki Miasta 2
const birdList3 = ["Grzywacz", "Śmieszka", "Kopciuszek", "Pliszka siwa", "Rudzik", "Kowalik", "Sójka", "Pustułka", "Wrona siwa", "Gawron"]

// Ptaki Miasta 3
const birdList4 = ["Sierpówka", "Dzwoniec", "Oknówka", "Modraszka", "Pełzacz ogrodowy", "Strzyżyk", "Trznadel", "Kwiczoł", "Szczygieł", "Krogulec"]

// Siewki
const birdList5 = ["Czajka", "Kszyk", "Słonka", "Krwawodziób", "Łęczak", "Samotnik", "Rycyk", "Szlamnik", "Sieweczka Rzeczna", "Sieweczka Obrożna"]

// Kaczki i Łabędzie
const birdList6 = ["Krzyżówka", "Krakwa", "Cyranka", "Cyraneczka", "Świstun", "Płaskonos", "Rożeniec", "Łąbędź Niemy", "Łabędź Krzykliwy", "Łabędź Czarnodzioby"]

// Gęsi
const birdList7 = ["Gęgawa", "Gęś Zbożowa", "Gęś Tundrowa", "Gęś Białoczelna", "Gęś Mała", "Gęś Krótkodzioba", "Bernikla Kanadyjska", "Bernikla Białoszyja", "Bernikla Obrożna"]

// Szponiaste
const birdList8 = ["Myszołów", "Myszołów Włochaty", "Trzmielojad", "Jastrząb", "Krogulec", "Błotniak Stawowy", "Błotniak Łąkowy", "Błotniak Zbożowy", "Kania Ruda", "Kania Czarna"
]

// Mewy
const birdlist9 = ["Śmieszka", "Mewa Mała", "Mewa Trójpalczasta", "Mewa Siwa", "Mewa Srebrzysta", "Mewa Żółtonoga", "Mewa Siodłata", "Mewa Polarna", "Mewa Blada"]

// Dzięcioły
const birdlist10 = ["Dzięciołek", "Dzięcioł Średni", "Dzięcioł Duży", "Dzięcioł Białoszyi", "Dzięcioł Białogrzbiety", "Dzięcioł Zielony", "Dzięcioł Zielonosiwy", "Dzięcioł Czarny", "Dzięcioł Trójpalczasty"]

// Krukowate
const birdlist11 = ["Wrona", "Czarnowron", "Kawka", "Gawron", "Kruk", "Sójka", "Sroka", "Orzechówka"]

// Sowy
const birdlist12 = ["Puszczyk", "Puszczyk Uralski", "Puszczyk Mszarny", "Uszatka", "Uszatka Błotna", "Płomykówka", "Pójdźka", "Sóweczka", "Włochatka", "Puchacz"]

// ---------------------------------------
let sets = [];
// Ptaki Miasta
sets.push(createNewBirdList("Ptaki Miasta 1", birdList2, birds));
sets.push(createNewBirdList("Ptaki Miasta 2", birdList3, birds));
sets.push(createNewBirdList("Ptaki Miasta 3", birdList4, birds));




// Sikory
sets.push(createNewBirdList("Sikory", birdList1, birds));

// Losowe Ptaki
sets.push(createNewBirdList("10 losowych", getRandomBirds(10, birds), birds))


// Własne Zestawy
let mySets = [];

// let mySets2 = [];


// Wyświetl Wszystkie nazwy ptaków
// for (let i = 0; i < birds.length; i++) {
// 	console.log(birds[i].nazwa);
// }


function getRandomBirds(numberOfBirds, birdsList) {
	const randBirdsList = shuffleArray(birdsList)
	let newBirdRandList = []

	for (let i = 0; i < numberOfBirds; i++) {
		newBirdRandList.push(randBirdsList[i].nazwa)
	}
	return newBirdRandList
}




