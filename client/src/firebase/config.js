import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
    apiKey: "AIzaSyBACYkgcToZWhKq2MHy81N312gZ-7rXAKs",
    authDomain: "clothing-store-6e334.firebaseapp.com",
    projectId: "clothing-store-6e334",
    storageBucket: "clothing-store-6e334.appspot.com",
    messagingSenderId: "779045393264",
    appId: "1:779045393264:web:3cfbeb0e5a1c10ab5d35b5"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}