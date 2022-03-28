Prompt:
We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage
in the ExampleNav component. The Dropdown and DropdownItem components have some problems, and also
have room for improvements (doesn't everything?) A couple items TODO here (make sure to explain with comments!)

1. How are you today? 😊
2. Please fix any obvious issues you see with the dropdown and then save your gist.
3. Please then make improvements to the dropdown and then save your gist again.
4. Consider the different ways that this dropdown might be used and what changes would
   be neccessary to make it more flexible.
5. If we wanted to sync the dropdown selection to a server with this hypothetial "syncing library"
   `app.sync('PATCH', 'users/'+app.USER.id, { dropdown_1_state: {true,false} })` where would this be included? Should
   the state be read again from the server to show the dropdown open/closed on page load?
6. If we wanted to pass children (like this example) OR a Promise that resolves to an array of items
   what changes should be made? (just a sentence or two or some code is ok).
