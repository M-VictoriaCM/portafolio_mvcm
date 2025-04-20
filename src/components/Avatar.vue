<template>
  <div class="profile__img" data-aos="fade-right">
    <div class="profile__frame"></div>
    <div class="profile__frame-img">
      <img :src="avatar" alt="avatar" />
    </div>
  </div>
</template>
<script>
import avatar from "../assets/img/avatar1.webp";
export default {
  name: "Avatar",
  data() {
    return {
      avatar: avatar,
    };
  },
};
</script>

<style>
.profile__img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile__img {
  width: 6rem;
  flex-wrap: nowrap;
  justify-content: center;
}

.profile__frame {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border-right: 2px solid #af4bce;
  border-left: 2px solid #d302a5;
  border-top: 3px solid #c333bb;
  position: absolute;
  z-index: 10;
  animation: animate 10s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.profile__frame-img > img {
  position: relative;
  width: 4.9rem;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  left: -1px;
  bottom: -1px;
}

@media screen and (max-width: 320px) {
  .profile__img {
    padding: 0;
    width: 240px;
  }

  .profile__frame {
    width: 10rem;
    height: 10rem;
  }

  .profile__frame-img > img {
    width: 9.5rem;
    height: 9.5rem;
    left: -3px;
    bottom: -5px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .profile__img {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
  }

  .profile__frame {
    width: 16rem;
    height: 16rem;
    animation: animate 15s linear infinite;
  }

  .profile__frame-img > img {
    width: 15.9rem;
    height: auto;
  }
}
</style>
