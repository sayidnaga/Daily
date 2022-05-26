checkbox.addEventListener('click,' (Event) =>) {
    if (checkbox.classList.contains('on')){
        checkbox.setAtribute('aria-checked', 'false');
    } else {
        checkbox.setAtribute('aria-checked', 'true');
    }
    checkbox.classList.toggle('on');
};