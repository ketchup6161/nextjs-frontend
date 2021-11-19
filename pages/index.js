import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { EventItem } from '@/components/EventItem';
import Link from 'next/link';

export default function HomePage({ events }) {
  return (
    <Layout>
      <div>
        <h1>Upcoming Events</h1>
        {events.length == 0 && <h3>No Events to show</h3>}
        {events.map((evt) => (
          <EventItem
            key={evt.id}
            name={evt.name}
            date={evt.date}
            image={evt.image}
            slug={evt.slug}
          />
        ))}

        {events.length > 0 && (
          <Link href="/events">
            <a className="btn-secondary">Events</a>
          </Link>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
  };
}
