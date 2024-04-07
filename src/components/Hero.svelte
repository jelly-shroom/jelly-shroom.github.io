<div class="contents" id="scaleOnScroll">
    <div id="main-head-wrapper">
        <h1>hi! i'm jessica, and i design</h1>

        <div class="text"></div>
        <!-- SVG GOOEY FILTER-->
        <svg>
            <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -8"
                    result="gooey"></feColorMatrix>
                <feComposite in="SourceGraphic" in2="gooey" operator="atop"></feComposite>
            </filter>
        </svg>
    </div>


    <div class="bottomContentWrapper">
        <h2>welcome to my creative hub :)</h2>

        <ul>
            <li>spatial design</li>
            <li>product design</li>
            <li>ui design</li>
            <li>...and more!</li>
        </ul>

        <a class='button' href=placeholder-nav-link.html>donwload resume</a>
    </div>
</div>