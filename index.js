
document.addEventListener('DOMContentLoaded', () => {
  const dailyData = document.querySelectorAll('.card__info-time[data-time="weekly"]');
  const timeButtons = document.querySelectorAll('.profile__time-changer');
  const allTime = document.querySelectorAll('.card__info-time');
  
  timeButtons[1].classList.add('profile__time-changer--active');

  timeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const time = button.textContent.toLocaleLowerCase();

      const timeData = document.querySelectorAll(`.card__info-time[data-time="${time}"]`);    
      
      timeButtons.forEach((node) => {
        node.classList.remove('profile__time-changer--active');
      })

      button.classList.add('profile__time-changer--active');

      allTime.forEach((node) => {
        node.classList.remove('card__info-time--show');
      });

      timeData.forEach((node) => {
        node.classList.add('card__info-time--show');
      })
    })
  })

  dailyData.forEach((node) => {
    node.classList.add('card__info-time--show');
  })


});


