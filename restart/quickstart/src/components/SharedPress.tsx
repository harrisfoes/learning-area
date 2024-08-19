function SharedPress({ count, onClick }) {
  console.log(count);
  return (
    <button onClick={onClick}>
      The count for this SharedPress component is {count}
    </button>
  );
}

export default SharedPress;
