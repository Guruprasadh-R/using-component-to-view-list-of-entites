import PropTypes from 'prop-types';

function BookCard({ book }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', width: '200px', textAlign: 'center' }}>
      <img src={book.image} alt={book.name} style={{ width: '100%', height: 'auto' }} />
      <h3>{book.name}</h3>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Author:</strong> {book.author}</p>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
