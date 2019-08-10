
Lets's think about what we need

## Components

App: Overview of the app on top level
    Calendar: Container for the total Calendar view
        Input: Input of the Date
        CalendarMonthView: Shows he current Month
            DayCells: One cell that represnts the day of the month

### Logic

A year has 11 months
even months have 32 days, odd months 33
a week has 7 days

So the total amount of days is 11 * 33 minus 5 = 358
the modulus 7 of 358 is 0, ow nice! so every year has the same amount of weeks, and even more important every year will start on the same day, and the months also
So every year has the same calendar view, so probably we don't have to render anything different when a year changes

after creating the logic it now becomes clear every 3 months the calendar starts with same calendarday, so 33 + 32 + 33 modulus 7 also equals zero. So actually there are only 3 different combinations of calendardays. Month 1, 4, 7, 10 have calendar set 1, month 2, 5, 8, 11 calendarset 2, and month 3, 6 and 9 calendar set 3. Now that we know this we can consider make the calendarsets and return the set depending on the number. For sake of performance it's probably better to not calculate the calendardays everytime again if we already know what the outcome will be. But let's keep the logic also available for when something has to change.








This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
