export default function mudarBorda() {
    const section = document.querySelectorAll('section');
    if (section.length) {
        function handleClick(item) {
            section.forEach((item) => {
                item.classList.remove('ativo');
            });
            item.target.classList.toggle('ativo');
        }
        
        section.forEach((section) => {
            section.addEventListener('click', handleClick);
        })
    }
}