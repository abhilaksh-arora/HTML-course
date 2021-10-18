(function () {

var names = ["Jam", "Ram", "Harit", "Aakash", "Jatin", "Rohan", "Mohan", "Shyam", "Laksh", "Abhi"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
