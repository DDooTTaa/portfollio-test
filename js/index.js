const persist = 2500;
const textIds = ["text_1", "text_2", "text_3"];

const turnOnTransition = (el) => {
    el.classList.add("transitionOn");
    setTimeout(() => {
        el.classList.remove("transitionOn");
    }, persist);
};

const runTransition = (id) => {
    const el = document.getElementById(id);

    if (el) {
        setTimeout(() => {
            turnOnTransition(el);

            setInterval(() => {
                turnOnTransition(el);
            }, persist * textIds.length);
        }, 1);
    }
};

textIds.forEach((id, index) => {
    setTimeout(() => {
        runTransition(id);
    }, index * persist);
});