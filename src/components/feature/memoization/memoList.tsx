import React, { useEffect, useState } from "react";
import Contents from "./Contents";
import { ContentType } from "./types";

const contentList: ContentType[] = [
	{ title: "number 1", content: " im content number 1", likes: 1 },
	{ title: "number 2", content: " im content number 2", likes: 1 },
	{ title: "number 3", content: " im content number 3", likes: 1 },
];

const MemoList = () => {
	const [contents, setContents] = useState<ContentType[]>(contentList);

	useEffect(() => {
		const interval = setInterval(() => {
			setContents((prevContent) => [
				...prevContent,
				{
					title: `number${prevContent.length + 1}`,
					content: ` im content number ${prevContent.length + 1}`,
					likes: 1,
				},
			]);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);
	return <Contents contentList={contents} />;
};

export default MemoList;
