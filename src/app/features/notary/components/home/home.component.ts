import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [


] ,
   templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  contractTypes = [
    { name: 'عقد عمل', code: 'EMP' },
    { name: 'عقد إيجار', code: 'RENT' },
    { name: 'عقد شراكة', code: 'PART' },
    { name: 'عقد بيع', code: 'SALE' }
  ];
}
