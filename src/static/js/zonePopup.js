var zones = [
{
	zoneID: "dummy",
	poi_id: "",
	xPos: 250,
	yPos: 350,
	zoneName: "dummy",
	propertyClass: "dummy",
	subzones: ["none"],
	streets: ["none"],
	quote: "dummy",
	quotePerson: "dummy"
},
{
	zoneID: "wgb",
	poi_id: "westglocksbury",
	xPos: 350,
	yPos: 350,
	zoneName: "West Glocksbury",
	propertyClass: "C",
	subzones: ["Hardware Store"],
	streets: ["Oilscum (to Snitch in GB)", "Scanty (to Ashtray in VP)", "Goosh (to Sawdust in PH)", "Highway (to Qoute in JP)"],
	quote: "Melancholy streets, in a penitential garb of soot, steeped the souls of the people who were condemned to look at them out of windows, in dire despondency.",
	quotePerson: "Charles Dickens"
},
{
	zoneID: "cv",
	poi_id: "cratersville",
	xPos: 750,
	yPos: 400,
	zoneName: "Cratersville",
	propertyClass: "C",
	subzones: ["Cratersville Mines"],
	streets: ["Endline (to Scrapyard to WT)", "Caldera (to Trench in PA)", "Dynamite (to Zoo in OG)"],
	quote: "There are trees and they are on fire. There are hummingbirds and they are on fire. There are graves and they are on fire and the things coming out of the graves are on fire. The house you grew up in is on fire. There is a gigantic trebuchet on fire on the edge of a crater and the crater is on fire.",
	quotePerson: "Zachary Schomburg"
},
{
	zoneID: "og",
	poi_id: "oozegardens",
	xPos: 550,
	yPos: 400,
	zoneName: "Ooze Gardens",
	propertyClass: "A",
	subzones: ["The Museum", "Ooze Gardens Farms"],
	streets: ["Festival(to Cartel in SSB)" , "Wine (to Goobury in KB)", "Museum (to Skewer in KB)", "Zoo (to Dynamite in CV)"],
	quote: "I'm enchanted by the birds in my blossoms<br>I'm enamored by young lovers on the weekend<br>I like the fourth of July<br>When bombs start flashing",
	quotePerson: "Bad Religion, 'Atomic Garden'"
},
{
	zoneID: "ssb",
	poi_id: "southsleezeborough",
	xPos: 550,
	yPos: 375,
	zoneName: "South Sleezeborough",
	propertyClass: "B",
	subzones: ["The Dojo"],
	streets: ["China (to Macguffin in CL)", "Mafia (to Ring in NSB)", "Tokyo (to Huntingon in KB)", "Cartel (to Festival in OG)"],
	quote: "That I negotiate fog, bituminous<br>Rain rining like teeth into the beggar's tin,<br>or two men jackaling a third in some alley<br>weirdly lit by a couch on fire, that I<br>drag my extinction in search of you...",
	quotePerson: "Li-Young Lee"
},
{
	zoneID: "gb",
	poi_id: "glocksbury",
	xPos: 475,
	yPos: 370,
	zoneName: "Glocksbury",
	propertyClass: "C",
	subzones: ["Comic Shop"],
	streets: ["Police (to Golden in KB)", "Dog (to Fens in VP)", "Snitch (to Oilscum in WGB)", "Mugshot (to Tent in JP)",  "Cul-de-sac (to Slob in NSB)"],
	quote: "The village street was like most other village streets: wide for its height, silent for its size, and drowsy in the dullest degree.",
	quotePerson: "Charles Dickens"
},
{
	zoneID: "nsb",
	poi_id: "northsleezeborough",
	xPos: 500,
	yPos: 325,
	zoneName: "North Sleezeborough",
	propertyClass: "B",
	subzones: ["Neo Milwaukee State"],
	streets: ["Driveby (to Mall in KB)", "Ring (to Mafia in SSB)",  "Carbohydrate (to Manteca in CL)", "Pond Scum(to Planned in JP)", "Slob (to Cul-de-sac in GB)"],
	quote: "I continue laden, translated<br>By exhaustion and time's appetite<br>My sleep abandoned<br>In bus stations and storefront stopps,<br>My insomnia erected under a sky<br>Cross-hatched by wires, branches<br>And black flights of rain.",
	quotePerson: "Li-Young Lee"
},
{
	zoneID: "pa",
	poi_id: "poudrinalley",
	xPos: 700,
	yPos: 250,
	zoneName: "Poudrin Alley",
	propertyClass: "B",
	subzones: ["The 7/11"],
	streets: ["24 (to RR)", "Complex (to Common in DT)", "Intersection (to Minotaur in KB)", "Skewer (to Museum in OG)", "Trench (to Caldera in CV)"],
	quote: "Wide through the landscape dim the lamps are lit in millions<br>Long avenues unfold clear-shining lines of gold across the green<br>Clusters and rings of light, and luminous pavilions,—<br>Oh, who will tell the city's name, and what these wonders mean?",
	quotePerson: "Henry van Dyke"
},
{
	zoneID: "kb",
	poi_id: "krakbay",
	xPos: 700,
	yPos: 375,
	zoneName: "Krak Bay",
	propertyClass: "A",
	subzones: ["Food Court", "The Bicarbonate Soda Fountain", "The Bodega"],
	streets: ["Esplanade (to Combat in DT)", "Minotaur (to Intersection in PA)", "Goobury (to Wine in OG)", "Huntington (to Tokyo in SSB)", "Mall (to Driveby in NSB)", "Golden (to Police in VP)"],
	quote: "By polluting good water with slime, you will never find good drinking water.",
	quotePerson: "Aeschylus"
},
{
	zoneID: "ph",
	poi_id: "poloniumhill",
	xPos: 300,
	yPos: 300,
	zoneName: "Polonium Hill",
	propertyClass: "B",
	subzones: ["none"],
	streets: ["Wholesale (to Sludgeberry in GD)", "Curie (to Cyanide in TT)", "Geller (to Veteran in CP)", "Sawdust (to Goosh in WGB)", "Sortof (to Play in VP)"],
	quote: "Money, it's a crime<br>Share it fairly but don't take a slice of my pie<br>Money, so they say<br>Is the root of all evil today<br>But if you ask for a raise it's no surprise that they're<br>Giving none away",
	quotePerson: "Pink Floyd"
},
{
	zoneID: "cp",
	poi_id: "charcoalpark",
	xPos: 400,
	yPos: 200,
	zoneName: "Charcoal Park",
	propertyClass: "C",
	subzones: ["none"],
	streets: ["Church (to Quarantined in TT)", "Veteran (to Geller in PH)"],
	quote: "They cover a body with roses...<br>I shall not see it...<br>Must one return to the lifeless walls of a city<Whose soul is charred by fire?",
	quotePerson: "Conrad Potter Aiken"
},
{
	zoneID: "tt",
	poi_id: "toxington",
	xPos: 475,
	yPos: 175,
	zoneName: "Toxington",
	propertyClass: "C",
	subzones: ["Toxington Mines", "Toxington Pier"],
	streets: ["Gravel (to Garage in GD)", "Cyanide (to Curie in PH)", "Quarantined (to Church in CP)", "Carcinogen (to Colloid in MR)", "Geyser (to Decaying in AH)"],
	quote: "The afflicted City, prone from mark to mark<br>In shameful occultation, seems<br>A nightmare labyrinthine, dim and drifting,<br>With wavering gulfs and antic heights, and shifting,<br>Rent in the stuff of a material dark,<br>Wherein the lamplight, scattered and sick and pale,<br>Shows like the leper’s living blotch of bale<br>",
	quotePerson: "William Ernest Henley"
},
{
	zoneID: "vp",
	poi_id: "vandalpark",
	xPos: 475,
	yPos: 300,
	zoneName: "Vandal Park",
	propertyClass: "B",
	subzones: ["Battle Arena"],
	streets: ["Ashtray (to Scanty in WGB)", "Fens (to Dog in GB)", "Tookewlforskewl (to NLACU Institute in GD)", "Play (to Sortof in PH)"],
	quote: "So set, before its echoes fade,<br>The fleet foot on the sill of shade,<br>And hold to the low lintel up<br>The still-defended challenge-cup.<br><br>And round that early-laurelled head<br>Will flock to gaze the strengthless dead,<br>And find unwithered on its curls<br>The garland briefer than a girl’s.",
	quotePerson: "A.E. Housman"
},
{
	zoneID: "wrt",
	poi_id: "wreckington",
	xPos: 270,
	yPos: 350,
	zoneName: "Wreckington",
	propertyClass: "C",
	subzones: ["Smoker's Cough Diner"],
	streets: ["Construction (to Endline in CV)", "Scrapyard (to RR)"],
	quote: "If the button is pushed, there's no running away,<br>There'll be no one to save with the world in a grave,<br>Take a look around you, boy, it's bound to scare you, boy,<br>And you tell me over and over and over again my friend,<br>Ah, you don't believe we're on the eve of destruction.",
	quotePerson: "Barry McGuire, 'Eve of Destruction'"
},
{
	zoneID: "rr",
	poi_id: "rowdyroughhouse",
	xPos: 200,
	yPos: 250,
	zoneName: "Rowdy Roughhouse",
	propertyClass: "C",
	subzones: ["none"],
	streets: ["none"],
	quote: "Proud and passionate city—mettlesome, mad, extravagant city!<br>Spring up O city—not for peace alone, but be indeed yourself, warlike!<br>Fear not—submit to no models but your own O city!<br>Behold me—incarnate me as I have incarnated you!<br>I have rejected nothing you offer'd me—whom you adopted I have adopted,<br>Good or bad I never question you—I love all—I do not condemn any thing,<br>I chant and celebrate all that is yours—yet peace no more,<br>In peace I chanted peace, but now the drum of war is mine,<br>War, red war is my song through your streets, O city!",
	quotePerson: "Walt Whitman"
},
{
	zoneID: "gd",
	poi_id: "gatlingsdale",
	xPos: 600,
	yPos: 150,
	zoneName: "Gatlingsdale",
	propertyClass: "A",
	subzones: ["New Los Angeles City University"],
	streets: ["Garage (to Gravel in TT)", "Campus (to 85th in AH)", "University (to CK)", "NLACU Institute (to Tookewlforskewl in VP)", "Sludgeberry (to Wholesale in PH)"],
	quote: "We real cool. We<br>Left school. We<br>Lurk late. We<br>Strike straight. We<br><br>Sing sin. We <br>Thin gin. We<br><br>Jazz June. We<br>Die soon.",
	quotePerson: "Gwendolyn Brooks"
},
{
	zoneID: "ckt",
	poi_id: "copkilltown",
	xPos: 640,
	yPos: 250,
	zoneName: "Cop Killtown",
	propertyClass: "A",
	subzones: ["none"],
	streets: ["none"],
	quote: "No rays from the holy Heaven come down<br>On the long night-time of that town;<br>But light from out the lurid sea<br>Streams up the turrets silently—<br>Gleams up the pinnacles far and free—<br>Up domes—up spires—up kingly halls—<br>Up fanes—up Babylon-like walls—<br>Up shadowy long-forgotten bowers<br>Of sculptured ivy and stone flowers—<br>Up many and many a marvellous shrine<br>Whose wreathed friezes intertwine<br>The viol, the violet, and the vine.<br>Resignedly beneath the sky<br>The melancholy waters lie.<br>So blend the turrets and shadows there<br>That all seem pendulous in air,<br>While from a proud tower in the town<br>Death looks gigantically down.",
	quotePerson: "Edgar Allen Poe"
},
{
	zoneID: "ah",
	poi_id: "astatineheights",
	xPos: 675,
	yPos: 200,
	zoneName: "Astatine Heights",
	propertyClass: "A",
	subzones: ["Red Mobster Seafood", "Cinema"],
	streets: ["85th (to Campus in GD)", "Decaying (to Geyser to TT)", "Condos (to Summit in MR)", "Trail (to Cinder in AB)", "Gated (to Quarter)", "Barbette (to CK)"],
	quote: "What offends us is the sanities: The houses in pedantic rows, the planted sanitary trees, assert levelness of surface like a rebuke to the dent in our car door.",
	quotePerson: "ben saint"
},
{
	zoneID: "ab",
	poi_id: "arsonbrook",
	xPos: 775,
	yPos: 125,
	zoneName: "Arsonbrook",
	propertyClass: "B",
	subzones: ["Arsonbrook Farms"],
	streets: ["Stillwater (to Pollution in SB)", "Cinder (to Trail in AH)", "Tilly (to Ski in MR)", "Crassus (to Abandoned in BD)", "River (to Halflife in LC)"],
	quote: "The clubs all shut, town was deserted all over: The only living thing would be the river; and one night following it, I got a sense of how, if anything did, it left the dead-ends of the place behind.",
	quotePerson: "David Wheatley"
},
{
	zoneID: "bd",
	poi_id: "brawlden",
	xPos: 325,
	yPos: 150,
	zoneName: "Brawlden",
	propertyClass: "C",
	subzones: ["SlimeCorp Laboratory"],
	streets: ["Abandoned (to Crassus in AB)", "Brownstone (to Concrete in NNY)", "Private (to Luxury in ONY)", "Used (to Reactor in LC)"],
	quote: "We were taken from the ore-bed and the mine,<br>We were melted in the furnace and the pit—<br>We were cast and wrought and hammered to design,<br>We were cut and filed and tooled and gauged to fit.",
	quotePerson: "Rudyard Kipling"
},
{
	zoneID: "afb",
	poi_id: "assaultflatsbeach",
	xPos: 625,
	yPos: 200,
	zoneName: "Assault Flats Beach",
	propertyClass: "S",
	subzones: ["The Resort", "Assault Flats Beach Pier"],
	streets: ["Paradise (to Broadway in NNY)", "Beachfront (to Wharf in VC)"],
	quote: "The rich man has his motor-car,<br>His country and his town estate.<br>He smokes a fifty-cent cigar<br>And jeers at Fate.<br><br>He frivols through the livelong day,<br>He knows not Poverty, her pinch.<br>His lot seems light, his heart seems gay;<br>He has a cinch.<br><br>Yet though my lamp burns low and dim,<br>Though I must slave for livelihood—<br>Think you that I would change with him?<br>You bet I would!",
	quotePerson: "Franklin P. Adams"
},
{
	zoneID: "vc",
	poi_id: "vagrantscorner",
	xPos: 525,
	yPos: 200,
	zoneName: "Vagrant's Corner",
	propertyClass: "C",
	subzones: ["Speakeasy"],
	streets: ["Wharf (to Beachfront in AFB)", "Dockyard (to Sandy in SE)", "Pubcrawl (to JR)", "Seaside (to Seedy in GLD)", "Tri (to Morty in ONY)", "Cockfight (to Ghetto in NNY)"],
	quote: "There's a port on a western bay<br>And it serves a hundred ships a day<br>Lonely sailors pass the time away<br>And talk about their homes<br>And there's a girl in this harbor town<br>And she works layin' whiskey down<br>They say, Brandy, fetch another round<br>She serves them whiskey and wine",
	quotePerson: "Looking Glass, 'Brandy (You’re a Fine Girl)'"
},
{
	zoneID: "gld",
	poi_id: "greenlightdistrict",
	xPos: 350,
	yPos: 225,
	zoneName: "Green Light District",
	propertyClass: "A",
	subzones: ["SlimeCorp Casino"],
	streets: ["Seedy (to Seaside in VC)", "Parking Garage (to JR)", "Strip (to Water in DT)"],
	quote: "It starts with just a coin at stake<br>'Till lust has gained its height<br>How vast great hoards we'd love to make<br>When gambling demons bite<br><br>Many a man has lost his headerthrough sums beyond belief<br>They lie, they steal, some end up dead<br>To wide and family's grief<br><br>When nothing's left for buying food<br>All friends and neighbors squeezed<br>Still gambling demons must be wooed<br>And through more bets appeased.",
	quotePerson: "Micheal P. Johnson"
},
{
	zoneID: "se",
	poi_id: "slimesend",
	xPos: 650,
	yPos: 400,
	zoneName: "Slime's End",
	propertyClass: "B",
	subzones: ["Slime's End Cliffs", "Slime's End Pier"],
	streets: ["Sandy (to Dockyard in VC)"],
	quote: "Let us leave this place where the smoke blows black And the dark street winds and bends.<br>Past the pits where the asphalt flowers grow<br>We shall walk with a walk that is measured and slow,<br>And watch where the chalk-white arrows go<br>To the place where the sidewalk ends.",
	quotePerson: "Shel Silverstein"
},
{
	zoneID: "dt",
	poi_id: "downtown",
	xPos: 225,
	yPos: 250,
	zoneName: "Downtown NLACakaNM",
	propertyClass: "S",
	subzones: ["ENDLESS WAR", "SlimeCorp Stock Exchange", "SlimeCorp HQ", "The Limecorp Building (1-3F)"],
	streets: ["North (to Sludge in SB)", "Water (to Strip in GLD)", "Crossing (to RR)", "Common (to Complex in PA)", "Combat (to Esplanade in KB)", "Financial (to CK)"],
	quote: "And they had brick for stone<br>And slime had they for mortar.<br>And they said, “Come, let us build us a city and a tower whose top may reach unto heaven; and let us make us a name, lest we be scattered abroad upon the face of the whole earth.”",
	quotePerson: "Genesis 11:3-4"
},
{
	zoneID: "lc",
	poi_id: "littlechernobyl",
	xPos: 300,
	yPos: 150,
	zoneName: "Little Chernobyl",
	propertyClass: "C",
	subzones: ["Green Cafe Cafe"],
	streets: ["Halflife (to River in AB)", "Reactor (to Used in BD)", "Bombed (to Oldfolk in ONY)"],
	quote: "This his empire. And he is the emperor.<br>The reactor, all black—his hell and his throne.<br>In the sands he sleeps, curled up in flame.<br>In his circle of ravens he dreams all alone<br>of Ukraine, of the whole of Ukraine.",
	quotePerson: "Lina Kostenko"
},
{
	zoneID: "nny",
	poi_id: "newnewyonkers",
	xPos: 525,
	yPos: 200,
	zoneName: "New New Yonkers",
	propertyClass: "B",
	subzones: ["Slimey Persuits"],
	streets: ["Concrete (to Brownstone in BD)", "Broadway (to Paradise in AFB)", "Ghetto (to Cockfight in VC)", "Single (to Shopping in ONY)"],
	quote: "Oh, little leaves that are so dumb<br>Against the shrieking city air,<br>I Watch you when the wind has come<br>I know what sound is there.",
	quotePerson: "Edna St. Vincent Millary"
},
{
	zoneID: "ony",
	poi_id: "oldnewyonkers",
	xPos: 425,
	yPos: 150,
	zoneName: "Old New Yonkers",
	propertyClass: "A",
	subzones: ["SlimeCorp Real Estate Agency"],
	streets: ["Usury (to Factory in SB)", "Oldfolks (to Bombed in LC)", "Luxury (to Private in BD)", "Shopping (to Single in NNY)", "Morty (to Tri in VC)"],
	quote: "The trees along this city street,<br>Save for the traffic and the trains,<br>Would make a sound as thing and sweet<br>As tress in country lanes.",
	quotePerson: "Edna St. Vincent Millary"
},
{
	zoneID: "jr",
	poi_id: "juviesrow",
	xPos: 450,
	yPos: 300,
	zoneName: "Juvie's Row",
	propertyClass: "B",
	subzones: ["The Mines", "Juvie's Row Farms", "Juvie's Row Pier"],
	streets: ["none"],
	quote: "Lift me out of the pit, Lord.<br>Where the sun never shines,<br>‘Cause it get mighty weary<br>Down there in the mine.<br>But I’d rather be me, Lord.<br>Though no riches I show,<br>Though tired and weary.<br>I’m just glad to know<br>When the Great Seal is broken<br>The pages will tell<br>That I’ve already spent<br>My time in hell.",
	quotePerson: "Source Unknown"
},
{
	zoneID: "sb",
	poi_id: "smogsburg",
	xPos: 200,
	yPos: 230,
	zoneName: "Smogsburg",
	propertyClass: "B",
	subzones: ["Bazaar", "Recycling Plant"],
	streets: ["Pollution (to Stillwater in AB)", "Quarter (to Gated in AH)", "Company (to CK)", "Sludge (to North in DT)", "Factory (to Usury in ONY)"],
	quote: "The sky was dark and gloomy, the air was damp and raw, the streets were wet and sloppy. the smoke hung sluggishly above the chimney-tops as if it lacked the courage to rise, and the rain came slowly and doggedly down, as if it had not even the spirit to pour.",
	quotePerson: "Charles Dickens"
},
{
	zoneID: "df",
	poi_id: "dreadford",
	xPos: 300,
	yPos: 325,
	zoneName: "Dreadford",
	propertyClass: "S",
	subzones: ["Country Club"],
	streets: ["Scaffold (to Emerald in JP)", "Hangem (to Doxy in CL)"],
	quote: "I grew up in poverty on the edge of a golf course. I saw how people lived on the other side of the tracks, the upper crust and the WASPs at the country club. We had chickens and pigs in our yards. We butchered every year. I'll never forget those things.",
	quotePerson: "Arnold Palmer"
},
{
	zoneID: "jwp",
	poi_id: "jaywalkerplain",
	xPos: 350,
	yPos: 300,
	zoneName: "Jaywalker Plain",
	propertyClass: "C",
	subzones: ["Jaywalker Plain Pier"],
	streets: ["Planned (to Pondscum in NSB)", "Black Alley (to Perdido in CL)", "Emerald (to Scaffold in DF)", "Qoute (to Highway in WGB)", "Tent (to Mugshot in GB)"],
	quote: "What people don't understand is joining a gang ain't bad, it's cool, it's fine. When you in the hood, joining a gang it's cool because all your friends are in the gang, all your family's in the gang. We're not just killing people every night, we're just hanging out, having a good time.",
	quotePerson: "Snoop Dogg"
},
{
	zoneID: "cl",
	poi_id: "crookline",
	xPos: 400,
	yPos: 275,
	zoneName: "Crookline",
	propertyClass: "B",
	subzones: ["Crookline Pier", "Clinic of Slimoplasty", "Splatify!"],
	streets: ["Doxy (to Hangem in DF)", "Macguffin (to China in SSB)", "Manteca (to Carbohydrate in NSB)", "Perdido (to Black Alley)"],
	quote: "A crook is a crook, and there's something healthy about his frankness in the matter. But any guy who pretends he is enforcing the law and steals on his authority is a swell snake. The worst type of these punks is the big politician.",
	quotePerson: "Al Capone"
},
{
	zoneID: "mr",
	poi_id: "maimridge",
	xPos: 300,
	yPos: 275,
	zoneName: "Maimridge",
	propertyClass: "B",
	subzones: ["Shangri-Larceny", "Colloid Springs", "ski Lodges", "The Summit"],
	streets: ["Summit (to Condos in AH)", "Ski (to Tilly in AB)", "Colloid (to Carcinogen in TT)"],
	quote: "The people I don't understand are atheists. I go surfing and snowboarding, and I'm always around nature. I look at everything and think, 'Who couldn't believe there's a God? Is all this a mistake?' It just blows me away.",
	quotePerson: "Paul Walker"
},
];

var lett_arr = ["a", "b", "c", "d", "e", "f"];

function fadeInBox(zone) {
	//check if infobox exists for a given zone and create it if it doesn't exist
	var zoneID = zone.id
	var zoneInfo = zones.find(z => z.poi_id === zoneID)
	var contentBox = document.getElementById("content_background")
	var xOffset = contentBox.offsetWidth / 10;
	var zoneBox = document.getElementById(zoneInfo.zoneID);
	if (zoneBox == null){

		//create the elements of zone infobox
		var newInfoboxBorder = document.createElement("div");
		newInfoboxBorder.className = "infoboxBorder";
		newInfoboxBorder.id = zoneInfo.zoneID;

		var newInfoBoxInside = document.createElement("div");
		newInfoBoxInside.className = "infoboxInside";

		var newZoneName = document.createElement("div");
		newZoneName.className = "zoneName";
		newZoneName.innerHTML = zoneInfo.zoneName.toUpperCase();

		var newPropertyClass = document.createElement("div");
		newPropertyClass.className = "propertyClass";
		newPropertyClass.innerHTML = "PROPERTY CLASS: " + zoneInfo.propertyClass.toUpperCase();


		var subzoneText = "SUB-ZONES:<br>"
		var i;
		for (i = 0; i < zoneInfo.subzones.length; i++) {
			subzoneText += "\xa0-" + zoneInfo.subzones[i] + "<br>";
		}
		var newSubzones = document.createElement("div");
		newSubzones.className = "subzones";
		newSubzones.innerHTML = subzoneText.toUpperCase();

		var streetText = "CAPTURE PROGRESS:<br>"
		
		var newStreets = document.createElement("div");
		newStreets.className = "streets";
		newStreets.innerHTML = streetText;
		var newQuote = document.createElement("div");
		newQuote.className = "quote";
		newQuote.innerHTML = zoneInfo.quote.toUpperCase();

		var newQuoteAttribution = document.createElement("div");
		newQuoteAttribution.className = "quoteAttribution";
		newQuoteAttribution.innerHTML = "-" + zoneInfo.quotePerson.toUpperCase();

		//stitch elements together
		newInfoBoxInside.appendChild(newZoneName);
		newInfoBoxInside.appendChild(newPropertyClass);
		newInfoBoxInside.appendChild(newSubzones);
		newInfoBoxInside.appendChild(newStreets);
		newInfoBoxInside.appendChild(newQuote);
		newInfoBoxInside.appendChild(newQuoteAttribution);

		newInfoboxBorder.appendChild(newInfoBoxInside);

		//add infobox to document
		contentBox.appendChild(newInfoboxBorder);
	}


	//animate zonebox fade in
	zoneBox2 = document.getElementById(zoneInfo.zoneID);
	zoneBox2.style.display = "initial";
	var name = "#" + zoneInfo.zoneID;
	$(name).stop(true,true);
	// Figure out where to put the dang thing
	var bRect = zone.getBoundingClientRect()
	contentOffset = contentBox.offsetWidth

	// Otherwise do it normal style
	console.log("normal")
	$(name).animate({left: bRect.right + xOffset - contentOffset, top: bRect.top + 5, opacity: "0%"}, 1);
	$(name).animate({left: bRect.right + xOffset - contentOffset, opacity: "100%"}, 200);

}



function fadeOutBox(zone) {
	//animate fade out
	var zoneInfo = zones.find(z => z.poi_id === zone.id)
	var name = "#" + zoneInfo.zoneID;
	$(name).stop(true,true);
	$(name).animate({top: '+=5px', opacity: "0%"}, 200);

	//call setInvisible after 200 milliseconds to get infobox out of the way
	//if left as 0% opacity alone it will block mousing over the map
	zoneBox = document.getElementById(zoneInfo.zoneID);
	setTimeout(setInvisible(zoneInfo.zoneID), 200);
}


function setInvisible(zoneid){
	document.getElementById(zoneid).style.display = "none";
}
