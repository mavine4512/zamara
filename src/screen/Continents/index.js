import React, { useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";

function Continents() {
  const [continents, setContinents] = useState("");

  useEffect(() => {
    continentsbyName();
  }, []);

  const continentsbyName = () => {
    fetch(
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfContinentsByName/JSON/debug?"
    )
      .then((res) => res.json())
      .then((res) => {
        setContinents(res);
      });
    (error) => {
      console.log("error", error);
    };
  };

  return (
    <View style={styles.continentsContainer}>
      <StatusBar
        hidden={false}
        translucent={true}
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
      />
      <Text style={styles.continentsTital}>List Of Continents By Name</Text>
      {continents < 1 ? (
        <Text style={styles.loadingText}>Loading ...</Text>
      ) : (
        continents.map((continent) => {
          return (
            <View style={styles.dataText}>
              <Text style={styles.code}>{continent.sCode} : </Text>
              <Text style={styles.name}>{continent.sName}</Text>
            </View>
          );
        })
      )}
    </View>
  );
}

export default Continents;
