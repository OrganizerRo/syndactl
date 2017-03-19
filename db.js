app.factory("dbFactory", function ($http) {
	var fac = {};
	
<<<<<<< master
	fac.Title = "Learning The Zodiac";
/* Vedic  Planets in English */
fac.VedicPlanetsinEnglish = function() {
	return [
	];
};
/* Zodiac within the Elements */
fac.ZodiacwithintheElements = function() {
	return [
		{ qid: 1, question: 'What element am I: Aries?', answer: 'Fire', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 2, question: 'What element am I: Leo?', answer: 'Fire', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 3, question: 'What element am I: Sagittarius?', answer: 'Fire', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 4, question: 'What element am I: Taraus?', answer: 'Earth', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 5, question: 'What element am I: Virgo?', answer: 'Earth', picture: '12glyphs.gif', hint: '   ' },
		{ qid: 6, question: 'What element am I: Capricorn?', answer: 'Earth', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 7, question: 'What element am I: Gemini?', answer: 'Air', picture: '12glyphs.gif', hint: '  ' },
		{ qid: 8, question: 'What element am I: Libra?', answer: 'Air', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 9, question: 'What element am I: Aquarius?', answer: 'Air', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 10, question: 'What element am I: Cancer?', answer: 'Water', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 11, question: 'What element am I: Pisces?', answer: 'Water', picture: '12glyphs.gif', hint: '  ' },
		{ qid: 12, question: 'What element am I: Scorpio?', answer: 'Water', picture: '12glyphs.gif', hint: ' ' }
	];
};
/* Zodiacal and 3 Qualities */
fac.Zodiacaland3Qualities = function() {
	return [
		{ qid: 1, question: 'What Quality is associated with me : Aries?', answer: 'Cardinal', picture: '12Glyphs.gif', hint: 'None ' },
		{ qid: 2, question: 'What Quality is associated with me : Taurus?', answer: 'Fixed', picture: '12Glyphs.gif', hint: 'None   ' },
		{ qid: 3, question: 'What Quality is associated with me : Gemini?', answer: 'Mutable', picture: '12Glyphs.gif', hint: 'None    ' },
		{ qid: 4, question: 'What Quality is associated with me : Cancer?', answer: 'Cardinal', picture: '12Glyphs.gif', hint: 'None     ' },
		{ qid: 5, question: 'What Quality is associated with me : Leo?', answer: 'Fixed', picture: '12Glyphs.gif', hint: 'None      ' },
		{ qid: 6, question: 'What Quality is associated with me : Virgo?', answer: 'Mutable', picture: '12Glyphs.gif', hint: 'None       ' },
		{ qid: 7, question: 'What Quality is associated with me : Libra?', answer: 'Cardinal', picture: '12Glyphs.gif', hint: 'None        ' },
		{ qid: 8, question: 'What Quality is associated with me : Scorpio?', answer: 'Fixed', picture: '12Glyphs.gif', hint: 'None         ' },
		{ qid: 9, question: 'What Quality is associated with me : Sagittarius?', answer: 'Mutable', picture: '12Glyphs.gif', hint: 'None          ' },
		{ qid: 10, question: 'What Quality is associated with me : Capricorn?', answer: 'Cardinal', picture: '12Glyphs.gif', hint: 'None           ' },
		{ qid: 11, question: 'What Quality is associated with me : Aquarius?', answer: 'Fixed', picture: '12Glyphs.gif', hint: 'None            ' },
		{ qid: 12, question: 'What Quality is associated with me : Pisces?', answer: 'Mutable', picture: '12Glyphs.gif', hint: 'None             ' }
	];
};
/* Zodiacal Attributes */
fac.ZodiacalAttributes = function() {
	return [
		{ qid: 1, question: 'This Describes this sign :  Assertive, individualistic, impulsive, energetic, head strong, pioneering, leader, competitive, action-oriented, aggressive, intemperate, violent, fiery, extreme, arrogant, quick, passionate. Part of body: head/skull.', answer: 'Aries', picture: 'AstrologySigns.gif', hint: '  ' },
		{ qid: 2, question: 'Name the Person: "I have". Resourceful, thorough, devotedly, patient, indulgent, sensual, affectionate, possessive, cautious, acquisitive, musical, artistic, stubborn, solid, earthly, strong, sturdy, slow, kind, just. Part of body: throat/neck', answer: 'Taurus', picture: 'AstrologySigns.gif', hint: '  ' },
		{ qid: 3, question: 'Name The Person : (mutable, air, personal): Keyword: "I think". Logical, inquisitive, fast, curious, multi-tasking, talkative, sociable, duality, mercurial, whimsical, intelligent, restless, informed. Part of body: hands/lungs,', answer: 'Gemini', picture: 'AstrologySigns.gif', hint: '  ' },
		{ qid: 4, question: 'Name the Person : (cardinal, water, personal): Keyword: "I feel". Protective, sensitive, clinging, tenacious, family and home oriented, helpful, nurturing, moody, watery, emotional, crabby, loving. Part of body: stomach/breasts', answer: 'Cancer', picture: 'AstrologySigns.gif', hint: '  ' },
		{ qid: 5, question: 'Name This Person : (fixed, fire, social): Keyword: "I will". Generous, proud, theatrical, passionate, bossy, loves attention, dramatic, independent, noble, creative, leader, egotistic, sunny, bright, kingly, powerful. Part of body: heart/back', answer: 'Leo', picture: 'AstrologySigns.gif', hint: '  ' },
		{ qid: 6, question: 'Who is this person :  (mutable, earth, social): Keyword: "I analyze". Practical, efficient, critical, work and service oriented, common sense, modest, intelligent, health conscious, fussy, helpful, loving, flexible. Part of body: intestines/digestion', answer: 'Virgo', picture: 'AstrologySigns.gif', hint: '  ' },
		{ qid: 7, question: 'Who is This Person :  (cardinal, air, social): Keyword: "I balance". Co-operative, fair, lazy, partnerships, balance, grace, charm, debative, open-minded, social, ideas. Part of body: kidneys/lumbar', answer: 'Libra', picture: 'AstrologySigns.gif', hint: '  ' },
		{ qid: 8, question: 'Who is this person :  (fixed, water, social): Keyword: "I desire". Passionate, sensitive, anxious, intense, controlling, sexual, confrontative, deep, skeptical, mysterious, obsessive, death, transformation. Part of body: genitals/reproductive organs', answer: 'Scorpio', picture: 'AstrologySigns.gif', hint: '  ' },
		{ qid: 9, question: 'Who is This person :  (mutable, fire, universal): Keyword: "I perceive". Free, straightforward, careless, philosophic, fun-loving, arrogant, adventurous, expansive, optimistic, blundering, believer, scattered. Part of body: hips/thighs', answer: 'Sagittarius', picture: 'AstrologySigns.gif', hint: '  ' },
		{ qid: 10, question: 'Who is this Person :(cardinal, earth, universal): Keyword: "I use". Prudent, cautious, suspicious, ambitious, rigid, authoritative, cunning, competent, saturnine, inclined to politics/business. Part of body: knees/skeleton', answer: 'Capricorn', picture: 'AstrologySigns.gif', hint: '  ' },
		{ qid: 11, question: 'Who is This person :  (fixed, air, universal): Keyword: "I know". Democratic, unconventional, detached, friendships, humanitarian, cause-oriented, the group, society, progressive, eccentric, elitist, sophisticated, objective. Part of body: nervous system/ankles', answer: 'Aquarius', picture: 'AstrologySigns.gif', hint: '   ' },
		{ qid: 12, question: 'Who is this Person : (mutable, water, universal): Keyword: "I believe". Imaginative, sensitive, distracted, feeling, duality, idealistic, spirituality, acceptance, undiscriminating, soul growth, martyrdom, artistic, neglectful, surrender, compassionate. Part of body: feet/immune system', answer: 'Pisces', picture: 'AstrologySigns.gif', hint: '  ' }
	];
};
/* Zodiacal Dates */
fac.ZodiacalDates = function() {
	return [
		{ qid: 1, question: 'Dates of Sign : March 21?', answer: 'Aries', picture: 'roundZodiac.gif', hint: '  ' },
		{ qid: 2, question: 'Dates of Sign : April 21?', answer: 'Taurus', picture: 'roundZodiac.gif', hint: '  ' },
		{ qid: 3, question: 'Dates of Sign :May 22 ?', answer: 'Gemini', picture: 'roundZodiac.gif', hint: '  ' },
		{ qid: 4, question: 'Dates of Sign : June 22 ?', answer: 'Cancer', picture: 'roundZodiac.gif', hint: '  ' },
		{ qid: 5, question: 'Dates of Sign : July 23 ?', answer: 'Leo', picture: 'roundZodiac.gif', hint: '   ' },
		{ qid: 6, question: 'Dates of Sign : August 22 ?', answer: 'Virgo', picture: 'roundZodiac.gif', hint: '  ' },
		{ qid: 7, question: 'Dates of Sign : September 24 ?', answer: 'Libra', picture: 'roundZodiac.gif', hint: '  ' },
		{ qid: 8, question: 'Dates of Sign : October 24 ?', answer: 'Scorpio', picture: 'roundZodiac.gif', hint: '  ' },
		{ qid: 9, question: 'Dates of Sign : November 23 ?', answer: 'Sagittarius', picture: 'roundZodiac.gif', hint: '  ' },
		{ qid: 10, question: 'Dates of Sign : December 23 ?', answer: 'Capricorn', picture: 'roundZodiac.gif', hint: '  ' },
		{ qid: 11, question: 'Dates of Sign : January 21 ?', answer: 'Aquarius', picture: 'roundZodiac.gif', hint: '  ' },
		{ qid: 12, question: 'Dates of Sign : February 20 ?', answer: 'Pisces', picture: 'roundZodiac.gif', hint: '  ' }
	];
};
/* Zodiacal Glyphs */
fac.ZodiacalGlyphs = function() {
	return [
		{ qid: 1, question: 'What is glyph #1?', answer: 'Aries', picture: '12glyphs.gif', hint: '    ' },
		{ qid: 2, question: 'What is glyph #2?', answer: 'Taurus', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 3, question: 'What is glyph #3?', answer: 'Gemini', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 4, question: 'What is glyph 4?', answer: 'Cancer', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 5, question: 'What is glyph 5?', answer: 'Leo', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 6, question: 'What is glyph 6?', answer: 'Virgo', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 7, question: 'What is glyph 7?', answer: 'Libra', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 8, question: 'What is glyph 8?', answer: 'Scorpio', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 9, question: 'What is glyph 9?', answer: 'Sagittarius', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 10, question: 'What is glyph 10?', answer: 'Capricorn', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 11, question: 'What is glyph 11?', answer: 'Aquarius', picture: '12glyphs.gif', hint: ' ' },
		{ qid: 12, question: 'What is glyph 12?', answer: 'Pisces', picture: '12glyphs.gif', hint: ' ' }
	];
};
/* Zodiacal Miscellaneous Symbols */
fac.ZodiacalMiscellaneousSymbols = function() {
	return [
		{ qid: 1, question: 'What is the name of 1?', answer: 'Ascendant', picture: 'miscSymbs.gif', hint: 'none ' },
		{ qid: 2, question: 'What is the name of 2?', answer: 'North Node', picture: 'miscSymbs.gif', hint: 'none  ' },
		{ qid: 3, question: 'What is the name of 3?', answer: 'Midheaven', picture: 'miscSymbs.gif', hint: 'none   ' },
		{ qid: 4, question: 'What is the name of 4?', answer: 'South Node', picture: 'miscSymbs.gif', hint: 'none        ' },
		{ qid: 5, question: 'What is the name of 5?', answer: 'Vertex', picture: 'miscSymbs.gif', hint: 'none     ' },
		{ qid: 6, question: 'What is the name of 6?', answer: 'Retrograde', picture: 'miscSymbs.gif', hint: 'none      ' },
		{ qid: 7, question: 'What is the name of 7?', answer: 'Part of Fortune', picture: 'miscSymbs.gif', hint: 'none       ' },
		{ qid: 8, question: 'What is the name of 8?', answer: 'Chiron', picture: 'miscSymbs.gif', hint: 'none        ' },
		{ qid: 9, question: 'What is the name of 9?', answer: 'Ceres', picture: 'miscSymbs.gif', hint: 'none         ' },
		{ qid: 10, question: 'What is the name of 10', answer: 'Amor', picture: 'miscSymbs.gif', hint: 'none          ' },
		{ qid: 11, question: 'What is the name of 11', answer: 'Juno', picture: 'miscSymbs.gif', hint: 'none           ' },
		{ qid: 12, question: 'What is the name of 12?', answer: 'Psyche', picture: 'miscSymbs.gif', hint: 'none            ' },
		{ qid: 13, question: 'What is the name of 13?', answer: 'Pallas', picture: 'miscSymbs.gif', hint: 'none             ' },
		{ qid: 14, question: 'What is the name of 14?', answer: 'Sappho', picture: 'miscSymbs.gif', hint: 'none              ' },
		{ qid: 15, question: 'What is the name of 15?', answer: 'Vesta', picture: 'miscSymbs.gif', hint: 'none               ' },
		{ qid: 16, question: 'What is the name of 16?', answer: 'Equatorial Ascendant', picture: 'miscSymbs.gif', hint: 'none                ' },
		{ qid: 17, question: 'What is the name of 17?', answer: 'Eros', picture: 'miscSymbs.gif', hint: 'none                 ' },
		{ qid: 18, question: 'What is the name of 18?', answer: 'Descendant', picture: 'miscSymbs.gif', hint: 'none                  ' },
		{ qid: 19, question: 'What is the name of aspect 19?', answer: 'Conjunction', picture: 'miscSymbs.gif', hint: 'none                   ' },
		{ qid: 20, question: 'What is the name of aspect 20?', answer: 'Sesquiquadrature', picture: 'miscSymbs.gif', hint: 'none                    ' },
		{ qid: 21, question: 'What is the name of aspect 21?', answer: 'SemiSextile', picture: 'miscSymbs.gif', hint: 'none                     ' },
		{ qid: 22, question: 'What is the name of aspect 22?', answer: 'Quincunx', picture: 'miscSymbs.gif', hint: 'none                      ' },
		{ qid: 23, question: 'What is the name of aspect 23?', answer: 'Sextile', picture: 'miscSymbs.gif', hint: 'none                       ' },
		{ qid: 24, question: 'What is the name of aspect 24?', answer: 'Opposition', picture: 'miscSymbs.gif', hint: 'none                        ' },
		{ qid: 25, question: 'What is the name of aspect 25?', answer: 'Square', picture: 'miscSymbs.gif', hint: 'none                         ' },
		{ qid: 26, question: 'What is the name of aspect 26?', answer: 'Parallel', picture: 'miscSymbs.gif', hint: 'none                          ' },
		{ qid: 27, question: 'What is the name of aspect 27?', answer: 'Trine', picture: 'miscSymbs.gif', hint: 'none                           ' },
		{ qid: 28, question: 'What is the name of aspect 28?', answer: 'ContraParallel', picture: 'miscSymbs.gif', hint: 'none                            ' },
		{ qid: 29, question: 'What is the name of aspect 29?', answer: 'SemiSquare', picture: 'miscSymbs.gif', hint: 'none                              ' }
	];
};
/* Zodiacal Months */
fac.ZodiacalMonths = function() {
	return [
		{ qid: 1, question: 'What month is Aries ?', answer: 'March 21 April 20', picture: 'aries_largecolorful.jpg ', hint: ' ' },
		{ qid: 2, question: 'What month is Taurus?', answer: 'April 21 May 21', picture: 'taurus_largecolorful.jpg ', hint: 'Sidereal Zodiac  ' },
		{ qid: 3, question: 'What month is Gemini?', answer: 'May 22 June 21', picture: 'Gemini_largecolorful.jpg ', hint: '   ' },
		{ qid: 4, question: 'What month is Cancer?', answer: 'June 22 july 22', picture: 'Cancer_largecolorful.jpg ', hint: '   ' },
		{ qid: 5, question: 'What month is Leo?', answer: 'July 23 August 23', picture: 'Leo_largecolorful.jpg ', hint: '   ' },
		{ qid: 6, question: 'What month is Virgo?', answer: 'August 24 September 22', picture: 'virgo_largecolorful.jpg', hint: '   ' },
		{ qid: 7, question: 'What month is Libra?', answer: 'September 23 October 23', picture: 'libra_largecolorful.jpg ', hint: '      ' },
		{ qid: 8, question: 'What month is Scorpio?', answer: 'October 24 November 22', picture: 'scorpio_largecolorful.jpg ', hint: '    ' },
		{ qid: 9, question: 'What month is Sagittarius?', answer: 'November 23 December 22', picture: 'sagittarius_largecolorful.jpg ', hint: '    ' },
		{ qid: 10, question: 'What month is Capricorn?', answer: 'December 23 January 20', picture: 'capricorn_largecolorful.jpg ', hint: '       ' },
		{ qid: 11, question: 'What month is Aquarius?', answer: 'January 21 February 19', picture: 'aquarius_largecolorful.jpg ', hint: '      ' },
		{ qid: 12, question: 'What month is Pisces?', answer: 'February 20 March 20', picture: 'february_largecolorful.jpg ', hint: '   ' }
	];
};
/* Zodiacal Planetary Glyphs */
fac.ZodiacalPlanetaryGlyphs = function() {
	return [
		{ qid: 1, question: 'What is the name of planet 1?', answer: 'Sun', picture: '12PlanetGlyphs.gif', hint: 'none ' },
		{ qid: 2, question: 'What is the association of planet 1?', answer: 'ego', picture: '12PlanetGlyphs.gif', hint: 'none  ' },
		{ qid: 3, question: 'What is the name of planet 2?', answer: 'Moon', picture: '12PlanetGlyphs.gif', hint: 'none   ' },
		{ qid: 4, question: 'What is the association of planet 2?', answer: 'feelings', picture: '12PlanetGlyphs.gif', hint: 'none    ' },
		{ qid: 5, question: 'What is the name of planet 3?', answer: 'Mercury', picture: '12PlanetGlyphs.gif', hint: 'none     ' },
		{ qid: 6, question: 'What is the association of planet 3?', answer: 'Messenger', picture: '12PlanetGlyphs.gif', hint: 'none      ' },
		{ qid: 7, question: 'What is the name of planet 4?', answer: 'mars', picture: '12PlanetGlyphs.gif', hint: 'none       ' },
		{ qid: 8, question: 'What is the association of planet 4?', answer: 'Warrior', picture: '12PlanetGlyphs.gif', hint: 'none        ' },
		{ qid: 9, question: 'What is the name of planet 5?', answer: 'Jupiter', picture: '12PlanetGlyphs.gif', hint: 'none         ' },
		{ qid: 10, question: 'What is the association of planet 5?', answer: 'Growth', picture: '12PlanetGlyphs.gif', hint: 'none          ' },
		{ qid: 11, question: 'What is the name of planet 6?', answer: 'Saturn', picture: '12PlanetGlyphs.gif', hint: 'none           ' },
		{ qid: 12, question: 'What is the association of planet 6?', answer: 'limits', picture: '12PlanetGlyphs.gif', hint: 'none            ' },
		{ qid: 13, question: 'What is the name of planet 7?', answer: 'Neptune', picture: '12PlanetGlyphs.gif', hint: 'none             ' },
		{ qid: 14, question: 'What is the association of planet 7?', answer: 'Compassion', picture: '12PlanetGlyphs.gif', hint: 'none              ' },
		{ qid: 15, question: 'What is the name of planet 8?', answer: 'Pluto', picture: '12PlanetGlyphs.gif', hint: 'none               ' },
		{ qid: 16, question: 'What is the association of planet 8?', answer: 'Power', picture: '12PlanetGlyphs.gif', hint: 'none                ' },
		{ qid: 17, question: 'What is the name of planet 9?', answer: 'Chiron', picture: '12PlanetGlyphs.gif', hint: 'none                 ' },
		{ qid: 18, question: 'What is the association of planet 9?', answer: 'Wounded Healer', picture: '12PlanetGlyphs.gif', hint: 'none                  ' },
		{ qid: 19, question: 'What is the name of planet 10?', answer: 'Venus', picture: '12PlanetGlyphs.gif', hint: 'none                   ' },
		{ qid: 20, question: 'What is the association of planet 10?', answer: 'Love', picture: '12PlanetGlyphs.gif', hint: 'none                    ' },
		{ qid: 21, question: 'What is the name of planet 11?', answer: 'Uranus', picture: '12PlanetGlyphs.gif', hint: 'none                     ' },
		{ qid: 22, question: 'What is the associaiton of planet 11?', answer: 'Enlightener', picture: '12PlanetGlyphs.gif', hint: 'none                      ' },
		{ qid: 23, question: 'What is the name of planet 12?', answer: 'Retrograde', picture: '12PlanetGlyphs.gif', hint: 'none                       ' }
	];
};
/* Zodiacal Rulers (Traditional) */
fac.ZodiacalRulersTraditional = function() {
	return [
		{ qid: 1, question: 'Which planet rules Aries?', answer: 'Mars', picture: '9Planets.gif', hint: '  ' },
		{ qid: 2, question: 'Which planet rules Taurus?', answer: 'Venus', picture: '9Planets.gif', hint: ' ' },
		{ qid: 3, question: 'Which planet rules Gemini?', answer: 'Mercury', picture: '9Planets.gif', hint: ' ' },
		{ qid: 4, question: 'Which planet rules Cancer?', answer: 'Moon', picture: '9Planets.gif', hint: ' ' },
		{ qid: 5, question: 'Which planet rules Leo?', answer: 'Sun', picture: '9Planets.gif', hint: ' ' },
		{ qid: 6, question: 'Which planet rules Virgo?', answer: 'Mercury', picture: '9Planets.gif', hint: ' ' },
		{ qid: 7, question: 'Which planet rules Libra?', answer: 'Venus', picture: '9Planets.gif', hint: ' ' },
		{ qid: 8, question: 'Which planet rules Scorpio?', answer: 'Mars', picture: '9Planets.gif', hint: ' ' },
		{ qid: 9, question: 'Which planet rules Sagittarius?', answer: 'Jupiter', picture: '9Planets.gif', hint: ' ' },
		{ qid: 10, question: 'Which planet rules Capricorn?', answer: 'Saturn', picture: '9Planets.gif', hint: ' ' },
		{ qid: 11, question: 'Which planet rules Aquarius?', answer: 'Saturn', picture: '9Planets.gif', hint: ' ' },
		{ qid: 12, question: 'Which planet rules Pisces?', answer: 'Jupiter', picture: '9Planets.gif', hint: ' ' }
	];
};

=======
	fac.Title = "Celestial DB";
>>>>>>> local

	/* Vedic  Planets in English */
	fac.VedicPlanetsinEnglish = function() {
		return [
		];
	};
	/* Zodiac within the Elements */
	fac.ZodiacwithintheElements = function() {
		return [
			{ qid: 1, question: 'What element am I: Aries?', answer: 'Fire', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 2, question: 'What element am I: Leo?', answer: 'Fire', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 3, question: 'What element am I: Sagittarius?', answer: 'Fire', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 4, question: 'What element am I: Taraus?', answer: 'Earth', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 5, question: 'What element am I: Virgo?', answer: 'Earth', picture: '12glyphs.gif', hint: '   ' },
			{ qid: 6, question: 'What element am I: Capricorn?', answer: 'Earth', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 7, question: 'What element am I: Gemini?', answer: 'Air', picture: '12glyphs.gif', hint: '  ' },
			{ qid: 8, question: 'What element am I: Libra?', answer: 'Air', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 9, question: 'What element am I: Aquarius?', answer: 'Air', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 10, question: 'What element am I: Cancer?', answer: 'Water', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 11, question: 'What element am I: Pisces?', answer: 'Water', picture: '12glyphs.gif', hint: '  ' },
			{ qid: 12, question: 'What element am I: Scorpio?', answer: 'Water', picture: '12glyphs.gif', hint: ' ' }
		];
	};
	/* Zodiacal and 3 Qualities */
	fac.Zodiacaland3Qualities = function() {
		return [
			{ qid: 1, question: 'What Quality is associated with me : Aries?', answer: 'Cardinal', picture: '12Glyphs.gif', hint: 'None ' },
			{ qid: 2, question: 'What Quality is associated with me : Taurus?', answer: 'Fixed', picture: '12Glyphs.gif', hint: 'None   ' },
			{ qid: 3, question: 'What Quality is associated with me : Gemini?', answer: 'Mutable', picture: '12Glyphs.gif', hint: 'None    ' },
			{ qid: 4, question: 'What Quality is associated with me : Cancer?', answer: 'Cardinal', picture: '12Glyphs.gif', hint: 'None     ' },
			{ qid: 5, question: 'What Quality is associated with me : Leo?', answer: 'Fixed', picture: '12Glyphs.gif', hint: 'None      ' },
			{ qid: 6, question: 'What Quality is associated with me : Virgo?', answer: 'Mutable', picture: '12Glyphs.gif', hint: 'None       ' },
			{ qid: 7, question: 'What Quality is associated with me : Libra?', answer: 'Cardinal', picture: '12Glyphs.gif', hint: 'None        ' },
			{ qid: 8, question: 'What Quality is associated with me : Scorpio?', answer: 'Fixed', picture: '12Glyphs.gif', hint: 'None         ' },
			{ qid: 9, question: 'What Quality is associated with me : Sagittarius?', answer: 'Mutable', picture: '12Glyphs.gif', hint: 'None          ' },
			{ qid: 10, question: 'What Quality is associated with me : Capricorn?', answer: 'Cardinal', picture: '12Glyphs.gif', hint: 'None           ' },
			{ qid: 11, question: 'What Quality is associated with me : Aquarius?', answer: 'Fixed', picture: '12Glyphs.gif', hint: 'None            ' },
			{ qid: 12, question: 'What Quality is associated with me : Pisces?', answer: 'Mutable', picture: '12Glyphs.gif', hint: 'None             ' }
		];
	};
	/* Zodiacal Attributes */
	fac.ZodiacalAttributes = function() {
		return [
			{ qid: 1, question: 'This Describes this sign :  Assertive, individualistic, impulsive, energetic, head strong, pioneering, leader, competitive, action-oriented, aggressive, intemperate, violent, fiery, extreme, arrogant, quick, passionate. Part of body: head/skull.', answer: 'Aries', picture: 'AstrologySigns.gif', hint: '  ' },
			{ qid: 2, question: 'Name the Person: "I have". Resourceful, thorough, devotedly, patient, indulgent, sensual, affectionate, possessive, cautious, acquisitive, musical, artistic, stubborn, solid, earthly, strong, sturdy, slow, kind, just. Part of body: throat/neck', answer: 'Taurus', picture: 'AstrologySigns.gif', hint: '  ' },
			{ qid: 3, question: 'Name The Person : (mutable, air, personal): Keyword: "I think". Logical, inquisitive, fast, curious, multi-tasking, talkative, sociable, duality, mercurial, whimsical, intelligent, restless, informed. Part of body: hands/lungs,', answer: 'Gemini', picture: 'AstrologySigns.gif', hint: '  ' },
			{ qid: 4, question: 'Name the Person : (cardinal, water, personal): Keyword: "I feel". Protective, sensitive, clinging, tenacious, family and home oriented, helpful, nurturing, moody, watery, emotional, crabby, loving. Part of body: stomach/breasts', answer: 'Cancer', picture: 'AstrologySigns.gif', hint: '  ' },
			{ qid: 5, question: 'Name This Person : (fixed, fire, social): Keyword: "I will". Generous, proud, theatrical, passionate, bossy, loves attention, dramatic, independent, noble, creative, leader, egotistic, sunny, bright, kingly, powerful. Part of body: heart/back', answer: 'Leo', picture: 'AstrologySigns.gif', hint: '  ' },
			{ qid: 6, question: 'Who is this person :  (mutable, earth, social): Keyword: "I analyze". Practical, efficient, critical, work and service oriented, common sense, modest, intelligent, health conscious, fussy, helpful, loving, flexible. Part of body: intestines/digestion', answer: 'Virgo', picture: 'AstrologySigns.gif', hint: '  ' },
			{ qid: 7, question: 'Who is This Person :  (cardinal, air, social): Keyword: "I balance". Co-operative, fair, lazy, partnerships, balance, grace, charm, debative, open-minded, social, ideas. Part of body: kidneys/lumbar', answer: 'Libra', picture: 'AstrologySigns.gif', hint: '  ' },
			{ qid: 8, question: 'Who is this person :  (fixed, water, social): Keyword: "I desire". Passionate, sensitive, anxious, intense, controlling, sexual, confrontative, deep, skeptical, mysterious, obsessive, death, transformation. Part of body: genitals/reproductive organs', answer: 'Scorpio', picture: 'AstrologySigns.gif', hint: '  ' },
			{ qid: 9, question: 'Who is This person :  (mutable, fire, universal): Keyword: "I perceive". Free, straightforward, careless, philosophic, fun-loving, arrogant, adventurous, expansive, optimistic, blundering, believer, scattered. Part of body: hips/thighs', answer: 'Sagittarius', picture: 'AstrologySigns.gif', hint: '  ' },
			{ qid: 10, question: 'Who is this Person :(cardinal, earth, universal): Keyword: "I use". Prudent, cautious, suspicious, ambitious, rigid, authoritative, cunning, competent, saturnine, inclined to politics/business. Part of body: knees/skeleton', answer: 'Capricorn', picture: 'AstrologySigns.gif', hint: '  ' },
			{ qid: 11, question: 'Who is This person :  (fixed, air, universal): Keyword: "I know". Democratic, unconventional, detached, friendships, humanitarian, cause-oriented, the group, society, progressive, eccentric, elitist, sophisticated, objective. Part of body: nervous system/ankles', answer: 'Aquarius', picture: 'AstrologySigns.gif', hint: '   ' },
			{ qid: 12, question: 'Who is this Person : (mutable, water, universal): Keyword: "I believe". Imaginative, sensitive, distracted, feeling, duality, idealistic, spirituality, acceptance, undiscriminating, soul growth, martyrdom, artistic, neglectful, surrender, compassionate. Part of body: feet/immune system', answer: 'Pisces', picture: 'AstrologySigns.gif', hint: '  ' }
		];
	};
	/* Zodiacal Dates */
	fac.ZodiacalDates = function() {
		return [
			{ qid: 1, question: 'Dates of Sign : March 21?', answer: 'Aries', picture: 'roundZodiac.gif', hint: '  ' },
			{ qid: 2, question: 'Dates of Sign : April 21?', answer: 'Taurus', picture: 'roundZodiac.gif', hint: '  ' },
			{ qid: 3, question: 'Dates of Sign :May 22 ?', answer: 'Gemini', picture: 'roundZodiac.gif', hint: '  ' },
			{ qid: 4, question: 'Dates of Sign : June 22 ?', answer: 'Cancer', picture: 'roundZodiac.gif', hint: '  ' },
			{ qid: 5, question: 'Dates of Sign : July 23 ?', answer: 'Leo', picture: 'roundZodiac.gif', hint: '   ' },
			{ qid: 6, question: 'Dates of Sign : August 22 ?', answer: 'Virgo', picture: 'roundZodiac.gif', hint: '  ' },
			{ qid: 7, question: 'Dates of Sign : September 24 ?', answer: 'Libra', picture: 'roundZodiac.gif', hint: '  ' },
			{ qid: 8, question: 'Dates of Sign : October 24 ?', answer: 'Scorpio', picture: 'roundZodiac.gif', hint: '  ' },
			{ qid: 9, question: 'Dates of Sign : November 23 ?', answer: 'Sagittarius', picture: 'roundZodiac.gif', hint: '  ' },
			{ qid: 10, question: 'Dates of Sign : December 23 ?', answer: 'Capricorn', picture: 'roundZodiac.gif', hint: '  ' },
			{ qid: 11, question: 'Dates of Sign : January 21 ?', answer: 'Aquarius', picture: 'roundZodiac.gif', hint: '  ' },
			{ qid: 12, question: 'Dates of Sign : February 20 ?', answer: 'Pisces', picture: 'roundZodiac.gif', hint: '  ' }
		];
	};
	/* Zodiacal Glyphs */
	fac.ZodiacalGlyphs = function() {
		return [
			{ qid: 1, question: 'What is glyph #1?', answer: 'Aries', picture: '12glyphs.gif', hint: '    ' },
			{ qid: 2, question: 'What is glyph #2?', answer: 'Taurus', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 3, question: 'What is glyph #3?', answer: 'Gemini', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 4, question: 'What is glyph 4?', answer: 'Cancer', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 5, question: 'What is glyph 5?', answer: 'Leo', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 6, question: 'What is glyph 6?', answer: 'Virgo', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 7, question: 'What is glyph 7?', answer: 'Libra', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 8, question: 'What is glyph 8?', answer: 'Scorpio', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 9, question: 'What is glyph 9?', answer: 'Sagittarius', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 10, question: 'What is glyph 10?', answer: 'Capricorn', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 11, question: 'What is glyph 11?', answer: 'Aquarius', picture: '12glyphs.gif', hint: ' ' },
			{ qid: 12, question: 'What is glyph 12?', answer: 'Pisces', picture: '12glyphs.gif', hint: ' ' }
		];
	};
	/* Zodiacal Miscellaneous Symbols */
	fac.ZodiacalMiscellaneousSymbols = function() {
		return [
			{ qid: 1, question: 'What is the name of 1?', answer: 'Ascendant', picture: 'miscSymbs.gif', hint: 'none ' },
			{ qid: 2, question: 'What is the name of 2?', answer: 'North Node', picture: 'miscSymbs.gif', hint: 'none  ' },
			{ qid: 3, question: 'What is the name of 3?', answer: 'Midheaven', picture: 'miscSymbs.gif', hint: 'none   ' },
			{ qid: 4, question: 'What is the name of 4?', answer: 'South Node', picture: 'miscSymbs.gif', hint: 'none        ' },
			{ qid: 5, question: 'What is the name of 5?', answer: 'Vertex', picture: 'miscSymbs.gif', hint: 'none     ' },
			{ qid: 6, question: 'What is the name of 6?', answer: 'Retrograde', picture: 'miscSymbs.gif', hint: 'none      ' },
			{ qid: 7, question: 'What is the name of 7?', answer: 'Part of Fortune', picture: 'miscSymbs.gif', hint: 'none       ' },
			{ qid: 8, question: 'What is the name of 8?', answer: 'Chiron', picture: 'miscSymbs.gif', hint: 'none        ' },
			{ qid: 9, question: 'What is the name of 9?', answer: 'Ceres', picture: 'miscSymbs.gif', hint: 'none         ' },
			{ qid: 10, question: 'What is the name of 10', answer: 'Amor', picture: 'miscSymbs.gif', hint: 'none          ' },
			{ qid: 11, question: 'What is the name of 11', answer: 'Juno', picture: 'miscSymbs.gif', hint: 'none           ' },
			{ qid: 12, question: 'What is the name of 12?', answer: 'Psyche', picture: 'miscSymbs.gif', hint: 'none            ' },
			{ qid: 13, question: 'What is the name of 13?', answer: 'Pallas', picture: 'miscSymbs.gif', hint: 'none             ' },
			{ qid: 14, question: 'What is the name of 14?', answer: 'Sappho', picture: 'miscSymbs.gif', hint: 'none              ' },
			{ qid: 15, question: 'What is the name of 15?', answer: 'Vesta', picture: 'miscSymbs.gif', hint: 'none               ' },
			{ qid: 16, question: 'What is the name of 16?', answer: 'Equatorial Ascendant', picture: 'miscSymbs.gif', hint: 'none                ' },
			{ qid: 17, question: 'What is the name of 17?', answer: 'Eros', picture: 'miscSymbs.gif', hint: 'none                 ' },
			{ qid: 18, question: 'What is the name of 18?', answer: 'Descendant', picture: 'miscSymbs.gif', hint: 'none                  ' },
			{ qid: 19, question: 'What is the name of aspect 19?', answer: 'Conjunction', picture: 'miscSymbs.gif', hint: 'none                   ' },
			{ qid: 20, question: 'What is the name of aspect 20?', answer: 'Sesquiquadrature', picture: 'miscSymbs.gif', hint: 'none                    ' },
			{ qid: 21, question: 'What is the name of aspect 21?', answer: 'SemiSextile', picture: 'miscSymbs.gif', hint: 'none                     ' },
			{ qid: 22, question: 'What is the name of aspect 22?', answer: 'Quincunx', picture: 'miscSymbs.gif', hint: 'none                      ' },
			{ qid: 23, question: 'What is the name of aspect 23?', answer: 'Sextile', picture: 'miscSymbs.gif', hint: 'none                       ' },
			{ qid: 24, question: 'What is the name of aspect 24?', answer: 'Opposition', picture: 'miscSymbs.gif', hint: 'none                        ' },
			{ qid: 25, question: 'What is the name of aspect 25?', answer: 'Square', picture: 'miscSymbs.gif', hint: 'none                         ' },
			{ qid: 26, question: 'What is the name of aspect 26?', answer: 'Parallel', picture: 'miscSymbs.gif', hint: 'none                          ' },
			{ qid: 27, question: 'What is the name of aspect 27?', answer: 'Trine', picture: 'miscSymbs.gif', hint: 'none                           ' },
			{ qid: 28, question: 'What is the name of aspect 28?', answer: 'ContraParallel', picture: 'miscSymbs.gif', hint: 'none                            ' },
			{ qid: 29, question: 'What is the name of aspect 29?', answer: 'SemiSquare', picture: 'miscSymbs.gif', hint: 'none                              ' }
		];
	};
	/* Zodiacal Months */
	fac.ZodiacalMonths = function() {
		return [
			{ qid: 1, question: 'What month is Aries ?', answer: 'March', picture: 'astrowheel.gif', hint: ' ' },
			{ qid: 2, question: 'What month is Taurus?', answer: 'April', picture: 'astrowheel.gif', hint: '  ' },
			{ qid: 3, question: 'What month is Gemini?', answer: 'May', picture: 'astrowheel.gif', hint: ' ' },
			{ qid: 4, question: 'What month is Cancer?', answer: 'June', picture: 'astrowheel.gif', hint: ' ' },
			{ qid: 5, question: 'What month is Leo?', answer: 'July', picture: 'astrowheel.gif', hint: ' ' },
			{ qid: 6, question: 'What month is Virgo?', answer: 'August', picture: 'astrowheel.gif', hint: ' ' },
			{ qid: 7, question: 'What month is Libra?', answer: 'September', picture: 'astrowheel.gif', hint: '   ' },
			{ qid: 8, question: 'What month is Scorpio?', answer: 'October', picture: 'astrowheel.gif', hint: '  ' },
			{ qid: 9, question: 'What month is Sagittarius?', answer: 'November', picture: 'astrowheel.gif', hint: '  ' },
			{ qid: 10, question: 'What month is Capricorn?', answer: 'December', picture: 'astrowheel.gif', hint: '     ' },
			{ qid: 11, question: 'What month is Aquarius?', answer: 'January', picture: 'astrowheel.gif', hint: '    ' },
			{ qid: 12, question: 'What month is Pisces?', answer: 'February', picture: 'astrowheel.gif', hint: ' ' }
		];
	};
	/* Zodiacal Planetary Glyphs */
	fac.ZodiacalPlanetaryGlyphs = function() {
		return [
			{ qid: 1, question: 'What is the name of planet 1?', answer: 'Sun', picture: '12PlanetGlyphs.gif', hint: 'none ' },
			{ qid: 2, question: 'What is the association of planet 1?', answer: 'ego', picture: '12PlanetGlyphs.gif', hint: 'none  ' },
			{ qid: 3, question: 'What is the name of planet 2?', answer: 'Moon', picture: '12PlanetGlyphs.gif', hint: 'none   ' },
			{ qid: 4, question: 'What is the association of planet 2?', answer: 'feelings', picture: '12PlanetGlyphs.gif', hint: 'none    ' },
			{ qid: 5, question: 'What is the name of planet 3?', answer: 'Mercury', picture: '12PlanetGlyphs.gif', hint: 'none     ' },
			{ qid: 6, question: 'What is the association of planet 3?', answer: 'Messenger', picture: '12PlanetGlyphs.gif', hint: 'none      ' },
			{ qid: 7, question: 'What is the name of planet 4?', answer: 'mars', picture: '12PlanetGlyphs.gif', hint: 'none       ' },
			{ qid: 8, question: 'What is the association of planet 4?', answer: 'Warrior', picture: '12PlanetGlyphs.gif', hint: 'none        ' },
			{ qid: 9, question: 'What is the name of planet 5?', answer: 'Jupiter', picture: '12PlanetGlyphs.gif', hint: 'none         ' },
			{ qid: 10, question: 'What is the association of planet 5?', answer: 'Growth', picture: '12PlanetGlyphs.gif', hint: 'none          ' },
			{ qid: 11, question: 'What is the name of planet 6?', answer: 'Saturn', picture: '12PlanetGlyphs.gif', hint: 'none           ' },
			{ qid: 12, question: 'What is the association of planet 6?', answer: 'limits', picture: '12PlanetGlyphs.gif', hint: 'none            ' },
			{ qid: 13, question: 'What is the name of planet 7?', answer: 'Neptune', picture: '12PlanetGlyphs.gif', hint: 'none             ' },
			{ qid: 14, question: 'What is the association of planet 7?', answer: 'Compassion', picture: '12PlanetGlyphs.gif', hint: 'none              ' },
			{ qid: 15, question: 'What is the name of planet 8?', answer: 'Pluto', picture: '12PlanetGlyphs.gif', hint: 'none               ' },
			{ qid: 16, question: 'What is the association of planet 8?', answer: 'Power', picture: '12PlanetGlyphs.gif', hint: 'none                ' },
			{ qid: 17, question: 'What is the name of planet 9?', answer: 'Chiron', picture: '12PlanetGlyphs.gif', hint: 'none                 ' },
			{ qid: 18, question: 'What is the association of planet 9?', answer: 'Wounded Healer', picture: '12PlanetGlyphs.gif', hint: 'none                  ' },
			{ qid: 19, question: 'What is the name of planet 10?', answer: 'Venus', picture: '12PlanetGlyphs.gif', hint: 'none                   ' },
			{ qid: 20, question: 'What is the association of planet 10?', answer: 'Love', picture: '12PlanetGlyphs.gif', hint: 'none                    ' },
			{ qid: 21, question: 'What is the name of planet 11?', answer: 'Uranus', picture: '12PlanetGlyphs.gif', hint: 'none                     ' },
			{ qid: 22, question: 'What is the associaiton of planet 11?', answer: 'Enlightener', picture: '12PlanetGlyphs.gif', hint: 'none                      ' },
			{ qid: 23, question: 'What is the name of planet 12?', answer: 'Retrograde', picture: '12PlanetGlyphs.gif', hint: 'none                       ' }
		];
	};
	/* Zodiacal Rulers (Traditional) */
	fac.ZodiacalRulersTraditional = function() {
		return [
			{ qid: 1, question: 'Which planet rules Aries?', answer: 'Mars', picture: '9Planets.gif', hint: '  ' },
			{ qid: 2, question: 'Which planet rules Taurus?', answer: 'Venus', picture: '9Planets.gif', hint: ' ' },
			{ qid: 3, question: 'Which planet rules Gemini?', answer: 'Mercury', picture: '9Planets.gif', hint: ' ' },
			{ qid: 4, question: 'Which planet rules Cancer?', answer: 'Moon', picture: '9Planets.gif', hint: ' ' },
			{ qid: 5, question: 'Which planet rules Leo?', answer: 'Sun', picture: '9Planets.gif', hint: ' ' },
			{ qid: 6, question: 'Which planet rules Virgo?', answer: 'Mercury', picture: '9Planets.gif', hint: ' ' },
			{ qid: 7, question: 'Which planet rules Libra?', answer: 'Venus', picture: '9Planets.gif', hint: ' ' },
			{ qid: 8, question: 'Which planet rules Scorpio?', answer: 'Mars', picture: '9Planets.gif', hint: ' ' },
			{ qid: 9, question: 'Which planet rules Sagittarius?', answer: 'Jupiter', picture: '9Planets.gif', hint: ' ' },
			{ qid: 10, question: 'Which planet rules Capricorn?', answer: 'Saturn', picture: '9Planets.gif', hint: ' ' },
			{ qid: 11, question: 'Which planet rules Aquarius?', answer: 'Saturn', picture: '9Planets.gif', hint: ' ' },
			{ qid: 12, question: 'Which planet rules Pisces?', answer: 'Jupiter', picture: '9Planets.gif', hint: ' ' }
		];
	};

	
	return fac;
});