import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Comments from "../../components/Post/Comments";

const CommentsSection = ({ comments = [] }) => {
	if (!comments.length) return null;

	const [hasLoadComments, setHasLoadComments] = useState(false);

	const toggleLoadComments = () => setHasLoadComments(!hasLoadComments);

	const hasManyComments = comments.length > 1;
	const labelExpandComments = hasManyComments ? "all" : "";
	const labelComments = `comment${hasManyComments ? "s" : ""}`;

	const title = hasLoadComments ? "Hide" : "View";

	return (
		<>
			<View styles={styles.marginTopFive}>
				<TouchableOpacity onPress={toggleLoadComments}>
					<Text style={styles.labelComments}>
						{title} {labelExpandComments} {comments.length}{" "}
						{labelComments}
					</Text>
				</TouchableOpacity>
			</View>
			{hasLoadComments && <Comments comments={comments} />}
		</>
	);
};

export default CommentsSection;

const styles = StyleSheet.create({
	labelComments: {
		color: "#808080",
	},

	marginTopFive: {
		marginTop: 5,
	},
});
