# Bulma

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

Step 1
npx -p @nrwl/schematics create-nx-workspace bulma
? Which stylesheet format would you like to use? SCSS   [ http://sass-lang.com   ]
? What is the npm scope you would like to use for your Nx Workspace? ngprojects

Step 2
ng generate @nrwl/schematics:library bulma --publishable --prefix=ba
? In which directory should the library be generated? 
? What framework should this library use? Angular    [ https://angular.io/             ]
? Which module should import the library? 
? Would you like to add a routing configuration to the library? No
? Will this library be lazy loaded? No
? Which tags would you like to add to the library? (used for linting) ba
? Which Unit Test Runner would you like to use for the library? Jest (https://jestjs.io/)

Step 3
ng generate @nrwl/schematics:application demo
? In which directory should the application be generated? 
? Would you like to add Angular routing? No
? Which Unit Test Runner would you like to use for the application? Jest   [ https://jestjs.io ]
? Which E2E Test Runner would you like to use for the application? Cypress       [ https://www.cypress.io ]
? Which tags would you like to add to the application? (used for linting) app

Step 4
yarn add bulma
ng g d dropdown/dropdown --project bulma --export
ng g d dropdown/dropdown-toggle --project bulma --export
ng g d dropdown/dropdown-menu --project bulma --export
ng g d dropdown/dropdown-item --project bulma --export

Step 5
yarn add @angular/cdk

Step 6
npm run package:bulma
npm publish ngprojects-bulma-0.0.1.tgz --access public
