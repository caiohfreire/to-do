import { NgModule } from '@angular/core';
import { LockKeyhole, LucideAngularModule, User } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      User,
      LockKeyhole
    })
  ],
  exports: [
    LucideAngularModule
  ]
})
export class SharedModule { }
