import type { NextPage } from "next";
import Image from "next/image";
import loginPic from "public/icons/login.svg";
import React, { useState } from "react";
import { getUser } from "services/getUser";
import { user } from "types/global";
import { Loading } from "components/atoms/Loading";
import { InputLabelFloat } from "components/atoms/InputLabelFloat";
import { useRouter } from "next/router";

const Login: NextPage = () => {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const handleLogin = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const userLogin: user = {
			email: e.target.email.value,
			password: e.target.pass.value,
		};
		getUser(userLogin)
			.then((res) => {
				console.log(res);
				setLoading(false);
				router.push("dashboard");
			})
			.catch((e) => {
				console.log(e);
				setError(e);
				setLoading(false);
			});
	};
	return (
		<>
			<section>
				<div className="headerBox">
					<div className="imgContainer">
						<Image src={loginPic} width={30} height={30} />
					</div>
					<h1>Sign in</h1>
				</div>
				<div className="formContainer">
					<form onSubmit={handleLogin}>
						<InputLabelFloat
							name={"email"}
							type={"email"}
							disabled={loading}
							required={true}
							autoFocus={true}
							autoComplete={true}
						>
							Email Address *
						</InputLabelFloat>
						<InputLabelFloat
							name={"pass"}
							type={"password"}
							disabled={loading}
							required={true}
							autoComplete={true}
						>
							Password *
						</InputLabelFloat>
						{error && (
							<div className="errorContainer">
								<p>{error}</p>
							</div>
						)}
						<div className="buttonContainer">
							<button disabled={loading}>{loading ? "" : "Login"}</button>
							{loading && <Loading size={"2rem"} />}
						</div>
					</form>
				</div>
			</section>
			<style jsx>
				{`
					section {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						width: 30rem;
						height: 30rem;
						position: absolute;
						top: calc(50% - 15rem);
						left: calc(50% - 15rem);
						border: solid 1px #d9dce0;
						border-radius: 5px;
						background-color: white;
						z-index: -2;
					}

					.headerBox {
						position: absolute;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						top: 1rem;
						width: 100%;
						text-align: center;
						user-select: none;
					}

					.imgContainer {
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 100%;
						background-color: #9c27b0;
						width: 3rem;
						height: 3rem;
					}

					.headerBox h1 {
						font-weight: 400;
						font-size: 1.5rem;
						letter-spacing: 0em;
					}

					.buttonContainer {
						display: flex;
						justify-content: center;
						align-items: center;
						position: absolute;
						bottom: 2rem;
						right: 2rem;
						width: calc(100% - 4rem);
						height: 2.5rem;
					}

					button {
						width: 100%;
						height: 2.5rem;
						background-color: #032d5fff;
						color: white;
						font-weight: bolder;
						border: none;
						border-radius: 0.3rem;
						line-height: 25px;
						cursor: pointer;
						text-transform: uppercase;
					}

					button:hover {
						box-shadow: 1px 1px 8px -2px #032d5fff;
					}

					.errorContainer {
						color: rgba(200, 0, 0, 1);
					}
				`}
			</style>
		</>
	);
};

export default Login;
