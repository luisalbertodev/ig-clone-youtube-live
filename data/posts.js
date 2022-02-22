import { USERS } from "./users";

export const POSTS = [
	{
		id: 1,
		user: USERS[0].user,
		likes: 7654,
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		profilePicture: USERS[0].image,
		cover: "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80",
		comments: [
			{
				user: USERS[1].user,
				comment:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
			{
				user: USERS[2].user,
				comment:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
		],
	},
	{
		id: 2,
		user: USERS[1].user,
		likes: 7654,
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		profilePicture: USERS[1].image,
		cover: "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80",
		comments: [
			{
				user: USERS[0].user,
				comment:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
			{
				user: USERS[2].user,
				comment:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
		],
	},
	{
		id: 3,
		user: USERS[2].user,
		likes: 7654,
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		profilePicture: USERS[2].image,
		cover: "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80",
		comments: [
			{
				user: USERS[0].user,
				comment:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
		],
	},
	{
		id: 4,
		user: USERS[3].user,
		likes: 7654,
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		profilePicture: USERS[3].image,
		cover: "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80",
		comments: [],
	},
	{
		id: 5,
		user: USERS[4].user,
		likes: 7654,
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		profilePicture: USERS[4].image,
		cover: "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80",
		comments: [],
	},
];
