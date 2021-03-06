import { StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const Icon = ({ source, customStyles, afterItem, beforeItem }) => {
	return (
		<TouchableOpacity>
			{beforeItem}
			<Image style={[styles.icon].concat(customStyles)} source={source} />
			{afterItem}
		</TouchableOpacity>
	);
};

export default Icon;

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 30,
		resizeMode: "contain",
	},
});
