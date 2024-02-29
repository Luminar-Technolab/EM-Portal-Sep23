

        ANGULAR - FRONT END Technology
    -----------------------------------
    
    BASIC COMMANDS
    ---------------
    1. project creation - ng new app-name
    2. project run - ng s -o
    3. component creation - ng g c component-name
    4. service creation - ng g s service-folder/service-name
    5. routing enabled user module creation : ng g m users-module --route users-module --module app.module
    6. creating pipe : ng g p pipe-folder/pipe-name
    7. generating pdf with table : use npm i jspdf-autotable jspdf
    8. to add pagination : use npm i ngx-pagination
    9. Install Angular Material : ng add @angular/material
    10. Install highcharts : npm install highcharts highcharts-angular
    11. Angular guards : ng g g guard-folder/guard

    BASIC CONCEPTS
    ----------------
    1. Module : root module - AppModule, used to hold components
    2. Components : parts of UI, combination of ts file,html file,css file, Root component - AppComponent
    3. Set up path for component - use routing-module.ts file
        - use Routes array, specify path of each component as an object in the array
        - use router-outlet selector in root component - used to switch component template according to the user requested path
    4. Data Binding : Data shairing within a component
        - One way binding 
            - ts (component) to html (view)
                - String Interpolation : use {{class-propery}}
                - Property Binding : [attribute]="class-propery"
            - html (view) to ts (component)
                - event binding : (event-name) = "function-call"
                - event binding using $event : (event-name) = "function-call($event)"
                - event binding using template reference variable: #variable-name
        - Two way binding : using ngModel Directive
            - Import FormsModule to Module file, then use [(ngModel)]="class-propery"
    5. Angular Directive : are classes that add additional behavior to html elements 
        - Prebuilt Directives
            - Component Directive : compoenet selector used to display component template
            - ngModel Directive : used to manage form input controls
            - ngForm Directive : used to manage form
            - Structural Directives : used to add / remove elements from angular app
                - *ngIf="condition"
                - *ngFor="let array-item of array-name"
            - Attribute Directive : used to provide style to elemenets
                - ngClass : used to provide class of style to html elemenets
    6. Dependency Injection : When two classes are dependenet then one class can access others properties and functions, it should provide in constructor
        - syntax: access-specifier variable-name:depenedent-class-name
    7. Angular Services : To share common logic with all component
    8. Angular Forms
        - Template driven Forms 
        - Model driven Forms
    9. Handling Asynchronous function : RxJS Library
        - Observable :
            - subscribe(callback/observer object) : resolves state
        - API Call : use http methods in httpClient class 
            - Import HttpClientModule to your Module file
    10. ActivatedRoute : Provides access to information about a route associated with a component 
    11. Angular Pipes : used to transform input to another data
    12. Parent child communication 
        - Input decorator : parent can share a property
        - Output decorator : child can share an event
    13. Angular guards : protect route from unauthorised access
        - 





