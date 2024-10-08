import React from "react";
import Link from "next/link";

export default function Course() {
  return (
    <body>
      <section className="Sub-header">
        <nav>
          <a href="index.html" className="logo">
            Xplore
            <i className="fab fa-staylinked"></i>kill
          </a>
          <div className="nav-links" id="navLinks">
            {/* <!-- reposnive bar open and close --> */}

            <i className="fa fa-times"></i>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href="/course">Course</Link>
              </li>
              <li>
                <Link href={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars"></i>
          {/* <!-- reposnive bar open and close --> */}
        </nav>
        <h1>Our Courses</h1>
      </section>

      {/* <!-- course start --> */}

      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Undergraduate Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
          <div className="course-col">
            <h3>Graduate Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
          <div className="course-col">
            <h3>Adult Learning & Degree Completion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- course end --> */}

      {/* <!-- best course start --> */}

      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            <img src="img/course1.png" alt="" />
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <img src="img/course2.png" alt="" />
            <h3>Artificial Intelligence</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <img src="img/course3.png" alt="" />
            <h3>Data Science</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- best courses end --> */}

      {/* <!-- Footer start --> */}
      <section className="footer">
        <hr />
        <h4>About Us</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
          incidunt odio nam facilis, eligendi
          <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
          exercitationem, illum molestiae dolorem.
        </p>

        <div className="icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p>
          Made with <i className="fas fa-heart"></i> by{" "}
          <a href="#">Sagar Developer</a>
        </p>
        <p>
          Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights
          Reserved
        </p>
      </section>
      {/* <!-- Footer end --> */}
    </body>
  );
}
