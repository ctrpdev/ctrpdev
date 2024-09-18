import { firebaseConfig } from "@/config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

class FirebaseApp{
    static firebaseApp: any;
    static db: any;

    static init(){
        if(!this.firebaseApp){
            this.firebaseApp = initializeApp(firebaseConfig);
            this.db = getFirestore(this.firebaseApp);
        }
    }
}

export { FirebaseApp };