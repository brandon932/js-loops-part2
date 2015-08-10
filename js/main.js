// add scripts
var students = ['joe','carl','rachel','derek','lily'];
$(document).on('ready', function() {
  console.log('sanity check!');
  for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
});
