import { StyleSheet, Image, View } from "react-native";
import React from "react";

const PostImage = ({ source }) => {
	return (
		<View style={styles.containerCover}>
			<Image source={source} style={styles.coverPicture} />
		</View>
	);
};

export default PostImage;

const styles = StyleSheet.create({
	containerCover: {
		width: "100%",
		height: 450,
	},

	coverPicture: {
		height: "100%",
		resizeMode: "cover",
	},
});
