import { StyleSheet } from "react-native";
import React from "react";
import Icon from "../Icon";

const Logo = () => {
	return (
		<Icon
			customStyles={styles.logo}
			source={require("../../../assets/header-logo.png")}
		/>
	);
};

export default Logo;

const styles = StyleSheet.create({
	logo: {
		width: 100,
		height: 50,
		resizeMode: "contain",
	},
});
