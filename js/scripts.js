const carouselFunctionality = () =>{
    const myCarousel = $('#myCarousel');

    myCarousel.carousel({interval: 2000});

    const carouselStates = {
        pause: 'pause',
        cycle: 'cycle'
    };

    myCarousel.data('prevState', carouselStates.cycle);

    const carouselBtn = $('#carousel_btn');
    const btnIcon = carouselBtn.children('span');


    const pauseCarousel = () => {
        myCarousel.carousel(carouselStates.pause);
        btnIcon.removeClass('fa-pause');
        carouselBtn.removeClass('btn-danger');
        carouselBtn.addClass('btn-success');
        btnIcon.addClass('fa-play');
        myCarousel.data('prevState', carouselStates.pause);
    }
    const cycleCarousel = () => {
        myCarousel.carousel(carouselStates.cycle);
        btnIcon.removeClass('fa-play');
        carouselBtn.removeClass('btn-success');
        carouselBtn.addClass('btn-danger');
        btnIcon.addClass('fa-pause');
        myCarousel.data('prevState', carouselStates.cycle);
    }

    carouselBtn.click(() => {
        const prevState = myCarousel.data('prev-state');

        switch (prevState) {
            case carouselStates.cycle:
                pauseCarousel();
                break;
            default:
                cycleCarousel();
        }
    });
}
const modalFunctionality = () => {
    const loginBtn = $('#login_btn');
    const reserveTableBtn = $('#reserve_table_btn');
    const reservationModal = $('#reservation_modal');
    const loginModal = $('#login_modal');


    loginBtn.click(()=>{
        loginModal.modal();
    })
    reserveTableBtn.click(()=>{
        reservationModal.modal();
    })

}
$(document).ready(() => {
    carouselFunctionality();
    modalFunctionality();
})
