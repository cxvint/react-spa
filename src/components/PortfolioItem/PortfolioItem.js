import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioItem.css';

function PortfolioItem({ work }) {
  return (
    <Link to={`/project/${work.id}`} className="portfolio-item">
      <img
        className="portfolio-item__screenshot"
        src={work.screenshot}
        alt={work.title}
      />
      <div className="portfolio-item__title">{work.title}</div>
    </Link>
  );
}

export default PortfolioItem;
