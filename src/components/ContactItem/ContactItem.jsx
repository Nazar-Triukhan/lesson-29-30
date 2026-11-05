import styles from "./ContactItem.module.css";

function ContactItem({
  contact,
  onDeleteContact,
  onEditContact,
}) {
  return (
    <li className={styles.item}>
      <div>
        <p className={styles.name}>{contact.name}</p>
        <p className={styles.number}>{contact.number}</p>
      </div>

      <div>
        <button
          className={styles.button}
          type="button"
          onClick={() => onEditContact(contact)}
        >
          Edit
        </button>

        <button
          className={styles.button}
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ContactItem;