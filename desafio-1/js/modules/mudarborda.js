export default function mudarBorda() {
    const section = document.querySelectorAll('section');
    if (section.length) {
        function handleClick(item) {
            section.forEach((item) => {
                item.classList.remove('ativo');
            });
            item.currentTarget.classList.toggle('ativo');
        }
        
        section.forEach((section) => {
            section.addEventListener('click', handleClick);
        })
    }
}