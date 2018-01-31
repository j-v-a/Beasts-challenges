In TodoMVC jQuery, render does much more than render data.

Perhaps a more appropriate name would be renderAndSave or renderish. This is bad. You don't want to lie to people in your code. Not just because it's dishonest, but also because it is really damn confusing.

Your job is to rewrite the app to make render honest. That means there shouldn't be any calls to util.store. Use displayTodos from Practical JavaScript for inspiration.
