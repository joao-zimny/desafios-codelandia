export default function preencherCoracao() {
    const icon = document.querySelectorAll('#icon');
    
    if (icon.length) {
        function handleClick(item) {
            console.log(item.target);
            item.target.setAttribute('src', '/img/heart-filled.svg');
        }
        
        icon.forEach((item) => {
            console.log(item);
            item.addEventListener('click', handleClick);
        })
    }
}