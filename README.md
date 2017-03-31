# CreateBook


## What is CreateBook

Drawing inspiration from my second project, I wanted to create an area where
users can post and comment anonymously. CREATEBOOK is an pseudo-social media
website. You can create a post and then every user can comment on those posts.
Deleting and editing is also possible because sometimes there things that are
better left off of the internet.

![CreateBook](https://github.com/lbreguet/createBook/blob/comments/assets/img/app-screen.png "CreateBook")


## Dependencies

NPM install with `npm install`


## Development Process

After having finished generating my first resource in Rails, I started making
api calls on the `post` resource. After I got these to work, I decided that I
should utilize handlebars on most of my forms and data outputs, because I want
to implement Ember on my front-end. There wasn't much trial and error involved
because this was very similar to my second project where I put the form of
`PATCH` and `DELETE`. After getting those to work, I started working on my
second resource, `comments`.

Developing the Ajax call for `comments` was difficult because I had to pass in
the `id` of the parent resource in the url. But again after getting the right
`event` to pass, it was working fine. The nested resource also gives the chance
to keep the same back-end and gradually make the transition to ember.


## Technologies Used

- HTML
- SCSS
- JavaScript
- jQuery
- AJAX
- Handlebars


## User Stories

- A user should be able to sign-up and then sign-in
- A user should be able to create posts
- A user should be able to see other user's posts
- A user should be able to comment on posts
- A user should be able to change their password
- A user should be able to sign-out
- A user should be able to update/delete their own posts
- A user should be able to view specific posts


## WireFrames

![WireFrame](https://github.com/lbreguet/createBook/blob/comments/assets/img/FullSizeRender.jpg "WireFrame")


## Pitch Deck

I think I'll keep the same wireframes and user stories. Working getting `PATCH`
on comments to work properly. The biggest thing I need to do is make the
transition to Ember.js because that way I practice my knowledge on how to use
that framework and also it would make more sense because of my nested resource.


## Unsolved Issues

My `PATCH` request isn't passing in the right `id` for the comment, always going
the top comment. Need to fix this issue before going to Ember.js.
