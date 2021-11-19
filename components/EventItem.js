import styles from '@/styles/Event.module.css';
import Link from 'next/link';

export const EventItem = ({ name, date, image, slug }) => {
  return (
    <div className={styles.event}>
      <img
        src={image ? image.formats.thumbnail.url : '/images/event-default.png'}
      />
      <div className={styles.desc}>
        <p>{new Date(date).toLocaleDateString('en-IN')}</p>
        <h3>{name}</h3>
      </div>
      <Link href={`/events/${slug}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};
