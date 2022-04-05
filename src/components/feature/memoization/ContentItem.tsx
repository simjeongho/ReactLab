import styled from "styled-components";
import { ContentType } from "./types";
import React, { memo, Profiler, useMemo, useState } from "react";

const ContentItemContainer = styled.div`
	border-bottom: 1px solid;
	padding: 10px;
	cursor: pointer;
	background-color: red;
`;
const ContentItem = ({ content, title, likes, onClick }: ContentType) => {
	const [count, setCount] = useState(0);
	function onRenderCallback(
		id: any, // 방금 커밋된 Profiler 트리의 "id"
		phase: any, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
		actualDuration: any, // 커밋된 업데이트를 렌더링하는데 걸린 시간
		baseDuration: any, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간
		startTime: any, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
		commitTime: any, // React가 해당 업데이트를 언제 커밋했는지
		interactions: any, // 이 업데이트에 해당하는 상호작용들의 집합
	) {
		// 렌더링 타이밍을 집합하거나 로그...
		console.log(`actual Duration ${title} ${actualDuration} `);
	}
	const handleClick = () => {
		setCount((prev) => prev + 1);
		onClick();
	};

	const rate = useMemo(() => {
		console.log(`나 동작중`);
		return likes > 10 ? `Popular` : `woooo`;
	}, [likes]);
	return (
		<Profiler id="CommntItem" onRender={onRenderCallback}>
			<ContentItemContainer onClick={handleClick}>
				<span>{title}</span>
				<br />
				<span>{content}</span>
				<br />
				<span>{likes}</span>
				<br />
				<span>{rate}</span>
				<br />
				<span>{count}</span>
			</ContentItemContainer>
		</Profiler>
	);
};

export default memo(ContentItem);
