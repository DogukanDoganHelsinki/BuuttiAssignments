const restaurants = [
  {
    "name": "Addis Ethiopian Kitchen",
    "address": "Sturenkatu 28\n00510 Helsinki",
    "description": "Ravintola Addis tarjoilee etiopialaisia makuja Vallilassa. Tarjolla niin liha- kuin vegaaniannoksia."
  },
  {
    "name": "Adlerfelt",
    "address": "Suomenlinna B 1\n00190 Helsinki",
    "description": "Ihanan iloinen ja hyväntuulinen Adlerfelt sijaitsee upeassa 250 vuotta vanhassa rakennuksessa maailman kauneimmassa maailmanperintökohteessa, Suomenlinnassa.\r\n\r\nAdlerfeltissa voi nautiskella lasillisen tai herkutella pitkään. Tärkeintä on se fiilis, jolloin kaikki tuntuu olevan hyvin ja vaan hymyilyttää. Juuri sellaisten fiilisten kautta jää mieleen niitä hetkiä, joihin haluaa palata aina uudestaan ja uudestaan. Adlerfelt on happy place, jonne kaikki ovat sydämellisesti tervetulleita ikään, sukupuoleen tai alkuperään katsomatta.\r\n\r\nAdlerfeltin ruokaideologiaa ohjaava periaate on raaka-aineiden vastuulliset valinnat. Koko maailman kulinaarinen skene on pelikenttänä ja herkkuja valmistetaan kauteen, tunnelmaan ja hetkeen sopivina ruoan alkuperä kuitenkin aina tuntien. Hauskinta on se, että joka visiitillä voi olla jotain erilaista ja uutta maukasta syötävää ja näin ollen päivän annokset selviävätkin vasta paikan päällä Adlerfeltissa. Kun toimintaa ei sidota tiettyyn ruokalistaan, minimoidaan ruokahävikki.\r\n\r\nVirkistävien erilaisen juomien ansiosta ruokailusta saadaan vieläkin kauniimpi ja hauskempi hetki. Se fiilis, kun ruoka ja juoma täydentävät upeasti toinen toisiaan, on jättänyt monille tietystä paikasta ja ajasta ihanan muistijäljen. Juuri niitä iloisia happy place-hetkiä!\r\n"
  },
  {
    "name": "Ageno",
    "address": "Sturenkatu 31\n00550 Helsinki",
    "description": "Ravintola Ageno on uusi nepalilainen ravintola Vallilassa. Henkilökunnan ammattitaito takaa unohtumattoman makuelämyksen. Ravintolassa on tarjolla monenlaisia herkkuja kasvis-, kana-, lammas- ja kalaruokia sekä vegaanille sopivia ruokia."
  },
  {
    "name": "Al-Mazaq Ravintola",
    "address": "Ostostie 4\n00940 Helsinki",
    "description": "Shish-kebabia Kontulan ostarilla."
  },
  {
    "name": "Albina Ravintola & Viinibaari",
    "address": "Aleksis Kiven katu 23\n00510 Helsinki",
    "description": "Ravintola Albina sijaitsee Vallilan Konepajan alueella, The Folks Hotel Konepajan kivijalassa.\r\n\r\nAlbinan keittiö vaalii eurooppalaisia perinteitä, pohjoismaista tinkimättömyyttä ja suurkaupunkien rouheutta.\r\n\r\nLautasella tarjoillaan parasta mitä luonto kulloinkin tarjoaa: läheltä ja kestävästi, käsityönä ja suurella lempeydellä valmistettuna. Lasissa lämmöllä valittuja viinejä."
  },
  {
    "name": "Alenius Sokerileipuri",
    "address": "Merikatu 1\n00140 Helsinki",
    "description": "Tunnelmallinen vanhan ajan kakkukahvila sijaitsee Helsingin eteläkärjessä. Sokerileipuri Alenius on erikoistunut täytekakkuihin ja käsintehtyihin suklaatryffeleihin, mutta tarjolla on myös pikkusuolaista ja erikoiskahveja. Salin puolella sekä ulkopöydissä voi nauttia merimaisemasta ja esim. paikan kuuluisasta banaani-suklaakakusta. Myymälästä saa tuotteita myös mukaan."
  },
  {
    "name": "Alenka Home Food",
    "address": "Läntien Papinkatu 2-4, LT4\n00530 Helsinki",
    "description": "Alenka Home Food Cafe & Bakery Kalliossa tarjoaa paikanpäällä valmistettuja venäläis- ja amerikkalaisvaikutteisia herkkuja paikan päällä nautittavaksi tai ennakkoon tilattavaksi ja noudettavaksi. Runsas valikoima kotiruokaa ja leivonnaisia kotimaisista raaka-aineista. \r\n"
  },
  {
    "name": "Alexanderplats Brasserie & Pub",
    "address": "Eteläesplanadi 22\n00130 Helsinki",
    "description": "Brasserie & Pub Alexanderplats on helposti lähestyttävä laadukas ravintola Eteläesplandilla, jossa on viihtyisän baarin lisäksi runsaasti pöytiä ruokailijoille. \r\n\r\nBrasserie tarjoilee parhaista raaka-aineista valmistettuja eurooppalaisia klassikko-annoksia, jotka eivät kaipaa turhia koristeluja. Tyyli on selkeä ja elegantti. Pubissa on laaja valkoima oluita sekä runsaasti viinejä."
  },
  {
    "name": "Alfons' Pizza",
    "address": "Vuorimiehenkatu 35\n00150 Helsinki",
    "description": "Suosittu artesaanipizzeria Ullanlinnassa. Kuuluisa pizzojensa rapeista luomupohjista ja rennosta tunnelmasta."
  },
  {
    "name": "Alice Italian",
    "address": "Konepajankuja 1\n00510 Helsinki",
    "description": "Ravintola Alice Italian tarjoilee mutkatonta italialaista ruokaa Wonderland co-workingtilan alakerrassa Vallilan Konepajan alueella.\r\n"
  },
  {
    "name": "Allas Restaurants",
    "address": "Katajanokanlaituri 2A\n00160 Helsinki",
    "description": "Allas Restaurants, Allas Sea Pool merikylpylän yhteydessä, kokoaa yhteen kolme erilaista ravintolakokemusta. Allas Café & Terrace, Allas Bistro & Lounge ja Allas Sky Bar.\r\n\r\nAllas Cafe & Terrace palvelee asiakkaita aamusta iltaan ja toimii rentona ajanviettopaikkana kaupungin keskeisimmällä sijainnilla. \r\n\r\nAllas Bistro & Lounge on urbaani merinäköalaravintola Altaan toisessa kerroksessa yhdellä Helsingin upeimmista sijainneista. \r\n\r\nAllas Sky Bar tarjoaa Helsingin suurimman ja ainutlaatuisimman kohtaamispaikan sekä näköalan, josta voit nauttia aamupäivästä yön pikkutunneille saakka.\r\n\r\nAltaan ravintoloissa voi varata myös VIP-pöydän ja viettää eksklusiivisen illan oman seurueen kanssa upeissa merimaisemissa. VIP-pöytä takaa sujuvan illanvieton ja juomatarjoilun oman pöytähostin kera. Lue lisää kotisivuilta."
  },
  {
    "name": "Allas Sea Pool",
    "address": "Katajanokanlaituri 2a\n00160 Helsinki",
    "description": "Allas Sea Pool on merikylpylä ja kaupunkikeidas Kauppatorin kupeessa. Allas tarjoaa uusia tapoja nauttia Itämerestä kaupungin keskeisimmällä paikalla. Merikylpylä on auki ympäri vuoden ja tarjoaa elämyksiä ja virkistäytymismahdollisuuksia niin kaupunkilaisille kuin matkailijoille. Altaalla on kolme saunaa, kaksi lämmitettyä makean veden allasta sekä yksi merivesiallas, jonka lämpötila mukailee meren lämpötilaa. Lisäksi Altaalta löytyy ulkokuntosali, ravintola, baari ja kahvila, ohjattua liikuntaa ja kulttuuria."
  },
  {
    "name": "Amarillo",
    "address": "Aleksanterinkatu 46\n00100 Helsinki",
    "description": "Amarillo yhdistää niin ystävät kuin tuntemattomat ja saa jengin viihtymään saman pöydän ääressä. Tyyliltään Amarillo on raikas ja reilu, mutkaton ja energinen. Ruokalistalta löytyy reippaasti tuoreita makuja parhaita lemppareita unohtamatta. Ja tietenkin tarjolla on myös kurkun kostuketta ja mukavaa fiilistä. \r\n\r\nAinutlaatuista kokemusta kaipaavan kannattaa varata paikkansa The Tableen. Koko illan kestävä elämys tarjoaa herkuttelua, viihdettä ja paljon iloisia yllätyksiä"
  },
  {
    "name": "Amigo",
    "address": "Aleksanterinkatu 15, sisäpiha\n00100 Helsinki",
    "description": "Vuonna 1971 Ullanlinnaan perustettu Ravintola Amigo on jäänyt monen helsinkiläisen herkuttelijan mieleen yhtenä kaupungin ensimmäisistä pihviravintoloista. Nykyään Amigo sijaitsee osoitteessa Aleksanterinkatu 15, sisäpihalla. Ravintola pitää traditioista kiinni ja tarjoaa edelleen klassikoita, kuten lankkupihviä. Tarjolla myös mm. tapaksia."
  },
  {
    "name": "Andante",
    "address": "Fredrikinkatu 20\n00120 Helsinki",
    "description": "Punavuoressa sijaitseva kahvila-kukkakauppa jossa viikonloppuisin tarjolla brunssia."
  },
  {
    "name": "Armo Pizza & Bar",
    "address": "Helsinginkatu 21\n00510 Helsinki",
    "description": "Kalliossa sijaitseva Armo on rento ja tyylikäs pizzabaari jossa valmistetaan hapanjuuritaikinasta käsin leivottuja artesaanipizzoja. \r\n\r\nYksinkertaisista ja laadukkaista raaka-aineista syntyy täydellinen pizza!"
  },
  {
    "name": "Asian Aroma",
    "address": "Hämeentie 101\n00550 Helsinki",
    "description": "Asian Aroma on erikoistunut perinteisiin vietnamilaisiin ja valikoituihin kiinalaisiin annoksiin."
  },
  {
    "name": "Ateljé Finne",
    "address": "Arkadiankatu 14\n00100 Helsinki",
    "description": "Arkadiankatu 14:ta sijaitsi 1920-luvulla kuvanveistäjä Gunnar Finnen ateljee. 1960-luvulta tiloissa on toiminut Ravintola Ateljé Finne. Finnen menu koostuu pääosin korkealuokkaisista suomalaisista raaka-aineista kootuista menukokonaisuuksista."
  },
  {
    "name": "Ateneum Bistro",
    "address": "Kaivokatu 2, Ateneumin taidemuseo\n00100 Helsinki",
    "description": "Ateneum Bistro tarjoilee Ateneumin vieraille ja muille ruokafiilistelijöille klassista suomalaista bistroruokaa modernilla twistillä. Ravintola tarjoilee lounasta, illallista sekä kahvia ja pientä makeaa Ateneumin taidemuseon aukioloaikojen mukaisesti."
  },
  {
    "name": "B-Smokery",
    "address": "Työpajankatu 2 R1 C\n00580 Helsinki",
    "description": "B-Smokery on pieni BBQ-ravintola Teurastamon alueella, joka savustaa lähes kaiken."
  },
  {
    "name": "Bacco",
    "address": "Lönnrotinkatu 18\n00120 Helsinki",
    "description": "Bacco tarjoaa herkkuja Italian eri osista. Suussasulavat pitsat tehdään tuoreista aineksista ja pitkään kypsyttämällä. Ruoka on yksinkertaista ja lista vaihtuu usein riippuen saatavilla olevista sesongin aineksista. Ammattitaitoiset pitsantekijät ja kokit valmistavat kaiken käsityönä joka päivä."
  },
  {
    "name": "Bali Brunch",
    "address": "Urho kekkosen katu 1, Kamppi 6k Food Market\n00100 Helsinki",
    "description": "Pieni, suosittu indonesialainen ravintola Kampin keskuksen 6k Food Marketissa."
  },
  {
    "name": "Bangkok 9",
    "address": "Kaivokatu 8, City Center, 2.krs\n00100 Helsinki",
    "description": "Bangkok9 City Centerissä tarjoilee tuoreita, fusion tyylisiä thaimaalaisia katuruokia ja ravintola-annoksia, aitoa thaimaalaista, täynnä makuja."
  },
  {
    "name": "Banu Cafe & Bakery",
    "address": "Heino Kasken katu 4 C\n00180 Helsinki",
    "description": "Banu Cafe on persialainen fuusiokahvila Jätkäsaaressa joka tarjoilee persialaista, kansainvälistä, perinteistä kasvis, ja vegaani, ruokaa sekä leivonnaisia. Viikonloppuisin vegaaninen brunssi  klo 11-15."
  },
  {
    "name": "Bar 10",
    "address": "Fleminginkatu 10\n00530 Helsinki",
    "description": "Bar 10 on helposti lähestyttävä ja viihtyisä korttelikapakka Kalliossa. Mutkaton ravintolan ja baarin yhdistelmä, jossa hinnat ovat maltilliset ja annokset kookkaita. Uudenmaankadun legendaarisen Ysibaarin sisarravintola."
  },
  {
    "name": "Bar Loosister",
    "address": "Hämeentie 50\n00500 Helsinki",
    "description": "Rockväen ja muidenkin kansanosien olohuone Rockbistro Bar Loosister aukesi toukokuussa 2013 Helsingin Kurviin. Ravintolan keskeinen ajatus on täyttää alkuperäisen Bar Loosen jättämä tyhjiö pääkaupungin ravintolakartalla. Bar Loosisterista löydät leppoisaa tunnelmaa, vaihtuvaa musiikkia, pienpanimo-oluita ja konstailematonta sapuskaa, myös vegaania.\r\n\r\nBar Loosisterin sisustuksessa on käytetty legendaarisia rock-kuvia, vinyylilevyjä sekä alkuperäisen Bar Loosen varastosta löytynyttä vanhaa tavaraa."
  },
  {
    "name": "BasBas Kulma",
    "address": "Tehtaankatu 27-29\n00150 Helsinki",
    "description": "BasBas Kulma on ihanan yksinkertaisia makuja, herkullisia artesaaniviinejä ja lämmintä bistrotunnelmaa. \r\n\r\nKulman keittiön komealla hiiligrillillä tiristetään meheviä vartaita, joiden kylkeen valmistuu erilaisia kastikkeita ja raikkaita lisukkeita. Alkuruoat ovat simppeleitä, leipä uunituoretta ja jälkiruoat hymyilyttäviä. \r\n\r\nKaapista löytyy viinejä klassisen tyylikkäistä kulmia nostattavan kokeileviin."
  },
  {
    "name": "Baskeri & Basso Bistro",
    "address": "Tehtaankatu 27-29 (sisäpiha)\n00150 Helsinki",
    "description": "Baskeri & Basso on imenyt vaikutteita Pariisin kodikkaista bistroista, San Franciscon rennoista kuppiloista ja Italian maaseudun pienistä osterioista. Ruokalistalla on yksinkertaisia, raaka-ainelähtöisiä bistroannoksia ja viinikaapista löytyy kiinnostava naturalviinien valikoima."
  },
  {
    "name": "Bastardo",
    "address": "Urho Kekkosenkatu 1, Kampin kauppakeskus 5krs.\n00100 Helsinki",
    "description": "Bastardo tarjoilee lounasta, drinkkejä ja illallista rustiikin italialaisen tunnelman siivittämänä ja rennossa ilmapiirissä yhdistettynä Bastardon tulkintaan perinteisestä trattoriasta ja pizzeriasta. Ravintolassa käytetyistä raaka-aineista osa tuodaan itse suoraan Italiasta."
  },
  {
    "name": "Bastion Bistro",
    "address": "Suomenlinna C8\n00190 Helsinki",
    "description": "Bastion Bistrossa pääsee nauttimaan mutkatonta ja maistuvaa bistroruokaa kaikkia aisteja hellivässä, kiireettömässä miljöössä, pienen kävelymatkan päässä Suomenlinnan päälaiturista. Ruokalistan raaka-aineet pyritään saamaan vastuullisesti lähellä tuotettuina ja valmistettuina, unohtamatta Suomenlinnan oman panimon juomia. Valmistamisessa korostuvat perinteiset saaristolaiset valmistusmenetelmät, kuten grillaaminen, liekittäminen, hauduttaminen ja keittäminen.\r\n\r\nBastion Bistro on avoinna ympäri vuoden. Sisäänkäynnillä on luiska ja tilassa on esteetön WC sekä lastenhoitotila. Myös hyvin käyttäytyvät lemmikit ovat tervetulleita ravintolaan."
  },
  {
    "name": "BBQ Royale",
    "address": "Aleksanterinkatu 52\n00100 Helsinki",
    "description": "BBQ Royalessa tarjoillaan grillattuja premiumhampurilaisia ja -kebabia maukkaiden lisukkeiden kera, ja käytetään äärimmäisen korkealaatuisia raaka-aineita. Ravintola panostaa pienimuotoiseen ruoanvalmistukseen, vastaleivottuun leipään ja talon omiin kastikkeisiin. Ruokalistalta löytyy tietenkin myös muitakin BBQ-vaikutteisia ruokalajeja, salaatteja ja muutamia kasvisruokia."
  },
  {
    "name": "Be Mine Healthy Friends",
    "address": "Lönnrotinkatu 9\n00120 Helsinki",
    "description": "Keto- ja vegaaniseen ruokavalioon panostavassa Be Mine Healthy Friends-ravintolassa keskitytään raaka-aineiden laatuun, tuoreuteen ja luonnollisuuteen.  Listalla on mm. kulho-annoksia, leipiä ja smoothieita. Ruoka-annosten terveellisyys yhdistetään aasialaisiin makumaailmoihin."
  },
  {
    "name": "Be My Guest",
    "address": "Välimerenkatu 14\n00220 Helsinki",
    "description": "Be My Guest on vietnamilainen ravintola Ruoholahdessa joka tarjoilee aitoa vietnamilaista ruokaa - terveellistä, tuoretta ja aistikasta. Ruokaa, joka avaa aasialaisen ruuan mahdollisuuksien maailman uudella herkullisella tavalla; nuudeli, wings, dumpling ja Pho saavat uuden ulottuvuuden. Maistuvalta juomalistalta löytyy myös virkistäviä seuralaisia ruualle."
  },
  {
    "name": "Bear Park Café - Kulmakahvio",
    "address": "Agricolankatu 13\n00530 Helsinki",
    "description": "Kulmakahvio on pieni, valoisa ja aurinkoinen keidas Karhupuiston kulmalla. Gay-kahvila johon kaikki ovat tervetulleita."
  },
  {
    "name": "Bei Fang",
    "address": "Rauhankatu 15\n00170 Helsinki",
    "description": "Kiinalainen ravintola Bei Fang on erikoistunut Dong Bein, Beijingin, Sichuanin ja Hunanin ruokakulttuureihin. Kiinalaiset kokit tuntevat kotimaansa aidon ruokakulttuurin ja valmistavat ruokaa perinteisiä kiinalaisia ruoanvalmistustapoja kunnioittaen."
  },
  {
    "name": "Beijing8 Kortteli",
    "address": "Urho Kekkosen katu 1, Kamppi Helsinki\n00100 Helsinki",
    "description": "Beijing8 on ruotsalainen ravintolaketju, joka on erikoistunut dumplingeihin ja luomujääteehen. Maukkaat dumplingit tehdään luonnollisista raaka-aineista ja luomujääteet on uutettu kiinalaisista teelehdistä."
  },
  {
    "name": "Belge Bar & Bistro",
    "address": "Kluuvikatu 5\n00100 Helsinki",
    "description": "Belge bar&bistro on mutkaton belgialainen olut- ja seurusteluravintola kahdessa kerroksessa. Belgialaiset rakastavat hyvää ruokaa ja juomaa niin laadullisesti kuin määrällisesti. Tämä on myös Belgen ohjenuora; tarjota asiakkailleen elämän hyviä puolia. Olut kaadetaan oikein ja annokset ovat reiluja ja rehellisiä. \r\n\r\nKatutason baari on oiva paikka nautti belgialaisia oluita. Toisen kerroksen bistrossa tarjoillaan mutkatonta syötävää reiluina annoksina. Kirjastobaari bistron vieressä on töiden jälkeisen rentoutumisen sydän. Kodikas tila houkuttelee paikalle viihtymään porukassa tai vaikka yksinkin."
  },
  {
    "name": "Biáng! Citycenter",
    "address": "Kaivokatu 8, Citycenter, 2. krs.\n00100 Helsinki",
    "description": "Biáng! on kauppakeskus Citycenterissä sijaitseva, viihtyisä kiinalainen ravintola jossa tarjoillaan perinteistä Pohjois-Kiinalaista ruokaa. Monipuolinen buffettipöytä on katettu viikon jokaisena päivänä. À la carte -listalta löytyy myös laaja valikoima ruokalajeja."
  },
  {
    "name": "Biáng! Stockmann",
    "address": "Pohjoisesplanadi 41, 3. krs.\n00100 Helsinki",
    "description": "Biáng! on Stockmann-tavaratalossa sijaitseva, viihtyisä kiinalainen ravintola jossa tarjoillaan perinteistä Pohjois-Kiinalaista ruokaa. Monipuolinen buffettipöytä on katettu viikon jokaisena päivänä. À la carte -listalta löytyy laaja valikoima ruokalajeja."
  },
  {
    "name": "Big Bowl Noodle Restaurant",
    "address": "Malminrinne 2-4\n00100 Helsinki",
    "description": "Big Bowl Noodle Restaurant Kampissa on tuoreisiin, käsityönä valmistuviin nuudeleihin erikoistunut ravintola."
  },
  {
    "name": "Birgitta Hernesaari",
    "address": "Hernesaarenranta 2\n00150 Helsinki",
    "description": "Modernia puu-arkkitehtuuria edustava kesäkahvila jonka puuhiiligrillistä eväät merelliseen ja savunmakuiseen tilakokemukseen. Tilan on suunnitellut Arkkitehtitoimisto Talli (2014)."
  },
  {
    "name": "Bistro Aleksanteri",
    "address": "Albertinkatu 34\nHelsinki 00180",
    "description": "Radisson Blu Aleksanteri -hotellin ravintola Bistro Aleksanteri on eloisa mutta rauhallinen olohuone, johon kokoontuvat niin paikalliset kuin hotellin vieraat. Bistrossa tarjoillaan moderneja ja herkullisia bistroannoksia sekä parhaita oluita ja talon viinejä. Puutarhaterassi on avoinna kesäkuukausina."
  },
  {
    "name": "Bistro Bardot",
    "address": "Kluuvikatu 1\n00100 Helsinki",
    "description": "Bistro Bardot, ystävien kesken BB, on rento, kupliva ja luonteikas, moderni ja perinteistä ranskalaista ruokakulttuuria syleilevä bistro-brasserie Helsingin ytimessä. \r\n\r\nTarjolla on päivittäin aamupäivästä iltamyöhään huolella tehtyä ruokaa, joka korostaa laadukkaiden raaka-aineiden merkitystä. Sesonkeja mukailevan keittiön sydän on raw-baarin merenelävät, kasviksia, lintuja ja laadukasta lihaa unohtamatta. Menua täydentää ajankohtainen viini- ja drinkkivalikoima.\r\n\r\nBardotiin voi poiketa myös lasilliselle - ravintolan kyljestä löytyy samettinen drinkkibaari."
  },
  {
    "name": "Bistro Gimis",
    "address": "Ruoholahdenranta 3, Radisson Blu Seaside Hotel\n00180 Helsinki",
    "description": "Ruoholahdenrannan kortteliravintola, Bistro Gimis, on kuin pieni pala Helsinkiä itsessään - stadilaiset maut, liikkeellä olemisen fiilis ja meren läheisyys tekevät siitä kiinnostavan kohtaamispaikan keskellä mielenkiintoisinta kasvualuetta Helsingissä. Ravintola hyödyntää keittiössään pientuottajien helmiä ja stadilaista lähialueen ruokaa, kuten lähivesiltä pyydettyä kalaa."
  },
  {
    "name": "Bistro Manu",
    "address": "Eteläinen Rautatiekatu 4\n00100 Helsinki",
    "description": "Bistro Manu on Kampissa sijaitseva kortteliravintola, jossa mutkaton ruoka- ja juoma yhdistyvät mestarilliseen palveluun. Ravintola sijaitsee Original Sokos Hotel Presidentissä ja on avoinna joka päivä lounaasta iltaan. Menneinä aikoina manu oli nimitys mestarille ja oman alansa parhaalle ammattilaiselle. Bistro Manussa ruoka ja juoma tarjoillaan tämän päivän mestarillisella otteella. Ravintolan mestarien kädentaidot löytyvät soppakauhan varresta, cocktail-lasista sekä vieraita hurmaavista ravintolaelämyksistä. Bistro Manu kutsuu kylään nykypäivän mestarit ja arjen sankarit hyvän palvelun, ruoan ja juoman äärelle.\r\n"
  },
  {
    "name": "Bistro O - Olympiaterminaali",
    "address": "Olympiaranta 1\n00140 Helsinki",
    "description": "Ravintola - kahvila - baari Bistro O on Olympiaterminaalin eteläpäädyssä sijaitseva ravintola jolla on iso aurinkoinen terassi. \r\n\r\nBistro O tarjoaa arkisin laadukkaan monipuolisen lounasbuffetin."
  },
  {
    "name": "Bistro Ranta",
    "address": "Otaranta 2\n02150 Espoo",
    "description": "Espoossa sijaitsevan Radisson Blu Hotel Espoon ravintola Bistro Ranta on alueen kokoontumispaikka, jonka loistava ruoka, juoma ja palvelu takaavat uskolliset asiakkaat. Bistro Rannan mestarit luovat vieraille nautinnollisen kokemuksen ja valmistavat ruokaa ja cocktaileja rautaisella ammattitaidollaan."
  },
  {
    "name": "Bistro Sinne",
    "address": "Läntinen Aleksanterinkatu 1, Taidetehdas\n06100 Porvoo",
    "description": "Bistro Sinne - se alkuperäinen lähiruokaravintola Porvoossa - jossa on mahdollista nauttia pohjoismaalaisista, moderneista mauista niin lounaalla, illallisella kuin brunssilla."
  },
  {
    "name": "Bistro Vilho",
    "address": "Mikonkatu 23\n00100 Helsinki",
    "description": "Radisson Blu Plaza hotellin ravintola Bistro Vilho on miellyttävä paikka rentoutumiseen ja ruokailuun. Sen illallisruokalistalta löytyy klassisia bistroannoksia modernilla otteella sekä valikoima parhaita paikallisten pienpanimoiden oluita ja talon viinejä."
  },
  {
    "name": "BistroK",
    "address": "Hämeentie 68\n00550 Helsinki",
    "description": "Lounasta, naposteltavia ja illallista. Herkullisia ja helppoja annoksia, eurooppalaiseen tyyliin.\r\n\r\nBistro K huolehtii myös Musiikkiteatteri Kapsäkin väliaikatarjoilusta."
  },
  {
    "name": "Bites Burgers Kaivopiha",
    "address": "Mannerheimintie 3\n00100 Helsinki",
    "description": "Bites Burgers hampurilaisravintolassa on tarjolla simppeli mutta sitäkin maukkaampi menu. Listalla on hampurilaisia vain muutama lisälisukkeineen, myös vege ja veganinen. Spesiaaliversioita on myös tarjolla ja niistä tiedotetaan ravintolan sosiaalisissa medioissa. Ravintolassa on myös laaja olutvalikoima.\r\n\r\nBites Burgers löytyy myös Vallilasta sekä Kampista."
  },
  {
    "name": "Bites Burgers Vallila",
    "address": "Nokiantie 2-4\n00510 Helsinki",
    "description": "Vallilan teollisuusalueella toimistorakennuksessa sijaitsevassa askeettisessa mutta suositussa Bites hampurilaisravintolassa on tarjolla simppeli mutta sitäkin maukkaampi menu. Listalla on hampurilaisia vain muutama lisälisukkeineen, myös vege ja veganinen. Spesiaaliversioita on myös tarjolla ja niistä tiedotetaan ravintolan sosiaalisissa medioissa. Ravintolassa on myös laaja olutvalikoima.\r\n\r\nBites Burgers löytyy myös Kaivopihalta sekä Kampista."
  },
  {
    "name": "BLINIt",
    "address": "Sturenkatu 9\n00510 Helsinki",
    "description": "BLINIt tarjoilee aitoa venäläistä pikaruokaa; blinejä, pelmenejä ja keittoja."
  },
  {
    "name": "Block by Dylan",
    "address": "Eteläranta 18\n00130 Helsinki",
    "description": "Block by Dylan on Soupster Groupin ja tarkemmin Dylan-perheen 250 paikkainen ravintola komeassa jugendtalossa upealla paikalla Etelärannassa. Blockissa on tarjolla arkisin aamupala ja lounas sekä viikonloppuisin brunssi."
  },
  {
    "name": "Bollis bar & bistro",
    "address": "Urheilukatu 5\n00250 Helsinki",
    "description": "Bolt Arenan katutasossa sijaitseva Bollis Bar & Bistro tarjoaa lounasta arkisin sekä peli-iltoina näkymän kentälle. Ravintola aukeaa tuolloin tuntia ennen ottelun alkua ja sulkeutuu pelin päätyttyä."
  },
  {
    "name": "Bon Temps Cafe",
    "address": "Mannerheimintie 132\n00270 Helsinki",
    "description": "Laadukasta kahvia ja teetä, käsinleivottuja leivonnaisia ja maukasta lounasta. Viikonloppuisin erilaisia aamiaissettejä\r\n"
  },
  {
    "name": "Boon Nam",
    "address": "Lönnrotinkatu 4\n00120 Helsinki",
    "description": "Boon Nam tuo vivahteikkaita makuja hymyjen maasta - Thaimaasta. \r\n\r\nBoon Nam vaalii thaimaalaisen keittotaidon raikkaita ja parhaita makuja, hyödyntäen perinteisiä ruuanlaittotapoja sekä reseptejä, luoden näin heleän ja hienostuneen kokonaisuuden.\r\n\r\nBoon Namissa kaikki menun komponentit valmistetaan itse alusta lähtien hyödyntäen laadukkaimpia raaka-aineita. Annokset on suunniteltu jaettavaksi perheruokailutyyliin, koko pöytäseurueen kesken. \r\n\r\nHotel St. Georgen katutasossa sijaitseva, tunnelmaltaan lämpimän elegantti ravintola tarjoaa kiinnostavia makuja yhdistettyinä käsityönä tehtyihin cocktaileihin sekä loistaviin viineihin."
  },
  {
    "name": "Boulevard Social",
    "address": "Bulevardi 6\n00120 Helsinki",
    "description": "Boulevard Social tarjoaa Helsingin kauneimman puistokadun varrella ainutlaatuisen yhdistelmän Kreikan, Libanonin, Tunisian, Marokon ja muun Välimeren ympäristön puhtaita, perinteisiä makuja kekseliäällä tavalla yhdisteltynä. Ravintolan pelkistetty bistroympäristö on suunniteltu tuomaan ravintolassa vietetyn hetken pääosaan rakkaudella valmistetut omintakeiset maut. Boulevard Socialissa voi joko pistäytyä lasillisella baarimestareiden hemmoteltavana, varata pöydän ja lähteä makumatkalle pitkäksi illaksi tai nauttia ulkoilmasta ja raikkaista cocktaileista terassilla. \r\n"
  },
  {
    "name": "Brasserie Kämp",
    "address": "Pohjoisesplanadi 29\n00100 Helsinki",
    "description": "Brasserie Kämp on legendaarisen Hotel Kämpin korkeatasoinen ja hienostunut ravintola Pohjoisesplanadilla keskellä kauneinta historiallista Helsinkiä. Katutasossa sijaitseva Brasserie Kämp on ollut olennainen osa Helsingin sykettä jo vuodesta 1887.\r\n\r\nBrasserie Kämpin uusi, kirkastettu ruokafilosofia on yhdistelmä perinteistä ranskalaista ja Kämpin historiasta kumpuavaa suomalaista ruokakulttuuria.\r\nBrasserien kulturelli ilmapiiri ja ainutlaatuinen sijainti tarjoaa ihanteellisen miljöön niin lounaalle, iltapäiväteehetkelle kuin päivällisellekin."
  },
  {
    "name": "Brasserie Rivoli",
    "address": "Albertinkatu 38\n00180 Helsinki",
    "description": "Ravintola Rivoli on yksi Helsingin ensimmäisistä ranskalaistyyppisistä ravintoloista. Vuonna 1962 perustettu Rivoli on merkittävä uranuurtaja helsinkiläisessä ravintolakulttuurissa. Rivolin lämminhenkinen palvelu, rento ja historiallinen miljöö luovat upeat puitteet maistuvan ruoan sekä laadukkaiden viinien nauttimiseen."
  },
  {
    "name": "Britannia",
    "address": "Vanhaistentie 1\n00420 Helsinki",
    "description": "Britannia on gastro-pubi Kannelmäessä jo vuodesta 1973. Urheilua, laaja olutvalikoima sekä elävää musiikkia."
  },
  {
    "name": "Brokadi",
    "address": "Mäkelänkatu 45\n00500 Helsinki",
    "description": "Ravintola Brokadi Vallilassa avasi v.2017 ja on siitä lähtien tarjoillut niin perinteisiä kuin moderneja sichuanilaisia ruokalajeja.\r\n\r\nRavintola Brokadi myös Mall of Triplassa."
  },
  {
    "name": "Brokadi Ravintola Tripla",
    "address": "Fredikanterassi 1, Mall of Tripla\n00520 Helsinki",
    "description": "Autenttista, tuoretta, terveellistä ja maukasta sichuanilaista ruokaa, tulisen ruuan ystäville."
  },
  {
    "name": "Bronda",
    "address": "Eteläesplanadi 20\n00130 Helsinki",
    "description": "Bronda tarjoaa modernia brasserieruokaa rennoissa tunnelmissa perheille, kaveriporukoille, yrityksille sekä muille herkkusuille. Korkea, raikas ja vaikuttava tila Korkeavuorenkadun kulmassa suurine ikkunoineen varmistaa upeat puitteet makumatkalle Euroopan keittiösuurvaltoihin Espanjaan, Ranskaan ja Italiaan. Lisäksi myöhäisille tunneille saakka avoinna oleva Bar Bronda tarjoaa laajan valikoiman raikkaita, käsityönä tehtyjä cocktaileja sekä muita juomia. Klo 22.30 asti baarin puolella tarjolla on myös oma Bar Menu. Viikonloppuisin pisteenä i:n päälle illan rytmeistä vastaa DJ.\r\n"
  },
  {
    "name": "Broo Pizza & Bar",
    "address": "Malminkatu 16\n00100 Helsinki",
    "description": "Uusi Broo Pizza & Bar sijaitsee Helsingin ytimessä, kivenheiton päässä Kampin ostoskeskuksesta.\r\n\r\nLounaslistalta löytyy aina useita vaihtoehtoja, päivittäin vaihtuva Veljen annos sekä tietysti pizzaa. Tarjolla on aina myös runsas ja raikas salaattibuffet.\r\n\r\nIltaa myöten tunnelma tiivistyy ja pizzat täyttävät menun. Maukkaiden pizzojen lisäksi laadukkaat viinit sekä viikonloppuisin soittava DJ takaavat mahtavan tunnelman.\r\n\r\n"
  },
  {
    "name": "Brooklyn Cafe",
    "address": "Fredrikinkatu 19\n00120 Helsinki",
    "description": "Pieni pala Brooklynia Helsingissä, tarjolla bageleita, kuppikakkuja, cookieita jne."
  },
  {
    "name": "Bruket Cafe",
    "address": "Kaikukatu 4B\n00530 Helsinki",
    "description": "Bruket on kahvila, lounasravintola ja catering-yritys Elannon vanhassa, vuonna 1923 rakennetussa Leipätehtaassa, joka toimi leipomona 1990-luvulle saakka. Bruketin keittiön kulmakivinä ovat satokausiajattelu ja itse tehty herkullinen ruoka. Kesäisin terassi."
  },
  {
    "name": "Bruuveri",
    "address": "Fredrikinkatu 63 AB\n00100 Helsinki",
    "description": "Panimoravintola Bruuveri on tunnelmallinen oluen nautiskelijoiden ja muiden herkkusuiden kohtauspaikka Helsingin sydämessä, Kampin ostoskeskuksessa. \r\n\r\nRavintolan lasiseinän takana toimii Bruuverin pienpanimo Social Brewing Lab, \"Labra\", jonka keittokattiloiden yleviä muotoja ja panimopäällikön tuotekehittelyä voi ihastella kiireettömästi tuopin kera. Ravintolan hanoista löytyy rakkaudella ja taidolla pantuja oluita joita ei muualta löydä!\r\n\r\nBruuveri tarjoilee oluiden lisäksi mutkatonta ruokaa pieneen ja isoon nälkään, arkisin myös lounas noutopöydästä."
  },
  {
    "name": "Buenos Aires",
    "address": "Eerikinkatu 24\n00100 Helsinki",
    "description": "Buenos Aires tarjoilee virvokkeita, erikoiskahveja ja alkoholijuomia, kuten pienpanimotuotteita, huolella valittuja viinejä ja jaloja juomia. Buenos Aires on jo lyhyen olemassaolonsa aikana saavuttanut kulttuuriväen ja kaupunkilaisten suosion. Se on ennen kaikkea seurustelu- ja kohtaamispaikka aikuisille. Iltaisin asiakkaina ovat esimerkiksi elokuviin tai konsertteihin matkalla olevat kaupunkilaiset - unohtamatta lähiseudun ja asukkaita, joiden olohuoneena baari myös toimii.\r\n"
  },
  {
    "name": "Bumi Kallio",
    "address": "Viides linja 8\n00530 Helsinki",
    "description": "Bumi on aasialainen fuusioravintola, joka tarjoaa laajan valikoiman vietnamilaista, thaimaalaista ja taiwanilaista ruokaa. Bumin ruoka on maukasta, kevyttä ja terveellistä. Ruokalistalta löytyy myös vegaanisia ja gluteenittomia vaihtoehtoja. Bumissa pyritään luomaan kotoisa ja tervetullut tunnelma kaikille asiakkaille!"
  },
  {
    "name": "Bumi Pursimiehenkatu",
    "address": "Pursimiehenkatu 21\n00150 Helsinki",
    "description": "Bumi on aasialainen fuusioravintola, joka tarjoaa laajan valikoiman vietnamilaista, thaimaalaista ja taiwanilaista ruokaa. Bumin ruoka on maukasta, kevyttä ja terveellistä. Ruokalistalta löytyy myös vegaanisia ja gluteenittomia vaihtoehtoja. Bumissa pyritään luomaan kotoisa ja tervetullut tunnelma kaikille asiakkaille!"
  },
  {
    "name": "Bun2Bun Kallio",
    "address": "Vaasankatu 13\n00500 Helsinki",
    "description": "Bun2Bun on Suomen ensimmäinen 100% vegaaninen hampurilaisketju."
  },
  {
    "name": "Bun2Bun Kamppi",
    "address": "Urho Kekkosen katu 1, Kampin kauppakeskus, E-taso\n00100 Helsinki",
    "description": "Bun2Bun on Suomen ensimmäinen 100% vegaaninen hampurilaisketju."
  },
  {
    "name": "Bun2Bun Punavuori",
    "address": "Pursimiehenkatu 5\n00150 Helsinki",
    "description": "Bun2Bun on Suomen ensimmäinen 100% vegaaninen hampurilaisketju."
  },
  {
    "name": "Bun2Bun Redi",
    "address": "Hermannin rantatie 5, Kauppakeskus REDI\n00580 Helsinki",
    "description": "Bun2Bun on Suomen ensimmäinen 100% vegaaninen hampurilaisketju."
  },
  {
    "name": "Buongiorno caffe",
    "address": "Museokatu 46\n00100 Helsinki",
    "description": "Italialaishenkinen, myös aamiaista ja brunssia tarjoileva korttelikahvila Etu-Töölössä."
  },
  {
    "name": "Bus Gelato",
    "address": "Laivurinkatu 37\n00150 Helsinki",
    "description": "Bus Gelato tarjoilee itse valmistettua korkealaatuista artesaanijäätelöä Ullanlinnassa. Tarjolla myös itse tehtyä täytettyä focacciaa, salaatteja ja keittoja suolaiseen nälkään. Tarjolla on myös useita vegaanisia vaihtoehtoja niin jäätelöissä kuin suolaisissakin. Mahdollisuus myös nauttia esimerkiksi lasi proseccoa jäätelön kanssa, sillä kahvilalla on myös anniskeluoikeudet."
  },
  {
    "name": "Bär Bar",
    "address": "Fredrikinkatu 30\n00120 Helsinki",
    "description": "Bär Bar on suomalainen välipalabaari joka rakastaa suomalaisia marjoja. Marjat ovat ravinnerikkaita ja puhtaita raaka-aineita ja kasvavat luonnollisesti lähellä. Bär Bar valmistaa niistä herkullisia välipaloja, jotka tekevät pelkkää hyvää!"
  },
  {
    "name": "Café - Restaurant Ursula",
    "address": "Ehrenströmintie 3\n00140 Helsinki",
    "description": "Café Ursula on suosittu olohuone Kaivopuistossa, jossa tarjolla on laaja valikoima suolaisia ja makeita herkkuja, kotimaisia makuja tarjoava lounas, sunnuntaibrunssi sekä valikoima kahveja ja teetä. \r\n\r\nUrsula perustettiin meren rannalle Kaivopuistoon olympiavuonna 1952. Kahvila-ravintolan tuotto on käytetty alusta alkaen hyväntekeväisyyteen ja näin toimitaan edelleen."
  },
  {
    "name": "Cafe & Bistro Hiezu",
    "address": "Hiekkarannantie 11\n00100 Helsinki",
    "description": "Cafe & Bistro Hiezu on ympärivuotinen rantakeidas Hietarannan, Hietsun, uimarannalla.\r\n\r\nListalla on runsas valikoima suolaisia ja makeita herkkuja paikan päällä paistetuista artesaanipizzoista suussa sulaviin leivonnaisiin. Ravintola tarjoaa herkkujen lisäksi myös huikeat näkymät, ikkunasta avautuu suoraan hiekkarannalta näkymä merelle. \r\n\r\nKahvila-ravintola palvelee uimarannan ulkoilijoita ympäri vuoden!"
  },
  {
    "name": "Café Aalto",
    "address": "Pohjoisesplanadi 39, Akateeminen kirjakauppa 2.krs\n00100 Helsinki",
    "description": "Legendaarisen Rautatalon kahvilan modernistiset designkalusteet saivat uuden elämän, kun Café Aalto avattiin vuonna 1986 Akateemisessa kirjakaupassa. Alvar Aallon piirtämän Kirjatalon kahvila on keidas kaupungin sydämessä. Aalto tarjoilee herkulliset suolaiset ja makeat kahvileivät, salaatit sekä arkisin päivän keittolounaan. Lisäksi aamiaista on tarjolla päivittäin. Mannermaisen kulttuurikahvilan ilmapiirin viimeistelee pöytiintarjoilu."
  },
  {
    "name": "Café Amanda",
    "address": "Eteläesplanadi 8\n00130 Helsinki",
    "description": "Amanda on historiallinen arvokiinteistö keskeisellä sijainnilla Eteläesplanadin ja Fabianinkadun kulmassa. Talossa moderni design kohtaa historiallisen charmin.\r\n\r\nCafé Amandassa voi nauttia muun muassa maittavia lounassalaatteja, pieniä makeita herkkuja sekä erikoiskahveja, unohtamatta virvokkeita ja esimerkiksi Café Amandan omaa kuohuviiniä.  \r\n\r\nAmandassa voi järjestää myös monenlaisia tilaisuuksia."
  },
  {
    "name": "Café Anneberg",
    "address": "Waseniuksen puistotie 1\n00560 Helsinki",
    "description": "Tapahtumakahvila Anneberg Annalan huvilalla on avoinna kesäsunnuntaisin. Kahvila sijaitsee Annalalanmäellä, jossa voi käydä katselemassa poneja, ihastella Hyötykasviyhdistyksen mallipalstoja, Orangeriaa ja kävellä pienessä tammimetsässä. Pienen kävelymatkan päässä myös on alue, johon Helsinki alunperin perustettiin sekä kaunis koskisuvanto, johon Vantaanjoki laskee."
  },
  {
    "name": "Café Artist",
    "address": "Pohjoisesplanadi 2\n00130 Helsinki",
    "description": "Svenska Teaternissa sijaitseva Café Artist palvelee teatterin katutasolla. Tarjolla on leivonnaisia, keittolounasta, kahvia tai teetä, viinejä tai alkoholittomia juomia myös väliaikoina. Väliaikatarjoilua on myös Svenska Teaternin toisen kerroksen kauniissa yleisökahvilassa. Ennakkovaraus on suositeltavaa."
  },
  {
    "name": "Café Bar No 9",
    "address": "Uudenmaankatu 9\n00120 Helsinki",
    "description": "Cafe Bar No 9 on toiminut olohuoneena kultturelleille kaupunkilaisille jo vuodesta 1996. Ihmiset, eli henkilökunta ja asiakkaat, ovat se tärkein asia ravintolan suosion takana. Ravintolan seinillä on kuukausittain vaihtuvaa kotimaista taidetta. Keittiön klassikoiksi ovat muodostuneet mm. kanakorianteri -wok ja Pollo Limonello -pasta sekä koko päivän tarjottava aamiaislautanen."
  },
  {
    "name": "Café Bar Valimo",
    "address": "Suomenlinna B 13, Suomenlinnan vierasvenesatama\n00190 Helsinki",
    "description": "Valimo on Suomenlinnassa sijaitseva ravintola, terassi, vierassatama, juhlien järjestäjä ja paljon muuta. Kesäkausi alkaa yleensä vappuna ja jatkuu pitkälle syksyyn. Nurmikattoinen, 1870-luvulla rakennettu entinen ammusvalimo luo hienot puitteet viettää palanen kesälomaa lyhyen venematkan päässä kaupungin melskeestä. Koirat tervetulleita!\r\n"
  },
  {
    "name": "Café Blobba",
    "address": "Mustikkamaantie 2\n00570 Helsinki",
    "description": "Café Blobba on kesäkahvila ja terassi Mustikkamaalla, venetelakan alueella. Herkullisia lounaskeittoja ja leivonnaisia, mausteina hyvä ja positiivinen ilmapiiri nuorekaalla ja palvelualttiilla henkilökunnalla."
  },
  {
    "name": "Cafe Cardemumma",
    "address": "Kaarlenkatu 15\n00530 Helsinki",
    "description": "Cafe Cardemumma on kahvila Kalliossa jossa tarjolla on mm. puuroaamiainen ja lounas arkisin sekä brunssi lauantaisin."
  },
  {
    "name": "Cafe Carusel",
    "address": "Merisatamanranta 10\n00150 Helsinki",
    "description": "Cafe Carusel on viihtyisä kahvila-ravintola meren rannalla, Kaivopuiston tuntumassa. Jo yli 20 vuoden ajan lähiruoka ja ekologiset arvot ovat olleet toiminnan ydin. Caruselissa voi nauttia niin vastaleivotuista leivoksista kuin herkullisista lounas- sekä a la carte tuotteistakin. \r\n\r\nSäiden salliessa asiakkaita palvelee myös yksi Helsingin suurimmista terasseista. \r\n\r\n"
  },
  {
    "name": "Cafe Eira",
    "address": "Tehtaankatu 19\n00150 Helsinki",
    "description": "Kaunis kahvila ja hyvää kahvia. Kahvilan oma Ellen-koira tervehtii usein kahvilaan saapuvaa, ja kahvilaan ovat lemmikit tervetulleita. Tämä jugendtalo on Eiran ylpeys ja kahvilassa pääsekin hetkeksi 1900-luvun alun Helsingin maisemaan."
  },
  {
    "name": "Café Engel",
    "address": "Aleksanterinkatu 26\n00170 Helsinki",
    "description": "Cafe Engel on empirekeskustassa Sunnin talossa sijaitseva idyllinen kahvila, jonka ikkunapaikoista on näköala suoraan Tuomiokirkolle ja Senaatintorille. \r\n\r\nKesällä kahvilan sisäpihalla myös Kesäkino Engel, Suomen ainoa ulkoilmaelokuvateatteri (www.kinoengel.fi)."
  },
  {
    "name": "Café Esplanad",
    "address": "Pohjoisesplanadi 37\n00100 Helsinki",
    "description": "Pohjoisesplanadilla sijaitseva Café Esplanad on yksi Helsingin keskustan suosituimmista kahviloista. Café Esplanad tunnetaan erityisesti keskieurooppalaisesta tyylistään sekä ilmapiiristään, ja kahvila houkuttelee päivittäin suuren määrän innokkaita kahvi- ja lounasvieraita. Paikan houkuttimiin kuuluvat ehdottomasti kahvilan omassa leipomossa valmistetut, kuuluisat, isot korvapuustit. Jalkakäytävän puoleisella terassilla voi lisäksi seurata kaupungin vilinää ja samalla nauttia auringosta."
  },
  {
    "name": "Cafe Huvila",
    "address": "Mannerheimintie 13 B\n00100 Helsinki",
    "description": "Viihtyisä Cafe Huvila sijaitsee puistomiljöössä Hakasalmen huvilan yhteydessä (joka on osa Helsingin kaupunginmuseota), Finlandia-talon ja Musiikkitalon välissä."
  },
  {
    "name": "Cafe Java",
    "address": "Mannerheimintie 22-24, Lasipalatsi\n00100 Helsinki",
    "description": "Cafe Java löytyy Lasipalatsin kulmalta, keskeltä Helsingin ydinkeskustaa. Viihtyisä funkkistyyliin sisustettu kaksikerroksinen kahvila on kuin rauhallinen keidas kaupungin hektisen vilinän keskellä.\r\n\r\nPysähdy hemmottelemaan itseäsi kupillisella kuumaa kahvia tai teetä, suussa sulavalla leivonnaisella tai muhkealla paikan päällä täytetyllä sämpylällä.\r\n\r\nYläkerran näköalasalissa voit ruokailla kiireettä, tai vetäytyä lasillisen äärelle katselemaan kaupungin kiireistä menoa."
  },
  {
    "name": "Cafe Kobben",
    "address": "Katajanokanluoto\n00140 Helsinki",
    "description": "Katajanokanluoto on pienin yleisölle avoinna oleva retki- ja ravintolasaaarikohde Helsingin edustalla. \r\n\r\nCafe Kobben sijaitsee Katajanokanluodon korkeimmalla kohdalla. Upeasti entisöity Luotsitupa toimii kahvila-ravintolan sydämenä. Rantavajassa valmistuvat varmasti yhdet Suomen maukkaimmista pizzoista keittiömestari Arto Rastaan suunnittelmien reseptien mukaan, italialaisissa kaasupizzauuneissa. Pizzojen lisäksi tarjolla on kylmiä ja kuumia juomia sekä pientä suolaista ja makeaa. Harvinaista herkkua saarella ovat myös oikeat pannukahvit!\r\n\r\nSaarelle on kesäsesonkina säännöllinen veneyhteys Kauppatorin Kolera-altaalta."
  },
  {
    "name": "Cafe Korvari",
    "address": "Stenbäckinkatu 12\n00250 Helsinki",
    "description": "Osta kahvia, pullaa tai sämpylää ja istahda ikkunapöytään muistelemaan, kuinka Aki Kaurismäen Calamari Unionin (1985) Frankit suunnittelivat Eiran-matkaansa."
  },
  {
    "name": "Café Krypta - kesäkahvila",
    "address": "Kirkkokatu 18\n00170 Helsinki",
    "description": "Helsingin Tuomiokirkon kivijalassa sijaitseva Café Krypta on Helsingin tuomiokirkon kesäkahvila. Kryptassa voi nauttia maukkaita kahvilatuotteita yhdessä Helsingin erikoislaatuisimmista kahviloista. \r\n\r\nKryptassa järjestetään kesäaikaan vaihtuvia taidenäyttelyitä."
  },
  {
    "name": "Café Lasipalatsi",
    "address": "Mannerheimintie 22-24\n00100 Helsinki",
    "description": "Café Lasipalatsi on viihtyisä kahvila keskustassa joka tarjoaa huikean näkymän Mannerheimintien ihmisvilinään. Kahvilan oma leipuri valmistaa päivittäin uunituoreita, maistuvia tuotteita aamusta iltaan. Arkipäivisin tarjolla on lounasbuffet."
  },
  {
    "name": "Cafe Monami - Rastilan kartano",
    "address": "Karavaanikatu 4, Rastilan leirintäalue\n00980 Helsinki",
    "description": "Cafe Monami Rastilan kartanolla tarjoaa yksinkertaista ja maistuvaa, kartanolla alusta loppuun asti tehtyä kotiruokaa. Listalla on suolaisia piiraita, kakkuja ja muita leivonnaisia, sekä päivittäin keittolounasta. Moderni skandinaavinen sisustus Marimekko-kuoseineen yhdistettynä 1800-luvun puukartanoon ja sen historialliseen miljööseen luovat ainutlaatuisen viihtyisän ilmapiirin.\r\n\r\nKartanoa ympäröi puisto, jonka länsireunalla on uimaranta ja pohjoispuolella ulkoilupuisto. Kartanon itäpuolella on leirintäalue. \r\n"
  },
  {
    "name": "Cafe Monami Beach House",
    "address": "Harbonkatu 13\n00980 Helsinki",
    "description": "Cafe Monami Beach House sijaitsee Ramsinrannassa Vuosaaren melontakeskuksen yhteydessä. \r\n\r\nTarjolla suolaisia ja makeita leivonnaisia, pullaa, täytettyjä leipiä, kahvia, erikoiskahveja, kesäisiä drinkkejä, sekä olutta ja viiniä. \r\n\r\nPäivittäin myös lounasta."
  },
  {
    "name": "Cafe Neuhaus",
    "address": "Unioninkatu 32\n00100 Helsinki",
    "description": "Suklaamyymälä ja pieni kodikas kahvila joka tarjoaa herkullisia kahvijuomia ja maukkaita kaakaoita sekä myy belgialaista Neuhaus suklaata."
  },
  {
    "name": "Cafe Pequeño",
    "address": "Vaasankatu 11\n00500 Helsinki",
    "description": "Erikoiskahveja, argentiinalaisia empanadoja, pintxoja, sekä makeita ja suolaisia herkkuja ystävällisen palvelun kera. Myös viinibaari, jossa vaihtuva valikoima natuviinejä ja muita laadukkaita viinejä Espanjasta, Ranskasta, Italiasta ja Itävallasta."
  },
  {
    "name": "Café Regatta",
    "address": "Merikannontie 8\n00260 Helsinki",
    "description": "Vanhoilla tavaroilla ja huonekaluilla hauskasti sisustettu punainen pieni ulkoilmakahvila meren äärellä Töölössä. Uunituoretta korvapuustia ja maalaisromanttista tunnelmaa ympäi vuoden. Pihalla on myös mahdollista paistaa kahvilasta ostettua makkaraa avotulella. Regattaan ovat tervetulleita kaikki, myös lemmikit."
  },
  {
    "name": "Café Samovarbar",
    "address": "Lelumuseo, Suomenlinna C 66\n00190 Helsinki",
    "description": "Suomenlinnan Lelumuseon yhteydessä oleva pieni ja tunnelmallinen museokahvila on tunnettu laadukkaasta ja kauniista teetarjoilustaan jossa tee haudutetaan aina valmiiksi kannuun. Kahvila tarjoilee kotileipoisia herkkuja, ja sen ulkoterassilta voi ihailla ohi lipuvia laivoja. Valikoimaan kuuluvat myös mm. erikoiskahvit, viini, ja kesällä irtojäätelö."
  },
  {
    "name": "Café Saurahuone",
    "address": "Pohjolankatu 43\n00610 Helsinki",
    "description": "Saurahuone on moderni, vanha ja iätön. Urbaani ja talonpoikaishenkinen jokaisen sukupolven rentoutumispaikka. Lounasaikaan alusta asti paikan päällä raaka-aineista valmistettua keittoa sekä itse tehtyä saaristolaisleipää. Lounaat, quichet, smoothiet, kakut ja muut tuotteet aina hyvistä tuoreista raaka-aineista kahvilan omassa keittiössä. Lauantaisin tarjolla on brunssia. Nautiskele tovi tai jää viipymään."
  },
  {
    "name": "Cafe Silo",
    "address": "Suomenlinna C 10\n00190 Helsinki",
    "description": "Cafe Silo Suomenlinnassa sijaitsee aivan lauttarannan läheisyydessä. Tarjolla on paikan päällä leivottuja herkkuja, erikoiskahveja ja päivän keittoa. Kahvilan edessä on pieni terassi, josta voi ihailla linnoituksen menoa."
  },
  {
    "name": "Cafe Silva",
    "address": "Haukkalammentie 32\n02820 Espoo",
    "description": "Cafe Silva on kesäkahvila upeassa Nuuksion kansallispuiston ympäristössä aivan Haukkalammen rannassa. Kahvilan sijainti on myös suosittujen ulkoilureittien varrella. Nauti kahvia, haudutettua teetä tai vaikkapa virkistävä jäätelö samalla, kun ihailet upeaa järvimaisemaa. Cafe Silvasta löytyy myös pientä suolaista syötävää sekä leivonnaisia. Kahvila toimii vuokraamo Haukanpesän yhteydessä."
  },
  {
    "name": "Cafe Sose",
    "address": "Koskelantie 56\n00610 Helsinki",
    "description": "Sose tarjoilee vegaanista, kauden raaka-aineista valmistettua lounasta sekä tuoretta leipää ja leivonnaisia Käpylässä.\n\n"
  },
  {
    "name": "Café Strindberg",
    "address": "Pohjoisesplanadi 33\n00100 Helsinki",
    "description": "Strindbergin suurista ikkunoista voi seurata kaupungin elämää ja ihailla kaunista Helsinkiä.  Katutason mannermaisessa arvokkaassa interiöörissä tarjolla laaja kahvi- ja teevalikoima, sekä suolaisia ja makeita herkkuja. \r\n\r\nToisen kerroksen ravintolan ja sen yhteydessä sijaitsevan Kirjastobaarin kutsuva miljöö on yhtäaikaa vilkkaan kaupunkimainen ja miellyttävän tunnelmallinen. Korkeatasoinen keittiö yhdistää pohjoismaisen tyylin tämän päivän kansainvälisiin makuihin."
  },
  {
    "name": "Café Succès",
    "address": "Korkeavuorenkatu 2\n00140 Helsinki",
    "description": "Ullanlinnassa sijaitseva Café Succès on palvellut kanta-asiakkaitaan jo vuodesta 1957 lähtien. Kuten kahvilan sisarkahvilassa, Café Esplanadissa, tarjotaan myös täällä kaupungin suurimpiin kuuluvia korvapuusteja ja muita herkkuja."
  },
  {
    "name": "Café Talo",
    "address": "Hämeentie 2 B\n00530 Helsinki",
    "description": "Cafe Talo on sopiva sekoitus street baaria, ruokailua, teatteriravintolaa sekä yksityistilaisuuksia. Kahden kerroksen asiakastilat tarjoaa nuorekkaan ja trendikkään vaihtoehdon keskustan kuppiloille.\r\n\r\n"
  },
  {
    "name": "Café Tin Tin Tango",
    "address": "Töölöntorinkatu 7\n00260 Helsinki",
    "description": "Kahvila-baari johon on yhdistetty kahvila, galleria ja itsepalvelupesula. Oma leipomo tarjoaa perinteisiä kahvilatuotteita myös mukaan vietäviksi."
  },
  {
    "name": "Café Vanille",
    "address": "Suomenlinna C 18 III\n00190 Helsinki",
    "description": "Pieni kahvila venäläisessä kauppiaskorttelissa vastapäätä Suomenlinnan kirkkoa. Suolaisia ja makeita kotileivonnaisia. Avoinna kesällä joka päivä, talvikaudella viikonloppuisin."
  },
  {
    "name": "Café Viola",
    "address": "Kaisaniemenranta 2\n00170 Helsinki",
    "description": "Kaisaniemen kasvitieteellisessä puutarhassa sijaitseva Viola hurmaa huvilamaisella tunnelmallaan ja ainutlaatuisella ympäristöllään. Lounas tarjolla ma-pe 11-14."
  },
  {
    "name": "Cafe Zoceria Tarvaspää",
    "address": "Gallen-Kallelan tie 27\n02600 Espoo",
    "description": "Gallen-Kallelan museon pihapiirissä sijaitseva Cafe Zoceria Tarvaspää tarjoaa kahvinautintoja, teehetkiä, hyvää ruokaa ja juomaa."
  },
  {
    "name": "Cafetoria Roastery & Café",
    "address": "Runeberginkatu 31\n00100 Helsinki",
    "description": "Kaikki alkoi vuosituhannen vaihteessa, kun kaksi kulttuuria, latinalainen ja suomalainen, yhdistivät voimansa ja löysivät kahvin voiman kulttuurien yhdistäjänä sekä yhteisten tunteiden, käsitysten ja intohimojen välittäjänä. Siitä alkaen Cafetoria-paahtimo on toiminut erikoiskahvisektorilla. Tavoitteena on tuoda kaikkien ulottuville kahvin ainutlaatuiset aromaattiset ominaisuudet."
  },
  {
    "name": "Cafferino Oba",
    "address": "Kalevankatu 47\n00180 Helsinki",
    "description": "Obassa tarjoillaan mm. päivittäin leivottuja pitaleipiä eri täytteillä, salaatteja sekä kahvia & teetä sekä Oban omaa baklavaa tai Rawa Foodin raaka-kakkua."
  },
  {
    "name": "Capperi Keskusta",
    "address": "Rikhardinkatu 2\n00130 Helsinki",
    "description": "Capperi tarjoilee aitoa napolilaista pizzaa . Capperin noudattama Gourmet Pizza -tyyli yhdistää ylellisiä italialaisia raaka-aineita vahvaan perinteeseen. Pöytävaraus on suositeltavaa tehdä etukäteen."
  },
  {
    "name": "Capperi Oulunkylä",
    "address": "Siltavoudintie 9\n00640 Helsinki",
    "description": "Capperi tarjoilee aitoa napolilaista pizzaa Oulunkylässä. Capperin noudattama Gourmet Pizza -tyyli yhdistää ylellisiä italialaisia raaka-aineita vahvaan perinteeseen. Käytössä on aito napolilainen pizzauuni. \r\n\r\nCapperi Oulunkylä on valittu Helsingin parhaaksi pizzeriaksi 2020.  \r\n\r\nPöytävaraus on suositeltavaa tehdä etukäteen."
  },
  {
    "name": "Capperi Tripla",
    "address": "Fredikanterassi 2, Mall of Tripla 3. krs\n00520 Helsinki",
    "description": "Capperi tarjoilee aitoa napolilaista pizzaa, nyt myös Triplassa. Capperin noudattama Gourmet Pizza -tyyli yhdistää ylellisiä italialaisia raaka-aineita vahvaan perinteeseen."
  },
  {
    "name": "Caruzello by Dylan",
    "address": "Tivolikuja 1, Linnanmäki\n00510 Helsinki",
    "description": "Linnanmäen huvipuistossa sijaitsevan Caruzellon herkullisella buffetilla jaksaa hurvitella! Raikkaassa ja kesäisessä buffetissa on tarjolla useita herkullisia ja terveellisiä vaihtoehtoja. \r\n"
  },
  {
    "name": "Casa Largo",
    "address": "Asema-aukio 2\n00100 Helsinki",
    "description": "Casa Largo on moderni ja välitön espanjalainen ravintola Helsingin sydämessä, Sokoksen kulmassa. Täällä tapaksien nauttiminen on rentoa seurustelua ilman turhaa pönötystä ja keittiön loihtimat herkulliset maut paellasta crema catalanaan sekä monipuolinen viinilista saavat viihtymään vaikka koko illan. \r\n\r\n"
  },
  {
    "name": "Casbah",
    "address": "Kauppakartanonkatu 3\n00930 Helsinki",
    "description": "Kauppakeskus Eastonissa sijaitseva ravintola Casbah tarjoilee välimerellisiä makuja."
  },
  {
    "name": "Casino Helsinki",
    "address": "Mikonkatu 19\n00100 Helsinki",
    "description": "Fennia-korttelissa, Helsingin huvi- ja yöelämän keskuksessa Casino Helsinki tarjoaa monipuolista ja tasokasta viihdettä aikuisille. Kasinolle voi tulla pelaamisen lisäksi viettämään aikaa ja nauttimaan laadukkaasta ohjelmasta. Kasinoelämystä täydentävät monipuoliset ja tasokkaat ravintolapalvelut. Bar All Inissa nautitaan pientä purtavaa pelien lomassa, Casino Sports Barissa kattavan urheilutarjonnan lisäksi nautitaan hyvästä ruoasta ja kattavasta juomavalikoimasta, Pajazzo Trattoria tarjoaa italialaisia ruokaelämyksiä rennolla tyylillä ja Fennia Salongissa taas iltaa vietetään yhdistäen kansainvälisen tason viihde ihastuttavaan illalliseen!"
  },
  {
    "name": "Cella",
    "address": "Fleminginkatu 15\n00500 Helsinki",
    "description": "Cella on toiminut kodikkaana ruokailu- ja seurustelupaikkana vuodesta 1969 alkaen. Suomalaisen ruokalistan lisäksi ravintolassa on laaja valikoima viinejä, oluita ja siidereitä sekä suomalaisia että kansainvälisiä otteluita ja pelejä screeniltä."
  },
  {
    "name": "Chalupa Kallio",
    "address": "Porthaninkatu 3\n00530 Helsinki",
    "description": "Chalupa tarjoaa meksikolaistyylistä pikaruokaa, kuten tacoja, burritoja ja quesadilloja. Chalupalla on kymmenkunta toimipistettä, mm. Vallilassa, Lönkalla ja REDIssä."
  },
  {
    "name": "Chalupa Vallila",
    "address": "Mäkelänkatu 28 b 24\n00510 Helsinki",
    "description": "Chalupa tarjoaa meksikolaistyylistä pikaruokaa, kuten tacoja, burritoja ja quesadilloja. Chalupalla on kymmenkunta muuta toimipistettä, mm. Kalliossa, Lönnrotinkadulla ja REDIssä.\r\n"
  },
  {
    "name": "Chengdu Ravintola",
    "address": "Svinhufvudintie 1, Kulosaaren Ostoskeskus\n00570 Helsinki",
    "description": "Chengdu Ravintola on kiinalaisravintola Kulosaaressa joka tarjoilee sichuanilaista ruokaa. Ravintolan makumaailma on kursailematonta, hyvin maustettua, aitoa tulista kiinalaista ruokaa. Ravintolan ruokalistalta löytyy annoksia niin rohkeammalle makumatkailijalle, kuin myös miedompia makuja suosivalle."
  },
  {
    "name": "Chéri",
    "address": "Eteläesplanadi 22\n00130 Helsinki",
    "description": "Chéri on elegantti pariisilaishenkinen brasserie Esplanadin puiston laidalla, joka hurmaa​​ viettelevillä cocktaileillaan, hienostuneilla viineillään ja ranskalaisilla suosikkiherkuillaan. Menussa vastuullisuus on keskiössä ja kauden kasvikset ovat ensisijaisessa roolissa, mutta listalta löytyy myös valikoituja kala-, äyriäis- ja liha-annoksia.\r\n\r\nChérissä voi keskittyä nauttimaan ravintolan kepeästä pariisilaistunnelmasta ja erinomaisesta ruoasta."
  },
  {
    "name": "Chez Janet",
    "address": "Bulevardi 24\n00120 Helsinki",
    "description": "Pariisilainen teetalo ja kahvila, Chez Janet, on upea, värikäs ja ihastuttava ranskalainen kahvila Bulevardilla. Aidot pariisilaiset macaronsit ja Marie Antoinette teet maistuvat vaativaankin makuun. Chez Janet on erikoistunut aitoihin ranskalaisiin tuotteisiin, joiden avulla Suomessa asuvat ranskalaiset tuntevat olonsa kotoisaksi ja Ranskan ystävät voivat kerrankin tuntea olevansa unelmiensa kohteessa Ranskassa. Chez Janet tuo luoksesi ranskalaisia tuoksuja, makuja ja tyylejä."
  },
  {
    "name": "Chjoko",
    "address": "Liisankatu 9\n00170 Helsinki",
    "description": "Chjoko on Kruununhaassa sijaitseva käsintehtyyn suklaaseen ja jäätelöön syventyvä artesaanisuklaatehdas ja myymälä-kahvila.\r\n\r\nChjokolla on liike myös kauppakeskus REDIssä."
  },
  {
    "name": "Coffee Space",
    "address": "Erottajankatu, Dianapuisto\n00120 Helsinki",
    "description": "Coffee Space, take-away kahvia sekä vegaanisia raakaherkkuja mukaan Isosta Kahvikupista.\r\n\r\nUudenlainen take away-kahvilakonsepti on saapunut Helsingin keskustaan, Kolmikulmaan. Kahvilan vieraille ei ole tarjolla perinteisiä kahvilapöytiä, vaan tilalla on puutarhakeinu, kaunis puisto suihkulähteineen sekä useita penkkejä. Erilaiset itsetehdyt, vegaaniset raakaherkut täydentävät juomavalikoimaa. \r\n"
  },
  {
    "name": "Com Viet",
    "address": "Klaavuntie 11\n00910 Helsinki",
    "description": "Puotilan ostarilla sijaitseva pieni vietnamilainen ravintola joka tarjoilee pho-keittoja sekä muita annoksia."
  },
  {
    "name": "Coma",
    "address": "Museokatu 18\n00100 Helsinki",
    "description": "Museokadun tunnelmallinen ravintola Coma tarjoaa perinteikästä Välimeren ruokaa ja viiniä.\r\n"
  },
  {
    "name": "Conttibar",
    "address": "Hernesaarenranta 5\n00150 Helsinki",
    "description": "Conttibar on kesäkahvila/baari meren äärellä Hernesaaressa, myös livemusaa ja DJ-keikkoja."
  },
  {
    "name": "Daddy Greens Pizzabar Punavuori",
    "address": "Iso Roobertinkatu 26\n00120 Helsinki",
    "description": "Pizzabaari Daddy Greensissä voi nauttia hyvästä ruoasta ja seurasta rennossa ympäristössä. Napolilais-newyorkilaisen hybridipizzan erikoisuutena ovat pohjan rapeus, sitko sekä hiiltynyt ja hapahko aromi, jotka syntyvät korkean kypsennyslämpötilan sekä taikinan hapatusprosessin seurauksena."
  },
  {
    "name": "Daddy Greens Pizzabar Töölö",
    "address": "Humalistonkatu 3\n00250 Helsinki",
    "description": "Pizzabaari Daddy Greensissä voi nauttia hyvästä ruoasta ja seurasta rennossa ympäristössä. Ravintolan sisustuksessa on vuonna 1928 rakennetun talon henkeä. Napolilais-newyorkilaisen hybridipizzan erikoisuutena ovat pohjan rapeus, sitko sekä hiiltynyt ja hapahko aromi, jotka syntyvät korkean kypsennyslämpötilan sekä taikinan hapatusprosessin seurauksena.\r\n"
  },
  {
    "name": "Daily Dose",
    "address": "Hämeentie 68\n00550 Helsinki",
    "description": "Daily Dose on pieni italialainen ravintola ja viinibaari, jossa on kotoisa ja ystävällinen tunnelma."
  },
  {
    "name": "Dennis Bulevardi",
    "address": "Bulevardi 32\n00120 Helsinki",
    "description": "Dennis tarjoaa maukasta, konstailematonta ja hyvistä raaka-aineista tehtyä ruokaa ja rehtiä palvelua 40 vuoden kokemuksella. Ruoka edustaa \"kotona tehtyä\" italialaista keittiötä ja Dennis tunnetaan ainutlaatuisista pizzoista. Menussa on myös huomioitu erikoisruokavaliot, joten Denniksessä on kiva käydä isommallakin porukalla."
  },
  {
    "name": "Dennis Napoletana Kamppi",
    "address": "Kansakoulukatu 1\n00100 Helsinki",
    "description": "Dennis tarjoaa maukasta, konstailematonta ja hyvistä raaka-aineista tehtyä ruokaa ja rehtiä palvelua 40 vuoden kokemuksella."
  },
  {
    "name": "Don Corleone",
    "address": "Urho Kekkosen Katu 1, Kampin kauppakeskus\n00100 Helsinki",
    "description": "Yksinkertainen konsepti, joka perustuu loistavaan ruokaan, mutkattomaan ja mukavaan ympäristöön sekä kohtuullisiin hintoihin. Italialaisen keittiömestarin menu tarjoaa pastojen lisäksi myös loistavia alkupaloja, tuoreita salaatteja sekä tiriseviä herkkuja aidosta laavakivigrillistä."
  },
  {
    "name": "Dragon Spring",
    "address": "Urho Kekkosen katu 4-6\n00100 Helsinki",
    "description": "Pieni kiinalainen ravintola kauppakeskus Kampin vieressä."
  },
  {
    "name": "Dylan Böle",
    "address": "Pasilankatu 10\n00240 Helsinki",
    "description": "Dylan Böle on Soupster Familyn jo yhdeksäs Dylan. Lounasravintola Dylanin noutopöydät notkuvat tuoreita, terveellisiä ja maukkaita salaatteja ja lämpimiä ruokia. Dylan Bölessä lounas nautitaan kauniissa ja valoisassa salissa tai sään salliessa vehreällä sisäpihan terassilla.\r\n\r\nDylan Bölen alakerrasta löytyy myös aulakahvila, joka tarjoilee maukasta aamiaista joka arkiaamu."
  },
  {
    "name": "Dylan Corner",
    "address": "Kuortaneenkatu 2\n00510 Helsinki",
    "description": "Vallilassa sijaitsevan Dylan Cornerin noutopöydät notkuvat tuttuun Dylanin tyyliin tuoreita, terveellisiä ja maukkaita salaatteja ja lämpimiä ruokia, itsetehtyjen leipien, vesien ja kahvin/teen kera. Joka päivä tarjolla on myös vegaaninen lämmin ruoka."
  },
  {
    "name": "Dylan Kottby",
    "address": "Mäkitorpantie 3\n00620 Helsinki",
    "description": "Dylan Kottby on päivisin 150-paikkainen lounasravintola. Iltaisin ja viikonloppuisin ravintola muuttuu tilausravintolaksi\r\n"
  },
  {
    "name": "Dylan Marmoripiha",
    "address": "Keskuskatu 3 A\n00100 Helsinki",
    "description": "Dylan Marmoripiha tarjoilee lounasta ja brunssia aivan Helsingin sydämessä, Keskuskadulla Alvar Aallon suunnittelemassa Rautatalossa.  Viikonloppuisin tarjolla on brunssi."
  },
  {
    "name": "Dylan Milk",
    "address": "Porkkalankatu 5\n00180 Helsinki",
    "description": "Dylan Milk on lounasbistro Ruoholahdessa jossa on tarjolla arkipäivisin aamiaista, lounasta sekä laadukkaita välipaloja. Iltaisin ravintola muuttuu juhlatilaksi.\r\n"
  },
  {
    "name": "Döner Harju City",
    "address": "Kaivokatu 8, Kauppakeskus Citycenter 2. krs\n00100 Helsinki",
    "description": "Suomen parjhaimpiin kuuluvaa döneriä sekä liha- että kasvissyöjille Helsingin ytimessä."
  },
  {
    "name": "Döner Harju Flemari",
    "address": "Fleminginkatu 23\n00500 Helsinki",
    "description": "Suomen parhaimpiin kuuluvaa döneriä sekä liha- että kasvissyöjille. Ensimmäinen ja alkuperäinen Döner Harju.\r\n\r\n\r\n"
  },
  {
    "name": "Early Bird",
    "address": "Kolmas linja 12\n00530 Helsinki",
    "description": "Aamiaista on tarjolla koko päivän tässä Kalliossa sijaitsevassa kahvilassa. Tarjolla myös vegaaninen versio."
  },
  {
    "name": "East Market",
    "address": "Firdonkatu 2 A, Mall of Tripla 3.krs\n00520 Helsinki",
    "description": "East Market yhdistää modernit aasialaiset ruokakonseptit urbaania aasialaista ruokamarkettia mukailevassa ympäristössä. East Marketissa on tarjolla mm. niin käsintehtyjä dumplingseja, raikkaita wokkeja ja salaatteja, ramenkeittoja ja korealaista BBQ:ta."
  },
  {
    "name": "Edvin Pizza Napoletana",
    "address": "Kauppamäki 10\n02780 Espoo",
    "description": "Espoon Kauklahdessa sijaitsevassa Edvinissä tarjoillaan hapanjuureen leivottuja artesaanipizzoja take away.\r\n\r\nEdvinin sydämenä hohkaa aito italialainen Valoriani-kiviuuni, jonka avotulessa kypsyvät reunoiltaan kuohkeat, käsintehdyt pizzat. Pizzoihin käytetään ensiluokkaisia kotimaisia ja italialaisia raaka-aineita, jotka kunnioittavat napolilaisen pizzan perinteitä."
  },
  {
    "name": "Ekberg",
    "address": "Bulevardi 9\n00120 Helsinki",
    "description": "Ekberg on Suomen vanhin leipomo, konditoria ja kahvila, joka sijaitsee keskustassa tunnelmallisen Bulevardin varrella. Kauniissa, vastikään uudistetussa kahvilassa voi antaa ajan pysähtyä ja nauttia herkullisista tarjoiluista sekä kiireettömästä tunnelmasta. Ekberg Café on avoinna joka päivä, poikkeuksena muutamat pyhäpäivät. Aamu käynnistyy runsaalla ja maittavalla aamiaisella, joka katetaan noutopöytään maanantaista sunnuntaihin. Lounastarjoilu alkaa klo 11. Kahville ja leivokselle tai à la carte -listan antimista nauttimaan voi poiketa mihin aikaan tahansa. Kesäisin avoinna oleva terassi tarjoaa mahdollisuuden juoda kahvikupposen ulkoilmassa ja seurata Helsingin vilkasta elämää Bulevardilla. Viereisessä konditoriamyymälässä tuoretta leipää ja pullaa on tarjolla heti aamusta. Myymälän valikoimassa on vanhoja, konditorian alkuajoilta periytyvillä resepteillä leivottuja tuotteita sekä uudempia, kausittain vaihtuvia herkkuja."
  },
  {
    "name": "El Fant",
    "address": "Katariinankatu 3\n00170 Helsinki",
    "description": "Helsingin kaupunginmuseon tiloissa toimiva kahvila El Fant vannoo ammattitaidolla valmistettujen pienpaahtimokahvien ja valikoitujen laatuviinien nimeen. Kahvit tulevat Good Life Coffeen paahtimolta Helsingistä ja suolaiset sekä makeat herkut tulevat omasta leipomosta paikan päältä. Tarjolla on lisäksi aamiaista lauantaisin."
  },
  {
    "name": "Encanto - Art cafe",
    "address": "Maneesikatu 3\n00170 Helsinki",
    "description": "Hurmaava pieni taidekahvila Kruununhaassa. Tarjolla aamupalaa, lounasta ja laadukkaita erikoiskahveja. Kuukausittain vaihtuvia taidenäyttelyitä, livekeikkoja ja muita kulttuuritapahtumia.\r\n"
  },
  {
    "name": "Eromanga",
    "address": "Pohjoinen Makasiinikatu 6\n00130 Helsinki",
    "description": "Kasarmitorin kupeessa on tarjolla uunituoreita leipomotuotteita, kahvia ja perinteistä kahvilatunnelmaa. Kaikki Eromangan erinomaiset tuotteet leivotaan tuoreeltaan ja käsin päivittäin kahvilan yhteydessä sijaitsevassa leipomossa. Valikoimasta löytyy perinteiset suolaiset ja makeat herkut, piirakat, pullat ja laadukkaat leivät. Kuuluisin tuote on lihapiirakka, eli ''lihis'', joka on valmistettu samalla salaisella reseptillä vuodesta 1946. Eromangan Makasiinikadun kahvila on kaikenlaisten kaupunkilaisten kohtaamispaikka, ja ovet avataan jo klo 7.30 aamun sarastaessa. \r\n\r\nEromangan tuotteita myydään myös useissa pääkaupunkiseudun ruokakaupoissa."
  },
  {
    "name": "Espa",
    "address": "Pohjoisesplanadi 17\n00170 Helsinki",
    "description": "Ravintola Espa tarjoaa yksinkertaista, hyvistä raaka-aineista rakkaudella tehtyä ruokaa, yksinkertaisia annoksia laajalta listalta. Ruokia voi syödä missä tahansa järjestyksessä, yksin tai jakaen. Espa on paikka, joka sopii moneen tilanteeseen: niin nopeaan iltapalaan kuin juhlavaan illalliseenkin."
  },
  {
    "name": "Espresso Edge",
    "address": "Liisankatu 29\n00170 Helsinki",
    "description": "Tarjolla paljon herkullisia ja terveellisiä aamiais-, lounas- ja illallisvaihtoehtoja. Runsaasti kasvis- ja vegaanivaihtoehtoja. Kesällä voi nauttia lasillisen kuplivaa aurinkoisella terassilla."
  },
  {
    "name": "Fafa's Iso Roba",
    "address": "Iso Roobertinkatu 2\n00120 Helsinki",
    "description": "Fantastisia falafelejä, tuoreita pita-leipiä ja muita katukeittiön herkkuja tuoreista raaka-aineista mutkattoman ystävällisen palvelun saattelemana. Fafa's on aina lähellä. Pelkästään Helsingissä Fafa's ravintoloita on jo lähes parikymmentä."
  },
  {
    "name": "Farang",
    "address": "Arkadiankatu 6\n00100 Helsinki",
    "description": "Farang on moderni kaakkois-aasialainen ravintola, jonka ruoka ja juoma tarjoavat uniikin, raikkaan makumatkan suoraan Kaakkois-Aasian tunnelmiin. Farangin maut perustuvat aina tuoreuteen, käsityöhön, ja vahvaan aasialaisen keittotaidon osaamiseen. Ravintolan ruokailutapa pohjautuu kaakkois-aasiasta tuttuun sosiaaliseen syömiseen, ruoan jakamiseen ja maistelemiseen."
  },
  {
    "name": "Faro Channelside Bar & Restaurant",
    "address": "Kellosaarenranta 2\n00180 Helsinki",
    "description": "Kanavaravintola keskellä urbaania ja kasvavaa asuinaluetta Ruoholahdessa. Modernisti ja ajattomasti sisustetussa Farossa näkyy dSign Vertti Kiven kädenjälki. Bistron antimiin kuuluvat tuoreista raaka-aineista valmistetut helposti lähestyttävät maukkaat ja mutkattomat annokset. Osittain meren päällä lepäävällä terassilla voi kesäpäivinä nauttia raikkaita juomia ja Bistron herkkuja, isoon tai pieneen nälkään. Perjantaiaamiaisella nautitaan tuoreesta kahvista, vastapaistetuista croissanteista, toasteista tai tuoreesta leivästä. \r\n\r\nFaron vierestä kulkee merenrannan kävely- ja pyöräilyreitti, joka ulottuu Vuosaaresta Espooseen. Myös omia venepaikkoja."
  },
  {
    "name": "Fat Lizard Helsinki City",
    "address": "Mannerheimintie 3\n00100 Helsinki",
    "description": "Ronskia ja rehevää ruokaa laadukkaista raaka-aineista, ilman krumeluureja tai kikka kuutosia. Siihen päälle hyvää pöhinää sekä juomaa.\r\n\r\nFat Lizardissa uskotaan näyttävään, käsillä tehtyyn ja runsaaseen ruokaan. Herkulliset pizzat leivotaan elävän tulen loimutessa ja hanasta löytyy aina laaja valikoima Fat Lizardin sekä muiden pienpanimoiden oluita.\r\n\r\nFat Lizardit löytää myös Herttoniemen Hertsistä sekä Espoon Otaniemestä."
  },
  {
    "name": "Fat Lizard Herttoniemi",
    "address": "Linnanrakentajantie 2, Hertsi\n00880 Helsinki",
    "description": "Ronskia ja rehevää ruokaa laadukkaista raaka-aineista, ilman krumeluureja tai kikka kuutosia. Siihen päälle hyvää pöhinää sekä juomaa.\r\n\r\nPerille itäisen Helsingin keitaaseen löytää seuraamalla Herttoniemen metroasemalta itään viettäviä maiharinjälkiä. Hertsin kokeilla ei ole käsivoitein siloteltuja elämänviivoja, vaan vähintään kolmen päivän sänki. Sama särmä satsi ja tarjoama kuin Otaniemessä, mutta enemmän kerroksia ja kierroksia. \r\n\r\nHeille, jotka kapuavat ylemmäs, löytyy Penthouse. Hulppeat saunatilat (Penthouse SAUNA) omalla jacuzzilla sekä tunnelmallinen kabinetti yksityisiin tapahtumiin (Penthouse ROOM).\r\n\r\nFat Lizardit löytää myös Mannerheimintieltä, Kolmen Sepän aukion laidalta sekä Otaniemestä, Espoosta."
  },
  {
    "name": "Fat Lizard Otaniemi",
    "address": "Tietotie 1\n02150 Espoo",
    "description": "Ronskia ja rehevää ruokaa laadukkaista raaka-aineista, ilman krumeluureja tai kikka kuutosia. Aidossa italialaisessa puu-uunissa valmistuu myös aito espoolainen pizza ja puuhiiligrillissä paistuvat mehevät pihvit poikineen. Siihen päälle hyvää pöhinää sekä juomaa.\r\n\r\nPitkän messinkisen baaritiskin takaa löytyy aina kattava valikoima paikallisen Fat Lizardin sekä muiden pienpanimoiden oluita.\r\n\r\nLänsimetrolla pääsee lähes ravintolan oven viereen ja parkkipaikkoja ravintolan läheisyydessä on reilusti.\r\n\r\nFat Lizardit löytää myös Herttoniemen Hertsistä sekä Mannerheimintieltä, Kolmen Sepän aukion laidalta."
  },
  {
    "name": "Fat Ramen",
    "address": "Lönnrotinkatu 34, Hietalahden kauppahalli\n00180 Helsinki",
    "description": "Fat Ramen on ravintola uniikissa Hietalahden kauppahallissa joka on erikoistunut nuudeli- eli ramenkeittoihin. Ravintola on ensimmäinen lajiaan Helsingissä. Ravintolassa yhdistellään aasialaisia ja pohjoismaisia makuja ja käytetään aina sesongin parhaita raaka-aineita."
  },
  {
    "name": "Fazer Café Kluuvikatu 3",
    "address": "Kluuvikatu 3\n00100 Helsinki",
    "description": "Fazer Café Kluuvikatu 3 on modernin klassinen kahvila, jossa voi kokea makuelämyksellisen aamiaisen, lounaan tai kahvihetken. Karl Fazerin ranskalais-venäläinen konditoria avattiin Kluuvikadulla vuonna 1891. Kahvilassa kohtaavat nykypäivän trendit ja Fazerin 120-vuotiset perinteet sulassa sovussa. Tarjolla on makeita ja suolaisia herkkuja, monipuolinen valikoima kahvia, teetä ja kaakaota, muhkeita aamiaisia sekä maukkaita keitto- ja salaattilounaita. Käynnistä arkipäivä aamiaisella ja herkuttele viikonloppuisin brunssilla. Fazer Café Kluuvikatu 3 on myös herkkukauppa, josta löytää uunituoretta leipää, paikan päällä tehtyjä ihania leivonnaisia sekä suklaata ja makeisia. Osa kahvila-konditorian makeista herkuista valmistetaan yhä edelleen Kluuvikadulla ja kondiittorien työskentelyä voi seurata lasin takaa."
  },
  {
    "name": "Fiasco? by Ultima",
    "address": "Eteläranta 16, sisäpiha\n00130 Helsinki",
    "description": "Ravintola Ultima on tulevaisuuden ruokaa tutkiva ravintola. Koska vallitsevan maailmantilanteen vuoksi ei vuoden 2020 kesälomilla tehty Italian reissuja, päätti Italia-fani Henri Alen tuoda Italian Etelärantaan: Fiasco? by Ultima -nimellä kulkeva italialainen pop up -ravintola valloitti Ultiman elokuussa 2020. \r\n\r\nUltima Fiascossa inspiraatio haetaan Italiasta, mutta käytössä ovat suurimmaksi osaksi parhaat kotimaiset raaka-aineet."
  },
  {
    "name": "FINLANDIA CAFÉ",
    "address": "Mannerheimintie 13 E\n00100 Helsinki",
    "description": "FINLANDIA CAFÉ on Finlandia-talosta löytyvillä Alvar Aallon alkuperäisillä huonekaluilla kalustettu täysin uniikki paikka lounaalle, kahville tai lasilliselle samppanjaa työpäivän päätteeksi. Aitoa kestävää designia pursuava kahvila tarjoilee makeaa ja suolaista naposteltavaa sekä monipuolisen päivittäin vaihtuvan lounaan. \r\n\r\nKahvilan yhteydessä toimivassa Galleria Verandassa voi tutustua vaihtuviin näyttelyihin kahvilan aukioloaikoina. FINLANDIA CAFÉssa järjestetään myös ilmaiskonsertteja sekä muita tapahtumia.\r\n\r\nKahvilaan on esteetön pääsy niin lastenvaunujen kanssa kuin liikuntarajoitteisille.\r\n\r\nFinlandia Cafén terassi on rento kesäterassi upealla näköalalla Töölonlahden rannassa. Terassi sijaitsee Finlandia-talon pohjoispäädyssä aivan rannan tuntumassa. Terassilla voi nauttia raikkaita salaatteja, täytettyjä leipiä, jäätelöä ja vaihtuvia makeita herkkuja. Terassilla on myös anniskeluoikeudet."
  },
  {
    "name": "Finlandia Caviar Shop & Restaurant",
    "address": "Eteläranta 20\n00130 Helsinki",
    "description": "Finlandia Caviar Shop & Restaurant on luotu kaviaarin nautintohetkiä varten. Finlandia Caviarissa voi maistella kaviaareja ja mätejä paikan päällä sekä ostaa niitä mukaan. Paikan päällä on päivittäin tarjolla myös tuoreita ostereita."
  },
  {
    "name": "Finnjävel Sali",
    "address": "Ainonkatu 3\n00100 Helsinki",
    "description": "Finnjävel Salissa vallitsee hetki suomalaisesta sielunmaisemasta. Tarjolla on rehtiä suomalaista ruokaa ja hilpeää tunnelmaa lounaasta iltaan."
  },
  {
    "name": "Finnjävel Salonki",
    "address": "Ainonkatu 3\n00100 Helsinki",
    "description": "Finnjävel Salonki tarjoaa uniikin matkan suomalaisuuteen ja satoja vuosia vanhaan pohjoiseen ruokakulttuuriin. Salongissa tulkitaan perinneruokia ja ruokalajeja uniikilla tavalla, tuoden juurevat annokset salonkikelpoisiksi tämän päivän fine dining -ravintolaan.\r\n\r\nRavintolalle pn myönnetty yksi Michelin-tähti."
  },
  {
    "name": "Fisken på Disken",
    "address": "Urho Kekkosen katu 1, Kampin keskus 5krs.\n00100 Helsinki",
    "description": "Pintaa syvempiä makuja on tarjolla tässä osteribaarin ja kalaravintolan yhdistelmässä Kortteli-ravintolakeskittymässä, Kampin kauppakeskuksen viidennessä kerroksessa. Ruoka valmistetaan upeista raaka-aineista ammentaen niin klassisesta kuin modernista keittotaidosta."
  },
  {
    "name": "Fisu & Ranet",
    "address": "Urho Kekkosen katu 1, Kampin kauppakeskus E-taso\n00100 Helsinki",
    "description": "Perinteisen kaavan mukaiset, aidot ja autenttiset fish and chipsit, valmistettu laadukkaista raaka-aineista."
  },
  {
    "name": "Flavourium",
    "address": "Fredikanterassi 1, Mall of Tripla, 5.krs.\n00520 Helsinki",
    "description": "Flavourium inspiroituu eri lokaatioista, niiden mauista ja kulinaristisista kulttuureista. Jokainen annos on oma kokonaisuutensa, joka vie makumatkalle eri kohteisiin Flavouriumin tyyliin.\r\n\r\nFlavouriumista löytyy myös cocktail lounge. Suomen ja maailman parhaaksi valittu cocktailbaari A21 on saanut jatkoa. A21 on nyt syntynyt uudelleen osana Flavouriumia ja saanut nimekseen The One. Baarin tarina rakentuu A21 klassikoiden, \"World Tour\"-makujen ja elämyksellisten cocktailien ympärille."
  },
  {
    "name": "Fly Fusion Cafe",
    "address": "Luotsikatu 5\n00160 Helsinki",
    "description": "Fly Fusion Cafe on lifestyle-kahvila, joka on tunnettu tuoreista ja terveellisistä lounaista, kakuista, salaateista, nuudeliruoista sekä  ystävällisestä henkilökunnasta."
  },
  {
    "name": "Flät no 14",
    "address": "Viides linja 14\n00530 Helsinki",
    "description": "Flät no 14 on kaupunkilaisen olohuone Kalliossa, jonka menusta valitset itse herkullisimmat elementit unelmiesi aamiaiseen. Breku saatavilla klo 16 iltapäivällä asti! Iltamenu (klo 16 eteenpäin) tarjoaa huikeita pieniä ruoka-annoksia, joiden keskiössä ovat lähituotetut raaka-aineet ja laatu. Kahvit tulevat paikallisesta paahtimosta ja muu juomavalikoima koostuu niin mielenkiintoisista pienpanimo-oluista kuin kohtuuhintaisista laadukkaista viineistä. \r\n\r\nRentoa menoa herkuttelijoille!"
  },
  {
    "name": "Fornitaly",
    "address": "Jollaksentie 54 B\n00850 Helsinki",
    "description": "Jollaksesta Itä-Helsingistä löytyvä \"navetassa\" toimiva pizzeria, jossa italialainen yli kahdenkymmenen vuoden kokemuksen omaava pizzamestari ystävineen loihtii aitoja italialaisia pizzoja. Pöytiä ei ole joten pizzat ostetaan take away-periaatteella. Viikottain myynnissä ns. viikon pizza, peruspizzalista, focaccia-leipää sekä muita italialaisia leipomotuotteita."
  },
  {
    "name": "Frangipani Bakery Sompasaari",
    "address": "Sompasaarenlaituri 6\n00540 Helsinki",
    "description": "Sompasaaren Frangipani Bakery on avara ja valoisa kahvila meren rannalla, kauppakeskus REDIn vieressä. Tuotteet valmistetaan paikan päällä itse alusta loppuun. Tarjolla on aina kakkuja ja kuppikakkuja, herkullisen täydellisiä tuoreita sconsseja unohtamatta. Arkisin tarjolla kasvislounas."
  },
  {
    "name": "Frans & Amélie",
    "address": "Kluuvikatu 8\n00100 Helsinki",
    "description": "Viihtyisä ja mutkaton Frans & Amélie Helsingin keskustassa on rennon ranskalainen bistro, jossa yhdistyvät rakkaus hyvään ruokaan ja siitä nauttimiseen."
  },
  {
    "name": "Fratello Torrefazione",
    "address": "Yliopistonkatu 6\n00100 Helsinki",
    "description": "Kluuvin ostoskeskuksen yhteydessä sijaitseva Fratello Torrefazione on Aleksanterinkadulla sijaitsevan La Torrefazionen veljeskahvila, jossa sijaitsee myös Suomen ensimmäinen Sifoni-baari. Kahvilassa tarjoillaan mm.leipiä ja leivonnaisia, gelatoa sekä arkisin lounasta."
  },
  {
    "name": "Fredde's",
    "address": "Fredikanterassi 1, Mall of Tripla\n00520 Helsinki",
    "description": "Ravintola Fredde's Pasilan Mall of Triplassa on aina kätevästi matkan varrella olitpa lähellä töissä tai menossa huippuartistin keikalle, lätkämatsiin tai messuille.\r\n\r\nKeittiön sydän on hiiligrilli, jossa paistuvat keittiömestarien tarkoin valitsemat sesongin parhaat kasvikset sekä taidolla valitut lihat ja kalat rapean herkullisiksi ja paahteisiksi.\r\n\r\nRavintolan ylpeys on aidoilla puilla lämmitettävässä napolilaisessa pizzauunissa paistettua pizza. Se vie sydämen ensi puraisulla!"
  },
  {
    "name": "Funky Kitchen",
    "address": "Tivolikuja 1, Linnanmäen huvipuisto\n00510 Helsinki",
    "description": "Rennon sporttiravintolan keittiössä Linnanmäellä kokataan Amerikan tyyliin: finger foodia, raikkaita salaatteja ja tietysti kotitekoisia burgereita. Lapsille leikkipaikka ja oma ruokalista."
  },
  {
    "name": "Gaijin",
    "address": "Bulevardi 6\n00120 Helsinki",
    "description": "Ravintola Gaijin vie makumatkalle Pohjois-Aasiaan. Upealla paikalla Bulevardin ja Yrjönkadun kulmassa sijaitseva ravintola tarjoaa uniikin makuelämyksen yhdistelemällä Japanin, Korean ja Pohjois-Kiinan perinteisiä ruokia modernilla tavalla. Lämmintä läheisyyttä henkivä ravintolasali, rento lounge bar, sosiaalinen 'communal table' ja aurinkoinen terassi tarjoavat jokaiseen herkkuhetkeen sopivan ympäristön. Irasshaimase eli japaniksi tervetuloa!"
  },
  {
    "name": "Gallows Bird Tapiola",
    "address": "Länsituuli 5, Kauppakeskus Ainoa\n02100 Espoo",
    "description": "Espoon ensimmäinen ravintolapanimo Gallows Bird brew-pub sijaitsee kauppakeskus Ainoan länsipäädyssä. Oman panimon oluiden lisäksi tarjolla on myös maukasta pubiruokaa."
  },
  {
    "name": "Garden by Olo",
    "address": "Helenankatu 2\n00170 Helsinki",
    "description": "Garden by Olo on palkitun ravintola Olon \"takatasku\". Vastapainona Olon hillitylle eleganssille, Garden tarjoaa vielä rennommalla ilmapiirillä varustetun bistron. Bistro sijaitsee sisätilaksi muutetulla sisäpihalla, ravintola Olon naapurissa Helsingissä Helenankadulla. Lasikatolla katetun sisäpihan puutarhamainen tunnelma vie suoraan Etelä-Eurooppaan, jonne lapsetkin ovat erittäin tervetulleita!"
  },
  {
    "name": "Gastro Cafe Kallio",
    "address": "Fleminginkatu 7\n00530 Helsinki",
    "description": "Gastro Cafe Kallio on ruokaa ja kahvia tarjoava ravintola-keittiö-mikroleipomo Fleminginkadulla Kallion sydämessä. \r\n\r\nTässä kahden leipuri-kokin perustamassa ravintolassa tarjoillaan juureen tehtyä leipää, uunissa paahdettuja ja haudutettuja ruokia sekä muita herkkuja vahvasti perinteiseen ranskalaiseen maalaiskeittiöön nojaten."
  },
  {
    "name": "Gastro Pub Kustaa Vaasa",
    "address": "Vaasankatu 10\n00500 Helsinki",
    "description": "Gastro Pub Kustaa Vaasa Vaasankadulla on toiminut samalla nimellä samassa osoitteessa vuodesta 1962, pitkään pelkkänä baarina mutta nykyään tarjolla on myös ruokaa."
  },
  {
    "name": "Gastrogrill Muré",
    "address": "Korkeavuorenkatu 4\n00150 Helsinki",
    "description": "Gastrogrill Muré tarjoilee suomalaista maailman parasta lihaa. Lihatalo Atrian \r\nravintolan erikoisuutena on, että jokainen pihvi voidaan jäljittää tilalle asti ja lihan laatu arvioidaan etukäteen niin maun voimakkuuden, mureuden kuin marmoroituneisuuden mukaan. Ruokanautinnon kruunaavat sesongin kasvikset - lihan parhaat kaverit."
  },
  {
    "name": "Georgian House",
    "address": "Hämeentie 62\n00500 Helsinki",
    "description": "Georgian House on vanhin georgialainen ravintola Helsingissä. Kodikkaasti sisustettu, mukava ja rento ravintola tarjoaa laadukasta georgialaista kotiruokaa. Sunnuntaisin tarjolla brunssi."
  },
  {
    "name": "Georgian Kitchen",
    "address": "Albertinkatu 7\n00150 Helsinki",
    "description": "Georgian Kitchen on aitojen georgialaisten makujen perheravintola Punavuoressa. Ravintolan omistaja on syntynyt Georgiassa, Mustanmeren rannalla ja tuonut sieltä mukanaan korianterin, sarviapilan, georgialaiset juustot ja viinit. Pitkä kokemus ravintolatyöstä näkyy palveluasenteessa ja ravintolan tunnelmassa. Ravintolan sisustus on georgialaiseen tyyliin lämpimän rouhea. Hiiliuunissa paistuvat herkulliset shashlikvartaat, ruokalistalla on runsaasti vaihtoehtoja vegaanisista aterioista ja erilaisista liharuuista. Georgialaiseen tyyliin kaikki ruokalajit jälkiruokaa lukuunottamatta tuodaan yhtäaikaa pöytään. Khachapuri on ravintolan ehkä suosituin annos. Sitä tarjoillaan Adjarulin, Imerulin, Megrulin ja Osetian tapaan."
  },
  {
    "name": "Gidi",
    "address": "Sturenkatu 11\n00510 Helsinki",
    "description": "Kalliolan Setlementtitalossa sijaitsevassa ravintola Gidissä tarjoillaan afro-fuusiotyylistä ruokaa ja kahvilatuotteita."
  },
  {
    "name": "GIWA",
    "address": "Bulevardi 19\n00120 Helsinki",
    "description": "GIWA on on aito korealainen ravintola joka tarjoilee erilaisia korealaisia bibimbapeja. Kulhollinen luontoa, makua ja terveyttä."
  },
  {
    "name": "GLO Grill Kitchen",
    "address": "Leppävaarankatu 1, GLO Hotel Sello\n02600 Espoo",
    "description": "Espoossa sijaitsevan GLO Hotel Sellon yhteydessä oleva ravintola GLO Grill Kitchen on tyylikäs ja muuntautumiskykyinen tila sekä työskentelyyn että ruokailuun. GLO Grill Kitchenin aidossa hiiligrillissä valmistuvat sesonginmukaiset herkut - niin aamiaiselle, lounaalle kuin illallisellekin."
  },
  {
    "name": "Glutique",
    "address": "Eerikinkatu 12\n00100 Helsinki",
    "description": "Glutique on täysin gluteeniton kahvila, josta löytyy laaja valikoima sekä makeita että suolaisia syötäviä. Suurin osa valikoimasta leivotaan itse, mutta kahvilassa myydään myös muiden gluteenittomien leipomoiden tuotteita. Hyllystä voi ostaa mukaan mm. jauhoja, mausteita, makeisia, olutta."
  },
  {
    "name": "Goose Pastabar",
    "address": "Eerikinkatu 44\n00180 Helsinki",
    "description": "Tuorepastaa ja tarinoita."
  },
  {
    "name": "Gran Delicato",
    "address": "Kalevankatu 34\n00180 Helsinki",
    "description": "Gran Delicato Kalevankadulla palvelee asiakkaitaan aamutuimasta iltaan saakka. Bravuurituotteita ovat mm. tilauksesta paikan päällä valmistettavat, korkealaatuisilla raaka-aineilla täytetyt ciabattat ja paninit sekä salaatit, talon oman reseptin mukaan valmistettu suodatinkahvi sekä erikoiskahvit. Lounasaikaan on tarjolla myös päivän lämpimiä lounaita kuten keittoja, risottoja ja pastoja."
  },
  {
    "name": "Gran Delicato Wine Bar & Taverna",
    "address": "Albertinkatu 31\n00180 Helsinki",
    "description": "Kreikkalainen taverna, ouzerí ja viinibaari tarjoilee kreikkalaisia viinejä ja ouzoja sekä näiden kanssa sopivia pienempiä mezédesiä ja suurempia ruoka-annoksia. Oma kreikkalainen juhlailta jopa 30 hengelle."
  },
  {
    "name": "Grand Georgia",
    "address": "Hakaniemenranta 11\n00530 Helsinki",
    "description": "Ravintolalaiva Hakaniemen rannassa tarjoilee gruusialaista ruokaa"
  },
  {
    "name": "Green Factory",
    "address": "Elimäenkatu 5\n00510 Helsinki",
    "description": "Green Factory tarjoaa lounasta, jossa korostuvat hyvin valmistetut, hyvänmakuiset, ja käsintehdyt kasvis- sekä vegaaniruoat. Tarjolla on kuitenkin päivittäin myös kalaa tai kanaa.\r\n\r\nLounaspöytä koostuu viidestä eri osiosta: Tarjolla on joka päivä itse leivottua tuoretta leipää,  jonka seurana tarjotaan erilaisia itsetehtyjä levitteitä ja tahnoja, joita vaihdellaan päivittäin.\r\n\r\nSalaattipöydässä on joka päivä kolme eri vaihtoehtoa, mukana myös ruokaisia salaatteja, joissa proteiini on huomioitu. Kipot ja kupit- osiosta lounasta voi täydentää erilaisilla pikkelöidyillä, savustetuilla, fermentoiduilla tai marinoiduilla lisukkeilla tai koota vaikka oman salaatin. Lämmin pöytä sisältää aina kasvis- tai vegaaniruoan, lämpimän lisukkeen sekä lämpimän kala- tai kanaruoan. Itsetehdyissä jälkiruoissa pyritään tarjoamaan myös yllättäviä makupareja sekä mielenkiintoisia yhdistelmiä."
  },
  {
    "name": "Green Hippo Kallio",
    "address": "Fleminginkatu 10\n00530 Helsinki",
    "description": "Green Hippo tarjoilee terveellistä, täyttävää, kohtuullisesti hinnoiteltua sekä kaunista aamupalaa, lounasta ja illallista sekä suosittua brunssia sunnuntaisin."
  },
  {
    "name": "Green Hippo Punavuori",
    "address": "Punavuorenkatu 2\n00120 Helsinki",
    "description": "Green Hippo tarjoilee terveellistä, täyttävää, kohtuullisesti hinnoiteltua sekä kaunista aamupalaa, lounasta ja illallista sekä suosittua brunssia sunnuntaisin."
  },
  {
    "name": "Grill it! Tapiola Garden & Garden Bar",
    "address": "Tapionaukio 3\n02100 Espoo",
    "description": "Espoossa sijaitsevan Tapiola Gardenin viihtyisä Grill it! -ravintola yhdistää perinteisen grillauksen ja ensiluokkaiset raaka-aineet tuoreella tavalla. Ravintolan sielu löytyy keittiöstä: puuhiiligrilli, joka tuo lihan, kalan ja vihannesten aromit hyvin esiin. \r\n\r\nKesäisin Tapiolan puutarhakaupungin näkymistä pääsee nauttimaan 100-paikkaisella terassilla. Pimeän aikaan lisätunnelmaa ravintolaan tuo puulämmitteinen takka.\r\n\r\nGrill it!- ravintola yhdessä hotellin kokoustilojen kanssa toimii myös juhlatilana, jossa voi järjestää kaikenlaisia juhlia ja tapahtumia, syntymäpäiväjuhlista tai ylioppilasjuhlista aina useiden satojen henkilöiden yritystapahtumiin. \r\n"
  },
  {
    "name": "Groovy",
    "address": "Mäkelänkatu 87\n00610 Helsinki",
    "description": "Käpylässä sijaitsevan Groovy-ravintolan ruokalistalta löytyy niin napolilaisia pizzoja kuin laajasti myös erilaisia burgereita lisukkeineen."
  },
  {
    "name": "Grön",
    "address": "Albertinkatu 36\n00180 Helsinki",
    "description": "Grön on maukasta, modernia, kasvipainotteista sekä inspiroivaa ruokaa, jossa panostetaan korkealaatuisiin raaka-aineisiin. Ruoka on myös kausi- ja luomukeskeistä. Ravintolassa käytetään mahdollisimman paljon pohjoismaalaisia ja luonnon omia villituotteita. Mitä luonnossa tällä hetkellä kasvaa, määrittää sen mitä on tarjolla. \r\n\r\nRavintolalle pn myönnetty yksi Michelin-tähti.\r\n"
  },
  {
    "name": "GT 1929 Café Bar Kitchen Terrace",
    "address": "Hiekkarannantie 9\n00100 Helsinki",
    "description": "GT 1929 Café Bar Kitchen Terrace on monipuolinen terassi-kahvila Hietarannan uimarannan kupeessa. Hietsun Paviljongin suunnittelijan Gunnar Taucherin mukaan nimetty GT tarjoilee ruokaa, kahvilatuotteita ja kesäisiä virvokkeita. Persoonallisella terassilla sijaitsee peruspöytien lisäksi riippukeinuja, ulkokeinuja ja persoonallisilla penkkejä. GT 1929 palvelee myös Hietsun Paviljongin sisätiloissa, sympaattisessa Aulakahvilassa."
  },
  {
    "name": "H'NOI Vietnamese Bistro",
    "address": "Hämeentie 94\n00550 Helsinki",
    "description": "H'NOI Vietnamese Bistro tarjoaa vietnamilaista katuruokaa ja drinkkejä moneen makuun."
  },
  {
    "name": "Hampton Bay",
    "address": "Hietalahdenranta 6\n00120 Helsinki",
    "description": "Hampton Bay on viihtyisä rantaravintola, joka tarjoaa mahdollisuuden nauttia merellisestä Helsingistä hyvien ruokien ja juomien kera. Lisäksi tarjolla on ketobrunssi lauantaisin."
  },
  {
    "name": "Hanasaari - Hanaholmen",
    "address": "Hanasaarenranta 5\n02100 Espoo",
    "description": "Aivan Helsingin ja Espoon rajalla, Länsiväylän varrella sijaitsee Hanasaari - suomalais-ruotsalainen kulttuurikeskus, jossa on nykyaikaiset kongressitilat, laadukas ravintola ja hotelli, jonka kaikista huoneista avautuu merinäköala. Hanasaaressa saaristoluonto kohtaa nykytaiteen: lähiympäristössä on sekä pysyviä että tilapäisiä teoksia pohjoismaisilta taiteilijoilta, kuten Jeppe Heinilta, Kaarina Kaikkoselta ja Anna Uddenbergiltä. Hanasaaren ravintola Platsissa tarjoillaan kauden parhaista raaka-aineista valmistettua ruokaa, jossa puhtaat, pohjoismaiset maut, kestävä maatalous ja eettinen ajattelu kohtaavat. Hanasaaressa toimii myös galleria, jonka näyttelyohjelma valottaa taiteen ja designin ajankohtaisia ilmiöitä. Tilavat hotellihuoneet on sisustettu pohjoismaisittain, ja ikkunoista avautuva saaristolaismaisema hivelee silmiä."
  },
  {
    "name": "Hanko Sushi Bar @ Stockmann",
    "address": "Aleksanterinkatu 52, katutaso\n00100 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n\r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia."
  },
  {
    "name": "Hanko Sushi Citykäytävä",
    "address": "Kaivokatu 8\n00100 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n \r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia.\r\n"
  },
  {
    "name": "Hanko Sushi Forum",
    "address": "Mannerheimintie 20, Kauppakeskus Forum, 3krs.\n00100 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n\r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia."
  },
  {
    "name": "Hanko Sushi Herttoniemi",
    "address": "Hitsaajankatu 12\n00810 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n\r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia."
  },
  {
    "name": "Hanko Sushi Itis",
    "address": "Itäkatu 1-7, Kauppakeskus Itis\n00930 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n\r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia."
  },
  {
    "name": "Hanko Sushi Kaari",
    "address": "Kantelettarentie 1, Kauppakeskus Kaari\n00420 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n\r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia."
  },
  {
    "name": "Hanko Sushi Kluuvi",
    "address": "Aleksanterinkatu 9, Kluuvin kauppakeskus\n00100 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n\r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia."
  },
  {
    "name": "Hanko Sushi Lauttasaari",
    "address": "Lauttasaarentie 28, kauppakeskus Lauttis\n00200 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n\r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia."
  },
  {
    "name": "Hanko Sushi Redi",
    "address": "Hermannin rantatie 5, Kauppakeskus REDI\n00580 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n\r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia."
  },
  {
    "name": "Hanko Sushi Tripla",
    "address": "Pasilan tornikuja 1B, Mall of Tripla, Food Court\n00520 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n\r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia."
  },
  {
    "name": "Hanko Sushi Vallila",
    "address": "Teollisuuskatu 3\n00510 Helsinki",
    "description": "Hanko Sushi - sushia vastuullisista merenelävistä.\r\n\r\nNimi kertoo toiminnan tärkeimmän periaatteen; Han ko on japania ja tarkoittaa sinettiä, henkilökohtaista laatuleimaa. Kaikki annokset tehdään käsin paikanpäällä, aina parhaita raaka-aineita käyttäen. Siksi annokset ovat aina uniikkeja ja niissä on tuoreustakuu.\r\n\r\nLaadukkaan sushin lisäksi Hanko Sushi merkitsee miellyttävää ja rentoa sushi-hetkeä yksin, kaksin, perheen kesken tai isommallakin porukalla. Perheen pienimmille tarjolla on syöttötuoleja, Hanko Sushin oma puuhapaperi sekä puikkoavustimia.\r\n\r\nHanko Sushin kaikille 24 ravintolalle on myönnetty kestävää kalastusta ja vastuullista vesiviljelyä edistävät MSC- ja ASC-jäljitettävyyssertifikaatit. Ravintolat tarjoavat vain sertifioiduista, kestävästi kalastetuista ja vastuullisesti kasvatetuista kaloista ja äyriäisistä tehtyä sushia."
  },
  {
    "name": "Happy Garden",
    "address": "Kinaporinkatu 2\n00500 Helsinki",
    "description": "Suosittu pieni kiinalainen ravintola Sörnäisissä."
  },
  {
    "name": "Happy Waffle Helsinki",
    "address": "Vuorikatu 14\n00100 Helsinki",
    "description": "Bubblewaffle - vohveli on Hong Kongissa suuren suosion saavuttanut street-food, joka tarjoillaan jäätelön ja muiden valinnaisten herkkujen kanssa. \r\n\r\nHappy Wafflesta löytyy valmiita kuplavohveliannoksia. Voit myös valita haluamasi täytteet ja rakentaa itse unelmajälkiruokasi.\r\n\r\nTuotteet ovat gluteenittomia."
  },
  {
    "name": "Harbour Tap & Taste",
    "address": "Capellanaukio 1\n00540 Helsinki",
    "description": "Kalasataman Capellanaukiolla sijaitseva Harbour Tap & Taste on alueen olohuone sekä ruokaravintola, joka panostaa myös laajaan olutvalikoimaan. Ravintola sijaitsee rannassa ja sillä on merinäköala Mustikkamaan sekä Isoisänsillan suuntaan. Myös terassi."
  },
  {
    "name": "Hard Rock Cafe Helsinki",
    "address": "Aleksanterinkatu 21\n00100 Helsinki",
    "description": "Helsingin Hard Rock Café on 240-paikkainen ruoka- ja juomaravintola, jossa on kansainvälinen ja leppoisa tunnelma. Keittiö tarjoilee klassista jenkkiläistä ruokaa höystettynä suomalaisilla mauilla. Katutasossa sijaitsee The Rock Shop®, josta löydät ainutlaatuiset Hard Rock Cafe Helsinki -tuotteet"
  },
  {
    "name": "Harju 8",
    "address": "Harjutori 8\n00500 Helsinki",
    "description": "Harju 8 on fiilisravintola Kalliossa jossa tarjolla on hyvää ruokaa ja natural-viinejä. Lisäksi tiloissa toimii Kukkakollektiivin kukkakauppa."
  },
  {
    "name": "Hello Stranger",
    "address": "Vilhonkatu 6\n00100 Helsinki",
    "description": "Hello Stranger on ravintola ja cocktailbaari keskustassa jonka menussa yhdistyvät lähiruoka, sesongit ja keittiömestari Tom Hudsonin englantilainen tausta; ravintola tarjoilee satokauden parhaita raaka-aineita erilaisia tekniikoita, makuja ja vaikutteita ennakkoluulottomasti hyödyntäen.\r\n\r\nHello Strangerin juomalista tarjoilee laajalti erilaisia makuelämyksiä cocktaileista ja kattavasta viinilistasta aina valikoimaan alkoholittomia juomia\r\n\r\nSecret Garden, \"salainen puutarha\", on ravintola Hello Strangerin yhteydessä toimiva viihtyisä sisäpihaterassi jolla järjestetään kesällä erilaisia tapahtumia."
  },
  {
    "name": "Helsingin Jäätelötehdas, jäätelökioskit",
    "address": "Merisatamanranta\n00150 Helsinki",
    "description": "Helsingin jäätelötehdas on Suomen vanhin toiminnassa oleva jäätelönvalmistaja. Italialaisen Magi-suvun veljekset perustivat Keskuskadulle Helsingin ensimmäisen jäätelötehtaan vuonna 1922. Tehdas, joka nykyään sijaitsee Espoossa, on edelleen Magien perheyritys, nyt jo kolmannessa polvessa.\r\n\r\nJäätelöä saa Helsingin Jäätelötehtaan kioskeista kesäkaudella. Kioskeja on yhteensä kolme Kaivopuistossa (Merisatamanranta, Mattolaituri ja Kompassitori) ja yksi Eteläisellä Hesperiankadulla."
  },
  {
    "name": "Helsingin Kahvipaahtimon Päiväkahvibaari Teurastamo",
    "address": "Työpajankatu 2\n00580 Helsinki",
    "description": "Suuren kysynnän vuoksi Helsingin Kahvipaahtimo avasi uuden Päiväkahvibaarin Teurastamolle. Uudessa Päiväkahvibaarissa on tarjolla paahtimon omia kahveja juotavaksi sekä mukaan otettavaksi. Toinen Päiväkahvibaari sijaitsee Vallilassa Päijänteenkadulla."
  },
  {
    "name": "Helsingin Kahvipaahtimon Päiväkahvibaari Vallila",
    "address": "Päijänteentie 29\n00510 Helsinki",
    "description": "Helsingin Kahvipaahtimo on pienpaahtimo joka sijaitsee Teurastamolla. Puu-Vallilassa Päijänteenkadulla on paahtimon oma myyntipiste ja pieni kahvibaari.\r\n\r\nToinen Päiväkahvibaari sijaitsee Teurastamolla."
  },
  {
    "name": "Helsinki Beer Factory",
    "address": "Humikkalanrinne 1\n00940 Helsinki",
    "description": "Helsinki Beer Factory on rento olut- ja ruokaravintola jossa hyvää ruokaa, mm. hampurilaisia ja pitkään grillissä kypsytettyjä lihoja, sekä monipuolinen valikoima käsityöläisoluita ja viskejä."
  },
  {
    "name": "Helsinki Bryggeri Brewhouse",
    "address": "Sofiankatu 2\n00170 Helsinki",
    "description": "Vuonna 2021 laajan uudistuksen kokenut Helsinki Bryggeri Brewhouse tarjoaa ainutlaatuisessa ympäristössä tehtyä olutta ja panimoravintolan sijainti on keskellä Helsingin sydäntä, Kauppatorin ja Tuomiokirkon välissä.  Asiakkaille halutaan luoda rohkeita elämyksiä ja Bryggerissä voi kokea kaikkea livekeikkojen ja neljän ruokalajin illallisen välillä.\r\n\r\nHelsinkiläisen panimoravintolan ruokalista koostuu urbaaneista ja kansainvälisistä mauista rennolla otteella. Juomalistassa korostuu erinomaiset paikan päällä tehdyt oluet sekä kattava valikoima muita juomia."
  },
  {
    "name": "Hietalahti Port",
    "address": "Hietalahdenranta\n00180 Helsinki",
    "description": "Hietalahdenrannassa sijaitsee teollisromanttinen ravintola- ja elämyskeskittymä Hietalahti Port. Alueella on useita upeita ravintoloita vain kävelymatkan päässä keskustasta. Alue alkaa Hietalahden kauppahallista ja jatkuu aina Clarion Hotel Helsinkiin asti. Alueen sydämen muodostavat legendaarinen kala- ja äyriäisravintola Merimakasiini sekä sen edustalla olevat ravintolalaivat Verna ja MS Louisiana."
  },
  {
    "name": "Hills Dumplings",
    "address": "Pieni Roobertinkatu 9\n00130 Helsinki",
    "description": "Hills Dumplings on erikoistunut käsintehtyihin mykyihin eli dumplingseihin. Lisäksi tarjolla modernin aasialaisen keittiön herkkuja."
  },
  {
    "name": "Hima & Sali",
    "address": "Tallberginkatu 1 C, Kaapelitehdas\n00180 Helsinki",
    "description": "Hima & Sali on kahvila ja lounasravintola Kaapelitehtaalla. Lounas tarjoillaan arkisin klo 11-14.30 ja päivittäin vaihtuvalta listalta löytyy vaihtoehtoja jokaiselle. Iltapäivisin tarjolla on pizza ja keittomenu.\r\n\r\nHima & Salin kahvila on avoinna joka päivä iltaan saakka. Valikoimassa on mm. vastapaistettuja oman leipomon leivonnaisia, piiraita ja täytettyjä sämpylöitä, luomulimuja, erikoiskahveja,viinejä ja drinkkejä."
  },
  {
    "name": "Hoku Kamppi",
    "address": "Urho Kekkosen katu 1, Kampin kauppakeskus 5.krs.\n00100 Helsinki",
    "description": "Hoku on mutkaton ravintola Kampin keskuksessa joka tarjoilee aasialais-hawaijilaista ruokaa."
  },
  {
    "name": "Holiday Bar",
    "address": "Kanavaranta 7\n00170 Helsinki",
    "description": "Holidayn sijainti on täydellisesti ydinkeskustan tuntumassa, Helsingin suosituimpien turistikohteiden ympäröimänä, Kanavarannan vanhassa makasiinirakennuksessa. Äyriäisiä ja kalaa, modernia kasvisruokaa, freesejä drinkkejä, jäätelöä ja iso, aurinkoinen terassi. Rento ja tunnelmallinen kohtaamispaikka syömiseen, juomiseen ja viihtymiseen ystävien kanssa."
  },
  {
    "name": "Home Taste",
    "address": "Aleksanterinkatu 9, Kauppakeskus Kluuvi K1\n00100 Helsinki",
    "description": "Home Taste on aasialaista fuusioruokaa tuoreista raaka-aineista tarjoava ravintola Kauppakeskus Kluuvissa. Lounasbuffetissa on tarjolla lämpimiä ruokia sekä sushia."
  },
  {
    "name": "HSS Paviljong",
    "address": "Liuskasaari\n00140 Helsinki",
    "description": "Merisataman rannan edustalla Liuskasaaressa sijaitsevalla ravintola HSS Paviljongilla on kaupungin upeimpiin lukeutuva näköala. Samalta terassilta voi ihailla niin kantakaupungin vanhoja jugendtaloja kuin Suomenlahdelle aukeavaa ulappaa ohilipuvine purjeveneineen.\r\n\r\nRavintola HSS Paviljong tarjoilee korkealaatuisista raaka-aineista, huolella tehtyjä, nykypäivään päivitettyjä klassikkoannoksia. Sunnuntaisin herkutellaan HSS Paviljongin Saaristolaispöydän antimilla.\r\n\r\nYhteysalus Liuskasaareen lähtee Merisataman rannasta, Café Caruselin ja Kompassitorin puolivälistä.\r\n"
  },
  {
    "name": "Huutokonttorin Kanttiini",
    "address": "Välimerenkatu 2\n00220 Helsinki",
    "description": "Huutokonttorin Kanttiinissa yhdistyvät luontevasti Jätkäsaarelaisten oma \"olohuone\" ja cocktailbaari. Rakennuksen historiaa kunnioittaen nimetty ja sisustettu ravintola ammentaa henkensä 1930-luvun satamamiljööstä, jossa skönärit, hampuusit ja tirehtöörit tapasivat toisensa samassa kanttiinissa satamatöittensä lomassa. Viikonloppuisin asiakkaita tanssittaa Dj-t hauskojen suomalaisten iskelmien tahdittamina."
  },
  {
    "name": "Ichiban Sushi",
    "address": "Urho Kekkosen katu 1, Kamppi Helsinki E-taso\n00100 Helsinki",
    "description": "Ichiban Sushi on japanilainen perhe-ravintola jossa on kotoinen ja ystävällinen ilmapiiri."
  },
  {
    "name": "Iguana Keskuskatu",
    "address": "Keskuskatu 4\n00100 Helsinki",
    "description": "Keskuskadun Iguana ravintola on rento seurusteluravintola, joka tarjoaa tex-mex herkkuja, pizzaa ja hampurilaisia. Keittiö on avoinna sulkemiseen asti. Lounas tarjoillaan ma-pe klo 11-14."
  },
  {
    "name": "Iguana Mannerheimintie",
    "address": "Mannerheimintie 12\n00100 Helsinki",
    "description": "Mannerheimintien Iguana on rento ruoka- ja seurusteluravintola kahdessa kerroksessa. Keittiöstä saa nopeasti tex-mex-herkkuja, pizzaa ja hampurilaisia. Keittiö on avoinna sulkemiseen asti. Buffetlounas on tarjolla ma-pe 11-14.\r\n\r\nIguanan alakerrassa sijaitsee tunnelmallinen kellariravintola jonka kaariholvit ja tiiliseinät luovat lämpimän fiiliksen."
  },
  {
    "name": "Ihana Kahvila Baari",
    "address": "Aleksanterinkatu 7\n00100 Helsinki",
    "description": "Viihtyisä Ihana Kahvila Baari, Sompasaaren kesäisen Ihana Kahvilan sisarpiste, toimii Aleksanterinkadulla, lähellä Yliopiston päärakennusta. Ihana Kahvila Baariin on tervetulleita kaikki ihmiset, ja eläimet."
  },
  {
    "name": "IL Gabbiano",
    "address": "Ratsukatu 3, Kauppakeskus Sello\n02600 Espoo",
    "description": "Kauppakeskus Sellossa sijaitseva IL Gabbiano tarjoilee suurella tunteella höystettyjä herkullisia italialaisia pizzoja, pastoja sekä jäätelöitä. Lämminhenkinen tunnelma houkuttelee niin lounaalle kuin illanviettoon hyvästä ruoasta nauttien!"
  },
  {
    "name": "Inari",
    "address": "Albertinkatu 19\n00120 Helsinki",
    "description": "Ravintola Inari tarjoilee uuden aallon helsinkiläistä ruokaa. Keittiömestari Kim Mikkola on suunnitellut ainutlaatuisen 15 ruokalajin maistelumenun, jotka yhdistelevät innovatiivisella tavalla suomalaista kulttuuria ja aasialaisia vaikutteita.\r\n\r\nInarille on myönnetty yksi Michelin-tähti."
  },
  {
    "name": "India Tandoor",
    "address": "Salomonkatu 19\n00100 Helsinki",
    "description": "Ravintola India Tandoor on Helsingin keskustassa sijaitseva intialainen ruokaravintola, Kampin ostoskeskuksen välittömässä läheisyydessä."
  },
  {
    "name": "IPI Kulmakuppila",
    "address": "Porthaninkatu 13\n00530 Helsinki",
    "description": "IPI Kulmakuppila on aamun aloitus- ja lounaspaikka sekä viihtyisä olohuone. IPI tarjoaa maukkaita tuotteita ja persoonallista palvelua ihastuttavassa tilassa Kalliossa. Lauantaisin tarjolla brunssia."
  },
  {
    "name": "Johan & Nyström",
    "address": "Kanavaranta 7 C\n00160 Helsinki",
    "description": "Helsingin konseptiputiikki sijaitsee kivenheiton päässä Senaatintorilta, merellisessä ympäristössä Katajanokalla. Hyvän kahvin ja teen ilosanomaa putiikissa ovat levittämässä ammattitaitoiset baristat ja putiikin valikoimassa totuttuun tapaan niin espressot, maitokahvit kuin herkulliset suodatinkahvitkin, sekä upea valikoima teetä. Kahvin kaveriksi löytyy myös pieni, mutta ajatuksella koottu valikoima suolaista ja makeaa.\r\n\r\nPutiikissa lisäksi myynnissä kahvit, teet sekä tarvikkeet kaikenlaisen kahvin ja teen valmistukseen ja putiikista saa tietysti vinkit kahvinvalmistukseen sekä kuulee kahvimaailman viimeisimmät kuulumiset."
  },
  {
    "name": "Jord",
    "address": "Vironkatu 8\n00170 Helsinki",
    "description": "Jord on entisen ravintola Askin pikkusisko sijaitsee Vironkadulla Kruununhaassa. Jordissa yhdistyvät hyvä luomuruoka ja luomujuomat sekä rento ja tunnelmallinen ilmapiiri jossa nauttitaan herkullisesta ruoasta ja maukkaista viineistä."
  },
  {
    "name": "Jungle Juice Bar - Asematunneli",
    "address": "Kaivokatu 8, Asematunneli\n00100 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Jungle Juice Bar - City Center",
    "address": "Kaivokatu 8, City Center - katutaso\n00100 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut -myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!"
  },
  {
    "name": "Jungle Juice Bar - Easton",
    "address": "Kauppakartanonkatu 3\n00930 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Jungle Juice Bar - Forum",
    "address": "Mannerheimintie 14-20, Kauppakeskus Forum 2.krs\n00100 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Jungle Juice Bar - Itis",
    "address": "Itäkatu 1-7, Itis kauppakeskus\n00930 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Jungle Juice Bar - Itis Prisma",
    "address": "Vanhanlinnantie 1\n00900 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Jungle Juice Bar - Kaari",
    "address": "Kantelettarentie 1\n00420 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Jungle Juice Bar - Kamppi",
    "address": "Urho Kekkosen katu 1, Kampin keskus, E-taso\n00100 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n\r\n"
  },
  {
    "name": "Jungle Juice Bar - Kamppi Bussiterminaali",
    "address": "Urho Kekkosen katu 1, Kampin keskus, E-taso\n00100 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Jungle Juice Bar - Keskuskatu",
    "address": "Keskuskatu 7\n00100 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!"
  },
  {
    "name": "Jungle Juice Bar - Kämp Galleria",
    "address": "Aleksanterinkatu 42\n00100 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n\r\n"
  },
  {
    "name": "Jungle Juice Bar - Lauttis",
    "address": "Lauttasaarentie 28\n00200 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Jungle Juice Bar - Redi",
    "address": "Hermannin rantatie 5, 2.krs\n00580 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Jungle Juice Bar - Tripla Asema",
    "address": "Fredikanterassi 1, 4.krs\n00520 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Jungle Juice Bar - Tripla Muoti",
    "address": "Fredikanterassi 1, 2.krs\n00530 Helsinki",
    "description": "Vain luonnon raakaa voimaa Jungle Juice Barista!\r\n \r\nKaikki Jungle Juice Barin mehut- myös smoothieissa käytetyt mehut- ovat tuorepuristettu paikan päällä. Juomat tehdään aina korkealaatuisista raaka-aineista, eikä niitä ole pastöroitu. Ne eivät sisällä lisättyä sokeria tai lisäaineita, vaan JJB:llä käytetään mehuissa ainoastaan parhaita hedelmiä ja vihanneksia! Ja satunnaisesti superfoodeja, koska Tukaani ei pysty hillitsemään itseään!\r\n"
  },
  {
    "name": "Junk y Vegan",
    "address": "Postikuja 2\n00100 Helsinki",
    "description": "Junk y Vegan on uusi Sanomataloon avattu \"total vegan joint\", ravintola ja baari jossa tarjotaan maistuvaa, modernia, terveellistä, rentoa ja täysin vegaanista junk food -safkaa. Ravintolan terassi A-oikeuksin houkuttelee nostamaan maljan kuohuvaa tai vaikkapa Kombuchaa!"
  },
  {
    "name": "Just Vege",
    "address": "Vaasankatu 15\n00500 Helsinki",
    "description": "Just Vege kasvispikaruokapaikka Kalliossa Lähi-idän vaikutteilla. Monen mielestä täältä saa kaupungin parhaat falafelit, ja niistä ravintolassa ollaankin erityisen ylpeitä. Falafelit ovat gluteenittomia ja ne tehdään alusta asti itse."
  },
  {
    "name": "Jädelino",
    "address": "Työpajankatu 2a\n00580 Helsinki",
    "description": "Jäätelöbaari Jädelino Teurastamolla tarjoaa aina tuoretta paikan päällä valmistettua italialaista artesaanijäätelöä ja sorbetteja ilman keinotekoisia lisä- tai väriaineita. Herkullisen jäätelön lisäksi voit nauttia Jädelinossa myös erikoiskahvia ja muita virvokkeita."
  },
  {
    "name": "Kaarna Baari & Keittiö",
    "address": "Mannerheimintie 20\n00100 Helsinki",
    "description": "Kaarna baari & keittiö on rento suomalainen ravintola pohjoismaalaisella mausteella. Forumin kauppakeskuksessa sijaitsevan ravintolan keittiö tarjoaa yksinkertaisia, selkeitä ja puhtaita makuja. Reilujen annosten lisäksi ruokalistalta löytyy myös kotimaisista raaka-aineista valmistettuja snapaksia ja snapaslautoja. Monipuolisessa juomatarjonnassa korostuvat suomalaisten ja pohjoismaalaisten pienpanimoiden tuotteet. Keskeisen sijaintinsa ansiosta Kaarna baari & keittiö on erinomainen treffauspaikka."
  },
  {
    "name": "Kabuki",
    "address": "Lapinlahdenkatu 12\n00180 Helsinki",
    "description": "Ravintola Kabuki on yksi Helsingin vanhimmista perinteisistä japanilaisista ravintoloista. Tatamilla on tunnelmallista nauttia perinteisestä japanilaisesta ruuasta ja suhshista aitoon japanilaiseen tapaan. Rajallisen tilan tähden pöytävarauksen tekeminen onkin suositeltavaa."
  },
  {
    "name": "Kaffa Roastery",
    "address": "Pursimiehenkatu 29 A\n00150 Helsinki",
    "description": "Kaffa Roastery on kahvin pyhättö Punavuoressa - kahvila, paahtimo ja kahvikoulu saman katon alla. Voit astua Kaffalle raitiovaunu 1:n päätepysäkiltä ja nauttia Suomen parhaan kahvilan tarjonnasta (Helsinki Coffee Festival -äänestys 2019). Kaffalla voit seurata arkisin, kuinka kahvia paahdetaan ja samalla nauttia ilmassa leijuvasta kahvin tuoksusta. Kaffan ammattitaitoiset baristat valmistavat haluamasi kahvin kuppi kerrallaan ja tarjolla on myös suodatinkahvia tuoreen sadon kahveista. Kaikkia kahveja voi ostaa pusseittain ja Kaffalta löytyy myös laajavalikoima erilaisia kahvinvalmistukseen tarkoitettuja tarvikkeita. Kahvilassa on tarjolla makeaa ja suolaista, esimerkiksi mantelicroissantteja, voileipiä ja smoothieita. \r\n\r\nIllan tullen kahvilan fiilis muuttuu tunnelmalliseksi, ja kahvin lisäksi Kaffalta löytyy laadukas valikoima erilaisia viinejä ja oluita.\r\n\r\nKaffa järjestää myös kahviin liittyviä workshoppeja, kahvitastingeista baristan alkeisiin ja latte art -kursseihin."
  },
  {
    "name": "Kaffecentralen Fredrikinkatu",
    "address": "Fredrikinkatu 59\n00100 Helsinki",
    "description": "Kaffecentralen on suomalainen yritys joka on erikoistunut espressokahveihin ja -laitteisiin. Espressopohjaisia juomia mukaan tai paikan päällä nautittavaksi."
  },
  {
    "name": "Kaffila Bokvillan",
    "address": "Hämeentie 125\n00560 Helsinki",
    "description": "Leivonnaisia, tuoretta pullaa, vastajauhetuista pavuista keitettyä kahvia... Tunnelmallinen ja kotoisa Kaffila Bokvillan on kaikille avoin voittoa tavoittelematon asukaskahvila. Kaffila pyörii pääasiassa vapaaehtoisvoimin, kahvilan emännän ja harjoittelijan avulla."
  },
  {
    "name": "Kahvihuone Mieritz",
    "address": "Seurasaari, Huvila 1\n00250 Helsinki",
    "description": "Kansanpuiston aikaisessa Frithiof Mieritzin suunnittelemassa Metsänvartijan talossa vuodelta 1890 voi nauttia Kahvihuone Mieritzin antimista. Tarjolla on mm. tuoreita korvapuusteja, Rönttösrouvan leipomon makeita ja suolaisia piirakoita. Kahvihuone Mieritziä voi myös vuokrata yksityistilaisuuksiin ja sieltä voi noutaa Seurasaari-esitteitä.\r\n"
  },
  {
    "name": "Kahvila 7:01",
    "address": "Mannerheimintie 10\n00100 Helsinki",
    "description": "Scandic hotelli Marskin kahvila tarjoaa pikaisen takeawayn työmatkalaiselle, kaupunkikierroksen eväät turisteille, pitkän ja tunnelmallisen aamiaisen nautiskelijoille tai täydellisen kahvin treffeille. Nimikkopaahto 7:01 on punavuorelaisen, palkitun pienpaahtimon Kaffa Roasteryn käsialaa."
  },
  {
    "name": "Kahvila Kampela",
    "address": "Uutelantie 1\n00990 Helsinki",
    "description": "Kahvila Kampelassa, Vuosaaren Urheilukalastajien venesataman rannassa, voi aistia pienvenesataman miellyttävän rauhallisen tunnelman, ja samalla seurata sataman elämää, kalastajien touhuja ja istuskella aurinkotuolissa. Kahvila toivottaa myös lemmikit tervetulleiksi, myytävänä on myös makupaloja niille."
  },
  {
    "name": "Kahvila Marocco",
    "address": "Museokatu 7\n00100 Helsinki",
    "description": "Kahvila Marocco on tunnelmallinen ja viihtyisä kahvila Töölön sydämessä. Perinteinen kahvila on toiminut Museokadulla jo yli puolen vuosisadan ajan."
  },
  {
    "name": "Kahvila Meridian",
    "address": "Vehkalahdentie\n00950 Helsinki",
    "description": "Rantakahvila Meridian on kotoinen, iloinen ja hyväntuulinen kohtaamispaikka, jonne on mukava tulla syömään tai vaikkapa pannari-kahville merellisestä tunnelmasta nauttien. Kahvila tunnetaan myös herkullisesta lohikeitostaan, jota valmistetaan rakkaudella aina parhaista raaka-aineista."
  },
  {
    "name": "Kahvila Piper",
    "address": "Suomenlinna B 56\n00190 Helsinki",
    "description": "Kahvila Piper Suomenlinnassa on palvellut linnoituksen parhaalla paikalla kesävieraita jo vuodesta 1928. Piper on Suomen vanhimmassa englantilaistyyppisessä puistossa sijaitseva huvilamainen puutalokahvila, jonka terassilta avautuu upea merinäköala.  Kahvila tarjoaa päivän keittoa, pientä suolaista, virvokkeita, olutta, viiniä ja Piper-sampanjaa! Kahvilaa ylläpitää Ehrensvärd-seura."
  },
  {
    "name": "Kahvila Päijänne",
    "address": "Päijänteentie 1\n00550 Helsinki",
    "description": "Sympaattinen kahvila Vallilassa jossa tarjolla mm. kardemummapullia ja muita herkkuja sekä salaattia valinnaisin täyttein. Myös vegaanisia vaihtoehtoja."
  },
  {
    "name": "Kahvila Sävy",
    "address": "Aleksis Kiven katu 12\n00500 Helsinki",
    "description": "Kahvila Sävy tarjoaa huippukahveja pieniltä paahtimoilta ammattitaidolla valmistettuna. Tarjolla myös aamiaista koko päivän, joka päivä."
  },
  {
    "name": "Kahvila Taikalamppu",
    "address": "Torkkelinkatu 21\n00530 Helsinki",
    "description": "Persoonallinen, värikäs kahvila Kalliossa."
  },
  {
    "name": "Kahvila Tyyni",
    "address": "Helsinginkatu 56\n00250 Helsinki",
    "description": "Sympaattinen kesäkahvila Tyyni sijaitsee Töölölahden rannassa lähellä Kansallisoopperaa."
  },
  {
    "name": "Kahvila Verso",
    "address": "Hiihtomäentie 37\n00800 Helsinki",
    "description": "Verso on kasvistarjontaa painottava lounaskahvila Herttoniemessä. Lisäksi konditoriatuotteita ja erikoiskahveja. Lemmikit ovat myös tervetulleita."
  },
  {
    "name": "Kahvila Villa Ullas",
    "address": "Kallvikinniementie 6\n00980 Helsinki",
    "description": "Kahvila Villa Ullas sijaitsee pienessä punaisessa mummonmökissä, Kallahden kauniin luonnonsuojelualueen kupeessa, Ullaksen puistossa. Kahvilassa on tarjolla itsetehtyjä makeita ja pikkusuolaisia tuotteita, joista suosituin on ehdottomasti korvapuusti.\r\n\r\nKahvila Villa Ullas on osa Helsingin kaupungin, Stadin ammattiopiston nuorten työpajoja ja tarjoaa monipuolisen työkokeilupaikan alle 29-vuotiaille helsinkiläisille nuorille. \r\n"
  },
  {
    "name": "Kahvila Welldone Töölö",
    "address": "Topeliuksenkatu 41 a, Töölön Urheilutalo\n00250 Helsinki",
    "description": "Sopiva paikka istahtaa uinnin ja kuntoilun jälkeen. Itse leivottuja suolaisia sekä makeita herkkuja sekä vaihteleva valikoima smoothieita sekä täytettyjä leipiä.\r\n\r\n"
  },
  {
    "name": "Kahvisiskot, Hakaniemen tori",
    "address": "Hämeentie 1\n00530 Helsinki",
    "description": "Kahvisiskojen perinteinen torikahvila on toiminut jo yli 40 vuotta. Kahvila on tunnettu hyvästä pannukahvista ja paikan päällä keitetystä herkullisesta riisipuurosta, jota tarjoillaan voisilmän, sokerin ja kanelin kera. Puuron lisäksi tarjolla on tuoretta kotipullaa, täytettyjä sämpylöitä ja graavilohileipiä. Eromangan kuuluisat lihapiirakat ja munkkipossut houkuttelevat pidempienkin matkojen takaa. Kahvilan punaisilla tuoleilla istuessaan voi kesäisin nauttia iloisesta tunnelmasta ja haitarimusiikista."
  },
  {
    "name": "Kahvitupa Laurentius",
    "address": "Kirkkotie 47\n01510 Vantaa",
    "description": "Kirkonkylän kahvikeidas, Pyhän Laurin kirkon pihapiirissä sijaitseva kahvitupa Laurentius hemmottelee italialaisen keittiön ystäviä. Lounaan lisäksi valikoimasta löytyy erikoiskahveja sekä makeita ja suolaisia herkkuja, jotka valmistetaan paikan päällä, suurella sydämellä. Lisäksi itsetehtyä artesaanijäätelöä, aitoa puu-uunissa paistettua napolilaista pizzaa, sekä lauantaisin ja sunnuntaisin italialainen brunssi."
  },
  {
    "name": "Kakkugalleria Bulevardi",
    "address": "Bulevardi 36\n00120 Helsinki",
    "description": "Kahvila ja konditoria, joka tarjoaa korkealaatuisia käsintehtyjä kakkuja ja leivoksia sekä muita herkkuja kuten pikkuleipiä ja marenkeja."
  },
  {
    "name": "Kakkugalleria Freda",
    "address": "Fredrikinkatu 41\n00120 Helsinki",
    "description": "Kahvila ja konditoria, joka tarjoaa korkealaatuisia käsintehtyjä kakkuja ja leivoksia sekä muita herkkuja kuten pikkuleipiä ja marenkeja. \r\n\r\nFredan toimipisteessä tarjolla on myös suosittu kakkubuffet."
  },
  {
    "name": "Kalaliike Marja Nätti",
    "address": "Hämeentie 1A, Hakaniemen väliaikainen lasihalli\n00530 Helsinki",
    "description": "Marja Nätin Kalaliikkeestä ja sen kahvila Katiskasta saa niin kalaa ja äyriäisiä kuin leivoksia, piirakoita ja herkullisia ruoka-annoksia. Lisäksi vitamiinibaari josta saa erilaisia tuorepuristettuja mehuja. \r\n\r\nToinen Marja Nätin Kalaliike löytyy Vanhasta Kauppahallista Etelärannasta."
  },
  {
    "name": "Kampai3",
    "address": "Kolmas linja 18\n00530 Helsinki",
    "description": "PIeni ravintola Kalliossa jossa itäaasialainen fuusiokeittiö."
  },
  {
    "name": "Kanniston Leipomo Annankatu",
    "address": "Annankatu 20\n00120 Helsinki",
    "description": "Kanniston Leipomon perusti vuonna 1914 Alma Kannisto. Leipomolla on seitsemän omaa myymälää. Myymälöissä valikoima on suuri. Sesonkien mukaan löytyy herkut niin kahvi- kuin ruokahetkiin."
  },
  {
    "name": "Kanniston Leipomo Hakaniemi",
    "address": "Siltasaarenkatu 11\n00530 Helsinki",
    "description": "Kanniston Leipomon perusti vuonna 1914 Alma Kannisto. Leipomolla on seitsemän omaa myymälää. Myymälöissä valikoima on suuri. Sesonkien mukaan löytyy herkut niin kahvi- kuin ruokahetkiin."
  },
  {
    "name": "Kanniston Leipomo Kallio",
    "address": "Kaarlenkatu 13\n00530 Helsinki",
    "description": "Kanniston Leipomon perusti vuonna 1914 Alma Kannisto.\r\nLeipomolla on seitsemän omaa myymälää. Myymälöissä valikoima on suuri. Sesonkien mukaan löytyy herkut niin kahvi- kuin ruokahetkiin."
  },
  {
    "name": "Kanniston Leipomo Munkkiniemi",
    "address": "Munkkiniemen puistotie 1\n00330 Helsinki",
    "description": "Kanniston Leipomon perusti vuonna 1914 Alma Kannisto.\r\nLeipomolla on seitsemän omaa myymälää. Myymälöissä valikoima on suuri. Sesonkien mukaan löytyy herkut niin kahvi- kuin ruokahetkiin."
  },
  {
    "name": "Kanniston Leipomo Punavuori",
    "address": "Kankurinkatu 6\n00150 Helsinki",
    "description": "Kanniston Leipomon perusti vuonna 1914 Alma Kannisto.\r\nLeipomolla on seitsemän omaa myymälää. Myymälöissä valikoima on suuri. Sesonkien mukaan löytyy herkut niin kahvi- kuin ruokahetkiin."
  },
  {
    "name": "Kanniston Leipomo Töölö",
    "address": "Runeberginkatu 32\n00100 Helsinki",
    "description": "Kanniston Leipomon perusti vuonna 1914 Alma Kannisto. Leipomolla on seitsemän omaa myymälää. Myymälöissä valikoima on suuri. Sesonkien mukaan löytyy herkut niin kahvi- kuin ruokahetkiin."
  },
  {
    "name": "Kanniston Leipomo Yliopistonkatu",
    "address": "Yliopistonkatu 7\n00100 Helsinki",
    "description": "Kanniston Leipomon perusti vuonna 1914 Alma Kannisto.\r\nLeipomolla on seitsemän omaa myymälää. Myymälöissä valikoima on suuri. Sesonkien mukaan löytyy herkut niin kahvi- kuin ruokahetkiin."
  },
  {
    "name": "Karhupuiston lippakioski",
    "address": "Viides linja, Karhupuisto\n00530 Helsinki",
    "description": "Karhupuiston lippakioski toimii Let Me Wine-viinimaahantuojan viinikioskina.\r\n\r\nKarhupuisto on saanut nimensä tunnetun veistoksensa \"Mesikämmen muurahaispesällä\" mukaan.\r\n\r\n"
  },
  {
    "name": "Kasinonranta Lauttasaari Paviljonki",
    "address": "Kuikkarinne 1, Kasinonrannan uimaranta\n00200 Helsinki",
    "description": "Kahvila Kasinonranta Lauttasaari Paviljonki eli Kassari sijaitsee Lauttasaaren yleisellä uimarannalla Hevosenkenkälahden rannalla. Kahvilassa voi katsella merellistä maisemaa kahvilan terassilla tai sateisena päivänä nauttia tunnelmasta sisällä, oikean takkatulen lämmössä. Tarjolla suolaista ja makeaa, erikoiskahveja, kattava teevalikoima, samppanjaa, olutta, jäätelöitä sekä salaatteja."
  },
  {
    "name": "Katajanokan Kasino",
    "address": "Laivastokatu 1\n00160 Helsinki",
    "description": "Katajanokan Kasino tarjoaa tyylikkään ja historiallisen ravintolamiljöön. Mottona on tarjota asiakkaille ensiluokkaisia palveluja perinteitä kunnioittaen, nykypäivää eläen, ja tulevaisuuteen uskoen. Katajanokan Kasino on pääsääntöisesti tilausravintola, mutta palvelee ajoittain lounasravintolana sekä toisinaan myös a la carte -ravintolana, mm. joulun aikaan. "
  },
  {
    "name": "KEKRI - Finnish street food",
    "address": "Lapinlahdenkatu 5\n00100 Helsinki",
    "description": "Kampissa sijaitsevassa Lapinlahdenkadun lippakioskissa on kesällä tarjolla modernisoitua suomalaista katuruokaa. Annoksissa käytetään kotimaisia raaka-aineita, luonnonantimia ja villiyrttejä, ja tarjolla on myös niin hapanjuurileipää kuin itse tehtyä kombuchaa."
  },
  {
    "name": "Kellohalli",
    "address": "Työpajankatu 2, rakennus 1 e\n00580 Helsinki",
    "description": "Teurastamon alueella sijaitseva ravintola ja tapahtumatila Kellohalli tarjoilee lounasta arkisin. Kesäaikaan Kellohalli on avoinna myös iltaisin. Avoinna myös Teurastamon alueen tapahtumien aikaan sekä tilauksesta."
  },
  {
    "name": "Kesäkahvila Olohuone - Ravintola Backas",
    "address": "Ylästöntie 28\n01510 Vantaa",
    "description": "Vantaalla, Backaksen kartanoalueella sijaitseva Kesäkahvila Olohuone on vanha juurruttamo, joka on kunnostettu kaikkien yhteiseksi olohuoneeksi.\r\n\r\nOlohuoneella on kesäterassi ja käytössä on myös koko Backaksen upea pihapiiri omenapuutarhoineen, jonne voi käydä viettämään kesäpäivää esim. picnic-viltin ja Olohuoneelta noudetun picnickorin kanssa. Olohuoneella järjestetään myös kaikenlaista ohjelmaa. Sunnuntaisin on tarjolla brunssi.\r\n\r\nMyös koirat ovat tervetulleita Backaksen Olohuoneeseen.\r\n\r\n"
  },
  {
    "name": "Ketoartesaanit Kahvila & Kauppa Vallila",
    "address": "Sturenkatu 36\n00550 Helsinki",
    "description": "Ketoartesaanien kahvilassa on tarjolla runsas valikoima erilaisia täytettyjä leipiä, suolaisia ja makeita kahvilatuotteita, välipaloja sekä salaatteja ja lounasbowleja.\r\n\r\nKahvilassa toimii myös kauppa, jossa on tarjolla omien pakastetuotteiden lisäksi herkullinen ja kasvava valikoima ketoruokavalioon sopivia elintarvikkeita, mm.  Foodinin, Tiablochilin ja Warrior Coffeen tuotteita sekä Hornan kananmunia."
  },
  {
    "name": "Kiasma Café",
    "address": "Mannerheiminaukio 2\n00100 Helsinki",
    "description": "Nykytaiteen museo Kiasmassa sijaitseva Kiasma Café tarjoaa makuelämyksiä sesonkeja kunnioittaen. Kiasma Café tarjoilee päivittäin vaihtuvaa lounasta lautasannoksina tiistaista perjantaihin klo 11-14. Lämpimän lounaan lisäksi tarjolla on salaattiannos, jonka komponentit asiakas saa itse valita tarjolla olevista vaihtoehdoista. Salaattiannos on tarjolla tiistaista sunnuntaihin klo 11-17. Lisäksi vitriinit notkuvat herkullisia itse tehtyjä tuoreita kahvilatuotteita. Kiasman kahvilassa sopii myös nauttia lasillisen viiniä museovierailun yhteydessä!"
  },
  {
    "name": "KIILA Food & Bar",
    "address": "Kalevankatu 1\n00100 Helsinki",
    "description": "Ravintola Kiila on auki joka päivä aamun sarastuksesta iltahämärään. Kiila tarjoaa asiakkailleen raikkaita, rehellisiä ja rennon tyylikkäitä makuelämyksiä. Ravintola toimii oivana kohtauspaikkana tarjoten upeat näkymät Kolmen Sepän aukiolle. Kiilassa on kaksi ruokailupuolta - KiilaBurger ja Kiila A'la Carte.\r\n"
  },
  {
    "name": "King Kebab Vallila",
    "address": "Mäkelänkatu 31\n00550 Helsinki",
    "description": "King Kebab on vankan asiakaskuntansa ansainnut perheyritys joka on toiminut vuodesta 2007. King Kebabin pikaruokaravintolat Vallilassa, Kalliossa ja Herttoniemessä tarjoilevat mm. perinteistä kebabia ja pizzaa sekä vegaanisia pizzoja ja vöneriä."
  },
  {
    "name": "Kippo",
    "address": "Mannerheimintie 14-20, Forum 3.krs.\n00100 Helsinki",
    "description": "Kahvila Forumissa jossa tarjolla vegaanisia leipiä, smoothieta ja mehuja."
  },
  {
    "name": "Kipsari",
    "address": "Otaniementie 14\n02150 Espoo",
    "description": "Espoon Otaniemessä sijaitseva Kipsari on Aalto ARTSin opiskelijoiden omistama ravintola, baari ja kahvila, joka tarjoilee kasvis- ja vegaaniruokaa sekä paikan päällä leivottuja herkkuja.\r\n\r\nKaksi opiskelijaravintolaa samalla alueella, toinen osoitteessa Otakaari 7B"
  },
  {
    "name": "Kissakahvila Helkatti",
    "address": "Fredrikinkatu 55\n00100 Helsinki",
    "description": "Kissakahvila Helkatti on kissamaailma keskellä kaupungin vilskettä, elämys kaikille aisteille. Mikä olisi mukavampaa kuin viettää rento hetki kissojen seurassa keskellä kiireistä päivää unohtaen arkihuolet. Kissakahvilaan on hyvä varata paikka etukäteen. Kissajoogaa tarjolla maanantaisin."
  },
  {
    "name": "Kitchen & Table Helsinki",
    "address": "Tyynenmerenkatu 2, Clarion Hotel Helsinki\n00220 Helsinki",
    "description": "Huippukokki Marcus Samuelssonin suunnittelemissa Kitchen & Table -ravintoloissa ammennetaan New Yorkin monimuotoisesta ruokakulttuurista, mutta pohjoismaisella tyylillä. Jätkäsaaren ikonisesta 30-luvun makasiinirakennuksesta löytyvän ravintolan menussa Harlem kohtaa Herttoniemen sulassa sovussa. Ravintola on pieni pala Manhattania Jätkäsaaren rannassa, kivenheiton päässä keskustasta ‒ mutkaton, herkullinen ja elegantti."
  },
  {
    "name": "Kitchen & Table Helsinki Airport",
    "address": "Karhumäentie 5\n01530 Vantaa",
    "description": "Clarion Hotel Aviapolis -hotellin Kitchen & Table -ravintola ja baari ovat ruotsalaisen huippukokki Marcus Samuelssonin käsialaa. Urbaanin tyylikkään ravintolan menussa yhdistyvät Manhattanin maut ja suomalaiset raaka-aineet. Kesäisin voi nauttia auringosta ravintolan ulkoterassilla."
  },
  {
    "name": "Kitty's Milkshake Bar",
    "address": "Piispansilta 11, Kauppakeskus Iso Omena\n02230 Espoo",
    "description": "Suomen ensimmäinen perinteinen amerikkalainen pirtelöbaari. Yli 20 erilaista pirtelöä, myös vegaanisia pirtelöitä."
  },
  {
    "name": "KOKORO Sushi",
    "address": "Elimäenkatu 9\n00510 Helsinki",
    "description": "Pieni sushiravintola Vallilassa jossa sushipaloja voi tilata kappaleittain, kutsuvat sitä Pick'n Mix Sushiksi."
  },
  {
    "name": "Konditoria Café Briossi",
    "address": "Kalevankatu 9\n00100 Helsinki",
    "description": "Perinteikäs kahvila-konditoria Briossi, joka on jo lähes 30 vuotta toiminut Helsingin keskustassa, tarjoilee aamiaisia,lounasta ja pikkusuolaista. Aamiainen ja lounas tarjoillaan päivittäin, myös lauantaisin. Kaikki tuotteet leivotaan paikan päällä."
  },
  {
    "name": "Konditoria Hopia Kumpula",
    "address": "Intiankatu 25\n00560 Helsinki",
    "description": "Perinteikäs Konditoria Hopia palvelee myös Kumpulassa. Tarjolla perinteisillä resepteillä leivottuja makeita ja suolaisia leivonnaisia, sekä arkisin keittolounasta. Konditoria Hopia löytyy myös Töölöstä."
  },
  {
    "name": "Konditoria Hopia Töölö",
    "address": "Pohjoinen Hesperiankatu 9\n00260 Helsinki",
    "description": "Hopia on vanhan ajan konditoria Helsingissä, Töölön sydämessä. Hopia on kuuluisa herkullisista karjalanpiirakoista ja korvapuusteista, jotka on valmistettu samalla reseptillä jo yli 60 vuoden ajan - perinteitä kunnioittaen."
  },
  {
    "name": "Konstan Möljä",
    "address": "Hietalahdenkatu 14\n00180 Helsinki",
    "description": "Ravintola Konstan Möljä - aitoa suomalaista kotiruokaa ja vanhan sataman tunnelmaa!\r\n \r\nKonstan Möljän ankkuri laskettiin Helsingin Hietalahdenkadulle vuonna 1981. Siitä lähtien tämä aitoa suomalaista perinneruokaa ja rannikkokarjalaista tunnelmaa tarjoava ravintola on palvellut vieraita läheltä ja kaukaa.\r\n\r\nKoe Konstan Möljän runsas saaristolaishenkinen illallisbuffet tai viikonlopun juhlava noutopöytä. Arkisin Konstan Möljä tarjoilee myös perinteistä kotiruokalounasta.\r\n\r\nRavintolassa on A-oikeudet ja valikoimasta löytyy perinteisten suomalaisten lagereiden lisäksi erilaisia pienpanimo-oluita sekä raikkaita siidereitä ja lonkeroita. Listalta löytyy myös suomalaisella twistillä tehtyjä klassikkococktaileja."
  },
  {
    "name": "Konttiravintola Morton Helsinki",
    "address": "Ruoholahdenranta 8\n00180 Helsinki",
    "description": "Konttiravintola Morton on merikonttiin rakennettu ravintola Ruoholahdessa. Morton tunnetaan herkullisista burgereistaan, mutta ravintolassa tarjoillaan myös aamuisin ihanaa aamupalaa sekä laadukasta kahvia."
  },
  {
    "name": "Korat Tam Tam Ravintola",
    "address": "Palokellonkuja 5\n00750 Helsinki",
    "description": "Thaimaalaisravintola Korat Tam Tam Puistolan juna-aseman lähellä tarjoaa aitoja thaimakuja."
  },
  {
    "name": "Korea House",
    "address": "Mariankatu 19\n00170 Helsinki",
    "description": "Ensimmäinen täysin korealainen ravintola Suomessa. Maukasta ja perinteistä ruokaa kauniissa ja rentouttavassa ympäristössä. \r\n"
  },
  {
    "name": "Korjaamon Baari & Keittiö",
    "address": "Töölönkatu 51 a-b\n00250 Helsinki",
    "description": "Korjaamon Baari & Keittiö on mutkaton kortteliravintola kulttuurin keskellä. Ravintola kutsuu rennolle lounaalle, illalliselle, brunssille tai ihan vain lasilliselle. Kesällä on mahdollista ruokailla myös ravintolan aurinkoisella terassilla."
  },
  {
    "name": "Kortteli",
    "address": "Urho Kekkosenkatu 1, Kampin Kauppakeskus 5 krs\n00100 Helsinki",
    "description": "Kaupungin sydämessä kattojen ylle avautuvassa Korttelissa voit nousta arjen yläpuolelle nauttimaan herkullisista ruoista ja juomista, huippupalveluista sekä upeista näkymistä.\r\n\r\nBar Cón, Beijing8, Bastardo, Fisken På Disken, Hoku, La Torrefazione, Lie Mi, Lopez y Lopez, Maxine, Pobre,  Sandro, Soup & More, The Souk & Story."
  },
  {
    "name": "Kosmos",
    "address": "Kalevankatu 3\n00100 Helsinki",
    "description": "Hepolampien Kosmos on ollut osa Helsingin kulinaarista kulttuuria vuodesta 1924. Alkuperäisessa kunnossaoleva ravintolasali on jo yksin nähtävyys. Keittiö edustaa helsinkiläistä ruokaperinnettä vorschmackista tartariin ja kateenkorvasta silakoihin."
  },
  {
    "name": "Krapihovi",
    "address": "Rantatie 2\n04310 Tuusula",
    "description": "Ravintola Krapihovi Tuusulassa vaalii ja luo suomalaista ruokaperinnettä idyllisessä huvilaympäristössä. Helmenharmaa, vihreäpuitteinen päärakennus on rakennettu vuonna 1883 valtioneuvos Souranderin kesähuvilaksi ja Krapin tilan päärakennukseksi. \r\n\r\nVuodenaikojen kiertokulusta ja puhtaista suomalaisista raaka-aineista maalta, mereltä, metsistä rakentuu Krapihovin keittiön tarina. Pihapiirissä on oma palvaamo, lihanleikkaamo sekä leipomo. Kaikki lautasella on omin käsin tehtyä, huolella valmistettua. Krapihoviin katetaan vuodenajan aito suomalainen, käsin valmistettu kattaus, herkullinen tarina Suomesta. Ruokasalin kolme kattausta: aamiainen, lounas ja illallinen ovat Krapin ruokamaailman suomalaista perinnettä."
  },
  {
    "name": "Krog Roba",
    "address": "Pieni Roobertinkatu 1-3\n00130 Helsinki",
    "description": "Entisen poliisiaseman tiloissa Helsingin keskustassa, aivan Esplanadin läheisyydessä, sijaitsee rennosti elämään suhtautuva ravintola, jonka juuret ovat pohjoismaissa. Krog Roban herkullinen aamiaisbuffet on tarjolla päivittäin, lounasta tarjoillaan arkisin ja a la cartea ma-la iltaisin klo 17 alkaen. Brunssi on tarjolla lauantaisin ja sunnuntaisin."
  },
  {
    "name": "Kuja Bar & Bistro",
    "address": "Hakaniemenkatu 7\n00530 Helsinki",
    "description": "Persoonallinen bistrohenkinen kortteliravintola eläväisen Hakaniemen torin kupeessa. Legendaariset burgerit. Ravintolaan on myös koirat tervetulleita. \r\n\r\nKuja toimii myös näyttelytilana."
  },
  {
    "name": "Kulma - keittö & baari",
    "address": "Lainlukijantie 12\n00690 Helsinki",
    "description": "Kulma - Keittiö & Baari on koko perheen kortteliravintola Torpparinmäessä. Kulman Keittiö käyttää mahdollisimman paljon kotimaisia raaka-aineita ja lähituottajia ja Kulman Baarissa pääasiassa on kotimaiset panimotuotteet. lisäksi ravintolassa järjestetään tapahtumia."
  },
  {
    "name": "Kulosaaren Casino",
    "address": "Hopeasalmenpolku 1\n00570 Helsinki",
    "description": "Vain 10 minuutin matkan päässä Helsingin keskustasta, Kulosaaren Casino on perinteinen ja tasokas ravintola Helsingin kauneimmassa merimaisemassa.  Vuonna 1915 perustettu ravintola on tunnettu hyvästä ruuastaan ja ainutlaatuisesta tunnelmastaan. Ravintola on myös kaupungin suosituimpia juhlapaikkoja - suurille ja pienille seurueille.\r\n\r\nRavintolan sydämestä, avarasta Merisalista, avautuu upea näköala Suomenlahdelle. Uniikki ravintola sekä kesäravintola Sun Marine nurmikkoterasseineen tarjoavat puitteet unohtumattomiin hetkiin, olipa kyseessä kokous, yritysjuhla tai yksityistilaisuus."
  },
  {
    "name": "Kultá Kitchen & Bar",
    "address": "Bulevardi 28\n00120 Helsinki",
    "description": "Kultá Kitchen & Bar tarjoilee aidoimmat ja puhtaimmat Lapin maut modernilla tavalla valmistettuina. Pohjoisen rento, vieraanvarainen ja kiireetön elämäntyyli näkyvät ensiluokkaisessa palvelussa, ja ravintolan sisustus henkii pohjoisen harmonista tunnelmaa. \r\n\r\nRavintolan ruokalistalta löytyvät arvostetuimmat Lapin raaka-aineet, kuten poro, riekko, kaskinauris ja matsutake-sieni. Pohjoisen makuelämyksiin voi tutustua myös yllätysmenun kautta. Ainutlaatuisen aamiaisen voi nauttia halutessaan myös pöytiintarjoiltuna. \r\n\r\nJokainen hetki Kultá Kitchen & Barissa on tärkeä."
  },
  {
    "name": "Kuuma",
    "address": "Pohjoisesplanadi 33, Kämp Galleria\n00100 Helsinki",
    "description": "Huippulaadukasta kahvia, aamiaista, raakakakkuja ja muita herkkuja."
  },
  {
    "name": "Kuurna",
    "address": "Meritullinkatu 6\n00170 Helsinki",
    "description": "Kuurna on pieni ja viihtyisä ravintola Kruununhaassa. Menu vaihtuu kahden viikon välein, jonka lisäksi ravintola tarjoaa muutamia päivittäin vaihtuvia annoksia. Raaka-aineet ovat tarkoin valikoituja ja menu koostuu pääosin suomalaisista klassikoista, joihin on lisätty moderneja elementtejä."
  },
  {
    "name": "Kuusijärvi",
    "address": "Kuusijärventie 3\n01260 Vantaa",
    "description": "Kuusijärvi on jo vuosikymmeniä ollut pääkaupunkiseutulaisten suuressa suosiossa. Kesäisin Kuusijärvelle houkuttelee Vantaan suurin uimaranta, saunat ja aktiviteetit luonnossa. Talvikaudella ihmisiä houkuttelee avantouinti, hyvin hoidetut hiihtomaastot sekä perinteiset savusaunat. \r\n\r\nKuusijärven päärakennuksessa toimii ympärivuotisesti monipuolinen ja viihtyisä kahvilaravintola Cafe Kuusijärvi. Kahvila tarjoilee arkisin lounasta ja viikonloppuisin keittolounasta."
  },
  {
    "name": "Käpygrilli",
    "address": "Osmontie 5\n00610 Helsinki",
    "description": "Käpygrilli on Käpylässä sijaitseva perinteinen kuppila jossa perjantai-iltaisin live-musiikkia ja lauantaisin karaokea. Viikon ohjelmatarjontaan kuuluvat lisäksi myös mm. tietovisat, bingoillat ja open stage jamit. \r\nLounas arkisin klo 11-14.30"
  },
  {
    "name": "Käpylän kiska",
    "address": "Pohjolankatu\n00610 Helsinki",
    "description": "Tarjolla hidasta kahvia, monen sorttista teetä ja käsintehtyä jäätelöä. Kiskan viereisessä puistossa järjestetään aika-ajoin tapahtumia."
  },
  {
    "name": "La Baguette Coffee Shop",
    "address": "Viipurinkatu 12\n00510 Helsinki",
    "description": "La Baguette Coffee Shop Linnanmäen huvipuiston lähettyvillä tarjoilee täytettyjä patonkeja sekä vietnamilaisia, gluteenittomia, kesärullia, jotka valmistetaan aina paikan päällä odottaessa. Lisäksi smoothieita, crepesiä, erikoiskahveja sekä kesäisin irtojäätelöä."
  },
  {
    "name": "La Bella Trattoria",
    "address": "Capellan puistotie 2\n00540 Helsinki",
    "description": "Kalasatamassa sijaitsevan italialaisen La Bella Trattorian ruokalistalta löytyy kaikki italialaiset perinneruoat. Pastat lukuisine eri vaihtoehtoineen, huolella valmistetut risotot, pizzat ja salaatit. Listalla on myös kala-, kana- ja liharuokia."
  },
  {
    "name": "La Bohème",
    "address": "Katariinankatu 4\n00170 Helsinki",
    "description": "Kahvila-viinibaari La Bohème sijaitsee Katariinankadulla aivan Senaatintorin tuntumassa. Se on erikoistunut lättyihin erilaisilla herkullisilla täytteillä, sekä makeilla että suolaisilla. Lisäksi ohjelmallisia iltoja."
  },
  {
    "name": "La Bottega 13",
    "address": "Tehtaankatu 13\n00140 Helsinki",
    "description": "Your closest experience to Italy's finest!\r\n\r\nItalialainen deli & viinibaari Ullanlinnassa jossa tarjolla italialaisia leikkeleitä ja juustoja sekä päivittäin vaihtuvalta listalta lämpimiä ruokia.\r\n\r\nMyös yksityistilaisuudet, catering sekä take-away."
  },
  {
    "name": "La Famiglia",
    "address": "Keskuskatu 3\n00100 Helsinki",
    "description": "La Famiglian rento, reilu, kodikas ja konstailematon italialais-amerikkalainen ruokamaailma toivottaa asiakkaan tervetulleeksi tuhdille makumatkalle. Ruudulliset pöytäliinat ja perhepotretit ovat tuttuja elokuvista ja New Yorkin Little Italy -kaupunginosasta. La Famiglian baarissa voi nauttia kiireettömästi alkudrinkit ennen illallista.\r\n\r\nLeikkipaikka palvelee perheen pienimpiä."
  },
  {
    "name": "La Maison",
    "address": "Tehtaankatu 21\n00150 Helsinki",
    "description": "Pieni pala iloista Ranskaa Tehtaankadulla. \r\n\r\nLämminhenkinen ravintola La Maison kutsuu bistromatkalle Ranskaan. Viihdy ja anna hyvän ruoan, juoman ja tunnelman viedä mukana - c'est la vie.  Halutessasi voit illallistaa keittiömestarin suositusmenun, nauttia suosikkiannoksen tai vain istahtaa baarin puolelle lasilliselle."
  },
  {
    "name": "La Torrefazione",
    "address": "Aleksanterinkatu 50\n00100 Helsinki",
    "description": "La Torrefazione on viihtyisä ja suosittu pikku-kahvila, josta on upeat näkymät Aleksanterinkadulle. Arkisin kiireiset helsinkiläiset tulevat kahvilaan aamiaiselle, lounaalle tai hakemaan kahvia. Viikonloppuisin tarjolla brunssia ja salaatteja, mikä tekee La Torrefazionesta täydellisen taukopaikan kun viettää päivää kaupungilla."
  },
  {
    "name": "La Torrefazione - Kortteli",
    "address": "Urho Kekkosenkatu 1, Kauppakeskus Kamppi\n00100 Helsinki",
    "description": "Korkealla kaupungin yllä, La Torrefazionessa voi nauttia huolella ja ammattitaidolla valmistetusta kahvista upealla näkymällä. Arkisin tarjolla Torren aamupalalautasia ja viikoittain vaihtuva lounaslista.  Tuttuun tapaan tarjolla on myös täytettyjä ciabattoja, smoothieita, shakeja ja salaatteja. Viikonloppuisin tarjolla on runsas brunssi jonka äärelle on helppo istahtaa suuremmassakin porukassa."
  },
  {
    "name": "La Torrefazione Hakaniemi",
    "address": "Siltasaarenkatu 12\n00530 Helsinki",
    "description": "Torren kuopus on hakis- ja kalliolaisten asunnon jatke, kuin toinen keittiö. Aamuisin voi istahtaa kupposelle lukemaan lehteä tai poiketa vikkelästi työmatkalla hakemaan aamiaisen mukaan. Iltaisin ja viikonloppuisin Torren pöytien ympärille on helppo istahtaa kavereiden ja perheen kanssa puimaan mennyttä viikkoa, tai ihan vain yksin vetämään henkeä, ennen kuin taas jatkaa matkaa Hakiksen vilinässä."
  },
  {
    "name": "La Torrefazione Lasipalatsi",
    "address": "Mannerheimintie 22\n00100 Helsinki",
    "description": "Lasipalatsin La Torrefazione on avara, urbaani lisäys Torren kahvilaperheeseen. Amos Rex museon ja design-myymälöiden ympäröimänä Torressa voi nauttia huolella ja ammattitaidolla valmistetusta kahvista ja muista herkuista. Kesäisin auringon lämmöstä voi nauttia suurella terassilla Lasipalatsin sisäpihalla. Arkisin tarjolla on Torren aamupalapaketti ja viikoittain vaihtuva lounaslista."
  },
  {
    "name": "Lappi Ravintola",
    "address": "Annankatu 22\n00100 Helsinki",
    "description": "Mutkaton Lappi-henkinen ravintola Helsingin keskustassa. Kotimaiset, puhtaat ja tuoreet raaka-aineet takaavat aidon makunautinnon. \r\n\r\nLappi Ravintolan baari, Kelonkolo, on miellyttävä pieni baari ravintolan yhteydessä. \r\n"
  },
  {
    "name": "Latitude 25",
    "address": "Korkeavuorenkatu 47\n00130 Helsinki",
    "description": "Pieni ja viihtyisä ravintola jossa tarjolla Okinawalaisia erikoisuuksia sekä muita makuja Japanista ja 25. leveyspiiriltä. Lounasta, illallista, tuoretta sushia, myös take away."
  },
  {
    "name": "Le Marché",
    "address": "Pohjoisesplanadi 33, Kämp Garden\n00100 Helsinki",
    "description": "Kämp Gardenissa sijaitseva ravintola Le Marché tarjoaa ensiluokkaista raaka-aineista valmistettua eurooppalais-skandinaavista ruokaa, virvokkeita, viiniä ja hyvää palvelua!"
  },
  {
    "name": "Leblon Suvilahden Ranta",
    "address": "Sörnäisten rantatie\n00530 Helsinki",
    "description": "Leblon on kesäkeidas Sörnäisten Rantatiellä. Leblon tarjoaa kaiken, mitä kesäpäivään tarvitaan: aktiviteetteja joogan ja suppauksen muodossa, ravintoloita nälän iskiessä, baarin ja katetun terassin sekä illan tullen päräyttäviä bileitä."
  },
  {
    "name": "Leipomo-ravintola Levain Punavuori",
    "address": "Kankurinkatu 6\n00150 Helsinki",
    "description": "Leipomo-ravintola Levain on ravintola, jonka sydämessä sykkii leipomo sekä aito hapanjuuri, levain. Kyseessä on naapuruston asukkaiden mutkaton ja lämminhenkinen olohuoneenjatke, jonne on helppo astua sisään. Levainissa tarjoillaan aamiaista, lounasta ja kevyttä illallista paikan päällä syötäväksi sekä mukaan otettavaksi, ja leipureiden käsissä syntyy uunituoreita herkkuja aina myöhäiseen iltapäivään saakka. Saatavilla on myös raikkaita, käsintehtyjä cocktaileja ja sommelierin huolella valitsema viinilista."
  },
  {
    "name": "Leipomo-ravintola Levain Töölö",
    "address": "Runeberginkatu 29\n00100 Helsinki",
    "description": "Leipomo-ravintola Levain on ravintola, jonka sydämessä sykkii leipomo sekä aito hapanjuuri, levain. Kyseessä on naapuruston asukkaiden mutkaton ja lämminhenkinen olohuoneenjatke, jonne on helppo astua sisään. Levainissa tarjoillaan aamiaista, lounasta ja kevyttä illallista paikan päällä syötäväksi sekä mukaan otettavaksi, ja leipureiden käsissä syntyy uunituoreita herkkuja aina myöhäiseen iltapäivään saakka. Saatavilla on myös raikkaita, käsintehtyjä cocktaileja ja sommelierin huolella valitsema viinilista."
  },
  {
    "name": "Levant Bulevardi",
    "address": "Bulevardi 15\n00120 Helsinki",
    "description": "Levant on autenttisen tuntuinen, pieni Lähi-idän katuruokaa tarjoileva ravintola Bulevardilla. Runsaat meze-lautaset vievät kielen mennessään. Ravintolassa on etenkin lounasaikaan usein ruuhkaa."
  },
  {
    "name": "Levant Kallio",
    "address": "Vaasankatu 25\n00500 Helsinki",
    "description": "Levant tarjoaa ystävilleen Lähi-idän makuja, falafeleja, mezejä ja salaatteja."
  },
  {
    "name": "Levant Lauttasaari",
    "address": "Veneentekijäntie 4\n00220 Helsinki",
    "description": "Levant tarjoaa ystävilleen Lähi-idän makuja kuten falafeleja, mezejä ja salaatteja."
  },
  {
    "name": "Lie Mi Bulevardi",
    "address": "Bulevardi 21\n00180 Helsinki",
    "description": "Suosittu vietnamilainen ravintola. Lie Mi-ravintoloita löytyy myös Runeberginkadulta, Kampin kauppakeskuksesta sekä Hämeentieltä."
  },
  {
    "name": "Lie Mi Kallio",
    "address": "Hämeentie 19\n00500 Helsinki",
    "description": "Suosittu vietnamilainen ravintola. Lie Mi-ravintoloita löytyy myös Runeberginkadulta, Kampin kauppakeskuksesta sekä Bulevardilta."
  },
  {
    "name": "Lie Mi Kamppi",
    "address": "Urho Kekkosen katu 1, 5krs.\n00100 Helsinki",
    "description": "Suosittu vietnamilainen ravintola löytyy nyt myös Kampin kauppakeskuksen Korttelista. Muut Lie Mi -ravintolat löytyvät Hämeentieltä, Bulevardilta sekä Runberginkadulta."
  },
  {
    "name": "Lie Mi Töölö",
    "address": "Runeberginkatu 56\n00260 Helsinki",
    "description": "Suosittu vietnamilainen ravintola. Lie Mi-ravintoloita löytyy myös Hämeentieltä, Kampin kauppakeskuksesta sekä Bulevardilta."
  },
  {
    "name": "Lily Lee",
    "address": "Erottajankatu 4\n00120 Helsinki",
    "description": "Lily Leen keittiö hyödyntää makuaarteita metsästä, maalta ja mereltä - muodostaen ainutlaatuisen vivahteikkaan kokonaisuuden. Taiwanilaisesta ruokakulttuurista inspiroitunut Lily Lee on tarjonnaltaan rikas ja uniikki.\r\n\r\nLilyn menu tarjoaa makujen harmoniaa suolaisen, makean, happaman ja kirpeän välillä - tuottaen näin luonnollisen syvän umamin. Lilyn tiimi luo moderneja ruokia ja juomia käyttäen vakiintuneita tekniikoita sekä historiallisia reseptejä, valikoiden käyttöönsä ainoastaan parhaimpia raaka- aineita.\r\n\r\nRuoat tarjoillaan aitoon perheruokailutyyliin, pöydän keskelle jaettaviksi."
  },
  {
    "name": "Linko Pizzabar",
    "address": "Ruusulankatu 3-5\n00260 Helsinki",
    "description": "Linko PizzaBar on laadukas korttelikuppila Töölössä. Ruoan ja juoman lisäksi Linkossa pääsee usein myös nauttimaan kulttuurin antimista, esimerkiksi hyvästä livemusiikista.\r\n"
  },
  {
    "name": "Lloyd's Cafe & Bakery",
    "address": "Pengerkatu 9\n00530 Helsinki",
    "description": "Lloyd's Cafe & Bakery on inspiroitunut maailmasta: New Yorkin bageleita, filopiirakoita Välimeren tyyliin, sconsseja Britanniasta, suomalaisia herkkuja ja paljon muuta!\r\n\r\nMehuista kakkuihin, kaikki on kotitekoista, tuoretta ja laktoositonta! Myös vegaanisia ja gluteenittomia tuotteita.\r\n"
  },
  {
    "name": "Loft33",
    "address": "Teollisuuskatu 33\n00510 Helsinki",
    "description": "Vallilan Loft33 on mutkaton kohtaamispaikka, fressi olohuone ja innovatiivinen keittiö Teollisuuskadun sydämessä. Herkkuja on saatavilla aamiaisesta iltapäivään ja lounaan saa myös take awayna tyylikkäästi matkaan. Aamuisin aamiainen on tarjolla klo 8-10, tarjolla on mm. luomupuuroa."
  },
  {
    "name": "Loi Loi Rooftop Restaurant & Distillery",
    "address": "Konepajankuja 5 B/C, 6krs.\n00510 Helsinki",
    "description": "Konepajan alueella Vallilassa, 6.kerroksen kattoterassilla sijaitseva Loi Loi Rooftop Restaurant & Distillery on yhdistelmä maukasta ruokaa, käsintehtyä giniä sekä mahtavaa näköalaa.\r\n\r\nAasialais-amerikkalaista fuusioruokaa tarjoileva ravintola yhdistelee leikkisästi etelä-aasialaisia makuja amerikkalaistyyliseen bbq-ruokaan.\r\n\r\nRavintolan keskellä sijaitsee Suomen pienin kaupallinen tislaamo jossa valmistuu erityyppisiä artesaani-ginejä käsityönä päivittäin."
  },
  {
    "name": "Long Wall",
    "address": "Annankatu 26\n00100 Helsinki",
    "description": "Ravintola Long Wall on vuonna 1988 avattu, kantonilaiseen keittiöön erikoistunut kiinalainen ravintola."
  },
  {
    "name": "Lonnan Kahvila & Baari",
    "address": "Lonna\n00190 Helsinki",
    "description": "Lonnan saaren sympaattinen sydän, Lonnan ravintolan alakerrassa toimiva Kahvila & Baari on persoonallinen kohtaamispaikka merellisessä Helsingissä. Tästä pisteestä saaren vieraiden on helppo aloittaa vierailu Lonnassa. Sydämellinen henkilökunta opastaa saaren eri palveluihin sekä tarjoilee vieraille herkullista pientä syötävää virkistävien juomien kera. Kahvila & Baarista voivat saaren vieraat ottaa mukaan myös ulko- ja sisäpelejä tai vaikka mukavan ilmasohvan suunnatessa fiilistelemään päivää rantakallioille. \r\n\r\nViihtyisässä Kahvila & Baarissa on päivällä tarjolla herkullisia suolaisia sekä makeita vohveleita. Iltaisin tarjoillaan pieniä annoksia saunan jälkeen nautittavaksi tai muuten vaan lasillisen yhteyteen."
  },
  {
    "name": "Lonnan ravintola",
    "address": "Lonna\n00190 Helsinki",
    "description": "Lonnan ravintolassa tarjoillaan laadukasta ja kesäistä saaristolaisruokaa modernilla otteella. Saatavuuden mukaan käytetään kauden tuoreimpia kotimaisia raaka-aineita suosien luomua ja lähituotantoa.\r\n\r\nRuokalista elää sesongin ja saatavuuden mukaan ja on päivittäin nähtävissä ravintolan seinällä."
  },
  {
    "name": "Lopez ý Lopez",
    "address": "Työpajankatu 2\n00580 Helsinki",
    "description": "Tacoja kansalle! \r\n\r\nLopez ý Lopez tarjoilee aitoa taco-kulttuuria suoraan meksikolaisilta pikkukaduilta. Ruoka ottaa vaikutteensa sadoista tienvarsien kuppiloista ja pikkukatujen ravintoloista, joita ravintolan pyörittäjät ovat kohdanneet matkoillaan Amerikassa ja Meksikossa. Lopez ý Lopez on aito Taqueria ja tarjoilee tuoreita, kotona tehdyn oloisia tacoja. Kaikki tarjoillaan 100% maissitortillassa. \r\n\r\nListalta löytyy myös vegaanisia vaihtoehtoja. \r\n\r\n\r\n"
  },
  {
    "name": "Loving Hut",
    "address": "Kolmas Linja 17\n00530 Helsinki",
    "description": "Vegaaninen lounas-kahvila Kalliossa jossa tarjolla aasialaistyyppinen lounasbuffet sekä muita vegaanisia herkkuja."
  },
  {
    "name": "Luckiefun's Freda",
    "address": "Fredrikinkatu 49\n00100 Helsinki",
    "description": "Luckiefun's on suosittu sushibuffet-ravintola jossa myös lämpimiä aasialaistyyppisisä ruokia. Luckiefun's ravintoloita on myös mm. Kaivokadulla, Sörnäisissä, Triplassa ja REDIssä."
  },
  {
    "name": "Lucy in the Sky",
    "address": "Keilaniementie 1\n02150 Espoo",
    "description": "Lucy in the Sky on kattoravintola ja -baari Accountor Towerin katolla Espoon Keilaniemessä, joka tarjoilee modernia bistroruokaa uniikilla sijainnilla yli 80 metrin korkeudessa. \r\n\r\nLasiseinät tarjoavat näkymät neljään eri ilmansuuntaan. Ikkunoista aukeava maisema vaihtelee Nuuksion kansallispuistosta Helsingin urbaaniin keskustaan ja ikoniseen suomalaiseen saaristoon. \r\n\r\nLucy tarjoilee lounasta ja illallista, ja lisäksi tilassa on mahdollista järjestää yksityistilaisuuksia"
  },
  {
    "name": "Luigi Pizzeria",
    "address": "Siltasaarenkatu 11\n00530 Helsinki",
    "description": "Hakaniemessä, Ympyrätaloa vastapäätä sijaitseva Luigi Pizzeria tarjoilee mahdollisimman ekologisista, tuoreista raaka-aineista valmistettua lankkupizzaa."
  },
  {
    "name": "Lungi",
    "address": "Korkeavuorenkatu 2\n00140 Helsinki",
    "description": "Rento kortteliravintola Korkeavuorenkadulla."
  },
  {
    "name": "Löyly",
    "address": "Hernesaarenranta 4\n00150 Helsinki",
    "description": "Ville Haran ja Anu Puustisen suunnittelema, vuonna 2016 avattu Löyly on ainutlaatuinen niin sijainnin kuin arkkitehtuurin puolesta. Rakennuksessa toimii ravintola, terassi ja kolme saunaa. Kaikki kolme saunaa ovat puulämmitteisiä: jatkuvalämmitteinen sauna, kertalämmitteinen sauna ja Helsingin ainoa yleisölle avoin savusauna. Yhdellä käynnillä voi siis kokea molemmat perinteiset löylytyypit. Saunojen väliin jää takkahuone, jossa voi levähtää saunomisen lomassa. Saunoista pääsee vilvoittelemaan terassille ja uimaan mereen ympäri vuoden. Miehille ja naisille on omat pukuhuoneet ja suihkut, mutta saunat ja oleskelutilat ovat yhteiset, joten yleisessä saunassa uima-asu on pakollinen.\r\n\r\nLöylyn luomua ja lähiruokaa suosiva ravintola tarjoilee lounasta, illallista sekä lauantaisin brunssia."
  },
  {
    "name": "Madonna",
    "address": "Haapaniemenkatu 5\n00530 Helsinki",
    "description": "Madonna on klassinen ravintola, baari ja terassi, joka tarjoilee ruokia ja juomia koko Italian saappaan mitalta. \n\nVanhan tehdasrakennuksen kivijalassa sijaitsevan Madonnan pizza on roomalaiseen tyyliin ohuen ohutta sekä rapeapohjaista ja pasta sekä gelato käsin tehtyä. \n\nKullanhohtoinen, samettinen baari on ravintolan keskipiste, josta tarjoillaan klassikkococktaileja ja tuttuja italialaisia juomia - Madonnan omaa limoncelloa tietenkään unohtamatta.\n\nRavintolan runsas sisustus Murano-lamppuineen, pianoineen ja sitruunalla täyttettyine marmorisuihkulähteineen on lämmin tuulahdus skandinaavisen minimalismin keskellä."
  },
  {
    "name": "Magu",
    "address": "Korkeavuorenkatu 27\n00130 Helsinki",
    "description": "Magu on eloisa ravintola, jonka keskiössä on puhtaat, vegaaniset raaka-aineet ja loistavat luonnon maut.\r\n\r\nRavintolan juuret ovat Välimeren maiden ravintolakulttuurissa. Magun villiruokaan perustuvat maut nostavat ravintola tunnelman kattoon. Keittiön lähestymistapa on korostaa raaka-aineen omaa luonnollista makua. Annoksen sielu syntyy luonnon omista vihanneksista, sienistä ja villiyrteistä.\r\n"
  },
  {
    "name": "Maharaja",
    "address": "Mannerheimintie 21-23\n00250 Helsinki",
    "description": "Maharaja on intialaista ruokaa tarjoileva ravintola Töölössä."
  },
  {
    "name": "Maja Coffee Roastery",
    "address": "Lehtisaarentie 1\n00340 Helsinki",
    "description": "Maja Coffee Roastery on minikokoinen kahvipaahtimo ja pieni kahvila Lehtisaaressa."
  },
  {
    "name": "Majakkalaiva Relandersgrund",
    "address": "Meritullintori\n00170 Helsinki",
    "description": "Majakkalaiva Relandersgrund sijaitsee Meritullintorin laiturissa. Aluksen terassi on avoinna vapusta lokakuuhun.\r\n\r\nKannelta aukeavat merimaisemat Korkeasaaren suuntaan. Vieressä sijaitsee Uspenskin katedraali, vanhat merimakasiinit, näköetäisyydellä ovat lisäksi Halkolaiturin purjealukset ja Katajanokan jäänsärkijät.\r\n\r\nTerassin juomavalikoima on monipuolinen ja tarjolla on pientä suolaista."
  },
  {
    "name": "Makers Kahvila",
    "address": "Heikkiläntie 10\n00210 Helsinki",
    "description": "Ravitsevan ravinnon ja hyvän mielen kahvila! Kahvila valmistaa kaikki tuotteet paikan päällä keskittyen luontaisesti gluteenittomuuteen ja vegaaniseen ruokavalioon, suosien luomua, suomalaisuutta ja laadukkaita raaka-aineita. Myös eläimet ovat tervetulleita kahvilaan."
  },
  {
    "name": "Malaga Bar",
    "address": "Malagankatu 3\n00220 Helsinki",
    "description": "Malaga Bar on Stiina Kuisman ravintola ja baari Jätkäsaaressa, muusikoiden talo Jallukan alakerrassa, Malagakadun ja Välimerenkadun kulmassa. Monet muistavat Stiinan legendaariset ravintolat Ysibaarin ja Torin. Sitä samaa henkeä: hyvää ruokaa ja ilonpitoa tuodaan nyt loistavan tiimin kanssa Jätkäsaareen.\r\n\r\nMalaga Bar tarjoilee maukasta ja reilua lounasta arkisin ja iltapäivästä mm. jallulihapullia, pastoja ja pizzettoja."
  },
  {
    "name": "Mamma Rosa",
    "address": "Runeberginkatu 55\n00260 Helsinki",
    "description": "Ravintola Mamma Rosa perustettiin vuonna 1981, ja se on vakiinnuttanut asemansa suosittuna ruokapaikkana. Mamma Rosan ruokalista perustuu kansainväliseen keittiöön, jossa mm. tuoretta kalaa joka päivä sekä sesonkien mukaan vaihtuvat kauden menut. Ravintola on myös tunnettu pizzoistaan."
  },
  {
    "name": "Manala",
    "address": "Dagmarinkatu 2\n00100 Helsinki",
    "description": "Legendaarinen Manalan ruokaravintola ja baari tarjoaa herkullista ruokaa ja juomaa sekä mutkatonta palvelua aina lounaasta valomerkkiin asti. Manalan Kellarissa biletetään joka viikonloppu, ja tarjolla on myös erilaisia klubeja esim. live-musiikin tai improteatterin ystäville. St.Urho's pub on konstailematon englantilaistyyppinen olutravintola jonka listalla on yli sata olutmerkkiä."
  },
  {
    "name": "Manna",
    "address": "Merimiehenkatu 18\n00150 Helsinki",
    "description": "Punavuoressa sijaitseva Manna on pieni korealainen ravintola. Tarjolla on bibimbapeja kasvis-, kala- tai lihaversioina."
  },
  {
    "name": "Mashiro Vallila",
    "address": "Mäkelänkatu 22\n00510 Helsinki",
    "description": "Mashiro Vallilassa tarjoaa rakkaudella valmistettua, tuoretta, terveellistä ja kohtuuhintaista japanilaista ruokaa."
  },
  {
    "name": "Mattolaituri",
    "address": "Ehrenströmintie 3 A\n00140 Helsinki",
    "description": "Mattolaituri on Kaivopuiston rannassa sijaitseva merellinen terassiravintola. Upeaa merinäköalaa voi ihailla joko ravintolan omalla hiekkarannalla rantatuolissa istuen tai yläkerran lounge-sohvilla rentoutuen. Tarjolla  mm. jäätelöä, kesäisiä drinkkejä sekä pientä purtavaa. Viikonloppuisin DJ:t soittavat ja viihdyttävät asiakkaita iltaan asti.\r\n\r\nMyös nelijalkaiset vieraat ovat tervetulleita."
  },
  {
    "name": "Maunulan ulkoilumaja",
    "address": "Metsäläntie 9\n00620 Helsinki",
    "description": "Maunulan Majalla pääsee kahvittelemaan, saunomaan tai muuten vaan rentoutumaan. Kahvilassa on tarjolla itseleivotut leivonnaiset, pullat, munkit ja gluteenittomat herkut. Keskiviikkoisin lenkkisaunassa voi rentoutua lenkin jälkeen (eri ajat miehille ja naisille). Maunulan ulkoilumajan pihalta pääsee suoraan keskuspuiston ulkoilureiteille, lumisena talvena myös hiihtoladuille.\r\n\r\nMaunulan majalla järjestetään myös mm. Helsingin Ladun tilaisuuksia, lauluiltoja ja teemailtoja. \r\n"
  },
  {
    "name": "Maxill",
    "address": "Korkeavuorenkatu 4\n00150 Helsinki",
    "description": "Vuonna 1992 perustettu Maxill tunnetaan ravintolana, jonka leppoisa ilmapiiri on sekä keittiön että uskollisen asiakas­kunnan ansiota. A la carte-lista perustuu kansainväliseen keittiöön, jossa eniten vaikuttaa Ranska, Italia ja Skandinavia. \r\n\r\nMaxillin baari on tyylikäs ja intiimi kohtaamispaikka."
  },
  {
    "name": "Maya Bar & Grill",
    "address": "Mikonkatu 18\n00100 Helsinki",
    "description": "Maya Bar & Grill sijaitsee Rautatieaseman tuntumassa, Kansallisteatterin vieressä. Mayassa tarjoillaan autenttisia makuelämyksiä latinalais-amerikkalaiseen tyyliin joka päivä, niin lounaan kuin illallisenkin muodossa. Tunnelmaan voi heittäytyä nauttimalla aitoja latinodrinkkejä aina Pisco Sourista Caipirinhaan. Valikoimasta löytyy myös meksikolaista pienpanimo-olutta.\r\n"
  },
  {
    "name": "Mei Lin Sichuan & Vegan Restaurant",
    "address": "Annankatu 29\n00180 Helsinki",
    "description": "Mei Lin Kampissa tarjoilee autenttista, mausteista sichuanilaista ruokaa, mm. etukäteen tilattavia hot poteja sekä sisäelinruokia. Myös vegaaniannoksia."
  },
  {
    "name": "Meiccu",
    "address": "Pihlajatie 34\n00270 Helsinki",
    "description": "Legendaarisella ravintolapaikalla Meilahdessa sijaitseva Ravintola Meiccu valkoisineen pöytäliinoineen tarjoilee klassisia suomalaisia ruoka-annoksia, kuten vorschmackia, paistettuja silakoita ja läskisoosia."
  },
  {
    "name": "Mekong ravintola",
    "address": "Lapinrinne 2E\n00180 Helsinki",
    "description": "Mekong ravintolan missio on tarjoilla vietnamilaisten kotikokkien reseptien mukaan valmistettua ruokaa asiakkailleen. Ravintola tarjoilee autenttista lounais-vietnamilaista ruokaa, myös vegaanisia annoksia."
  },
  {
    "name": "Metropol Hietaniemi",
    "address": "Hietaniemenkatu 14\n00100 Helsinki",
    "description": "Metropol Hietaniemi on lounasravintola ja monipuolinen kokous- ja juhlatila kivenheiton päässä Kampin keskuksesta"
  },
  {
    "name": "Moko Market Café & Store Punavuori",
    "address": "Perämiehenkatu 10\n00150 Helsinki",
    "description": "Moko Market on sisustamiseen erikoistunut myymälä. Mokon elämyksellisistä myymälästä löytyy vintage-esineitä, vanhoja intialaisia huonekaluja, sisustustekstiilejä sekä herkkuja läheltä ja kaukaa ja esineitä sieltä ja täältä. Sisustusmyymälän yhteydessä on kahvila, jossa herkutellaan kahvilan antimilla sekä päivittäin vaihtuvalla lounaalla. \r\n\r\nMokoja on lisäksi Sörnäisissä vanhassa hattutehtaassa (Vilhonvuorenkatu 11) sekä Teurastamolla."
  },
  {
    "name": "Moko Market Sörnäinen",
    "address": "Vilhonvuorenkatu 11\n00500 Helsinki",
    "description": "Sörnäisten Moko sijaitsee Vilhonvuorenkadulla vuonna 1938 hattutehtaaksi valmistuneessa kuusikerroksisessa kiinteistössä. Hattutehdas oli toiminnassa aina vuoteen 1970. Sörnäisten Mokossa tarjoillaan arkisin lounasta sekä viikonloppuisin lauantaibrunssia. Ravintolassa on anniskeluoikeudet ja suosittu kabinetti, johon mahtuu mukavasti kymmenisen henkilöä.\r\n\r\nMokoja on yhteensä kolme: Punavuoressa Merikorttelissa (Perämiehenkatu 10), Sörnäisissä vanhassa hattutehtaassa sekä Teurastamolla.\r\n"
  },
  {
    "name": "Moko Market Teurastamo",
    "address": "Työpajankatu 2 A\n00580 Helsinki",
    "description": "Uusin Moko Market toimii Teurastamon alueella vuonna 1933 rakennetussa entisessä hallintorakennuksessa joka on museoviraston suojelema.  \r\n\r\nKahvilassa on tarjolla sekä suolaista, että makeaa pikkupurtavaa, Mokon makoisia salaatteja ja ihania lounas-annoksia vaihtuvilla tuotteilla kuten päivän tuorepasta tai viikon vohveli ja uuniperuna. Aamupalallae puristetaan taatusti tuoretta appelsiinimehua ja valittavissa on aamupalakomboja, joista löytyy eväät moneen aamuun. Teurastamon Mokossa voi nautiskella myös huolella valittuja viinejä ja oluita tai laadukasta kahvia lähipaahtimosta. Kahvilalla on viihtyisä kesäterassi.\r\n\r\nMokoja on yhteensä kolme: Punavuoressa Merikorttelissa (Perämiehenkatu 10), Sörnäisissä vanhassa hattutehtaassa sekä Teurastamolla."
  },
  {
    "name": "Moksha ravintola",
    "address": "Kaupintie 18\n00440 Helsinki",
    "description": "Moksha ravintola tarjoaa autenttista intialaista ruokaa Helsingissä. Ravintola on erikoistunut intialaiseen ruokiin kaikkialta intiasta mukaanlukien Tandoor-saviuunissa valmistettuihin ruokiin."
  },
  {
    "name": "Monal Indian Restaurant",
    "address": "Annankatu 4\n00120 Helsinki",
    "description": "Intialainen ravintola jota pyörittää Pohjois-Intiasta tuleva perhe."
  },
  {
    "name": "MorriSon's",
    "address": "Ateneuminkuja\n00100 Helsinki",
    "description": "MorriSon's Helsingin Ateneuminkujalla tarjoilee suuria annoksia Amerikan tyyliin. Burgereita, salaatteja, pihvejä - Amerikan malliin suurta ja näyttävää sekä tietenkin maistuvaa! Tilaa kannattaa jättää myös jälkiruoalle. Lounas tarjoillaan arkipäivisin klo 11-15."
  },
  {
    "name": "MorriSon's Brooklyn",
    "address": "Aleksanterinkatu 15, sisäpiha\n00100 Helsinki",
    "description": "MorriSon's Brooklyn on kenties Helsingin amerikkalaisin ravintola. Täällä paistetaan runsaat burgerit ja herkulliset pizzat. Et taatusti lähde nälkäisenä pois. That's a promise. Kaikki täällä on suurta. Paitsi lasku, mikä on yllättävän pieni."
  },
  {
    "name": "Musiikkitalon kahvila",
    "address": "Mannerheimintie 13 A\n00100 Helsinki",
    "description": "Musiikkitalon Kahvila on kaikille avoin kohtauspaikka. Täällä voi pistäytyä maukkaalle Kaffa Roasteryn kahvikupilliselle tai aromikkaalle teelle. Kahvilassa on ilmainen WiFi."
  },
  {
    "name": "Mustasaaren toimintakeskuksen Kanttiini",
    "address": "Seurasaaren selkä\n00340 Helsinki",
    "description": "Mustasaaren toimintakeskuksen Kanttiinissa myydään herkkuja monenlaiseen makuun ja edullisesta lounaspöydästä löytyy jokaiselle jotakin. Sunnuntaisin Mustasaaren lounas hemmottelee makuhermoja. Kanttiinissa on myynnissä myös vegaanisia ja gluteenittomia tuotteita. Kanttiinista saa pientä suolaista ja monia herkkuja, muun muassa Mustasaaren tunnettuja isoja korvapuusteja."
  },
  {
    "name": "Mutteri Kahvila",
    "address": "Lauttasaarentie 2\n00200 Helsinki",
    "description": "Lauttasaaren sillan vieressä sijaitseva sympaattinen, pieni kahvila. Arkkitehti Bertel Liljequistin suunnittelema mutterin muotoinen, alkujaan Lauttasaaren lautan lipunmyyntikioskina toiminut rakennus on rakennettu vuonna 1927."
  },
  {
    "name": "Mäkikupla",
    "address": "Torkkelinkatu 2\n00500 Helsinki",
    "description": "Paikallispubi ja pizzeria Kalliossa jolla on vankka kanta-asiakaskunta."
  },
  {
    "name": "Namnam.",
    "address": "Fleminginkatu 21\n00500 Helsinki",
    "description": "Pieni kahvila Fleminginkadulla jossa tarjolla vietnamilaista kotiruokaa."
  },
  {
    "name": "Nanking",
    "address": "Kalevankatu 28\n00100 Helsinki",
    "description": "Nanking Kampissa on kantonilaiseen keittiöön erikoistunut kiinalainen ravintola."
  },
  {
    "name": "Naughty BRGR Lönnrotinkatu",
    "address": "Lönnrotinkatu 13\n00130 Helsinki",
    "description": "Käsin tehtyjä loistavia burgereita ja laaja olutvalikoima.\r\n\r\nBurgeriravintola Naughty BRGR syntyi huippukokki ja Top Chef -voittaja Akseli Herlevin yli kymmenvuotisen taustatyön tuloksena. Ravintolan toiminnan perustana on parhaat mahdolliset ainekset, jatkuva reseptien ja toiminnan kehittäminen, oikea asenne ja paras mahdollinen henkilökunta."
  },
  {
    "name": "Naughty BRGR Sturenkatu",
    "address": "Sturenkatu 21\n00510 Helsinki",
    "description": "Käsin tehtyjä loistavia burgereita ja laaja olutvalikoima.\r\n\r\nBurgeriravintola Naughty BRGR syntyi huippukokki ja Top Chef -voittaja Akseli Herlevin yli kymmenvuotisen taustatyön tuloksena. Ravintolan toiminnan perustana on parhaat mahdolliset ainekset, jatkuva reseptien ja toiminnan kehittäminen, oikea asenne ja paras mahdollinen henkilökunta."
  },
  {
    "name": "Naughty Lab",
    "address": "Sturenkatu 21\n00510 Helsinki",
    "description": "Marraskuussa 2021 avautuva Naughty Lab X Street Food Omakase on konseptiravintola, joka sijaitsee Sturenkadun Naughty BRGR -ravintolan sisällä. Ravintolan menu on uskollinen street foodille ja myös isännälleen Naughty BRGRille. Naughty Lab -ravintolakonsepti vie Chefs Table -tyylisen illallistamisen uudelle tasolle, sillä asiakaspaikat sijaitsevat keskellä industriaalista kehityskeittiötä. Näin annoksien valmistumista voi seurata omasta pöydästään samalla kun aistit triggeröityvät keittiön tuoksujen ja äänien kombinaatiosta. Luvassa on myös jatkuvasti kehittyvä yllätysmenu, jonka sisältö selviää vasta, kun kulinaristinen käsityö on valmis tarjoiltavaksi.\r\n"
  },
  {
    "name": "New Bamboo Center",
    "address": "Annankatu 29\n00100 Helsinki",
    "description": "New Bamboo Center on vuonna 1997 perustettu kiinalainen ravintola. Kiinalaisten ruokien lisäksi ravintolassa tarjoillaan malesialaisia curryruokia."
  },
  {
    "name": "Newroz 21",
    "address": "Kastelholmantie 2\n00900 Helsinki",
    "description": "Kaksikerroksinen ravintola Itäkeskuksessa, Puhoksen ostoskeskuksessa."
  },
  {
    "name": "Niska Helsinki",
    "address": "Kanavaranta 3-7 D 19\n00160 Helsinki",
    "description": "Niska Helsinki tarjoaa yksinkertaisen, mutta sitäkin makurikkaamman pizza-menun ahvenanmaalaiseen tyyliin. Peltileiviksi kutsutut pizzat paistetaan korkealuokkaisista, pääosin Ahvenanmaalla tuotetuista raaka-aineista ja tarjoillaan merellistä tunnelmaa henkivissä tiloissa."
  },
  {
    "name": "No.5 Coffee",
    "address": "Kirkkokatu 5\n00170 Helsinki",
    "description": "Perheyritys No.5 Coffee tarjoaa laadukasta vietnamilaista ruokaa, käyttäen vain tuoreita raaka-aineita, jossa yrtit ja mausteet yhdistyvät klassiseen valmistustapaan. Tulista ja makeaa, paistettua ja tuoretta."
  },
  {
    "name": "Noodle Master",
    "address": "Arkadiankatu 19\n00100 Helsinki",
    "description": "Ensimmäinen aitoja käsintehtyjä nuudeleita tarjoava ravintola Suomessa.\r\n\r\nNoodle Master tarjoaa aitoa kiinalaista katuruokaa eri alueilta ja käsintehtyjä nuudeleita live-esityksen kera.\r\n\r\nGluteeniton, saatavana myös riisinuudeleiden ja monien kasvisvaihtoehtojen kanssa."
  },
  {
    "name": "Nude",
    "address": "Kasarmikatu 44\n00130 Helsinki",
    "description": "Ravintola Nude on rennon letkeä erinomaisen ruoan ja viinin ystävän olohuone Helsingissä. Nudessa ruoka sovitetaan Bottlescouts.com verkkokaupan herkullisiin viiniyksilöihin."
  },
  {
    "name": "O'Learys Tripla",
    "address": "Firdonkatu 2B\n00520 Helsinki",
    "description": "O'Learys on rento sporttibaari ja ravintola jossa tarjolla amerikkalaistyyppistä ruokaa kuten esim. burgereita, myös kasvis ja veganiversioina. Arkisin tarjolla lounaspöytä."
  },
  {
    "name": "Old Boy",
    "address": "Ludviginkatu 3-5\n00130 Helsinki",
    "description": "Old Boy on lämminhenkinen ravintola, jossa on mukana ripaus Pohjois-Aasiaa. Sen päämääränä on nauttia elämän pienistä, hienoista asioista yhdessä sinun kanssasi."
  },
  {
    "name": "Olympiastadionin ravintola - Bistro Stadion",
    "address": "Paavo Nurmen tie 1\n00250 Helsinki",
    "description": "Olympiastadionin makumaailman sydän on uusi Bistro Stadion, jossa voi herkullisten ruokien, juomien ja välipalojen lisäksi nauttia uniikista funkkismiljööstä.  \r\n\r\nBistro Stadion on viihtyisä kortteliravintola, jossa keittiömestari itse loihtii herkulliset kausimenut paikan päällä. Ravintolan visiona on olla ylpeästi yhtä Olympiastadionin historian kanssa ja kirjoittaa paikalle uutta tarinaa. \r\n\r\nRuokalistalla maistuvat suomalaiset, perinteiset maut sekä puhtaat raaka-aineet, joihin kansainväliset tuulet tuovat yllätyksellisyyttä."
  },
  {
    "name": "Ônam",
    "address": "Mannerheimintie 14, Kauppakeskus Forum\n00100 Helsinki",
    "description": "Ônam on vietnamilainen ruokakonsepti, joka tarjoaa asiakkailleen aitoa vietnamilaista ruokaa suoraan katukeittiöstä. Ruokafilosofiaan kuuluu kevyitä ja terveellisiä annoksia, jotka on valmistettu perheresepteillä. Gluteenittomia annoksia saatavilla ja vegaanisia vaihtoehtoja löytyy paljon. Ônamissa tarjoillaan herkullisen pho-keiton lisäksi katuruokaklassikoita kuten goi cuon kesärullia, banh xeo, bun cha, bun bo hue sekä vietnamilaista kahvia ja jälkiruokia.\r\n"
  },
  {
    "name": "Onda",
    "address": "Hämeentie 13 B, Siltanen\n00530 Helsinki",
    "description": "Onda on ravintola, joka tarjoaa käsintehtyä, maukasta maailmanruokaa. Ruoka on suurimmaksi osaksi vegaanista, mutta listalta löytyy myös liha- ja kalaruokia. Arkisin tarjolla suosittu lounas, iltaisin annoksia ja lauantaisin perulainen brunssi. Ravintola sijaitsee Siltasen yhteydessä. Ravintola on avoinna klo 21/22 saakka, jonka jälkeen Siltanen jatkaa muuttuvilla musiikkitapahtumillaan myöhään yöhön."
  },
  {
    "name": "Paisano",
    "address": "Korkeavuorenkatu 45\n00130 Helsinki",
    "description": "Paisano on uusin ravintola tiimiltä, joka loi menestyksekkään Pobre Filipino ravintolan Kamppiin. Paisano nostaa luovuuden uudelle tasolle ja tuo New Filipino -keittiön rikkaat maut Helsingin ravintolakartalle."
  },
  {
    "name": "Pamela",
    "address": "Bulevardi 12\n00120 Helsinki",
    "description": "Jännittäviä makuja, simppeleitä cocktaileja, menevä tunnelma, hyvä hinta-laatusuhde sekä välitön ja sydämellinen vastaanotto. Pamela on auki lounaasta iltaan, maanantaista lauantaihin.\r\n\r\nKoska hyvä meininki on yhtä tärkeää kuin hyvä ruoka."
  },
  {
    "name": "Pancho Villa",
    "address": "Aleksanterinkatu 9, Kauppakeskus Kluuvi\n00100 Helsinki",
    "description": "Pancho Villan, tuo meksikolaisen vapaustaistelijan mukaan nimetty ravintolaketju, tarjoaa laajat valikoimat erilaisia herkkuja meksikolaisessa hengessä."
  },
  {
    "name": "Papa Albert Ristorante & Bar",
    "address": "Albertinkatu 30\n00120 Helsinki",
    "description": "Punavuoren ytimessä, Original Sokos Hotel Albertin ravintola Papa Albertissa ruoka on herkullista, juomat maistuvia ja ihmiset hyväntuulisia. Listalla on monenlaisia saapasmaan herkkuja, kuten antipastoja, pizzoja, reheviä salaatteja ja maukkaita pasta-annoksia. Nauti suomi-italo fuusioherkuista ja leppoisasta tunnelmasta!\r\n\r\nHyvän ruoan ja rennon tunnelman lisäksi Papa Albert Jazz Club viihdyttää asiakkaita joka toinen perjantai."
  },
  {
    "name": "Papu Cafe",
    "address": "Mariankatu 24\n00170 Helsinki",
    "description": "Hienostunut kahvielämys vastapaahdetusta kahvista suoraan mukiin. Suomalainen kahvila pienellä vivahteella vietnamilaisuutta. - There is always bean for you."
  },
  {
    "name": "Paseo Cafe & Grill",
    "address": "Itälahdenkatu 1a, rannassa  hiekkatien varrella\n00210 Helsinki",
    "description": "Rakkaudesta hyvään ruokaan, tunteella ja sydämellä luotuja makuja.\n\nPaseossa nautit samassa paketissa sekä kahvila- että ravintolatunnelmasta. Piipahda kahville, lounasta tai istu iltaa hyvän ruoan ja juoman kanssa pidempäänkin. Hiiligrillissä kuumenee mm. premium-burgerit ja  gambas pil pil. Muita suosikkeja mm. sinisimpukat Paseon tapaan ja toast skagen. Lounaslistalta löytyvät ajankohtaiset kauden herkut. Makean nälkään löytyy monenlaisia kakkuja, juuri paistettuja munkkeja ja paikan päällä tehtyä Paseon Gelatoa."
  },
  {
    "name": "Passio Keittiö & Baari",
    "address": "Kalevankatu 13\n00100 Helsinki",
    "description": "Passiossa pohjoismaiseen ruokaan suhtaudutaan intohimolla. Makukokemus on Passiossa melkoisen yllätyksellinen mainioiden ainesten, hiottujen taitojen ja tunteella poimittujen viinien ansiosta. Passio tarjoaa kolmen ja viiden ruokalajin yllätysmenuja illallisella."
  },
  {
    "name": "Pastis",
    "address": "Pieni Roobertinkatu 2\n00130 Helsinki",
    "description": "Pastis, \"pieni pala Pariisia keskellä Helsinkiä\" tarjoilee autenttisia maalaisranskalaisia makuja tunnelmallisessa ympäristössä. Laatuviinit ja yksillöllinen palvelu täydentävät ruokailukokemuksen. \r\n\r\nPastis tarjoaa myös pöytiintarjoillun lauantaibrunssin, sekä yksityisiin tilaisuuksiin Le Petit Pastis-kabinetin."
  },
  {
    "name": "Patisserie Teemu Aura",
    "address": "Siltasaarenkatu 12\n00530 Helsinki",
    "description": "Patisserie Teemu Aura on helsinkiläinen konditoria-leipomo joka on yhdistelmä tinkimätöntä käsityötä, luovuutta, hulluutta ja laadukkaita raaka-aineita. Tuotteissa yhdistetään kekseliäästi sekä modernia, että klassista leipomista ja rohkeasti eri makumaailmoja.\r\n\r\nHakaniemen myymälä täyttyy aamuisin uunituoreista leipomo- ja konditoriatuotteista. Saatavilla on lisäksi laaja valikoima aamiaistuotteita yksittäin tai valmiina setteinä. Lauantaisin aamiaista voi nauttia pitkälle iltapäivään. Lounasaikaan tarjolla on lohikeittoa sekä raikkaita salaatteja, tuoretta leipää unohtamatta."
  },
  {
    "name": "Paulig Kulma",
    "address": "Aleksanterinkatu 9, Kauppakeskus Kluuvi\n00100 Helsinki",
    "description": "Paulig Kulma on uusi virkistävä kohtaamispaikka keskellä Helsinkiä Kluuvin kauppakeskuksessa. Kaiken keskiössä on kahvi, johon suhtaudutaan ilolla ja intohimolla. Kahden kerroksen kahvilan, paahtimon ja Barista Instituutin kahvitalossa on tilaa tavata, tehdä töitä tai vain rentoutua. Sunnuntaisin tarjolla on sunnuntaibrunssi."
  },
  {
    "name": "Penélope",
    "address": "Mikonkatu 9\n00100 Helsinki",
    "description": "Mutkaton, laadukkaisiin raaka-aineisiin ja ystävälliseen palveluun panostava Välimeren maista vaikutteita hakeva bistrohenkinen ravintola."
  },
  {
    "name": "Penny",
    "address": "Uudenmaankatu 13\n00120 Helsinki",
    "description": "Penny on pieni 25-paikkainen ravintola Uudenmaankadulla Helsingissä. Pennyn ruoka koostuu Amerikan itärannikolla yleisesti käytetyistä laadukkaista raaka-aineista, sesonkien vaihteluista sekä keittiömestarin kädenjäljestä."
  },
  {
    "name": "Persialainen Ravintola Leppävaara",
    "address": "Harakantie 20\n02650 Espoo",
    "description": "Persialainen Ravintola Leppävaarassa tarjoilee suosittuja ja perinteisiä iranilaisia ruokalajeja."
  },
  {
    "name": "Pho 9",
    "address": "Lapinlahdenkatu 9\n00100 Helsinki",
    "description": "Pho 9 on vietnamilainen ravintola Kampissa joka tarjoaa maukkaita pho-keittoja, vietnamilaisia kevätrullia sekä erilaisia riisi- ja nuudeliannoksia. Tarjolla on myös perinteistä vietnamilaista kahvia ja muita juomia."
  },
  {
    "name": "Pho Nokis",
    "address": "Rajatie 4 A\n01230 Vantaa",
    "description": "Pho Nokis tarjoilee herkullisia pho-keittoja ja maukkaita banh mi -patonkeja."
  },
  {
    "name": "Pho Viet",
    "address": "Yrjönkatu 30\n00100 Helsinki",
    "description": "Pho Viet tarjoilee huolella tehtyjä pohjois-vietnamilaisen tyylin phở-keittoja, joissa maut ovat kohdallaan. Lisäksi iso valkoima erilaisia vietnamilaisia riisi- ja nuudeliruokia."
  },
  {
    "name": "Picnic Fredrikinkatu 28",
    "address": "Fredrikinkatu 28\n00120 Helsinki",
    "description": "Picnic on kotimainen perheyritys, joka on laajentunut yhdeksi Suomen suurimmaksi lounaskahvilaketjuksi joka tarjoaa paikanpäällä tehtyä, tuoretta ja herkullista ruokaa. Klassikkoannosten rinnalla Picnic kuljettaa vahvasti sesonki- ja hyvinvointiajattelua. Lounaskeitoissa maistuvat kauden kasvikset ja varhaiset aamut käynnistyvät esim. raikkailla jogurteilla, puuroilla ja smoothieilla."
  },
  {
    "name": "Picnic Kamppi",
    "address": "Urho Kekkosen katu 1, Kampin kauppakeskus E-taso\n00100 Helsinki",
    "description": "Picnic on kotimainen perheyritys, joka on laajentunut yhdeksi Suomen suurimmaksi lounaskahvilaketjuksi joka tarjoaa paikanpäällä tehtyä, tuoretta ja herkullista ruokaa. Klassikkoannosten rinnalla Picnic kuljettaa vahvasti sesonki- ja hyvinvointiajattelua. Lounaskeitoissa maistuvat kauden kasvikset ja varhaiset aamut käynnistyvät esim. raikkailla jogurteilla, puuroilla ja smoothieilla."
  },
  {
    "name": "Picnic Kukontori",
    "address": "Mannerheimintie 20, Kauppakeskus Forum 3.krs\n00100 Helsinki",
    "description": "Picnic on kotimainen perheyritys, joka on laajentunut yhdeksi Suomen suurimmaksi lounaskahvilaketjuksi joka tarjoaa paikanpäällä tehtyä, tuoretta ja herkullista ruokaa. Klassikkoannosten rinnalla Picnic kuljettaa vahvasti sesonki- ja hyvinvointiajattelua. Lounaskeitoissa maistuvat kauden kasvikset ja varhaiset aamut käynnistyvät esim. raikkailla jogurteilla, puuroilla ja smoothieilla."
  },
  {
    "name": "Piglets",
    "address": "Sandelsinkatu 2\n00260 Helsinki",
    "description": "Moderni eurooppalainen kortteliravintola Töölöntorin kupeessa joka tarjoilee yksinkertaista, satokauden mukaan tehtyä ruokaa, yhdistettynä annoksiin sopiviin eurooppalaisten pientuottajien viineihin."
  },
  {
    "name": "Pihka Lintulahti",
    "address": "Lintulahdenkatu 10\n00500 Helsinki",
    "description": "Pihka on lounasravintola Sörnäisten rantatien varrella, jossa tarjolla kattava Vihreä pöytä täynnä erilaisia sesongin kasviksia ja salaatteja sekä lämpimiä liha- tai kala ja kasvisruokia. Pieni jälkiruoka tai tuore hedelmä viimeistelevät nautinnollisen lounaan."
  },
  {
    "name": "Pihka Meclu",
    "address": "Mechelininkatu 1 A\n00180 Helsinki",
    "description": "Pihka on lounasravintola Kampissa Mechelininkadulla, jossa tarjolla kattava Vihreä pöytä täynnä erilaisia sesongin kasviksia ja salaatteja sekä lämpimiä liha- tai kala ja kasvisruokia. Pieni jälkiruoka tai tuore hedelmä viimeistelevät nautinnollisen lounaan."
  },
  {
    "name": "Pitkäkosken ulkoilumaja",
    "address": "Kuninkaantammentie 19\n00430 Helsinki",
    "description": "Pitkäkosken ulkoilumaja on etenkin talvisin suosittu, perinteinen 50-luvun ulkoilumaja kahveineen ja munkkeineen Helsingin keskuspuiston pohjoisosassa."
  },
  {
    "name": "Pizza Hut Citykäytävä",
    "address": "Aleksanterinkatu 21\n00100 Helsinki",
    "description": "Citykäytävän Pizza Hutissa voi nauttia herkullisen Lunch Buffet -lounaan tai viettää rennon illallisen viinilasillisen ääressä. Pizza Hutista löytyy oma ruokalista myös perheen pienimmille herkkusuille. Uunituoreet pizzat voi myös ottaa mukaan."
  },
  {
    "name": "Pizza MIX",
    "address": "Yläportti 4 A\n02210 Espoo",
    "description": "Espoon Olarissa sijaitsevan Pizza MIX ravintolan ruokalistan kruunu on pizza! Ravintola käyttää pitkälti aitoja, korkea-laatuisia italialaisia tuotteita pizzojen valmistuksessa.\r\n\r\nPizza MIX on iloinen tilaisuus vierailla Italiassa, poistumatta Suomesta!"
  },
  {
    "name": "Pizzala",
    "address": "Työpajankatu 2, rakennus 11\n00580 Helsinki",
    "description": "Pizzeria Pizzala Teurastamon alueella tarjoaa puulämmitteisessä uunissa valmistettua pizzaa. Vulkaanisesta kivestä valmistettu uuni lämpeää 500 asteeseen ja pizza paistuu siinä täydelliseen kypsyyteen."
  },
  {
    "name": "Pizzarium Kluuvi",
    "address": "Aleksanterinkatu 9, Kauppakeskus Kluuvi\n00100 Helsinki",
    "description": "Pala Roomaa keskellä kaupunkia. Pizzarium on aito roomalainen palapizzeria, pizza al taglio.\r\n"
  },
  {
    "name": "Pizzeria Luca",
    "address": "Lauttasaarentie 28\n00200 Helsinki",
    "description": "Pizzeria Luca on syntynyt halusta viettää aikaa asiakkaiden kanssa. Rupatella, nauraa, innostua ja rentoutua. Pizzeria Lucassa voi nauttia aidon napolilaistyylisen pizzan ja siemailla sen kanssa upeaa viiniä. Ravintola haluaa myös ilahduttaa vieraitaan tarjoilemalla vaihtuvia erikoismakuja. \r\n\r\nLauttasaaren Pizzeria Luca on valittu Suomen parhaaksi pizzeriaksi sekä Euroopan 15. parhaaksi pizzeriaksi kansainvälisessä 50 Top Pizza-kilpailussa."
  },
  {
    "name": "Pizzorante BRO",
    "address": "John Stenbergin ranta 4\n00530 Helsinki",
    "description": "Pizzorante BRO on silta herkulliseen italialaiseen ruokaan. Ravintolan  keihäänkärkenä on ohut ja rapeapohjainen roomalaistyyppinen pizza. Keittiö valmistaa ruuat Italialaisella intohimolla ja suomalaisella sydämellä. Laadukas makuelämys toteutuu yhdistämällä Italian alueelliset eroavaisuudet sekä laadukkaat raaka-aineet kotimaasta ja Italiasta helsinkiläisellä twistillä. Pizzorante BRO on osa Hilton Helsinki Strandia."
  },
  {
    "name": "Pjazza",
    "address": "Yrjönkatu 18 B\n00120 Helsinki",
    "description": "Pjazza on Helsingin keskustassa sijaitseva italialainen ravintola, jossa yhdistyy rakkaus italialaiseen ruokaan ja jazz-musiikkiin. Pjazzan ruokalista rakentuu Keski-Italian perinteisen ruokakulttuurin ympärille. Pizzan tekemisessä noudatetaan alkuperäistä reseptiä, ja taikinaa kohotetaan vähintään 72h."
  },
  {
    "name": "Platta",
    "address": "Messuaukio 1\n00520 Helsinki",
    "description": "Messukeskuksen yhteydessä sijaitsevan ravintola Plattan kodikas sisustus yhdistettynä teollisiin elementteihin luovat mielenkiintoisen ja kutsuvan ympäristön nauttia niin lounasta kuin illallista yhdessä tai yksin. \r\n\r\nParhaat maut syntyvät käsityönä - raaka-aineiden luonnollisia ominaisuuksia kunnioittaen, parhaita piirteitä korostaen ja pienimmätkin nyanssit huomioiden. Plattassa kokataan sesongin herkullisimmista raaka-aineista ja suositaan laadukkaimpia paikallisia tuottajia. Ravintola ammentaa inspiraatiota pohjoismaisesta luonnosta: keräily on tärkeä osa kasvispainotteista ruokaideologiaa. \r\n\r\nViinihuone kätkee sisäänsä viinejä laajalti ympäri maailman - yhtä lailla tuttuja kuin hieman jännittävämpiä makuja. Plattassa suositaan pientuottajia, joten valikoimassa on myös luomuviinejä, joista moni on biodynaamisesti viljeltyjä."
  },
  {
    "name": "Pobre",
    "address": "Urho Kekkosen katu 1, Kampin kauppakeskus 5.krs\n00100 Helsinki",
    "description": "Ensimmäinen ravintola Suomessa, joka tarjoaa modernia filippiiniläistä ruokaa. Pobre sai alkunsa vuonna 2013 Ravintolapäivänä, ja on sen jälkeen avannut oman ravintolan Kampin kauppakeskuksen 5.kerrokseen."
  },
  {
    "name": "Pompier Albertinkatu",
    "address": "Albertinkatu 29\n00180 Helsinki",
    "description": "Legendaarisesta Helsingin Vapaapalokunnan (VPK) talosta löytyy ravintola Pompier (ransk. palomies).\r\n\r\nPompierissa on tarjolla lounasta arkipäivinä klo 10.45-14. Iltaisin ja viikonloppuisin Pompier toimii tilaus- ja juhlaravintolana."
  },
  {
    "name": "Pompier Espa",
    "address": "Eteläesplanadi 8\n00130 Helsinki",
    "description": "Pompier Espa sammuttaa nälän ja janon lounasaikaan arkisin ja tiistaista lauantaihin on tarjolla a la carte -menu klo 17 alkaen. Lounaalla lämmin ruoka tarjoillaan lautasannoksina pöytään, illallinen tarjoillaan listalta jonka valikoima on korkealaatuinen ja tunnelma rento. Valikoimasta löytyy mm. jo klassikoksi muodostunut Tarte Tatin, jota on tarjottu samassa osoitteessa ja samalla reseptillä jo vuodesta 2006 alkaen."
  },
  {
    "name": "Pontus",
    "address": "Kapteeninkatu 26\n00140 Helsinki",
    "description": "Ullanlinnalainen korttelibistro ja viinibaari entisen KOM-ravintolan tiloissa jossa ruokalistan runko rakentuu kiviuunin ympärille, tarjolla on siis mm. uuniruokia, pizzoja ja muita hyvien viinien pariksi sopivia isoja sekä pieniä annoksia."
  },
  {
    "name": "Poompui B'staurant",
    "address": "Hämeentie 28\n00530 Helsinki",
    "description": "Thaimaalainen ravintola Kalliossa. Poompui tarkoittaa thain kielellä pulleaa, täällä voit syödä itsesi pulleaksi hyvällä omallatunnolla sillä kaikki ruuat on tehty tuoreista ja laadukkaista raaka-aineista."
  },
  {
    "name": "Pretty Boy Wingery",
    "address": "Töölöntori\n00260 Helsinki",
    "description": "Pretty Boy Wingery on wingseihin ja kansainvälisiin makuihin erikoistunut, rohkeasti erilainen ravintola. Laadukkaista raaka-aineista loihditut annokset ovat keränneet makupalettiaan maailman eri kolkista. Kaikkea överi-herkullista kanasta, maukasta NoChickeniä unohtamatta!"
  },
  {
    "name": "Pueblo Bar y Taqueria",
    "address": "Eerikinkatu 27\n00180 Helsinki",
    "description": "Aito meksikolainen avokeittiö ja baari. Suomen ensimmäinen taqueria ja baari, jossa tarjolla on päivittäin leivottuja ja paistettuja tortilloja sekä tuoreista raaka-aineista käsin tehtyjä salsoja sekä ruoka-annoksia. Tarjolla myös meksikolaisen ja latinalaisen amerikan cocktaileja sekä tuontioluita ja tequilaa."
  },
  {
    "name": "Puotilan kartano",
    "address": "Puotilantie 7\n00910 Helsinki",
    "description": "Itä-Helsingin merellisessä miljöössä sijaitseva historiallinen Puotilan Kartano kutsuu nauttimaan tasokkaista makuelämyksistä, lämminhenkisestä kartanotunnelmasta sekä mieleenpainuvista tapahtumista. Kartanossa herkutellaan viikon mittaan maukkailla lounailla, tyylikkäillä a la carte -annoksilla sekä viikonloppuisin tarjolla olevalla brunssilla. Viehättävä kartano toivottaa tervetulleeksi joko yksin tai yhdessä isomman seurueen kanssa. \r\n\r\n"
  },
  {
    "name": "Pupu City Center",
    "address": "Kaivokatu 8, 2.krs\n00100 Helsinki",
    "description": "Älä tingi nautinnosta. \r\n\r\nLaadukkaita, käsintehtyjä salaatteja parhaista raaka-aineista. Vaihtoehto parempien valintojen sekä kestävämmän maailman ja terveellisemmän elämäntavan puolesta, nautintoa unohtamatta. \r\n\r\nKokeile, miltä salaatti voi parhaimmillaan maistua!"
  },
  {
    "name": "Pupu REDI",
    "address": "Hermannin rantatie 5\n00580 Helsinki",
    "description": "Älä tingi nautinnosta. \r\n\r\nLaadukkaita, käsintehtyjä salaatteja parhaista raaka-aineista. Vaihtoehto parempien valintojen sekä kestävämmän maailman ja terveellisemmän elämäntavan puolesta, nautintoa unohtamatta. \r\n\r\nKokeile, miltä salaatti voi parhaimmillaan maistua!"
  },
  {
    "name": "Pupu Stockmann",
    "address": "Pohjoisesplanadi 41\n00100 Helsinki",
    "description": "Älä tingi nautinnosta. \r\n\r\nLaadukkaita, käsintehtyjä salaatteja parhaista raaka-aineista. Vaihtoehto parempien valintojen sekä kestävämmän maailman ja terveellisemmän elämäntavan puolesta, nautintoa unohtamatta. \r\n\r\nKokeile, miltä salaatti voi parhaimmillaan maistua!"
  },
  {
    "name": "Pupu Tennispalatsi",
    "address": "Fredrikinkatu 65\n00100 Helsinki",
    "description": "Älä tingi nautinnosta. \r\n\r\nLaadukkaita, käsintehtyjä salaatteja parhaista raaka-aineista. Vaihtoehto parempien valintojen sekä kestävämmän maailman ja terveellisemmän elämäntavan puolesta, nautintoa unohtamatta. \r\n\r\nKokeile, miltä salaatti voi parhaimmillaan maistua!"
  },
  {
    "name": "Pupu Tripla",
    "address": "Fredikanterassi 1\n00520 Helsinki",
    "description": "Älä tingi nautinnosta. \r\n\r\nLaadukkaita, käsintehtyjä salaatteja parhaista raaka-aineista. Vaihtoehto parempien valintojen sekä kestävämmän maailman ja terveellisemmän elämäntavan puolesta, nautintoa unohtamatta. \r\n\r\nKokeile, miltä salaatti voi parhaimmillaan maistua!"
  },
  {
    "name": "Putte's Bar & Pizza",
    "address": "Kalevankatu 6\n00100 Helsinki",
    "description": "Putte's Bar and Pizza eli \"Putte\" on jo nyt yksi Helsingin klassikkobaareista. Pizzojen salaisuus on niiden yksinkertaisuus. Resepti löydettiin pitkän tutkimusmatkan jälkeen New Yorkista. Putte on lapsiystävällinen baarin ja ravintolan sekoitus, jonka keittiö on auki poikkeuksellisen myöhään.\r\n\r\nPutte'sin alakerran tilassa, The Cellar:issa, järjestetään erilaisia klubi-iltoja, konsertteja ja muita tapahtumia. \r\n\r\nYksi erityinen syy suunnata Putteen on sen nykytaidekokoelma. Omistaja Antto Melasniemi on koonnut vuosien aikana ravintolan seinille suomalaista korkeatasoista nykytaidetta. \"Puttenheimin\" seinät pullistelevat jo, mutta niitä vasten nojaa kääreissä olevia, ripustusta odottavia teoksia. Taidekokoelma sisältää mm. Rauha Mäkilän, Otto Karvosen, Jouko Lehtolan, EGSin, Sami Lukkarisen ja Klaus Haapaniemen teoksia.\r\n\r\nAntto Melasniemi on kiehtova kokki, jolla on lisäksi Helsingissä kaksi kotimaiseen kausiruokaan erikoistunutta laaturavintolaa Kuurna ja Finne. Hän tekee kansainvälisillä designweekeilla ja taidemessuilla ruokaan ja kulttuuriinliittyviä tapahtumia, ja ennen ravintoloitsijan uraa hän oli suositun HIM-hevimetalliyhtyeen kosketinsoittaja."
  },
  {
    "name": "Puukioski Munkkiniemi",
    "address": "Laajalahden aukio\n00330 HELSINKI",
    "description": "Puukioski Munkkiniemi on suosittu kesäkahvila Munkkiniemen sydämessä Helsingissä. \r\n\r\nTarjolla on jäätelöä, kahvia, mm. Haagan Leivän leipomoherkkuja sekä kylmiä ja kuumia juomia. Myös koirat ovat tervetulleita - koirien vesikupissa on raikasta vettä tarjolla.\r\n\r\nArkkitehti Eero Urpola (1911-1939) suunnitteli Munkkiniemen lippakioskin vuonna 1937 ja se rakennettiin vuonna 1939 Helsingin Olympialaisia varten. Vuoden 1940 olympiakisat peruuntuivat talvisodan vuoksi."
  },
  {
    "name": "Qulma",
    "address": "Mariankatu 13 B\n00170 Helsinki",
    "description": "Qulma tarjoilee  herkullisia keittoja lisukkeineen sekä panineja lounaaksi maanantaista perjantaihin."
  },
  {
    "name": "Ragu",
    "address": "Ludviginkatu 3-5\n00130 Helsinki",
    "description": "Skandinaavisen keittiön puhtaudesta ja kekseliäisyydestä inspiroitunut ravintola jonka intohimona ovat Italian ruokaperinteet, viinit ja upeat raaka-aineet."
  },
  {
    "name": "Ravintola 10. Kerros",
    "address": "Kaivokatu 3 A, 10.krs\n00100 Helsinki",
    "description": "Vuonna 1947 ensimmäisen kerran avattu, ja syyskuussa 2020 uudistettu Ravintola 10. Kerros tarjoaa maiseman, jonka jokainen haluaa nähdä.\r\n\r\nFunkkisklassikko helsinkiläishotelli Vaakunan katolla on päivitetty uuteen loistoon. Kaupungin keskustaan avautuvia näköaloja on avattu entisestään, ja uusi ruokalista nostaa aidot maut esiin. Uudistuksen myötä kävijä voi nauttia yhdellä kertaa ajattomasta designista, upeista näkymistä, laadukkaasta ruoasta ja lämpimästä vieraanvaraisuudesta.\r\n\r\nRuokalista tarjoaa kiinnostavan valikoiman niin pientä iltapalaa kaipaavalle kuin pitkän kaavan mukaan illallistavalle savustetuista katkaravuista ja wallenbergista kokonaisiin kolmen ruokalajin menuihin.\r\n\r\nHuikeat terassimaisemat, tyylikkäät kokoustilat, ajaton funkkisravintola ja viihtyisä maisemasauna muodostavat upean tilakokonaisuuden kaupungin keskeisimmällä paikalla.\r\n"
  },
  {
    "name": "Ravintola Aino",
    "address": "Mannerheimintie 56\n00260 Helsinki",
    "description": "Ravintola Ainon tavoitteena on luoda rehellisiä makuja kauden parhaista raaka-aineista. Ruokalistaan haetaan innoitusta kotimaisista raaka-aineista sekä suomalaisista perinneruuista. Ravintola sijaitsee Töölössä, Kansallisoopperaa vastapäätä."
  },
  {
    "name": "Ravintola Aito",
    "address": "Museokatu 29\n00100 Helsinki",
    "description": "Ravintola Aito on pieni intiimi ja rennon tyylikäs töölöläisten ja muiden kaupunkilaisten ruoka- ja kohtauspaikka. Ravintola Aito tarjoaa aitoa, konstailematonta ja modernia sekä perinteistä, kotimaisiin raaka-aineisiin luottavaa ruokaa kansainvälisiä tuulahduksia unohtamatta."
  },
  {
    "name": "Ravintola Ani",
    "address": "Telakkakatu 2\n00150 Helsinki",
    "description": "Vuonna 1982 perustettu Helsingin vanhin turkkilainen ravintola.\r\nJoka päivä tarjolla runsas seisova pöytä, a la carte -listalta löytyy välimerellisiä klassikkoja."
  },
  {
    "name": "Ravintola Annan Kartano",
    "address": "Tuomarinkyläntie 18\n00690 Helsinki",
    "description": "Ravintola Annan Kartano on ainutlaatuinen ravintola, kahvila, kokous- ja juhlatila upeassa kartanomiljöössä Tuomarinkylän kartanon pihapiirissä."
  },
  {
    "name": "Ravintola Arbailo",
    "address": "Kastelholmantie 2\n00900 Helsinki",
    "description": "Arbailo on ravintola Puhoksen kauppakeskuksessa jossa tarjolla mm. hiiligrillissä valmistettua shish kebabia."
  },
  {
    "name": "Ravintola Arthur",
    "address": "Vuorikatu 19\n00100 Helsinki",
    "description": "Ravintola Arthur Helsinki on toiminut vuodesta 1927, jolloin avattiin siihen aikaan Hospizina tunnetun hotellin suuren suosion saavuttanut ruokala. Nykyisellä paikallaan Ravintola Arthur on toiminut vuodesta 1957.\r\n\r\nHotelli Arthurin ravintolan noutopöytäaamiaiselle on tervetulleita myös muut kuin hotellin asiakkaat ja arkisin tarjolla on maittava, runsas lounasbuffet. Ravintola Arthuriin on myös helppo tulla myöhäiselle lounaalle, kokouspäivän päätteeksi tai vaikka treffeille. Iltapäivästä alkaen tarjolla on Bistro-menu.\r\n\r\nRavintola Arthur juhlatiloineen ja kabinetteineen toimii myös tilausravintolana, myös ravintolan aukiolojen ulkopuolella."
  },
  {
    "name": "Ravintola Backas",
    "address": "Ylästöntie 28\n01510 Vantaa",
    "description": "200 vuotta vanhassa kartanomiljöössä, kakluuneineen sekä puistoineen, sijaitseva Ravintola Backas toimii pääasiassa tilausravintolana. Ravintola Backaksen pääideana on tarjota kaikille laatua luonnosta lautaselle.\r\n\r\nVanhassa juurruttamossa toimii kesäisin Kesäkahvila Olohuone joka on avoinna koko kesän keskiviikosta sunnuntaihin.\r\n\r\nRavintola Backaksessa järjestetään myös yleisiä illanviettoja ja tapahtumia ympäri vuoden"
  },
  {
    "name": "Ravintola Bellevue",
    "address": "Rahapajankatu 3\n00160 Helsinki",
    "description": "Bellevue on Helsingin ja Suomen vanhin venäläinen ravintola, perustettu vuonna 1917. Ravintola sijaitsee Katajanokalla, aivan Uspenskin katedraalin kupeessa. Bellevue on hakenut inspiraatiota juuriltaan tsaarinajan ranskalaisen keittiön ja slaavilaisten vaikutteiden cocktailista tämän päivän vieraille. Bellevue on matalan kynnyksen olohuone ja ruokasali, jossa voi nauttia niin päivällisannoksen kuin juhlavan illallisen. Baarin puolella voi valita zakuska-palan tai muutaman lasillisen seuraksi."
  },
  {
    "name": "Ravintola Blue Peter",
    "address": "Vattuniemen puistotie 1\n00210 Helsinki",
    "description": "Blue Peter on Lauttasaareen vuonna 1976 perustettu merenrantaravintola, joka palvelee asiakkaita ympärivuotisesti. Keittiö tarjoilee konstailemattomia bistroannoksia kansainvälisen keittiön otteella unohtamatta suomalaisia raaka-aineita ja sesonkeja. Saapuminen on helppoa niin maitse kuin meriteitse."
  },
  {
    "name": "Ravintola Borneo",
    "address": "Itälahdenkatu 20\n00210 Helsinki",
    "description": "Lounasravintola Borneo tarjoaa autenttista maleasialaista kotiruokaa. Kaikki reseptit ovat peräisin ravintoloitsijan äidiltä ja hänen suvultaan - niin kotikeittiöistä kuin perheen omasta ravintolasta Maleasiassa."
  },
  {
    "name": "Ravintola Brändö Seglare",
    "address": "Granfeltintie 11\n00570 Helsinki",
    "description": "Ravintola Brändö Seglare on intiimi purjehdusseuran jäsenravintola Kulosaaressa. BS palvelee kesäkaudella niin tilausasiakkaita kuin purjehdusseuralaisia a`la carten muodossa."
  },
  {
    "name": "Ravintola Bröd",
    "address": "Bulevardi 26\n00120 Helsinki",
    "description": "Ravintola Bröd on urbaani bistro, jonka ruokatuote on sekoitus skandinaavisuutta, eurooppalaisuutta ja helsinkiläisyyttä. \r\n\r\nRavintola tarjoilee ensiluokkaista aamiaista päivittäin, maistuvaa lounasta arkisin ja makuhermoja hivelevää illallista maanantaista sunnuntaihin. Jo logosta ja nimestä voi huomata, että leipä on keskeisessä roolissa ravintolassa. Leipä on itse asiassa aivan ravintolan sydämessä. Jokaiselle ruokailijalle tarjoillaan paikan päällä leivottua leipää ja voita."
  },
  {
    "name": "Ravintola Carelia",
    "address": "Mannerheimintie 56\n00260 Helsinki",
    "description": "Ravintola Carelia on viihtyisä ranskalainen bistro Helsingissä, jossa ranskalaiset vaikutteet ja vanhan ajan tunnelma kohtaavat. Rento brasserie-ilmapiiri uniikissa vanhassa apteekkimiljöössä, jossa on edelleen tallella 1920-luvulla toimineen apteekin alkuperäinen sisustus, kutsuu viihtymään sekä nauttimaan hyvästä ruoasta ja juomista. Ravintola sijaitsee Kansallisoopperaa vastapäätä. Keskeisen sijainnin vuoksi ravintolaan on luonteva jatkaa illalliselle tai lasilliselle oopperanäytöksen jälkeen tai muuten vain kesken päivän. Arkipäivisin tarjolla on lounas ja iltaisin monipuolinen à la carte ja laaja valikoima oman viinimaahantuonnin viinejä."
  },
  {
    "name": "Ravintola Casa Mare",
    "address": "Gyldénintie 6\n00200 Helsinki",
    "description": "Casa Mare on Lauttasaaren sydämessä sijaitseva ruokaravintola, joka tarjoaa asiakkailleen huolella tehtyä mutta rentoa ruokaa mukavan miljöön ja iloisen palvelun siivittämänä. Herkulliset lounas- ja à la carte-annokset sekä mainiot juomat vievät kielen mennessään. Lapsiystävällinen ravintola huomioi perheen pienimpiä omalla ruokalistalla ja leikkinurkalla."
  },
  {
    "name": "Ravintola Central Park",
    "address": "Nuijamiestentie 10\n00320 Helsinki",
    "description": "Ravintola Central Parkin ruokafilosofia pohjautuu skandinaaviseen puhtauteen ja tuoreuteen. Listalta löytyy myös kansainvälisiä annoksia kivalla pohjoismaisella twistillä.  Tämän päivän ja tulevaisuuden hyvää oloa kuvaaviin skandinaavisiin termeihin kiteytyy niin ravintola Central Parkin kuin koko hotellinkin liikeidea. Näihin molempiin liittyy skandinaavisuus, kotoisuus, rento ja hyvä fiilis, tasapaino, puhtaat raaka-aineet kuin terveellisyyskin.\r\n\r\nRavintolan monipuoliset ja muuntuvat tilat taipuvat myös 50-300 henkilön tilaisuuksiin. Ravintolan yhteydessä myös 10 henkilön kabinetti.\r\n"
  },
  {
    "name": "Ravintola China",
    "address": "Annankatu 25\n00100 Helsinki",
    "description": "Vuodesta 1973 toiminut Ravintola China on Helsingin ensimmäinen kiinalainen ravintola. 65-paikkainen, Etelä-Kiinan kantonilaiseen keittiöön erikoistunut korkealaatuinen ravintola sijaitsee keskustassa Annankadulla.\r\n\r\nViihtyisän ravintolan erikoisuuksiin kuuluvat mm. dim-sum, paahdettu ankka sekä monipuoliset kasvis-, tofu- ja äyriäisateriat. Tarjolla on aasialaisille tarkoitettu erityislista, jonka perään kannattaa kysellä, sekä pohjoisen Sze-Cheniläisen keittiön herkkuja."
  },
  {
    "name": "Ravintola Demo",
    "address": "Uudenmaankatu 9-11\n00120 Helsinki",
    "description": "Ravintola Demo on Helsingin Uudenmaankadulle vuonna 2003 perustettu fine dining -ravintola. Antaumuksellinen käsityönä tehty ruoka, näyttävät annokset ja persoonallinen palvelu on palkittu vuodesta 2007 asti Michelin tähdellä. Demon omistajan ja keittiömestari Tommi Tuomisen omistautuminen ravintolalle näkyy jatkuvana korkeana laatuna ravintolan keittiön työskentelyssä. Ravintolan tarjoilee päivän menua, joka sisältää joko kuusi tai seitsemän ruokalajia, ja joka rakentuu sesongin ja päivän raaka-aineiden pohjalta.\r\n\r\nRavintolalle pn myönnetty yksi Michelin-tähti."
  },
  {
    "name": "Ravintola Elite",
    "address": "Eteläinen Hesperiankatu 22\n00100 Helsinki",
    "description": "Elite on ainutlaatuinen kulttuuri- ja taiteilijaravintola, elämän estradi ja taiteilijoiden olohuone vuodesta 1932. Tässä oikean elämän teatterissa ovat viihtyneet niin näyttelijät kuin muusikot, kirjailijat ja tanssijat, ja myös kuvataiteilijat, joiden teokset nyt koristavat Eliten seiniä. Suomalais-kansainvälisen keittiön antimia on mm. Tauno Palon kermasipulipihvi sekä vorschmack."
  },
  {
    "name": "Ravintola Emo",
    "address": "Kluuvikatu 2\n00100 Helsinki",
    "description": "Modernia eurooppalaista ruokaa pohjoismaisella otteella. Lounasta tarjoillaan maanantaista perjantaihin ja illallista maanantaista lauantaihin. Lisäksi ravintolassa on cocktailbaari ja kesäterassi.\r\n"
  },
  {
    "name": "Ravintola Famu",
    "address": "Mannerheimintie 46\n00260 Helsinki",
    "description": "Ravintola Famussa nautitaan pohjoismaisesta ja eurooppalaisesta ruokakulttuurista, joiden parhaat klassikkoreseptit on päivitetty moderneiksi kokonaisuuksiksi ja jotka yllättävät raikkaalla esillelaitolla.\r\n\r\nHotellin aamiaiselle ovat myös muut kuin hotellissa yöpyvät tervetulleita."
  },
  {
    "name": "Ravintola Farouge",
    "address": "Fabianinkatu 9\n00140 Helsinki",
    "description": "Eksoottinen, maukas ja aito libanonilainen ravintola Farouge toi välimerellisen ruokakulttuuri Helsinkiin jo vuonna 1995. \r\n\r\nUudessa paikassa avatussa Farougessa tunnelma on lämmintä, iloista sekä yllätyksellistä. Ruoka on intohimolla valmistettua ja baarista saa pientä naposteltavaa yömyöhään."
  },
  {
    "name": "Ravintola Gandhi",
    "address": "Toivonkatu 1-3\n00250 Helsinki",
    "description": "Ravintola Gandhi on Helsingissä toimiva intialainen ravintola, joka tarjoilee huolella valikoituja suomaiseen makuun sopivia ruokalajeja."
  },
  {
    "name": "Ravintola Graniittilinna",
    "address": "Säästöpankinranta 6\n00530 Helsinki",
    "description": "Graniittilinna on tunnettu maukkaista ja herkullisista ruoistaan, ensiluokkaisesta palvelustaan sekä tunnelmallisesta miljööstään. Keittiö käyttää korkealaatuisia raaka-aineita jotka valitaan ja valmistetaan huolella ja rakkaudella. Tunnelmallisen ravintolan sydän on aito puuhiiligrilli, jonka avulla raaka-aineiden ominaisaromit tuodaan esiin parhaimmalla tavalla - mehukkuudesta tinkimättä. Ruokalista tarjoaa runsaasti valinnanvaraa niin lihan, kalan kuin kasvisten ystäville."
  },
  {
    "name": "Ravintola Grotesk",
    "address": "Ludviginkatu 10\n00130 Helsinki",
    "description": "Ravintola Grotesk on tarjoillut makuelämyksiä Erottajalla jo yli vuosikymmenen. Groteskin puuhiiligrillissä täydelliseksi paahtuvat niin lihat, meren herkut kuin kauden kasviksetkin. Listalta löytyy herkkuja jokaiseen makuun. Kaikki, leivästä jäätelöön, valmistetaan käsin alusta loppuun parhaista raaka-aineista.\r\n\r\nMenu, joka nojaa klassiseen eurooppalaiseen sekä pohjoismaiseen keittiöön, vaihtuu kausittain, ja siinä hyödynnetään sesongin parhaat raaka-aineet. \r\n\r\nViikonloppuisin keittiön sulkeuduttua, ovet avataan myös juhlakansalle. Valot himmennetään ja ravintolaan avaataan cocktailtiski, istumapaikkoja löytyy runsaasti joten juhlimaan pääsee isommallakin porukalla."
  },
  {
    "name": "Ravintola Happy Friends",
    "address": "Sinikalliontie 7\n02630 Espoo",
    "description": "Happy Friendsin lounas yhdistää cross kitchen-hengessä makuja maailmalta ja Suomesta."
  },
  {
    "name": "Ravintola Hausman",
    "address": "Töölönlahdenkatu 3\nHelsinki 00100",
    "description": "Ravintola Hausmanin on lämminhenkinen bistrotyylinen ravintola jonka ruokalista edustaa saksalaista -italialaista keittiötä. Listalta löytyy muun muassa erilaisia pasta-annoksia ja badenilaiseen tapaan valmistettua maksaa. Hausmanniin voit tulla pikaiselle lounaalle, piipahtaa lasilliselle tai illallistaa pitkän kaavan mukaan. Kesäaikaan ravintolan edessä on mukava terassi."
  },
  {
    "name": "Ravintola Hefe",
    "address": "Henry Fordin katu 6 B\n00150 Helsinki",
    "description": "Lounasravintola"
  },
  {
    "name": "Ravintola Hong Kong",
    "address": "Sallinkatu 3\n00250 Helsinki",
    "description": "Ravintola Hong Kong on viihtyisä kiinalainen ravintola Taka-Töölössä Olympiastadionin vieressä.\r\n\r\nVuonna 1984 perustettu Hong Kong on yksi Suomen ensimmäisistä kiinalaisista ravintoloista.\r\n"
  },
  {
    "name": "Ravintola il Bucatino",
    "address": "Tehtaankatu 38\n00150 Helsinki",
    "description": "Ravintola Trattoria Il Bucatino on 40-paikkainen italialaisravintola Eirassa jonka toiminnan lähtökohtana on perustajiensa, kolmen italialaismiehen, näkemys aidosta italialaisesta ruuasta nykyaikaisessa trattoriassa."
  },
  {
    "name": "Ravintola Ilves",
    "address": "Urho Kekkosen katu 4-6\n00100 Helsinki",
    "description": "Vuonna 1932 ovensa avannut Ravintola Ilves on aina tarjonnut rehtiä ruokaa.  Sesongin mukaan vaihtuvalla, kohtuuhintaisella ruokalistalla on parhaista ja tuoreista aineksista valmistettuja à la carte -annoksia, jotka tarjoillaan pöytään lämminhenkisellä ja asiantuntevalla palvelulla. Juomatarjontaan kuuluvat mm. hyvä kokoelma oluita niin pienpanimoilta kuin suuremmilta tekijöiltä sekä kiinnostava ja monipuolinen valikoima persoonallisia luomuviinejä pientuottajilta ympäri maailman. Ilveksessä voi nauttia sekä lounasta että illallista tai poiketa lasillisille vaikkapa ennen illan keikkaa naapurissa sijaitsevalla Tavastiaklubilla - tai sen jälkeen."
  },
  {
    "name": "Ravintola Jura",
    "address": "Neitsytpolku 10\n00140 Helsinki",
    "description": "Ravintola Jura on pieni ja mutkaton ravintola Ullanlinnan sydämessä. Keittiössä sesonkeja vaalitaan ja menu elää jatkuvasti niiden mukana. Sekä á la cartessa että neljän ruokalajin menussa kasvikset ovat paraatipaikalla ja viinikaapin persoonalliset antimet täydentävät illalliskokemuksen huippuunsa."
  },
  {
    "name": "Ravintola Juttutupa",
    "address": "Säästöpankinranta 6\n00530 Helsinki",
    "description": "Juttutupa eli Juttis on auki joka päivä ja sinne ovat tervetulleita kaikki. Juttis on aito, ainutlaatuinen ja raikkaan kansanomainen, sinne mahtuvat sulassa sovussa niin tavalliset helsinkiläiset kaduntallaajat, taiteen alan työläiset kuin elämän kiiltävään puoleen mieltyneet kaupunkilaisetkin. Mutkattomuus, ihmisläheisyys, elävä musiikki ja konstailematon ruoka ovat niitä Juttutuvan omimpia juttuja. Siellä viihdytään hyvässä seurassa ja rehdin ruoan parissa - useimmiten pitkään."
  },
  {
    "name": "Ravintola Kaarti",
    "address": "Pohjoinen Hesperiankatu 33 A\n00260 Helsinki",
    "description": "Vanhan Kaartin Pataljoonan tiloissa sijaitseva ravintola jossa kunnioitetaan ja korostetaan rakennuksen vanhan ajan henkeä luomalla tilaan nostalgista fiilistä niin ravintolan somistuksen kuin henkilökunnan vaatetuksen myötä. Nykyaikaa ravintolassa edustaa trendikäs sisustus ja ruokatarjonta. Ravintola Kaartissa nautitaan runsaasta lounaasta ja monipuolisesta brunssista. Iltaisin Kaarti toimii tilausravintolana."
  },
  {
    "name": "Ravintola Kamome",
    "address": "Pursimiehenkatu 12\n00150 Helsinki",
    "description": "Ravintola Kamome tuo yhteen suomalaisen perinteisen ruuan ja japanilaisen keittiön. Ravintolan tiloissa (silloin vielä Kahvila Suomi) kuvattiin vuonna 2006 suuren menestyksen saanut japanilainen elokuva Kamome Shoduko (Ruokala Lokki)."
  },
  {
    "name": "Ravintola Kannas",
    "address": "Eerikinkatu 43\n00180 Helsinki",
    "description": "Vuonna 1939 perustetussa Kannaksessa viihtyivät aikoinaan merimiehet, ahtaajat ja muut Hietalahden sataman työläiset. Nykyään Kannas tarjoaa asiakkailleen reilua ruokaa ja juomaa värikästä historiaansa unohtamatta."
  },
  {
    "name": "Ravintola Kappeli",
    "address": "Eteläesplanadi 1\n00130 Helsinki",
    "description": "Esplanadin helmi - tarinaa jo vuodesta 1867.\r\n\r\nKappelin vetovoimalla on pitkät perinteet. Espan puiston kauneus, lasiverannan avaruus, rakennuksen arvokas olemus ja moderni keittiö ovat valmiina tämän päivän asiakkaille. Kappelin salissa on tunnelmaa pariskunnille sekä puitteet myös suuremmille seurueille.\r\n\r\nKappelin kahvila on yksi perinteisimmästä tapaamispaikoista Helsingissä. Lounasaikaan tarjolla on päivittäin vaihtuva keitto, muuten vitriineistä valittavissa herkullisia makeita ja suolaisia vaihtoehtoja.\r\n\r\nKappelin terassi on saavuttanut legendaarisen maineen, sillä kesäinen Esplanadi, Kauppatorin vilske ja Espan lavalta kantautuvat rytmit luovat ainutlaatuisen tunnelman. Terassi avataan keväällä heti säiden salliessa ja pidetään auki syksyyn."
  },
  {
    "name": "Ravintola Karljohan",
    "address": "Yrjönkatu 21\n00100 Helsinki",
    "description": "Karljohan valmistaa klassikoita ja perinneruokia suurella sydämellä. Talon vorschmack, ylikypsähäränrinta, kateenkorva ja muut sisäelinruoat ovat löytäneet yli 30 vuodessa monta uskollista ystävää."
  },
  {
    "name": "Ravintola Kiltakellari",
    "address": "Bulevardi 44\n00120 Helsinki",
    "description": "Vuonna 1885 rakennetun Sinebrychoffin panimorakennuksen tiloissa toimiva tunnelmallinen ravintola Kiltakellari on sekoitus perinteitä ja modernia muotoilua. Hauska yksityiskohta ravintolasalissa on Koffin hevosten tirkistysaukko. Ravintola toimii vanhassa Sinebrychoffin panimorakennuksessa, jonka sisustuksessa perinteet ja moderni suunnittelu kohtaavat.  Jykevät kattopilarit ja vanhat tiiliseinät luovat vaikuttavan tunnelman. \r\n\r\nJuhlapaikkana ja tilausravintolana Kiltakellari on eksoottinen holveineen ja vanhoine tiilimuurauksineen. Arkipäivisin Kiltakellari toimii lounasravintolana."
  },
  {
    "name": "Ravintola Kirkuk",
    "address": "Kastelholmantie 2, Puhoksen ostoskeskus\n00900 Helsinki",
    "description": "Puhoksen ostoskeskuksessa Itäkeskuksessa sijaitseva Lähi-idän ruokia tarjoava hiiligrilliravintola."
  },
  {
    "name": "Ravintola Kokki",
    "address": "Prinsessantie 2\n00820 Helsinki",
    "description": "Ravintola Kokki on Stadin Ammattiopiston opetusravintola jossa tarjolla on lounas arkisin. Ravintola Kokin palveluja täydentävät elintarvikealan opiskelijoiden valmistamat leipomo- ja konditoriatuotteet deli-kahvila Kupissa."
  },
  {
    "name": "Ravintola Kolme Kruunua",
    "address": "Liisankatu 5\n00170 Helsinki",
    "description": "Menneen ajan tunnelmaa, aito 50-luvulta säilynyt interiööri ja perinteistä suomalaista ruokaa kuten esim. lihapullia, pyttipannua, läskisoosia ja paistettuja silakoita."
  },
  {
    "name": "Ravintola Koskenranta",
    "address": "Katariina Saksilaisen katu 9\n00560 Helsinki",
    "description": "Koskenranta on Helsingin Vanhankaupunginkosken rannalla sijaitseva idyllinen ravintola. Vuonna 1946 valmistunut entinen Imatran Voiman Vesivirtauslaboratorio toimii tänä päivänä ravintolana ihastuttavassa koskimaisemassa. Ravintola on avoinna ympäri vuoden ja palvelee talvikaudella arkisin lounasaikaan ja viikonloppuisin kahvila-ravintolana. Kesäisin koskea hipovalla terassilla nautit luonnonrauhassa bistro-annoksista ja vaikkapa lasillisesta viiniä."
  },
  {
    "name": "Ravintola Koto",
    "address": "Lönnrotinkatu 22\n00100 Helsinki",
    "description": "Japanilainen ravintola Koto on toiminut Helsingissä jo vuodesta 1986. Koto uskoo perinteiseen japanilaiseen keittiöön, puhtaisiin ja korkealaatuisiin raaka-aineisiin."
  },
  {
    "name": "Ravintola Kuninkaan Lohet, Vanha Viilatehdas",
    "address": "Kuninkaantie 28\n01740 Vantaa",
    "description": "Ravintola Kuninkaan Lohet sijaitsee kultturihistoriallisesti merkittävällä paikalla, Vantaankosken äärellä. Ravintola tarjoaa buffetlounasta arkipäivisin ja yleisölle avoimia tapahtumia järjestetään ympäri vuoden. Lisätietoa tapahtumista löytyy ravintolan kotisivuilta.\r\n\r\nVanhan Viilatehtaan ja puistomaisemissa sijaitsevan kustavilaisen Kuninkaan Kartanon mailla komeili jo 1500-luvulla krouvi. Nykyisin näissä tiloissa järjestetään lounaan ja yleisölle avoimien tapahtumien lisäksi tilauksesta niin kokoukset, syntymäpäivät, häät kuin yritystilaisuudet jopa 500 henkilölle."
  },
  {
    "name": "Ravintola Kuu",
    "address": "Töölönkatu 27\n00260 Helsinki",
    "description": "Töölönkadulla sijaitseva Ravintola Kuu on tarjonnut ravintolaelämyksiä jo vuodesta 1966. Kuun nuorekas ja innokas keittiötiimi valmistaa suomalaisen ja skandinaavisen keittiön klassikkoja uudella innovatiivisella ja modernilla otteella."
  },
  {
    "name": "Ravintola KuuKuu",
    "address": "Museokatu 17\n00100 Helsinki",
    "description": "Ravintola KuuKuu on hyvän ruoan kotimainen kortteliravintola. Ruokatyyli on sopiva sekoitus perinteisiä makuja ja modernia keittotaitoa. Viihtyisässä baarissa voi laatujuomien kanssa nauttia ravintolan keittiössä valmistettuja pikkuannoksia. Kesällä palvelee myös aurinkoinen terassi johon voi pysähtyä ruokailemaan tai vaikka vain lasilliselle."
  },
  {
    "name": "Ravintola Kuusi Palaa",
    "address": "Mannerheimintie 10\n00100 Helsinki",
    "description": "Ravintola Kuusi Palaa Hotelli Marskissa tarjoaa suomalaisia makuja modernilla twistillä. Se liputtaa puhtaiden suomalaisten raaka-aineiden ja yhdessä syömisen puolesta. Ravintola tarjoaa yllätyksiä, oivalluksia ja uusia näkökulmia - kaikkea mitä nykyaikaiseen ravintolailtaan kuuluu. \r\n\r\nTiesitkö, että kuusi palaa -sanonnalla on suomenkielessä yhdeksän eri merkitystä?"
  },
  {
    "name": "Ravintola Lasipalatsi",
    "address": "Mannerheimintie 22-24\n00100 Helsinki",
    "description": "30-luvun funkkistyyliin entisöity ravintola on yleisilmeeltään ilmava, valoisa ja selkeä. Ravintola Lasipalatsi tarjoaa suosittujen klassikkoannosten lisäksi kunkin vuodenajan herkkuja silloin kun ne ovat parhaimmillaan. Menussa näkyvä suomalaisuus korostuu myös raaka-aineiden valinnassa."
  },
  {
    "name": "Ravintola Lehtovaara",
    "address": "Mechelininkatu 39\n00250 Helsinki",
    "description": "Ravintola Lehtovaara on yksi Helsingin tunnetuimmista klassikkoravintoloista. Lehtovaara on läpi vuosikymmenten tullut tunnetuksi korkeatasoisen suomalaisen ja kansainvälisen ruuan tarjoajana. Vuosien mittaan Lehtovaara on saanut myös useita kunnianosoituksia. Ravintolassa on myös suosittu, ympäri vuoden avoinna oleva lasiterassi."
  },
  {
    "name": "Ravintola Lönkka",
    "address": "Lönnrotinkatu 11\n00120 Helsinki",
    "description": "Lönkka on rento olut- & ruokabistro Helsingin keskustassa. Ravintola Lönkan ruoka edustaa modernia eurooppalaista keittiötä. Ravintola tarjoilee konstailematonta ja rehtiä ruokaa sekä sydämellistä ja ystävällistä palvelua, unohtamatta rentoa ja välitöntä tunnelmaa. Tarjolla on niin nopeaa lounasta kuin herkuttelua illallisella kahdestaan tai suuremmalla seurueella.\r\nBaariin voi myös piipahtaa lasilliselle. Osa pöydistä pidetään aina ilman varausta."
  },
  {
    "name": "Ravintola Makalu",
    "address": "Pikkalankatu 5\n00700 Helsinki",
    "description": "Ravintola Makalu on nepalilainen ravintola Malmilla jonka monipuoliselta á la carte -listalta löytyy niin kasvis-, kana-, lammas-, liha- kuin kalaruokia.\r\n\r\nTandoori-uunissa valmistuvat tandoori- erikoisuudet ja tuoreet naan-leivät. Viinilistalta löytyy mausteiseen ruokaan sopivat puna- ja valkoviinit."
  },
  {
    "name": "Ravintola Makasiini",
    "address": "Katajanokanlaituri 7\n00160 Helsinki",
    "description": "Scandic Grand Marinan ravintola Makasiini poimii parhaat katuruokatrendit ja yhdistelee luovasti terveellisiä ja hyvälaatuisia proteiineja sekä raikkaita kasviksia.\r\n\r\nMerihenkisen ja rennon ravintolan suuret kaari-ikkunat luovat avaran ja valoisan tunnelman. Kesäisin ravintola laajenee suurelle aurinkoiselle terassille."
  },
  {
    "name": "Ravintola Makuja",
    "address": "Fredrikinkatu 46\n00100 Helsinki",
    "description": "Ravintola Makuja on Kampin kupeessa sijaitseva terveystietoinen sushiravintola, jossa tarjoillaan herkullisia makuelämyksiä niin perinteisen kuin vegaanisen sushin muodossa. Sushibuffet on auki aamusta iltaan ja tarjolla on myös valmisannoksia."
  },
  {
    "name": "Ravintola Más",
    "address": "Simonkatu 9, Scandic Simonkenttä\n00100 Helsinki",
    "description": "Narinkkatorilla sijaitseva Más on inspiroitunut Iberian niemimaan modernista keittiöstä, pohjoismaisesta ruokatyylistä ja lähellä tuotetuista laadukkaista raaka-aineista. Ravintolassa voi maistella useita pieniä annoksia, kokeilla avokeittiön Rotisserie-grillin herkullisia makuja tai tilata isomman annoksen jaettavaksi koko seurueen kesken. Ravintola Más palvelee lounaasta illalliseen. Ravintolan Narinkkatorin ylle avautuvalla terassilla pitkä ilta hyvässä seurassa vaihtuu nopeasti yöhön."
  },
  {
    "name": "Ravintola Merimakasiini",
    "address": "Hietalahdenranta 14\n00180 Helsinki",
    "description": "Ravintola Merimakasiini on kaikille meren, merielämän ja meren herkkujen ystäville. Tämä Hietalahti Portin raikas merellinen helmi Hietalahdenrannassa tarjoaa aina sesongin parhaat ja tuoreimmat kala- ja äyriäisruuat, kasvis- ja lihavaihtoehtoja unohtamatta, viihtyisässä satamaympäristössä keskustan tuntumassa aivan Hietalahden torin läheisyydessä. Valitse suosikkisi listan klassikoista tai anna sesongin erikoisuuksien viedä kielesi mennessään."
  },
  {
    "name": "Ravintola Meripaviljonki",
    "address": "Säästöpankinranta 6\n00530 Helsinki",
    "description": "Meripaviljonki on ainutlaatuinen meressä kelluva panoraamaravintola keskellä Helsinkiä, joka palvelee sekä tyylikkäänä lounas- että illallisravintolana. Meripaviljonki on erikoistunut meren herkkuihin: kaloihin, äyriäisiin ja hummereihin, joita varten salissa on oma allas. Listalta löytyy toki myös kasvis- ja liharuokia. Meripaviljongissa voi nauttia muutaman henkilön illallista tai järjestää teemallisia koko ravintolan kattavia yksityistilaisuuksia."
  },
  {
    "name": "Ravintola Meritorppa",
    "address": "Kalastajatorpantie 1\n00330 Helsinki",
    "description": "Meritorppa on Helsingin Munkkiniemessä, Kalastajatorpantiellä sijaitseva merellinen ja viihtyisä rantaravintolahelmi, jonka välitön ja lämmin ilmapiiri sekä asiantunteva palvelu houkuttelevat asiakkaita lounaasta illalliseen ja vuodesta toiseen. Ravintola toimii Hilton Helsinki Kalastajatorppa -hotellin yhteydessä. \r\n\r\nLähituotanto, luomu, meren läheisyys ja sesongit näkyvät vahvasti à la carte -listalla. Puhtaista ja tuoreista raaka-aineista valmistetaan klassisin tekniikoin moderneja skandinaavisen keittiön annoksia, maku ja laatu edellä. Useamman hengen seurueella saapuvat voivat jakaa makunautinnot valitsemalla yhteisen ryhmämenun.\r\n\r\nKesäkaudella ravintola Meritorpan asiakkaat pääsevät nauttimaan ruuasta ja virvokkeista myös kahdella terassilla, joista toisella voi ihailla merinäkymiä ja auringonlaskua, ja toinen tarjoaa rentoa tunnelmaa baarituoleineen, sohvaryhmineen ja pihakeinuineen. Sunnuntaisin tarjoillaan suurta suosiota nauttiva, rennon trendikäs brunssi. Brunssi toteutetaan alkuruoasta jälkiruokaan pöytiintarjoiltuna, vieraat saavat vain nauttia hyvistä mauista!"
  },
  {
    "name": "Ravintola Messenius",
    "address": "Messeniuksenkatu 7\n00250 Helsinki",
    "description": "Ravintola Messenius on vuonna 1937 perustettu perinteinen ruokaravintola Helsingin Taka-Töölössä Messeniuksenkadulla, jossa se on toiminut perustamisestaan saakka. Tarjolla on klassikkoannoksia tämän päivän tyyliin."
  },
  {
    "name": "Ravintola Mestaritalli",
    "address": "Merikannontie 6\n00260 Helsinki",
    "description": "Perinteikäs ravintola Mestaritalli sijaitsee aivan meren rannalla, hyvien kulkuyhteyksien varrella Töölössä, Toivo Kuulan puistossa. Kesäkaudella Mestaritallissa nautitaan maistuvaa lounasta ja sunnuntaisin runsaan brunssipöydän antimista elävän musiikin tahtiin. Ravintola on oiva valinta myös illalliselle ja illanistujaisiin. Mestaritallissa voi järjestää myös yksityistilaisuuksia ja se onkin erittäin suosittu hääpaikka.\r\n\r\nAivan Mestaritallin kyljessä sijaitsee Meritalli, sympaattinen kesäterassi, jossa nautitaan musiikista, juomista ja upeista merellisistä maisemista. Terassille paistaa aurinko iltaan asti."
  },
  {
    "name": "Ravintola Muru",
    "address": "Fredrikinkatu 41\n00120 Helsinki",
    "description": "Ravintola Muru on pieni tunnelmallinen bistro Helsingin keskustassa. Murun ruoka edustaa perinteistä ranskalaista keittiötä pienellä italialaisella twistillä, jossa keskiössä ovat käsityö ja herkät maut. Raaka-aineet ovat tarkoin poimittuja niin kotimaasta kuin ulkomailtakin. Murun filosofia on yksinkertainen. Valitse paras saatavilla oleva raaka-aine, valmista se suorasukaisesti ja viiniä kunnioittaen. Muuta ei tarvita."
  },
  {
    "name": "Ravintola Musta Härkä",
    "address": "Mäkelänkatu 52\n00510 Helsinki",
    "description": "Ravintola Musta Härkä tarjoaa viihtyisät tilat ja tunnelmallisen ympäristön ruokailua ja hauskaa illanviettoa varten Helsingin Vallilassa. Tilassa toimii intialainen ravintola Rasoi joka tarjoilee lounasta (arkisin) sekä a la carte-ruokalistan antimia myöhäiseen iltaan (ma-la). Mustan Härän ohjelmistossa on viikoittain DJ ja karaoke, sekä mukava kattaus live-artisteja, urheilua unohtamatta."
  },
  {
    "name": "Ravintola NJK",
    "address": "Valkosaari\n00140 Helsinki",
    "description": "Valkosaaren vuonna 1900 rakennettu huvilatyyppinen ravintola NJK (Nyländska jaktklubben) on kesäkauden parhaita juhlapaikkoja, suosittu rapuravintola ja tunnelmallinen ympäristö maukkaalle aterialle. Avaraa, korkeaa keskisalia ympäröi valoisa veranta, jonka suurista lasi-ikkunoista avautuu näköala sekä Kauppatorille että Katajanokan suuntaan.\r\n\r\nRavintolan ollessa avoinna ravintolan terassilla voi nauttia lasillisen kylmää juomaa ilman erillistä venemaksua, myös illallisen nauttiminen on ulkona mahdollista.\r\n\r\nYhteysalus lähtee Valkosaaren laiturista (Ehrenströmintie 13) heti Olympiaterminaalin jälkeen. Lipun hinta veloitetaan ravintolalaskun yhteydessä-"
  },
  {
    "name": "Ravintola Nokka",
    "address": "Kanavaranta 7 F\n00160 Helsinki",
    "description": "Ravintola Nokka, keittiöpäällikkö Ari Ruohon luotsaamana, on Suomen ainoa ravintola, joka tuntee valikoitujen V.I.P. -tuottajiensa (Very Important Producer) tuotantomenetelmät sekä -olosuhteet henkilökohtaisesti. Lautaselle saapuvat sesongin puhtaimmat antimet niin Sallan metsistä kuin pientiloilta ympäri Suomen.\r\n\r\nKesällä Nokka avautuu Itämerelle ja vain kiven heiton päässä keskustasta on kaupungin kutsuvin terassi. Puotikahvilassa voi nauttia lounaasta, viineistä tai kahvista ja ostaa menusta tuttuja pientuottajien tuotteita kotiin, evääksi tai lounaaksi.\r\n"
  },
  {
    "name": "Ravintola Nolla",
    "address": "Fredrikinkatu 22\n00120 Helsinki",
    "description": "Nolla on ravintola, jossa laadukas ruoka ja kestävä kehitys kulkevat käsi kädessä.\r\n\r\nIdea Nollasta syntyi halusta kehittää ravintola-alaa ympäristöystävällisemmäksi. Nollassa halutaan näyttää, että maukasta ja kekseliästä ruokaa voi valmistaa kestävän kehityksen ja kiertotalouden arvojen pohjalta, jätettä tuottamatta.\r\n\r\nRavintolan arvojen mukaisesti, ruoan keskiössä ovat lähellä tuotetut luomuraaka-aineet. Ravintola työskentelee tiiviisti paikallisten tuottajien kanssa, jotta se voi tarjota vierailleen sesongin parhaita raaka-aineita ympäri vuoden.\r\n\r\nNollassa lähestytään kestävyyden käsitettä laajasti, minkä vuoksi ravintolan ja toiminnan kaikki pienimmätkin yksityiskohdat on otettu huomioon. Ravintola arvioi jatkuvasti omaa toimintaansa ja pyrkii kehittämään tapojansa yhä kestävämmiksi.\r\n\r\nNollassa tarjoillaan ainoastaan juomia, jotka on tuotettu ympäristöä kunnioittaen, kestävän kehityksen toimintaperiaatteiden mukaisesti. Viinilista keskittyy pientuottajien luonnonmukaisesti valmistamiin ja helposti lähestyttäviin laatuviineihin. Lisäksi Nolla tarjoaa ylpeänä oman pienpanimon Mamu Brewingin oluita - kaikki valmistettu paikan päällä, pienissä erissä. Mielenkiintoinen valikoima myös muita paikallisia oluita on aina saatavilla."
  },
  {
    "name": "Ravintola Oiva",
    "address": "Porthaninkatu 5\n00530 Helsinki",
    "description": "Ravintola Oiva, aitoa stadilaista ravintolakulttuuria Kalliossa lähes 80 vuoden ajan. Arkisin Oivassa nautitaan herkullista lounasta noutopöydästä, iltakeittiö palvelee ti-la ja viikonloppuisin tarjolla on brunssia. Oivassa on lähes joka ilta tarjolla ohjelmaa: on karaokea, Open Stagea, live-klubia ja superbingoa. Baarin tarjonnasta löytyy mm. erinomainen olutvalikoima."
  },
  {
    "name": "Ravintola Oklahoma",
    "address": "Tikkuraitti 15\n01300 Vantaa",
    "description": "Vantaan Tikkurilassa sijaitsevassa ravintola Oklahomassa tarjoillaan maittavia villin lännen ruokia jotka valmistetaan aina parhaista raaka-aineista ja suomalaiseen makuun. Listalta löytyy myös tutummat grilli-, kasvis- ja kanaruoat sekä paljon muuta. Oklahoman seisovan pöydän lounas on runsas ja monipuolinen."
  },
  {
    "name": "Ravintola Old Jerusalem",
    "address": "Lehtisaarentie 1\n00340 Helsinki",
    "description": "Herkullisia tuoreista raaka-aineista valmistettuja Lähi-idän ruokia Lehtisaaressa. Itsetehtyä hummusta, falafelia, viininlehtikääryleitä, shawarmaa ja muita etnisiä herkkuja. Listalla on myös vegeannoksia."
  },
  {
    "name": "Ravintola Olo",
    "address": "Pohjoisesplanadi 5\n00170 Helsinki",
    "description": "Ravintola Olo on moderniin pohjoismaiseen keittiöön erikoistunut ruokaravintola Helsingin keskustassa. Olon keittiö edustaa uutta pohjoismaista keittiösuuntausta, jossa perinteisyyttä edustavat kaikista Pohjolan maista kootut raaka-aineet. Tarjonta on selkeää ja linjakasta, kuten Pohjoismainen muotoilukin ja vuodenajan parhaita raaka-aineita kunnioitetaan saatavuuden mukaan. Maan ja veden omat, luonnolliset ja puhtaat maut hallitsevat niin Olon menukokonaisuuksia. \r\n\r\nRavintolalla on ollut Michelin tähti vuodesta 2011."
  },
  {
    "name": "Ravintola Ora",
    "address": "Huvilakatu 28\n00150 Helsinki",
    "description": "Sasu Laukkosen luotsaama pieni 23-paikkainen ravintola Ora avautui elokuussa 2017 entisen Chef & Sommelierin tiloissa Huvilakadulla. Ravintolan keittiö paneutuu suomalaiseen sesonki- ja lähiruokaan modernilla fine dining otteella. Illallisella on tarjolla useamman ruokalajin ruokasesongeittain vaihtuva menu. \r\n\r\nRavintolalla on yksi Michelin-tähti."
  },
  {
    "name": "Ravintola Palace",
    "address": "Eteläranta 10\n00130 Helsinki",
    "description": "Kaupungin kattojen yllä Etelärannassa sijaitseva Palace on aina ollut suomalaisen gastronomian edelläkävijä. Ravintola valmistui Helsingin olympialaisiin vuonna 1952, ja se oli Suomen ensimmäinen Michelin-tähdellä palkittu ravintola vuonna 1987. Tätä nykyä Palacen keittiötä johtaa keittiöpäällikkö Eero Vottonen, jonka tavoitteena on tarjota vierailleen hienostunut mutta yllätyksellinen pohjoismainen ravintolaelämys.\r\n\r\nRavintolalla on yksi Michelin tähti."
  },
  {
    "name": "Ravintola Palema",
    "address": "Työpajankatu 2, rakennus 5\n00580 Helsinki",
    "description": "Ravintola Palema tarjoilee monipuolista ja herkullista lounasta Teurastamolla arkisin klo 11-14. Lounas tarjoillaan lautasannoksina ja listalla on aina kasvis-, kala- ja lihavaihtoehtoja. Palema on auki Teurastamon tapahtumien yhteydessä ja toimii lounasaikojen ulkopuolella tilausravintolana."
  },
  {
    "name": "Ravintola Perho",
    "address": "Mechelininkatu 7\n00100 Helsinki",
    "description": "Opetusravintola, jossa Perho Liiketalousopiston ravintolaa-alan opiskelijat saavat ensimmäiset asiakaskokemukset sekä salin että keittiön puolella. Ravintolan yhteydessä toimii Perhon pienpanimo joka toimii Perho Liiketalousopiston opetuspanimona.\r\n\r\n\r\n"
  },
  {
    "name": "Ravintola Pihlajasaari",
    "address": "Pihlajasaari\n00150 Helsinki",
    "description": "Suosittu ulkoilusaari Pihlajasaari sijaitsee Helsingin edustalla, vain 10 minuutin merimatkan päässä Kaivopuiston rannasta. Saaren A-oikeuksin varustettu kahvila-ravintola on palvellut saaressa kävijöitä vuodesta 1929 asti Villa Hällebossa, joka rakennettiin alunperin huvilaksi jo vuonna 1883.\r\n\r\nLuonnonkallion päällä sijaitsevan etuterassin näköala avautuu etelään avomerelle, kun taas takaterassilta siintää pohjoiseen, kaupunkiin päin.\r\n\r\nYhteysvene saareen lähtee Merisatamanrannasta, Cafe Carusellin takaa, sekä Ruoholahdesta. Pihlajasaaressa on myös vierasvenepaikkoja omalla veneellä saapuville."
  },
  {
    "name": "Ravintola Pikku Hukka",
    "address": "Kettutie 3\n00800 Helsinki",
    "description": "Ravintola Pikku Hukka on herttoniemeläinen kortteliravintola, jonka filosofiassa hyvä ruoka ja hyvä arki kulkevat käsi kädessä. Ravintola toivottaa tervetulleeksi niin lounaalle kuin nauttimaan kiireettömästi iltapäivästä tai vaikka viettämään mukavaa iltaa perheen tai ystävien kesken."
  },
  {
    "name": "Ravintola PLATS",
    "address": "Hanasaarenranta 5\n02100 Espoo",
    "description": "Hanasaaressa sijaitseva Ravintola PLATS on tuttavallinen kohtaamispaikkaa, johon kaikki ovat tervetulleita.\r\n\r\nPLATS on myös paikka, jossa pohjoismainen taide, design ja gastronomia kohtaavat. Se on tyylikäs näköalapaikka kuvankauniiseen saaristoon ja makumatka pohjoismaiseen keittiöön."
  },
  {
    "name": "Ravintola Plein",
    "address": "Suvannontie 18\n00510 Helsinki",
    "description": "Plein on viihtyisä korttelibistro Puu-Vallilan kupeessa. Pieniä, laadukkaita jaettavia annoksia ja naturalviinejä. Pleinissä voi syödä pitkän kaavan mukaan tai piipahtaa vain lasilliselle.\r\n\r\nRavintolaa vastapäätä sijaitsee saman ravintoloitsijan viinibaari Klein."
  },
  {
    "name": "Ravintola Puro",
    "address": "Malminrinne 6 E, 8. kerros\n00100 Helsinki",
    "description": "Puro on skandinaavishenkinen ravintola, joka tarjoaa lounaita ja tilaustarjoiluja.  Ravintola sijaitsee Alvar Aallon suunnittelemassa Sähkötalossa Kampissa. Sisustuksessa on paljon Aallolle tyypillisiä materiaaleja ja hänen suunnittelemiaan huonekaluja, kuten valaisimia ja tuoleja. Ravintolan terassi 8. kerroksessa tarjoaa hienot näkymät yli kaupungin kattojen. Iltaisin ja viikonloppuisin Puro toimii tilausravintolana."
  },
  {
    "name": "Ravintola Purpur",
    "address": "Rikhardinkatu 4\n00130 Helsinki",
    "description": "Ravintola Purpur on kiehtova elämysmatka Gruusialaiseen makumaailmaan. Näyttelijä ja matkamies Ville Haapasalon ravintolan eloisa tunnelma ja Villen matkoiltaan keräämien reseptien mukaan valmistettu ruoka ovat täydellinen yhdistelmä lämpimään ja iloiseen illanviettoon."
  },
  {
    "name": "Ravintola Pyysaari",
    "address": "Henrik Borgströmin polku 3\n00590 Helsinki",
    "description": "Ravintola Pyysaari on Työväen pursiseuran legendaarinen kerhoravintola. Sen ainutlaatuinen tunnelma syntyy sen perinteikkäästä menusta sekä ympäristöstä, johon ajan hammas ei näytä purreen. Upealla terassilla voi ihailla merimaisemaa ja auringonlaskua, tiistai-iltaisin myös purjehduskilpailua. Sisällä on vuosittain vaihtuva taidenäyttely. \r\n\r\nPyysaaren ravintola sai anniskeluoikeudet jo vuonna 1952 Helsingin olympialaisiin, kun valmistauduttiin huolehtimaan purjehduskilpailujen kansainvälisistä osallistujista ja on ollut siitä alkaen avoinna joka kesä yli 50 vuoden ajan.\r\n\r\nVesitse saavuttaessa Pyysaari löytyy Laajasalon ja Kulosaaren välistä. Vierasvenepaikat ovat heti salmen pohjoispäässä (keula- ja poijukiinnitys). Maitse pääsee Laajasalosta ulkoiluteitä Tullisaaren puistosta."
  },
  {
    "name": "Ravintola Saaga",
    "address": "Bulevardi 36\n00120 Helsinki",
    "description": "Kaksikerroksinen ravintola Saaga tarjoilee aitoja pohjoisen makuja ja Lapin eksotiikkaa keskellä Helsinkiä. Katutason ravintolasalissa on katettuna näyttävä aito lappilainen venebuffet (joulukuussa joulubuffet). Yläkerrassa tilat jakautuvat useampiin tunnelmallisiin pienempiin saleihin sekä Shamaani-kabinettiin. Sisustuksessa näkyy Lapin taiteilijoiden ja käsityöläisten kädenjälki."
  },
  {
    "name": "Ravintola Saari",
    "address": "Sirpalesaari\n00150 Helsinki",
    "description": "Suomalainen ravintola Saari sijaitsee Sirpalesaaressa aivan Helsingin edustalla, vain kivenheiton päässä Helsingin ydinkeskustasta. Saaren ruokalistalla on suomalaisia sekä saaristolaisherkkuja. \r\n\r\nSaareen liikennöi yhteysvene Saaren laiturilta Merisatamanrannasta. Merimatka (n. 200 m) kestää vain muutaman minuutin. Saaresta löytyy myös vierasvenepaikkoja omalla veneellä saapuville ravintola-asiakkaille."
  },
  {
    "name": "Ravintola Saaristo",
    "address": "Klippan\n00140 Helsinki",
    "description": "Klippan-nimisellä saarella, Kaivopuiston edustalla sijaitseva jugend-tyylinen 120 vuotias pitsihuvila on osa suomalaista kulttuuriperintöä ja olennainen osa maamme pääkaupungin maisemaa. Arkkitehti Selim Lindqvistin suunnittelema, vuonna 1899 valmistunut rakennus ympäristöineen on yksi Helsingin perinteikkäimpiä ja näyttävimpiä ravintoloita. Saariston ruokalista tarjoaa kesän parhaita skandinaavisia makuja ja makuelämystä täydentävät häikäisevän kauniit merimaisemat. Syyskesästä Saaristo täyttyy rapujuhlien viettäjistä.  \r\n\r\nHistoriallinen miljöö tarjoaa ainutlaatuiset puitteet aina 2 henkilön romanttisista illallisista jopa 500 henkilön yksityistilaisuuksiin. \r\n\r\nYhteysvene Klippanille liikennöi Olympiaterminaalin eteläpuolelta, Rauhanpatsaan vierestä, Saariston laiturista."
  },
  {
    "name": "Ravintola Saba",
    "address": "Hämeentie 7\n00510 Helsinki",
    "description": "Ravintola Saba on monipuolista intialaista tarjoava ravintola. Valikoimassa on intialaisittain nauta-, kana-, kala- ja kasvisruokia."
  },
  {
    "name": "Ravintola Salutorget",
    "address": "Pohjoisesplanadi 15\n00100 Helsinki",
    "description": "Helsingin vanhassa empirekeskustassa sijaitseva kaunis Salutorget kutsuu konstailemattomaan tunnelmaan. Ravintolan sykkivä sydän on vanhaan kauppiastaloon rakennettu, upea jugendtyylinen pankkisali jonka eloisassa tunnelmassa voi viihtyä koko päivän; herkullinen lounas, perinteinen englantilainen Afternoon Tea, illallinen perheen tai ystävien parissa. Illan hämärtyessä meren ylle on kadulta helppo piipahtaa kutsuvaan baariin lasilliselle."
  },
  {
    "name": "Ravintola Saslik",
    "address": "Neitsytpolku 12\n00140 Helsinki",
    "description": "Suomen legendaarisin venäläinen ravintola on vaalinut venäläistä ruokakulttuuria sekä tsaarinajan tunnelmaa jo vuodesta 1972. Persoonallisesti sisustettu miljöö, kodikas vieraanvaraisuus ja laadukkaista raaka-aineista valmistetut herkut tarjoavat unohtumattomia elämyksiä kaikille aisteille. Ruokalistalta löytyvät niin venäläisen keittiön klassikkoannokset kuin myös Saslikin omat kestosuosikit. Ravintola tunnetaan bliniensä lisäksi myös harvinaisista karhuannoksistaan, joita on tarjolla ympäri vuoden. Myös juomalistalta löytyy venäläisiä erikoisuuksia."
  },
  {
    "name": "Ravintola Savotta",
    "address": "Aleksanterinkatu 22\n00170 Helsinki",
    "description": "Tukkilaistunnelmainen Savotta Senaatintorin laidalla tarjoaa aitoa ja reilua suomalaista ruokaa ja silmänruokana aitoja vanhoja esineitä menneiltä vuosikymmeniltä ja savotta-ajoilta. \r\n\r\nSavotta on myös ajan hengessä mukana tarjoten vegaanisia kasvisannoksia. \r\n\r\nKatutason ravintolasaleista näkymä Tuomiokirkolle ja alakerrassa lisäksi 60 henkilön kämppätupa."
  },
  {
    "name": "Ravintola Savoy",
    "address": "Eteläesplanadi 14\n00130 Helsinki",
    "description": "Ravintola Savoy on kuulunut helsinkiläisen ravintolamaailman ehdottomiin huippuihin 1930-luvulta asti. Marsalkka Mannerheim oli sen tunnetuimpia asiakkaita, ja Marskin suosikit ovat edelleen ruokalistalla, kuten esim. vorschmack. \r\n\r\nSavoy perustettiin vuonna 1937, ja uuden ravintolan suunnittelijoiksi valittiin arkkitehdit Aino ja Alvar Aalto. Savoyn sisustus noudattaa edelleen Aaltojen alkuperäistä suunnitelmaa, joka jakaa tilan tunnelmalliseen ravintolasaliin sekä sitä kolmelta puolelta ympäröiviin terasseihin. Sisustuksessa näkyy Aaltojen mieltymys puhdaslinjaisiin ja toimiviin kalusteisiin sekä laadukkaisiin luonnonmateriaaleihin. Tammikuussa 2020 ravintola kunnostettiin ja remontoitiin yhteistyössä Artekin, Helsingin Kaupunginmuseon ja Alvar Aalto -säätiön kanssa."
  },
  {
    "name": "Ravintola Savu",
    "address": "Tervasaarenkannas 3\n00170 Helsinki",
    "description": "Ravintola Savun miljöönä toimii punamultainen hirsirakennus Kruununhaan edustalla Tervasaaressa johon on tieyhteys. Mökkiteemaisesti sisustettu ravintola tarjoaa  suomalaisia sesongin herkkuja ja kesäisin ruokaa voi sulatella mölkkyä pelaten tai tikkaa heittäen. Ravintolasali 80 henkilölle. Kesäisin suuri katettu ulkoterassi. \r\n"
  },
  {
    "name": "Ravintola Skörd",
    "address": "Fredrikinkatu 37\n00120 Helsinki",
    "description": "Ravintola Skörd on lähiruokaa ja juomaa parhaimmillaan. Keittiössä loihditaan herkullisia makuelämyksiä mahdollisimman läheltä tulevista sesongin raaka-aineista, itse kerätyistä villiyrteistä ja marjoista sekä riistasta, kalasta ja luomukaritsasta. Kaikki ravintolan raaka-aineet ja juomat tulevat Suomesta. Ruokien kanssa tarjoillaan yhteensopivia laadukkaita kotimaisia oluita, siidereitä, marjaviinejä sekä itse tehtyjä marjaliköörejä ja cocktaileja sesongin raaka-aineista."
  },
  {
    "name": "Ravintola Solvik",
    "address": "Solvikinkatu 4\n00990 Helsinki",
    "description": "Ravintola Solvik on Helsingin Aurinkolahdessa sijaitseva ravintola, jossa on mahdollisuus nauttia arkisin lounasta ja maanantaista sunnuntaihin iltaisin herkullisia annoksia. Sunnuntaisin brunssi. \r\n\r\nKesäkaudella ravintola palvelee myös aurinkoisella puistoterassilla, jossa voi viihtyä kylmän juoman ja miellyttävän puistonäkymän kera.\r\n\r\nRavintolan tilat tarjoavat myös mahdollisuuden viettää juhlia ja kokouksia."
  },
  {
    "name": "Ravintola Spis",
    "address": "Kasarmikatu 26\n00130 Helsinki",
    "description": "Ravintola Spis on 18-paikkainen pohjoismainen ruokaravintola. Spis valmistaa ruokaa, jossa käytetään mahdollisimman paljon puhtaita, pohjoismaisia raaka-aineita. Ruokalistalla pääosassa ovat kasvikset, mutta listalta löytyy aina myös  kala- ja liha-annos."
  },
  {
    "name": "Ravintola Stansvik",
    "address": "Stansvikintie 1\n00590 Helsinki",
    "description": "Lounas- ja tilausravintola Stansvikin valoisa yhtenäinen ravintolasali tarjoaa seinien sijaan lumoavan merimaiseman näköalaikkunoista. Suuri merenrantaterassi ja historiallinen kartanoalue luovat viihtyisän ja kiireettömän tunnelman arkeen ja juhlaan."
  },
  {
    "name": "Ravintola Sunn",
    "address": "Aleksanterinkatu 26\n00170 Helsinki",
    "description": "Ravintola Sunn sijaitsee Senaatintorin kulmalla sijaitsevassa historiallisen Sunnin talon toisessa kerroksessa. Näkymät Senaatintorille avautuvat kauniisti kaikista valoisista saleista. Sunn on tyyliltään pohjoismainen ravintola ja tarjoilee arkisin lounasta, viikonloppuisin herkullista brunssia sekä iltaisin à la cartea."
  },
  {
    "name": "Ravintola Suomenlinnan Panimo",
    "address": "Suomenlinna C 1, Rantakasarmi\n00190 Helsinki",
    "description": "Ravintola Suomenlinnan Panimo sijaitsee 15 minuutin merimatkan päässä Helsingin Kauppatorin rannasta, heti Suomenlinnan päälaiturin edessä. Koe ainutlaatuinen Suomenlinnan tunnelma panimoravintolan oluiden ja herkullisen ruoan kera. Ruokalistalta löytyy vaikutteita saaren venäläiseltä ja ruotsalaiselta aikakaudelta tuoreita suomalaisia raaka-aineita painottaen."
  },
  {
    "name": "Ravintola Svengi",
    "address": "Läkkisepäntie 23, Business Park Duetto\n00620 Helsinki",
    "description": "Lounasravintola Business Park Duettossa joka toimii iltaisin ja viikonloppuisin tilausravintolana. Aamiaisella ravintolassa on tarjolla puuro- sekä leipäbaari. Lounasbuffetista löytyy skandinaavisia makuja sekä tuulahduksia maailmalta, monipuolinen kasvislounas sekä runsas salaatti-keittolounas."
  },
  {
    "name": "Ravintola Särkänlinna",
    "address": "Särkänsaari\n00140 Helsinki",
    "description": "Ravintola Särkänlinna sijaitsee linnakerakennuksessa Särkän saarella, josta on näkymät Helsingin suuntaan ja avomerelle. Särkänlinna on yksi Helsingin rakastetuimpia kesäravintoloita. Ruokalista perustuu parhaisiin raaka-aineisiin, saaristolaisuuteen ja kotimaisiin ruokasesonkeihin. Rapupaikkana Ravintola Särkänlinna on aina ollut ehdoton. \r\n\r\nYhteysalus Särkänlinnaan liikennöi Ullanlinnan laiturista, Kaivopuiston rannasta."
  },
  {
    "name": "Ravintola Sävel",
    "address": "Hämeentie 2\n00530 Helsinki",
    "description": "Ravintola Sävel sijaitsee Kalliossa Hakaniementorin laidalla. Sävelen rento ja lämminhenkinen palvelu kutsuu ihmiset yhä uudelleen käymään.\r\n\r\nSuomalaiset raaka-aineet ja helsinkiläinen paikalliskulttuuri toimivat ravintolan innoittajina. Sävelen 50-lukua henkivä sisustus tuo mieleen Olavi Virran kultaisen nuoruuden nykypäivän trendikkäässä Kalliossa.\r\n\r\nRavintolassa tarjoillaan raikkaita salaatteja, meheviä burgereita, pihviä ja kalaa, vegaanit ja kasvissyöjät huomioiden. Lounaalla päivän keittoa, salaatteja ja pääruuat noutopöydästä."
  },
  {
    "name": "Ravintola Söder",
    "address": "Uudenmaankatu 9\n00120 Helsinki",
    "description": "Ravintola Söder tarjoaa mahtavia alkuruokia ja jälkiruokia josta voi koota upean kokonaisuuden oman maun mukaan. Piipahda vaikka lasilliselle viiniä ja pienelle makupalalle tai porukalla nauttimaan koko menusta!"
  },
  {
    "name": "Ravintola Talin kartano",
    "address": "Talin puistotie 12\n00380 Helsinki",
    "description": "Talin kartano sijaitsee Pitäjänmäellä, Helsingin Golfklubin yhteydessä. \r\nKartano toimii klubiravintolana golfkauden ja on lisäksi avoinna ympäri vuoden tarjoten herkullista lounasta. Muina aikoina ravintola toimii tilausravintolana.\r\n\r\nKartanon historia ulottuu 1600-luvun alkuun. Nykyinen päärakennus ja maisemapuisto rakennettiin 1800-luvulla. \r\n\r\nPäärakennuksen lisäksi alueella on kartanon tilanhoitajan asunto, viljamakasiini ja useita piharakennuksia. 1930-luvulla kartanon maisemapuistoon ja pelloille rakennettiin Suomen ensimmäinen golfkenttä.\r\n"
  },
  {
    "name": "Ravintola Tammisto",
    "address": "Sähkötie 8\n01510 Vantaa",
    "description": "Ravintola Tammisto Vantaalla on moderni ravintolakokonaisuus. Päivisin lounasravintolana toimiva Ravintola Tammisto tarjoaa myös upeat puitteet juhliin tai kokouksiin kaikenkokoisille ryhmille."
  },
  {
    "name": "Ravintola Teatteri",
    "address": "Pohjoisesplanadi 2\n00130 Helsinki",
    "description": "Tässä Helsingin sykkivässä sydämessä Esplanadin puiston alkupäässä viihdytään aamukahvista yömyssyyn. Mielenkiintoinen ja monipuolinen ravintolakokonaisuus kätkee sisäänsä Teatterin Grillin, Teatteribaarin, Kellobaarin, Klubin ja Delin."
  },
  {
    "name": "Ravintola Toca",
    "address": "Unioninkatu 18\n00130 Helsinki",
    "description": "Ravintola Toca tekee maittavaa italialaista ruokaa suomalaisella vivahteella, ja tarjoilee mukavia juomia rennolla otteella. Tocassa tarjoillaan kaikkea mielenkiintoista alkuillan aperitiiveistä myöhäisiin erikoisherkkuihin. \r\n\r\nRavintola avattiin toukokuussa 2013."
  },
  {
    "name": "Ravintola Tokyo55",
    "address": "Runeberginkatu 55 B\n00260 Helsinki",
    "description": "Ravintola Tokyo55, joka perustettiin 2008, on yksi ensimmäisiä sushiravintoloita Helsingissä. Ravintolan ruokalista perustuu aitoon japanilaiseen keittiöön, jota on sovellettu eurooppalaiseen makuun, sekä laadukkaaseen sushiin.\r\n\r\nTokyo 55:n yhteydessä on myös sushikoulu Tokyo55 Sushi Academy, jossa järjestetään sekä avoimia sushikursseja että yksityistilaisuuksia."
  },
  {
    "name": "Ravintola Torni",
    "address": "Kalevankatu 5, Solo Sokos Hotel Torni\n00100 Helsinki",
    "description": "Ravintola Tornissa tarjoillaan hotelliaamiaisen lisäksi lounasta, illallista sekä lauantaisin brunssia. Ravintola Torni on kuuluisa taidokkaasta keittiöstään sekä historiallisesta ja taiteellisesta tunnelmastaan. Ravintola Torni on toiminut vuodesta 1931 alkaen sijaiten Hotelli Tornin alakerrassa. Tornin keittiössä käytetään laadukkaita raaka-aineita ja arvostetaan käsityötä, annokset kootaan kauniisti lautaselle ja lopputulos on laadukas, maistuva ja kaunis. \r\n\r\nRavintola Torni on suljettu 21.12.2019 alkaen hotellin peruskorjauksen ajaksi."
  },
  {
    "name": "Ravintola Troikka",
    "address": "Caloniuksenkatu 3\n00100 Helsinki",
    "description": "Troikka on venäläinen ravintola Töölön ytimessä. Troikan tunnelmassa on juuri sitä lämpöä, joka kuuluu venäläiseen vieraanvaraisuuteen. Tarjolla Venäläisen keittiön täyteläinen makumaailma ja sen parhaimmat herkut."
  },
  {
    "name": "Ravintola Tuk Tuk",
    "address": "Vaasankatu 19\n00500 Helsinki",
    "description": "Pieni thaimaalainen ravintola Vaasankadulla jonka annoksissa mausteita ei ole säästelty. Suositun ravintolan annoksia saa myös mukaan mikäli ei mahdu tai halua jäädä ravintolaan ruokailemaan."
  },
  {
    "name": "Ravintola Ukko-Munkki",
    "address": "Laajalahdentie 19\n00330 Helsinki",
    "description": "Ravintola Ukko-Munkissa on toiminut vuodesta 1954 saakka Munkkiniemessä. Yläkerran ravintolasalissa voi nauttia ravintolan ruoista ja alakerran Ugari-pubissa mukavasta meiningistä. Ravintola noudattaa 50-luvulta tuttua perinteikästä henkeä ja tyyliä."
  },
  {
    "name": "Ravintola Uunisaari",
    "address": "Uunisaari\n00140 Helsinki",
    "description": "Uunisaarella sijaitseva Ravintola Uunisaari on viihtyisä ravintola jossa a-oikeudet, kahvila aurinkoisin terassein sekä kaksi saunaa. Uunisaaren ravintolan päärakennus saneerattiin v. 1999 museoviraston valvonnassa. Vanhat punatiiliseinät luovat ravintolaan lämpimän ja juhlallisen tunnelman. \r\n\r\nUunisaaressa on kaksi tilaussaunaa. Uunisaaren saunat ovat aitoja suomalaisia saunoja; niiden kertalämmitteiset Aito-kiukaat lämmitetään maakaasulla. Löylyhuoneiden seinät ja lauteet ovat kotimaista puuta, haapaa ja tervaleppää.\r\n\r\nUunisaaren pääsee kesäisin lautalla Merisataman Kompassitorilta. Marraskuun puolesta välistä huhtikuuhun saareen pääsee kävelysiltaa pitkin."
  },
  {
    "name": "Ravintola Variantti",
    "address": "Valimotie 8\n00380 Helsinki",
    "description": "Ravintola Variantti toimii arkipäivisin kahvila- ja lounasravintolana. Iltaisin ja viikonloppuisin Variantti muuntuu asiakastilaisuuksien tapahtuma- ja juhlapaikaksi."
  },
  {
    "name": "Ravintola Viisi Penniä",
    "address": "Mannerheimintie 55\n00250 Helsinki",
    "description": "Olut- ja ruokaravintola Viisi Penniä on perinteinen helsinkiläinen krouvi joka aukesi Töölön tullin vieressä v. 1956. Yhdessäoloon houkutteleva alakerta, viihtyisä toinen kerros sekä aurinkoinen terassi tarjoavat luontevan miljöön seurusteluun, oluiden nautiskeluun sekä maukkaaseen ruokailuun.  Ravintolassa on 20 oluthanan rivistö sekä monipuoliset viski- ja viinivalikoimat. Pullo-oluita ja siidereitä on tarjolla lähes 160 erilaista.\r\n\r\nViiden Pennin keittiön perusta on perinteisissä raaka-aineissa ja suomalaisuudessa. Lounaalla ovat tarjolla päivittäin vaihtuvat lämpimät ruoat sekä salaattivaihtoehto. Viiden Pennin à la carte -lista elää sesongin mukaan."
  },
  {
    "name": "Ravintola Walhalla",
    "address": "Suomenlinna A 10\n00190 Helsinki",
    "description": "Ravintola Walhalla on Suomenlinnassa, Kustaanmiekan saaren linnakkeessa, sijaitseva tasokas gourmetravintola vuodelta 1952. Ravintolan pääsalina on kaunis kaponieeri Delwig. Ravintolan yhteydessä toimii myös pizzeria Nikolai, näköalaterassi ja baari. \r\n\r\nWalhalla on tavallisesti avoinna vapunpäivästä aina syksyn rapujuhliin asti ja tilauskäytössä ympäri vuoden. \r\n\r\nRavintola Walhalla sijaitsee Kustaanmiekan linnakkeessa Suomenlinnan eteläkärjessä lähellä Kuninkaanporttia. Kesäisin JT-Linen vesibussilla pääsee suoraan Kuninkaanportille. HSL:n lautan laiturista on n. 1,5 km kävelymatka Walhallaan.\r\n"
  },
  {
    "name": "Ravintola Wanha Mylly",
    "address": "Linnanrakentajantie 12\n00810 Helsinki",
    "description": "Idyllinen ravintola Wanha Mylly sijaitsee 1700-luvulla rakennetussa pehtoorin tuvassa Herttoniemen kartanon mailla. Se on toiminut ruoka-ja seurusteluravintolana jo yli neljäkymmentä vuotta. Kesäkaudella herkutellaan myös ravintolan isolla terassilla syreenipensaiden katveessa"
  },
  {
    "name": "Ravintola Weeruska",
    "address": "Porvoonkatu 19\n00510 Helsinki",
    "description": "Weeruska on lämminhenkinen kortteliravintola Helsingin Alppilan sydämessä. Weeruskan fiilis syntyy kahdesta päätekijästä, jotka ovat reilu ruoka ja rento palvelu. Weeruska on avoinna joka päivä lounaasta illalliseen."
  },
  {
    "name": "Ravintola Wellamo",
    "address": "Vyökatu 9\n00160 Helsinki",
    "description": "Ravintola Wellamo on viihtyisä ruokaravintola Katajanokalla joka on tarjonnut hengen ja ruumiin kulttuuria jo vuodesta 1975. Wellamossa hyvä ruoka syntyy rakkaudella parhaista raaka-aineista, gastronomisia elämyksiä luodaan mutkattomassa miljöössä. Monet listalla olevista ruoista ovat klassikkoja jo vuosien takaa. \r\n\r\nRavintolan tiloissa järjestetään myös säännöllisesti vaihtuvia taidenäyttelyitä, taidetapahtumia, musiikki-iltoja sekä muuta kulttuuriohjelmaa."
  },
  {
    "name": "Ravintola Willihanhi",
    "address": "Puustellinpolku 8\n00410 Helsinki",
    "description": "Ravintola Willihanhi on rento kortteliravintola Malminkartanossa jonka ruokalistalta löytyy niin suomalaisia kuin intialaisiakin makuja sekä pizzaa.\r\n\r\nRavintolassa järjestetään myös jännittäviä peli-iltoja, livemusiikkia, teemailtoja ja karaokea."
  },
  {
    "name": "Ravintola WTC Helsinki",
    "address": "Aleksanterinkatu 17\n00100 Helsinki",
    "description": "Ravintola WTC tarjoaa maukkaan ja monipuolisen lounaan jokaisena arkipäivänä hurmaavissa, vanhoissa arkkitehti Pauli Blomstedtin suunnittelemissa pankkitalon tiloissa. \r\n\r\nPankkiholvissa toimiva, ainutlaatuinen ravintola tarjoaa lisäksi kokous- ja juhlapalveluja ja muuntuu tilaisuuden mukaan näyttävistä yritysjuhlista tunnelmallisiin perhe- ja hääjuhliin."
  },
  {
    "name": "Ravintola Zetor",
    "address": "Mannerheimintie 3-5, Kaivopiha\n00100 Helsinki",
    "description": "Zetor tarjoaa reilua ruokaa ja jäljittelemätöntä meininkiä Kaivopihalla, Helsingin ydinkeskustassa. Traktorien kupeessa kelpaa haukata hiukopalaa tai nostella kursailematta kuppia. Zetorin ruokalista ja juomalista henkivät suomalaisuutta: tuttuja klassikoita ja maaseudun inspiroimia erikoisuuksia."
  },
  {
    "name": "Ravintola Zilla",
    "address": "Kielotie 14\n01300 Vantaa",
    "description": "Zilla on Vantaan Tikkurilassa sijaitseva, iloa niin arkeen kuin juhlaan hyvän juoman, ruoan kuin fiiliksenkin avulla tuova ravintola. Zilla on ainutlaatuinen kombo rentoa meininkiä, mojovia cocktaileja ja laadukkaita viinejä sekä suussa sulavia ruokia.\r\n\r\nZillassa uudistetaan ruoka- ja juomalistaamme aktiivisesti ympäri vuoden. Näin pidetään huoli siitä että asiakas saa parhaan mahdollisen ravintolakokemuksen. \r\n\r\nZillailua parhaimmillaan!"
  },
  {
    "name": "Raw'n More",
    "address": "Lauttasaarentie 4\n00200 Helsinki",
    "description": "Raw'n Moren makeat ja suolaiset raakaherkut on valmistettu korkealaatuisista, luomua ja paikallista tuotantoa suosivista aineksista. Ne ovat sekä gluteenittomia että maidottomia. Lisäksi ne ovat vegaanisia."
  },
  {
    "name": "Restaurant Caverna",
    "address": "Yliopistonkatu 5\n00100 Helsinki",
    "description": "Caverna on viihtyisä tuhannen neliön luolaravintola, jossa voi kokea maailmankeittiön makuja aidoista brasilialaisista lihavartaista aina Japanista tuttuun teppanyaki-kokkaukseen. Lounas- ja illallisbuffet."
  },
  {
    "name": "Restaurant Natura",
    "address": "Iso Roobertinkatu 11\n00120 Helsinki",
    "description": "Natura on alan nuorten ja intohimoisten ammattilaisten perustama ravintola, jossa tinkimätön laatu ja rento illanvietto kulkevat käsi kädessä. Henkilökunnan ammattitaito pohjautuu kokemukseen yhden, kahden ja kolmen tähden Michelin-ravintoloissa Suomessa, Ranskassa, Englannissa, Espanjassa ja Italiassa. \r\n\r\nNaturassa ruoka valmistetaan korkeatasoisista lähialueelta, pientuottajilta ja vastuullisesti toimivilta tuottajilta hankituista raaka-aineista asiakkaan läheisyydessä avokeittiössä. Vuodenajasta riippuen osa raaka-aineista tulee myös omalta kasvimaalta Helsingin edustalta. Valittavissa on kolme menukokonaisuutta sekä yksittäisiä annoksia sesongeittain vaihtuvalta listalta."
  },
  {
    "name": "Rioni",
    "address": "Ukkohauentie 9\n02170 Espoo",
    "description": "Rioni, Espoon Haukilahdessa, on perinteisistä georgialaisista resepteistä ammentava ravintola. Rehelliset ja ryhdikkäät annokset toimivat  lämminhenkisessä ja tunnelmallisessa ravintolassa kaiken pohjana. Rioniin on helppo tulla yksin, kaksin tai koko seurueen kanssa."
  },
  {
    "name": "Ristorante Vaelsa",
    "address": "Pohjoisesplanadi 9\n00100 Helsinki",
    "description": "Vaelsan keittiö yhdistää lähiruokaa ja klassisia italialaisia herkkuja modernilla otteella."
  },
  {
    "name": "Roasberg",
    "address": "Mikonkatu 13\n00100 Helsinki",
    "description": "Kahvila-ravintola jossa tarjolla mm. suolaista ja makeaa, keittoa, raakakakkuja ja viiniä."
  },
  {
    "name": "Robert's Coffee Jugend",
    "address": "Pohjoisesplanadi 19\n00100 Helsinki",
    "description": "Lars Sonckin suunnittelemassa upeassa jugendtilassa sijaitseva Robert's Coffee Jugend on kunnostettu kahvilaksi alkuperäistä arkkitehtuuria kunnioittaen.\r\n\r\nKahvinautiskelijan ykköskohde Robert's Coffee Jugendissa leijailee aina kutkuttava tuoksu, sillä melkein kaikki tarjoiltava valmistetaan itse, mm. tuoreet ja suussasulavat gelatot, kiviarinauunissa paistetut juureen leivotut leivät, herkulliset korvapuustit jne. Täällä voi myös nuuhkia viinejä ja piipahtaa töiden jälkeen lasilliselle."
  },
  {
    "name": "Robert's Coffee Paahtimokauppa & Jäätelötehdas",
    "address": "Aleksanterinkatu 21\n00100 Helsinki",
    "description": "Pienestä, viihtyisästä paahtimokaupasta löytyy laaja Robert's Coffeen kahvi- ja teevalikoima. Paahtimokaupassa voi keskustella kahvista baristojen kanssa, kokeilla uusia teemakuja ja katsoa kun gelatomestari valmistaa tuoretta artesaanijäätelöä sesongin raaka-aineista. Kahvista ja gelatosta voi nauttia paikan päällä tai ostaa kahvia, teetä ja gelatoa kotiin vietäväksi."
  },
  {
    "name": "Roihuvuoren Rio",
    "address": "Roihuvuorentie 9\n00820 Helsinki",
    "description": "Roihuvuoren Rio on kulttuurikahvila Roihuvuoren sydämessä. Erikoiskahvien, herkkujen ja leivonnaisten kuten raakakakkujen lisäksi päivän keittoa sekä tapahtumia ja pienimuotoisia konsertteja. Lauantaisin ja sunnuntaisin all-day breakfast. Anniskeluoikeudet."
  },
  {
    "name": "Rondo Beer House",
    "address": "Latokartanonkaari 23\n00790 Helsinki",
    "description": "Rondo Beer House on uusi raikas olut ja viskibaari Viikin Latokartanossa. Paikan päältä löytyy mm. Biljardipöytä, kattava valikoima lautapelejä sekä vaihtelevat tapahtumat.\r\n\r\n"
  },
  {
    "name": "Rosa Izakaya",
    "address": "Runeberginkatu 55\n00260 Helsinki",
    "description": "Rosa Izakayassa voi maistaa uniikkeja cocktaileja, rentoutua viinilasin ääreessä tai nauttia kylmästä oluesta. \r\n\r\nJuomavalikoiman lisäksi Izakaya on paljon muutakin. Tarkkaan valittu ruokalista mukailee aasialaisia makuja, vaikkakin vaikutteita on haettu ympäri maailmaa. Annokset on tarkoitettu jaettavaksi, mutta toimivat myös henkilökohtaisina."
  },
  {
    "name": "Royal Nepal",
    "address": "Sturenkatu 32-34\n00550 Helsinki",
    "description": "Royal Nepal on nepalilainen ravintola Vallilassa."
  },
  {
    "name": "Rönttösrouva",
    "address": "Päivöläntie 24\n00730 Helsinki",
    "description": "Rönttösrouvan piirakat, kukot, pullat, leivät, kakut ja muut ovat kainuulaisten perinteiden pohjalta luotuja, käsintehtyjä, kotoisen näköisiä ja makuisia. Kahvila-konditoriassa voi maistella taitavien kondiittorien käsityönä valmistamia herkkuja, tai tilauksesta noutaa kuuluisia kakkuja, pikkuleipiä ja kaikkia muita tuotteita mukaan."
  },
  {
    "name": "Saigon House Cafe",
    "address": "Eerikinkatu 9\n00100 Helsinki",
    "description": "Saigon House Cafe on pieni kahvila jossa tarjolla kahvin lisäksi tarjolla aitoa Vietnamilaista aamiaista sekä lounasannoksia."
  },
  {
    "name": "Sakata Cuisine",
    "address": "Elielinaukio 2 G, Postitalo 2krs.\n00100 Helsinki",
    "description": "Sakata Cuisine on japanilainen ravintola Postitalossa, Rautatieaseman vieressä. Ravintola tarjoilee mm. gyoza dumplingeja, ramenkeittoa, sobanuudeleita, sushia jne."
  },
  {
    "name": "Salajar",
    "address": "Annankatu 4 LH4\n00120 Helsinki",
    "description": "Salajar on salaattibaari joka vähähiilihydraattista ja keto-ruokaa kuten salaatteja ja terveellisiä mehuja uudelleenkäytettävissä purkeissa."
  },
  {
    "name": "Salpimienta",
    "address": "Fleminginkatu 7\n00530 Helsinki",
    "description": "Salpimienta on Kalliossa sijaitseva baari ja ravintola, jonka vahvuuksia ovat monipuolinen olutvalikoima, pizzat, kebab ja salaatit."
  },
  {
    "name": "Salve",
    "address": "Hietalahdenranta 5 c\n00180 Helsinki",
    "description": "Ravintola Salve on kiinteä osa Kampin ja erityisesti Hietalahden historiaa. Ravintolan kunniakas taival alkoi pienestä kioskista, jonka luukusta myytiin ruokaa ja tupakkaa lähinnä merimiehille jo vuonna 1897.\r\n\r\nPitkästä ja värikkäästä historiastaan huolimatta Salve elää vahvasti ajan hermolla. Kuuluisat ja ehkäpä maan parhaat silakat sekä merimiesten kulta-ajoilta säilynyt Salven pannu ovat edelleen listalla - mitä nyt joku nykyään heittelee joukkoon silmänlumeeksi vihanneksiakin."
  },
  {
    "name": "SameSame",
    "address": "Tehtaankatu 25\n00150 Helsinki",
    "description": "SameSame - But Different Punavuoren sydämessä on ravintola autenttisella aasialaisella Asian mix-keittiöllä ja leppoisalla SameSame - but different ambience -fiiliksellä.\r\n\r\nSame Samessa voi nauttia herkullista lounasta, ja viettää pitkää, hauskaa iltaa sopivien juomien ja aasialaisten makujen kera. Helposti jaettavissa olevia annoksia voi halutessaan nauttia myös baarin loungessa. \r\n\r\nAutenttiset maut voi huuhdella alas SameSamen nimikko-cocktaileilla, tai vaikkapa superterveellisellä, itse uutetulla Kombuchalla. Myös laaja valikoima aasialaisia oluita, kuplivaa Sakea unohtamatta."
  },
  {
    "name": "SAMRAT Indian Cuisine",
    "address": "Eteläesplanadi 22 C\n00130 Helsinki",
    "description": "Ravintola Samrat tarjoaa monipuolisia herkkuja eri puolilta Intiaa yli kahden kymmenen vuoden kokemuksella. Valikoimaan kuuluu mm. tandoori-ruoat, tikat sekä masalat."
  },
  {
    "name": "Sandro Kortteli",
    "address": "Urho Kekkosen katu 1, Kampin keskus 5.krs\n00100 Helsinki",
    "description": "Suosittu ja tunnelmallinen Sandro tarjoaa pohjoisafrikkalaisia, välimerellisiä ja Lähi-idän makuja päivän joka hetkeen lounaasta ilta myöhään. Viikonloppuisin tarjolla jo klassikoksi muodostunut Marrakech Madness Brunch."
  },
  {
    "name": "Sandwich Club",
    "address": "Sofiankatu 3\n00170 Helsinki",
    "description": "Sandwich Club on delityylinen sandwich ja bagel ravintola Torikortteleissa, Senaatintorin laidalla.\r\n\r\nKesäisin Sandwich Club sjaitsee myös Hietalahdentorin lippakioskilla. \r\n\r\nYritys on saanut alkunsa food truckista vuonna 2017 ja sitä näkee edelleen tapahtumissa ympäri Helsinkiä."
  },
  {
    "name": "Santa Fe",
    "address": "Aleksanterinkatu 15, sisäpiha\n00100 Helsinki",
    "description": "Santa Fé on eksoottinen tuulahdus Meksikosta keskellä Helsinkiä. Mausteisen texmex-ruoan, nachojen, tortillojen ja burritojen lisäksi ruokalistalla on myös cajun-keittiön herkkuja ja barbeque-annoksia. Kesällä katettu terassi tarjoaa kolmen ravintolan ruokia."
  },
  {
    "name": "Saray Baklava",
    "address": "Tallinnanaukio 3, Itis\n00930 Helsinki",
    "description": "Saray Baklava tuo makuelämyksiä Turkista. Hakunilan tehtaalla valmistetaan monia erilaisia turkkilaisia leivonnaisia, mm. baklavaa, joita myydään tässä leipomo-kahvilassa."
  },
  {
    "name": "Satama Bar & Bistro",
    "address": "Työpajankatu 13 A\n00580 Helsinki",
    "description": "Kalasatamassa sijaitsevassa lounasravintolassa on arkisin klo 10.30-14.30 tarjolla runsas, pääosin vegaaninen, värikäs buffetlounas. Lounaan ulkopuolella on tarjolla bistromenu jossa mm. erilaisia salaatteja, tahnoja jne."
  },
  {
    "name": "Satkar",
    "address": "Fredrikinkatu 46\n00100 Helsinki",
    "description": "Nepalilainen ravintola Satkar avattiin vuonna 1998 ja on avaamisensa jälkeen saavuttanut laajan asiakaspiirin sekä tasokkaan ruoan että ystävällisen palvelun ansiosta. Satkar on Helsingin suurin nepalilainen ravintola."
  },
  {
    "name": "Sea Horse",
    "address": "Kapteeninkatu 11\n00140 Helsinki",
    "description": "Suomalaista ravintolakulttuuria henkivä ravintola Sea Horse, tunnettu myös nimellä Sikala, on toiminut jo vuodesta 1934.\r\n\r\nSuomalaisia herkkuja paistetuista silakoista vorschmackiin ja sillilautasesta wieninleikkeeseen on valmistettu yli 80 vuoden ajan.\r\n\r\nKapteeninkadun merihevonen on vuosikymmenten ajan toiminut maamerkkinä ympäristön asukkaille, merimiehille ja eri alojen kulttuuripersoonallisuuksille. Sea Horsessa tehdään historiaa joka päivä."
  },
  {
    "name": "Sen Chay",
    "address": "Siltasaarenkatu 3-5\n00530 Helsinki",
    "description": "Vegaanista aasialaistyyppistä ruokaa tarjoava ravintola Hakaniemessä"
  },
  {
    "name": "Seurasaaren Kruunu",
    "address": "Seurasaari\n00250 Helsinki",
    "description": "Seurasaaressa sijaitseva ravintola Seurasaaren Kruunu tarjoaa monipuolisia kahvilatuotteita, lohikeittolounasta, laadukkaan á la carte listan kesäkaudella sekä kylmiä ja kuumia juomia. Terassilla voi nauttia upeasta merinäköalasta Seurasaarenselälle. \r\n\r\nRavintolan vanhan puolen juhlasalissa ja kabineteissa voi myös järjestää monenlaisia juhlia ja tapahtumia."
  },
  {
    "name": "Shelter",
    "address": "Kanavaranta 7\n00170 Helsinki",
    "description": "Shelter tuo yhteen hyvän ruoan ja juoman ystävät Katajanokan rannassa sijaitsevan makasiinirakennuksen suojissa. Tarjolla on a la carten lisäksi myös Chef's Menu, 3, 4 tai 5 ruokalajin yllätysmenut."
  },
  {
    "name": "Signora Delizia",
    "address": "Satamakatu 5\n00160 Helsinki",
    "description": "Signora Delizia on italialaisten laatuelintarvikkeiden maahantuontiyritys, herkkupuoti ja kahvila Katajanokalla-\r\n\r\nSignora Delizian filosofiaan kuuluu tarjota asiakkailleen laadukkaita tuotteita järkevään hintaan paljolti suoraan tarkoin valikoiduilta tuottajilta."
  },
  {
    "name": "Sikke's",
    "address": "Tehtaankatu 34 D\n00150 Helsinki",
    "description": "Sikke's on kodikas korttelikuppila, kuin ystävän olohuone. Sen ystävän, joka valmistaa aina hyvää ruokaa. Saatat saada lihapullia napolilaisittain, rapeaksi paistettua, vastapyydystettyä kokonaista kalaa tai vaikka jänispataa ranskalaisittain tai Italian tyyliin. Ravintolan baariin voi myös pistäytyä viinilasilliselle. Viinin kanssa tarjolla on kaikenlaista pientä hyvää, baarissa voi myös nauttia täyden aterian."
  },
  {
    "name": "Silvoplee",
    "address": "Toinen linja 3\n00530 Helsinki",
    "description": "Silvoplee on Satu Silvon vuonna 1999 perustama monipuolinen raaka-ruokaan erikoistunut kasvisravintola Hakaniemessä. Seisovasta pöydästä voi valinnan mukaan koostaa aterian joko elävän ravinnon raikkaista antimista tai maukkaista lämpimistä kasvisruoista. Tarjolla päivän lämmintä ruokaa, salaatteja, bowleja, gluteenitonta leipää, vege-tapaksia, raakaleivoksia ja muita herkkuja, kahvilatuotteita, supermehuja ja smootheja ja paljon muuta!"
  },
  {
    "name": "Singapore Hot Wok",
    "address": "Urho Kekkosen katu 1, E-taso, Kampin kauppakeskus\n00100 Helsinki",
    "description": "Kampin kauppakeskuksen Quick and Tasty-alueella E-tasolla sijaitseva Singapore Hot Wok tarjoaa nopeaan ruokailuun soveltuvaa kiinalaista ja malesialaista ruokaa."
  },
  {
    "name": "Sinisen Huvilan Kahvila",
    "address": "Linnunlauluntie 11 H\n00530 Helsinki",
    "description": "Kesäinen ulkoilmakahvila Töölönlahden rannalla Linnunlaulun huvila-alueella, vuonna 1896 rakennetun Sinisen Huvilan pihapiirissä. \r\n\r\nNauti kahvilan oman leipurin leivonnaisista ja tuoreesta kahvista, Chjokon jäätelöistä ja suomalaisten pientoimittajien tuotteista, myös vegaanisia ja gluteenittomia tuotteita.\r\n\r\nKahvila on lemmikkiystävällinen."
  },
  {
    "name": "Sipuli",
    "address": "Kanavaranta 7\n00160 Helsinki",
    "description": "Vanhaan punatiiliseen satamamakasiiniin rakennettu Sipuli on poikkeuksellisen monipuolinen ravintolakokonaisuus joka toimii pääsääntöisesti tilausravintolana. Ravintola avaa myös ovensa esim. joulun aikaan tarjoten joululounasta noutopöydästä."
  },
  {
    "name": "Sis. Deli + Café",
    "address": "Korkeavuorenkatu 6\n00150 Helsinki",
    "description": "Sis. Deli tarjoaa laadukkaita, lähellä tuotettuja, terveellisiä sekä ennen kaikkea herkullisia aterioita ja delituotteita mukaan vietäväksi tai paikan päällä nautittavaksi. Raaka-aineet hankitaan läheltä, tutuilta tuottajilta, aina kun mahdollista luomua suosien. Tuotteet eivät sisällä säilöntä- tai lisäaineita. Tarjolla myös koko päivän aamiaista. Sis. Deli + Cafe löytyy myös Triplasta."
  },
  {
    "name": "Skidilä",
    "address": "Annankatu 30\n00100 Helsinki",
    "description": "Oma kahvila skideille! Annantalossa sijaitseva Skidilä on kotoisa ja kiireetön keidas keskellä kaupunkia. Jos mietit mihin voisi mennä lapsen kanssa syömään, hengailemaan tai tapaamaan tuttuja, vastaus on Skidilä."
  },
  {
    "name": "Skiffer Erottaja",
    "address": "Erottajankatu 11\n00130 Helsinki",
    "description": "Skiffer on rustiikki, moderni kohtauspaikka Helsingin sydämessä, Diana-puiston reunalla Erottajankadulla. Ravintolan sydän on kiviarinauuni, jossa paistetut liuskat lyövät lautaselta perinteiset pizzat. Rapeapohjaisten liuskojen lisäksi Erottajalla tarjotaan myös herkullisia salaatteja. Skifferin viinilista on tehty sydämellä ja harkitusti."
  },
  {
    "name": "Skiffer Kallio",
    "address": "Fleminginkatu 8\n00530 Helsinki",
    "description": "Skiffer Kallio on rustiikki, moderni kohtauspaikka Kallion sydämessä. Ravintolan sydän on kiviarinauuni, jossa paistetut liuskat lyövät lautaselta perinteiset pizzat. Rapeapohjaisten liuskojen lisäksi tarjolla on myös herkullisia salaatteja."
  },
  {
    "name": "Skiffer Liuskaluoto",
    "address": "Liuskaluoto\n00140 Helsinki",
    "description": "Helsingissä Kaivopuiston edustalla sijaitsevalla Liuskaluodolla pääset nauttimaan merellisestä ilmastosta Skifferin tunnelmallisella terassilla. Liuskoja eli gourmetpizzoja on tarjolla heti kevään tultua sään salliessa aina elokuun loppuun asti päivittäin, ja syyskuussa säävarauksella.\r\n\r\nEi pöytävarauksia.\r\n\r\nYhteysalus Liuskaluodolle joko Merisatamanrannasta HSS:n laiturista, Cafe Carusellin ja Kompassitorin puolivälistä, tai Kompassilaiturista Kompassitorilta."
  },
  {
    "name": "Skiffer Töölö",
    "address": "Runeberginkatu 34\n00260 Helsinki",
    "description": "Töölön Skifferissä pääsee nauttimaan Skifferin perinteisestä tunnelmasta ja kuuluista herkuista, kuten Liuskoista ja salaateista.\r\n\r\nViini- ja olutlista on huolella laadittu ja siitä löytyy hienoja vaihtoehtoja useampaan makuun."
  },
  {
    "name": "Skiffer Viiskulma",
    "address": "Laivurinkatu 10\n00150 Helsinki",
    "description": "Skiffer Viiskulma on Skiffer-ketjun lippulaivaravintola jossa on mukava nauttia lasi viiniä ja pientä huikopalaa tai isompaan nälkään Skifferin herkullisia Liuskoja.  \r\n\r\nLaivurinkadun kulmassa toimii myös merihenkinen baari The Old Skiffer."
  },
  {
    "name": "Skutta Ravintola",
    "address": "Turunlinnantie 1, Kulttuurikeskus Stoa\n00900 Helsinki",
    "description": "Skutta on taide- ja kulttuuribistro, jonka lautasella luonto ottaa vallan. Arkisin lounaalla maistuu sesonki ja villiluonto. Lauantaisin Skutassa tarjoillaan Wienerschnitzeleistä lohtubrunsseihin. Skutassa järjestetään myös kulttuuritapahtumia ja taiteesta vastaa Galleria Rankka."
  },
  {
    "name": "Social Burgerjoint Citycenter",
    "address": "Kaivokatu 8, Citycenter\n00100 Helsinki",
    "description": "Master Chef 2012 voittajan Mika Tuomosen burgeripaikka. Listalta löytyy erilaisia puuhiiligrillissä valmistettuja burgereita, myös kasvis- ja vegaanivaihtoehtoja, lisukkeita unohtamatta. Social Burgerjointin konsepti on simppeli: pihvi on pääroolissa jokaisessa burgerissa.\r\n\r\nSocial Burgerjointit myös REDIssä ja Kulmavuorenkadulla Sörnäisissä."
  },
  {
    "name": "Social Burgerjoint Kulmavuorenkatu",
    "address": "Kulmavuorenkatu 4\n00500 Helsinki",
    "description": "Master Chef 2012 voittajan Mika Tuomosen burgeripaikka Sörnäisten Kurvissa. Listalta löytyy erilaisia puuhiiligrillissä valmistettuja burgereita kasvis- ja vegaanivaihtoehtoja ja lisukkeita unohtamatta. \r\n\r\nSocial Burgerjointin konsepti on simppeli: pihvi on pääroolissa jokaisessa burgerissa.\r\n\r\nSocial Burgerjointit myös REDIssä ja Citycenterissä."
  },
  {
    "name": "Sofia Ravintola ja Cafe & Bar",
    "address": "Unioninkatu 27, Aleksanterinkatu 28\n00170 Helsinki",
    "description": "Sofia Ravintola ja Cafe & Bar sijaitsee Sofia Helsinki co-workingtiloissa Torikortteleissa.\r\n\r\nSofian keittiön herkut ovat kuin Helsinki tänään - ihana yhdistelmä kansainvälisiä makuja ja parhaita kotimaisia raaka-aineita. Aamukahdeksasta alkaen Sofiassa on tarjolla vastaleivotut korvapuustit sekä mustikkapiirakka. Erilaiset täytetyt leivät pitävät uteliaimmankin herkkusuun tiellä. Tarjolla on päivittäin kaksi lounasannosta, joista toinen on kasvisruoka. Lounas on aina tehty huolella ja hyvistä raaka-aineista ja maussa löytyy aina pientä jujua."
  },
  {
    "name": "Soppakeittiö",
    "address": "Eteläranta, Vanha Kauppahalli\n00100 Helsinki",
    "description": "Soppakeittiö on tarjonnut keittoja vuodesta 2003. Alusta asti itse tehdyt keitot, päivittäin tarjolla kolmea erilaista keittoa. Sopan seuraksi tarjotaan myös tuoretta leipää."
  },
  {
    "name": "Southpark Restaurant",
    "address": "Bulevardi 40, Sinebrychoffin puisto\n00120 Helsinki",
    "description": "Southpark on Sinebrychoffin puiston laidalla sijaitseva kaunis ja tunnelmallinen ravintola, joka tarjoilee arkisin maukasta lounasta ja viikonloppuisin runsaan ja herkullisen brunssin. Vieressä toimii Sinebrychoffin taidemuseo."
  },
  {
    "name": "Sportbar & Café Tennis Club Taivallahti",
    "address": "Hiekkarannantie 2\n00100 Helsinki",
    "description": "Kahvila Etu-Töölössä sijitsevassa Taivallahden Tenniskeskuksessa."
  },
  {
    "name": "St. George Bakery",
    "address": "Yrjönkatu 13\n00120 Helsinki",
    "description": "Nautinnollinen kahvihetki, tuoretta leipää mukaan kotiin, herkullinen deliaamiainen kiireisenä aamuna tai viikonlopun rauhallinen teehetki hyvän kirjan parissa. Rento ja leppoisa leipomo löytyy Hotel St. Georgen katutasosta, Yrjönkadun puolelta."
  },
  {
    "name": "St. George Wintergarden",
    "address": "Yrjönkatu 13\n00120 Helsinki",
    "description": "St. Georgen kruununjalokivi, Wintergarden, sijaitsee St. Georgen sisäpihalla lasikaton suojassa\r\n\r\nWintergardenin päähuoneessa on baari, jolla on oma intensiivisten ja moniulotteisten makujen ruokalista. Baari on miellyttävä paikka rentoutua ja viettää aikaa ystävien parissa.\r\n\r\nWintergardenin ravintolan teemana on Light Dining: kevyitä ruokalajeja ja annoksia, joissa yhdistyvät pohjoismaiset, aasialaiset sekä manner-eurooppalaiset maut. Konstailemattomia, taidokkaita, erinomaisia ruokanautintoja."
  },
  {
    "name": "Starter Restaurant",
    "address": "Lapinlahdenkatu 16, rakennus 15 C\n00180 Helsinki",
    "description": "Aamiaisen tapaamispaikka, lounaan kohtaamispaikka ja iltapäivän palaveripaikka. Osa startup keskittymä Maria 01:stä, joka on rakennettu vanhan Marian sairaalan tiloihin."
  },
  {
    "name": "Stefan's Steakhouse",
    "address": "Korkeavuorenkatu 34\n00130 Helsinki",
    "description": "Stefan's Steakhousessa paistuvat pohjoisen parhaimpiin lukeutuvat pihvit. Muun muassa Amerikan Top Chef -ohjelmasta tutun huippukokin, Stefan Richterin, mukaan nimetty pihviravintola tarjoilee annoksia, joiden näyttävyys ja maistuvuus mitataan suuren maailman asteikolla. \r\n\r\nStefan's Steakhouse on tarkoitettu hyvän liharuuan ystäville ja nautiskelijoille, jotka eivät halua tehdä hyvistä asioista liian monimutkaisia. Perinteitä kunnioittava ja tyylikäs sisustus on toteutettu modernilla, raikkaalla otteella. Tämä on paikka, jonne voi tulla suoraan töistä tai päivän päätteeksi nauttimaan illasta pidemmän kaavan mukaan."
  },
  {
    "name": "Story Kamppi",
    "address": "Urho Kekkosenkatu 1, Kampin kauppakeskus 5.krs\n00100 Helsinki",
    "description": "Story on lämmintä tunnelmaa ja ensiluokkaista palvelua tarjoava pohjoismainen kahvila-ravintola Kampin kattojen yllä Korttelissa. \r\n\r\nStory tarjoilee halliruokaa. Tämä on ravintolan oma määritelmä johon kiteytyy Kauppahalleista inspiraation hakeva, tuoreuteen ja sesonkeihin nojautuva ruokatuote joka suomentaa kansainväliset vivahteet. Ruoka on rehellistä ja heijastaa ajan hermolla olevan helsinkiläisen ruokailutottumuksia."
  },
  {
    "name": "Story Tripla",
    "address": "Firdonkatu 2 B, 4.krs\n00520 Helsinki",
    "description": "Bistro Café Storyn yhtälö on lyömätön: kaunis ja eläväinen miljöö, huippuluokan keittiömestarit ja kondiittorit, viinien sekä palvelun asiantuntijat sekä rakkaus käsityöhön ja raaka-aineisiin. Story on helposti lähestyttävä palveluun, ystävällisyyteen ja laatuun satsaava kokonaisuus joka muotoutuu tarpeiden mukaan kahvilasta huippuravintolaksi ja kaikkea siltä väliltä.\r\n\r\nStory tarjoilee ns. halliruokaa. Tämä on ravintolan oma määritelmä johon kiteytyy Kauppahalleista inspiraation hakeva, tuoreuteen ja sesonkeihin nojautuva ruokatuote joka suomentaa kansainväliset vivahteet. Ruoka on rehellistä ja heijastaa ajan hermolla olevan helsinkiläisen ruokailutottumuksia."
  },
  {
    "name": "Story Vanha Kauppahalli",
    "address": "Eteläranta\n00130 Helsinki",
    "description": "Story on kahvila-ravintola Vanhassa Kauppahallin keskiössä, jossa tarjotaan mutkatonta halliruokaa, pientilaviinejä, kahvila- ja konditoriatuotteita sekä aamiaista ja brunssia."
  },
  {
    "name": "Street Canteen",
    "address": "Mannerheimintie 3\n00100 Helsinki",
    "description": "Malesialaista katuruokaa, malesialaisilta keittiömestareilta.\r\n\r\nStreet Canteen ravintolan reseptien isoimpina vaikutteina ovat malesialainen katuruokaa sekä Itä-Aasian keittiön maut."
  },
  {
    "name": "Strindberg",
    "address": "Pohjoisesplanadi 33\n00100 Helsinki",
    "description": "Katutason kahvilassa tarjolla on laaja kahvi- ja teevalikoima sekä suolaisia ja makeita herkkuja. Illalla voi nauttia upeasta viinivalikoimasta ja piipahtaa vaikka aperitiiville töiden jälkeen tai ennen illallista. Suurista ikkunoista voi seurata kaupungin elämää ja ihailla kaunista Helsinkiä.\r\n\r\nToisen kerroksen ravintolan ja sen yhteydessä sijaitsevan baarin kutsuva miljöö on vilkkaan kaupunkimainen ja miellyttävän tunnelmallinen. Korkeatasoinen keittiö yhdistää aina suositun pohjoismaisen \"husmanskostin\" tämän päivän kansainvälisiin makuihin ja tyyleihin. Konstailematonta, ajanhenkistä - simply delicious."
  },
  {
    "name": "Sture 16 Eatery & Cafe",
    "address": "Sturenkatu 16\n00510 Helsinki",
    "description": "Sture 16 sijaitsee Vallilassa tarjoten arkisin lounasta sekä kahvilatuotteita. Lisäksi sitä voi varata yksityistilaisuuksiin tai tilata catering-palveluita."
  },
  {
    "name": "Suburritos",
    "address": "Yrjönkatu 29, kauppakeskus Forum, Kukontori\n00100 Helsinki",
    "description": "Meksikolainen ravintola Suburritos sijaitsee kauppakeskus Forumin Kukontorilla."
  },
  {
    "name": "Sue Ellen Dining room & Bar",
    "address": "Eteläranta 16\n00130 Helsinki",
    "description": "Sue Ellen tarjoilee rentoa yhdessä syömisen tunnelmaa ja runsaita makuja meren äärellä Vanhaa Kauppahallia vastapäätä. Tarjolla on niin herkullisia hiiligrillissä grillattuja grillattuja lihoja kuin tuoreita mereneläviä. Meren äärellä onkin luonteva herkutella sen antimista.\r\n\r\nNäyttävät äyriäisvati, osterit tai kokonainen juottoporsas vievät vieraat viihtyisälle makumatkalle Pohjois-Atlantin rannikkokaupunkeihin. Maukkaat cocktailit, tarkkaan valitut viinit ja ennen kaikkea vieraanvarainen palvelu värittävät tätä elämyksellistä matkaa."
  },
  {
    "name": "Sunny Bay",
    "address": "Alvar Aallon katu 3\n00100 Helsinki",
    "description": "Kiinalainen ravintola Rautatieaseman lähettyvillä, tarjolla laaja valikoima kiinalaisia annoksia. Lounasaikaan tarjolla buffet jossa kiinalaisia lämpimiä ruokia sekä sushia."
  },
  {
    "name": "Sushi wagocoro",
    "address": "Runeberginkatu 63 A 21\n00260 Helsinki",
    "description": "Tuoretta sushia japanilaisomisteisessa pienessä sushiravintolassa Töölössä."
  },
  {
    "name": "Sushibar + Wine City",
    "address": "Kaivokatu 8, Kauppakeskus Citycenter 2.krs\n00100 Helsinki",
    "description": "Sushibar + Wine on käsityösushiin, suomalaiseen muotoiluun ja orgaanisiin viineihin erikoistunut ravintola. Laajalta viinilistalta löytyy paljon viinejä joista suurin osa tulee pieniltä ja orgaanisilta viinitiloilta."
  },
  {
    "name": "Sushibar + Wine Freda",
    "address": "Fredrikinkatu 42\n00100 Helsinki",
    "description": "Sushibar + Wine on käsityösushiin, suomalaiseen muotoiluun ja orgaanisiin viineihin erikoistunut ravintola. Laajalta viinilistalta löytyy paljon viinejä joista suurin osa tulee pieniltä ja orgaanisilta viinitiloilta. Vaihtuvia näyttelyjä. Kesäisin Sushibar + Wine levittäytyy myös Kampintorin terassille."
  },
  {
    "name": "Sushibar + Wine Kallio",
    "address": "Hämeentie 19\n00500 Helsinki",
    "description": "Sushibar + Wine on käsityösushiin, suomalaiseen muotoiluun ja orgaanisiin viineihin erikoistunut ravintola. Laajalta viinilistalta löytyy paljon viinejä, joista suurin osa tulee pieniltä ja orgaanisilta viinitiloilta. Kallion ravintolasta löytyy kahden nuoren taiteilijan, Tuukka Tammisaaren sekä Linda Linkon, upeat teokset."
  },
  {
    "name": "Sushibar + Wine Korjaamo",
    "address": "Töölönkatu 51 A-B\n00250 Helsinki",
    "description": "Sushibar + Wine on käsityösushiin, suomalaiseen muotoiluun ja orgaanisiin viineihin erikoistunut ravintola. Laajalta viinilistalta löytyy paljon viinejä, joista suurin osa tulee pieniltä ja orgaanisilta viinitiloilta. Korjaamon Galleria laajentaa näyttelyitään usein Sushibar + Winen seinille."
  },
  {
    "name": "Sushibar + Wine Uudenmaankatu",
    "address": "Uudenmaankatu 15\n00120 Helsinki",
    "description": "Sushibar + Wine on käsityösushiin, suomalaiseen muotoiluun ja orgaanisiin viineihin erikoistunut ravintola. Laajalta viinilistalta löytyy paljon viinejä joista suurin osa tulee pieniltä ja orgaanisilta viinitiloilta. Linjakasta tilaa värittävät Aalto-yliopiston Taideteollisen korkeakoulun graafisen suunnittelun opiskelijoiden vaihtuvat näyttelyt."
  },
  {
    "name": "Svenkka",
    "address": "Puotilantie 7\n00910 Helsinki",
    "description": "Puotilan Kartanon pihapiirin vanha Pehtoorin Pytinki, Svenkka, on täynnä elämää. Aurinkoinen terassi ja ainutlaatuiset sisätilat kutsuvat viihtymään.  Pub Svenkka virvoittaa janoisia  ja tarjoaa vaihtuvan pubityylisen menun joka päivä. Viikonloppuisin Svenkka viihdyttää kansaa myös erilaisten tapahtumien parissa"
  },
  {
    "name": "Taideterassi Café",
    "address": "Linnunlauluntie 11 A\n00530 Helsinki",
    "description": "Viehättävä terassikahvila, josta upea näköala Töölönlahden yli Oopperatalolle ja Finlandia-talolle. Taideterassi on rauhallisuuden keidas keskellä Helsinkiä ja tarjoaa erilaisia paikallisten leipomoiden kakkuja, leivonnaisia ja piiraita. Kahvilan muita hienouksia ovat maalaukset, veistokset ja antiikkiset huonekalut sisätiloissa sekä viktoriaanisen ajan tyylinen lasten leikkimökki.\r\n"
  },
  {
    "name": "Tandoori Villa Kalasatama",
    "address": "Sörnäistenlaituri 3\n00540 Helsinki",
    "description": "Ravintola Tandoori Villa on intialaista ruokaa tarjoileva ravintola Kalasatamassa, arkisin tarjolla myös lounasbuffet.\r\n\r\nRavintolalla on toinen toimipiste Metsälässä."
  },
  {
    "name": "Tandoori Villa Metsälä",
    "address": "Niittyläntie 2\n00620 Helsinki",
    "description": "Ravintola Tandoori Villa on intialaista ruokaa tarjoileva ravintola Metsälässä, arkisin tarjolla myös lounasbuffet.\r\n\r\nRavintolalla on toinen toimipiste Kalasatamassa."
  },
  {
    "name": "Tanner",
    "address": "Hämeentie 11\n00530 Helsinki",
    "description": "Tanner on kahvila, ravintola ja hifi-musiikkibaari. DJ't soittavat perjantai- ja lauantai-iltaisin. Viikonloppuisin brunssi."
  },
  {
    "name": "Tapahtumakeskus Koskenranta",
    "address": "Katariina Saksilaisen katu 9\n00560 Helsinki",
    "description": "Tapahtumakeskus Koskenranta sijaitsee Vanhankaupunginkosken partaalla. Vuonna 1946 rakennettu kaunis punainen puurakennus on Imatran Voiman entinen vesivirtauslaboratorio, joka tänä päivänä toimii persoonallisena kokous- ja juhlatilana sekä kesäravintolana.\r\n\r\nTapahtumakeskus Koskenranta palvelee yritysasiakkaita suurten tapahtumien ja juhlien miljöönä ympäri vuoden. Wirtaamo- juhlasali ja upea terassi koskimiljöineen tarjoaa uniikin ympäristön suuremmallekin tapahtumalle. \r\n\r\nRavintola Koskenranta on terasseineen avoinna kesäkaudella, kesäkuusta elokuuhun. Upea koskimiljöö tarjoaa viihtyisän ympäristön pysähtyä ruokailemaan tai lasilliselle viiniä rennossa ja välittömässä tunnelmassa. Tällaista maisemaa ei kaupungista löydy toista!\r\n\r\nKoskenrannassa on A-oikeudet ja maksuttomia pysäköintipaikkoja asiakkaille."
  },
  {
    "name": "Tapas BarCelona",
    "address": "Aleksanterinkatu 46\n00100 Helsinki",
    "description": "Tapas BarCelona on tunnelmallinen tapasbaari kaupungin ytimessä Aleksin Wanhan Kauppakujan suojassa. Arkipäivisin tarjolla on lounasta seisovasta pöydästä, viikonloppuisin ja iltaisin nautitaan tapaksia viinin, oluen ja muiden juomien kera. Tapaksien salaisuutena ovat perinteiset ja korkealaatuiset raaka-aineet suomalaisia raaka-aineita unohtamatta."
  },
  {
    "name": "Taqueria \"El Rey\" Annankatu",
    "address": "Annankatu 20\n00100 Helsinki",
    "description": "Autenttinen meksikolainen taqueria joka tarjoilee meksikolaisia tacoja sekä cocktaileja.\r\n\r\nTaqueria \"El Rey\" ravintolat löytyy myös Vuorimiehenkadulta Ullanlinnasta sekä Kolmannelta Linjalta Kalliosta."
  },
  {
    "name": "Taqueria \"El Rey\" Vuorimiehenkatu",
    "address": "Vuorimiehenkatu 18\n00140 Helsinki",
    "description": "Autenttinen meksikolainen taqueria joka tarjoilee meksikolaisia tacoja sekä cocktaileja. Pieni ja tunnelmallinen ravintola.\r\n\r\nTaqueria \"El Rey\" ravintolat löytyy myös Annankadulta Kampista ja Kolmannelta Linjalta Kalliosta."
  },
  {
    "name": "Taquería \"El Rey\" Kallio",
    "address": "Kolmas linja 17\n00530 Helsinki",
    "description": "Autenttinen meksikolainen taqueria joka tarjoilee meksikolaisia tacoja sekä cocktaileja.\r\n\r\nTaqueria \"El Rey\" ravintolat löytyy myös Vuorimiehenkadulta Ullanlinnasta sekä Annankadulta Kampista."
  },
  {
    "name": "Taverna Zorbas",
    "address": "Läntinen Brahenkatu 4\n00510 Helsinki",
    "description": "Taverna Zorbas on korkeatasoinen kreikkalainen ravintola Alppilassa Brahen kenttää vastapäätä. Ravintola tarjoilee maukkaita kreikkalaisia kasvis-, kala- ja liharuokia sekä herkullisia jälkiruokia."
  },
  {
    "name": "Teatteriravintola Nyyrikki",
    "address": "Pohjolankatu 2\n00610 Helsinki",
    "description": "Ravintola Nyyrikki sijaitsee lähellä Helsingin keskustaa, matkalla kohti lentoasemaa, Puukäpylän kainalossa. Valoisa ja tunnelmaltaan kodikas perheyritys on valmiina palvelemaan. Keittiössä valmistuvat mehukkaat pihvit ja hienoimmat suomalaiset kalat rakkaudella ja ammattitaidolla.\r\n\r\nNyyrikin teatteri-illat ovat kokemisen arvoisia. Monipuolinen teatteri- ja musiikkiohjelmisto on viihdyttänyt katsojia jo usean vuoden ajan."
  },
  {
    "name": "Tenho Restobar",
    "address": "Helsinginkatu 15\n00500 Helsinki",
    "description": "Tenho Restobar on hyvään ruokaan ja loistaviin iltoihin intohimoisesti suhtautuva ravintola Helsinginkadulla. Tunnettu maukkaista pizzoistaan ja ilmaisista livekeikoista. Ruokalistalta löytyy myös vegaanisia vaihtoehtoja, salaatteja, hampurilaisia sekä liha- ja kalaruokia. Aina vapaa sisäänpääsy."
  },
  {
    "name": "Teurastamon portti - Roslundin lihamyymälä ja bistro",
    "address": "Työpajankatu 2\n00580 Helsinki",
    "description": "Teurastamon Portti on Roslundin lihamyymälä ja bistro Teurastamon alueella. Myymälä sijaitsee alueen sisäänkäynnin pittoreskissa portinvartijan rakennuksessa. Perinteisen lihakaupan valikoiman lisäksi tarjolla on herkullista kotiruokalounasta sekä hiiligrillissä valmistettuja lihaisia herkkuja, kuten pihvejä ja hampurilaisia. Kesäaikaan myös terassi."
  },
  {
    "name": "The Boom Room",
    "address": "Iso Roobertinkatu 46\n00120 Helsinki",
    "description": "The Boom Roomin värikkäässä tarjonnassa yhdistyvät thaimaalaisen ja japanilaisen keittiön maukkaimmat ainesosat. Pikkuravintolan annoksissa maistuu persoonallisuus, tuoreet raaka-aineet sekä sydämellinen tekemisen into. Lounastarjontaan kuuluvat erityisesti sushi- ja teriyakiannokset sekä sashimisalaatti. Paikan päällä huomion kiinnittävät myös erinomainen pienkahvilan tunnelma ja laajalti ylistetyt raakakakut."
  },
  {
    "name": "The Cock",
    "address": "Fabianinkatu 17\n00130 Helsinki",
    "description": "Kasarmitorin kulman The Cock on lounaasta myöhään iltaan auki oleva eläväinen kortteliravintola ja baari, jonne kaikki ovat tervetulleita. \n\nBistromaisesta katutasosta johtaa nykytaiteella vuorattu kierreportaikko kynttilävalaistuun, punatiiliseen kellariin - poikkeuksellisen tunnelmalliseen tapahtumatilaan. \n\nBrasserie-henkiseltä menulta löytyy moderneja klassikoita Fine de Claire -ostereista tartarpihviin ja linguine vongolesta hampurilaiseen."
  },
  {
    "name": "The Dockyard",
    "address": "Hernesaarenkatu 17\n00150 Helsinki",
    "description": "Välitön kortteliravintola Hernesaaressa."
  },
  {
    "name": "The Glass",
    "address": "Mikonkatu 1, Kämp Galleria, kerros K1\n00100 Helsinki",
    "description": "The Glass on rento bistroravintola ja rommibaari Valokuvataiteen museon K1-näyttelytilan yhteydessä, Kämp Gallerian alimmassa kerroksessa. \r\n\r\nÀ la carte -annosten lisäksi The Glass tarjoilee arkisin myös lounasta. The Glassin kahvilassa voi lisäksi pistäytyä nauttimassa kahvia, kuohuvaa ja herkullisia leipiä.\r\n\r\nRavintola yhteydessä sijaitsevassa Rommibaarissa on yli 50 rommin valikoima sekä cocktail-lista, joka pohjautuu klassisten juomasekoitusten kiehtovaan maailmaan."
  },
  {
    "name": "The Grind Coffee & Wine",
    "address": "Mannerheimintie 3\n00100 Helsinki",
    "description": "Uudistuneella Kaivopihalla sijaitseva nuorekas The Grind Coffee & Wine on kahvila-viinibaari jossa tarjolla on mm. koko-päivän-aamiaista, pastaa ja salaattia. Viikonloppu-iltaisin DJ't soittavat musiikkia."
  },
  {
    "name": "The Old Skiffer",
    "address": "Laivurinkatu 10\n00150 Helsinki",
    "description": "The Old Skiffer on merihenkinen ja rento baari ja ravintola jossa voit nauttia raikkaista juomista ja Skifferin liuskoista."
  },
  {
    "name": "The One Thai Kitchen",
    "address": "Talvikkitie 7 F\n01300 Vantaa",
    "description": "The One Thai Kitchen on autenttisten thaimaalaisten elämysten koti Vantaan Tikkurilassa. Ravintola tarjoaa raikkaan tuulahduksen Thaimaan lämpöä, ennenkokemattomia makuja sekä autenttisen thai-keittiön klassikoita ja erikoisuuksia aina tuoreista raaka-aineista valmistettuna. \n\nListalla on runsaasti vaihtoehtoja niin kaikkiruokaisille kuin kasvissyöjillekin keitoista, salaateista, curryista ja wokeista riisi-, nuudeli- ja Street Food -annoksiin. Merenherkuista pitävä ilahtuu myös esim. mustekalasta, erilaisista simpukoista ja vaikkapa rapeaksi paistetusta pehmeäkuorisesta taskuravusta.\n\nJuomalistalta kannattaa kokeilla cocktaileja, jotka on suunniteltu yhdessä kokeneiden baarimestareiden kanssa."
  },
  {
    "name": "The Saigonese",
    "address": "Lapinlahdenkatu 21\n00180 Helsinki",
    "description": "The Saigonese on pieni tunnelmallinen ravintola keskustassa, lähellä Kampin kauppakeskusta. Ravintola tarjoilee vietnamilaista kotiruokaa jonka alkuperä on Saigonissa, etelä-Vietnamissa. Ruokalistalla on niin liha- kuin vegaanivaihtoehtoja. Lisäksi vietnamilaista kahvia, jälkiruokia sekä mocktaileja."
  },
  {
    "name": "The Train Factory Food & Libations",
    "address": "Traverssikuja 3\n00510 Helsinki",
    "description": "VR:n entisiin tiloihin avattu The Train Factory Food and Libations -ravintolassa on 1200 neliömetriä, berliinimäinen tunnelma, graffititaiteilijoiden täydentämät seinät ja kattaus monipuolista viihdettä. \r\n\r\nIsolta, 1000-paikkaiselta terassilta löytyvät Tahiti-alue, sun deck -alue sekä kivinen rock-osio. Ruokaa tarjoilee street food rekat."
  },
  {
    "name": "The TRAY",
    "address": "Kluuvikatu 4\n00100 Helsinki",
    "description": "Hotelli Glo Kluuvin ravintola The Trayn ruokalistan perustan muodostavat runsaat ja luovasti kootut vatiannokset. Cross kitchenin ja street foodin parhaat puolet innovatiivisella tavalla yhdistävä ravintola kuljettaa kävijänsä vastustamattomalle makumatkalle maailman toreille ja kujille.\r\n\r\nThe TRAY tarjoaa rennon kohtaamispaikan keskellä Helsinkiä, paikan johon on helppo tulla, vaikka työpäivän päätteeksi nauttimaan hyvästä fiiliksestä yksin tai ystävien kanssa.\r\n"
  },
  {
    "name": "Tikke Kebab Grill",
    "address": "Kontulankaari 1\n00940 Helsinki",
    "description": "Tikke Kebab Grill on ravintola Kontulan ostoskeskuksessa joka tarjoilee aitoa shish kebabia niin jauhetusta- kuin kokolihastakin, ja myös sisäelimistä valmistettuna."
  },
  {
    "name": "Tislaamo - Distillery Bar",
    "address": "Työpajankatu 2a R3, Teurastamo\n00580 Helsinki",
    "description": "The Helsinki Distilling Companyn cocktail baari ja ravintola Tislaamo - Distillery Bar tarjoilee talon omista tuotteista valmistettuja drinkkejä, sekä Yhdysvaltojen syvän etelän inspiroimaa ruokaa. \r\n\r\nKaksikerroksinen rakennus, Teurastamo-alueen entinen lämmönjakelukeskus, on myös The Helsinki Distilling Companyn vierailukeskus, ohjattuine maisteluineen ja opastettuine kierroksineen.\r\n"
  },
  {
    "name": "Tokumaru Tripla",
    "address": "Firdonkatu 2B, Mall of Tripla 1.krs\n00520 Helsinki",
    "description": "Tokumaru haluaa tuoda japanilaisen keittiön rikkaat maut mahdollisimman autenttisessa muodossa ruuan ystäville. Tokumaru tuo itse maahan suurimman osan hyvän ruuan valmistamiseen tarvittavista aineksista suoraan Japanista.\r\n\r\nEnsimmäinen Tokumaru-ravintola avattiin Tallinnassa vuonna 2014. Tällä hetkellä ravintoloita on Virossa jo viisi. Tokumaru Tripla on ensimmäinen Tokumaru Suomessa.\r\n"
  },
  {
    "name": "Tokyo Street Helsinki",
    "address": "Lönnrotinkatu 34, Hietalahden kauppahalli\n00180 Helsinki",
    "description": "Ravintola Tokyo Street on aito japanilainen ravintola Hietalahden hallissa. \r\n\r\nJapanilainen ruoka on sopusointuista ja terveellistä; se yhdistelee värejä, makuja ja rakenteita täydellisen harmonisesti.\r\n\r\nRavintola Tokyo Streetin kokki on japanilaista alkuperää ja noudattaa ruoan ulkonäössä ja maussa tarkasti alkuperäistä japanilaista konseptia. Ravintolassa käytetään vain tuoreita ainesosia ja kaikki tehdään alusta lähtien itse. Orgaaninen kurpitsaöljy, kotitekoinen etikka ja luonnonmukainen käsin poimittu merisuola tekee ruoasta ainutlaatuista. \r\n\r\nLisäksi laaja valikoima viinejä, oluita, orgaanista sakea sekä todella nopeaa palvelua."
  },
  {
    "name": "ToQyo Food Street -ravintola",
    "address": "Aleksanterinkatu 52, Stockmann, 1 krs.\n00100 Helsinki",
    "description": "Tokiota sanotaan maailman ruokapääkaupungiksi ja katuruokakulttuurilla on siellä pitkät perinteet. Klassikkoannokset, kuten nuudelipainotteinen Ramen, eväslaatikko Bento, lihapata Gyudon sekä höyrysämpylä Bao muodostavat ToQyo Food Streetin menun. Uniikit annokset ja maut ovat helposti lähestyttäviä ja nopean ja ravitsevan ruoan voi nauttia joko paikan päällä tai ottaa sen mukaan.\r\n\r\nToQyon pääkokkina toimii Hanko Sushin sushiguruna tunnettu Jesper Björkell."
  },
  {
    "name": "Toscanini",
    "address": "Bulevardi 2-4\n00120 Helsinki",
    "description": "Toscanini tarjoaa aitoa italialaista ruokaa rennossa ympäristössä. Keittiössä käytetään erittäin korkealaatuisia ja aitoja raaka-aineita, joista valmistetaan herkullisia, mutkattomia ja runsaita annoksia vieraiden nautittavaksi."
  },
  {
    "name": "Trattoria il Faro",
    "address": "Suolakivenkatu 24\n00810 Helsinki",
    "description": "Ravintola il Faron ruokalistalta löytyy laajasti Välimeren ruokia, lännestä aina itäisimpään kolkkaan asti. \r\n\r\nHerttoniemenrannan vanhin ruokaravintola sijaitsee viihtyisällä paikalla, aivan kanavan rannassa. Ravintolan terassi suuntautuu sekä itään, että länteen, joten aurinko paistaa aina!"
  },
  {
    "name": "Trattoria Rivoletto",
    "address": "Albertinkatu 38\n00180 Helsinki",
    "description": "Rivoletto on tarjonnut kaupungin parhaimpia pizzoja sekä muita italialaisherkkuja jo vuodesta 1971. Ruoka valmistetaan suurella sydämellä itse ja tuoreista raaka-aineista kuten aitoon italialaiseen keittiöön kuuluu. Rustiikkisessa ja tunnelmallisessa ravintolassa nauttii upean makuelämyksen hyvien viinien ja kahvien kera. \r\n"
  },
  {
    "name": "Trattoria Sogno",
    "address": "Runeberginkatu 60\n00260 Helsinki",
    "description": "Sognossa niin ystävät, perheet sekä työkaverit kohtaavat mutkattoman ja maukkaan italialaisen ruuan parissa. Sogno on uudenlainen, rento ja raikas tuulahdus Töölössä. \r\n\r\nLauantaisin brunssilla antipastopöytä ja pöytiin tarjoillut pää- ja jälkiruoat."
  },
  {
    "name": "Treffi Pub & Bistro",
    "address": "Hiihtomäentie 14\n00810 Helsinki",
    "description": "Treffi Pub & Bistro on hiiligrillillä varustettu kortteliravintola Herttoniemen metroasemaa vastapäätä. Lähiöklassikko Treffi Pub & Bistro on monien tuntema kohtaamispaikka, jossa sunnuntaiaamut on pyhitetty brunsseille jonka teemat vaihtuvat viikoittain."
  },
  {
    "name": "Tukkutorin kala",
    "address": "Työpajankatu 2b\n00580 Helsinki",
    "description": "Tukkutorin Kala on laajan ja tuoreen valikoiman asiantunteva kala- ja äyriäiskauppa sekä lounasravintola. Palvelutiskit ovat täynnä herkullisia tuoreita kaloja ja muita mereneläviä. \r\n\r\nTukkutorin kalaan voi poiketa arkisin myös lounaalle."
  },
  {
    "name": "Turkkilainen ravintola Efesos",
    "address": "Tavitie 1\n01450 Vantaa",
    "description": "Turkkilainen ravintola Efesos tarjoilee aitoja turkkilaisia makuja ravintolassa joka ennen sijaitsi Myllypuron Teboil-kylmäaseman yhteydessä, mutta joka on muuttanut Vantaalle ja sijaitsee nyt Sokevan talossa Korsossa."
  },
  {
    "name": "Twisted Street Kitchen",
    "address": "Fredrikinkatu 58\n00100 Helsinki",
    "description": "Twisted Street Kitchen on Aasia-vaikutteinen lounasravintola Helsingin keskustassa joka on tunnettu raikkaasta aasialaisen katukeittiön mausta ja rennosta meiningistä. Lounasaikaan listalta löytyy jo klassikoiksi muodostuneet lämpimän mausteiset kookos-curryt, liharuuat ja salaatit. Kaikissa annoksissa maistuu ravintolan oma twisti."
  },
  {
    "name": "Töölön Sävel",
    "address": "Runeberginkatu 40\n00260 Helsinki",
    "description": "Bistro Töölön Sävel sijaitsee kivenheiton päässä Töölöntorista. Sali on avara, ilmava ja valoisa; sisustuksen 50-lukulaisuus samoin kuin menneiden vuosikymmenten iskelmämusiikki luovat rennon tunnelman. Listalla on niin perinteisiä annoksia kuin esim. flammkucheneita ja burgereita. Sunnuntaisin tarjolla on brunssi."
  },
  {
    "name": "Töölönranta",
    "address": "Helsinginkatu 56\n00260 Helsinki",
    "description": "Töölönranta on tyylikäs kohtauspaikka Töölönlahden rannassa aivan Suomen Kansallisoopperan vieressä. Valoisa ravintolasali ja viihtyisä takkabaari tarjoavat vuodenaikojen mukaan muuttuvat avarat näkymät Hesperian puistoon ja Töölönlahdelle. Töölönrannan keittiö on modernin skandinaavinen ottaen vaikutteita Euroopasta.\r\n"
  },
  {
    "name": "Umeshu",
    "address": "Pohjoinen Hesperiankatu 15\n00260 Helsinki",
    "description": "Umeshu on intohimoisesti japanilaiselle ruoalle ja juomalle omistautunut intiimi ravintola Töölössä. Jo vuodesta 2008 Umeshussa sushit kuin lämpimätkin annokset valmistettu käsityönä huippulaatuisista raaka-aineista avokeittiössä suoraan asiakkaiden silmien edessä. Sesonkien mukaan vaihtuvalta ruokalistalta löytyy perinteisiä japanilaisia annoksia, sekä tietenkin Umeshun tyyliin hiottuja kokonaisuuksia."
  },
  {
    "name": "UniCafe Kaivopiha",
    "address": "Mannerheimintie 3 B\n00100 Helsinki",
    "description": "UniCafe on opiskelijaruokala ja se toimii Helsingin yliopiston kaikilla kampuksilla.\r\n\r\nTerveellisiä lounaita, virkistäviä juomia, herkullisia leivonnaisia ja maukkaita välipaloja.\r\n"
  },
  {
    "name": "Urban Rabbit",
    "address": "Fredikanterassi 1, Mall of Tripla\n00520 Helsinki",
    "description": "Urban Rabbit on sopivasti rosoinen ja sielukas kohtaamispaikka Triplassa. Tiskin takana intohimoiset ammattilaiset loihtivat maailmanluokan cocktailit ja vinkkaavat parhaat erikoisoluet, joiden kanssa maistuu urbaani bistroruoka."
  },
  {
    "name": "Uumaja",
    "address": "Parrulaituri\n00540 Helsinki",
    "description": "Uumaja on rento kesäterassi-kahvila merellisellä näkymällä Kalasatamassa. Päivisin enemmän kahvilapainotteinen ja iltaa kohden leppoisaa musiikkia kuplien kera. Myös pientä purtavaa."
  },
  {
    "name": "Uzbekistan",
    "address": "Ostostie 4\n00940 Helsinki",
    "description": "Ravintola Uzbekistan on lämminhenkinen ravintola Kontulassa. Uzbekistanin tunnelma syntyy kahdesta päätekijästä, jotka ovat reilu ruoka ja rento palvelu. Ravintola Uzbekistaniin mahtuvat isommatkin seurueet herkuttelemaan, sekä lounas- että illallisaikaan."
  },
  {
    "name": "Vapiano",
    "address": "Mikonkatu 15\n00100 Helsinki",
    "description": "Italialainen pikaruokaravintola jossa pastat, pizzat, alkuruoat ja salaatit tilataan tiskin yli suoraan kokeilta, jotka valmistavat ruoan asiakkaan silmien edessä. Vapianon pitkät tammipöydät kutsuvat keskustelemaan yhdessä ystävien, perheen tai muiden ravintolavieraiden kanssa. \r\n\r\nVapiano on täydellinen paikka nopealle lounaalle, iltapäivän kahvitauolle tai illalliselle perheen ja ystävien kanssa. \r\n\r\nVapianoja on jo yli 190 maassa."
  },
  {
    "name": "Vegoshi",
    "address": "Yliopistonkatu 6\n00100 Helsinki",
    "description": "Vegoshi tarjoilee helpon tavan syödä terveellistä, herkullista ruokaa.\r\n\r\nRuokalistalla on tarjolla vegaanisia annoksia eri puolilta Aasiaa, modernilla twistillä valmistettuina. Ruokalistalla on mm. bowleja, dumplingeja, sushia ja kesärullia."
  },
  {
    "name": "Ventuno, Osteria - Caffé",
    "address": "Korkeavuorenkatu 21\n00130 Helsinki",
    "description": "Maailman metropolien moderneista italialaisravintoloista inspiroitunut Ventuno kattaa Italian parhaat maut tuorepastoista cocktaileihin."
  },
  {
    "name": "Version",
    "address": "Unioninkatu 14\n00130 Helsinki",
    "description": "Version ihastuttaa Kalifornian keittiön runsaan makumaailman inspiroimilla annoksilla sekä vehreällä puutarhamaisella ympäristöllä. Versionin Drinkery tarjoilee huipputason cocktaileja. Poikkea aamiaiselle, lounaalle, illalliselle tai cocktaileille. \r\n\r\nJotta sinä voisit olla paras versio itsestäsi."
  },
  {
    "name": "Via Tribunali",
    "address": "Sofiankatu 4\n00170 Helsinki",
    "description": "Pizzeria Via Tribunali tarjoaa perinteistä napolilaista pizzaa, jota voidaan pitää yhtenä maailman parhaista katuruoista. Ravintolan lista on lyhyt ja hyvin perinteinen, pizzat paistuvat yli 450-asteisessa avotuliuunissa ja valmistuvat noin minuutissa!"
  },
  {
    "name": "Via Tribunali Kallio",
    "address": "Hämeentie 33\n00500 Helsinki",
    "description": "Vuonna 2017 ensimmäisen autenttisen napolilaisen pizzerian Helsingin Sofiankadulle avannut Pizzeria Via Tribunali laajeni Helsingin Kallioon loppukesästä 2019.\r\n\r\nPizzeria Via Tribunali tarjoaa perinteistä napolilaista pizzaa, jota voidaan pitää yhtenä maailman parhaista katuruoista. Ravintolan lista on lyhyt ja hyvin perinteinen, pizzat paistuvat yli 450-asteisessa avotuliuunissa ja valmistuvat noin minuutissa!"
  },
  {
    "name": "Vibami",
    "address": "Eerikinkatu 14, 2.krs\n00100 Helsinki",
    "description": "Vibami on vietnamilainen ravintola joka tarjoilee vietnamilaista katuruokaa etelä-vietnamilaiseen tyyliin."
  },
  {
    "name": "Viikin kartano",
    "address": "Viikinkaari 8\n00790 Helsinki",
    "description": "Kustavilainen Viikin kartano on kaunis kokous- ja juhlapaikka Viikin yliopistoalueen kupeessa Helsingissä. Viihtyisät, entisöidyt tilat huokuvat idyllistä kartanoromantiikkaa ja rauhallisessa puutarhassa ajatukset lentävät. Kartanosalin ikkunoista aukeaa maisema ruusutarhoille, viljellyille pelloille ja lehmälaitumille sekä niiden takana sijaitsevalle Vanhankaupungin luonnonsuojelualueelle. Pihan puolella on vanhoja tammia ja lehmuksia. Arkisin kartanolla tarjoillaan lounasta klo 10.30-13.30 välillä."
  },
  {
    "name": "Viikinkiravintola Harald",
    "address": "Aleksanterinkatu 21, Citykäytävä 2krs.\n00100 Helsinki",
    "description": "Viikinkiravintola Harald on mystisestä viikinkiajasta mausteensa saava elämysruokaravintola."
  },
  {
    "name": "Viinibaari Apotek",
    "address": "Lapinlahdenkatu 1\n00180 Helsinki",
    "description": "Historiallinen Helsingin XII Joutsen apteekki toimi yli sadan vuoden ajan Lapinlahdenkadun ja Eerikinkadun kulmassa.\r\n\r\nAlkuperäistä suojellun jugendapteekin sisustusta kunnioittavan remontin jälkeen paikalle syntyi uusi viinibaari - Apotek.\r\n\r\nApotek tarjoilee pienten & yksityisten viinitilojen laatuviinejä ja maistuvaa naposteltavaa; sesongin mukaan vaihtuvia pikkuannoksia sekä huolella valittuja juustoja, leikkeleitä, pateita ja kasvisruokia."
  },
  {
    "name": "Viinikahvila Pausa",
    "address": "Pitäjänmäentie 19\n00370 Helsinki",
    "description": "Viinikahvila Pausa on rento olohuone keskellä Pitäjänmäkeä. Pausassa tarjoillaan viiniä, pienpanimo-oluita, kahveja ja pientä purtavaa.\r\n\r\nPausan erikoisuus ovat tapas-tyyliset piksut eli pikkusuolaiset.\r\n\r\nLivemusiikkia Pausassa on vähintään kerran kuukaudessa."
  },
  {
    "name": "Villa Angelica",
    "address": "Tamminiementie 3\n00250 Helsinki",
    "description": "Villa Angelicassa voi nauttia kulttuurihistoriallisesta miljööstä viehättävässä, vuonna 1901 valmistuneessa huvilassa, Seurasaaren sillan kupeessa. Vanha romanttinen huvilatyyli houkuttelee rauhoittumaan ja hiljentymään kahvi- tai teekupin ja herkullisten leivonnaisten äärelle. Haudutettavien teelaatujen listalta löytyy yli kymmenen eri teelaatua."
  },
  {
    "name": "Villetta - Ristorante e Pizzeria",
    "address": "Ruusulankatu 8\n00260 Helsinki",
    "description": "Italialainen pizzeria-trattoria Ruusulankadulla Helsingin Töölössä."
  },
  {
    "name": "Vinkkeli",
    "address": "Pieni Roobertinkatu 8\n00130 Helsinki",
    "description": "Ravintola Vinkkeli sijaitsee Kaartinkaupungissa. Historiallisessa kiinteistössä toimiva ruoka- ja viiniravintola tarjoaa nuorten yrittäjien tuoreen näkövinkkelin ravintolaelämykseen, jonka ytimessä ovat välitön tunnelma, tinkimättömästi valmistetut klassikkoannokset ja pieteetillä valitut viinit."
  },
  {
    "name": "Vltava",
    "address": "Elielinaukio 2\n00100 Helsinki",
    "description": "Vltava on tekkiläinen ravintola Elielinaukiolla Rautatieaseman kupeessa. Yli 100-vuotiaan jugendrakennuksen kolme erilaista ravintolakerrosta tarjoavat tunnelmallisen ympäristön tutustumisille, tapaamisille, seurustelulle ja hauskanpidolle maailman parhaiden oluiden parissa, tekkiläisten ruokien siivittämänä.\r\n\r\nNeljännessä kerroksessa sijaitseva Havel-kabinetti tarjoaa nykyaikaiset puitteet kokouksiin sekä muihin tilaisuuksiin."
  },
  {
    "name": "VOIMA Kahvila",
    "address": "Kuortaneenkatu 2\n00510 Helsinki",
    "description": "VOIMA kahvilassa tarjotaan hymyjä ja hyvää läppää, huippuhyvää kahvia sekä lounasta terveellisellä, mutta ​maku ja hauskuus edellä menevällä twistillä. VOIMA on paikka, joka tuo energian ja fiiliksen työntekoon. Kahvilassa voi myös järjestää yksityistilaisuuksia."
  },
  {
    "name": "Väinö Kallio",
    "address": "Hämeentie 11\n00530 Helsinki",
    "description": "Väinö Kallio on tilausravintola ja tapahtumatila jossa järjestetään myös yleisölle avoimia tapahtumia. Väinö Kalliossa koet mm.konsertteja, teatteria, tanssia, iloja ja draamoja. Rakennus on Väinö Vähäkallion suunnittelema, vuonna 1928 rakennettu entinen Elannon pääkonttori."
  },
  {
    "name": "Vöner Lippakioski",
    "address": "Museokatu 12\n00100 Helsinki",
    "description": "Vegaaniruokaa vuodesta 2016 keskellä Helsinkiä - nyt yhteistyössä Vönerin kanssa! Tarjolla on vanhoja ja uusia grilliherkkuja vöneröitynä, ja kaikki tietysti vegaanisena."
  },
  {
    "name": "W30",
    "address": "Unioninkatu 30\n00100 Helsinki",
    "description": "Ravintola W30 on makumatka ranskalais-skandinaaviseen keittiöön. Ravintolan menut rakennetaan kauden tuoreista raaka-aineista ja ruoan valmistuksessa käytetään erilaisia tekniikoita kulinaarisen kokemuksen maksimoimiseksi."
  },
  {
    "name": "WaffDaddy",
    "address": "Pohjoisesplanadi 33, Kämp Galleria 2krs\n00100 Helsinki",
    "description": "Rapeaa, maukasta ja gluteenitonta belgialaistyylistä vohvelia, kasviksilla, kaloilla, lihalla. Makeita annoksia unohtamatta.\r\n\r\nWaffDaddy - Röyhkeää, rehellistä, tuoretta ja takuulla maukasta!\r\n\r\n"
  },
  {
    "name": "Wanda's Kitchen & Lounge",
    "address": "Liesikuja 5\n01600 Vantaa",
    "description": "Wanda's Kitchen & Lounge on vantaalainen, rennon tyylikäs ravintolakokonaisuus, joka tarjoaa lounaan, à la carte -annosten ja brunssin lisäksi Singa-karaokea viikonloppuisin sekä live-musiikkia lauantai-iltaisin. Lisäksi catering-palvelu sekä sauna- ja kokoustiloja. Lounasta tarjolla arkisin 10.30-14."
  },
  {
    "name": "Wanha Pehtoori",
    "address": "Laamannintie 17, Haltialan tila\n00690 Helsinki",
    "description": "Ravintola Wanha Pehtoori sijaitsee Haltialan tilalla, joka on ainutlaatuinen maalaisympäristö Helsingissä. Paikka on talvisaikaan lounasravintola, sekä kahvila. Kesäisin kävijöitä palvelee viihtyisä terassi ja herkkugrilli. Pehtoori on tunnettu tuoreista ja itsetehdyistä munkeista, sämpylöistä ja leivonnaisista sekä perhekeskeisistä tapahtumistaan.\r\n\r\nMyös koirat ovat tervetulleita."
  },
  {
    "name": "Way Bakery",
    "address": "Agricolankatu 9\n00530 Helsinki",
    "description": "Naapurustokahvila, leipomo ja viinibaari Karhupuiston kulmassa Kalliossa. Juureen leivottua leipää, alkuviinejä, aamiaista koko päivän, sekä arkisin lounasta."
  },
  {
    "name": "We Got This",
    "address": "Albertinkatu 10\n00150 Helsinki",
    "description": "We Got This on viihtyisä kahvilaviinibaari jossa on laadukkaat Loud Coffee paahtimon kahvit sekä pientuottajien alkuviinejä, pienpanimo-oluita sekä pientä syötävää."
  },
  {
    "name": "Wino",
    "address": "Fleminginkatu 11\n00500 Helsinki",
    "description": "Trendikäs viinibaari ja ravintola Kallion sydämessä. Wino on erikoistunut luomu- ja alkuviineihin, joita osaa saa myös laseittain. Kauniit ruoka-annokset ja rento ilmapiiri luovat onnistuneen illan viinien parissa."
  },
  {
    "name": "Woolshed Australian Gastro Pub",
    "address": "Töölönlahdenkatu 3 B 1\n00100 Helsinki",
    "description": "Rento australialaisvetoinen ravintola Rautatieaseman lähellä. Tarjolla oluita, juomia sekä mutkatonta ruokaa huokeaan hintaan, kuten esim. burgereita, hummeria ja australialaisia pihvejä. Viikonloppuisin mm. coverbändit soittavat livemusiikkia eikä urheiluakaan ei ole unohdettu, ota vain vähän juotavaa tai  purtavaa ja nauti toiminnasta isolta screeniltä."
  },
  {
    "name": "Xiao Mei Lin Dumplings",
    "address": "Lönnrotinkatu 33-35\n00180 Helsinki",
    "description": "Kiinalainen ravintola Xiao Mei Lin, \"pieni Mei Lin\", on Annankadulla sijaitsevan kiinalaisravintola Mei Linin \"pikkusisko\". Tarjolla on mm. dumplingeja, wonton-keittoja, kiinalaisia salaatteja sekä japanilaista sakea."
  },
  {
    "name": "Yes Yes Yes",
    "address": "Iso Roobertinkatu 1\n00120 Helsinki",
    "description": "Yes Yes Yes on uusi eloisa helsinkiläisbaari ja -ravintola kukoistavalla Iso Roobertinkadulla. Ravintolan erikoisuus on tulikuuma tandooriuuni sekä pitkät baaritiskit, jotka toimivat yhtä hyvin raikkaiden drinkkien siemailuun kuin myös ruokailuun. Odota värien ilotulitusta, banaanipuita ja rutkasti marmoria yhdistettynä ajankohtaisimpaan paikalliseen taiteeseen. Kesäaikaan Yes Yes Yesin terassilta, tässä klassisessa kulmauksessa, on mukava seurailla kaupungin elämää ja tilata vaikkapa lasillisen kylmää roseeta."
  },
  {
    "name": "Young Hearts",
    "address": "Arkadiankatu 21\n00100 Helsinki",
    "description": "Intiimi ja tunnelmallinen kortteliravintola Etu-Töölössä."
  },
  {
    "name": "Zen sushi - sushi & sake",
    "address": "Snellmaninkatu 16\n00170 Helsinki",
    "description": "Kotoisa pieni piilopaikka Helsingissä, joka muistuttaa nykykiotolaista ravintola- ja baarikulttuuria.\r\n\r\nZen sushi tarjoaa japanilaista sushia ja sake-sommelierin valitsemaa sakea. Ravintolassa käytetään paikallisia raaka-aineita aina kuin mahdollista. \r\n\r\n"
  },
  {
    "name": "Zinnkeller",
    "address": "Meritullinkatu 25\n00170 Helsinki",
    "description": "Ravintola Zinnkeller tarjoaa aitoa saksalaista perinneruokaa ja iloista tunnelmaa Kruununhaassa. Ravintola Zinnkeller on perheyritys joka on toiminut vuodesta 1980 lähtien. Monipuoliselta listalta löytyy Saksan eri alueiden herkut, viinejä ja oluita unohtamatta.\r\n\r\nBayerilainen brunssi valloittaa ravintola Zinnkellerin yleensä kuukauden ensimmäisenä lauantaina.\r\n\r\nLisäksi Zinnkellerissä järjestetään erilaisia tapaamisia ja tapahtumia niin peli-iltoja kuin kulttuuriluentojakin."
  },
  {
    "name": "Zucchini",
    "address": "Fabianinkatu 4\n00130 Helsinki",
    "description": "Alusta alkaen itsetehtyä laktovegetaarista kasvisruokaa ja kahvilatuotteita jo vuodesta 1993. Myös vegaanisena."
  }
]