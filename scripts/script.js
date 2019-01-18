function initExpandable() {
    document.querySelectorAll('.fes.expandable').forEach(function (elem) {
        elem.fesOrigWidth = elem.offsetWidth + 'px';
        elem.fesOrigHeight = elem.offsetHeight + 'px';
        elem.style.width = elem.fesOrigWidth;
        elem.style.height = elem.fesOrigHeight;

        elem.addEventListener('click', function (ev) {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.style.width = this.fesOrigWidth;
                this.style.height = this.fesOrigHeight;
            } else {
                this.classList.add('active');
                this.style.width = this.offsetWidth + 'px';
                this.style.height = this.offsetHeight + 'px';
                this.style.width = this.dataset.expandedWidth;
                this.style.height = this.dataset.expandedHeight;
            }
        });
    });
}

function initFixedCenterable() {
    document.querySelectorAll('.fes.fixed-centerable').forEach(function (elem) {
        elem.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                var top = this.offsetTop - window.pageYOffset + 'px';
                var left = this.offsetLeft + 'px';
                this.style.position = 'fixed';
                this.style.top = top;
                this.style.left = left;
                console.log(top);
                this.classList.add('active');
                
                this.style.left = '50%';
            } else {
                this.classList.remove('active');
            }
        });
    });
}

function initBackgroundOverlay() {
    document.querySelectorAll('.fes.background-overlay').forEach(function (elem) {
        var trigger = document.querySelector(elem.dataset.trigger);
        trigger.backgroundOverlay = elem;
        console.log(trigger);

        trigger.addEventListener('click', function () {
            console.log('here');
            if (!this.backgroundOverlay.classList.contains('active')) {
                this.backgroundOverlay.classList.add('active');
            }
        });

        elem.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            }
        })

    });
}