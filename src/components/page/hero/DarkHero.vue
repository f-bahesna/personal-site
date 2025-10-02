<template>
    <main class="wrapper">
        <div class="grid-lines">
            <div
                class="hero-container container flex flex-col px-6 pt-12 sm:py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
                <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
                    <div class="max-w-lg md:mx-12 md:order-2 text-center sm:text-left">
                        <h1 class="text-3xl font-medium tracking-wide md:text-6xl" alt="frada">Hi! <span
                                class="font-bold font-serif">I'm
                                Frada</span></h1>
                        <p class="mt-4 font-sans text-2xl" alt="introducing lianum frada bahesna">Software Engineer
                            Specialized
                            in
                            Backend <br>
                            Currently
                            working at a Fintech Startup based in <span class="text-3xl font-serif">INDONESIA</span></p>
                        <div class="mt-4 sm:mt-9">
                            <a href="#"
                                class="block px-12 py-4 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-sm md:inline hover:bg-blue-400">Get
                                in touch</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full h-96 md:w-1/2">
                    <img class="object-cover w-1/2 h-1/2 sm:h-full max-w-2xl -mt-12 sm:mt-0 rounded-md"
                        src="https://res.cloudinary.com/jadikaya-9/image/upload/v1654046018/fbahesna/frada_plpkkn.jpg"
                        alt="lianum frada bahesna">
                </div>
            </div>
            <div class="grid-lines_cursor-position">
                <div class="grid-lines_cursor">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "DarkHero",
}
// document.addEventListener('DOMContentLoaded', () => {
//     const cursorPosition = document.querySelector('.grid-lines_cursor-position');

//     if (cursorPosition) {
//         let targetX = 0, targetY = 0;
//         let currentX = 0, currentY = 0;

//         document.addEventListener('mousemove', (e) => {
//             targetX = e.clientX;
//             targetY = e.clientY;
//         });

//         function animate() {
//             currentX += (targetX - currentX) * 0.1;
//             currentY += (targetY - currentY) * 0.1;

//             cursorPosition.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale3d(1, 1, 1)`;

//             requestAnimationFrame(animate);
//         }

//         animate();
//     }
// });
</script>

<style scoped>
.wrapper {
    position: relative;
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #222;
}

.grid-lines {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.grid-lines_cursor-position {
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    will-change: transform;
    pointer-events: none;
}

.grid-lines_cursor {
    aspect-ratio: 1;
    width: 400px;
    border-radius: 50%;
    background-image: radial-gradient(circle farthest-corner at 50% 50%,
            var(--grid-highlight, rgba(0, 170, 255, 0.3)) 10%,
            transparent 70%);
    position: absolute;
    top: -200px;
    left: -200px;
    opacity: 1;
    filter: blur(70px);
    pointer-events: none;
}
</style>
