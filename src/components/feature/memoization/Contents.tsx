import { useCallback } from "react";
import ContentItem from "./ContentItem";
import { ContentType } from "./types";

const Contents = ({ contentList }: { contentList: ContentType[] }) => {
	const handleClick = useCallback(() => {
		console.log(`눌림`);
	}, []);

	return (
		<div>
			{contentList.map((content) => (
				<ContentItem
					key={content.title}
					title={content.title}
					content={content.content}
					likes={content.likes}
					onClick={handleClick}
				/>
			))}
		</div>
	);
};

export default Contents;
