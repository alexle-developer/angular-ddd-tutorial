///////////////////////////////////////////////////////////////////////////////////
Step 1
///////////////////////////////////////////////////////////////////////////////////

Steps for adding a "luggage" domain


Create a New Application

1. Add the Nx plugin @angular-architects/ddd:

    npm install @angular-architects/ddd
    npx nx g @angular-architects/ddd:init

2. This command added some linting rules to your global .eslintrc.json. Find out which ones and what they do.

    Hint: This task is a bit easier, if you use your IDE or editor (e. g. Visual Studio Code) to look into the current git staging environment.

3. Add an luggage domain with an application of it's own:

    npx nx g @angular-architects/ddd:domain luggage --add-app

4. Add an checkin feature:

    npx nx g @angular-architects/ddd:feature checkin --domain luggage --entity luggage --app luggage

5. Create a dependency graph to find out about the generated structure:

    npm run dep-graph
    Copy CodeErrorSuccess
    It should show this luggage application:


6. Inspect the generated libs and the generated app. You should find the following:

    Assigned tags within project.json

    Further access restrictions within .eslintrc.json.

    A luggage data service, a luggage entity, and a check-in facade within the generated domain library

    A check-in component within the generated feature library

    Hint: This task is a bit easier, if you use your IDE or editor (e. g. Visual Studio Code) to look into the current git staging environment.

7. Make yourself familiar with these generated building blocks.

8. Switch to your luggage app and open the file app.component.html. Remove its whole content. As the code generator wired the apps and libs up for you, you can directly call the generated LuggageCheckinComponent:

    <luggage-checkin></luggage-checkin>

9. Run your luggage app:

    npx nx serve luggage -o

///////////////////////////////////////////////////////////////////////////////////
Step 2
///////////////////////////////////////////////////////////////////////////////////

Add Another Feature Library

Now, let's make our luggage application look like a more typical DDD-based application by adding another feature library:

    npx nx g @angular-architects/ddd:feature report-loss --domain luggage --entity loss-report --app luggage

///////////////////////////////////////////////////////////////////////////////////
Step 3
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
Step x
///////////////////////////////////////////////////////////////////////////////////