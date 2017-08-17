# Ruby on Rails Quick Start

---

# [Set up Your Rails Development Environment](http://installrails.com/)

^Don't do what you've already done (like installing xcode, terminal,git, homebrew)

---

# [Rails Guide](http://guides.rubyonrails.org/)

^ Official Rails guide

---

## [Rails for Zombies](http://railsforzombies.org/)

^ Videos and a game for learning Rails

---

# [Learn Ruby](https://learnxinyminutes.com/docs/ruby/)

^ Quick start on ruby syntax

---

### Convention over Configuration

---


# Pluralization in Rails

- Rails has a table full of words that it knows how to pluralize
- Models are singular
- Controllers are plural
- Table names are plural

^ Be careful about words that will pluralize or singularize in a weird way

---

# Naming in Rails: Example

- View folder: `common_questions`
- Model class: `CommonQuestion`
- Model file:  `common_question.rb` (snake case file name)
- Table name:  `common_questions`
- Controller class: `CommonQuestionsController`
- Controller file:  `common_questions_controller.rb`
- Router:  `get '/faq' => 'common_questions#index'``


---

# Commands that may look familiar

- `bundle install` used to install gems
- `rails db` gets you into the development database for the directory that you are in
- `rails console` takes you to the development database and you write rails to access the data
- `rails new` creates a rails app
- `rake db:create`  create the db shell and it talks to Database.yml
- `rake db:migrate` migrates your database
- `rake db:seed`

---

# ROUTES: routes.rb

ROUTES: `routes.rb` When a routing request is received, this file is what tells the server which page to load. Add the resources that you'll need for the pages that you want to create.

---

# 7 Routes for a Resource

- index: get shows list of all tasks
- show:  get show single task
- new: get page with a form for creating a resource item
- create: post route to execute the creation
- edit: get page with a form for editing the resource item
- update: put route to execute the update
- destroy: delete route to execute the deletion

---

### Model View Controller

^ Whiteboard

---

# MODEL:

- add the class that you will need to interact with your database (the class should be CamelCase and should be singular)
- the class should inherit from ActiveRecord::Base


---

# VIEW:

- add the pages that you will want to see on your site in the folder named after your controller (but using snake_case and plural)
- The pages can be index, show, new, edit

---


# CONTROLLER:

- add the Controller which inherits from the Application Controller (the name should use CamelCase and be plural)
- add the params and require the fields from your database that you want to be able to create and update



---

# Tips

- Follow the conventions (pluralization/camelCase, snake_case)
- Read the error messages
- Read the comments in the code, they tell you what to do a lot of the time
- Explore

---

# [gCamp](https://github.com/teddim/gCamp/commits/master)

^ Go back to the start of this repo and look at code, look at commits, have fun!
