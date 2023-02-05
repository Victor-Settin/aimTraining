const helloButton = jQuery("#open-modal");
const modalConfigLevel = jQuery("#modal-levels");
const ModalConfigBackdrop = jQuery("#hello-backdrop");

btnLevels = jQuery(".button-level");

helloButton.click(function () {
    modalConfigLevel.css("display", "block");
    ModalConfigBackdrop.css("display", "block");
});

ModalConfigBackdrop.click(function () {
    modalConfigLevel.css("display", "none");
    ModalConfigBackdrop.css("display", "none");
});
btnLevels.click(function () {
    modalConfigLevel.css("display", "none");
    ModalConfigBackdrop.css("display", "none");
});
