import "./ContactButton.scss";

export const ContactButton = ({ callback }) => {
  return (
    <li
      className="contact-button"
      onClick={() => {
        callback();
      }}
    >
      <a href="#contact">Contact</a>
    </li>
  );
};
