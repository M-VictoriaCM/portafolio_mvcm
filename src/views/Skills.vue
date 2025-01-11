<script>
import SkillsGroup from '../components/SkillsGroup.vue';
import img1 from '../assets/img/html_icon.png';
import img2 from '../assets/img/css_icon.png';
import img3 from '../assets/img/js_icon.png';
import img4 from '../assets/img/vue_icon.png';
import img5 from '../assets/img/python_icon.png'
import img6 from '../assets/img/java_icon.png';
import img7 from '../assets/img/php_icon.png';
import img8 from '../assets/img/flask_icon.png';
import img9 from '../assets/img/django_icon.png';
import img10 from '../assets/img/go_icon.png';
import img11 from '../assets/img/spring_icon.png';
import img12 from '../assets/img/mysql_icon.png';
import img13 from '../assets/img/postgresql_icon.png';
import img14 from '../assets/img/mongodb_icon.png';
import img15 from '../assets/img/photoshop_icon.png';
import img16 from '../assets/img/figma_icon.png';
import img17 from '../assets/img/canva_icon.png';
import img18 from '../assets/img/git_icon.png';
import img19 from '../assets/img/github_icon.png';
import img20 from '../assets/img/confluence_icon.png';
import img21 from '../assets/img/jira_icon.png';
import img22 from '../assets/img/power_bi_icon.png';
import img23 from '../assets/img/bootstrap_icon.png';
import img24 from '../assets/img/postman_icon.png';
import img25 from '../assets/img/angular_icon.png';
export default {
   name:'Skills',
   components:{
    SkillsGroup
   },
   data(){
    return{
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
        img11, img12, img13, img14, img15, img16, img17, img18, img19, 
        img20, img21, img22, img23, img24, img25
    }
   }
}
</script>
<template>
    <div class="skills__container">
        <!--------------- Skills: Frontend --------------->
        <SkillsGroup
            title="Frontend"
            icon="fa-solid fa-laptop-code"
            :skills="[
                {id: 1, name: 'HTML', src:img1},
                {id: 2,name: 'Css', src:img2},
                {id: 3,name: 'JavaScript', src:img3 },
                {id: 4,name: 'Vue', src:img4 },
                {id:5, name:'Angular', src:img25}
            ]"
        />
        
        <!--------------- Skills: Backend --------------->
        <SkillsGroup
            title="Backend"
            icon="fa-solid fa-server"
            :skills="[
                {id: 1, name: 'Python',src: img5},
                {id: 2,name: 'Java',src:img6},
                {id: 3,name: 'PHP',src:img7 },
                {id: 4,name: 'Flask',src:img8},
                {id: 5,name: 'Django',src:img9},
                {id: 6,name: 'Go',src:img10},
                {id: 7,name: 'Spring',src:img11},
            ]"
        />
        <!--------------- Skills: DataBase --------------->
        <SkillsGroup
            title="DataBase"
            icon="fa-solid fa-database "
            :skills="[
                {id: 1, name: 'MySql',src: img12},
                {id: 2, name: 'PostgreSql',src: img13},
                {id: 3, name: 'MongoDB',src: img14},
            ]"
        />
        <SkillsGroup
            title="Desing"
            icon="fa-solid fa-swatchbook "
            :skills="[
                {id: 1, name: 'Photoshop',src: img15},
                {id: 2, name: 'Figma',src: img16},
                {id: 3, name: 'Canva',src: img17},
            ]"
        />
        <SkillsGroup
            title="Tools"
            icon="fa-solid fa-screwdriver-wrench"
            :skills="[
                {id: 1, name: 'Git',src: img18},
                {id: 2, name: 'Github',src: img19},
                {id: 3, name: 'Confluence',src: img20},
                {id: 4, name: 'Jira',src: img21},
                {id: 5, name: 'Power Bi',src: img22},
                {id: 6, name: 'Bootstrap',src: img23},
                {id: 7, name: 'Postman',src: img24},
            ]"
        />
    </div>
</template>
<style>
.skills__container,
.skills__header {
    display: flex;
}
.skills__container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:calc(100% - 4rem);
    padding-bottom:3rem;
}

.skills__header {
    width:90%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.skills__icon {
    font-size: var(--m-36);
}

.skills__icon {
    color: var(--color_second);
    margin-right: var(--m-8);
}

@media (min-width: 768px) and (max-width: 991px) {
    .skills__icon {
        font-size: var(--m-48);
    }

    .skills__header {
        margin-bottom: 16px;
        margin-top: 24px;
    }


}

@media screen and (min-width: 1024px) {
    .skills__icon {
        font-size: var(--m-64);
    }

    .skills__header {
        margin-bottom: 32px;
        margin-top: 24px;
    }

}
</style>