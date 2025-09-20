# Romulus Tester

What if you work on a major refactoring of your project and you want to be sure it won't break in production? This is where you create an end-to-end tester!

## What is this all about?

Romulus is Demarque's education project. It's a platform where students and teachers can loan digital books. This is the project I work on.

Under the supervision of my lead developer, I refactored the loan database representation, created all the necessary GraphQL mutations based on their Rails REST counterpart, and converted Rails ERB pages to Vue.js. I also added Postgres triggers that would update the old representation anytime the new representation is updated by a user action.

A colleague worked on the database table, the migration script, and the triggers that update the new representation from the old one. 

This was a major refactoring, and you really don't want to break anything or get your data out of sync. We use feature flags and we were able to switch from the new representation logic to the old one.


## Purpose and Goal

The goal of Romulus Tester was to test if we could switch the feature flag on and off without degrading the user experience and without losing data. I wanted to find answers to questions:
* If a book is borrowed with the new system using the new table and we switch off the flag, can the same user still read their book? 
* If a user reserves a book and we switch the flag to off, can they still have their reservation honored in the new system?

Romulus tester was designed to answer these questions.

What I needed was a program that could log in users, execute actions on different products, interpret responses, log out users, and report errors. I wanted to have an automatic tester that could check and answer the questions. The response interpretation part was the most important part. If we don't interpret responses correctly, we cannot know if the Romulus API works.

## Spotlights

How to work with AI and still learn as a mid-level developer?

The risk when you work with AI is twofold. You delegate too much and you don't learn. You generate code that you don't understand.

## Working in the zone

I was an elementary school teacher and I know a lot about what it means to learn. If you want to learn, you need to place your mind in its ZPD (Zone of Proximal Development). You know that you're in the zone because what you do is just hard enough that you have to put some effort to make it work. If it's too hard, you have no clue and don't even know what you don't know. You cannot ask questions, for example. When it's too easy, it means you're not learning—you already know. When you work with AI, it's like you're in a parallel world where it's super easy to generate code but super hard to understand what the code means because it was too much to read in one go. 

When I don't know a language or a library, I always start by writing code in Vim with no LSP, no AI, just my mind and Ctrl+Tab to switch between documentation on my terminal. I build one block by small blocks. In this case, I first started by logging in and logging out one user using the HTTPX library. Then I added a GraphQL query using GQL. Finally, I added a second user and worked on concurrency using asyncio. As I was getting comfortable with these libraries, I started using Claude Code and gave as examples the code I wrote.


## Understand what you do

When you use LLMs, the risk is to generate code that you don't understand and miss the goal of what you are doing. 

The tester has a User class that can perform actions on products via two clients: GraphQL and REST. The main loop of the program schedules asyncio tasks in the event loop that perform the actions for one user. 

When the program user types Ctrl+C, it turns off a flag in the main task. This event will trigger some actions and terminate the program. The main task is responsible for handling all the scheduled tasks. There were three possible designs:
* Should I let the OS free memory and shutdown task?
* Should I abruptly terminate the tasks?
* Should I terminate tasks by giving them time to terminate what they are doing?

This is where a programmer makes a difference. Only we know what the end product should look like. We are professional experts in translating business problems into technical solutions. The introduction of agentic coding has never removed this responsibility.

In this case, I chose the third solution. This one was consistent with the problem at hand, which is that I should generate a report with the best data possible. If I interrupt the task abruptly, some requests might not have time to terminate and would result in a pending actions state. We would not know the difference from actual timeout tasks. I decided to give two seconds per task to terminate. To make sure a task would not start a new request, I first turn off a flag in the user main loop that will exit the execute action function after the last action is made. Then the asyncio event loop would cancel the task. This design would allow us to have a report with the right information. 

## Lessons Learned

The main lesson I've learned is that you can refactor quickly with AI. With Git to control versions and AI to refactor quickly, it's super easy to test different architecture choices. Because you are constantly writing what you want, it makes it easier to actually know what you want. As a mid-level developer, I still need experience, and AI can accelerate my learning if used correctly.

A byproduct lesson was a reminder that testing helps with designing. I was working on interpreting the results. It required me to check the Rails API and what I did for the GraphQL API. I realized that my error handling was sometimes inconsistent. So I got to refactor some error handling in my code thanks to Romulus Tester.

AI is an excellent tool to write documentation! Documentation makes code easier to read. It makes AI a must-have in a developer's toolbox.
