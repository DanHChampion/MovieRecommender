import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPageComponent } from './question.component';

describe('QuestionPageComponent', () => {
    let component: QuestionPageComponent;
    let fixture: ComponentFixture<QuestionPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [QuestionPageComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(QuestionPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
