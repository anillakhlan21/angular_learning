import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LifeCycleHooksComponent } from './topics/life-cycle-hooks/life-cycle-hooks.component';
import { DataBindingComponent } from './topics/data-binding/data-binding.component';
import { ServicesDependencyComponent } from './topics/services-dependency/services-dependency.component';
import { HttpComponent } from './topics/http/http.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOnChangesComponent } from './topics/life-cycle-hooks/hooks/ngOnChanges/ngOnChanges.component';
import { ChildAComponent } from './topics/life-cycle-hooks/hooks/ngOnChanges/child-A/child-A.component'
import { ChildBComponent } from './topics/life-cycle-hooks/hooks/ngDoCheck/child-B/child-B.component'
import { NgDoCheckComponent } from './topics/life-cycle-hooks/hooks/ngDoCheck/ngDoCheck.component';
import { ChildCComponent } from './topics/life-cycle-hooks/hooks/ngAfterContentInit/child-c/child-c.component';
import { NgAfteContentInitComponent } from './topics/life-cycle-hooks/hooks/ngAfterContentInit/ngAfteContentInit.component';
import { NgAfteContentCheckedComponent } from './topics/life-cycle-hooks/hooks/ngAfterContentChecked/ngAfterContentChecked.component';
import { ChildDComponent } from './topics/life-cycle-hooks/hooks/ngAfterContentChecked/child-d/child-d.component';
import { NgAfteViewInitComponent } from './topics/life-cycle-hooks/hooks/ngAfteViewInit/ngAfteViewInit.component';
import { NgAfterViewCheckedComponent } from './topics/life-cycle-hooks/hooks/ngAfterViewChecked/ngAfterViewChecked.component';
import { ChildEComponent } from './topics/life-cycle-hooks/hooks/ngOnDestroy/child-e/child-e.component';
import { NgOnDestroyComponent } from './topics/life-cycle-hooks/hooks/ngOnDestroy/ngOnDestroy.component';
import { TheoryComponent } from './topics/directives/theory/theory.component';
import { ComponentDirectiveComponent } from './topics/directives/component-directive/component-directive.component';
import { NgIfDirectiveComponent } from './topics/directives/structural-directives/built-in/ng-if-directive/ng-if-directive.component';
import { NgForDirectiveComponent } from './topics/directives/structural-directives/built-in/ng-for-directive/ng-for-directive.component';
import { NgSwitchCaseDirectiveComponent } from './topics/directives/structural-directives/built-in/ng-switch-case-directive/ng-switch-case-directive.component';
import { NgStyleDirectiveComponent } from './topics/directives/attribute-directives/built-in/ng-style-directive/ng-style-directive.component';
import { NgClassDirectiveComponent } from './topics/directives/attribute-directives/built-in/ng-class-directive/ng-class-directive.component';
import { NgModelDirectiveComponent } from './topics/directives/attribute-directives/built-in/ng-model-directive/ng-model-directive.component';
import { PipeTheoryComponent } from './topics/pipes/pipe-theory/pipe-theory.component';
import { DatePipeComponent } from './topics/pipes/built-in/date-pipe/date-pipe.component';
import { UpperCasePipeComponent } from './topics/pipes/built-in/upper-case-pipe/upper-case-pipe.component';
import { LowerCasePipeComponent } from './topics/pipes/built-in/lower-case-pipe/lower-case-pipe.component';
import { SlicePipeComponent } from './topics/pipes/built-in/slice-pipe/slice-pipe.component';
import { NumberPipeComponent } from './topics/pipes/built-in/number-pipe/number-pipe.component';
import { PercentPipeComponent } from './topics/pipes/built-in/percent-pipe/percent-pipe.component';
import { CurrencyPipeComponent } from './topics/pipes/built-in/currency-pipe/currency-pipe.component';


import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { JsonPipeComponent } from './topics/pipes/built-in/json-pipe/json-pipe.component';
import { AsyncPipeComponent } from './topics/pipes/built-in/async-pipe/async-pipe.component';
import { TitleCasePipeComponent } from './topics/pipes/built-in/title-case-pipe/title-case-pipe.component';
import { CustomPipesComponent } from './topics/pipes/custom/custom-pipes/custom-pipes.component';
import { PluralPipe } from './topics/pipes/custom/plural.pipe';
import { CustomAttributeDirectivesComponent } from './topics/directives/attribute-directives/custom/custom-attribute-directives/custom-attribute-directives.component';
import { CustomStructuralDirectivesComponent } from './topics/directives/structural-directives/custom/custom-structural-directives/custom-structural-directives.component';
import { ImageZoomDirective } from './topics/directives/attribute-directives/custom/image-zoom.directive';
import { FormsTheoryComponent } from './topics/forms/forms-theory/forms-theory.component';
import { ReactiveFormsComponent } from './topics/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './topics/forms/template-driven-forms/template-driven-forms.component';
import { KeyValuePipeComponent } from './topics/pipes/built-in/key-value-pipe/key-value-pipe.component';
import { TemplateFormValidationComponent } from './topics/forms/template-driven-forms/template-form-validation/template-form-validation.component';
import { RoutingTheoryComponent } from './topics/routing/routing-theory/routing-theory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RHomeComponent } from './topics/routing/inner-routing/rhome/rhome.component';
import { RContactComponent } from './topics/routing/inner-routing/rcontact/rcontact.component';
import { RProductsComponent } from './topics/routing/inner-routing/rproducts/rproducts.component';
import { InnerRoutingComponent } from './topics/routing/inner-routing/inner-routing.component';
import { InnerAppRoutingModule } from './topics/routing/inner-routing/innerRouting.module';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { NgContainerComponent } from './topics/template-elements/ng-container/ng-container.component';
import { NgContentComponent } from './topics/template-elements/ng-content/ng-content.component';
import { NgTemplateComponent } from './topics/template-elements/ng-template/ng-template.component';
import { NgTemplateOutletComponent } from './topics/template-elements/ng-template-outlet/ng-template-outlet.component';
import { ContentChildComponent } from './topics/template-elements/ng-content/content-child/content-child.component';
import { HighlightDirective } from './topics/directives/attribute-directives/custom/highlight.directive';
import { ReversePipe } from './topics/pipes/custom/reverse.pipe';
import { ServiceTheoryComponent } from './topics/services-dependency/service-theory/service-theory.component';
import { ProductService } from './services/product.service';
import { LoggerService } from './services/logger.service';
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './services/http.service';
import { ParentToChildComponent } from './topics/component-communication/parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './topics/component-communication/child-to-parent/child-to-parent.component';
import { NoParentChildRelationComponent } from './topics/component-communication/no-parent-child-relation/no-parent-child-relation.component';
import { ChildXComponent } from './topics/component-communication/parent-to-child/child-x/child-x.component';
import { ChildYComponent } from './topics/component-communication/child-to-parent/child-y/child-y.component';
import { ChildZComponent } from './topics/component-communication/parent-to-child/child-z/child-z.component';
import { ChildWComponent } from './topics/component-communication/child-to-parent/child-w/child-w.component';
import { SiblingsComponent } from './topics/component-communication/siblings/siblings.component';
import { ChildPComponent } from './topics/component-communication/siblings/child-p/child-p.component';
import { ChildQComponent } from './topics/component-communication/siblings/child-q/child-q.component';
import { TwoWayComponent } from './topics/data-binding/two-way/two-way.component';
import { InterpolationComponent } from './topics/data-binding/one-way/component-to-view/interpolation/interpolation.component';
import { PropertyBindingComponent } from './topics/data-binding/one-way/component-to-view/property-binding/property-binding.component';
import { EventBindingComponent } from './topics/data-binding/one-way/view-to-component/event-binding/event-binding.component';
import { NgModelComponent } from './topics/data-binding/two-way/ng-model/ng-model.component';
import { ClassBindingComponent } from './topics/data-binding/one-way/component-to-view/property-binding/class-binding/class-binding.component';
import { StyleBindingComponent } from './topics/data-binding/one-way/component-to-view/property-binding/style-binding/style-binding.component';
import { AttributeBindingComponent } from './topics/data-binding/one-way/component-to-view/property-binding/attribute-binding/attribute-binding.component';
import { ChildComponentPropertyBindingComponent } from './topics/data-binding/one-way/component-to-view/property-binding/child-component-property-binding/child-component-property-binding.component';
import { ChildInDataBindingComponent } from './topics/data-binding/one-way/component-to-view/property-binding/child-component-property-binding/child-in-data-binding/child-in-data-binding.component';
import { MaterialComponent } from './topics/material/material.component';
import { MaterialModule } from './topics/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LifeCycleHooksComponent,
    DataBindingComponent,
    ServicesDependencyComponent,
    HttpComponent,
    NgOnChangesComponent,
    ChildAComponent,
    ChildBComponent,
    NgDoCheckComponent,
    ChildCComponent,
    NgAfteContentInitComponent,
    NgAfteContentCheckedComponent,
    ChildDComponent,
    NgAfteViewInitComponent,
    NgAfterViewCheckedComponent,
    ChildEComponent,
    NgOnDestroyComponent,
    TheoryComponent,
    ComponentDirectiveComponent,
    NgIfDirectiveComponent,
    NgForDirectiveComponent,
    NgSwitchCaseDirectiveComponent,
    NgStyleDirectiveComponent,
    NgClassDirectiveComponent,
    NgModelDirectiveComponent,
    PipeTheoryComponent,
    DatePipeComponent,
    UpperCasePipeComponent,
    LowerCasePipeComponent,
    SlicePipeComponent,
    NumberPipeComponent,
    PercentPipeComponent,
    CurrencyPipeComponent,
    JsonPipeComponent,
    AsyncPipeComponent,
    TitleCasePipeComponent,
    CustomPipesComponent,
    PluralPipe,
    CustomAttributeDirectivesComponent,
    CustomStructuralDirectivesComponent,
    ImageZoomDirective,
    FormsTheoryComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    KeyValuePipeComponent,
    TemplateFormValidationComponent,
    RoutingTheoryComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    NgContainerComponent,
    NgContentComponent,
    NgTemplateOutletComponent,
    ContentChildComponent,
    HighlightDirective,
    ReversePipe,
    ServiceTheoryComponent,
    ParentToChildComponent,
    ChildToParentComponent,
    NoParentChildRelationComponent,
    ChildXComponent,
    ChildYComponent,
    ChildZComponent,
    ChildWComponent,
    SiblingsComponent,
    ChildPComponent,
    ChildQComponent,

    TwoWayComponent,
    InterpolationComponent,
    EventBindingComponent,
    NgModelComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    AttributeBindingComponent,
    ChildComponentPropertyBindingComponent,
    ChildInDataBindingComponent,
    NgTemplateComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DatePipe,
    AuthService,
    AuthGuard,
    ProductService,
    // { provide: ProductService, useClass: ProductService },
    LoggerService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
