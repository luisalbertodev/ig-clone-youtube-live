import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "../../components/atoms/Icon";
import Likes from "../../components/Post/Likes";
import Caption from "../../components/Post/Caption";
import CommentsSection from "../../components/Post/CommentsSection";
import {
	HeartOutlinedLight,
	CommentOutlinedLight,
	SharedOutlinedLight,
	SaveOutlinedLight,
	HeartFilledPrimary,
} from "../../constants";

const PostFooter = ({ likes, user, caption, comments }) => {
	return (
		<View style={styles.containerFooter}>
			<View style={styles.row}>
				<Icon
					customStyles={styles.footerIcon}
					source={{ uri: HeartOutlinedLight }}
				/>
				<Icon
					customStyles={styles.footerIcon}
					source={{ uri: CommentOutlinedLight }}
				/>
				<Icon
					customStyles={[styles.footerIcon, styles.sharedIcon]}
					source={{ uri: SharedOutlinedLight }}
				/>
				<View style={styles.saveContainer}>
					<Icon
						customStyles={[
							styles.footerIcon,
							styles.marginRightNone,
						]}
						source={{ uri: SaveOutlinedLight }}
					/>
				</View>
			</View>

			<Likes likes={likes} />
			<Caption title={user} description={caption} />
			<CommentsSection comments={comments} />
		</View>
	);
};

export default PostFooter;

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
	},
	containerFooter: {
		marginHorizontal: 15,
		marginTop: 10,
	},
	footerIcon: {
		width: 33,
		height: 33,
		marginRight: 10,
	},
	sharedIcon: {
		transform: [{ rotate: "320deg" }],
		marginTop: -3,
	},
	saveContainer: {
		flex: 1,
		alignItems: "flex-end",
	},
	marginRightNone: {
		marginRight: 0,
	},
});
