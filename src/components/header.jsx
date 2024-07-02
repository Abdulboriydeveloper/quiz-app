import React from "react";
import { Link } from "react-router-dom";
import { About } from "./about";
import '../assets/css/home.css';
import backgroundImage from '../assets/img/1_smFtFRlnwIp8e1IadO4j6g.png';

export const Header = () => {
  return (
    <>
      <div className="main_page_wrap" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="container">
            <div className="row" style={{ width: '100%' }}>
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Test tuzuvchiga xush kelibsiz📝
                </h1>
                <p>Bu vebsayt "Mutolaa Suniiy Idrok" jamoasi orqali yaratilgan. Siz bu yerda istalgan kitobingiz yoki pdf faylingiz bo'yicha tekinga 100 test tuzishingiz mumkin.</p>
                <Link
                  to="/quiz"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Boshlash
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};