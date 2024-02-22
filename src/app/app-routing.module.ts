import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/:userId',
    loadChildren: () => import('./pages/acheteurs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'mon-panier',
    loadChildren: () => import('./pages/acheteurs/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'profile-acheteur',
    loadChildren: () => import('./pages/acheteurs/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'vendeurs/profil/:userId',
    loadChildren: () => import('./pages/vendeurs-pro/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./pages/acheteurs/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'chackout',
    loadChildren: () => import('./pages/acheteurs/chackout/chackout.module').then( m => m.ChackoutPageModule)
  },
  {
    path: 'boutiques',
    loadChildren: () => import('./pages/acheteurs/boutique/boutique.module').then( m => m.BoutiquePageModule)
  },
   {
    path: 'boutique-details/:id',
    loadChildren: () => import('./pages/acheteurs/boutique/boutique.module').then( m => m.BoutiquePageModule)
  },
  {
    path: 'vendeurs/dashboard/:userId',
    loadChildren: () => import('./pages/vendeurs-pro/dashbord/dashbord.module').then( m => m.DashbordPageModule)
  },
  {
    path: 'vendeurs/catalogue/:userId',
    loadChildren: () => import('./pages/vendeurs-pro/catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: 'vendeurs/payements/:userId',
    loadChildren: () => import('./pages/vendeurs-pro/payements/payements.module').then( m => m.PayementsPageModule)
  },
  {
    path: 'vendeurs/clients/:userId',
    loadChildren: () => import('./pages/vendeurs-pro/clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'vendeurs/commandes/:userId',
    loadChildren: () => import('./pages/vendeurs-pro/commandes/commandes.module').then( m => m.CommandesPageModule)
  },
  {
    path: 'vendeurs/promotions/:userId',
    loadChildren: () => import('./pages/vendeurs-pro/promotions/promotions.module').then( m => m.PromotionsPageModule)
  },

  {
    path: 'vendeurs/login',
    loadChildren: () => import('./pages/vendeurs-pro/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'vendeurs/register',
    loadChildren: () => import('./pages/vendeurs-pro/register/register.module').then( m => m.RegisterPageModule)
  },
   {
    path: 'vendeurs/register2',
    loadChildren: () => import('./pages/vendeurs-pro/register2/register2.module').then( m => m.Register2PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/acheteurs/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/acheteurs/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./pages/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/acheteurs/home/home.module').then( m => m.HomePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
