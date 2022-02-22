import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const PostHeader = ({ source, label }) => {
	return (
		<View style={styles.containerHeader}>
			<View style={[styles.row, styles.middle]}>
				<Image source={source} style={styles.pictureStory} />
				<Text style={styles.label}>{label}</Text>
			</View>
			<Text style={styles.moreCTA}>...</Text>
		</View>
	);
};

export default PostHeader;

const styles = StyleSheet.create({
	containerHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		margin: 5,
	},
	row: {
		flexDirection: "row",
	},
	middle: {
		alignItems: "center",
	},
	pictureStory: {
		width: 35,
		height: 35,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.6,
		borderColor: "#ff8501",
	},
	moreCTA: {
		color: "#fff",
		fontWeight: "900",
	},
	label: {
		color: "#fff",
		marginLeft: 5,
		fontWeight: "500",
	},
});
