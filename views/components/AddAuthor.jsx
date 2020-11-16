const React = require("react");

function AddAuthor(props) {
  return (
    <form action={`/authors/add?bookid=${props.idOfTheBook}`} method="POST">
      <label>First Name:</label>
      <input type="text" name="name" />
      <br />

      <label>Last Name:</label>
      <input type="text" name="lastName" />
      <br />

      <label>Nationality:</label>
      <input type="text" name="nationality" />
      <br />

      <label>birthday:</label>
      <input type="date" name="birthday" />
      <br />

      <label>Photo:</label>
      <input type="text" name="pictureUrl" />
      <br />

      <button type="submit">ADD AUTHOR</button>
    </form>
  );
}

module.exports = AddAuthor;
