import { gql, useQuery } from "@apollo/client";
import LiveStream from "./LiveStream";
import styles from "../styles/LiveStreamList.module.css";

const QUERY_LIVESTREAMS = gql`
  query {
    livestreams {
      id
      name
      imageUrl
      description
      websiteUrl
      streamUrl
    }
  }
`;

const LiveStreamList = () => {
  const { loading, error, data } = useQuery(QUERY_LIVESTREAMS, {});

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
      <ul className={styles.container}>
        {data.livestreams.map((livestream) => (
          <li key={livestream.id} className={styles.item}>
            <LiveStream {...livestream} />
          </li>
        ))}
      </ul>
  );
};

export default LiveStreamList;

