function openTab(event, tabName) {
    
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

   
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.add('active');
    }

   
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    } else {
        // En caso de llamarlo desde un botón interno
        const targetBtn = Array.from(buttons).find(btn => 
            btn.getAttribute('onclick').includes(tabName)
        );
        if (targetBtn) targetBtn.classList.add('active');
    }
}