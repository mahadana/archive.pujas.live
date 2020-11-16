import styles from "../styles/LiveStream.module.css";

const LiveStream = (props) => {
  return (
    <>
      <h2 className={styles.header}>{props.name}</h2>
      {props.imageUrl && <img src={props.imageUrl} />}
      <p>{props.description}</p>
      {props.streamUrl && <a href={props.streamUrl}>Stream</a>}{" "}
      {props.websiteUrl && <a href={props.websiteUrl}>Website</a>}
    </>
  );
};

export default LiveStream;
