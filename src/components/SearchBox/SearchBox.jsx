import styles from "./SearchBox.module.css";

function SearchBox({ searchValue, onSearch }) {
  return (
    <div className={styles.search}>
      <label className={styles.label}>
        Search contacts
        <input
          className={styles.input}
          type="text"
          value={searchValue}
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Enter contact name"
        />
      </label>
    </div>
  );
}

export default SearchBox;