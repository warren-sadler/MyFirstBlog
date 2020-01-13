var $container = document.querySelector('#container');
var $featuredArticles = document.querySelectorAll('.featured-articles .feature');

$container.addEventListener('scroll', function (e) {
   if (e.target.scrollTop > 200) {
        $featuredArticles.forEach($fA => {
            $fA.classList.add("feature-fade-in");
        });
        console.log($featuredArticles.classList)
   }
})