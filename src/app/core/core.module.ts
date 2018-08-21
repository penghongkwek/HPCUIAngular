import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RequestInterceptor, ResponseInterceptor } from './interceptors';
import { FakeBackendService } from './services/fake-backend.service';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    FakeBackendService,
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [AuthService, DataService]
    };
  }
}
