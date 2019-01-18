function initExpandableItem() {
    document.querySelectorAll('.fes-expandable-item').forEach(function (elem) {
        elem.style.width = elem.offsetWidth + 'px';
        elem.style.height = elem.offsetHeight + 'px';

        elem.addEventListener('click', function (ev) {
            this.classList.add('active');
            console.log(this.style.width);
            this.style.width = this.dataset.expandedWidth;
            this.style.height = this.dataset.expandedHeight;
            console.log(this.dataset.expandedWidth);
        });
    });
}