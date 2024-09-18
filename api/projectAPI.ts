import { FirebaseApp } from "@/lib/utils/firebase";
import { collection, getDocs, query, DocumentData } from "firebase/firestore";
import axios from "axios";

type Values = {
    name: string;
    email: string;
    content: string;
}

type ApiProject = {
    id?: string;
    title: string;
    description: Record<string, string>;
    url: string;
    technologies: string[];
    images: string[];
};

export class ProjectAPI {
    static async getProjects(): Promise<ApiProject[]> {
        FirebaseApp.init();

        if (!FirebaseApp.db) {
            throw new Error("Firebase DB is not initialized");
        }

        const response = await getDocs(query(collection(FirebaseApp.db, "projects")));
        return response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data() as ApiProject
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