
function Slider() {
    this.imagesUrls = [];
    this.currentImageIndex = 0;

    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;
    this.start = function (elId) {
        var that = this;

        var elSelector = '#' + elId;

        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');

        // subscribe to events
        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);
        });
        //create images array 

        this.imagesUrls.push('https://avatars.mds.yandex.net/get-zen_doc/1602847/pub_5e8b1acb0091cb7604587014_5e8b1c348e13467f02b349d9/scale_1200');
        this.imagesUrls.push('https://img.8wallpapers.com/uploads/2019/04/a9aaf2fce6dc47cdba7a04dd.jpg');
        this.imagesUrls.push('https://i.pinimg.com/originals/05/5d/e8/055de8dde1b1b0b1b74f1f9d3c370936.jpg');
        this.imagesUrls.push('https://get.wallhere.com/photo/car-vehicle-sports-car-2012-netcarshow-netcar-car-images-car-photo-Barnard-BTR7-supercar-land-vehicle-automotive-design-race-car-automobile-make-open-wheel-car-sports-prototype-378031.jpg');


        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };
    this.onShowPrevBtnClick = function (e) {
        console.log('prev-clicked');
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }

    }; 
    this.onShowNextBtnClick = function (e) {

        console.log('next-clicked');
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    };
}   
