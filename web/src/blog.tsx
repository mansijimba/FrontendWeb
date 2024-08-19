import React from 'react';
import './blog.css';
import RashCream from "./assets/RashCream.png";
import BabyLotion from "./assets/babylotion.png";
import Combo from "./assets/Combo.png";
import gift from "./assets/gift.png";

const BlogSection: React.FC = () => {
  return (
    <section id="blog">
      <div className="blog-box">
        <div className="blog-img">
          <img src={RashCream} alt="Diaper Rash Cream" />
          <div className="date-overlay">
            <span>NOV</span> | <span>01</span> | <span>2023</span>
          </div>
        </div>
        <div className="blog-details">
          <h4>All Your Baby Diaper Rash FAQs, Answered</h4>
          <p>Diapering: It’s a dirty job, but someone has to do it (and that someone is…you.) But how can you keep...</p>
          <a href="#">Continue Reading</a>
        </div>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src={BabyLotion} alt="Baby Lotion" />
          <div className="date-overlay">
            <span>NOV</span> | <span>21</span> | <span>2023</span>
          </div>
        </div>
        <div className="blog-details">
          <h4>7 Tips to Solve Dry Winter Skin</h4>
          <p>How to winter-proof your skin for the cold days and nights ahead. Winter is here—and our skin is feeling it....</p>
          <a href="#">Continue Reading</a>
        </div>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src={Combo} alt="Baby Combo" />
          <div className="date-overlay">
            <span>JUN</span> | <span>09</span> | <span>2023</span>
          </div>
        </div>
        <div className="blog-details">
          <h4>Your Baby Registry Must-Haves</h4>
          <p>“Making a baby registry is so easy!” said no expecting parent ever. We get it: From the minute you find...</p>
          <a href="#">Continue Reading</a>
        </div>
      </div>

      <div className="blog-box">
        <div className="blog-img">
          <img src={gift} alt="Gift for Spouse" />
          <div className="date-overlay">
            <span>AUG</span> | <span>16</span> | <span>2023</span>
          </div>
        </div>
        <div className="blog-details">
          <h4>The Best Gifts for Your Spouse</h4>
          <p>Finding thoughtful gifts for your spouse can be time-consuming and stressful—so we’re here to help. Whether you’re searching for gifts...</p>
          <a href="#">Continue Reading</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
