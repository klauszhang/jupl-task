import { TestBed, async } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ComponentFixture } from "@angular/core/testing";

describe('HeaderComponent', () => {
    let comp: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        });
        fixture = TestBed.createComponent(HeaderComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
    }));

    it('should be created', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render `Jupl Device Manager` in a h1 tag', async(() => {
        fixture.detectChanges();
        expect(el.querySelector('h1').textContent).toContain('Jupl Device Manager');
    }));
});
