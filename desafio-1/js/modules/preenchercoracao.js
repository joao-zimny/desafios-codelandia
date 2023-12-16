export default function preencherCoracao() {
    const icon = document.querySelectorAll('#icon');
    
    if (icon.length) {
        function handleClick(item) {
            if (item.target.getAttribute('src') === '/img/heart.svg') {
                item.target.setAttribute('src', '/img/heart-filled.svg');
            } else {
                item.target.setAttribute('src', '/img/heart.svg');
            }
        }
        
        icon.forEach((item) => {
            item.addEventListener('click', handleClick);
        });
    }
}