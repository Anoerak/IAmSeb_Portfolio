<script>

export default {
    name: 'GlitchingImg',
    props: {
        image: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        cv: {
            type: Boolean,
            default: false
        },
        resumeFile: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            // MyCV,
            // image: '',
            // alt: ''
        }
    },
    mounted() { }
}
</script>

<template>
    <div id="glitching-img-container">
        <svg class="filter">
            <filter id="alphaRed">
                <feColorMatrix mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="joint" />
            </filter>
            <filter id="alphaGreen">
                <feColorMatrix mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="joint" />
            </filter>
            <filter id="alphaBlue">
                <feColorMatrix mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="joint" />
            </filter>
            <filter id="alpha">
                <feColorMatrix type="saturate" values="0" />
            </filter>
        </svg>
        <div class="imgWrap">
            <img class="red" :src="image" :alt="alt" />
            <img class="green" :src="image" :alt="alt" />
            <img class="blue" :src="image" :alt="alt" />
            <p class="text">
                <span>Hover me!!</span>
            </p>
        </div>
        <a v-if="cv" class="my__resume" :href="resumeFile">
            <img src="build/assets/logos/cv.png" alt="My CV" />
        </a>
    </div>
</template>

<style>
:root {
    --time: 0.4s;
}

#glitching-img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20rem;
    width: 40rem;
    opacity: 0;
    animation: fadeInImg 1s ease-in-out 3.75s forwards;
}

#glitching-img-container .filter {
    display: none;
}

/* #region imgWrap */
#glitching-img-container .imgWrap {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
}

#glitching-img-container .imgWrap img {
    border-radius: 1rem 0 1rem 0;
    height: 100%;
    width: 80%;
    object-fit: cover;
    object-position: 100% 25%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#glitching-img-container .imgWrap .red {
    filter: url(#alphaRed);
    mix-blend-mode: lighten;
    transform: translate(-49.5%, -49.8%);
    animation-name: imgGlitch, shakingImgRed;
    animation-duration: var(--time);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

#glitching-img-container .imgWrap .green {
    filter: url(#alphaGreen);
    mix-blend-mode: lighten;
    transform: translate(-50.5%, -48.8%);
    animation-name: imgGlitch, shakingImgGreen;
    animation-duration: var(--time);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

#glitching-img-container .imgWrap .blue {
    filter: url(#alphaBlue);
    mix-blend-mode: lighten;
    transform: translate(-50.5%, -50.8%);
    animation-name: imgGlitch, shakingImgBlue;
    animation-duration: var(--time);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

#glitching-img-container .imgWrap .text {
    display: block;
    color: #fff;
    font-size: 18px;
    padding: 2px 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s;
}

#glitching-img-container .imgWrap .text span {
    position: relative;
    z-index: 1;
}

#glitching-img-container .imgWrap .text::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(1, 1) translate(-50%, -50%);
    transform-origin: center left;
    transition: transform 0.2s;
    z-index: 0;
}

#glitching-img-container .imgWrap:hover>.red {
    animation: none;
    filter: none;
    transform: translate(-50%, -50%);
}

#glitching-img-container .imgWrap:hover>.green {
    animation: none;
    filter: none;
    transform: translate(-50%, -50%);
}

#glitching-img-container .imgWrap:hover>.blue {
    animation: none;
    filter: none;
    transform: translate(-50%, -50%);
}

#glitching-img-container .imgWrap:hover>.text {
    opacity: 0;
}

#glitching-img-container .imgWrap:hover .text::before {
    transform: scale(0, 1) translate(-50%, -50%);
}

/* #endregion */

#glitching-img-container .my__resume {
    box-shadow: var(--box-shadows-light-outset);
    border-radius: 1rem;
    width: 5rem;
}

#glitching-img-container .my__resume:hover {
    cursor: pointer;
    animation: fadeInImg 1s ease-in-out infinite;
}

#glitching-img-container .my__resume:active {
    box-shadow: var(--box-shadows-light-inset);
}

#glitching-img-container .my__resume img {
    width: 5rem;
    padding: 1rem;
    border-radius: 1rem;
}

body.dark #glitching-img-container .my__resume {
    box-shadow: var(--box-shadows-dark-outset);
}

body.dark #glitching-img-container .my__resume:hover {
    animation: fadeInImg 1s ease-in-out infinite;
}

body.dark #glitching-img-container .my__resume:active {
    box-shadow: var(--box-shadows-dark-inset);
}

body.dark #glitching-img-container .my__resume img {
    filter: invert(1);
}

@keyframes imgGlitch {
    0% {
        clip-path: path('M400,21.66V10.49h-116.29V0H39.36V54.56H0v36.09H101.25v9.77H.23v5.52H101.25v14.44H22.77v15.29H13.82v39.06H.23v6.79H13.82v15.29h60.63v20.81H10.25v51.17H.23v26.75H61.69v30.57h-29.35v12.1H0v30.57H22.77v31.36H400v-25.41h-31.43v-5.95h31.43v-8.28h-31.43v-15.92h-9.57v-14.65h32.56v-13.38h8.44v-10.83h-8.44v-52.23h-79.37v-21.02h69.78v-7.64h18.03v-24.7h-8.44v-52.58h-22.99v-11.89h31.43v-15.29h-31.43v-36.3h31.43V35.03h-116.29v-13.38h116.29ZM138.57,120.38h15.14v15.29h-15.14v-15.29ZM74.45,386.85v-18.08h39.56v14.01h144.19v4.06H74.45Zm89.32-42.28v-6.37h-34.45v-12.1h48.49v18.47h-14.04Zm56.73-25.48h-5.05v-2.55h5.05v2.55Zm-5.05-13.38v-10.19h5.05v10.19h-5.05Z'
            );
    }

    50% {
        clip-path: path('M398.2,238.77v-14.06h2.28v-24.74h-2.28v-37.76h-8.45v-4.24H215.93v-3.23h178.76v-61.25H254.7v-3.19h33.11v-11.59h102.55V29.58h-52.25V0H93.75V13.18H0v11.19H39.84v29.77H.48v36.15H39.84v28.22H18.22v6.81h5.04v10.06H14.3v61.25h60.63v2.12H1.05v56.57H29.76v21.71H96.62v3.81h4.79v7.66h-3.83v-6.14H.6v14.67H62.17v13.8H.48v30.62H82.37v3.83h35.94v8.77H15.17v13.3H118.31v8.77H.48v23.84H244.84v-12.97h134.3v-18.11h21.34v-8.29h-21.34v-26.19h19.02v-25.45h-42.19v-26.19h18.5v-1.93h26.01v-10.85h-26.01v-25.51h-71.49v-5.73h95.22Zm-171.06-75.27v14.95h-11.21v-14.95h11.21Zm-88.09-38.17h38.45v-5.25h15.55v15.31h-54.01v-10.06Zm76.88,189.34v-3.83h40.42v14.92h-10.22v-11.09h-30.21Zm-45.94,30.62h7.52v8.77h-7.52v-8.77Zm0,22.07h7.52v8.77h-7.52v-8.77Z'
            );
    }

    100% {
        clip-path: path('M400.21,112.61v-15.31H234.82v-9.04h52.51v-6.59h112.67V32.54h-33.6V6.06h-95.3V0H69.47V2.36H29.34V13.55h40.13v7.51H32.34v20.87h-12.38v10.18H0v36.15H19.96v49.37h18.2v23.05H13.82v11.8H.23v6.81H13.82v37.96h18.52v22.74H13.14v13.3h19.2v8.96h106.23v4.44H.23v26.8H61.69v30.62h-29.35v14.67H114.47v11.23H17.55v30.62h18.3v17.63h51.68v-17.63h26.94v11.98h143.72v5.65h141.81v-25.45h-114.47v-5.21h101.25v-.75h13.22v-8.29h-13.22v-29.24h-17.58v-10.32h30.72v-10.85h-30.72v-5.11h30.72v-31.26h-16.99v-29.1h17.08v-24.74h-60.14v-6.74h-24.11v-8.11h70.6v-61.25h-20.92v-29.24h34.78Zm-164.97,180.87v-8.94h88.66v12.37h-108.46v-3.43h19.79Zm-50.53-151.63v18.82h-30.76v-23.05h71.6v4.23h-40.84Z'
            );
    }
}

@keyframes shakingImgBlue {
    0% {
        transform: translate(-50%, -50%);
    }

    5% {
        transform: translate(-50.5%, -50.8%);
    }

    7% {
        transform: translate(-50%, -50%);
    }

    8% {
        transform: translate(-50.5%, -50.8%);
    }

    9% {
        transform: translate(-50%, -50%);
    }

    10% {
        transform: translate(-50.5%, -50.8%);
    }

    18% {
        transform: translate(-50%, -50%);
    }

    19% {
        transform: translate(-50.5%, -50.8%);
    }

    21% {
        transform: translate(-50%, -50%);
    }

    22% {
        transform: translate(-50.5%, -50.8%);
    }

    23% {
        transform: translate(-50%, -50%);
    }

    37% {
        transform: translate(-50.5%, -50.8%);
    }

    38% {
        transform: translate(-50%, -50%);
    }

    39% {
        transform: translate(-50.5%, -50.8%);
    }

    43% {
        transform: translate(-50%, -50%);
    }

    49% {
        transform: translate(-50.5%, -50.8%);
    }

    55% {
        transform: translate(-50%, -50%);
    }

    57% {
        transform: translate(-50.5%, -50.8%);
    }

    58% {
        transform: translate(-50%, -50%);
    }

    59% {
        transform: translate(-50.5%, -50.8%);
    }

    60% {
        transform: translate(-50%, -50%);
    }

    85% {
        transform: translate(-50.5%, -50.8%);
    }

    86% {
        transform: translate(-50%, -50%);
    }

    87% {
        transform: translate(-50.5%, -50.8%);
    }

    88% {
        transform: translate(-50%, -50%);
    }

    89% {
        transform: translate(-50.5%, -50.8%);
    }

    90% {
        transform: translate(-50%, -50%);
    }
}

@keyframes shakingImgRed {
    0% {
        transform: translate(-50%, -50%);
    }

    1% {
        transform: translate(-49.5%, -49.8%);
    }

    2% {
        transform: translate(-50%, -50%);
    }

    3% {
        transform: translate(-49.5%, -49.8%);
    }

    8% {
        transform: translate(-50%, -50%);
    }

    12% {
        transform: translate(-49.5%, -49.8%);
    }

    13% {
        transform: translate(-50%, -50%);
    }

    14% {
        transform: translate(-49.5%, -49.8%);
    }

    15% {
        transform: translate(-50%, -50%);
    }

    16% {
        transform: translate(-49.5%, -49.8%);
    }

    24% {
        transform: translate(-50%, -50%);
    }

    25% {
        transform: translate(-49.5%, -49.8%);
    }

    31% {
        transform: translate(-50%, -50%);
    }

    32% {
        transform: translate(-49.5%, -49.8%);
    }

    33% {
        transform: translate(-50%, -50%);
    }

    38% {
        transform: translate(-49.5%, -49.8%);
    }

    39% {
        transform: translate(-50%, -50%);
    }

    59% {
        transform: translate(-49.5%, -49.8%);
    }

    60% {
        transform: translate(-50%, -50%);
    }

    61% {
        transform: translate(-49.5%, -49.8%);
    }

    62% {
        transform: translate(-50%, -50%);
    }

    63% {
        transform: translate(-49.5%, -49.8%);
    }

    73% {
        transform: translate(-50%, -50%);
    }

    74% {
        transform: translate(-49.5%, -49.8%);
    }

    89% {
        transform: translate(-50%, -50%);
    }

    90% {
        transform: translate(-49.5%, -49.8%);
    }

    91% {
        transform: translate(-50%, -50%);
    }

    92% {
        transform: translate(-49.5%, -49.8%);
    }

    93% {
        transform: translate(-50%, -50%);
    }
}

@keyframes shakingImgGreen {
    0% {
        transform: translate(-50%, -50%);
    }

    1% {
        transform: translate(-50.5%, -48.8%);
    }

    2% {
        transform: translate(-50%, -50%);
    }

    3% {
        transform: translate(-50.5%, -48.8%);
    }

    4% {
        transform: translate(-50%, -50%);
    }

    5% {
        transform: translate(-50.5%, -48.8%);
    }

    6% {
        transform: translate(-50%, -50%);
    }

    7% {
        transform: translate(-50.5%, -48.8%);
    }

    21% {
        transform: translate(-50%, -50%);
    }

    24% {
        transform: translate(-50.5%, -48.8%);
    }

    29% {
        transform: translate(-50%, -50%);
    }

    33% {
        transform: translate(-50.5%, -48.8%);
    }

    39% {
        transform: translate(-50%, -50%);
    }

    40% {
        transform: translate(-50.5%, -48.8%);
    }

    41% {
        transform: translate(-50%, -50%);
    }

    42% {
        transform: translate(-50.5%, -48.8%);
    }

    55% {
        transform: translate(-50%, -50%);
    }

    56% {
        transform: translate(-50.5%, -48.8%);
    }

    57% {
        transform: translate(-50%, -50%);
    }

    62% {
        transform: translate(-50.5%, -48.8%);
    }

    63% {
        transform: translate(-50%, -50%);
    }

    78% {
        transform: translate(-50.5%, -48.8%);
    }

    79% {
        transform: translate(-50%, -50%);
    }

    80% {
        transform: translate(-50.5%, -48.8%);
    }

    81% {
        transform: translate(-50%, -50%);
    }

    82% {
        transform: translate(-50.5%, -48.8%);
    }

    95% {
        transform: translate(-50%, -50%);
    }
}

@keyframes fadeInImg {
    0% {
        opacity: 0;
    }

    1% {
        opacity: 1;
    }

    2% {
        opacity: 0;
    }

    3% {
        opacity: 1;
    }

    4% {
        opacity: 0;
    }

    5% {
        opacity: 1;
    }

    6% {
        opacity: 0;
    }

    7% {
        opacity: 1;
    }

    8% {
        opacity: 0;
    }

    9% {
        opacity: 1;
    }

    10% {
        opacity: 0;
    }

    11% {
        opacity: 1;
    }

    19% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    21% {
        opacity: 0;
    }

    22% {
        opacity: 1;
    }

    23% {
        opacity: 0;
    }

    24% {
        opacity: 1;
    }

    31% {
        opacity: 0;
    }

    32% {
        opacity: 1;
    }

    33% {
        opacity: 0;
    }

    34% {
        opacity: 1;
    }

    35% {
        opacity: 0;
    }

    36% {
        opacity: 1;
    }

    37% {
        opacity: 0;
    }

    38% {
        opacity: 1;
    }

    39% {
        opacity: 0;
    }

    40% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    51% {
        opacity: 1;
    }

    52% {
        opacity: 0;
    }

    53% {
        opacity: 1;
    }

    54% {
        opacity: 0;
    }

    55% {
        opacity: 1;
    }

    65% {
        opacity: 0;
    }

    66% {
        opacity: 1;
    }

    67% {
        opacity: 0;
    }

    68% {
        opacity: 1;
    }

    69% {
        opacity: 0;
    }

    80% {
        opacity: 1;
    }

    81% {
        opacity: 0;
    }

    82% {
        opacity: 1;
    }

    83% {
        opacity: 0;
    }

    84% {
        opacity: 1;
    }

    85% {
        opacity: 0;
    }

    86% {
        opacity: 1;
    }

    87% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@media screen and (orientation: portrait) and (max-width: 600px) {
    body>#root>section#about-me>div.middle__container>div#glitching-img-container>a.my__resume {
        width: 4rem;
        height: 4rem;
        top: -7rem;
    }

    body>#root>section#about-me>div.middle__container>div#glitching-img-container>a.my__resume>img {
        width: 2rem;
    }
}

@media screen and (orientation: landscape) and (max-width: 812px) {
    body>#root>section#about-me>div.middle__container>div#glitching-img-container>a.my__resume {
        top: 30rem;
        right: 17rem;
        height: 5rem;
    }
}

@media screen and (orientation: portrait) and (min-width: 600px) and (max-width: 992px) {
    body>#root>section#about-me>div.middle__container>div#glitching-img-container>a.my__resume {
        top: 32rem;
        right: -15rem;
        height: 4rem;
    }

    body>#root>section#about-me>div.middle__container>div#glitching-img-container>a.my__resume>img {
        width: 2rem;
    }
}

@media screen and (max-width: 768px) {
    #glitching-img-container {
        width: 20rem;
    }

    #glitching-img-container .imgWrap img {
        width: 100%;
        object-fit: contain;
        object-position: center;
    }

    #glitching-img-container .imgWrap .text {
        font-size: 14px;
    }
}
</style>
