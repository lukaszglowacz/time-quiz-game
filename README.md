# The Time Quiz Game
The Time Quiz Game is a fast-paced trivia game with 3000+ questions from different categories and with different difficulty level. Answer quickly and accurately to beat your high score or challenge friends. No references are allowed. Each correct answer moves you forward, while wrong answers add 10 seconds to your time. Test your knowledge now! We wish You luck!

![project-webframes](https://user-images.githubusercontent.com/119242394/222672863-d5e05bd4-96bc-421f-8185-ef546d24b020.png)

## User Experience (UX)
### Wireframes
The wireframes for the website were produced in Balsamiq. There are frames for a full width display. The final site varies slightly from the wireframes due to developments that occured during the creation process.

![Laptop Wireframe](https://user-images.githubusercontent.com/119242394/222660025-efbf2ba1-9dac-4826-a078-4dcb784c83b5.png)
![iPad Wireframe](https://user-images.githubusercontent.com/119242394/222660092-be1fa231-4c58-40d7-84f4-fe50d033d1f8.png)
![iPhone Wireframe](https://user-images.githubusercontent.com/119242394/222660114-b0b4fcb3-36ed-4a82-bd8c-53c58d8dcd01.png)
![iPhone landscape Wireframe](https://user-images.githubusercontent.com/119242394/222660125-cb74a843-72c0-4aa1-a2fb-4abf3651b226.png)

### Design Choices
- Typography
  - The fonts chosen were 'Frijole' for the headings, 'Averia Libre' for buttons and 'Montserrat' for the body text. They fall back to sans-serif respectively.
  - Montserrat is an easily readable font, and Frijole with Averia Libre was selected via https://typ.io/search
  
- Colour Scheme
  - The leading colour is a shade of #EFF6F1, which fits perfectly with the main #263C3E font and #FFC229 button colour.
  - The colours were selected via http://colormind.io/

![Screenshot 2023-03-03 094406](https://user-images.githubusercontent.com/119242394/223087033-33842b6e-330a-43c5-9a92-473c408f9f34.png)

## Features
The website consists of a landing page and two related pages. The landing page is the default loading page. A hidden paragraph on the landing page appears when the show instructions button is clicked and disappears when clicked again. The game and end page start automatically when the conditions are met. When the user presses the Start Game button, the game begins. When the user finishes the game, the end page appears. On the end page is a summary score text and a Play again button, which starts the game from the beginning.

### Existing Features

 - **Read Instructions button**
    - when the user clicks it, the button's color changes, and the instructions paragraph appears
    - a paragraph is entirely smooth and scrollable on smaller devices
    - user is known for the game instructions and preparation for the game
    - when the user clicks it again, the paragraph disappears
    
 - **Start Game button**
    - when the user clicks it, the button's color changes and the game starts
    
 - **Loader**
    - appears between the loading page and the game page when the user clicks the Start Game button and the game page is not fully downloaded yet
    - disappears when the game page is fully downloaded and the game is ready to play
 
 - **Stopwatch**
    - starts automatically when the game starts also
    - when the user answers wrong, the stopwatch add automatically 10 seconds to the time score
    
 - **Question and answers area**
    - questions and answers area are connected to the trivia API
    - trivia API has almost 5000 questions and answers database
    - questions are downloaded from the easy category
    - when the user clicks correct answer, clicked choice change the background color to  #135c11 and font color to #e3dee1
    - when the user clicks incorrect answer, clicked choice changes the background color to #8e0909 and font color to #e3dee1 and automatically stopwatch adds 10 seconds to the time score
 
 - **Progress bar**
    - shows the graphic percent of the game
    - the game is divided into ten questions, so every yellow piece of the progress bar that appears after answering the question corresponds to 10 percent
 
 - **Score index**
    - shows the user's time score described in seconds
 
 - **Play Again button**
    - when the user clicks it, the button's color changes, and the user is taken directly to the beginning of the game to the loading page

### Features Left to Implement
 
 - later plans include rebuilding the app and connecting it to the backend server to save scores online and make a ranking
 - also rebuilding an app by adding questions level grades at the beginning of the game: easy, medium, hard
 - add Error 404 page with back to the home link.

## Technology Used
 
 - HTML5 - provides the content and structure for the website
 - CSS3 - provides the styling
 - JavaScript - implement all functions of the game
 - Balsamiq - used to create the wireframes
 - Gitpod - used to deploy the website
 - GitHub - used to host and edit the website
 - Canva - used to prepare the app's documentation

## Testing

### Code Validation

The Time Quiz Game website has been throughly tested. All the code has been run through the W3C HTML Validator, the W3C CSS Validator and JSHint JS validator. No error were found after the last test.

The HTML validator results for each page are below:

- Loading Page

![no-errors-html](https://user-images.githubusercontent.com/119242394/213243744-d7515fe5-acb1-4bd5-8fd9-9614443d14e4.jpg)


- Game Page

![no-errors-html](https://user-images.githubusercontent.com/119242394/213243744-d7515fe5-acb1-4bd5-8fd9-9614443d14e4.jpg)


- End Page

![no-errors-html](https://user-images.githubusercontent.com/119242394/213243744-d7515fe5-acb1-4bd5-8fd9-9614443d14e4.jpg)


The CSS validator results are below:

![no-errors-css](https://user-images.githubusercontent.com/119242394/213244593-53d7ec51-3a37-44fd-a6b4-c74edabcb237.jpg)


JSHint JS validator results are below:
- JSHint shows no significant errors in the code. The main problem that appeared in the code is the writing style issue, which says that the code has been written in ES6 functions and might work incorrectly on older devices that don't support JS (ES6+) language

### Responsiveness Test

The responsive design tests were carried out manually with Google Chrome DevTools.

|  | Mobile S - 320px | Mobile M - 375px | Mobile L - 425px | Mobile - landscape mode | Tablet - 768px | Laptop - 1024px | Laptop L - 1440px | 4K - 2560px |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Render | passed | passed | passed | passed | passed | passed | passed | passed |
| Images | passed | passed | passed | passed | passed | passed | passed | passed |
| Links | passed | passed | passed | passed | passed | passed | passed | passed |

All responsiveness tests were successful. The app is ready to work with devices of various widths. In addition, the app has been adapted to mobile landscape modes. That increases UX for landscape mode users.

### Browser Compatibility

The website was tested on the following browsers with no visible issues for the user:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
 
Appearance, functionality and responsiveness were consistent throughout for a range of device sizes and browsers.

### Unfixed Bugs

There are no known unfixed bugs on this site.

### Additional Testing

The site was also tested using Lighthouse Chrome Dev Tools to test each of the pages for:

  - Performance - How the page performs whilst loading.
  - Accessibility - Is the site acccessible for all users and how can it be improved.
  - Best Practices - Site conforms to industry best practices.
  - SEO - Search engine optimisation. Is the site optimised for search engine result rankings.

Here are the desktop parameters of each repository page:

- index.html

![index_html](https://user-images.githubusercontent.com/119242394/223108652-83d1c060-eb8f-492d-99e0-54633e4b370a.png)


- game.html

![game_html](https://user-images.githubusercontent.com/119242394/223108673-68408056-c07e-4c49-9eae-c1e286774a1c.png)


- end.html

![end_html](https://user-images.githubusercontent.com/119242394/223108687-b72fdadd-531c-4ce4-9b32-fb63b4332a88.png)


## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

1. In the GitHub repository, navigate to the Settings tab.
2. Once in Settings, navigate to the Pages tab on the left-hand side.
3. Under Source, select the branch to master, then click save.
4. Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://lukaszglowacz.github.io/time-quiz-game/

## Credits

### Content
  - Google Fonts - used for fonts
  - Font Awesome - used for icons
  - Colormind - used to generate color pallete
