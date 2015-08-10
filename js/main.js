// add scripts
var students = ['joe','carl','rachel','derek','lily'];
$(document).on('ready', function() {
  // for (var i = 0; i < students.length; i++) {
  //   console.log(students[i]);
  // }
  // for (var i = 0; i < 4 ; i++) {
  //    console.log(students[i]);
  // }
  // for (var i = 0; i < students.length; i+=2) {
  //   console.log(students[i]);
  // }
  // for (var i = students.length; i >= 0 ; i--) {
  //   console.log(students[i]);
  // }
  for (var i = 0; i < students.length; i++) {
    if (i === 0 || i === students.length -1){
      console.log(students[i]);
    }else{
      console.log(students[i]);
      console.log(students[i]);
    }
  }

});
