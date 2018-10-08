HTTP Quiz
===

This quiz is about basic http responses. There is no database, model, routes, etc. like we did later in the week, just a few canned http request/responses.

## Instructions

The quiz project includes basic scafolding. Implement the E2E tests and code for http responses indicated below:

1. `GET` `/api/penguins` should return the following `json` response:
    ```json
    ['bernice', 'bernard']
1. `GET` `/api/penguin/king?format=<simple|full>` should return the following `json` response:
    * If `format=full`, then return:
        ```json
        { 
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        }
        ```
    * If `format=simple` (or if `format` missing or something else), then return:
        ```json
        { 
            name: 'bernice' 
        }
        ```
1. `DELETE` `/mistake` should return the following `JSON` response:
    ```
    { deleted: true }
    ```
1. Any other response should return a `404` status code.


**Goal is have PR with passing travis by end of allotted time.**

## Rules

1. **Make an initial commit when you start your work** (HINT: Open your PR!)
1. You have **35 minutes** to complete what you can. You may not finish everything or get things exactly right (and you don't need to do so to get a passing score). Do focus on quality of what you complete and demonstrating familiarity with the development setup and process we have been using.
1. You must complete this work on your own within the allotted time
    * Keep a good commit history to show progression of work.
    * You **need to manage your time** to have PR and last commit before deadline (remember, you can
    open PR and take advantage of travis checking your commits by pushing frequently).
1. You may use normal resources that a software developer uses on the job (docs, google, your prior work)
1. Use general best practices and common sense:
    * **Highly** recommended to implement what is needed, no more no less
    * Blind boilerplate or copying-in chunks of code will **not** be helpful and will likely create more work. Seriously, this is the one of the best ways to fail the quiz as you risk wasting your time trying to getting code (that never worked on this project) to work.
    * **Focus effort on requirements of the lab**. Seriously, read the [Instructions] section _more than once_ paying attention to detail.
1. Total possible points are 40. You will be graded out of 30 points
1. Demonstrate what you can accomplish by having **passing travis ci** and showing working code.
