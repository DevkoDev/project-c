 window.addEventListener('scroll', function () {
                var scrollPosition = window.scrollY;
                var windowHeight = window.innerHeight;
                var div = document.getElementById('myDiv');
                var Scale = 1 - (scrollPosition / (windowHeight * 4))
                var Rotate = 60 * (scrollPosition / (windowHeight * 4))
                div.style.transform = 'perspective(1200px) translateX(0px) translateY(0px) scale(' + Scale +
                    ') rotate(0deg) rotateX(' + Rotate + 'deg) rotateY(0deg) translateZ(0px)';
            });
            var slideIndex = 0;
            carousel();

            function carousel() {
                var i;
                var x = document.getElementsByClassName("mySlides");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > x.length) {
                    slideIndex = 1
                }
                x[slideIndex - 1].style.display = "block";
                setTimeout(carousel, 500);
            }