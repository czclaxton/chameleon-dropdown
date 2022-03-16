import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    // "Should the state be read again from the server to show the dropdown open/closed on page load?"
    // It depends on the use case. I would say modal state only needs to be handled locally or as global client state depending on how it's used.
    super(props);
    this.state = {
      isOpen: false,
    };

    // this was unbound so that it was undefined as toggle was invoked
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  onOptionSelect() {
    // I'm less familiar with class components but essentially I want to update the state for the currently selected option. This shouldn't need a re-render and so the async request wouldn't need to be awaited unless that state is reflected in the ui
    "app.sync('PATCH', 'users/'+app.USER.id, { dropdown_1_state: {true,false} })";

    // I need to map a unique identifier to the option so that it is passed on the event and used in the api call
  }

  render() {
    const { isOpen } = this.state;
    const { label } = this.props;

    return (
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-button"
          id="dropdownButton"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={this.toggle}
        >
          {label}
        </button>

        <select
          className={`${isOpen ? "dropdown-open" : ""} dropdown-menu`}
          aria-labelledby="dropdownButton"
          role="menu"
          onChange={this.onOptionSelect}
        >
          {this.props.children}
        </select>
      </div>
    );
  }
}

class DropdownItem extends Component {
  render() {
    return <option>{this.props.children}</option>;
  }
}

export class ExampleNav extends Component {
  render() {
    // If we wanted to pass children (like this example) OR a Promise that resolves to an array of items what changes should be made? (just a sentence or two or some code is ok).

    // Ideally DropdownItem would be iterated over and passed data as props but it depends on how the content is fetched or if it's static.
    return (
      <nav>
        <a href="/page1">Page 1</a>
        <Dropdown label="More items">
          <DropdownItem href="/page2">Page 2</DropdownItem>
          <DropdownItem href="/page3">Page 3</DropdownItem>
          <DropdownItem href="/page4">Page 4</DropdownItem>

          {/* 
          
          {dropdownItems.map((item) => <DropdownItem href={item.path}>{item.text}</DropdownItem>)} 

          // or if the array of items is valid JSX you could render it like this:

          {dropdownItems}
          
          */}
        </Dropdown>
        <Dropdown label="Even more items">
          <DropdownItem href="/page5">Page 5</DropdownItem>
          <DropdownItem href="/page6">Page 6</DropdownItem>
        </Dropdown>
      </nav>
    );
  }
}
