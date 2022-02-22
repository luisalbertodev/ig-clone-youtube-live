import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements";

import PostHeader from "../../../components/Post/PostHeader";
import PostImage from "../../../components/Post/PostImage";
import PostFooter from "../../../components/Post/PostFooter";

const Post = (props) => {
	const { id, user, likes, caption, profilePicture, cover, comments } = props;
	return (
		<View style={styles.container}>
			<Divider width={1} orientation="vertical" />
			<PostHeader source={{ uri: profilePicture }} label={user} />
			<PostImage source={{ uri: cover }} />
			<PostFooter
				likes={likes}
				user={user}
				caption={caption}
				comments={comments}
			/>
		</View>
	);
};

export default Post;

const styles = StyleSheet.create({
	container: {
		marginBottom: 30,
	},
});
