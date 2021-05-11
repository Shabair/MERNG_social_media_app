import Layout from '../components/horizontalLayout/Layout'
// import AdminLayout from '../components/VerticalLayout/Layout'

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, pageTitle, ...rest }) => {
	const { isAuthenticated } = useAuth0();

	return (
		<Route
			{...rest}
			render={props =>
				(isAuthenticated) ? (
					<Layout pageTitle={pageTitle}>
						<Component {...props} />
					</Layout>
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	)
};


const AdminRoute = ({ component: Component, pageTitle, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			//isAuthenticated() && isAuthenticated().user.role === 1
			(1) ? (
				<Layout pageTitle={pageTitle}>
					<Component {...props} />
				</Layout>
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);

const PublicRoute = ({ component: Component, pageTitle, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			<Layout pageTitle={pageTitle}>
				<Component {...props} />
			</Layout>
		}
	/>
);

export { PublicRoute, AdminRoute, PrivateRoute };