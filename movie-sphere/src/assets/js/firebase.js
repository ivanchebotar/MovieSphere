import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA78mddDbfaIopTZ4XwlswPlTRqM_lcZEI",
  authDomain: "moviesphere-3dc11.firebaseapp.com",
  projectId: "moviesphere-3dc11",
  storageBucket: "moviesphere-3dc11.firebasestorage.app",
  messagingSenderId: "140917488224",
  appId: "1:140917488224:web:24098adad31e5392502105"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
