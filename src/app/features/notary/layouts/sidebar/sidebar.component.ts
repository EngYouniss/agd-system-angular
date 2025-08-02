import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarService } from '../../../../shared/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  visible: boolean = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarVisible$.subscribe(v => {
      this.visible = v;
    });
  }

  onHide() {
    this.sidebarService.hide();
  }
}
