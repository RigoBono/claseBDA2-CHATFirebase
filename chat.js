(function() {
    // Initialize Firebase


firebase.initializeApp(config);
const obj = firebase.database().ref().child("mensajes").child("amora");
obj.on("value", snap => {
      console.log(JSON.stringify(snap.val(), null, 3));
  });
}());
