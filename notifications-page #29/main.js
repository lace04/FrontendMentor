const numberElement = document.querySelector('#number');
const posts = document.querySelectorAll('.post');

posts.forEach((post) => {
  post.addEventListener('click', (event) => {
    post.querySelector('.status').classList.remove('not-read');
    updatedNotifications();
  });
});

const updatedNotifications = () => {
  const notReadElements = document.querySelectorAll('.not-read');
  let notifications = notReadElements.length;
  numberElement.innerText = notifications;
};

updatedNotifications();

const markAllBtn = document.querySelector('#mark-all');

markAllBtn.addEventListener('click', () => {
  const notReadElements = document.querySelectorAll('.not-read');
  notReadElements.forEach((notReadElement) => {
    notReadElement.classList.remove('not-read');
  });
  updatedNotifications();
});
