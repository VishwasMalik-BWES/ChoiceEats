import { View, Text, StyleSheet } from "react-native";
import React from "react";

const items = [
    {
        name: "Shirt",
        image: "https://imagescdn.aeo.in/img/app/product/7/782757-9530262.jpg?auto=format",
        Description: "Men White & Teal Blue Slim Fit Striped Casual Shirt",
        price: "$24.99",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Trousers",
        image: "https://content.woodlandworldwide.com/static/images/products/11638/main-ggtr10000221a-safari-1.jpg",
        price: "$19.99",
        reviews: 2440,
        rating: 4.2,
        Description: "Men Olive Green Slim Fit Easy Wash Cargos Trousers",
    },
    {
        name: "T-Shirts",
        image: "https://5.imimg<ItemImage/>.com/data5/ANDROID/Default/2021/2/MQ/NW/JF/27658826/product-jpeg-500x500.jpg",
        price: "$14.99",
        reviews: 5549,
        rating: 4.9,
        Description: "Men Beige & Black Typography Printed Sustainable T-shirt",
    },
    {
        name: "Shoes",
        image: "https://rukminim1.flixcart.com/image/832/832/kg2l47k0-0/shoe/f/7/r/gc-0232106y15-39-woodland-khaki-original-imafwdtmjphuf4am.jpeg?q=70",
        price: "$22.99",
        reviews: 7863,
        rating: 4.3,
        Description: "Men White Clarkin Sneakers",
    },
];

const styles = StyleSheet.create({
    itemStyle = {

    }
})

export default function Items() {
    return (
        <View>
            {/* <ItemsInfo items={items[0]}/> */}
            {/* <ItemImage/> */}
        </View>
    );
}
