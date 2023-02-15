import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import LoginPage from "./screens/LoginPage";
import ShowroomDetail from "./screens/ShowroomDetail";

export default function App() {
    return <LoginPage />;
    // return <Home />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
