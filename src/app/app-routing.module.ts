import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
    {
      path:'', pathMatch:'full', redirectTo:'home'
    },
    {
      path:'home', component:HomeComponent ,
      data: { animation: 'home'  }
    },
    {
      path:'detail', component:DetailComponent,
      data: { animation: 'detail' }
    },
    {
      path:'stats', component:StatsComponent,
      data: { animation: 'stats' }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
