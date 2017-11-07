import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExternalComponent } from './templates/external.component';
import { InlineComponent } from './templates/inline.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ExternalComponent,
        InlineComponent
      ],
    }).compileComponents();
  }));

  it(`should have some tests`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // test here
  }));

});
