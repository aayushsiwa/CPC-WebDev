import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

export default function submit() {
    // Import the functions you need from the SDKs you need

    // Paste the code from Firebase
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "Your_AuthDomain",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Get a reference to the database service
    const db = getDatabase(app);

    // document.getElementById("frmContact").addEventListener("submit", submitForm);

    const reg = () => {
        const emailid = document.getElementById("username").value;
        set(ref(db, "users/" + emailid.split("@")[0]), {
            name: emailid,
            roll: document.getElementById("password").value,
        });

        alert("Your form is submitted");
        // document.getElementsByClassName("u").value = "";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        console.log("Submitted");
    };
    return reg;
}
