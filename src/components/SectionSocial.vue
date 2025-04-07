<script>
import avatar from "../assets/img/avatar1.webp";
export default {
  name: "SectionSocial",
  data() {
    return {
      avatar,
    };
  },
};
</script>
<template>
  <div class="home__social-profile">
    <div class="home__social-profile-content">
      <div class="home__social">
        <a
          href="https://goo.su/xYeIzE"
          class="nav__link-social"
          data-aos="fade-right"
        >
          <i class="fa-brands fa-linkedin icon__social"></i>
        </a>
        <a
          href="https://goo.su/mQKk"
          class="nav__link-social"
          data-aos="fade-right"
        >
          <i class="fa-brands fa-github icon__social"></i>
        </a>
      </div>
      <div class="home__img" data-aos="zoom-in">
        <div class="home__frame"></div>
        <div class="home__frame-img">
          <img :src="avatar" alt="avatar" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.home__social-profile-content,
.home__social,
.home__img {
  display: flex;
}

.home__social-profile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: var(--m-16);
}

.home__social-profile-content {
  flex-wrap: nowrap;
  justify-content: center;
}

.home__social {
  flex-direction: column;
  width: var(--m-32);
  justify-content: center;
  align-items: center;
  margin-left: var(--m-8);
}

.icon__social {
  font-size: var(--m-32);
  color: var(--color_primary);
  margin: var(--m-24) 0;
}
.home__img {
  /*    border: 1px solid yellow;*/
  width: 18.75rem;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 0;
}

.home__frame {
  width: 13.1rem;
  height: 13.1rem;
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

.home__frame-img > img {
  position: relative;
  width: 13rem;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  left: -1px;
  bottom: -1px;
}

/* Medias queries -----> small */
@media screen and (max-width: 320px) {
  .home__social {
    margin: 0.5rem;
  }
  .home__social-profile {
    margin: var(--m-8) 0;
  }

  .home__social-profile-content {
    text-align: center;
    width: 250px;
  }
  .home__img {
    padding: 0;
    width: 240px;
  }

  .home__frame {
    width: 10rem;
    height: 10rem;
  }

  .home__frame-img > img {
    width: 9.5rem;
    height: 9.5rem;
    left: -3px;
    bottom: -5px;
  }
}

/*------------ MEDIA QUERIES Medium devise and Large devise------------*/
@media (min-width: 768px) and (max-width: 991px) {
  .home__img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .home__frame {
    width: 22rem;
    height: 22rem;
    animation: animate 15s linear infinite;
  }
  .home__frame-img > img {
    width: 21.9rem;
    height: auto;
    left: 1px;
    bottom: 0px;
  }
  .home__social {
    margin: var(--m-32);
  }
  .icon__social {
    font-size: var(--m-44);
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}

@media screen and (min-width: 1024px) {
  .home__social-profile,
  .home__img {
    display: flex;
  }
  .home__social-profile-content {
    justify-content: left;
    width: 320px;
  }

  .home__social-profile {
    justify-content: space-between;
    align-content: center;
    margin: 0;
    width: 400px;
  }

  .home__social {
    width: var(--m-40);
    margin-right: var(--m-16);
    margin-left: 0;
    justify-items: self-start;
  }

  .icon__social:hover {
    color: var(--color_second);
  }
  .home__img {
    flex-direction: column;
    justify-content: center;
    width: 18.75rem;
  }

  .home__frame {
    width: 17.12rem;
    height: 17.12rem;
    animation: animate 15s linear infinite;
  }

  .home__frame-img > img {
    width: 17rem;
    height: 17rem;
    left: 2px;
    bottom: -1px;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
