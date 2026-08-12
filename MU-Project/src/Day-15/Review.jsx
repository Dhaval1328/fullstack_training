import { useState } from "react";
import "./Review.css";

// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

function Review() {
  const [CurentItem, setCurrentItem] = useState(0);
  const review = reviews[CurentItem];
  //next Logic button
  const nextReview = () => {
    if (CurentItem === reviews.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem(CurentItem + 1);
    }
  };

  //prev logic button
  const prevReview = () => {
    if (CurentItem === 0) {
      setCurrentItem(reviews.length - 1);
    } else {
      setCurrentItem(CurentItem - 1);
    }
  };

  //random logic button
  const randomReview = () => {
    const random = Math.floor(Math.random() * reviews.length);
    setCurrentItem(random);
  };

  return (
    <>
      <main>
        <section class="container">
          {/* <!-- title --> */}
          <div class="title">
            <h2>our reviews</h2>
            <div class="underline"></div>
          </div>
          {/* <!-- review --> */}
          <article class="review">
            <div class="img-container">
              <img src={review.img} id="person-img" alt="" />
            </div>
            <h4 id="author">{review.name}</h4>
            <p id="job">{review.job}</p>
            <p id="info">{review.text}</p>
            {/* <!-- prev next buttons--> */}
            <div class="button-container">
              <button class="prev-btn" onClick={prevReview}>
                Prev
              </button>
              <button class="next-btn" onClick={nextReview}>
                next
              </button>
            </div>
            {/* <!-- random button --> */}
            <button class="random-btn" onClick={randomReview}>
              surprise me
            </button>
          </article>
        </section>
      </main>
    </>
  );
}

export default Review;
