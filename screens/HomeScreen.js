import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/molecules/Header";
import Stories from "../components/molecules/Stories";
import Post from "../components/molecules/Post";
import { POSTS } from "../data/posts";

const HomeScreen = () => {
	return (
		<>
			<StatusBar style="light" />
			<SafeAreaView style={styles.container}>
				<Header />
				<Stories />
				<ScrollView>
					{POSTS.map((post, key) => (
						<Post key={key} {...post} />
					))}
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		paddingTop: 32,
	},
});
