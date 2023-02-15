import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TextInput,
} from "react-native";
import React from "react";
import Svg, { Use } from "react-native-svg";

const { width, height } = Dimensions.get("window");

export default function LoginPage() {
    // const { width, height } = Dimensions.get("window");
    return (
        <View
            style={{
                // display: "flex",
                // justifyContent: "center",
                // flexDirection: "column",
                // alignItems: "center",
                // // marginTop: 150,
                // // backgroundColor: "turquoise",
                flex: 1,
                justifyContent: "flex-end",
            }}
        >
            {/* <View>
                <Svg height={height} width={width}>
                <Image
                    style={{
                        width: width,
                        height: 900,
                    }}
                    source={{
                        uri: "https://i.pinimg.com/474x/2a/11/3a/2a113a43427761f49682faecb6ae1c24.jpg",
                    }}
                    // height={height}
                    // width={width}
                    preserveAspectRatio="xMidYMid slice"
                />
                </Svg>
            </View> */}

            <ImageBackground
                source={{
                    uri: "https://images.pexels.com/photos/7130463/pexels-photo-7130463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: "center",
                    justifyContent: "flex-end",
                }}
            >
                <View style={styles.buttonContainer}>
                    {/* <View style={styles.button}>
                        <Text style={styles.buttonText}>LOG IN</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </View> */}
                    <View style={styles.formInputContainer}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="white"
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor="white"
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="white"
                            style={styles.textInput}
                        />
                        <View style={styles.formButton}>
                            <Text style={styles.buttonText}>Login</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    button: {
        backgroundColor: "#6B6B6B",
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "white",
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "400",
        color: "white",
        letterSpacing: 0.5,
    },
    buttonContainer: {
        justifyContent: "center",
        height: height / 3,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: "white",
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 25,
        paddingLeft: 10,
    },
    formButton: {
        backgroundColor: "#3944F7",
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formInputContainer: {
        marginBottom: 70,
    },
});
