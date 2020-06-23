import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';

// import { GridModule } from 'carbon-components-angular';
import { NgModule } from '@angular/core';
import {
	BreadcrumbModule,
	ButtonModule,
	GridModule,
	TabsModule,
	} from 'carbon-components-angular';




describe('LandingPageComponent', () => {
	let component: LandingPageComponent;
	let fixture: ComponentFixture<LandingPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LandingPageComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LandingPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

@NgModule({
	imports: [BreadcrumbModule, ButtonModule, GridModule, TabsModule]
})
export class HomeModule { }




