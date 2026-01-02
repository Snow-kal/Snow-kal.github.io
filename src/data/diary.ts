// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content: `11.24-11.30
		这周好忙，有点心累。
		hackweek 忙完之后又会想起之前 discord 上看到彩彩发的帖子 如何迈出开
		源的第一步 按照这上面去做了做，第一次给大的项目提 pr 内心还是很忐忑
		的，不过开源社区还是很包容的。然后也是有了勇气去踏出第一步，也去旁听
		一下会议和熟悉项目结构（虽然还是没太看懂多少）不过还是感谢能这样去做，
		以前的我是肯定不会想去做的。
		这周还去试了试舞萌，好玩捏，以后闲的话买个手套自己去玩一玩。
		今年也快过完了，这学期还是挺充实的，起码没有浑浑噩噩的，每次想到这里，
		我都很感激我的学长们，彩彩，小莫，小恐龙，郑老师等等等等，有了他们才
		有了现在的我。嗯...听说每周做个总结有利于自己进步，那我就试试吧，这也
		是学彩彩滴，希望我可以赢过自己一点点.......`,
		date: "2025-11-30T20:30:00Z",
		images: ["/images/diary/sakura.jpg", "/images/diary/1.jpg"],
	},
	{
		id: 2,
		content: `12.1-12.7
		这周摸鱼了，怎么写代码，纯纯在看项目
		学长派了任务下来，又有代码可以写了（｡ò ∀ ó ）｡
		感觉以后得注重这方面的经验，因为考虑到自己以后大部分应该不是从 0 到 1
		开始的
		每天都想喝咖啡，纯纯的咖啡依赖（`,
		date: "2025-12-07T20:30:00Z",
	},
	{
		id: 3,
		content: `12.8-12.14
		这是总算是把课表查询服务写完了
		而且过了个生日，去了茶话会
		好玩(⁄ ⁄•⁄ω⁄•⁄ ⁄)`,
		date: "2025-12-14T20:30:00Z",
	},
	{
		id: 4,
		content: `12.15-12.21
		这周好像没干什么，主要是补补代码，然后就是玩（
		感觉多看看基础吧`,
		date: "2025-12-21T20:30:00Z",
	},
	{
		id: 5,
		content: `12.22-12.28
		补一补计网基础，感觉实现文档化是很重要的，之后也可以发发文章之类的
		开源社区方面的还还在啃项目，社区大佬都太强了，感觉得提升提升效率，经
		常感觉自己可能一辈子干不完的事情别人几天就搞定了
		然后就是复习`,
		date: "2025-12-28T20:30:00Z",
	},
];

// 获取日记统计数据
export const getDiaryStats = () => {
	const total = diaryData.length;
	const hasImages = diaryData.filter(
		(item) => item.images && item.images.length > 0,
	).length;
	const hasLocation = diaryData.filter((item) => item.location).length;
	const hasMood = diaryData.filter((item) => item.mood).length;

	return {
		total,
		hasImages,
		hasLocation,
		hasMood,
		imagePercentage: Math.round((hasImages / total) * 100),
		locationPercentage: Math.round((hasLocation / total) * 100),
		moodPercentage: Math.round((hasMood / total) * 100),
	};
};

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = diaryData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取最新的日记
export const getLatestDiary = () => {
	return getDiaryList(1)[0];
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
	return diaryData.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
	return diaryData.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
	return diaryData
		.filter((item) => item.tags?.includes(tag))
		.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
		);
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};

export default diaryData;
