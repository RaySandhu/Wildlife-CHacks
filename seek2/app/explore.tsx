// app/explore.tsx
import React from "react";
import { View, Text, StyleSheet, Linking, ScrollView } from "react-native";

import Card from "@/components/Card";
const tripInfo = [
  {
    title: "Spain's vacay",
    thumbNail:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/640px-Flag_of_Spain.svg.png",
    desc: "Emjoy some nature in spain!",
    buyLink: "https://www.tripadvisor.ca/Tourism-g187427-Spain-Vacations.html",
  },
  {
    title: "Canada vacay",
    thumbNail:
      "https://www.flagoutlet.ca/cdn/shop/files/abflags_1000x1000.jpg?v=1687196642",
    desc: "Enjoy the glorious nature of the Canadian rockies. Calgary is the best city in the world.",
    buyLink:
      "https://www.tripadvisor.ca"
  },
  {
    title: "Germany birds",
    thumbNail:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png",
    desc: "There are 2 things that Germany is known for. Beer and Birds! So why not expiereance both with this splendid tour.",
    buyLink:
      "https://www.tripadvisor.ca"
  },
  {
    title: "Toronto",
    thumbNail:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/1200px-Toronto_Maple_Leafs_2016_logo.svg.png",
    desc: "Such a beautiful trip to go on. So much so, that fall happens twice in a year because the leafs are always out in spring!",
    buyLink:
      "https://www.tripadvisor.ca"
  },
 

  
];

// I dont know how to make the page scroll 

export default function ExplorePage() {
  return (
	<ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>Plan your next escape.</Text>
      {tripInfo.map((p) => (
        <div>
          
          <Card
            image={p.thumbNail}
            title={p.title}
            description={p.desc}
            link={p.buyLink}
			
          />
        </div>
      ))}
    </View>
	</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: "center",
    padding: 16,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

