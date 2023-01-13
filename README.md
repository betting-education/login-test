# Testing a Login page

## Requirements

The mock-up website relating to this task is available at URL https://betting-education.github.io/login-test/.

### Test requirements

Your task is to test the following requirements:

* The initial page should render the following elements:
   * Username field (id=`field-user`)
   * Password field (id=`field-password`)
   * Login button (id=`bt-sign-in`)
* If a valid username and password are provided, the message `You have successfully logged in.` (id=`success-msg`) should be displayed in a new page.
* If no username neither password are provided, an error message `Please, provide username and password!` (id=`empty-field-msg`) is shown in the login screen.
* If an invalid username and/or password is provided, the error message `Invalid username and/or password!` (id=`error-msg`) is shown in the login screen.

### Valid user

You can use the following username/password as a valid user:
  * Username: _user@email.com_
  * Password: _password_

### Technology

You can use `Java` or `Python` as programming language to develop your tests. Write tests using `Selenium` library and a default testing library depending on the language chose (e.g. `JUnit` for `Java` or `unittest` for `Python`).

## How to submit your application

Please use one of the following methods to share your solution with us:

* The preferred way is to create a repo on github or gitlab and share the link with us
* Zip all your solution and send it to us via email
* Share it using google drive or something similar

## What we are looking for

* Clean, maintainable and working code 
* Comments if/where appropriate
* Ability to write functional tests with `Selenium` library
* Readme file describing how to run the tests
