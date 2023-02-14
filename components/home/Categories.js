import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pickup",
    },
    {
        image: require("../../assets/images/men.png"),
        text: "Men",
    },
    {
        image: require("../../assets/images/women.png"),
        text: "Women",
    },
    {
        image: require("../../assets/images/kids.png"),
        text: "Kids",
    },
    {
        image: require("../../assets/images/footwear.png"),
        text: "Footwear",
    },
    {
        image: require("../../assets/images/winterwear.png"),
        text: "Winterwear",
    },
    {
        image: require("../../assets/images/jewellery.png"),
        text: "Jwellery",
    },
];

export default function Categories() {
    return (
        <View
            style={{
                marginTop: 10,
                backgroundColor: "#fff",
                paddingVertical: 10,
                paddingLeft: 20,
            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View
                        key={index}
                        style={{ alignItems: "center", marginRight: 30 }}
                    >
                        <Image
                            source={item.image}
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: "contain",
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "900" }}>
                            {item.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
