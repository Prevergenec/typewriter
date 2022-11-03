'use strict';

let delay = 60,
nextm = 0,
pos = 0,
message = ['First word', 'Second word', 'Third word', 'Fourth word'],
outOne = document.querySelector('.out_one');

function printWords(text, dir) {
    let typingtext = text.substring(0, pos);
    outOne.innerHTML = typingtext;
    pos += dir;
    
    if (pos > text.length) {
        setTimeout('printWords("'+text+'",'+(-dir)+')', delay * 40);
    } else {
		if(pos < 0) {
			if (++nextm >= message.length) {
				nextm = 0;
			}
	  
			text = message[nextm];
			dir = -dir;
		}
		
		setTimeout('printWords("'+text+'",'+dir+')', delay);
	}
}

printWords(message[0], 1);

// SECOND OPTION

const msg = ['Five word', 'Six word', 'Seven word', 'Eight word'],
	  htmlOut = document.querySelector('.out_two');
let line = 0,
	count = 0,
	out = '';

function typeLine() {

let interval = setTimeout(function () {
	out += msg[line][count];
	htmlOut.innerHTML = out;
	count++;

	if (count >= msg[line].length) {
		count = 0;
		line++;
		out = '';
		
		if (line == msg.length) {
			//clearTimeout(interval);
			//return true;
			line = 0;
			count = 0;
		}
	}
	typeLine();
	}, 200);
}

typeLine();
