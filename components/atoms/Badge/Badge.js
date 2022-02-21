import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Badge = ({ customStyles, title, isActivated }) => {
	return (
		<View
			style={[
				isActivated ? styles.badgeActivated : styles.badgeInactive,
				customStyles,
			]}
		>
			<Text>{title}</Text>
		</View>
	);
};

export default Badge;

const styles = StyleSheet.create({
	badgeActivated: {
		position: "absolute",
		left: 20,
		bottom: 18,
		width: 25,
		height: 18,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FF3250",
		zIndex: 1,
	},
	badgeInactive: {
		color: "#fff",
		fontWeight: "600",
	},
});
