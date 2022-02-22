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
				<Icon
					customStyles={styles.marginRightTen}
					source={{ uri: AddOutlinedLight }}
				/>
				<Icon
					customStyles={styles.marginRightTen}
					source={{ uri: HeartOutlinedLight }}
				/>
				<Icon
					source={{ uri: MessagesOutlinedLight }}
					beforeItem={<Badge title="22" />}
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
		marginHorizontal: 15,
	},
	iconsContainer: {
		flexDirection: "row",
	},
	marginRightTen: {
		marginRight: 10,
	},
});
