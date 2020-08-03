import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import "./Tab1.css";
import { db } from "../firebaseConfig";

const docId = "lkpq9C3GY3XGmSw2B8CO";

const Tab1: React.FC = () => {
  // define state for component
  const [gamesList, setGamesList] = useState([]);
  const [error, setError] = useState("");

  const getData = (callback: (data: any) => void) => {
    let gamesArray: [] = [];
    db.collection("games")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((game) => {
          gamesArray.push(game.data());
        });
        callback(gamesArray);
      });
  };

  useEffect(() => {
    console.log("getting games data...");

    getData((data) => {
      setGamesList(data);
    });
  }, []);

  const convertTimestampToDate = (timestamp: any) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  const getWinner = (i: number) => {
    gamesList[i].players.forEach((player) => {
      if (player.winner) return player.name;
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TEst</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {gamesList.map((game: any, i) => {
            return (
              <IonItem routerLink={`/`} key={i}>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>
                      {convertTimestampToDate(game.date.seconds)}
                    </IonCardSubtitle>
                    <IonCardTitle>
                      Winner:{" "}
                      {game.players.map((player: any) => {
                        return player.winner ? player.name : "";
                      })}
                    </IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
