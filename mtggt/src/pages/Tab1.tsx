import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { db } from "../firebaseConfig";

const docId = "lkpq9C3GY3XGmSw2B8CO";

const Tab1: React.FC = () => {
  const [test, setTest] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    if (docId) {
      db.collection("games")
        .doc(docId)
        .get()
        .then((gamesList) => {
          if (gamesList.exists) {
            setTest(gamesList.data());
          } else {
            console.log("no list");
          }
        })
        .catch(() => setError("grocery-list-get-fail"));
    }
  }, [test, setTest]);

  console.log(test);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TEst</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
