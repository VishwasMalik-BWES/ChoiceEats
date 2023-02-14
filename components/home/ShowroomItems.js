import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

export const localShowrooms = [
    {
        name: "Peter England",
        image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
        categories: ["Formals", "Suits"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Zara",
        image: "https://i.insider.com/5a42d230430d03f1138b45fe?width=700",
        categories: ["Ethnic", "Dress"],
        price: "$$",
        reviews: 2440,
        rating: 4.2,
    },
    {
        name: "WoodLand",
        image: "https://www.lulumall.in/media/1823/photo7777-athira-nampiathiri.jpg?crop=0.062656223962672966,0,0,0.0626562239626729&cropmode=percentage&width=640&height=460&rnd=131680000370000000",
        categories: ["Formals", "Suits", "Shoes"],
        price: "$$",
        reviews: 5549,
        rating: 4.9,
    },
    {
        name: "Red Tape",
        image: "http://www.quartierinterior.com/wp-content/uploads/2020/09/uf-4-1.jpg",
        categories: ["Regular", "Sports"],
        price: "$$",
        reviews: 7863,
        rating: 4.3,
    },
    {
        name: "Peter England",
        image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
        categories: ["Formals", "Suits"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Diva Women Collection",
        image: "https://i.insider.com/5a42d230430d03f1138b45fe?width=700",
        categories: ["Ethnic", "Dress"],
        price: "$$",
        reviews: 2440,
        rating: 4.2,
    },
    {
        name: "WoodLand",
        image: "https://www.lulumall.in/media/1823/photo7777-athira-nampiathiri.jpg?crop=0.062656223962672966,0,0,0.0626562239626729&cropmode=percentage&width=640&height=460&rnd=131680000370000000",
        categories: ["Formals", "Suits", "Shoes"],
        price: "$$",
        reviews: 5549,
        rating: 4.9,
    },
    {
        name: "Red Tape",
        image: "http://www.quartierinterior.com/wp-content/uploads/2020/09/uf-4-1.jpg",
        categories: ["Regular", "Sports"],
        price: "$$",
        reviews: 7863,
        rating: 4.3,
    },
    {
        name: "Peter England",
        image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
        categories: ["Formals", "Suits"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Diva Women Collection",
        image: "https://i.insider.com/5a42d230430d03f1138b45fe?width=700",
        categories: ["Ethnic", "Dress"],
        price: "$$",
        reviews: 2440,
        rating: 4.2,
    },
    {
        name: "WoodLand",
        image: "https://www.lulumall.in/media/1823/photo7777-athira-nampiathiri.jpg?crop=0.062656223962672966,0,0,0.0626562239626729&cropmode=percentage&width=640&height=460&rnd=131680000370000000",
        categories: ["Formals", "Suits", "Shoes"],
        price: "$$",
        reviews: 5549,
        rating: 4.9,
    },
    {
        name: "Red Tape",
        image: "http://www.quartierinterior.com/wp-content/uploads/2020/09/uf-4-1.jpg",
        categories: ["Regular", "Sports"],
        price: "$$",
        reviews: 7863,
        rating: 4.3,
    },
];

// export default function ShowroomItems(props) {
//     let showroomData = props.showroomData;
//     // console.log(showroomData);
//     return (
//         <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: 30 }}>
//             {showroomData.map((showrooms, index) => (
//                 <View
//                     key={index}
//                     style={{
//                         marginTop: 10,
//                         padding: 15,
//                         backgroundColor: "white",
//                     }}
//                 >
//                     <PageImage image={showrooms["icon"]} />
//                     <RestrauntInfo
//                         name={showrooms["display_name"]}
//                         rating={5}
//                     />
//                 </View>
//             ))}
//         </TouchableOpacity>
//     );
// }

export default function ShowroomItems(props) {
    let showroomData = props.showroomData;
    // console.log(showroomData);
    return (
        <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: 30 }}>
            {showroomData.map((showrooms, index) => (
                <View
                    key={index}
                    style={{
                        marginTop: 10,
                        padding: 15,
                        backgroundColor: "white",
                    }}
                >
                    <PageImage image={showrooms["image"]} />
                    <RestrauntInfo
                        name={showrooms["name"]}
                        rating={showrooms["rating"]}
                    />
                </View>
            ))}
        </TouchableOpacity>
    );
}

const PageImage = (props) => (
    <>
        <Image
            source={{ uri: props.image }}
            style={{ width: "100%", height: 200 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons
                name="heart-outline"
                size={25}
                color="#fff"
            />
        </TouchableOpacity>
    </>
);

const RestrauntInfo = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {props.name}
            </Text>
            <Text style={{ fontSize: 13, color: "grey", fontWeight: "300" }}>
                30-45 • min
            </Text>
        </View>

        <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
);
