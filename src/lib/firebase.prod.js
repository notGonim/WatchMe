import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../fixtures/seed';



const config = {

    apiKey: "AIzaSyBAIi5Hq7Iu_m41JxzLcSjQbo4_WydIm14",
    authDomain: "watchme-ce14f.firebaseapp.com",
    projectId: "watchme-ce14f",
    storageBucket: "watchme-ce14f.appspot.com",
    messagingSenderId: "519274580183",
    appId: "1:519274580183:web:bdce54c12af39610324892"

};


const firebase = Firebase.initializeApp(config)
//Dont Uncomment the seedDatabase function coz now you would have a duplicated data
//seedDatabase(firebase) 



export { firebase }


