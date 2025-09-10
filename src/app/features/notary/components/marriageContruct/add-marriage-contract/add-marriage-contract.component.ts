import { Component } from '@angular/core';
import {
  FormBuilder, Validators, FormArray, FormControl,
  ReactiveFormsModule, FormsModule
} from '@angular/forms';

import { NavbarComponent } from "../../../layouts/navbar/navbar.component";

/* PrimeNG */
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { TooltipModule } from 'primeng/tooltip';

interface Option { label: string; value: any; }

@Component({
  selector: 'app-add-marriage-contract',
  standalone: true,
  imports: [
    NavbarComponent,
    /* Stepper + أزرار */
    StepperModule, ButtonModule,
    /* للفورم */
    FormsModule, ReactiveFormsModule,
    InputTextModule, DropdownModule, CalendarModule,
    CheckboxModule, InputMaskModule, TooltipModule
  ],
  templateUrl: './add-marriage-contract.component.html',
  styleUrl: './add-marriage-contract.component.scss'
})
export class AddMarriageContractComponent {

  // خيارات القوائم
  regions: Option[] = [
    {label:'الرياض', value:'riyadh'},
    {label:'مكة المكرمة', value:'makkah'},
    {label:'المدينة المنورة', value:'madinah'},
    {label:'الشرقية', value:'east'}
  ];
  cities: Option[] = [
    {label:'الرياض', value:'riyadh'},
    {label:'جدة', value:'jeddah'},
    {label:'الدمام', value:'dammam'}
  ];
  nationalities: Option[] = [
    {label:'سعودية', value:'sa'},
    {label:'مصرية', value:'eg'},
    {label:'يمنية', value:'ye'}
  ];
  education: Option[] = [
    {label:'ثانوي', value:'highschool'},
    {label:'دبلوم', value:'diploma'},
    {label:'جامعي', value:'bachelor'},
    {label:'دراسات عليا', value:'grad'}
  ];
  social: Option[] = [
    {label:'عزباء', value:'single'},
    {label:'متزوجة', value:'married'},
    {label:'مطلقة', value:'divorced'},
    {label:'أرملة', value:'widowed'}
  ];

  /* === نموذج بيانات الزوجة (الخطوة 1) === */
  wifeForm = this.fb.group({
    name: ['', Validators.required],
    idType: [''],
    idNumber: this.fb.array(new Array(10).fill(null).map(() => this.fb.control(''))),
    idIssueDate: [null],
    idIssuer: [''],
    nationality: [''],
    birthPlace: [''],
    birthDate: [null],
    habitualRegion: [''],
    habitualCity: [''],
    socialStatus: [''],
    job: [''],
    educationLevel: [''],
    status: [''],
    motherFullName: [''],
    consentSelf: [false],
    phone: ['']
  });

  constructor(private fb: FormBuilder) {}

  /* أدوات مساعدة لرقم الهوية */
  get idBoxes(): FormArray { return this.wifeForm.get('idNumber') as FormArray; }
  getIdBox(i: number): FormControl { return this.idBoxes.at(i) as FormControl; }

  onIdInput(e: Event, i: number) {
    const input = e.target as HTMLInputElement;
    const max = input.maxLength > 0 ? input.maxLength : 1;
    if (input.value.length >= max) {
      const wrap = input.parentElement; if (!wrap) return;
      const inputs = wrap.querySelectorAll('input.nid-box');
      const next = inputs[i + 1] as HTMLInputElement | undefined;
      next?.focus();
    }
  }
  onIdBackspace(e: KeyboardEvent, i: number) {
    const input = e.target as HTMLInputElement;
    if (e.key === 'Backspace' && !input.value) {
      const wrap = input.parentElement; if (!wrap) return;
      const inputs = wrap.querySelectorAll('input.nid-box');
      const prev = inputs[i - 1] as HTMLInputElement | undefined;
      if (prev) { prev.focus(); prev.select(); }
    }
  }
}
