var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en';
var file = 'resources/translations/' + lang + '.js';

document.write('<script src="' + file + '"></script>');