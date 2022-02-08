import { rest } from "msw";

export const handlers = [
	rest.get("/test", async (req, res, ctx) => {
		return res(
			ctx.json({
				id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
				firstName: "John",
				lastName: "Maverick",
			}),
		);
	}),

	rest.get(
		"https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=reactLab",
		async (req, res, ctx) => {
			const id = req.url.searchParams.get("id");
			const originalResponse = await ctx.fetch(req);
			const originalResponseData = await originalResponse.json();
			return res(
				ctx.json({
					data: {
						people: [
							...originalResponseData.data.people,
							{
								name: "jeongho",
								age: 135,
							},
							{
								name: id,
								age: 13,
							},
						],
					},
				}),
			);
		},
	),
];
