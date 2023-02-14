import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { React, useState } from "react";

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <View style={styles.button}>
            <HeaderButton
                text="Delivery"
                btnColor="#120E43"
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="#120E43"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    );
}

const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor:
                props.activeTab === props.text ? "#120E43" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 15,
            marginEnd: 10,
        }}
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text
            style={{
                color: props.activeTab === props.text ? "white" : "#120E43",
                fontSize: 15,
                fontWeight: "900",
            }}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        paddingTop: 45,
        flexDirection: "row",
        alignSelf: "center",
    },

    buttonTouch: {
        backgroundColor: "#120E43",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },

    buttonText: {},
});
