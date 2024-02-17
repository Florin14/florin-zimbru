import "./Preloader.scss"

import logo from '../../assets/img/Logo-ZimbruFlorin.gif'

export const Preloader = () => {
  return (
    <div className="preloader-wrapper">
      <img src={logo} alt="preloader-img" className="preloader-img"></img>
    </div>
  );
};
