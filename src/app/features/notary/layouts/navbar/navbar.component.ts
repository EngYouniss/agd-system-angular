import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    MenuModule,
    ButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  profileMenuItems: MenuItem[] = [];
  notifications: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'الرئيسية', icon: 'pi pi-home' },
      { label: 'الميزات', icon: 'pi pi-star' },
      { label: 'تواصل معنا', icon: 'pi pi-envelope', badge: '3' }
    ];

    this.profileMenuItems = [
      {
        label: 'الملف الشخصي',
        icon: 'pi pi-user',
        command: () => {
          console.log('عرض الملف الشخصي');
        }
      },
      {
        label: 'الإعدادات',
        icon: 'pi pi-cog',
        command: () => {
          console.log('فتح الإعدادات');
        }
      },
      { separator: true },
      {
        label: 'تسجيل الخروج',
        icon: 'pi pi-sign-out',
        command: () => {
          console.log('تسجيل الخروج');
        }
      }
    ];

    this.notifications = [
      {
        label: 'طلب تبرع جديد',
        icon: 'pi pi-inbox',
        command: () => {
          console.log('عرض الإشعار 1');
        }
      },
      {
        label: 'تم قبول تبرعك',
        icon: 'pi pi-check-circle',
        command: () => {
          console.log('عرض الإشعار 2');
        }
      },
      {
        label: 'تحديث في حسابك',
        icon: 'pi pi-cog',
        command: () => {
          console.log('عرض الإشعار 3');
        }
      }
    ];
  }
}
