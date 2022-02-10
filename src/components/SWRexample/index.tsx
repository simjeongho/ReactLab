import axios from "axios";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const SWRProfile = () => {
	const { data, error } = useSWR("/api/swr", fetcher);

	if (error) return <div>failed to compile </div>;
	if (!data) return <div>...loading</div>;

	return <div>hello {data.name}</div>;
};

export default SWRProfile;
