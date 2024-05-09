import styles from './ButtonB.module.css'

function ButtonB({ text, link }) {
  return (
    <div>
      <a href={link} target="_blank">
        <button className={`${styles.btn} btn btn-success`}>{text}</button>
      </a>
    </div>
  );
}

export default ButtonB;
