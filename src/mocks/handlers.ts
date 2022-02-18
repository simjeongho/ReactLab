import { LoginRequest } from "./../auth/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "./../store/slice/user";
import { rest, RestRequest } from "msw";

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
	rest.get("/api/swr", async (req, res, ctx) => {
		return res(
			ctx.json({
				name: "jeongho",
			}),
		);
	}),

	rest.post("/login/testlogin", async (req: RestRequest<LoginRequest>, res, ctx) => {
		const json = JSON.stringify(req.body);
		console.log(json);
		console.log(req.body);
		const { id } = req.body;
		if (id === "jeongho") {
			return res(
				ctx.json({
					loginRequest: {
						id: "id == 정호",
						password: "daeun test",
					},
					admin: true,
					message: "/login/testlogin",
				}),
			);
		} else {
			return res(
				ctx.json({
					loginRequest: {
						id: "id 정호아님",
						password: "daeun test",
					},
					admin: true,
					message: "/login/testlogin",
				}),
			);
		}
	}),

	rest.post("loginlaboratory", async (req: RestRequest<LoginRequest>, res, ctx) => {
		const { id, password } = req.body;
		if (id === "jeongho" && password === "daeun") {
			return res(
				ctx.json({
					loginRequest: {
						id: id,
						password: password,
					},
					loginState: true,
					admin: true,
					message: "/loginlaboratory admin",
				}),
			);
		} else {
			return res(
				ctx.json({
					loginRequest: {
						id: id,
						password: password,
					},
					loginState: true,
					admin: false,
					message: "/loginlaboratory not admin",
				}),
			);
		}
	}),

	rest.get("/swrmocking", async (req, res, ctx) => {
		return res(
			ctx.json({
				people: [
					{
						name: "jeongho",
						school: "inha",
					},
					{
						name: "daeun",
						school: "inha",
					},
					{
						name: "suri",
						school: "street",
					},
				],
			}),
		);
	}),
];
