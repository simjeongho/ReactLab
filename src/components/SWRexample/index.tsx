import axios from "axios";
import React, { useEffect } from "react";
import useSWR from "swr";

type SWRAPIResult<T> = {
	status: number;
	data: T;
};

type SWRPeople = SWRAPIResult<{
	name: string;
	school: string;
}>;

type SWRPerson = {
	name: string;
	school: string;
};
const SWRLab = () => {
	const fetcher = (url: string) => axios.get(url).then((res) => res.data);
	const { data, error } = useSWR("/swrmocking", fetcher);

	console.log(data.people);

	if (error) return <div>failed to compile </div>;
	if (!data) return <div>...loading</div>;

	return (
		<>
			<h1>hello swr</h1>
			<ul>
				{data.people &&
					data.people.map((person: SWRPerson) => (
						<li>
							{person.name} / {person.school}
						</li>
					))}
			</ul>
		</>
	);
};

export default SWRLab;
