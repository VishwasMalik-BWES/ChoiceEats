import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import ShowroomItems, {
    localShowrooms,
} from "../components/home/ShowroomItems";
import axios from "axios";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY =
    "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home() {
    // const [showroomData, setShowroomData] = useState(localShowrooms);

    // useEffect(() => {
    //     const fetchShowroomData = async () => {
    //         try {
    //             const location = "San Francisco";
    //             const url = `https://nominatim.openstreetmap.org/search?q=${location}&format=json`;
    //             const response = await axios.get(url);
    //             console.log(response.data);
    //             setShowroomData(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchShowroomData();
    // }, []);

    const [showroomData, setShowroomData] = useState(localShowrooms);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "#87CEEB", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ShowroomItems showroomData={showroomData} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}
