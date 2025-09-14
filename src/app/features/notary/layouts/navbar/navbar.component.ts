// topbar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import type { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, AvatarModule, MenuModule, BadgeModule, RippleModule],
   templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  q = '';
  unreadCount = 5;
  mobileOpen = false;

  notifItems: MenuItem[] = [
    { label: 'إشعار 1', icon: 'pi pi-bell' },
    { label: 'إشعار 2', icon: 'pi pi-bell' },
    { separator: true },
    { label: 'عرض الكل', icon: 'pi pi-inbox', routerLink: ['/notifications'] }
  ];

  profileItems: MenuItem[] = [
    { label: 'الملف الشخصي', icon: 'pi pi-user', routerLink: ['/profile'] },
    { label: 'الإعدادات', icon: 'pi pi-cog', routerLink: ['/settings'] },
    { separator: true },
    { label: 'تسجيل الخروج', icon: 'pi pi-sign-out', command: () => {/* نفّذ الخروج */} }
  ];

  mainLinks: MenuItem[] = [
    { label: 'الرئيسية', icon: 'pi pi-home', routerLink: ['/dashboard'] },
    { label: 'العقود', icon: 'pi pi-book', routerLink: ['/contracts'] },
    { label: 'الأشخاص', icon: 'pi pi-users', routerLink: ['/people'] },
    { label: 'التقارير', icon: 'pi pi-chart-bar', routerLink: ['/reports'] }
  ];

  onSearch() {
    if (!this.q?.trim()) return;
    // نفّذ عملية البحث أو انتقل لصفحة نتائج
    // this.router.navigate(['/search'], { queryParams: { q: this.q.trim() } });
  }
}
