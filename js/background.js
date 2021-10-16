const TOTAL_IMG = 10;

function handleInitBtn() {
    if (
        confirm(
            "모든 정보가 삭제됩니다. 진행 하시겠습니까?\nAll information will be deleted. Do you want to proceed?"
        )
    ) {
        localStorage.clear();
        location.reload();
    }
}

function init() {
    document.querySelector(".initBtn").addEventListener("click", handleInitBtn);
    setBackground();
}

init();
