import React, { useState } from "react";

type PeopleData = {
	name: string;
	age: number;
};
type PeopleApiResult = {
	people: PeopleData[];
};

const Item = (peopleData: PeopleData) => {
	return (
		<li>
			{" "}
			name: {peopleData.name} / age:{peopleData.age}
		</li>
	);
};

const TestMocking = () => {
	const [data, setData] = useState<PeopleApiResult | null>(null);
	const [error, setError] = useState("");
	const url = "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json";
	const handleDataClick = () => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				console.log("setData");
				console.log(json.data);
				setData(json.data);
				console.log(`data: ${data}`);
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
			<h1>이 곳에 데이터를 가져올 것</h1>
			{data && (
				<ul>
					{data.people.map((person) => (
						<Item key={`${person.name}-${person.age}`} name={person.name} age={person.age} />
					))}
				</ul>
			)}
		</>
	);
};

export default TestMocking;