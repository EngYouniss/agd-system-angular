import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AddMarriageContractComponent } from "./components/marriageContruct/add-marriage-contract/add-marriage-contract.component";

export const NOTARY_ROUTES: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'home/add-marriage-contract', component: AddMarriageContractComponent
  }

]

