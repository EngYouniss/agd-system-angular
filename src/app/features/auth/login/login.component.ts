import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CheckboxModule } from 'primeng/checkbox';


@Component({
  selector: 'app-login',
  standalone: true,
    imports: [InputTextModule, PasswordModule,BadgeModule, ButtonModule,AvatarModule,CheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  username:string='';
  password:string='';


}
