import { firebaseConfig } from "@/config";
import { initializeApp, FirebaseApp as FirebaseAppType } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

class FirebaseApp {
    static firebaseApp: FirebaseAppType | null = null;
    static db: Firestore | null = null;

    static init() {
        if (!this.firebaseApp) {
            this.firebaseApp = initializeApp(firebaseConfig);
            this.db = getFirestore(this.firebaseApp);
        }
    }
}

export { FirebaseApp };
