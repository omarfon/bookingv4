import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { DetailDoctorComponent } from './pages/detail-doctor/detail-doctor.component';
import { NologinGuard } from './nologin.guard';

const routes: Routes = [
  {
    path: '',
    component:OnboardingComponent,
    pathMatch: 'full',
    /* canActivate: [NologinGuard]  */
  },
  {
    path: 'onboarding',
    component:OnboardingComponent,
    canActivate: [NologinGuard] 
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'card/:data',
    loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'financer',
    loadChildren: () => import('./pages/financer/financer.module').then(m => m.FinancerPageModule)
  },
  {
    path: 'financer/:data',
    loadChildren: () => import('./pages/financer/financer.module').then(m => m.FinancerPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pages/pay/pay.module').then(m => m.PayPageModule)
  },
  {
    path: 'pay/:datos',
    loadChildren: () => import('./pages/pay/pay.module').then(m => m.PayPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'create-parent-prime',
    loadChildren: () => import('./pages/create-parent-prime/create-parent-prime.module').then(m => m.CreateParentPrimePageModule)
  },
  {
    path: 'createparent',
    loadChildren: () => import('./pages/createparent/createparent.module').then(m => m.CreateparentPageModule)
  },
  {
    path: 'myparents',
    loadChildren: () => import('./pages/myparents/myparents.module').then(m => m.MyparentsPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./pages/options/options.module').then(m => m.OptionsPageModule)
  },
  {
    path: 'page-video/:data',
    loadChildren: () => import('./pages/page-video/page-video.module').then(m => m.PageVideoPageModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./pages/recipe/recipe.module').then(m => m.RecipePageModule)
  },
  {
    path: 'recovery',
    loadChildren: () => import('./pages/recovery/recovery.module').then(m => m.RecoveryPageModule)
  },
  {
    path: 'recovery/:data',
    loadChildren: () => import('./pages/recovery/recovery.module').then(m => m.RecoveryPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'my-dates',
    loadChildren: () => import('./pages/my-dates/my-dates.module').then(m => m.MyDatesPageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./pages/recipes/recipes.module').then(m => m.RecipesPageModule)
  },
  {
    path: 'my-date',
    loadChildren: () => import('./pages/my-date/my-date.module').then(m => m.MyDatePageModule)
  },
  {
    path: 'my-date/:datos',
    loadChildren: () => import('./pages/my-date/my-date.module').then(m => m.MyDatePageModule)
  },
  {
    path: 'telecon',
    loadChildren: () => import('./pages/telecon/telecon.module').then(m => m.TeleconPageModule)
  },
  {
    path: 'waiting-video/:data',
    loadChildren: () => import('./pages/waiting-video/waiting-video.module').then(m => m.WaitingVideoPageModule)
  },
  {
    path: 'detail-doctor',
    component:DetailDoctorComponent
  },
];

@NgModule({
  imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
