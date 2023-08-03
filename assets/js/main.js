window.addEventListener('DOMContentLoaded', (event) => {
    const headings = document.querySelectorAll("h2, h3, h4");
    const headingsIndexes = [];

    Array.prototype.forEach.call(headings, function(e) {
        headingsIndexes[e.id] = e.offsetTop;
    });

    window.onscroll = function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (let i in headingsIndexes) {
            if (headingsIndexes[i] <= scrollPosition) {
                setActive(document.querySelector('a[href*=' + i + ']'));
            }
        }
    };

    const links = document.querySelectorAll('#toc a');
    for (let link of links) {
        link.addEventListener('click', () => {
            setTimeout(() => setActive(link), 500);
        });
    }
});

function setActive(elem) {
    const activeLink = document.querySelector('.active');
    if (activeLink) {
        activeLink.setAttribute('class', ' ');
    }
    elem.setAttribute('class', 'active');
}