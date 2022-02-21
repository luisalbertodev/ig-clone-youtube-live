import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/molecules/Header";

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Header />
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
	},
});
