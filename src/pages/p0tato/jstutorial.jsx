import React, { Component } from "react";
import $ from "jquery";
import ReactTilt from "react-tilt";
import "../../css/jstutorial.css";
import SyntaxHighlighter from "react-highlight.js";
import { Alert, Button } from "react-bootstrap";

const objectExample1 = `var objectVariable = {
  propertyName: 'property value',
  anotherProperty: 999,
}`;

const objectExample2 = `var objectVariable = {
  thisIsThePropertyName: 'this is the property value',
  thisIsLikeAVariableName: 'this is the value stored in the variable',
  aNumber: 100,
  aBoolean: true,
  aNullValue: null,
  remember: 'property name ends with a colon (:) and property value ends with a comma (,)',
  
  // a comment
} // another comment, in case you haven't noticed, comments can go anywhere!`;

export class JavaScriptTutorialPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    Array.from($("a")).forEach((link) => {
      let classes = Array.from(link.classList);
      if (
        classes.includes("navbar-brand") ||
        classes.includes("escape-js-link")
      ) {
        return;
      }
      link.classList.add("js-link");
    });
  }

  render() {
    return (
      <>
        <div className="jsTutorialContainer">
          <h1>JavaScript Tutorial</h1>
          <hr />
          <h3 id="introduction">Introduction</h3>
          <p>
            <Alert variant="danger">
              <Alert.Heading>Note</Alert.Heading>
              It is highly recommended that you learn HTML before learning
              JavaScript. Check out our{" "}
              <a className="escape-js-link" href="/tutorials/html">
                HTML Tutorial!
              </a>
            </Alert>
            JavaScript is a programming language that allows you to change raw
            HTML and CSS code in your website. JavaScript also has access to the
            current window and tab the website is running in, which allows you
            to open new tabs or redirect to other tabs. But there's also a whole
            lot more, such as{" "}
            <a href="#javascriptanimation">simulating animations</a>,{" "}
            <a href="#cookies">creating cookies</a>, and making{" "}
            <a href="#htmlrequests"> HTML requests</a>!
            <br />
            <br />
            Here's an example of a {"<div>"} element being animated using
            JavaScript.
          </p>
          <div id="javascriptanimation">
            <ReactTilt className="jsTilt-example" options={{ reverse: true }}>
              Hover me (and the corners of this card)
            </ReactTilt>
          </div>
          <p style={{ marginTop: "75px" }}>
            And click the below button to open a website in a new tab!
          </p>
          <Button
            style={{ marginTop: "40px" }}
            variant="info"
            onClick={() => window.open("/tutorials/javascript/example")}
          >
            Click to open this example website in a new tab
          </Button>
          <p>
            ...but we'll show you the actual code for that later. Let's start
            with the basics.
          </p>
          <hr />
          <div id="variables"></div>
          <h3>Variables</h3>
          <p>
            Variables are an efficient way of storing information in JavaScript.
            Variables can contain almost any information you need to store.
            <br />
            <br />
            <h4>Creating a Variable</h4>
            <div style={{ color: "lightgrey" }}>
              1. Type the <code>var</code> keyword.
              <br />
              2. Type the name of the variable, this can be whatever you want.
              <br />
              3. Type an equal sign (<code>=</code>).
              <br />
              4. Type the info stored in the variable.
            </div>
            <br />
            Here's an example:
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var age = 10
            </SyntaxHighlighter>
            Now, here's some more details about variables.
            <Alert variant="warning">
              <Alert.Heading>Warning</Alert.Heading>
              You cannot use spaces in variables. Instead, you can you
              CamelCase.
            </Alert>
            <h5>CamelCase</h5>
            Camelcase is a way of turning variables with multiple words into one
            word, so that it will be easy to read, but will also be a valid
            variable name. The way CamelCase works is by removing spaces and
            capitalizing the first letter of the next words. For example:
            <code>my variable name</code> is an <strong>invalid</strong>{" "}
            variable name, so we can change this into{" "}
            <code>myVariableName</code>, which is a <strong>valid</strong>{" "}
            variable name. Notice that the variable name has no spaces now.
            <br />
            <br />
            <h4>Information that can be stored in variables</h4>
            <p>
              There are 6 <u>basic</u> types of information that can be stored
              in variables.
              <br />
              <br />
            </p>
            <div style={{ color: "lightgrey" }}>
              1. String
              <br />
              2. Number
              <br />
              3. Boolean
              <br />
              4. Object
              <br />
              5. Null
              <br />
              6. Undefined
            </div>
            <br />
            Read below for information on each one!
            <br />
            <hr />
            <h4>Strings</h4>
            <br />A JavaScript string is a way of storing a series of characters
            in one variable. Strings are surrounded in either double quotes (
            <code>""</code>), single quotes, (<code>''</code>), or backticks (
            <code>``</code>). However, backticks are used for more complicated
            JavaScript strings so we won't use those for now.
            <br />
            <br />
            Example variable that contains a string:
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var name = "Bob"
            </SyntaxHighlighter>
            And here's the exact same example but with single quotes (not double
            quotes):
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var name = 'Bob'
            </SyntaxHighlighter>
            <br />
            <h4>"Escaping" Strings</h4>
            Since strings must be surrounded in double quotes, single quotes, or
            backticks, what happens if you need to put a quote <u>inside</u> the
            string?
            <br />
            For example:
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var restaurant = 'Bob's Restaurant'
            </SyntaxHighlighter>
            This example is invalid because the single quote in{" "}
            <code>Bob's Restaurant</code>
            will make the string end at <code>Bob</code> and the everything
            afterwards will cause an error.
            <br />
            <br />
            <code>
              'Bob'<u>s Restaurant'</u>
            </code>{" "}
            - the underlined text will not be counted in the string (it'll just
            cause an error)
            <br />
            <br />
            So, we have two options to be able to use quotes in our strings.
            <br />
            <br />
            <h5>Solution 1</h5>Change the single quotes into double quotes.
            <br />
            Example:
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var restaurant = "Bob's Restaurant" // the surrounding quotes are
              now double quotes
            </SyntaxHighlighter>
            <br />
            <br />
            <h5>Solution 2</h5>"Escape" the single quote. Escaping quotes in
            strings is done by typing a forward slash (<code>\</code>) in front
            of the quote, which will tell the browser to include the single
            quote in the string (instead of the quotes that surround the
            string).
            <br />
            Example:
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var restaurant = 'Bob\'s Restaurant' // escape the single quote in
              Bob's
            </SyntaxHighlighter>
            Escaping can also be used for double quotes.
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var textMessage = "Bob says: \"Hi!\"" // escape the double quotes
              around "Hi!"
            </SyntaxHighlighter>
            <hr />
            <h4>Numbers</h4>
            JavaScript variables can also contain a <u>single</u> number. You do
            not need to surround a number with anything. Numbers are used for
            mathematical operations in JavaScript.
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var year = 2021
            </SyntaxHighlighter>
            Read about{" "}
            <a href="#mathematicaloperators">
              mathematical operators in JavaScript
            </a>
            .
            <br />
            <hr />
            <h4>Booleans</h4>A Boolean is a type of variable that only has 2
            possible values: <code>true</code> and <code>false</code>.
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var human = true
            </SyntaxHighlighter>
            Booleans are useful in websites for toggling options. For example,
            if a website has a dark mode option, the website may be using a
            JavaScript boolean somewhere to set dark mode to on or off.
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var darkMode = true
            </SyntaxHighlighter>
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var darkMode = false
            </SyntaxHighlighter>
            <hr />
            <h4>Undefined and Null</h4>A variable is undefined if it does not
            exist. For example, if you try to access the variable{" "}
            <code>name</code> but it doesn't exist yet, the variable will appear
            as <code>undefined</code>.
            <br />
            <code>null</code> is what you can use to set a variable to nothing.
            For example, if you want to create a variable but not store anything
            in it yet, you can set it to null.
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var uselessVariable = null
            </SyntaxHighlighter>
          </p>
          <hr />
          <div id="changingvariables"></div>
          <h4>Changing Variables</h4>
          <p>
            You can change a variable's value at any time by making it equal to
            something else, but do <strong>not</strong> use the <code>var</code>{" "}
            keyword this time.
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var day = "Monday"
              <br />
              <br />
              day = "Tuesday"
            </SyntaxHighlighter>
          </p>
          <hr />
          <div id="commenting"></div>
          <h4>JavaScript Commenting</h4>
          <p>
            You can leave comments anywhere in your code that you want. Comments
            will be ignored by the browser, so you don't need any syntax. You
            can use comments to add notes about a piece of code or to remind you
            to do something. The way you can "comment" out code is by starting
            the line with two slashes (<code>{"//"}</code>).
          </p>
          <SyntaxHighlighter className="code-minimal" language="javascript">
            var name = 'Bob'{" "}
            {"// this is a comment, it will be ignored by the browser"}
            <br />
            <br />
            {"// comments can't go onto new lines, so you'll have to"}
            <br />
            {"// start more lines of comments with more slashes"}
          </SyntaxHighlighter>
          <hr />
          <div id="mathematicaloperators"></div>
          <h4>Mathematical Operators</h4>
          <p>
            You can perform mathematical operations on numbers in JavaScript.
            Here are the four very basic operators (there are a lot more):
            <br />
            <br />
            <div style={{ color: "grey" }}>
              Addition: <code>+</code>
              <br />
              Subtraction: <code>-</code>
              <br />
              Multiplication: <code>*</code>
              <br />
              Division: <code>/</code>
            </div>
            You can either directly add numbers together or add variables that
            contain <strong>numbers</strong>.
            <br />
            Examples:
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var firstVariable = 1
            </SyntaxHighlighter>
            <SyntaxHighlighter className="code-minimal">
              var secondVariable = firstVariable + 1 // this variable equals 2
            </SyntaxHighlighter>
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var thirdVariable = firstVariable + secondVariable // this
              variable equals 3
            </SyntaxHighlighter>
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var anotherVariable = secondVariable * thirdVariable // this
              variable equals 6
            </SyntaxHighlighter>
            <hr />
            <h4>Order of Operations in JavaScript</h4>
            <br />
            The Order of Operations also applies to mathematical operations in
            JavaScript. This may cause unexpected results in your equations.
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var wrongVariable = 2 + 1 * 3
            </SyntaxHighlighter>
            In the above example, you may have been expecting the answer to be
            9, because <code>2 + 1</code> is 3 and <code>3 * 3</code> is 9. But
            the answer is actually 5, because the Order of Operations causes
            multiplication to be calculated first. The equation would actually
            be <code>1 * 3 = 3</code>, and <code>2 + 3 = 5</code>.
            <br />
            <br />
            To make the answer to the above equation be <code>9</code>, we can
            use parentheses.
            <SyntaxHighlighter className="code-minimal" language="javascript">
              var rightVariable = (2 + 1) * 3
            </SyntaxHighlighter>
            This would make the browser calculate the equation in the
            parentheses first, so the equation would be <code>2 + 1 = 3</code>{" "}
            and <code>3 * 3 = 9.</code>
          </p>
          <hr />
          <div id="objects" />
          <h3>Objects</h3>
          <p>
            JavaScript objects are a data structure that allows you to store
            more than 1 variable in a single variable. This is done by using
            object <u>properties</u>. Properties are the items you can access in
            an object. We'll discuss accessing object properties{" "}
            <a href="#accessingobjects">further down.</a>
            <br />
            <br />
            Objects are created by using curly braces (<code>{"{}"}</code>).
            <br />
            You can add properties to objects by using the following syntax:
            <div style={{ color: "lightgrey" }}>
              <br />
              1. Type the property name.
              <br />
              2. Type a single colon (<code>:</code>).
              <br />
              3. Type the property value.
              <br />
              4. Type a comma (<code>,</code>).
            </div>
            <br />
            Basic object:
            <SyntaxHighlighter className="code-verbose" language="javascript">
              {objectExample1}
            </SyntaxHighlighter>
            As you can see from the above example, the object is surrounded with
            curly braces <code>{"{}"}</code>, and properties are created by
            typing the property name, a colon (<code>:</code>), the property
            value, and then a comma (<code>,</code>).
            <br />
            <br />
            Here's a more complicated object:
            <SyntaxHighlighter className="code-verbose" language="javascript">
              {objectExample2}
            </SyntaxHighlighter>
            <hr />
            <div id="accessingobjects" />
            <h4>Accessing Objects</h4>
            Existing objects are accessed by using the object name, a dot/period
            (<code>.</code>
            ), and then the property name. Here are the steps, broken down:
            <div style={{ color: "lightgrey" }}>
              <br />
              1. Type the object name (this is the name of the object that you
              created).
              <br />
              2. Type a dot/period (<code>.</code>).
              <br />
              3. Type the property name (this will be one of the properties that
              you created in the object).
            </div>
            <br />
            Here's an example of accessing an object property:
            <SyntaxHighlighter language="javascript">
              {
                'var person = {\n  name: "Bob",\n  age: 20,\n  job: "JavaScript programmer"\n}'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language="javascript">
              {'var personsName = person.name // this variable equals "Bob"\n'}
              {"var personsAge = person.age // this equals 20\n"}
              {
                'var personsJob = person.job // this equals "JavaScript programmer"'
              }
            </SyntaxHighlighter>
            <hr />
            <h4>Changing Object Properties</h4>
            Changing object properties are mostly the same as changing variable
            values.
            <div style={{ color: "lightgrey" }}>
              <br />
              1. Type the object name.
              <br />
              2. Type a dot/period (<code>.</code>)
              <br />
              3. Type the property name.
              <br />
              4. Type an equal sign (<code>=</code>)
              <br />
              5. Type the new value for the property.
            </div>
            <SyntaxHighlighter language="javascript">
              {
                'var person = {\n  name: "Bob",\n  age: 20,\n  job: "JavaScript programmer"\n}\n\nperson.job = "JavaScript & HTML programmer"\n// The person.job property is now "JavaScript & HTML programmer".'
              }
            </SyntaxHighlighter>
            <hr />
            <h4>Example of Everything You've Learned so Far</h4>
            <SyntaxHighlighter language="javascript">
              {
                'var exampleObject = {\n  name: "Bob",\n  age: 20,\n  job: "JavaScript programmer"\n}\n\nexampleObject.name = "Bobby"'
              }
              {"\n\nvar exampleString = 'Bob says: \"Hello!\"'"}
              {"\n\nvar exampleNum = 2001"}
              {"\n\nvar year = exampleObject.age + exampleVariable"}
            </SyntaxHighlighter>
            <span style={{ color: "lightgrey" }}>
              This program would create a variable called exampleObject that
              will have the name, age, and job properties, the
              exampleObject.name property will then be changed to "Bobby", a
              variable called exampleString will be created with a value of 'Bob
              says: "Hello!"', a variable called exampleNum will be created with
              a value of 2001, and a variable called year will be created with a
              value of 2021 (because it was the result of exampleObject.age +
              exampleNum).
            </span>
          </p>
          <hr />
          <div id="concatenatingstrings" />
          <h4>Concatenating Strings</h4>
          <p>
            Concatenating strings is how you can combine two strings into one.
            It is done by simply adding two strings together. Example:
            <SyntaxHighlighter language="javascript">
              var name = 'Bob'
              <br />
              <br />
              var message = name + ' says: "Hello!"' // message will equal: Bob
              says: "Hello!"
            </SyntaxHighlighter>
            <Alert variant="warning">
              <Alert.Heading>Warning</Alert.Heading>
              Make sure you have a space in the string you are adding to a
              variable, otherwise the resulting string won't have a space.
            </Alert>
            Wrong Example:
            <SyntaxHighlighter language="javascript">
              var name = 'Bob'
              <br />
              <br />
              {
                "var wrongMessage = name + 'says: \"Hello!\"'\n//                        ^ no space here"
              }
              <br />
            </SyntaxHighlighter>
            This example would result in: <code>Bobsays: "Hello!"</code>
            <br />
            <br />
            Correct Example:
            <SyntaxHighlighter language="javascript">
              var name = 'Bob'
              <br />
              <br />
              {
                "var rightExample = name + ' says: \"Hello!\"'\n//                         ^ space here"
              }
              <br />
            </SyntaxHighlighter>
            This example would result in: <code>Bob says: "Hello!"</code>
            <Alert variant="danger">
              <Alert.Heading>Warning</Alert.Heading>
              Make sure you are not adding a number with a string. The browser
              will automatically turn the number into a string and concatenate
              the strings.
            </Alert>
          </p>
          <hr />
          <div id="functions" />
          <h3>Functions</h3>
          <p>
            JavaScript functions are an efficient way of organizing code and
            allowing different parts of your code to access each other. A
            function contains actual JavaScript code that it will compute when
            the function is called (used) and can return information that the
            caller will receive.
            <br />
            <br />
            <h4>Creating a Function</h4>
            You can create a function by using the <code>function</code>{" "}
            keyword. Here are the steps for creating a function:
            <div style={{ color: "lightgrey" }}>
              <br />
              1. Type the <code>function</code> keyword.
              <br />
              2. Type the function name, same rules as variable names (use
              CamelCase for multiple words).
              <br />
              3. Type an opening parentheses (<code>(</code>).
              <br />
              4. Type the function parameters, separated by commas (
              <code>,</code>).
              <br />
              5. Type a closing parentheses (<code>)</code>).
              <br />
              6. Type curly braces (<code>{"{}"}</code>).
              <br />
              7. Inside the curly braces, type the code that the function will
              run.
            </div>
            <br />
            Example function:
            <SyntaxHighlighter language="javascript">
              {
                "function exampleFunction(parameter1, parameter2) {\n  // your code here\n}"
              }
            </SyntaxHighlighter>
            <h4>Calling a Function</h4>
            You can call a function by using the following steps:
            <div style={{ color: "lightgrey" }}>
              <br />
              1. Type the existing function name.
              <br />
              2. Type an opening parentheses (<code>(</code>).
              <br />
              3. Type the function parameters, separated by commas (
              <code>,</code>).
              <br />
              4. Type a closing parentheses (<code>)</code>).
            </div>
            <SyntaxHighlighter language="javascript">
              {
                'function exampleFunction(parameter1, parameter2) {\n\n}\n\nexampleFunction("hello", 20) // call the existing function'
              }
            </SyntaxHighlighter>
          </p>
        </div>
      </>
    );
  }
}
