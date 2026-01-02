// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "彩彩",
		imgurl: "https://avatars.githubusercontent.com/u/39020005?v=4",
		desc: "开源大佬喵",
		siteurl: "https://github.com/CAICAIIs",
		tags: ["朋友"],
	},
	{
		id: 2,
		title: "小莫",
		imgurl: "https://avatars.githubusercontent.com/u/177809507?v=4",
		desc: "回归天空佬喵",
		siteurl: "https://github.com/SXP-Simon",
		tags: ["朋友"],
	},
	{
		id: 3,
		title: "小学生",
		imgurl: "https://avatars.githubusercontent.com/u/222892982?v=4",
		desc: "xxs!",
		siteurl: "https://github.com/xxs588",
		tags: ["朋友"],
	},
	{
		id: 4,
		title: "萝卜子",
		imgurl: "https://avatars.githubusercontent.com/u/222646451?v=4",
		desc: "前端大手喵！",
		siteurl: "https://github.com/J621111",
		tags: ["朋友"],
	},
	{
		id: 5,
		title: "小恐龙",
		imgurl: "https://avatars.githubusercontent.com/u/61399973?v=4",
		desc: "研发组长喵！",
		siteurl: "https://github.com/HakimYu",
		tags: ["朋友"],
	},
	{
		id: 6,
		title: "bangbang",
		imgurl: "https://avatars.githubusercontent.com/u/225638175?v=4",
		desc: "bangbangbangbang!",
		siteurl: "https://github.com/BangBangBangBaic",
		tags: ["朋友"],
	},
	{
		id: 7,
		title: "奶农",
		imgurl: "https://avatars.githubusercontent.com/u/232067070?v=4",
		desc: "奶农神！",
		siteurl: "https://github.com/double-god",
		tags: ["朋友"],
	},
	{
		id: 8,
		title: "郑老师",
		imgurl: "https://avatars.githubusercontent.com/u/56105779?v=4",
		desc: "网安大神！",
		siteurl: "https://github.com/hangone",
		tags: ["朋友"],
	},
	{
		id: 9,
		title: "杰哥",
		imgurl: "https://avatars.githubusercontent.com/u/226701756?v=4",
		desc: "帅！！",
		siteurl: "https://github.com/Lntano-source",
		tags: ["朋友"],
	},
	{
		id: 10,
		title: "佬",
		imgurl: "https://avatars.githubusercontent.com/u/229772326?v=4",
		desc: "游戏组大手子",
		siteurl: "https://github.com/florious0721",
		tags: ["朋友"],
	},
	{
		id: 11,
		title: "喵波隆",
		imgurl: "https://avatars.githubusercontent.com/u/230817148?v=4",
		desc: "喵喵喵！！",
		siteurl: "https://github.com/sakana6875",
		tags: ["朋友"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
