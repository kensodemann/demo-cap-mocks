# Demo of Capacitor Plugin Testing (Angular)

Right now, the testing of Capacitor plugins is a bit of a manual process due to the fact that the plugin objects in JavaScript are proxies and not POJOs. As a result it is difficult to mock them.

This [is being discussed](https://github.com/ionic-team/capacitor/discussions/4252) but nothing has been resolved yet as a long-term solution. Until then, this repo is a demo on one way to use perform the mocking and testing in Angular applications.

The idea here is to create POJOs that resemble the actual plugin objects and related types, and then using TypeScript mapping to load those instead of the plugins. At that point, we can properly mock them, etc. using Jasmine. So basically we create a fake, import the fake, then mock the fake.

Important bits of code:

- [The POJOs](https://github.com/kensodemann/demo-cap-mocks/tree/main/__mocks__/%40capacitor)
- [The TypeScript Mapping](https://github.com/kensodemann/demo-cap-mocks/blob/main/tsconfig.spec.json#L6-L8)
- [A Sample Test](https://github.com/kensodemann/demo-cap-mocks/blob/main/src/app/app.component.spec.ts)

