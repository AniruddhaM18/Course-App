import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Aniruddha M",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQE3TCORKckAog/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707050905247?e=2147483647&v=beta&t=j6DtNh4B-C20NvkC0xf7PvxbjRKsRhgLDl_q3h146Ok",
    },
    {
      id: 2,
      name: "Harkirat Singh",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://bs-uploads.toptal.io/blackfish-uploads/talent/427843/picture/optimized/huge_c711f787694f240c7bb20e598bfdd6e8-e2b83df354d725bbf11311fddbcf3719.jpg",
    },
    {
      id: 3,
      name: "Ani Maradwar",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 4,
      name: "Dipen Bhatta",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://pbs.twimg.com/profile_images/1908577270316314624/Sy3BSPi2_400x400.jpg",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
