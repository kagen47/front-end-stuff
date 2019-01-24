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
    document.querySelectorAll('.fes.fixed-centerable-container').forEach(function (elem) {
        elem.style.width = elem.offsetWidth + 'px';
        elem.style.height = elem.offsetHeight + 'px';

        var fixedCenterable = elem.querySelector('.fixed-centerable');
        fixedCenterable.fesOrigOffsetTop = fixedCenterable.offsetTop;
        fixedCenterable.fesOrigLeft = fixedCenterable.offsetLeft + 'px';
        fixedCenterable.addEventListener('click', function () {
            console.log("fixed centerable clicked");
            console.log(this);

            if (!this.classList.contains('active')) {
                console.log("not active");
                this.style.position = 'fixed';
                this.style.top = this.fesOrigOffsetTop - window.pageYOffset + 'px';
                this.style.left = this.fesOrigLeft;

                this.classList.add('active');
                var that = this;
                setTimeout(function () {
                    that.style.top = '50%';
                    that.style.left = '50%';
                    that.style.transform = 'translate(-50%, -50%)';
                    that.style.webkitTransform = 'translate(-50%, -50%)';
                }, 50);
            } else {
                console.log('is active');
                this.style.top = this.fesOrigOffsetTop - window.pageYOffset + 'px';
                this.style.left = this.fesOrigLeft;
                this.style.transform = 'none';
                this.style.webkitTransform = 'none';
                var that = this;
                setTimeout(function () {
                    that.style.position = 'relative';
                    that.style.top = '0';
                    that.style.left = '0';
                    that.classList.remove('active');
                }, 300);
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
            console.log("background overlay trigger clicked")

            if (!this.backgroundOverlay.classList.contains('active')) {
                this.backgroundOverlay.classList.add('active');
            }
        });

        elem.addEventListener('click', function () {
            console.log("background overlay clicked");

            if (this.classList.contains('active')) {
                this.classList.remove('active');
            }
        })

    });
}