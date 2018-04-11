import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { NewsComponent } from './pages/news/news.component';
import { AppRoutingModule } from './/app-routing.module';
import { AnalyticsDataService } from './providers/analytics-data.service';

const routes: Routes = [
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'news', component: NewsComponent },
  { path: '', redirectTo: 'analytics', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ AnalyticsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
