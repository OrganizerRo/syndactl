app.factory("dbFactory", function ($http) {
  var fac = {};

// True of the image is 2 images in 1 by doubling the width, with the right side having the answers.
fac.HasImageAnswers = function() {
 return false;
};

/**

// Menu Links 
<div ng-click="$parent.ShowQuizByViewName('Brass_Ranges')">Brass_Ranges</div>
<div ng-click="$parent.ShowQuizByViewName('FifthsCircle')">FifthsCircle</div>
<div ng-click="$parent.ShowQuizByViewName('InstrumentRanges')">InstrumentRanges</div>
<div ng-click="$parent.ShowQuizByViewName('KeyRecognition')">KeyRecognition</div>
<div ng-click="$parent.ShowQuizByViewName('KeyRecognition_Major')">KeyRecognition_Major</div>
<div ng-click="$parent.ShowQuizByViewName('KeyRecognition_Minor')">KeyRecognition_Minor</div>
<div ng-click="$parent.ShowQuizByViewName('String_Ranges')">String_Ranges</div>
<div ng-click="$parent.ShowQuizByViewName('VocalRanges')">VocalRanges</div>
<div ng-click="$parent.ShowQuizByViewName('WoodWind_Ranges')">WoodWind_Ranges</div>

// Menu json Handler

case 'Brass_Ranges' :{
                $scope.db = dbFactory.Brass_Ranges();
                break;
            }
case 'FifthsCircle' :{
                $scope.db = dbFactory.FifthsCircle();
                break;
            }
case 'InstrumentRanges' :{
                $scope.db = dbFactory.InstrumentRanges();
                break;
            }
case 'KeyRecognition' :{
                $scope.db = dbFactory.KeyRecognition();
                break;
            }
case 'KeyRecognition_Major' :{
                $scope.db = dbFactory.KeyRecognition_Major();
                break;
            }
case 'KeyRecognition_Minor' :{
                $scope.db = dbFactory.KeyRecognition_Minor();
                break;
            }
case 'String_Ranges' :{
                $scope.db = dbFactory.String_Ranges();
                break;
            }
case 'VocalRanges' :{
                $scope.db = dbFactory.VocalRanges();
                break;
            }
case 'WoodWind_Ranges' :{
                $scope.db = dbFactory.WoodWind_Ranges();
                break;
            }

**/
/* Brass_Ranges */
/* 
	case 'Brass_Ranges' :{
		$scope.db = dbFactory.Brass_Ranges();
		break;
	}
*/
fac.Brass_Ranges = function() {
	return [
		{ qid: 1, question: 'Tuba Lower', answer: 'd1', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 2, question: 'Tuba Upper', answer: 'f4', picture: 'Orchestral_Range.gif', hint: 'f' },
		{ qid: 3, question: 'Trombone Lower', answer: 'e2', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 4, question: 'Trombone Upper', answer: 'f5', picture: 'Orchestral_Range.gif', hint: 'f' },
		{ qid: 5, question: 'French Horn Lower', answer: 'fs2', picture: 'Orchestral_Range.gif', hint: 'fs' },
		{ qid: 6, question: 'French Horn Upper', answer: 'c6', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 7, question: 'Trumpet Lower', answer: 'fs3', picture: 'Orchestral_Range.gif', hint: 'fs' },
		{ qid: 8, question: 'Trumpet Upper', answer: 'd6', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 9, question: 'Bass Sax Lower', answer: 'ab1', picture: 'Orchestral_Range.gif', hint: 'ab' },
		{ qid: 10, question: 'Bass Sax Upper', answer: 'eb4', picture: 'Orchestral_Range.gif', hint: 'eb' },
		{ qid: 11, question: 'Baritone Sax Lower', answer: 'db2', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 12, question: 'Baritone Sax Upper', answer: 'eb5', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 13, question: 'Tenor Sax Lower', answer: 'ab2', picture: 'Orchestral_Range.gif', hint: 'ab' },
		{ qid: 14, question: 'Tenor Sax Upper', answer: 'eb5', picture: 'Orchestral_Range.gif', hint: 'eb' },
		{ qid: 15, question: 'Alto Sax Lower', answer: 'db3', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 16, question: 'Alto Sax Upper', answer: 'ab5', picture: 'Orchestral_Range.gifOrchestral_Range.gif', hint: 'a' },
		{ qid: 17, question: 'Sop Sax Lower', answer: 'f3', picture: 'Orchestral_Range.gif', hint: 'f' },
		{ qid: 18, question: 'Sop Sax Upper', answer: 'e6', picture: 'Orchestral_Range.gif', hint: 'e' }
	];
};
/* FifthsCircle */
/* 
	case 'FifthsCircle' :{
		$scope.db = dbFactory.FifthsCircle();
		break;
	}
*/
fac.FifthsCircle = function() {
	return [
	];
};
/* InstrumentRanges */
/* 
	case 'InstrumentRanges' :{
		$scope.db = dbFactory.InstrumentRanges();
		break;
	}
*/
fac.InstrumentRanges = function() {
	return [
		{ qid: 1, question: 'Bass Lower', answer: 'c2', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 2, question: 'Bass Upper', answer: 'c5', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 3, question: 'Cello Lower', answer: 'c2', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 4, question: 'Cello Upper', answer: 'c6', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 5, question: 'Viola Lower', answer: 'e3', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 6, question: 'Viola Upper', answer: 'e6', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 7, question: 'Violin Lower', answer: 'g3', picture: 'Orchestral_Range.gif', hint: 'g' },
		{ qid: 8, question: 'Violin Upper', answer: 'a7', picture: 'Orchestral_Range.gif', hint: 'a' },
		{ qid: 9, question: 'Tuba Lower', answer: 'd1', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 10, question: 'Tuba Upper', answer: 'f4', picture: 'Orchestral_Range.gif', hint: 'f' },
		{ qid: 11, question: 'Trombone Lower', answer: 'e2', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 12, question: 'Trombone Upper', answer: 'f5', picture: 'Orchestral_Range.gif', hint: 'f' },
		{ qid: 13, question: 'French Horn Lower', answer: 'fs2', picture: 'Orchestral_Range.gif', hint: 'fs' },
		{ qid: 14, question: 'French Horn Upper', answer: 'c6', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 15, question: 'Trumpet Lower', answer: 'fs3', picture: 'Orchestral_Range.gif', hint: 'fs' },
		{ qid: 16, question: 'Trumpet Upper', answer: 'd6', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 17, question: 'Basson Lower', answer: 'bb1', picture: 'Orchestral_Range.gif', hint: 'bb' },
		{ qid: 18, question: 'Basson Upper', answer: 'eb5', picture: 'Orchestral_Range.gif', hint: 'eb' },
		{ qid: 19, question: 'English Horn Lower', answer: 'b3', picture: 'Orchestral_Range.gif', hint: 'b' },
		{ qid: 20, question: 'English Horn Upper', answer: 'g6', picture: 'Orchestral_Range.gif', hint: 'g' },
		{ qid: 21, question: 'Oboe Lower', answer: 'eb3', picture: 'Orchestral_Range.gif', hint: 'eb' },
		{ qid: 22, question: 'Oboe Upper', answer: 'a6', picture: 'Orchestral_Range.gif', hint: 'a' },
		{ qid: 23, question: 'Bass Clarinet Lower', answer: 'eb3', picture: 'Orchestral_Range.gif', hint: 'eb' },
		{ qid: 24, question: 'Bass Clarinet Upper', answer: 'g6', picture: 'Orchestral_Range.gif', hint: 'g' },
		{ qid: 25, question: 'Alto Clarinet Lower', answer: 'd2', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 26, question: 'Alto Clarinet Upper', answer: 'd5', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 27, question: 'Sop Clarinet Lower', answer: 'g3', picture: 'Orchestral_Range.gif', hint: 'g' },
		{ qid: 28, question: 'Sop Clarinet Upper', answer: 'd8', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 29, question: 'Bass Sax Lower', answer: 'ab1', picture: 'Orchestral_Range.gif', hint: 'ab' },
		{ qid: 30, question: 'Bass Sax Upper', answer: 'eb4', picture: 'Orchestral_Range.gif', hint: 'eb' },
		{ qid: 31, question: 'Baritone Sax Lower', answer: 'db2', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 32, question: 'Baritone Sax Upper', answer: 'eb5', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 33, question: 'Tenor Sax Lower', answer: 'ab2', picture: 'Orchestral_Range.gif', hint: 'ab' },
		{ qid: 34, question: 'Tenor Sax Upper', answer: 'eb5', picture: 'Orchestral_Range.gif', hint: 'eb' },
		{ qid: 35, question: 'Alto Sax Lower', answer: 'db3', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 36, question: 'Alto Sax Upper', answer: 'ab5', picture: 'Orchestral_Range.gifOrchestral_Range.gif', hint: 'a' },
		{ qid: 37, question: 'Sop Sax Lower', answer: 'f3', picture: 'Orchestral_Range.gif', hint: 'f' },
		{ qid: 38, question: 'Sop Sax Upper', answer: 'e6', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 39, question: 'Flute Lower', answer: 'c4', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 40, question: 'Flute Upper', answer: 'd7', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 41, question: 'Piccolo Lower', answer: 'd4', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 42, question: 'Piccolo Upper', answer: 'c4', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 43, question: 'Chimes Lower', answer: 'c4', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 44, question: 'Chimes Upper', answer: 'f5', picture: 'Orchestral_Range.gif', hint: 'f' },
		{ qid: 45, question: 'Xylophone Lower', answer: 'f3', picture: 'Orchestral_Range.gif', hint: 'f' },
		{ qid: 46, question: 'Xylophone Upper', answer: 'c7', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 47, question: 'Guitar Lower', answer: 'e3', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 48, question: 'Guitar Upper', answer: 'e6', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 49, question: 'Accordion Lower', answer: '', picture: 'Orchestral_Range.gif', hint: '' },
		{ qid: 50, question: 'Accordion Upper', answer: '', picture: 'Orchestral_Range.gif', hint: '' },
		{ qid: 51, question: 'Harp Lower', answer: 'cb1', picture: 'Orchestral_Range.gif', hint: 'cb' },
		{ qid: 52, question: 'Harp Upper', answer: 'fs7', picture: 'Orchestral_Range.gif', hint: 'fs' },
		{ qid: 53, question: 'Timpani Lower', answer: 'f2', picture: 'Orchestral_Range.gif', hint: '' },
		{ qid: 54, question: 'Timpani Upper', answer: 'f3', picture: 'Orchestral_Range.gif', hint: '' },
		{ qid: 55, question: 'ContraBasson Lower', answer: 'eb1', picture: 'Orchestral_Range.gifOrchestral_Range.gif', hint: 'eb' },
		{ qid: 56, question: 'ContraBasson Upper', answer: 'bb4', picture: 'Orchestral_Range.gif', hint: 'bb' }
	];
};
/* KeyRecognition */
/* 
	case 'KeyRecognition' :{
		$scope.db = dbFactory.KeyRecognition();
		break;
	}
*/
fac.KeyRecognition = function() {
	return [
		{ qid: 1, question: 'What minor Key is this ?', answer: 'd', picture: 'Key_Signature_Flashcards_page2_image2.jpg ', hint: ' ' },
		{ qid: 2, question: 'What minor Key is this ?', answer: 'g', picture: 'Key_Signature_Flashcards_page2_image3.jpg', hint: '' },
		{ qid: 3, question: 'What minor Key is this ?', answer: 'c', picture: 'Key_Signature_Flashcards_page2_image4.jpg', hint: '' },
		{ qid: 4, question: 'What minor Key is this ?', answer: 'f', picture: 'Key_Signature_Flashcards_page2_image5.jpg', hint: '' },
		{ qid: 5, question: 'What minor Key is this ?', answer: 'b flat', picture: 'Key_Signature_Flashcards_page2_image6.jpg', hint: '' },
		{ qid: 6, question: 'What minor Key is this ?', answer: 'e flat', picture: 'Key_Signature_Flashcards_page2_image7.jpg', hint: '' },
		{ qid: 7, question: 'What minor Key is this ?', answer: 'a flat', picture: 'Key_Signature_Flashcards_page2_image8.jpg', hint: '' },
		{ qid: 8, question: 'What major Key is this ?', answer: 'f', picture: 'Key_Signature_Flashcards_page2_image2.jpg', hint: '' },
		{ qid: 9, question: 'What major Key is this ?', answer: 'b flat', picture: 'Key_Signature_Flashcards_page2_image3.jpg', hint: '' },
		{ qid: 10, question: 'What major Key is this ?', answer: 'e flat', picture: 'Key_Signature_Flashcards_page2_image4.jpg', hint: ' ' },
		{ qid: 11, question: 'What major Key is this ?', answer: 'a flat', picture: 'Key_Signature_Flashcards_page2_image5.jpg', hint: '' },
		{ qid: 12, question: 'What major Key is this ?', answer: 'd flat', picture: 'Key_Signature_Flashcards_page2_image6.jpg', hint: '' },
		{ qid: 13, question: 'What major Key is this ?', answer: 'g flat', picture: 'Key_Signature_Flashcards_page2_image7.jpg', hint: '' },
		{ qid: 14, question: 'What major Key is this ?', answer: 'c flat', picture: 'Key_Signature_Flashcards_page2_image8.jpg', hint: '' },
		{ qid: 15, question: 'What minor Key is this ?', answer: 'a', picture: 'Key_Signature_Flashcards_page2_image1.jpg', hint: '' },
		{ qid: 16, question: 'What major Key is this ?', answer: 'c', picture: 'Key_Signature_Flashcards_page2_image1.jpg', hint: '' }
	];
};
/* KeyRecognition_Major */
/* 
	case 'KeyRecognition_Major' :{
		$scope.db = dbFactory.KeyRecognition_Major();
		break;
	}
*/
fac.KeyRecognition_Major = function() {
	return [
		{ qid: 1, question: 'What major Key is this ?', answer: 'c', picture: 'Key_Signature_Flashcards_page2_image1.jpg', hint: '' },
		{ qid: 2, question: 'What major Key is this ?', answer: 'f', picture: 'Key_Signature_Flashcards_page2_image2.jpg', hint: '' },
		{ qid: 3, question: 'What major Key is this ?', answer: 'b flat', picture: 'Key_Signature_Flashcards_page2_image3.jpg', hint: '' },
		{ qid: 4, question: 'What major Key is this ?', answer: 'e flat', picture: 'Key_Signature_Flashcards_page2_image4.jpg', hint: ' ' },
		{ qid: 5, question: 'What major Key is this ?', answer: 'a flat', picture: 'Key_Signature_Flashcards_page2_image5.jpg', hint: '' },
		{ qid: 6, question: 'What major Key is this ?', answer: 'd flat', picture: 'Key_Signature_Flashcards_page2_image6.jpg', hint: '' },
		{ qid: 7, question: 'What major Key is this ?', answer: 'g flat', picture: 'Key_Signature_Flashcards_page2_image7.jpg', hint: '' },
		{ qid: 8, question: 'What major Key is this ?', answer: 'c flat', picture: 'Key_Signature_Flashcards_page2_image8.jpg', hint: '' },
		{ qid: 9, question: 'What major Key is this ?', answer: 'g', picture: 'Key_Signature_Flashcards_page2_image9.jpg', hint: '' },
		{ qid: 10, question: 'What major Key is this ?', answer: 'd', picture: 'Key_Signature_Flashcards_page2_image10.jpg', hint: '' },
		{ qid: 11, question: 'What major Key is this ?', answer: 'a', picture: 'Key_Signature_Flashcards_page2_image11.jpg', hint: '' },
		{ qid: 12, question: 'What major Key is this ?', answer: 'e', picture: 'Key_Signature_Flashcards_page2_image12.jpg', hint: '' },
		{ qid: 13, question: 'What major Key is this ?', answer: 'b', picture: 'Key_Signature_Flashcards_page2_image13.jpg', hint: '' },
		{ qid: 14, question: 'What major Key is this ?', answer: 'f sharp', picture: 'Key_Signature_Flashcards_page2_image14.jpg', hint: '' },
		{ qid: 15, question: 'What major Key is this ?', answer: 'c sharp', picture: 'Key_Signature_Flashcards_page2_image15.jpg', hint: '' },
		{ qid: 16, question: 'What sharp major Key is this ?', answer: 'c', picture: 'Key_Signature_Flashcards_page2_image16.jpg', hint: '' }
	];
};
/* KeyRecognition_Minor */
/* 
	case 'KeyRecognition_Minor' :{
		$scope.db = dbFactory.KeyRecognition_Minor();
		break;
	}
*/
fac.KeyRecognition_Minor = function() {
	return [
		{ qid: 1, question: 'What minor Key is this ?', answer: 'a', picture: 'Key_Signature_Flashcards_page2_image1.jpg', hint: '' },
		{ qid: 2, question: 'What minor Key is this ?', answer: 'd', picture: 'Key_Signature_Flashcards_page2_image2.jpg ', hint: ' ' },
		{ qid: 3, question: 'What minor Key is this ?', answer: 'g', picture: 'Key_Signature_Flashcards_page2_image3.jpg', hint: '' },
		{ qid: 4, question: 'What minor Key is this ?', answer: 'c', picture: 'Key_Signature_Flashcards_page2_image4.jpg', hint: '' },
		{ qid: 5, question: 'What minor Key is this ?', answer: 'f', picture: 'Key_Signature_Flashcards_page2_image5.jpg', hint: '' },
		{ qid: 6, question: 'What minor Key is this ?', answer: 'b flat', picture: 'Key_Signature_Flashcards_page2_image6.jpg', hint: '' },
		{ qid: 7, question: 'What minor Key is this ?', answer: 'e flat', picture: 'Key_Signature_Flashcards_page2_image7.jpg', hint: '' },
		{ qid: 8, question: 'What minor Key is this ?', answer: 'a flat', picture: 'Key_Signature_Flashcards_page2_image8.jpg', hint: '' },
		{ qid: 10, question: 'What minor Key is this ?', answer: 'e', picture: 'Key_Signature_Flashcards_page2_image9.jpg', hint: '' },
		{ qid: 11, question: 'What minor Key is this ?', answer: 'b', picture: 'Key_Signature_Flashcards_page2_image10.jpg', hint: '' },
		{ qid: 12, question: 'What minor Key is this ?', answer: 'f sharp', picture: 'Key_Signature_Flashcards_page2_image11.jpg', hint: '' },
		{ qid: 13, question: 'What minor Key is this ?', answer: 'c sharp', picture: 'Key_Signature_Flashcards_page2_image12.jpg', hint: '' },
		{ qid: 14, question: 'What minor Key is this ?', answer: 'g sharp', picture: 'Key_Signature_Flashcards_page2_image13.jpg', hint: '' },
		{ qid: 15, question: 'What minor Key is this ?', answer: 'd sharp', picture: 'Key_Signature_Flashcards_page2_image14.jpg', hint: '' },
		{ qid: 16, question: 'What minor Key is this ?', answer: 'a sharp', picture: 'Key_Signature_Flashcards_page2_image15.jpg', hint: '' },
		{ qid: 17, question: 'What sharp minor Key is this ?', answer: 'a sharp', picture: 'Key_Signature_Flashcards_page2_image16.jpg', hint: '' }
	];
};
/* String_Ranges */
/* 
	case 'String_Ranges' :{
		$scope.db = dbFactory.String_Ranges();
		break;
	}
*/
fac.String_Ranges = function() {
	return [
		{ qid: 1, question: 'Bass Lower', answer: 'c2', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 2, question: 'Bass Upper', answer: 'c5', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 3, question: 'Cello Lower', answer: 'c2', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 4, question: 'Cello Upper', answer: 'c6', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 5, question: 'Viola Lower', answer: 'e3', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 6, question: 'Viola Upper', answer: 'e6', picture: 'Orchestral_Range.gif', hint: 'e' },
		{ qid: 7, question: 'Violin Lower', answer: 'g3', picture: 'Orchestral_Range.gif', hint: 'g' },
		{ qid: 8, question: 'Violin Upper', answer: 'a7', picture: 'Orchestral_Range.gif', hint: 'a' }
	];
};
/* VocalRanges */
/* 
	case 'VocalRanges' :{
		$scope.db = dbFactory.VocalRanges();
		break;
	}
*/
fac.VocalRanges = function() {
	return [
		{ qid: 1, question: 'Bass Lower', answer: 'd2', picture: 'Orchestral_Range.gif', hint: 'D' },
		{ qid: 2, question: 'Bass Upper', answer: 'd4', picture: 'Orchestral_Range.gif', hint: 'D' },
		{ qid: 3, question: 'Baritone Lower', answer: 'a2', picture: 'Orchestral_Range.gif', hint: 'a' },
		{ qid: 4, question: 'Baritone Upper', answer: 'g4', picture: 'Orchestral_Range.gif', hint: 'g' },
		{ qid: 5, question: 'Tenor Lower', answer: 'c3', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 6, question: 'Tenor Upper', answer: 'a4', picture: 'Orchestral_Range.gif', hint: 'a' },
		{ qid: 7, question: 'Alto Lower', answer: 'f3', picture: 'Orchestral_Range.gif', hint: 'f' },
		{ qid: 8, question: 'Alto Upper', answer: 'd5', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 9, question: 'Soprano Lower', answer: 'c4', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 10, question: 'Saprano Upper', answer: 'a5', picture: 'Orchestral_Range.gif', hint: 'a' }
	];
};
/* WoodWind_Ranges */
/* 
	case 'WoodWind_Ranges' :{
		$scope.db = dbFactory.WoodWind_Ranges();
		break;
	}
*/
fac.WoodWind_Ranges = function() {
	return [
		{ qid: 1, question: 'Basson Lower', answer: 'bb1', picture: 'Orchestral_Range.gif', hint: 'bb' },
		{ qid: 2, question: 'Basson Upper', answer: 'eb5', picture: 'Orchestral_Range.gif', hint: 'eb' },
		{ qid: 3, question: 'English Horn Lower', answer: 'b3', picture: 'Orchestral_Range.gif', hint: 'b' },
		{ qid: 4, question: 'English Horn Upper', answer: 'g6', picture: 'Orchestral_Range.gif', hint: 'g' },
		{ qid: 5, question: 'Oboe Lower', answer: 'eb3', picture: 'Orchestral_Range.gif', hint: 'eb' },
		{ qid: 6, question: 'Oboe Upper', answer: 'a6', picture: 'Orchestral_Range.gif', hint: 'a' },
		{ qid: 7, question: 'Bass Clarinet Lower', answer: 'eb3', picture: 'Orchestral_Range.gif', hint: 'eb' },
		{ qid: 8, question: 'Bass Clarinet Upper', answer: 'g6', picture: 'Orchestral_Range.gif', hint: 'g' },
		{ qid: 9, question: 'Alto Clarinet Lower', answer: 'd2', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 10, question: 'Alto Clarinet Upper', answer: 'd5', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 11, question: 'Sop Clarinet Lower', answer: 'g3', picture: 'Orchestral_Range.gif', hint: 'g' },
		{ qid: 12, question: 'Sop Clarinet Upper', answer: 'd8', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 13, question: 'Flute Lower', answer: 'c4', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 14, question: 'Flute Upper', answer: 'd7', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 15, question: 'Piccolo Lower', answer: 'd4', picture: 'Orchestral_Range.gif', hint: 'd' },
		{ qid: 16, question: 'Piccolo Upper', answer: 'c4', picture: 'Orchestral_Range.gif', hint: 'c' },
		{ qid: 17, question: 'ContraBasson Lower', answer: 'eb1', picture: 'Orchestral_Range.gifOrchestral_Range.gif', hint: 'eb' },
		{ qid: 18, question: 'ContraBasson Upper', answer: 'bb4', picture: 'Orchestral_Range.gif', hint: 'bb' }
	];
};
 return fac;
});
