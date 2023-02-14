import { View, Text, Image } from "react-native";
import React from "react";

const image =
    "http://bsmedia.business-standard.com/_media/bs/img/article/2017-06/08/full/1496940243-0934.jpg";
const title = "Woodland";
const description = "Trending ◉ Formal Wear ◉ $$ ◉ 🎟️ ◉ 4⭐ (2913+)";

export default function About() {
    return (
        <View>
            <ShowroomImage image={image} />
            <ShowroomTitle title={title} />
            <ShowroomDescription description={description} />
        </View>
    );
}

const ShowroomImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{ width: "100%", height: 180 }}
    />
);

const ShowroomTitle = (props) => (
    <Text
        style={{
            fontSize: 20,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.title}
    </Text>
);

const ShowroomDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5,
        }}
    >
        {props.description}
    </Text>
);
