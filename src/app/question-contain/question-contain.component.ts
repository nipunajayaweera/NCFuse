import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, QueryList, ViewChildren, ViewEncapsulation, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { fuseAnimations } from '../core/animations';
import { FusePerfectScrollbarDirective } from '../core/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { QuestionContainService } from '../Services/question-contain.service';
@Component({
  selector: 'app-question-contain',
  templateUrl: './question-contain.component.html',
  styleUrls: ['./question-contain.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations,
  providers :[QuestionContainService]
})
export class QuestionContainComponent implements OnInit, OnDestroy, AfterViewInit {

  course: any;
  courseSubscription: Subscription;
  currentStep = 0;
  courseStepContent;
  animationDirection: 'left' | 'right' | 'none' = 'none';
  @ViewChildren(FusePerfectScrollbarDirective) fuseScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

  constructor(
      private questionContainService: QuestionContainService,
      private changeDetectorRef: ChangeDetectorRef
  )
  {

  }

  ngOnInit()
  {
      // Subscribe to courses
       this.course = this.questionContainService.getQuestions();
      //     // this.courseService.onCourseChanged
      //     //     .subscribe(course => {
      //     //         this.course = course;
      //     //     });
      //     console.log(this.course);

      // this.courseSubscription = this.questionContainService.onCourseChanged.subscribe(course =>{this.course = course});
      // console.log(this.course);
  }
  ngAfterViewInit()
  {
      this.courseStepContent = this.fuseScrollbarDirectives.find((fuseScrollbarDirective) => {
          return fuseScrollbarDirective.element.nativeElement.id === 'course-step-content';
      });
  }

  ngOnDestroy()
  {
      this.courseSubscription.unsubscribe();
  }

  gotoStep(step)
  {
      // Decide the animation direction
      this.animationDirection = this.currentStep < step ? 'left' : 'right';

      // Run change detection so the change
      // in the animation direction registered
      this.changeDetectorRef.detectChanges();

      // Set the current step
      this.currentStep = step;
  }

  gotoNextStep()
  {
      if ( this.currentStep === this.course.totalSteps - 1 )
      {
          return;
      }

      // Set the animation direction
      this.animationDirection = 'left';

      // Run change detection so the change
      // in the animation direction registered
      this.changeDetectorRef.detectChanges();

      // Increase the current step
      this.currentStep++;
  }

  gotoPreviousStep()
  {
      if ( this.currentStep === 0 )
      {
          return;
      }

      // Set the animation direction
      this.animationDirection = 'right';

      // Run change detection so the change
      // in the animation direction registered
      this.changeDetectorRef.detectChanges();

      // Decrease the current step
      this.currentStep--;
  }
}
