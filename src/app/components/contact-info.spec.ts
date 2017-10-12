import { ContactInfoComponent } from './contact-info';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

fdescribe('ContactInfo', () => {
  it('canary spec verifies test infrastructure', () => {
    expect(true).toBe(true);
  });

  describe('should behave as follows', () => {
    let de: DebugElement;
    let comp: ContactInfoComponent;
    let fixture: ComponentFixture<ContactInfoComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ContactInfoComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ContactInfoComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('div.contact-info-wrap'));
    });
      
    it('');
  });
});