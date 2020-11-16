const React = require("react");
const Layout = require("./Layout");
const AddAuthor = require("./components/AddAuthor");

function BookEdit(props) {
  return (
    <Layout>
      <form action={`/books/edit?bookid=${props.oneBook._id}`} method="POST">
        <label>Title:</label>
        <input type="text" name="title" value={props.oneBook.title} />
        <br />

        <label>Author:</label>
        <input type="text" name="author" value={props.oneBook.author} />
        <br />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={props.oneBook.description}
        />
        <br />

        <label>Rate:</label>
        <input type="number" name="rating" value={props.oneBook.rating} />
        <br />

        <button class="edit-button" type="submit">
          EDIT
        </button>
      </form>
      <h3>Add An Author:</h3> {/* <== ADD */}
      <AddAuthor idOfTheBook={props.oneBook._id} /> {/* <== ADD */}
    </Layout>
  );
}

module.exports = BookEdit;
