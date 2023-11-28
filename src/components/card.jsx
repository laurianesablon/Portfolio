import React, { useState } from "react";
import ReactIcon from "../assets/icons/React-icon.svg";
import ReduxIcon from "../assets/icons/redux.svg";
import SassIcon from "../assets/icons/sass.svg";
import JavaScriptIcon from "../assets/icons/JS.jpg"
import D3Icon from "../assets/icons/d3.svg";
import HTMLIcon from "../assets/icons/HTML.png";

import { ThemeContext } from "../App";
import { useContext } from "react";

export function Card({ title, content, imageUrl, technologies, githubUrl, websiteUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      case "D3":
        return D3Icon;
      case "JS":
        return JavaScriptIcon;
      case "HTML":
        return HTMLIcon;
      default:
        return null;
    }
  };

  return (
    <div className="card-container">
      <h2>{title}</h2>

      <div className="card" onClick={handleCardClick}>
        <img src={imageUrl} alt="" />
       
      </div>

      {isModalOpen && (
        <dialog open className="modal">
          <div className={`modal-container ${theme}`}>
            <div className="image-container">
              <img src={imageUrl}  alt={title}/>
            </div>

            <div className="modal-content">
              <h2 className={theme}>{title}</h2>
              <p className={theme}>{content}</p>

              <div className="modal-link-buttons">
                {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer"><div>See code</div></a>}
                {websiteUrl && <a href={websiteUrl} target="_blank" rel="noopener noreferrer"><div>See website</div></a>}
              </div>
              <div className="technologies">
                <ul>
                  {technologies?.map((technology, index) => (
                    <li key={index}>
                      <img src={getIcon(technology)} alt={technology} />
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
