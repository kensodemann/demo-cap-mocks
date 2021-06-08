import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    SplashScreen.hide();
    StatusBar.setStyle({style: Style.Dark})
    StatusBar.hide();
  }
}
