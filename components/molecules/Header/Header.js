import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "../../../components/atoms/Icon";
import Logo from "../../../components/atoms/Logo";
import Badge from "../../../components/atoms/Badge";
import {
	AddOutlinedLight,
	HeartOutlinedLight,
	MessagesOutlinedLight,
} from "../../../constants";

const Header = () => {
	return (
		<View style={styles.container}>
			<Logo />
			<View style={styles.iconsContainer}>
				<Icon source={{ uri: AddOutlinedLight }} />
				<Icon source={{ uri: HeartOutlinedLight }} />
				<Icon
					source={{ uri: MessagesOutlinedLight }}
					beforeItem={<Badge title="22" isActivated />}
				/>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 20,
	},
	iconsContainer: {
		flexDirection: "row",
	},
});
