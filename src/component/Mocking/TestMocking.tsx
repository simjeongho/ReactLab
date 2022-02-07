import React, { useState } from "react";

type APIResult<T> = {
	data: T;
};

type PeopleData = APIResult<{
	people: {
		name: string;
		age: number;
	};
}>;

const Item = (peopleData: PeopleData) => {
	return <li>name: {peopleData.data.people.name}</li>;
};

const TestMocking = () => {
	const [data, setData] = useState<PeopleData | null>();
	const [error, setError] = useState("");
	const url = "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json";
	const handleDataClick = () => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setData(json.data);
			})
			.catch((error) => {
				setError(`something wrong: ${error} `);
			});
	};

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<>
			<button onClick={handleDataClick}>데이터 가져오기 </button>
			{data && data.data.people}
		</>
	);
};

export default TestMocking;
