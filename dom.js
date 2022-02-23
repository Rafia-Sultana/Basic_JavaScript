document.getElementById('add-border').addEventListener('click', function () {

    const container = document.getElementById('friend-container');
    container.style.border = '5px solid yellow';
})

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `<h4 class="friend-name">New friends</h4>
   <p>lorem2</p>
   `;
    container.appendChild(friendDiv);
})