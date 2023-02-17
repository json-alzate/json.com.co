import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

// Configurar la aplicación de Firebase
const firebaseConfig = {
    // Tu configuración de Firebase aquí
    apiKey: "AIzaSyAPkHq7trfx6AJgSETtSNFb3xW93kCzjog",
    authDomain: "jheison-55a5e.firebaseapp.com",
    databaseURL: "https://jheison-55a5e.firebaseio.com",
    projectId: "jheison-55a5e",
    storageBucket: "jheison-55a5e.appspot.com",
    messagingSenderId: "1044854540286",
    appId: "1:1044854540286:web:88474011a06e974317e2af"
};
const app = initializeApp(firebaseConfig);

// Obtener una instancia de Firestore
const db = getFirestore(app);

// Escuchar el evento de envío del formulario
document.getElementById("submit-form").addEventListener("click", async function (event) {
    event.preventDefault(); // Evita la recarga de la página

    // Ocultar el botón de envío
    document.getElementById("submit-form").style.display = "none";
    // Obtener los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Guardar los datos en Firestore
    try {
        const docRef = await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            message: message,
            date: new Date().getTime()
        });
        // console.log("Document written with ID: ", docRef.id);
        // Limpiar los campos del formulario
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        // mostrar el mensaje de agradecimiento
        document.getElementById("thank-you").style.display = "block";
    } catch (e) {
        console.error("Error adding document: ", e);
        document.getElementById("submit-form").style.display = "block";
    }
});
