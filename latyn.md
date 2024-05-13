---
layout: page
title: Латынша жазу
permalink: /latyn/
---

<main>
    <div class="container">
    <div class="result-container">
        <h2>Қазақша жазу:</h2>
        <textarea id="cyrillic-output" rows="10" cols="100" readonly></textarea>
<button class="copy-button" onclick="copyText()">Copy</button>
    </div>
    <div class="form-container">
        <h2>Латынша жазу орны:</h2>
        <textarea id="latin-input" rows="10" cols="100" placeholder="Осында латынша жазыңыз..."></textarea>

    </div>
</div>
</main>
<script>
    $(document).ready(function() {
        // Mapping of Latin to Cyrillic letters
        const conversionMap = {
            'sh': 'ш', 'Sh': 'Ш',
	    'ch': 'ч', 'Ch': 'Ч',
            'zh': 'ж', 'Zh': 'Ж',
	    'kh': 'х', 'Kh': 'Х',
	    'ts': 'ц', 'Ts': 'Ц',
	    'ya': 'я', 'Ya': 'Я',
	    'iu': 'ю', 'Iu': 'Ю','yu': 'ю', 'Yu': 'Ю',
            "n'": 'ң',"N'": 'Ң', 
            "a'": 'ә', "A'": 'Ә',
	    'io': 'ё', 'Io': 'Ё','yo': 'ё', 'Yo': 'Ё',
	     "e'": 'э', "E'": 'Э',
	    "o'": 'ө', "O'": 'Ө',
            "g'": 'ғ', "G'": 'Ғ',
            "u'": 'ү', "U'": 'Ү',
            'u-': 'ұ', "U-": 'Ұ',
	    "i'": 'і', "I'": 'І',
            'i-': 'й', "I-": 'Й',
	    "h'": 'һ',"_'": 'ъ',"y'":'ь',
            'A': 'А', 'B': 'Б', 'C': 'Ц', 'D': 'Д', 'E': 'Е', 'F': 'Ф', 'G': 'Г', 'H': 'Х',
            'I': 'И', 'J': 'Ж', 'K': 'К', 'L': 'Л', 'M': 'М', 'N': 'Н', 'O': 'О', 'P': 'П',
            'Q': 'Қ', 'R': 'Р', 'S': 'С', 'T': 'Т', 'U': 'У', 'V': 'В', 'Z': 'З',
            'a': 'а', 'b': 'б', 'c': 'ц', 'd': 'д', 'e': 'е', 'f': 'ф', 'g': 'г', 'h': 'х',
            'i': 'и', 'j': 'ж', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
            'q': 'қ', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'v': 'в', 'z': 'з',
            'W': 'Ш', 'X': 'Х', 'Y': 'Ы', 'w': 'ш', 'x': 'х', 'y': 'ы', 
        };

        $('#latin-input').on('input', function() {
            const latinText = $(this).val();
            let cyrillicText = '';

            for (let i = 0; i < latinText.length; i++) {
                const letter = latinText[i];
                let combination = '';

                // Check for combination letters
                if (letter === 's' && latinText[i + 1] === 'h') {
                    combination = 'sh';
                } else if (letter === 'S' && latinText[i + 1] === 'h') {
                    combination = 'Sh';
                } else if (letter === 'C' && latinText[i + 1] === 'h') {
                    combination = 'Ch';
                } else if (letter === 'c' && latinText[i + 1] === 'h') {
                    combination = 'ch';
		} else if (letter === 't' && latinText[i + 1] === 's') {
                    combination = 'ts';
                } else if (letter === 'T' && latinText[i + 1] === 's') {
                    combination = 'Ts';
		
		} else if (letter === 'y' && latinText[i + 1] === 'a') {
                    combination = 'ya';
                } else if (letter === 'Y' && latinText[i + 1] === 'a') {
                    combination = 'Ya';

		} else if (letter === 'i' && latinText[i + 1] === 'u') {
                    combination = 'iu';
                } else if (letter === 'I' && latinText[i + 1] === 'u') {
                    combination = 'Iu';
		} else if (letter === 'y' && latinText[i + 1] === 'u') {
                    combination = 'yu';
                } else if (letter === 'Y' && latinText[i + 1] === 'u') {
                    combination = 'Yu';
		} else if (letter === 'i' && latinText[i + 1] === 'o') {
                    combination = 'io';
                } else if (letter === 'I' && latinText[i + 1] === 'o') {
                    combination = 'Io';
		} else if (letter === 'y' && latinText[i + 1] === 'o') {
                    combination = 'yo';
                } else if (letter === 'Y' && latinText[i + 1] === 'o') {
                    combination = 'Yo';
		} else if (letter === 'h' && latinText[i + 1] === "'") {
                    combination = "h'";
		} else if (letter === '_' && latinText[i + 1] === "'") {
                    combination = "_'";
		} else if (letter === '_' && latinText[i + 1] === '"') {
                    combination = '_"';
                } else if (letter === 'n' && latinText[i + 1] === "'") {
                    combination = "n'";
                } else if (letter === 'N' && latinText[i + 1] === "'") {
                    combination = "N'";
		 } else if (letter === 'e' && latinText[i + 1] === "'") {
                    combination = "e'";
                } else if (letter === 'E' && latinText[i + 1] === "'") {
                    combination = "E'";
                } else if (letter === 'a' && latinText[i + 1] === "'") {
                    combination = "a'";
                } else if (letter === 'A' && latinText[i + 1] === "'") {
                    combination = "A'";
		} else if (letter === 'o' && latinText[i + 1] === "'") {
                    combination = "o'";
                } else if (letter === 'O' && latinText[i + 1] === "'") {
                    combination = "O'";
                } else if (letter === 'g' && latinText[i + 1] === "'") {
                    combination = "g'";
                } else if (letter === 'G' && latinText[i + 1] === "'") {
                    combination = "G'";
                } else if (letter === 'u' && latinText[i + 1] === "'") {
                    combination = "u'";
                } else if (letter === 'U' && latinText[i + 1] === "'") {
                    combination = "U'";
                } else if (letter === 'u' && latinText[i + 1] === "-") {
                    combination = "u-";
                } else if (letter === 'U' && latinText[i + 1] === "-") {
                    combination = "U-";
                } else if (letter === 'z' && latinText[i + 1] === "h") {
                    combination = "zh";
                } else if (letter === 'Z' && latinText[i + 1] === "h") {
                    combination = "Zh";
                } else if (letter === 'k' && latinText[i + 1] === "h") {
                    combination = "kh";
                } else if (letter === 'K' && latinText[i + 1] === "h") {
                    combination = "Kh";
		} else if (letter === '_' && latinText[i + 1] === "'") {
                    combination = "_'";
		} else if (letter === 'y' && latinText[i + 1] === "'") {
                    combination = "y'";

                } else if (letter === 'i' && latinText[i + 1] === "'") {
                    combination = "i'";
                } else if (letter === 'I' && latinText[i + 1] === "'") {
                    combination = "I'";
                } else if (letter === 'i' && latinText[i + 1] === "-") {
                    combination = "i-";
                } else if (letter === 'I' && latinText[i + 1] === "-") {
                    combination = "I-";
                } 

                // Check if the combination exists in the conversion map
                if (combination in conversionMap) {
                    cyrillicText += conversionMap[combination];
                    i++; // Skip the next character in the iteration
                } else {
                    // Check if the letter exists in the conversion map
                    if (letter in conversionMap) {
                        cyrillicText += conversionMap[letter];
                    } else {
                        cyrillicText += letter;
                    }
                }
            }

            $('#cyrillic-output').text(cyrillicText);
        });

$('#latin-input').on('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        const input = $(this);
        const inputValue = input.val();

        // Append the input value with a new line to the existing content
        input.val(inputValue + '\n');
    }
});

    });
function copyText() {
        const outputTextarea = document.getElementById('cyrillic-output');
        outputTextarea.select();
        document.execCommand('copy');
    }
</script>
