if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
    apiKey: "AIzaSyBJonoqm9dtcFVh7JAd_ajLahkELF_rXws",
	authDomain: "photojpo-74487.firebaseapp.com",
    databaseURL: "https://photojpo-74487.firebaseio.com",
    projectId: "photojpo-74487",
    storageBucket: "photojpo-74487.appspot.com",
    messagingSenderId: "185975663716"
});
