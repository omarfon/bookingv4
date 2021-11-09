import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'appoinment',
    loadChildren: () => import('./pages/appoinment/appoinment.module').then(m => m.AppoinmentPageModule)
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
    path: 'card-cuida',
    loadChildren: () => import('./pages/card-cuida/card-cuida.module').then(m => m.CardCuidaPageModule)
  },
  {
    path: 'charge',
    loadChildren: () => import('./pages/charge/charge.module').then(m => m.ChargePageModule)
  },
  {
    path: 'code',
    loadChildren: () => import('./pages/code/code.module').then(m => m.CodePageModule)
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
    path: 'master-detail',
    loadChildren: () => import('./pages/master-detail/master-detail.module').then(m => m.MasterDetailPageModule)
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
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then(m => m.DatosPageModule)
  },
  {
    path: 'detail-recipe',
    loadChildren: () => import('./pages/detail-recipe/detail-recipe.module').then(m => m.DetailRecipePageModule)
  },
  {
    path: 'form-register',
    loadChildren: () => import('./pages/form-register/form-register.module').then(m => m.FormRegisterPageModule)
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
    path: 'page-faceform',
    loadChildren: () => import('./pages/page-faceform/page-faceform.module').then(m => m.PageFaceformPageModule)
  },
  {
    path: 'page-formpre',
    loadChildren: () => import('./pages/page-formpre/page-formpre.module').then(m => m.PageFormprePageModule)
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
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
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
    path: 'recomendations',
    loadChildren: () => import('./pages/recomendations/recomendations.module').then(m => m.RecomendationsPageModule)
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
