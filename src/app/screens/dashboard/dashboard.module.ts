import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

import { SharedModule } from 'src/shared/shared.module';
import { InviteComponent } from './components/invite/invite.component';
import { TaskDialogComponent } from 'src/app/components/task-dialog/task-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    CheckboxModule,
    EditorModule,
    FileUploadModule,
    BadgeModule,
    ButtonModule,
  ],
  declarations: [
    InviteComponent,
    TaskDialogComponent
  ],
  exports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    CheckboxModule,
    EditorModule,
    FileUploadModule,
    BadgeModule,
    ButtonModule,
    InviteComponent,
    TaskDialogComponent
  ]
})
export class DashboardModule { }
