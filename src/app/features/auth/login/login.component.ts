import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';

import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

import { IUser } from '../../../core/models/iuser';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../../../core/services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    AvatarModule,
    BadgeModule,
    CheckboxModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastModule,
    RippleModule
  ],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {

  form = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _spinner: NgxSpinnerService,
    private _messageService: MessageService,
    private _tokenService:TokenService
  ) {}

  ngOnInit(): void {
    this._showSpinnerBriefly();
  }

  private _showSpinnerBriefly(): void {
    this._spinner.show();
    setTimeout(() => this._spinner.hide(), 1000);
  }

  login(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.value;

    this._spinner.show();

    this._authService.login(email!, password!).subscribe({
      next: (res) => {
        this._spinner.hide();

        if (res.status === 'success') {
          this._tokenService.setToken(res.token);
          console.log(res.token);

          this._showMessage('success', 'تم تسجيل الدخول بنجاح');
          this._router.navigate(['/notary/home']);
        } else {
          this._showMessage('error', 'خطأ في الإيميل أو كلمة المرور');
        }
      },
      error: () => {
        this._spinner.hide();
        this._showMessage('error', 'خطأ في السيرفر');
      }
    });
  }

  private _showMessage(severity: 'success' | 'error', message: string): void {
    this._messageService.add({
      severity,
      summary: severity === 'success' ? 'نجاح' : 'خطأ',
      detail: message,
    });
  }

  isInvalid(field: string, error: string): boolean {
    const control = this.form.get(field);
    return !!(control?.errors?.[error] && control?.touched);
  }
}
