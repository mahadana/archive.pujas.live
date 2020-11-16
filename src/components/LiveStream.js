import styles from "../styles/LiveStream.module.css";

const LiveStream = (props) => {
  return (
    <>
      {props.imageUrl && <img className={styles.image} src={props.imageUrl} />}
      <h2 className={styles.header}>{props.name}</h2>

      <p className={styles.description}>{props.description}</p>
      <p className={styles.links}>
        {props.streamUrl && (
          <a className={styles.link} href={props.streamUrl}>
            Stream
          </a>
        )}
        {props.websiteUrl && (
          <a className={styles.link} href={props.websiteUrl}>
            Website
          </a>
        )}
      </p>
    </>
  );
};

export default LiveStream;
