import { FirebaseApp } from "@/lib/utils/firebase";
import { collection, getDocs, query, DocumentData } from "firebase/firestore";
import axios from "axios";

type Values = {
    name: string;
    email: string;
    content: string;
}

export class ProjectAPI {
    static async getProjects(): Promise<Array<{ id: string } & DocumentData>> {
        const response = await getDocs(query(collection(FirebaseApp.db, "projects")));
        return response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
    }

    static async submitContactForm(values: Values) {
        try {
            await axios.post("/api/contact", {
                name: values.name,
                email: values.email,
                message: values.content,
            })
        } catch (error) {
            console.log(error)
        }
    }
}