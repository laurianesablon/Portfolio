import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactIcon from "../assets/icons/React-icon.svg";
import ReduxIcon from "../assets/icons/redux.svg";
import SassIcon from "../assets/icons/sass.svg";
import { useContext } from "react";
import { ThemeContext } from "../App";

export function Card({ title, content, imageUrl, videoUrl, technologies }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const React = ReactIcon;
  const Redux = ReduxIcon;
  const Sass = SassIcon;
  const { theme } = useContext(ThemeContext);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getIcon = (technology) => {
    switch (technology) {
      case "React":
        return ReactIcon;
      case "Redux":
        return ReduxIcon;
      case "Sass":
        return SassIcon;
      default:
        return null;
    }
  };

  return (
    <div className="card-container">
      <h2>{title}</h2>

      <div className="card" onClick={handleCardClick}>
        <img src={imageUrl} alt="" />
        <div className="card-content">
          <a href="#" className="button">
            Find out more <span className="material-symbols-outlined"></span>
          </a>
        </div>
      </div>

      {isModalOpen && (
        <dialog open className="modal">
          <div className={`modal-container ${theme}`}>
            <div className="image-container">
              <img src={imageUrl} />
            </div>

            <div className="modal-content">
              <h2 className={theme}>{title}</h2>
              <p className={theme}>{content}</p>

              <div className="modal-link-buttons">
                <div>See code</div>
                <div>Website</div>
              </div>
              <div className="technologies">
                <ul>
                  {technologies?.map((technology, index) => (
                    <li key={index}>
                      <img src={getIcon(technology)} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <i
              class="fa-solid fa-arrow-left close-button"
              onClick={handleCloseModal}
            ></i>
          </div>
        </dialog>
      )}
    </div>
  );
}
