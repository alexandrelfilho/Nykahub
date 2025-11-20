// ARQUIVO: theme-switcher.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');
    
    // Seleciona o elemento <i> que está dentro do botão
    // Se o elemento for null, significa que não há botão de tema na página, então para a execução.
    if (!toggleButton) return; 

    const themeIcon = toggleButton.querySelector('i');

    // Função para definir o botão (Ícone e Título)
    function setButtonState(isDarkMode) {
        if (!themeIcon) return; // Garante que o ícone existe

        if (isDarkMode) {
            // Se ESTÁ em modo escuro, mostre o SOL (ícone de luz)
            themeIcon.classList.remove('fa-moon'); // Remove Lua
            themeIcon.classList.add('fa-sun');    // Adiciona Sol
            toggleButton.title = 'Ativar Modo Claro';
        } else {
            // Se ESTÁ em modo claro, mostre a LUA (ícone de escuridão)
            themeIcon.classList.remove('fa-sun');     // Remove Sol
            themeIcon.classList.add('fa-moon');       // Adiciona Lua
            toggleButton.title = 'Ativar Modo Escuro';
        }
    }

    // 1. Verificar a preferência salva ao carregar a página
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        setButtonState(true); // Está em dark mode
    } else {
        setButtonState(false); // Está em light mode (padrão)
    }

    // 2. Lógica de clique no botão
    toggleButton.addEventListener('click', () => {
        // Alternar a classe dark-mode no body
        body.classList.toggle('dark-mode');

        // Verificar o novo estado
        const isCurrentlyDarkMode = body.classList.contains('dark-mode');

        if (isCurrentlyDarkMode) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        
        // Chamar a função para atualizar o botão
        setButtonState(isCurrentlyDarkMode);
    });
});