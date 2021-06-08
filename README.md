# Demo of Capacitor Plugin Testing (Angular)

Right now, the testing of Capacitor plugins is a bit of a manual process due to the fact that the plugin objects in JavaScript are proxies and not POJOs. As a result it is difficult to mock them.

This [is being discussed](https://github.com/ionic-team/capacitor/discussions/4252) but nothing has been resolved yet as a long-term solution. Until then, this repo is a demo on one way to use perform the mocking and testing in Angular applications.

The idea here is to create POJOs that resemble the actual plugin objects and related types, and then using TypeScript mapping to load those instead of the plugins. At that point, we can properly mock them, etc. using Jasmine. So basically we create a fake, import the fake, then mock the fake.

Important bits of code:

- [The POJOs]()
- [The TypeScript Mapping]()
- [A Sample Test]()

