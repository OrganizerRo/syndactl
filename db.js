app.factory("dbFactory", function ($http) {
	 var fac = {};
	 
	 fac.ZodiacalMonths = function () {
        return [{
            qid: 1,
            question: "What is you rname",
            answer: "jerome",
            picture: "12Glyphs.gif",
            hint: "",
            study: ""
        },
        {
            qid: 2,
            question: "How do you do",
            answer: "fine",
            picture: "12Glyphs.gif",
            hint: "",
            study: ""
        },
        {
            qid: 3,
            question: "Foot size",
            answer: "13",
            picture: "12Glyphs.gif",
            hint: "",
            study: ""
        },
        {
            qid: 4,
            question: "Pant Width",
            answer: "34",
            picture: "12Glyphs.gif",
            hint: "",
            study: ""
        },
        {
            qid: 5,
            question: "There is nothing here",
            answer: "ok",
            picture: "12Glyphs.gif",
            hint: "",
            study: ""
        }];
    };
	
	return fac;
});