"use strict";

const bg = document.querySelector("#bg");
const albumArt = document.querySelector("#albumArt");
const albumLight = document.querySelector("#albumLight");
const songName = document.querySelector("#songName");
const prevBtn = document.querySelector("#prevBtn");
const playBtn = document.querySelector("#playBtn");
const nextBtn = document.querySelector("#nextBtn");
const toggler = document.querySelector("#toggler");
const songListContainer = document.querySelector("#songListContainer");
const song = document.querySelector("#song");
const songList = document.querySelector("#songList");
const listItem = document.querySelectorAll(".listItem");

const bgArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

let i = 0;

nextBtn.addEventListener("click", () => {
	i++;
	if (i < bgArr.length) {
		listItem[i - 1].classList.remove("playing");
		bg.style.background = `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(img/${bgArr[i]}Blur.jpg) no-repeat center center/cover`;
		albumArt.style.background = `url(img/${bgArr[i]}.jpg) no-repeat center center/cover`;
		songName.innerHTML = `AnimeSong--${bgArr[i]}`;
		song.src = `musicFiles/${bgArr[i]}.m4a`;
		song.classList.remove("songActive");
	} else if (i == bgArr.length) {
		listItem[i - 1].classList.remove("playing");
		i = 0;
		bg.style.background = `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(img/${bgArr[i]}Blur.jpg) no-repeat center center/cover`;
		albumArt.style.background = `url(img/${bgArr[i]}.jpg) no-repeat center center/cover`;
		songName.innerHTML = `AnimeSong--${bgArr[i]}`;
		song.src = `musicFiles/${bgArr[i]}.m4a`;
		song.classList.remove("songActive");
	}
});

prevBtn.addEventListener("click", () => {
	if (i <= 0) {
		listItem[i].classList.remove("playing");
		i = bgArr.length - 1;
		bg.style.background = `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(img/${bgArr[i]}Blur.jpg) no-repeat center center/cover`;
		albumArt.style.background = `url(img/${bgArr[i]}.jpg) no-repeat center center/cover`;
		songName.innerHTML = `AnimeSong--${bgArr[i]}`;
		song.src = `musicFiles/${bgArr[i]}.m4a`;
		song.classList.remove("songActive");
	} else if (i < bgArr.length) {
		listItem[i].classList.remove("playing");
		i--;
		bg.style.background = `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(img/${bgArr[i]}Blur.jpg) no-repeat center center/cover`;
		albumArt.style.background = `url(img/${bgArr[i]}.jpg) no-repeat center center/cover`;
		songName.innerHTML = `AnimeSong--${bgArr[i]}`;
		song.src = `musicFiles/${bgArr[i]}.m4a`;
		song.classList.remove("songActive");
	}
});

toggler.addEventListener("click", () => {
	if (!songListContainer.classList.contains("active")) {
		songListContainer.style.left = "0%";
		songListContainer.style.opacity = "1";
		songListContainer.classList.add("active");
	} else {
		songListContainer.classList.remove("active");
		songListContainer.style.left = "100%";
		songListContainer.style.opacity = "1";
	}
});

playBtn.addEventListener("click", () => {
	if (!song.classList.contains("songActive")) {
		song.classList.add("songActive");
		song.play();
	} else {
		song.classList.remove("songActive");
		song.pause();
	}
	if (!listItem[i].classList.contains("playing")) {
		listItem[i].classList.add("playing");
		song.play();
	} else {
		listItem[i].classList.remove("playing");
		song.pause();
	}
});

songList.addEventListener("click", (e) => {
	const clicked = e.target.id;
	listItem[i].classList.remove("playing");
	i = bgArr.indexOf(`${clicked}`);
	if (e.target !== e.currentTarget) {
		song.src = `musicFiles/${clicked}.m4a`;
		song.classList.add("songActive");
		bg.style.background = `linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(img/${clicked}Blur.jpg) no-repeat center center/cover`;
		albumArt.style.background = `url(img/${clicked}.jpg) no-repeat center center/cover`;
		songName.innerHTML = `AnimeSong--${clicked}`;
		if (!listItem[i].classList.contains("playing")) {
			listItem[i].classList.add("playing");
			song.play();
			playBtn.classList.add("danceFilter");
			albumLight.classList.add("danceFilter");
		} else {
			listItem[i].classList.remove("playing");
			song.pause();
			playBtn.classList.remove("danceFilter");
			albumLight.classList.remove("danceFilter");
		}
	}
	e.stopPropagation();
});

document.addEventListener("click", () => {
	if (song.classList.contains("songActive")) {
		playBtn.classList.add("danceFilter");
		albumLight.classList.add("danceFilter");
	} else {
		playBtn.classList.remove("danceFilter");
		albumLight.classList.remove("danceFilter");
	}
});
