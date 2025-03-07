import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

export default function submit() {
    // Import the functions you need from the SDKs you need

    // Paste the code from Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyA1HQBNi5MrCuWQLKRXFecc7PPN79v6r00",
        authDomain: "cpc-task-2.firebaseapp.com",
        databaseURL: "https://cpc-task-2-default-rtdb.firebaseio.com",
        projectId: "cpc-task-2",
        storageBucket: "cpc-task-2.appspot.com",
        messagingSenderId: "258116121733",
        appId: "1:258116121733:web:5e45c6a7f5c79cfec765ec",
        measurementId: "G-SKQEFL2V8P",
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
