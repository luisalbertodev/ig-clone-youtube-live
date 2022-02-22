import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Comments = ({ comments }) => {
	return (
		<>
			{comments.map((comment, key) => (
				<View key={key} style={styles.containerComments}>
					<Text style={styles.labelCaption}>{comment.user}</Text>
					<Text style={styles.colorWhite}>{comment.comment}</Text>
				</View>
			))}
		</>
	);
};

export default Comments;

const styles = StyleSheet.create({
	containerComments: {
		flexDirection: "row",
		marginTop: 5,
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
