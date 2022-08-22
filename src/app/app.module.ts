import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ViewsModule } from '@views/views.module';
import { SharedModule } from '@shared/shared.module';
import { MomentModule } from 'ngx-moment';
import { AppComponent } from './app.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { InterceptorHttpService } from '@shared/servers/interceptor-http/interceptor-http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ViewsModule,
    SharedModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss')
        }
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorHttpService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
