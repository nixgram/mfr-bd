import { Routes } from "@angular/router";
import { adminGuard } from "@guards/admin.guard";
import { authGuard } from "@guards/auth.guard";
import { userGuard } from "@guards/user.guard";

export const routes: Routes = [

	{
		path: "login",
		loadComponent: () => import("./pages/user/login.component").then(c => c.LoginComponent)
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
				canActivate: [adminGuard]
			},
			{
				path: "courses",
				loadComponent: () =>
					import("./pages/admin/courses/courses.component").then(
						(c) => c.CoursesComponent,
					),
				canActivate: [adminGuard]

			},
			{
				path: "course-info/:id",
				loadComponent: () =>
					import("./pages/admin/course-info/course-info.component").then(
						(c) => c.CourseInfoComponent,
					),
				canActivate: [adminGuard]

			},
			{
				path: "home",
				loadComponent: () =>
					import("./pages/admin/home/home.component").then(
						(c) => c.HomeComponent,
					),
				canActivate: [adminGuard]

			},
			{
				path: "login",
				loadComponent: () =>
					import("./pages/admin/admin-login.component").then(
						(c) => c.AdminLoginComponent,
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
				path: "home",
				loadComponent: () =>
					import("./pages/user/home/home.component").then(
						(c) => c.HomeComponent,
					),
			}, {
				path: "courses",
				loadComponent: () =>
					import("./pages/user/courses/courses.component").then(
						(c) => c.CoursesComponent,
					),
			}, {
				path: "access/:id",
				loadComponent: () =>
					import("./pages/user/access/access.component").then(
						(c) => c.AccessComponent,
					),
			},
			{
				path: "free-playlist",
				loadComponent: () =>
					import("./pages/public/public.component").then(
						(c) => c.PublicComponent,
					),
			},
			{
				path: "login",
				loadComponent: () => import("./pages/user/login.component").then(c => c.LoginComponent)
			}
		],
	},
	{
		path: "",
		children: [
			{
				redirectTo: "/user/home",
				pathMatch: "full",
				path: "",
			}
		],
	},
	{
		path: "**",
		loadComponent: () =>
			import("./pages/not-found/not-found.component").then(
				(c) => c.NotFoundComponent,
			),
	},
];
