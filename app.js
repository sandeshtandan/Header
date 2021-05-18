function openNav() {

    document.getElementById('orderList').style.width = '100%';
    document.getElementById('home').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('blog').style.display = 'block';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('bars').style.display = 'none';
    document.getElementById('times').style.display = 'block'
}

function closeNav() {
    document.getElementById('orderList').style.width = '0%';
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('bars').style.display = 'block';

}
