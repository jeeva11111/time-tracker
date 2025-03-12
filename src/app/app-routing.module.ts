import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./Shared/notfound/notfound.component";

// const routes: Routes = [
//   {path: '', redirectTo: 'home', pathMatch: 'full'},
//   {
//     path: 'home',
//     component: HomeComponent,
//     children: [
//       {path: '', redirectTo: 'time', pathMatch: 'full'},
//       {path: 'profile', component: ProfileComponent},
//       {path: 'settings', component: SettingsComponent},
//       {path: 'time', component: TimeComponent},
//     ]
//   },
//   {path: '**', component: NotfoundComponent},
// ];

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: '', redirectTo: 'time', pathMatch: 'full'},
      {path: 'profile', loadChildren: () => import('./Modules/profile/profile.module').then(m => m.ProfileModule)},
      {path: 'settings', loadChildren: () => import('./Modules/settings/settings.module').then(m => m.SettingsModule)},
      {path: 'time', loadChildren: () => import('./Modules/time/time.module').then(m => m.TimeModule)},
    ]
  },
  {path: '**', component: NotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
