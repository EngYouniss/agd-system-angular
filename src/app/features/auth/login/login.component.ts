import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CheckboxModule } from 'primeng/checkbox';
import { Router, RouterLink } from '@angular/router';
import { IUser } from '../../../core/models/iuser';
import { AuthService } from '../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule,
    PasswordModule,
    BadgeModule,
    ButtonModule,
    AvatarModule,
    CheckboxModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastModule,
    RippleModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private _userService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _ngxSpinner: NgxSpinnerService,
    private _messageService:MessageService
  ) {

  }
  ngOnInit(): void {
    this._ngxSpinner.show();
    setTimeout(() => {
      this._ngxSpinner.hide();
    }, 3000);
  }
  user: IUser = {} as IUser;
  message: string = '';
  form = this._formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required,],
    }
  )

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    this._ngxSpinner.show();
    setTimeout(() => {
      this._ngxSpinner.hide();
    }, 3000)
    this._userService.login(email!, password!).subscribe(data => {

      if (data.length > 0) {
        this.user = data[0]
        this.message = 'تم تسجيل الدخول بنجاح!';
        this.show()

        this._router.navigateByUrl('/notary/home');


      } else {
        this.message = 'يوجد خطأ في الإيميل او كلمة المرور';
        this.show()
      }
    });
  }

 show() {
        this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

  isInvalid(field: string, error: string) {
    return this.form.get(field)?.errors?.[error] && this.form.get(field)?.dirty;
  }




}
