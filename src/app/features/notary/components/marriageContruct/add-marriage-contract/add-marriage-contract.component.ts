import { Component } from '@angular/core';
import {
  FormBuilder, Validators, FormArray, FormControl,
  ReactiveFormsModule, FormsModule
} from '@angular/forms';

import { NavbarComponent } from "../../../layouts/navbar/navbar.component";
import { NgForm } from '@angular/forms';

/* PrimeNG */
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { TooltipModule } from 'primeng/tooltip';
import { NgIf } from '@angular/common';

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
    CheckboxModule, InputMaskModule, TooltipModule,
    NgIf
],
  templateUrl: './add-marriage-contract.component.html',
  styleUrl: './add-marriage-contract.component.scss'
})
export class AddMarriageContractComponent {
today = new Date();

husband = {
  // الاسم الرباعي
  firstName: '', fatherName: '', grandName: '', familyName: '',
  // وثيقة إثبات الشخصية
  idType: null as string | null,
  idNumber: '',
  idIssuer: '',
  idIssueDateG: null as Date | null,
  // الميلاد
  birthGov: null as string | null,
  birthDistrict: '',
  birthDateG: null as Date | null,
  birthDateH: '',
  // الإقامة المعتادة
  resGov: null as string | null,
  resDistrict: '',
  nationality: null as string | null,
  // حالات أخرى
  prevStatus: null as string | null,
  education: null as string | null,
  job: '',
  motherFullName: '',
  // موافقة وبصمة
  consent: false,
  fingerprintFile: null as File | null,
  fingerprintPreview: '' as string | ''
};

idTypes = [
  { label: 'بطاقة شخصية', value: 'nid' },
  { label: 'جواز سفر',   value: 'passport' },
  { label: 'رخصة قيادة', value: 'license' },
  { label: 'وثيقة أخرى', value: 'other' }
];

governorates = [
  { label: 'صنعاء', value: 'sanaa' },
  { label: 'تعز',   value: 'taiz'  },
  { label: 'إب',    value: 'ibb'   },
  { label: 'الحديدة', value: 'hodeidah' },
  { label: 'عدن', value: 'aden' }
];

nationalities = [
  { label: 'يمني', value: 'YE' },
  { label: 'سعودي', value: 'SA' },
  { label: 'مصري', value: 'EG' },
  { label: 'أخرى', value: 'OTHER' }
];

prevMaritalStatuses = [
  { label: 'أعزب', value: 'single' },
  { label: 'متزوج سابقًا', value: 'married_before' },
  { label: 'مطلّق', value: 'divorced' },
  { label: 'أرمل', value: 'widower' }
];

educations = [
  { label: 'ثانوي', value: 'hs' },
  { label: 'دبلوم', value: 'diploma' },
  { label: 'بكالوريوس', value: 'bachelor' },
  { label: 'ماجستير', value: 'master' },
  { label: 'دكتوراه', value: 'phd' }
];

onHusbandNext(form: any, next: any) {
  if (form.invalid || !this.husband.consent) {
    form.form.markAllAsTouched();
    return;
  }
  next.emit();
}

onFingerprintChange(e: Event) {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) { this.husband.fingerprintFile = null; this.husband.fingerprintPreview = ''; return; }
  this.husband.fingerprintFile = file;
  const reader = new FileReader();
  reader.onload = () => { this.husband.fingerprintPreview = String(reader.result || ''); };
  reader.readAsDataURL(file);
}

}
