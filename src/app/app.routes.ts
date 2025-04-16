import { Routes } from "@angular/router";
import { authGuard } from "@guards/auth.guard";
import { userGuard } from "@guards/user.guard";

export const routes: Routes = [
	// {
	// 	path: "personal",
	// 	loadComponent: () =>
	// 		import("./pages/personal/personal.component").then(
	// 			(c) => c.PersonalComponent,
	// 		),
	// 	canActivate: [userGuard],
	// },
	{
		path: "login",
		loadComponent: () =>
			import("./pages/auth/continue/continue.component").then(
				(c) => c.ContinueComponent,
			),
		canActivate: [authGuard],
	},
	{
		path: "share-target",
		loadComponent: () =>
			import("./pages/share-target/share-target.component").then(
				(c) => c.ShareTargetComponent,
			),
	},
	{
		path: "admin",
		loadComponent: () =>
			import("./pages/admin/layout/layout.component").then(
				(c) => c.LayoutComponent,
			),
		children: [
			{
				path: "users",
				loadComponent: () =>
					import("./pages/admin/users/users.component").then(
						(c) => c.UsersComponent,
					),
			},
			{
				path: "courses",
				loadComponent: () =>
					import("./pages/admin/courses/courses.component").then(
						(c) => c.CoursesComponent,
					),
			},
			{
				path: "course-info/:id",
				loadComponent: () =>
					import("./pages/admin/course-info/course-info.component").then(
						(c) => c.CourseInfoComponent,
					),
			},
			{
				path: "home",
				loadComponent: () =>
					import("./pages/admin/home/home.component").then(
						(c) => c.HomeComponent,
					),
			},
			{
				path: "",
				redirectTo: "home",
				pathMatch: "full",
			},
		],
	},
	{
		path: "user",
		loadComponent: () =>
			import("./pages/user/layout/layout.component").then(
				(c) => c.LayoutComponent,
			),
		children: [
			{
				path: "free-playlist",
				loadComponent: () =>
					import("./pages/public/public.component").then(
						(c) => c.PublicComponent,
					),
			},
		],
	},
	// {
	// 	path: "",
	// 	children: [
	// 		{
	// 			path: "public",
	// 			loadComponent: () =>
	// 				import("./pages/public/public.component").then(
	// 					(c) => c.PublicComponent,
	// 				),
	// 		},
	// 		{
	// 			path: "",
	// 			loadComponent: () =>
	// 				import("./pages/home/home.component").then((c) => c.HomeComponent),
	// 		},
	// 	],
	// },
	{
		path: "**",
		loadComponent: () =>
			import("./pages/not-found/not-found.component").then(
				(c) => c.NotFoundComponent,
			),
	},
];
