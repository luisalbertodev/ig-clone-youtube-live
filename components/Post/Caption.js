import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Caption = ({ title, description }) => {
	return (
		<View style={styles.containerCaption}>
			<Text style={styles.labelCaption}>{title}</Text>
			<Text style={styles.colorWhite}>{description}</Text>
		</View>
	);
};

export default Caption;

const styles = StyleSheet.create({
	containerCaption: {
		marginTop: 5,
		flexDirection: "row",
	},
	labelCaption: {
		color: "#fff",
		fontWeight: "700",
		marginRight: 5,
	},
	colorWhite: {
		color: "#fff",
	},
});
