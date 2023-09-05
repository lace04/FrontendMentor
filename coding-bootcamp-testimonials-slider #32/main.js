const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const userImg = document.querySelector('#user-img');
const userTestimonial = document.querySelector('.user-testimonial');
const userName = document.querySelector('.username');
const userDegree = document.querySelector('.user-degree');

const users = [
  {
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    testimonial: `“ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`,
    imgUrl: './images/image-tanya.jpg',
  },
  {
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    imgUrl: './images/image-john.jpg',
  },
];

let imageIndex = 0;

const updateProfileInfo = () => {
  userImg.setAttribute('src', users[imageIndex].imgUrl);
  userTestimonial.textContent = users[imageIndex].testimonial;
  userName.textContent = users[imageIndex].name;
  userDegree.textContent = users[imageIndex].job;
};

nextBtn.addEventListener('click', () => {
  imageIndex = (imageIndex + 1) % users.length;
  updateProfileInfo();
});

prevBtn.addEventListener('click', () => {
  imageIndex = (imageIndex - 1 + users.length) % users.length;
  updateProfileInfo();
});
