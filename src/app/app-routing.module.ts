import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AboutMeComponent} from './about-me/about-me.component';
import{ ProjectsComponent} from './projects/projects.component';



const routes: Routes = [
  { path: '',   redirectTo: '/about-me', pathMatch: 'full' },
  {path : 'about-me', component: AboutMeComponent},
  {path: "projects", component: ProjectsComponent},
  { path: '**', component:  AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
