import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { SplashScreen, } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('hides the splash screen', () => {
    spyOn(SplashScreen, 'hide');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(SplashScreen.hide).toHaveBeenCalledTimes(1);
  });

  it('styles the status bar', () => {
    spyOn(StatusBar, 'setStyle');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(StatusBar.setStyle).toHaveBeenCalledTimes(1);
    expect(StatusBar.setStyle).toHaveBeenCalledWith({ style: Style.Dark });
  });

  it('hides the status bar for some reason because that makes sense after styling it...', () => {
    spyOn(StatusBar, 'hide');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(StatusBar.hide).toHaveBeenCalledTimes(1);
  });
});
