import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private _messageService: MessageService) {}

  private messageSubject = new BehaviorSubject<Message | null>(null);
  message$ = this.messageSubject.asObservable();

  showSuccess(detail: string, summary: string = 'نجاح') {
    const msg: Message = {
      severity: 'success',
      summary,
      detail
    };
    this.messageSubject.next(msg);
  }

  add(msg: Message) {
    this._messageService.add(msg);
  }

  clear() {
    this.messageSubject.next(null);
    this._messageService.clear();
  }
}
