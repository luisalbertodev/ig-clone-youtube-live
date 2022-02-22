import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { USERS } from "../../../data/users";

const shortText = (str, maxLength) => {
	if (!str) return "";

	if (str.length > maxLength) {
		return str.substring(0, maxLength) + "...";
	}
	return str;
};

const Story = ({ source, label }) => {
	return (
		<View style={styles.containerStory}>
			<Image source={source} style={styles.pictureStory} />
			<Text style={styles.colorWhite}>{label}</Text>
		</View>
	);
};

const Stories = () => {
	return (
		<View style={styles.container}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{USERS.map((story, index) => (
					<Story
						key={index}
						source={{ uri: story.image }}
						label={shortText(story.user, 11)}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default Stories;

const styles = StyleSheet.create({
	container: {
		marginBottom: 13,
	},
	containerStory: {
		alignItems: "center",
	},
	pictureStory: {
		width: 70,
		height: 70,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 3,
		borderColor: "#ff8501",
	},
	colorWhite: {
		color: "#fff",
	},
});
