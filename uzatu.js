// Устанавливаем дату для отсчета (4 Июнь 2025 года)
const targetDate = new Date('June 3, 2025 00:00:00').getTime();

// Функция для обновления времени отсчета
function updateCountdown() {
	const now = new Date().getTime();
	const distance = targetDate - now;

	// Вычисление оставшихся дней, часов, минут и секунд
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Отображаем значения на странице
	document.getElementById('days').textContent = days;
	document.getElementById('hours').textContent = hours;
	document.getElementById('minutes').textContent = minutes;
	document.getElementById('seconds').textContent = seconds;

	// Когда отсчет завершен, выводим сообщение
	if (distance < 0) {
		clearInterval(interval);
		document.getElementById('countdown').innerHTML = 'Событие наступило!';
	}
}

// Обновляем отсчет каждую секунду
const interval = setInterval(updateCountdown, 1000);

// Инициализируем отсчет
updateCountdown();

const audio = document.getElementById('myAudio');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');

function toggleAudio() {
	if (audio.paused) {
		audio.play();
		playBtn.classList.remove('active');
		pauseBtn.classList.add('active');
	} else {
		audio.pause();
		pauseBtn.classList.remove('active');
		playBtn.classList.add('active');
	}
}
