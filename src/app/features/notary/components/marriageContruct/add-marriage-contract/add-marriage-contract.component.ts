import { Component } from '@angular/core';
import { NavbarComponent } from "../../../layouts/navbar/navbar.component";
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-add-marriage-contract',
  standalone: true,
  imports: [NavbarComponent,StepperModule, ButtonModule],
  templateUrl: './add-marriage-contract.component.html',
  styleUrl: './add-marriage-contract.component.scss'
})
export class AddMarriageContractComponent {

}
