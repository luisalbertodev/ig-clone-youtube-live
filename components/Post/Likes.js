import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Likes = ({ likes }) => {
	return (
		<View style={styles.containerLikes}>
			<Text style={styles.labelLikes}>
				{likes.toLocaleString("en")} likes
			</Text>
		</View>
	);
};

export default Likes;

const styles = StyleSheet.create({
	containerLikes: {
		flexDirection: "row",
		marginTop: 4,
	},
	labelLikes: {
		color: "#fff",
		fontWeight: "600",
	},
});
