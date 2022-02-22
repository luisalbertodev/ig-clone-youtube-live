import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Badge = ({ customStyles, title }) => {
	return (
		<View style={[styles.badgeActivated, customStyles]}>
			<Text style={styles.label}>{title}</Text>
		</View>
	);
};

export default Badge;

const styles = StyleSheet.create({
	badgeActivated: {
		position: "absolute",
		left: 10,
		bottom: 18,
		width: 25,
		height: 18,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FF3250",
		zIndex: 1,
	},
	label: {
		color: "#ffffff",
		fontWeight: "600",
	},
});
